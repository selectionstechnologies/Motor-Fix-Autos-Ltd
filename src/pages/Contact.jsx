import Seo from '../components/layout/Seo';
import PageHero from '../components/ui/PageHero';
import Section from '../components/ui/Section';
import Picture from '../components/ui/Picture';
import ContactDetails, { MapEmbed } from '../components/sections/ContactDetails';
import HoursTable from '../components/sections/HoursTable';
import { business } from '../data/business';

export default function Contact() {
  return (
    <>
      <Seo title="Contact Our Garage in Ardwick Green, Manchester" path="/contact" description={`Call ${business.phone}, email or visit Motor Fix Autos at ${business.addressLine}. Directions, opening hours and map.`} />
      <PageHero eyebrow="Contact" title="Visit or get in touch" intro={`${business.addressLine}. Call ${business.phone}.`} image="exterior-front" imagePosition="55% 45%" />
      <Section>
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-5">
            <ContactDetails />
            <div>
              <h2 className="mb-3 font-display text-2xl font-bold tracking-tight">Opening hours</h2>
              <HoursTable compact />
            </div>
          </div>
          <div className="space-y-6 lg:col-span-7">
            <MapEmbed />
            <Picture name="exterior-wide" alt="The Motor Fix Autos building seen from Wadeson Road, with cars parked outside"
              sizes="(min-width: 1024px) 55vw, 100vw" position="50% 55%"
              imgClassName="aspect-[2/1] w-full rounded border border-line-light object-cover" />
          </div>
        </div>
      </Section>
    </>
  );
}
