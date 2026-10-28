import { business } from './business';

// TODO(client): both documents are templates. Have a qualified professional review them before launch.
export const legalNotice = 'Template: have a professional review before launch.';

const contactLine = `${business.name}, ${business.addressLine}. Phone ${business.phone}. Email ${business.email}.`;

export const privacy = {
  updated: '2026-10-28',
  sections: [
    {
      h: 'Who we are',
      p: [
        `This website is run by ${business.name} ("we", "us"), the data controller for personal information collected through it. Contact: ${contactLine}`,
      ],
    },
    {
      h: 'What we collect',
      p: [
        'When you use the booking form, you give us your name, phone number, vehicle registration, make and model, the service you want, a preferred date and time and an optional message. Email address is optional.',
        'We do not use analytics, advertising trackers or tracking cookies on this website.',
      ],
    },
    {
      h: 'How the booking form sends your details',
      p: [
        'This website does not have a server that stores your form. When you press send, your details are placed into a pre-filled email in your own email app (or a WhatsApp message, if we offer WhatsApp). Nothing is sent until you press send in that app.',
        'Once sent, your message is handled by our email provider (or WhatsApp, operated by Meta), under their own privacy terms.',
      ],
    },
    {
      h: 'Why we use it, and our lawful basis',
      p: [
        'We use your details to reply to your request, arrange and carry out work on your vehicle, and keep records of that work. Our lawful basis is taking steps at your request before entering into a contract, and then performing that contract (UK GDPR Article 6(1)(b)). We keep some records to meet legal obligations, such as tax and accounting rules (Article 6(1)(c)).',
      ],
    },
    {
      h: 'Google Maps',
      p: [
        'The map on our contact page only loads when you press "Load map". Once loaded, Google may set cookies and collect data under its own privacy policy. If you do not load the map, no data is sent to Google from this site.',
      ],
    },
    {
      h: 'How long we keep it',
      p: [
        'Booking requests that do not lead to work are deleted within 12 months. Job records and invoices are kept for 6 years to meet tax requirements.', // TODO(client): confirm retention periods
      ],
    },
    {
      h: 'Who we share it with',
      p: [
        'We do not sell your data. We only share it where needed to do the job you asked for, for example with a parts supplier, your insurer for an insurance claim, or the DVSA for MOT test results, or where the law requires it.',
      ],
    },
    {
      h: 'Your rights',
      p: [
        'You have the right to access, correct or delete your personal data, to restrict or object to how we use it, and to data portability. To use any of these rights, contact us using the details above. We will reply within one month.',
        'If you are unhappy with how we have handled your data, you can complain to the Information Commissioner’s Office (ICO) at ico.org.uk or on 0303 123 1113.',
      ],
    },
  ],
};

export const terms = {
  updated: '2026-10-28',
  sections: [
    {
      h: 'About these terms',
      p: [
        `These terms apply to work carried out by ${business.name} (company number ${business.companyNumber}), ${business.addressLine}. They do not affect your statutory rights under the Consumer Rights Act 2015.`,
      ],
    },
    {
      h: 'Quotes and estimates',
      p: [
        'A quote is a fixed price for the work described. An estimate is our best guess, and the final price may differ.',
        'If we find further work is needed once a job has started, we will contact you with a price and will not go ahead without your agreement.',
        'Quotes are valid for 30 days unless we tell you otherwise.', // TODO(client): confirm quote validity
      ],
    },
    {
      h: 'Booking requests',
      p: [
        'Sending the booking form is a request, not a confirmed booking. A booking is confirmed only when we contact you.',
      ],
    },
    {
      h: 'Payment',
      p: [
        'Payment is due when the work is complete and before the vehicle is released, unless we agree otherwise in writing. For insurance work, you may need to pay any policy excess directly to us.', // TODO(client): payment methods and terms
      ],
    },
    {
      h: 'Parts',
      p: [
        'Parts we supply carry the manufacturer or supplier warranty. We are not responsible for the quality or fitness of parts you supply yourself, and labour to refit or replace a customer-supplied part that fails will be charged.',
        'Replaced parts are available for you to inspect or take away if you ask before the work starts. Otherwise they are disposed of responsibly.',
      ],
    },
    {
      h: 'Vehicles left with us',
      p: [
        'Please remove valuables from your vehicle. We take reasonable care of vehicles in our possession but are not liable for loss of personal items left inside, except where caused by our negligence.',
        'Vehicles not collected within 14 days of our notice that work is complete may be charged storage.', // TODO(client): confirm storage policy and charges
      ],
    },
    {
      h: 'Our liability',
      p: [
        'We carry out work with reasonable care and skill. Nothing in these terms limits our liability for death or personal injury caused by our negligence, or for fraud.',
      ],
    },
    {
      h: 'Governing law',
      p: ['These terms are governed by the law of England and Wales.'],
    },
  ],
};
