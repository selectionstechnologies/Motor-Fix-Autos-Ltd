import { motion } from 'framer-motion';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import { hasWhatsApp, waLink } from '../../lib/whatsapp';
import { business } from '../../data/business';

// Only rendered when business.whatsapp is set
export default function WhatsAppButton() {
  if (!hasWhatsApp) return null;
  return (
    <motion.a
      href={waLink(`Hello ${business.shortName}, I have a question about my car.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp, ${business.mobile}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.4, ease: 'easeOut' }}
      className="fixed bottom-[9.5rem] right-4 z-50 md:bottom-7 md:right-7"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-ink shadow-card transition-transform hover:-translate-y-1">
        <WhatsAppIcon className="h-7 w-7" />
      </span>
    </motion.a>
  );
}
