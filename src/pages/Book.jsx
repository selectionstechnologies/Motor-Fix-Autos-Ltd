import { Phone, Smartphone } from 'lucide-react';
import Seo from '../components/layout/Seo';
import PageHero from '../components/ui/PageHero';
import Section from '../components/ui/Section';
import BookingForm from '../components/sections/BookingForm';
import HoursTable from '../components/sections/HoursTable';
import { business } from '../data/business';

export default function Book() {
  return (
    <>
      <Seo title="Book a Service or MOT in Manchester" path="/book" description="Send a booking request for servicing, MOT, diagnostics, tyres or bodywork at Motor Fix Autos, Manchester M13. We confirm every booking personally." />
      <PageHero eyebrow="Book online" title="Book your car in" intro="Fill in the form and we will contact you to confirm a date and time. Prefer to talk? Call the workshop." image="exterior-front" imagePosition="55% 45%" />
      <Section>
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8"><BookingForm /></div>
          <aside className="space-y-6 lg:col-span-4">
            <a href={business.phoneHref} className="dark group flex items-center gap-4 rounded border border-line p-6 transition hover:border-brand">
              <Phone className="h-7 w-7 shrink-0 text-brand" aria-hidden="true" />
              <span>
                <span className="block text-sm">Prefer to call?</span>
                <span className="font-display text-2xl font-bold text-white">{business.phone}</span>
              </span>
            </a>
            <a href={business.mobileHref} className="card flex items-center gap-4 p-5 transition hover:border-brand-dark">
              <Smartphone className="h-6 w-6 shrink-0 text-brand-ink" aria-hidden="true" />
              <span><span className="block text-sm text-text-mute">Mobile</span><span className="font-semibold">{business.mobile}</span></span>
            </a>
            <div>
              <h2 className="mb-3 font-display text-2xl font-bold uppercase">Opening hours</h2>
              <HoursTable compact />
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
