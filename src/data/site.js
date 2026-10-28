import { BadgeCheck, Car, PaintBucket, MapPin, Wrench, MessageSquareText, ShieldCheck, Gauge } from 'lucide-react';

export const mainNav = [
  { label: 'Services', to: '/services' },
  { label: 'MOT', to: '/mot' },
  { label: 'Bodywork', to: '/bodywork' },
  { label: 'About', to: '/about' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Contact', to: '/contact' },
];

export const moreNav = [
  { label: 'Opening hours', to: '/opening-hours' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Car-care tips', to: '/blog' },
  { label: 'FAQ', to: '/faq' },
];

export const legalNav = [
  { label: 'Privacy policy', to: '/privacy-policy' },
  { label: 'Terms & conditions', to: '/terms' },
];

// Facts only: no invented figures
export const trustFacts = [
  { icon: BadgeCheck, label: 'Car & Van MOTs' },
  { icon: Car, label: 'German vehicle specialists' },
  { icon: PaintBucket, label: 'Bodywork & paint in-house' },
  { icon: MapPin, label: 'Manchester M13' },
];

export const heroChips = ['MOT Test Centre', 'Car & Van', 'Bodywork & Paint'];

export const features = [
  {
    icon: Gauge,
    title: 'German car know-how',
    text: 'BMW, Mercedes-Benz, Audi, VW, SEAT and Škoda are what we work on every week. We still look after every other make too.',
  },
  {
    icon: Wrench,
    title: 'One building, the whole job',
    text: 'Servicing, MOT, diagnostics, welding, tyres and the body shop sit under one roof, so a job is not passed around town.',
  },
  {
    icon: MessageSquareText,
    title: 'Plain explanations',
    text: 'We tell you what we found, what needs doing now and what can wait. You decide before any extra work starts.',
  },
  {
    icon: ShieldCheck,
    title: 'Quotes before work',
    text: 'Every job starts with a quote or estimate. If something changes once the car is apart, we call you first.',
  },
];
