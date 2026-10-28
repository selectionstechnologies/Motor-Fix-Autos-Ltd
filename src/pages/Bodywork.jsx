import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarCheck, Phone, ShieldCheck } from 'lucide-react';
import Seo from '../components/layout/Seo';
import PageHero from '../components/ui/PageHero';
import Section, { SectionHeading, stagger } from '../components/ui/Section';
import CtaBand from '../components/ui/CtaBand';
import Picture from '../components/ui/Picture';
import BeforeAfter from '../components/ui/BeforeAfter';
import ServiceCard from '../components/sections/ServiceCard';
import { servicesInGroup } from '../data/services';
import { business } from '../data/business';

export default function Bodywork() {
  return (
    <>
      <Seo
        title="Bodywork, Dent Repair & Respraying in Manchester"
        path="/bodywork"
        description="Dent and scratch repair, resprays, panel replacement, alloy wheel refurbishment and accident repairs in our own body shop in Manchester M13. Free estimates."
      />
      <PageHero
        eyebrow="Bodywork & paint"
        title="Body shop & spray booth"
        intro="Dents, scratches, panels, paint and alloy wheels, repaired in our own body shop. Estimates are free."
      >
        <Picture name="paint-booth" alt="A painter in a protective suit spraying a grey car in the Motor Fix Autos spray booth"
          priority sizes="(min-width: 1024px) 30vw, 100vw" position="40% 55%"
          imgClassName="aspect-[4/5] w-full max-w-sm rounded border border-line object-cover lg:ml-auto" />
      </PageHero>

      <Section>
        <div className="container-x">
          <SectionHeading eyebrow="Services" title="What our body shop does" />
          <motion.ul variants={stagger} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servicesInGroup('bodywork').map((s) => <ServiceCard key={s.slug} service={s} />)}
          </motion.ul>
        </div>
      </Section>

      <Section tone="white">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* TODO(client): add the repaired "after" photo of this car as `after`; the slider appears automatically */}
          <BeforeAfter
            before={{ name: 'bodywork-before', alt: 'A red car with a crushed rear quarter panel and missing rear light, before repair', position: '30% 55%' }}
            caption="Before: rear quarter damage on arrival. After photo coming soon."
          />
          <div>
            <p className="eyebrow mb-5">Before & after</p>
            <h2 className="title-xl">From damage to done</h2>
            <p className="mt-4 text-lg text-text-mute">We strip the damaged area, check the structure behind it, repair or replace panels and paint them to match in the spray booth.</p>
            <p className="mt-4 flex items-start gap-3 rounded border border-line-light bg-paper p-4">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-ink" aria-hidden="true" />
              Claiming on insurance? We carry out accident and insurance claim repairs and can provide estimates and photos for your insurer.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/book?service=accident-and-insurance-repairs" className="btn-primary"><CalendarCheck className="h-5 w-5" aria-hidden="true" />Request a free estimate</Link>
              <a href={business.phoneHref} className="btn-outline"><Phone className="h-5 w-5" aria-hidden="true" />{business.phone}</a>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand title="Get a free estimate" text="Bring the car in, or call us with photos for a first idea of the cost." bookTo="/book?service=dent-and-scratch-repair" bookLabel="Request an estimate" />
    </>
  );
}
