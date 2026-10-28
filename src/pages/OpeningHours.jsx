import { Info, Navigation, Phone } from 'lucide-react';
import Seo from '../components/layout/Seo';
import PageHero from '../components/ui/PageHero';
import Section from '../components/ui/Section';
import CtaBand from '../components/ui/CtaBand';
import OpenStatus from '../components/ui/OpenStatus';
import HoursTable from '../components/sections/HoursTable';
import { business, hoursSummary, hoursNotes } from '../data/business';

export default function OpeningHours() {
  return (
    <>
      <Seo title="Opening Hours | Garage in Manchester M13" path="/opening-hours" description={`Opening hours for Motor Fix Autos, ${business.addressLine}. ${hoursSummary}.`} />
      <PageHero eyebrow="Opening hours" title="When we are open" intro={`${hoursSummary}.`} image="exterior-wide" imagePosition="50% 55%">
        <div className="panel-dark p-5 text-[15px]"><OpenStatus /></div>
      </PageHero>
      <Section>
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7"><HoursTable /></div>
          <div className="space-y-6 lg:col-span-5">
            <div className="card p-6">
              <h2 className="flex items-center gap-2 font-display text-2xl font-bold uppercase"><Info className="h-5 w-5 text-brand-ink" aria-hidden="true" />Good to know</h2>
              <ul className="mt-4 space-y-3 text-[15px] text-text-mute">{hoursNotes.map((n) => <li key={n}>{n}</li>)}</ul>
            </div>
            <div className="card p-6">
              <h2 className="font-display text-2xl font-bold uppercase">Find us</h2>
              <p className="mt-2 text-text-mute">{business.addressLine}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={business.directionsLink} target="_blank" rel="noopener noreferrer" className="btn-primary"><Navigation className="h-5 w-5" aria-hidden="true" />Get directions</a>
                <a href={business.phoneHref} className="btn-outline"><Phone className="h-5 w-5" aria-hidden="true" />{business.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
