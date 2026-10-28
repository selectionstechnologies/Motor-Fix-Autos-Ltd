import { Link } from 'react-router-dom';
import { CalendarCheck, Phone, Check } from 'lucide-react';
import { business } from '../../data/business';
import { heroChips } from '../../data/site';
import { usePageFocus } from '../../lib/usePageFocus';
import Picture from '../ui/Picture';
import OpenStatus from '../ui/OpenStatus';

// Entrance uses CSS animations (not framer-motion) so the prerendered headline paints immediately
const rise = (i) => ({ className: 'animate-rise', style: { animationDelay: `${i * 80}ms` } });

export default function Hero() {
  const headingRef = usePageFocus();

  return (
    <section className="dark relative isolate overflow-hidden">
      <Picture
        name="exterior-front"
        alt="The Motor Fix Autos garage on Wadeson Road, Manchester, with its MOT test centre sign"
        priority
        sizes="100vw"
        position="55% 45%"
        className="absolute inset-0 -z-20 block animate-kenburns"
        imgClassName="h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/30" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink to-transparent" aria-hidden="true" />

      <div className="container-x flex min-h-[36rem] items-center py-16 sm:min-h-[40rem] lg:min-h-[44rem] lg:py-24">
        <div className="max-w-3xl">
          <p {...rise(0)}><span className="eyebrow">Ardwick Green · <span className="whitespace-nowrap">Manchester M13</span></span></p>

          <h1 ref={headingRef} tabIndex={-1} className="mt-6 font-display text-hero font-bold uppercase text-white">
            <span {...rise(1)} className="block animate-rise">Manchester’s</span>
            <span {...rise(2)} className="block animate-rise text-brand">German car</span>
            <span {...rise(3)} className="block animate-rise">specialists</span>
          </h1>

          <p {...rise(4)} className="mt-6 max-w-xl animate-rise text-lg text-mute sm:text-xl">{business.tagline}</p>

          <div {...rise(5)} className="mt-8 flex animate-rise flex-col gap-3 sm:flex-row">
            <Link to="/book" className="btn-primary">
              <CalendarCheck className="h-5 w-5" aria-hidden="true" />
              Book a service
            </Link>
            <a href={business.phoneHref} className="btn-ghost-dark">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {business.phone}
            </a>
          </div>

          <ul {...rise(6)} className="mt-8 flex animate-rise flex-wrap gap-2" aria-label="At a glance">
            {heroChips.map((c) => (
              <li key={c} className="chip"><Check className="h-4 w-4 text-brand" aria-hidden="true" />{c}</li>
            ))}
          </ul>

          <div {...rise(7)} className="mt-6 animate-rise text-[15px] text-mute">
            <OpenStatus />
          </div>
        </div>
      </div>
    </section>
  );
}
