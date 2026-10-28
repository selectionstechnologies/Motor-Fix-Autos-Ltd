import { business } from '../data/business';

export const hasWhatsApp = Boolean(business.whatsapp);

export const waLink = (text = '') =>
  `https://wa.me/${business.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
