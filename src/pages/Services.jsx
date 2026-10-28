import { motion } from 'framer-motion';
import Seo from '../components/layout/Seo';
import PageHero from '../components/ui/PageHero';
import Section, { stagger } from '../components/ui/Section';
import CtaBand from '../components/ui/CtaBand';
import ServiceCard from '../components/sections/ServiceCard';
import { serviceGroups, servicesInGroup } from '../data/services';

export default function Services() {
  return (
    <>
      <Seo
        title="Car Servicing, Repairs & MOT in Manchester"
        path="/services"
        description="Servicing, MOTs, diagnostics, DPF and EGR cleaning, tyres, brakes, air con, welding and bodywork at Motor Fix Autos, Ardwick Green, Manchester M13."
      />
      <PageHero
        eyebrow="Services"
        title="Everything your car needs"
        intro="Choose a service to see what it covers, the signs you need it and how we do the work. Every job starts with a quote."
        image="workshop"
        imagePosition="50% 30%"
      />
      <nav aria-label="Service groups" className="border-b border-line-light bg-white">
        <ul className="container-x flex gap-2 overflow-x-auto py-3">
          {serviceGroups.map((g) => (
            <li key={g.id} className="shrink-0">
              <a href={`#${g.id}`} className="inline-block rounded-sm border border-line-light px-3 py-2 text-sm font-semibold text-text transition-colors hover:border-brand-dark hover:text-brand-ink">{g.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      {serviceGroups.map((g, i) => (
        <Section key={g.id} id={g.id} tone={i % 2 ? 'white' : 'light'} className="scroll-mt-24 !py-14 sm:!py-16">
          <div className="container-x">
            <div className="mb-8 max-w-2xl">
              <p className="eyebrow mb-4">{String(i + 1).padStart(2, '0')}</p>
              <h2 className="title-xl">{g.title}</h2>
              <p className="mt-3 text-lg text-text-mute">{g.text}</p>
            </div>
            <motion.ul variants={stagger} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {servicesInGroup(g.id).map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
            </motion.ul>
          </div>
        </Section>
      ))}
      <CtaBand title="Not sure what you need?" text="Describe the problem when you book, or call us. We will check it and quote before any work." />
    </>
  );
}
