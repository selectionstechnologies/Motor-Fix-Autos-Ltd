import { Link } from 'react-router-dom';
import { CalendarClock, ArrowRight } from 'lucide-react';
import { motCheckLink } from '../../data/mot';

// Amber MOT reminder band
export default function MotBand() {
  return (
    <section className="bg-amber text-ink">
      <div className="container-x flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-ink text-amber">
            <CalendarClock className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <h2 className="font-display text-3xl font-bold text-ink tracking-tight">MOT due soon?</h2>
            <p className="mt-1 max-w-xl text-ink">
              Book up to a month (minus a day) early and keep your renewal date.{' '}
              <a href={motCheckLink} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">
                Check your MOT due date on GOV.UK
              </a>
              .
            </p>
          </div>
        </div>
        <Link to="/book?service=mot" className="btn shrink-0 bg-ink text-white hover:-translate-y-0.5 hover:bg-graphite">
          Book your MOT
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
