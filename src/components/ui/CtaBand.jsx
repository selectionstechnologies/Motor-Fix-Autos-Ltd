import { Link } from 'react-router-dom';
import { CalendarCheck, Phone } from 'lucide-react';
import { business } from '../../data/business';

export default function CtaBand({
  title = 'Book your car in',
  text = 'Send a booking request in a minute, or call the workshop. We quote before any work starts.',
  bookTo = '/book',
  bookLabel = 'Book a service',
}) {
  return (
    <section className="dark relative overflow-hidden border-t border-line">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-[repeating-linear-gradient(115deg,transparent_0_22px,rgb(var(--brand)/0.06)_22px_24px)] lg:block" aria-hidden="true" />
      <div className="container-x relative grid gap-8 py-14 sm:py-16 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <p className="eyebrow mb-5">Ready when you are</p>
          <h2 className="title-xl">{title}</h2>
          <p className="mt-3 max-w-xl text-lg">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
          <Link to={bookTo} className="btn-primary">
            <CalendarCheck className="h-5 w-5" aria-hidden="true" />
            {bookLabel}
          </Link>
          <a href={business.phoneHref} className="btn-ghost-dark">
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call <span className="whitespace-nowrap">{business.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
