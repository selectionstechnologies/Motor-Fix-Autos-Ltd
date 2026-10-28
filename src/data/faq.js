import { business, hoursSummary } from './business';

// Answers marked TODO(client) contain policy details the garage still needs to confirm.
export const faqGroups = [
  {
    title: 'MOT',
    items: [
      { q: 'Do you test cars and vans?', a: 'Yes, we carry out MOTs on cars and vans. Call us if you are unsure whether your vehicle can be tested in our bay.' }, // TODO(client): confirm MOT classes (4 / 7)
      { q: 'How early can I book my MOT?', a: 'You can have an MOT up to a month (minus a day) before your current certificate runs out and keep the same renewal date.' },
      { q: 'What happens if my vehicle fails?', a: 'We show you the failure items and give you a repair quote. Most repairs can be done in our own workshop, and we can retest the vehicle once it is fixed.' },
      { q: 'Can I drive my car to the MOT if it has run out?', a: 'Yes, you can drive to a pre-booked MOT test, as long as the vehicle is roadworthy.' },
    ],
  },
  {
    title: 'Booking',
    items: [
      { q: 'How do I book?', a: `Use the booking form on this site or call ${business.phone}. We will contact you to confirm a date and time.` },
      { q: 'Is my booking confirmed when I send the form?', a: 'No. The form sends us a request. A booking is only confirmed when we contact you.' },
      { q: 'What are your opening hours?', a: `${hoursSummary}. See the opening hours page for details.` },
      { q: 'Do you take walk-ins?', a: 'Please call before you come so we can tell you whether we can fit you in that day.' }, // TODO(client): walk-in policy
    ],
  },
  {
    title: 'Waiting times & getting about',
    items: [
      { q: 'Can I wait while my car is being worked on?', a: 'For shorter jobs, ask when you book whether waiting is practical.' }, // TODO(client): waiting area and typical times
      { q: 'Do you offer collection and delivery?', a: 'Yes, collection and delivery can be arranged. Call us to check availability and cost for your area.' }, // TODO(client): charges and area covered
      { q: 'Do you offer a courtesy car?', a: 'Please ask when you book.' }, // TODO(client): courtesy car availability
    ],
  },
  {
    title: 'Bodywork & insurance',
    items: [
      { q: 'Do you give free bodywork estimates?', a: 'Yes. Bring the car in or send us photos for a first idea. A final price needs us to see the car.' },
      { q: 'Can you repair my car through my insurance?', a: 'Yes, we carry out accident and insurance claim repairs and can provide estimates and photos for your insurer.' }, // TODO(client): confirm how insurance work is handled
      { q: 'Can I choose my own repairer?', a: 'In most cases yes, even if your insurer suggests another garage. Check your policy wording or ask your insurer.' },
    ],
  },
  {
    title: 'Prices & payment',
    items: [
      { q: 'How much will my job cost?', a: 'Every car and job is different, so we quote first. Call us with your registration, or book in for a free estimate on bodywork.' },
      { q: 'Will you do extra work without asking?', a: 'No. If we find something else once work starts, we call you with a quote and wait for your go-ahead.' }, // TODO(client): confirm this policy
      { q: 'How can I pay?', a: 'Please ask when you book.' }, // TODO(client): payment methods accepted
    ],
  },
];
