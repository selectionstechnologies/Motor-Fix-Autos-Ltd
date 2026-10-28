import { business, schedule, hoursSummary } from './business';
import { services, serviceHref } from './services';
import { formatDayHours } from '../lib/hours';

// Rule-based assistant: runs fully in the browser, no API, no key.
// A reply is { text, links?: [{ label, to }], actions?: [{ label, href, kind: 'whatsapp' | 'tel' | 'map' }] }

export const greeting = {
  text: `Hi, I am the ${business.shortName} assistant. I can help with opening hours, MOTs, booking, directions and bodywork quotes.`,
};

export const quickReplies = ['Opening hours', 'Book an MOT', 'Bodywork quote', 'Where are you?', 'Talk to a person'];

const call = { label: `Call ${business.phone}`, href: business.phoneHref, kind: 'tel' };
const callMobile = { label: `Call ${business.mobile}`, href: business.mobileHref, kind: 'tel' };
const wa = business.whatsapp ? { label: 'WhatsApp us', href: `https://wa.me/${business.whatsapp}`, kind: 'whatsapp' } : null;
const directions = { label: 'Get directions', href: business.directionsLink, kind: 'map' };
const contactActions = [call, wa].filter(Boolean);

const intents = [
  {
    id: 'breakdown',
    priority: 100,
    keywords: ['breakdown', 'broken down', 'broke down', 'break down', 'stranded', 'stuck on', 'crash', 'crashed', 'accident on', 'smoke', 'fire', 'on fire', 'motorway', 'hard shoulder', 'wont start', "won't start", 'recovery', 'tow'],
    reply: () => ({
      text: 'If anyone is in danger, or you are stopped in a live lane, call 999 now.\n\nIf you are safe and need help getting the car to us, call the garage and we will tell you what we can arrange.',
      actions: [{ label: 'Call 999', href: 'tel:999', kind: 'tel' }, call],
    }),
  },
  {
    id: 'greeting',
    keywords: ['hi', 'hello', 'hey', 'hiya', 'morning', 'afternoon', 'evening', 'alright'],
    reply: () => ({ text: 'Hello! What can I help with? You can ask about opening hours, MOTs, booking or bodywork.' }),
  },
  {
    id: 'hours',
    keywords: ['hours', 'open', 'opening', 'close', 'closed', 'closing', 'today', 'tomorrow', 'when', 'time', 'times', 'saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'bank holiday'],
    reply: (input) => {
      const asked = schedule.find((h) => input.includes(h.day.toLowerCase()));
      const lead = asked ? `${asked.day}: ${formatDayHours(asked)}` : hoursSummary;
      return {
        text: `${lead}\n\nFull week:\n${schedule.map((h) => `${h.day}: ${formatDayHours(h)}`).join('\n')}\n\nHours can change on bank holidays, so please call before you travel!`,
        links: [{ label: 'Opening hours page', to: '/opening-hours' }],
        actions: [call],
      };
    },
  },
  {
    id: 'mot',
    keywords: ['mot', 'mots', 'test', 'retest', 'advisory', 'advisories', 'failed', 'fail', 'pass', 'certificate', 'van mot', 'class 4', 'class 7'],
    reply: () => ({
      text: 'We carry out MOTs on cars and vans. You can have an MOT up to a month (minus a day) early and keep the same renewal date. If anything fails, we can quote for repairs in the same workshop.',
      links: [{ label: 'MOT details', to: '/mot' }, { label: 'Book an MOT', to: '/book?service=mot' }],
    }),
  },
  {
    id: 'book',
    keywords: ['book', 'booking', 'appointment', 'slot', 'reserve', 'bring it in', 'drop off', 'availability', 'available'],
    reply: () => ({
      text: 'Fill in the booking form with your registration, the service you need and a preferred day. We will contact you to confirm. Or call us to book over the phone.',
      links: [{ label: 'Open booking form', to: '/book' }],
      actions: contactActions,
    }),
  },
  {
    id: 'bodywork',
    keywords: ['bodywork', 'body', 'dent', 'dents', 'scratch', 'scratches', 'paint', 'respray', 'bumper', 'panel', 'scuff', 'alloy', 'alloys', 'wheel refurb', 'insurance', 'claim', 'estimate', 'quote', 'quotes', 'price', 'prices', 'cost', 'how much'],
    reply: (input) => {
      const isBody = /dent|scratch|paint|respray|bumper|panel|scuff|alloy|bodywork|body|insurance|claim/.test(input);
      return isBody
        ? {
            text: 'Bodywork estimates are free. Bring the car in, or call us and we can give you a first idea from photos. A final price needs us to see the car.',
            links: [{ label: 'Bodywork & paint', to: '/bodywork' }, { label: 'Request an estimate', to: '/book?service=dent-and-scratch-repair' }],
            actions: contactActions,
          }
        : {
            text: 'Prices depend on the car and the job, so we quote before any work. Call us with your registration for a quote.',
            actions: contactActions,
          };
    },
  },
  {
    id: 'location',
    keywords: ['where', 'location', 'address', 'map', 'directions', 'direction', 'postcode', 'find you', 'parking', 'park', 'get there'],
    reply: () => ({
      text: `${business.name}\n${business.addressLine}${business.parking ? `\n\n${business.parking}` : '\n\nCall us if you need help finding the workshop.'}`,
      links: [{ label: 'Contact page', to: '/contact' }],
      actions: [directions],
    }),
  },
  {
    id: 'services',
    keywords: ['service', 'services', 'servicing', 'repair', 'repairs', 'do you do', 'what do you', 'diagnostic', 'diagnostics', 'tyre', 'tyres', 'brakes', 'clutch', 'dpf', 'egr', 'air con', 'aircon', 'welding', 'german', 'bmw', 'mercedes', 'audi', 'vw', 'volkswagen', 'seat', 'skoda'],
    reply: () => ({
      text: `We service and repair all makes, with specialist experience of BMW, Mercedes-Benz, Audi, VW, SEAT and Škoda. Our services:\n${services.map((s) => `• ${s.title}`).join('\n')}`,
      links: [{ label: 'All services', to: '/services' }],
    }),
  },
  {
    id: 'human',
    keywords: ['human', 'person', 'someone', 'staff', 'talk', 'speak', 'call', 'phone', 'number', 'contact', 'email', 'mechanic', 'whatsapp'],
    reply: () => ({
      text: `Call the workshop on ${business.phone} or mobile ${business.mobile}, or email ${business.email}.`,
      actions: [call, callMobile, wa].filter(Boolean),
    }),
  },
  {
    id: 'thanks',
    keywords: ['thanks', 'thank you', 'thank', 'cheers', 'ta'],
    reply: () => ({ text: 'You are welcome. Anything else, just ask.' }),
  },
];

// Service-specific keywords, so "dpf light" links straight to the right page
const serviceKeywords = {
  'dpf-cleaning': ['dpf', 'particulate', 'limp mode'],
  'egr-cleaning': ['egr'],
  'air-conditioning': ['air con', 'aircon', 'air conditioning', 're-gas', 'regas', 'ac'],
  diagnostics: ['engine light', 'warning light', 'check engine', 'fault code', 'diagnostic', 'diagnostics'],
  tyres: ['tyre', 'tyres', 'puncture', 'flat tyre'],
  'brakes-and-clutch': ['brake', 'brakes', 'clutch', 'flywheel', 'pads', 'discs'],
  welding: ['weld', 'welding', 'rust', 'sill', 'sills'],
  'alloy-wheel-refurbishment': ['alloy', 'alloys', 'kerbed', 'wheel refurb'],
};

const normalize = (s) =>
  ` ${s.toLowerCase().replace(/[^a-z0-9'\s-]/g, ' ').replace(/\s+/g, ' ').trim()} `;

const hits = (text, keywords) =>
  keywords.reduce((n, k) => (text.includes(` ${k} `) ? n + 1 : n), 0);

export function getReply(raw) {
  const text = normalize(raw);

  const ranked = intents
    .map((i) => ({ i, score: hits(text, i.keywords) * (i.priority ?? 1) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score);

  if (ranked[0]?.i.id === 'breakdown') return ranked[0].i.reply(text);

  const serviceSlug = Object.keys(serviceKeywords).find((slug) => hits(text, serviceKeywords[slug]) > 0);
  if (serviceSlug && (!ranked.length || ['services', 'book', 'bodywork'].includes(ranked[0].i.id))) {
    const s = services.find((x) => x.slug === serviceSlug);
    return {
      text: `${s.title}: ${s.short}\n\nWe quote before any work. Book in or call us with your registration.`,
      links: [
        { label: s.title, to: serviceHref(s) },
        { label: 'Book this', to: `/book?service=${s.slug}` },
      ],
    };
  }

  if (ranked.length) return ranked[0].i.reply(text);

  return {
    text: 'Sorry, I did not catch that. I can help with opening hours, MOTs, booking, directions and bodywork quotes. For anything else, the team can help by phone.',
    actions: contactActions,
  };
}
