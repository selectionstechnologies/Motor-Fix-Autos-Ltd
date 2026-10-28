import { useEffect, useState } from 'react';
import { schedule } from '../data/business';

const TZ = 'Europe/London';

const toMinutes = (hhmm) => {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
};

// "18:00" -> "6pm", "08:30" -> "8:30am"
export const formatTime = (hhmm) => {
  const [h, m] = hhmm.split(':').map(Number);
  const suffix = h >= 12 ? 'pm' : 'am';
  const h12 = h % 12 || 12;
  return m ? `${h12}:${String(m).padStart(2, '0')}${suffix}` : `${h12}${suffix}`;
};

export const formatDayHours = (d) => {
  if (d.closed) return 'Closed';
  if (d.open) return `${formatTime(d.open)} – ${formatTime(d.close)}`;
  return `Closes ${formatTime(d.close)}`;
};

export const closedDays = schedule.filter((d) => d.closed).map((d) => d.day);

// Current weekday, minutes past midnight and ISO date in UK time, whatever the visitor's timezone
export function londonNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: TZ, weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(date);
  const get = (type) => parts.find((p) => p.type === type).value;
  return { day: get('weekday'), minutes: Number(get('hour')) * 60 + Number(get('minute')), iso: `${get('year')}-${get('month')}-${get('day')}` };
}

// Weekday name of an ISO date (YYYY-MM-DD), independent of the visitor's timezone
export const weekdayOf = (iso) => new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-GB', { weekday: 'long', timeZone: 'UTC' });

function nextOpenDay(today) {
  const i = schedule.findIndex((d) => d.day === today);
  for (let step = 1; step <= 7; step += 1) {
    const d = schedule[(i + step) % 7];
    if (!d.closed) return step === 1 ? 'tomorrow' : d.day;
  }
  return null;
}

export function getHoursStatus(now = londonNow()) {
  const today = schedule.find((d) => d.day === now.day);
  const next = nextOpenDay(now.day);
  const reopen = next ? `Open ${next}` : '';
  if (!today || today.closed) return { open: false, label: 'Closed today', detail: reopen };
  if (today.open && now.minutes < toMinutes(today.open)) return { open: false, label: 'Opens today', detail: `from ${formatTime(today.open)}` };
  if (now.minutes < toMinutes(today.close)) return { open: true, label: 'Open today', detail: `closes ${formatTime(today.close)}` };
  return { open: false, label: 'Closed now', detail: reopen };
}

// Live status after mount; null during prerender and hydration so server and client HTML match
export function useHoursStatus() {
  const [status, setStatus] = useState(null);
  useEffect(() => {
    const tick = () => setStatus({ ...getHoursStatus(), today: londonNow().day });
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);
  return status;
}
