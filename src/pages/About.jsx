import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Seo from '../components/layout/Seo';
import PageHero from '../components/ui/PageHero';
import Section, { SectionHeading, reveal, stagger } from '../components/ui/Section';
import CtaBand from '../components/ui/CtaBand';
import Picture from '../components/ui/Picture';
import BrandBadges from '../components/ui/BrandBadges';
import { aboutIntro, workshop, team } from '../data/about';
import { features } from '../data/site';

export default function About() {
  return (
    <>
      <Seo
        title="About Our Manchester Garage"
        path="/about"
        description="Motor Fix Autos is an independent garage and German vehicle specialist on Wadeson Road, Ardwick Green, Manchester, with MOT bay, workshop and body shop."
      />
      <PageHero eyebrow="About us" title="An independent garage in Ardwick Green" intro="German vehicle specialists, looking after every make." image="exterior-wide" imagePosition="50% 55%" />

      <Section>
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Picture name="exterior-front" alt="The Motor Fix Autos building on Wadeson Road with its signage and reception entrance"
              sizes="(min-width: 1024px) 40vw, 100vw" position="55% 45%"
              imgClassName="aspect-[4/3] w-full rounded border border-line-light object-cover lg:sticky lg:top-28" />
          </div>
          <div className="space-y-5 text-lg lg:col-span-7">
            <h2 className="title-xl">Who we are</h2>
            {aboutIntro.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <div className="container-x">
          <SectionHeading eyebrow="Specialists" title="The makes we know best" />
          <BrandBadges />
        </div>
      </Section>

      <Section tone="white">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow="The workshop" title="Inside the building" />
            <ul className="divide-y divide-line-light border-y border-line-light">
              {workshop.map((f) => (
                <li key={f.title} className="flex gap-4 py-5">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-brand-ink" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-text">{f.title}</p>
                    <p className="text-[15px] text-text-mute">{f.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <h3 className="mt-10 font-display text-3xl font-bold tracking-tight">{team.title}</h3>
            <p className="mt-3 text-lg text-text-mute">{team.text}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:col-span-6">
            <Picture name="workshop" alt="A car raised on a lift in the workshop with an engine on a pallet in front" sizes="(min-width: 1024px) 25vw, 50vw"
              position="50% 30%" imgClassName="aspect-[4/5] h-full w-full rounded border border-line-light object-cover" />
            <Picture name="paint-booth" alt="A painter spraying primer on a grey car in the spray booth" sizes="(min-width: 1024px) 25vw, 50vw"
              position="40% 55%" imgClassName="aspect-[4/5] h-full w-full rounded border border-line-light object-cover" />
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-x">
          <SectionHeading eyebrow="Why choose us" title="How we work" />
          <motion.ul variants={stagger} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, text }, i) => (
              <motion.li key={title} {...reveal(i)} className="card p-6">
                <Icon className="h-7 w-7 text-brand-ink" aria-hidden="true" />
                <h3 className="mt-4 font-display text-h3 font-bold tracking-tight">{title}</h3>
                <p className="mt-2 text-[15px] text-text-mute">{text}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
