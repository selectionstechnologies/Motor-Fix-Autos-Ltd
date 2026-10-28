import { business } from '../data/business';
import { services } from '../data/services';
import { closedDays, londonNow, weekdayOf } from './hours';
import { hasWhatsApp, waLink } from './whatsapp';

// ── UK phone numbers ──
// Mobiles 07xxx xxxxxx and landlines 01/02/03, with 0, +44 or 0044 in front
export const normalisePhone = (v) => v.replace(/[\s\-().]/g, '');
export const isUkPhone = (v) => /^(?:\+44|0044|0)(?:7\d{9}|[123]\d{8,9})$/.test(normalisePhone(v));

// ── UK registration plates ──
const REG_PATTERNS = [
  { re: /^[A-Z]{2}\d{2}[A-Z]{3}$/, split: 4 }, // current: AB12 CDE
  { re: /^[A-Z]\d{1,3}[A-Z]{3}$/, split: -3 }, // prefix: A123 BCD
  { re: /^[A-Z]{3}\d{1,3}[A-Z]$/, split: 3 }, // suffix: ABC 123D
  { re: /^[A-Z]{1,3}\d{1,4}$/, split: 'letters' }, // dateless / Northern Ireland: ABC 1234
  { re: /^\d{1,4}[A-Z]{1,3}$/, split: 'digits' }, // dateless reversed: 1234 AB
];

const compactReg = (v) => v.toUpperCase().replace(/[^A-Z0-9]/g, '');

export const isUkReg = (v) => REG_PATTERNS.some((p) => p.re.test(compactReg(v)));

// Uppercase with a single space in the usual place, e.g. "ab12cde" -> "AB12 CDE"
export function formatReg(v) {
  const c = compactReg(v);
  const p = REG_PATTERNS.find((x) => x.re.test(c));
  if (!p) return v.toUpperCase().replace(/\s+/g, ' ').trim();
  let at = p.split;
  if (at === 'letters') at = c.search(/\d/);
  if (at === 'digits') at = c.search(/[A-Z]/);
  if (at < 0) at = c.length + at;
  return `${c.slice(0, at)} ${c.slice(at)}`;
}

export const timeSlots = [
  { value: 'morning', label: 'Morning' },
  { value: 'afternoon', label: 'Afternoon' },
];

export const emptyBooking = {
  name: '', phone: '', email: '', reg: '', vehicle: '', service: '', date: '', time: '', message: '', consent: false,
};

export const MESSAGE_MAX = 500;

export function validateBooking(v) {
  const e = {};
  const name = v.name.trim();
  if (name.length < 2) e.name = 'Please enter your name.';
  else if (!/^[\p{L}\s.'-]+$/u.test(name)) e.name = 'Your name can only contain letters, spaces, hyphens and apostrophes.';

  if (!v.phone.trim()) e.phone = 'Please enter a phone number so we can confirm.';
  else if (!isUkPhone(v.phone)) e.phone = 'Enter a UK number, for example 07123 456789 or 0161 273 4365.';

  if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Enter a valid email address, or leave it blank.';

  if (!v.reg.trim()) e.reg = 'Please enter your registration.';
  else if (!isUkReg(v.reg)) e.reg = 'Enter a UK registration, for example AB12 CDE.';

  if (v.vehicle.trim().length < 2) e.vehicle = 'Please enter the make and model, for example BMW 320d.';
  if (!v.service) e.service = 'Please choose a service.';

  if (!v.date) e.date = 'Please choose a preferred date.';
  else if (v.date < londonNow().iso) e.date = 'That date has passed. Please choose a future date.';
  else if (closedDays.includes(weekdayOf(v.date))) e.date = `We are closed on ${weekdayOf(v.date)}s. Please choose another day.`;

  if (!v.time) e.time = 'Please choose morning or afternoon.';
  if (v.message.length > MESSAGE_MAX) e.message = `Please keep your message to ${MESSAGE_MAX} characters or fewer.`;
  if (!v.consent) e.consent = 'Please tick to confirm you have read the privacy policy.';
  return e;
}

export function buildBookingMessage(v) {
  const service = services.find((s) => s.slug === v.service)?.title ?? v.service;
  const date = new Date(`${v.date}T12:00:00Z`).toLocaleDateString('en-GB', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
  });
  const time = timeSlots.find((t) => t.value === v.time)?.label ?? v.time;
  const reg = formatReg(v.reg);
  const lines = [
    `Hello ${business.shortName},`,
    '',
    'I would like to book my vehicle in.',
    '',
    `Name: ${v.name.trim()}`,
    `Phone: ${v.phone.trim()}`,
    v.email.trim() ? `Email: ${v.email.trim()}` : null,
    `Registration: ${reg}`,
    `Vehicle: ${v.vehicle.trim()}`,
    `Service: ${service}`,
    `Preferred date: ${date}`,
    `Preferred time: ${time}`,
    v.message.trim() ? `Message: ${v.message.trim()}` : null,
    '',
    'Sent from the booking form on motorfixautos.com',
  ].filter((l) => l !== null);
  return { subject: `Booking request: ${service}, ${reg}`, body: lines.join('\n') };
}

// The one place a booking leaves the site. To switch to a real API later, POST `values` here
// and return { channel: 'api' }; the form already shows the success state from the return value.
export async function submitBooking(values) {
  const { subject, body } = buildBookingMessage(values);
  if (hasWhatsApp) {
    window.open(waLink(body), '_blank', 'noopener');
    return { channel: 'whatsapp', body };
  }
  window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return { channel: 'email', body };
}
