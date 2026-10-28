import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarCheck, Check, ExternalLink, Info, Phone } from 'lucide-react';
import Seo from '../components/layout/Seo';
import PageHero from '../components/ui/PageHero';
import Section, { SectionHeading, reveal, stagger } from '../components/ui/Section';
import CtaBand from '../components/ui/CtaBand';
import { motChecks, motNotChecked, motBring, motSteps, motFacts, motCheckLink } from '../data/mot';
import { business } from '../data/business';

export default function Mot() {
  return (
    <>
      <Seo
        title="Car & Van MOT Testing in Manchester M13"
        path="/mot"
        description="Car and van MOTs at Motor Fix Autos, Ardwick Green, Manchester. What is tested, what to bring, and repairs on site if anything fails. Book your MOT online."
      />
      <PageHero
        eyebrow="MOT test centre"
        image="exterior-front"
        imagePosition="55% 45%"
        title="Car & van MOTs"
        intro="Tested in our own MOT bay. If anything fails, we show you why and can quote for the repair in the same workshop."
      >
        <div className="panel-dark hidden p-6 sm:block">
          <span className="inline-block rounded-sm bg-amber px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-ink">Book early</span>
          <p className="mt-3 text-white">Test up to a month (minus a day) early and keep your renewal date.</p>
          <div className="mt-5 grid gap-3">
            <Link to="/book?service=mot" className="btn-primary"><CalendarCheck className="h-5 w-5" aria-hidden="true" />Book your MOT</Link>
            <a href={business.phoneHref} className="btn-ghost-dark"><Phone className="h-5 w-5" aria-hidden="true" />{business.phone}</a>
          </div>
        </div>
      </PageHero>

      <Section>
        <div className="container-x">
          <SectionHeading eyebrow="The test" title="What is checked" text="The MOT follows the DVSA standard. These are the main areas the tester inspects." />
          <motion.ul variants={stagger} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {motChecks.map((c, i) => (
              <motion.li key={c.title} {...reveal(i % 3)} className="card flex gap-4 p-5">
                <Check className="mt-1 h-5 w-5 shrink-0 text-brand-ink" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-xl font-bold uppercase">{c.title}</h3>
                  <p className="text-[15px] text-text-mute">{c.text}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
          <p className="mt-6 flex items-start gap-3 rounded border border-amber bg-white p-4 text-[15px]">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-text" aria-hidden="true" />
            {motNotChecked}
          </p>
        </div>
      </Section>

      <Section tone="dark">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-5">Before you come</p>
            <h2 className="title-xl">What to bring</h2>
            <ul className="mt-6 space-y-3">
              {motBring.map((b) => (
                <li key={b} className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />{b}</li>
              ))}
            </ul>
            <p className="mt-6">You do not normally need to bring your V5C logbook or old certificates.</p>
          </div>
          <div>
            <p className="eyebrow mb-5">How it works</p>
            <h2 className="title-xl">On the day</h2>
            <ol className="mt-6 space-y-4">
              {motSteps.map((s, i) => (
                <motion.li key={s.title} {...reveal(0)} className="panel-dark flex gap-4 p-5">
                  <span className="font-display text-3xl font-bold text-brand">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="font-display text-xl font-bold uppercase text-white">{s.title}</p>
                    <p className="text-[15px]">{s.text}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-5">Good to know</p>
            <h2 className="title-xl">MOT rules in brief</h2>
            <a href={motCheckLink} target="_blank" rel="noopener noreferrer" className="link-arrow mt-6">
              Check your MOT history on GOV.UK <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <ul className="space-y-4 lg:col-span-7">
            {motFacts.map((f) => (
              <li key={f} className="border-l-2 border-amber bg-paper p-4">{f}</li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBand title="Book your MOT" text="Choose a day that suits you and we will confirm the time." bookTo="/book?service=mot" bookLabel="Book your MOT" />
    </>
  );
}
