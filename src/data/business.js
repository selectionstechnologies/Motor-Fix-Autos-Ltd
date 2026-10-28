// Business facts. Verified from the Google Business profile and the shop signage unless marked TODO(client).

export const SITE_URL = 'https://www.motorfixautos.com';

const mapQuery = encodeURIComponent('Motor Fix Autos Ltd, Wadeson Road, Manchester M13 9UG');

export const business = {
  name: 'Motor Fix Autos Ltd',
  shortName: 'Motor Fix Autos',
  positioning: 'German vehicle specialists',
  tagline: 'Servicing, MOTs, diagnostics and bodywork for every make, with specialist know-how for BMW, Mercedes-Benz, Audi, VW, SEAT and Škoda.',

  phone: '0161 273 4365',
  phoneIntl: '+44 161 273 4365',
  phoneHref: 'tel:+441612734365',
  mobile: '0796 768 7101',
  mobileHref: 'tel:+447967687101',
  // TODO(client): is 0796 768 7101 on WhatsApp? If yes, set this to '447967687101'.
  // While empty, every WhatsApp button stays hidden and the booking form uses email.
  whatsapp: '',
  email: 'info@motorfixautos.com',

  address: {
    street: 'Unit 29b Wadeson Road',
    area: 'Ardwick Green',
    city: 'Manchester',
    postcode: 'M13 9UG',
    country: 'United Kingdom',
    countryCode: 'GB',
  },
  addressLine: 'Unit 29b Wadeson Road, Ardwick Green, Manchester M13 9UG',
  // TODO(client): approximate pin for Wadeson Road; copy the exact one from the Google Business profile
  geo: { lat: 53.4709, lng: -2.2262 },
  mapLink: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
  directionsLink: `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`,
  mapEmbed: `https://www.google.com/maps?q=${mapQuery}&z=16&output=embed`,
  // TODO(client): parking arrangements. Photos show on-street parking on Wadeson Road; confirm before stating it.
  parking: '',

  reviewsUrl: 'https://share.google/IZtuS9opdkEAUaHyk',

  // TODO(client): verify on Companies House. The number is only partly legible on the signage.
  companyNumber: '11739625',
  // TODO(client): registered office address (may differ from the workshop address)
  registeredOffice: '',

  brands: ['BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'SEAT', 'Škoda'],

  // TODO(client): payment methods accepted (cash, card, bank transfer?). Hidden while empty.
  paymentMethods: [],
};

// TODO(client): full weekly opening hours: Google only shows "closes 6 pm"
// open: null = opening time not confirmed yet. closed: true = closed all day.
// The hero status, footer, opening hours page, booking form and JSON-LD all read from this one array.
export const schedule = [
  { day: 'Monday', open: null, close: '18:00' },
  { day: 'Tuesday', open: null, close: '18:00' },
  { day: 'Wednesday', open: null, close: '18:00' },
  { day: 'Thursday', open: null, close: '18:00' },
  { day: 'Friday', open: null, close: '18:00' },
  { day: 'Saturday', open: null, close: '18:00' },
  { day: 'Sunday', closed: true }, // TODO(client): confirm closed on Sundays
];

// TODO(client): replace with the confirmed hours once known
export const hoursSummary = 'Mon–Sat, closes 6pm. Call to confirm';

export const hoursNotes = [
  'Hours can change on bank holidays. Please call before you travel.', // TODO(client): bank holiday policy
  'MOTs and larger jobs are by appointment. Call ahead to check we can fit you in the same day.', // TODO(client): walk-in policy
];

// TODO(client): social media profile URLs, e.g. { label: 'Facebook', href: 'https://...' }.
// The footer hides social icons while this list is empty.
export const socials = [];
