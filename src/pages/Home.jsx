import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Seo from '../components/layout/Seo';
import Hero from '../components/home/Hero';
import Section, { SectionHeading, fadeUp, stagger } from '../components/ui/Section';
import TrustStrip from '../components/ui/TrustStrip';
import BrandBadges from '../components/ui/BrandBadges';
import MotBand from '../components/ui/MotBand';
import CtaBand from '../components/ui/CtaBand';
import Picture from '../components/ui/Picture';
import ServiceCard from '../components/sections/ServiceCard';
import ReviewsList from '../components/sections/ReviewsList';
import { features } from '../data/site';
import { services } from '../data/services';
import { workshop } from '../data/about';
import { posts, formatDate } from '../data/blog';

const homeServices = ['servicing-and-repairs', 'mot', 'diagnostics', 'dpf-cleaning', 'tyres', 'brakes-and-clutch', 'air-conditioning', 'dent-and-scratch-repair']
  .map((slug) => services.find((s) => s.slug === slug));

export default function Home() {
  return (
    <>
      <Seo
        title="MOT, Servicing & German Car Specialists in Manchester"
        path="/"
        description="Independent garage in Ardwick Green, Manchester M13. Car & van MOTs, servicing, diagnostics, DPF, tyres and bodywork. Specialists in BMW, Mercedes, Audi and VW."
      />
      <Hero />
      <TrustStrip />

      <Section>
        <div className="container-x">
          <SectionHeading eyebrow="What we do" title="Servicing, MOTs, repairs & bodywork" text="One workshop for the whole job, from a warning light to a full respray.">
            <Link to="/services" className="link-arrow shrink-0">All services <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </SectionHeading>
          <motion.ul variants={stagger} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {homeServices.map((s) => <ServiceCard key={s.slug} service={s} />)}
          </motion.ul>
        </div>
      </Section>

      <Section tone="dark">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-5">Brands we specialise in</p>
            <h2 className="title-xl">German engineering, understood</h2>
            <p className="mt-4 text-lg">These makes share engines, electronics and known faults. We work on them every week, and we look after every other make too.</p>
          </div>
          <div className="lg:col-span-7"><BrandBadges className="lg:justify-end" /></div>
        </div>
      </Section>

      <Section tone="white">
        <div className="container-x">
          <SectionHeading eyebrow="Why choose us" title="Straight answers, careful work" />
          <motion.ul variants={stagger} className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, text }) => (
              <motion.li key={title} variants={fadeUp} className="border-t-2 border-ink pt-6">
                <Icon className="h-7 w-7 text-brand-ink" aria-hidden="true" />
                <h3 className="mt-4 font-display text-h3 font-bold uppercase">{title}</h3>
                <p className="mt-2 text-[15px] text-text-mute">{text}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Section>

      <Section tone="graphite">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <Picture name="workshop" alt="Inside the Motor Fix Autos workshop: a car on a two-post lift above an engine being rebuilt"
              sizes="(min-width: 1024px) 40vw, 100vw" position="50% 30%"
              imgClassName="aspect-[4/5] w-full rounded border border-line object-cover" />
          </div>
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">Inside our workshop</p>
            <h2 className="title-xl">Everything under one roof</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {workshop.map((w) => (
                <li key={w.title} className="panel-dark p-5">
                  <p className="flex items-center gap-2 font-semibold text-white"><Check className="h-5 w-5 text-brand" aria-hidden="true" />{w.title}</p>
                  <p className="mt-1 text-[15px]">{w.text}</p>
                </li>
              ))}
            </ul>
            <Link to="/about" className="link-arrow mt-8">About the garage <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </Section>

      <MotBand />

      <Section>
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="order-2 lg:order-1 lg:col-span-6">
            <p className="eyebrow mb-5">Bodywork & paint</p>
            <h2 className="title-xl">Dents, scrapes and accident damage</h2>
            <p className="mt-4 text-lg text-text-mute">Our own body shop and spray booth handle everything from a scuffed bumper to a crushed rear quarter. Estimates are free.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/bodywork" className="btn-primary">Bodywork & paint</Link>
              <Link to="/book?service=dent-and-scratch-repair" className="btn-outline">Get a free estimate</Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-6">
            <Picture name="bodywork-before" alt="A red car with a damaged rear quarter panel waiting for body repair at the workshop"
              sizes="(min-width: 1024px) 50vw, 100vw" position="30% 55%"
              imgClassName="aspect-[4/3] w-full rounded border border-line-light object-cover" />
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="container-x">
          <SectionHeading eyebrow="Reviews" title="What customers say" />
          <ReviewsList limit={3} />
        </div>
      </Section>

      <Section>
        <div className="container-x">
          <SectionHeading eyebrow="Car-care tips" title="Useful reading">
            <Link to="/blog" className="link-arrow shrink-0">All articles <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </SectionHeading>
          <motion.ul variants={stagger} className="grid divide-y divide-line-light border-y border-line-light">
            {posts.map((p) => (
              <motion.li key={p.slug} variants={fadeUp}>
                <Link to={`/blog/${p.slug}`} className="group grid gap-2 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6">
                  <span className="text-sm text-text-mute sm:col-span-3">{formatDate(p.date)} · {p.category}</span>
                  <span className="font-display text-2xl font-bold uppercase text-text transition-colors group-hover:text-brand-ink sm:col-span-8">{p.title}</span>
                  <ArrowRight className="hidden h-5 w-5 justify-self-end text-brand-ink transition-transform group-hover:translate-x-1 sm:col-span-1 sm:block" aria-hidden="true" />
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
