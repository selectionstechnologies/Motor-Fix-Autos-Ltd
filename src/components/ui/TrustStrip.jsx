import { trustFacts } from '../../data/site';

// Facts only: no invented numbers
export default function TrustStrip() {
  return (
    <div className="border-b border-line-light bg-white">
      <ul className="container-x grid grid-cols-2 lg:grid-cols-4">
        {trustFacts.map(({ icon: Icon, label }, i) => (
          <li
            key={label}
            className={`flex items-center gap-3 py-5 sm:py-6 ${i % 2 ? 'pl-4 sm:pl-6' : 'pr-4'} ${i > 0 ? 'lg:border-l lg:border-line-light lg:pl-6' : ''} ${i > 1 ? 'border-t border-line-light lg:border-t-0' : ''}`}
          >
            <Icon className="h-6 w-6 shrink-0 text-brand-ink" aria-hidden="true" />
            <span className="font-display text-lg font-bold uppercase leading-tight tracking-wide text-text sm:text-xl">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
