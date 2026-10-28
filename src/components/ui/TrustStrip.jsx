import { motion } from 'framer-motion';
import { trustFacts } from '../../data/site';
import { reveal } from './Section';

// Facts only: no invented numbers
export default function TrustStrip() {
  return (
    <div className="border-b border-line-light bg-white">
      <ul className="container-x grid grid-cols-1 min-[400px]:grid-cols-2 lg:grid-cols-4">
        {trustFacts.map(({ icon: Icon, label }, i) => (
          <motion.li
            key={label}
            {...reveal(i)}
            className={`flex items-center gap-3 py-4 sm:py-6 ${i % 2 ? 'min-[400px]:pl-4 sm:pl-6' : 'min-[400px]:pr-4'} ${i > 0 ? 'border-t border-line-light min-[400px]:border-t-0 lg:border-l lg:pl-6' : ''} ${i > 1 ? 'min-[400px]:border-t lg:border-t-0' : ''}`}
          >
            <Icon className="h-6 w-6 shrink-0 text-brand-ink" aria-hidden="true" />
            <span className="font-display text-base font-bold uppercase leading-tight tracking-wide text-text min-[360px]:text-lg sm:text-xl">{label}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
