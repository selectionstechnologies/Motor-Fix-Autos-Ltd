import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp } from '../ui/Section';
import { serviceHref } from '../../data/services';

// Hover: lifts, and a green underline sweeps across the bottom edge
export default function ServiceCard({ service, headingLevel = 3 }) {
  const { icon: Icon, title, short } = service;
  const H = `h${headingLevel}`;
  return (
    <motion.li variants={fadeUp} className="list-none">
      <Link
        to={serviceHref(service)}
        className="group relative flex h-full flex-col overflow-hidden rounded border border-line-light bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-card sm:p-7"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-ink text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-ink">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <H className="mt-6 font-display text-h3 font-bold uppercase tracking-wide">{title}</H>
        <p className="mt-2 flex-1 text-[15px] text-text-mute">{short}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-ink">
          Find out more
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </span>
        <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-brand transition-transform duration-500 ease-out group-hover:scale-x-100" aria-hidden="true" />
      </Link>
    </motion.li>
  );
}
