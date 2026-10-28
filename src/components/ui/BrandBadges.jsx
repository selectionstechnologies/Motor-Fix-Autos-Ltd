import { business } from '../../data/business';

// Text badges only. Manufacturer logos are trademarks and are not used.
export default function BrandBadges({ className = '' }) {
  return (
    <ul className={`flex flex-wrap gap-3 ${className}`} aria-label="Makes we specialise in">
      {business.brands.map((b) => (
        <li
          key={b}
          className="rounded-sm border border-line bg-graphite px-5 py-3 font-display text-lg font-bold tracking-tight text-white transition-colors hover:border-brand sm:text-2xl"
        >
          {b}
        </li>
      ))}
    </ul>
  );
}
