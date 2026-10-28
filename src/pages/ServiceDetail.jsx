import { Link, useParams } from 'react-router-dom';
import { Check, CalendarCheck, ArrowRight, Phone } from 'lucide-react';
import Seo, { breadcrumbJsonLd } from '../components/layout/Seo';
import PageHero from '../components/ui/PageHero';
import Section from '../components/ui/Section';
import Accordion from '../components/ui/Accordion';
import Picture from '../components/ui/Picture';
import CtaBand from '../components/ui/CtaBand';
import NotFound from './NotFound';
import { getService, getGroup, servicesInGroup, serviceHref } from '../data/services';
import { business } from '../data/business';
import { gallery } from '../data/gallery';

export default function ServiceDetail() {
  const { slug } = useParams();
  const s = getService(slug);
  if (!s) return <NotFound />;
  const Icon = s.icon;
  const group = getGroup(s.group);
  const related = servicesInGroup(s.group).filter((x) => x.slug !== s.slug);
  const isBodywork = s.group === 'bodywork';
  const photo = s.image && gallery.find((g) => g.image === s.image);
  const path = `/services/${s.slug}`;

  return (
    <>
      <Seo
        title={`${s.title} in Manchester`}
        path={path}
        description={`${s.short} ${isBodywork ? 'Free estimates' : 'Call for a quote'} at Motor Fix Autos, Ardwick Green, Manchester M13.`}
        jsonLd={breadcrumbJsonLd([{ name: 'Services', path: '/services' }, { name: s.title, path }])}
      />
      <PageHero eyebrow={group.title} title={s.title} intro={s.short} crumbs={[{ label: 'Services', to: '/services' }]}>
        <span className="hidden h-24 w-24 items-center justify-center rounded border border-line bg-graphite text-brand lg:ml-auto lg:flex">
          <Icon className="h-11 w-11" aria-hidden="true" />
        </span>
      </PageHero>

      <Section>
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <article className="space-y-14 lg:col-span-8">
            <div className="space-y-5 text-lg">
              <h2 className="title-xl">What it is</h2>
              {s.intro.map((p) => <p key={p}>{p}</p>)}
            </div>

            {photo && (
              <Picture name={photo.image} alt={photo.alt} position={photo.position} sizes="(min-width: 1024px) 60vw, 100vw"
                imgClassName="aspect-[16/10] w-full rounded border border-line-light object-cover" />
            )}

            <div>
              <h2 className="title-xl">Signs you need it</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {s.signs.map((c) => (
                  <li key={c} className="flex items-start gap-3 rounded border border-line-light bg-white p-4">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-ink" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="title-xl">What we do</h2>
              <ol className="mt-6 grid gap-4 sm:grid-cols-2">
                {s.whatWeDo.map((step, i) => (
                  <li key={step.title} className="relative overflow-hidden rounded border border-line-light bg-white p-5">
                    <span className="font-display text-sm font-bold uppercase tracking-widest text-brand-ink">Step {String(i + 1).padStart(2, '0')}</span>
                    <p className="mt-1 font-display text-xl font-bold uppercase text-text">{step.title}</p>
                    <p className="mt-1 text-[15px] text-text-mute">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="title-xl mb-6">Questions</h2>
              <Accordion items={s.faqs} />
            </div>
          </article>

          <aside className="lg:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-28">
              <div className="dark rounded border border-line p-6">
                <h2 className="font-display text-3xl font-bold uppercase">{isBodywork ? 'Free estimate' : 'Call for a quote'}</h2>
                <p className="mt-2">Tell us your registration and what you need. We confirm the price before any work starts.</p>
                <div className="mt-5 grid gap-3">
                  <Link to={`/book?service=${s.slug}`} className="btn-primary">
                    <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                    {isBodywork ? 'Request an estimate' : 'Book this service'}
                  </Link>
                  <a href={business.phoneHref} className="btn-ghost-dark">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    {business.phone}
                  </a>
                </div>
              </div>
              {related.length > 0 && (
                <nav aria-label={`More in ${group.title}`} className="card p-6">
                  <h2 className="font-display text-xl font-bold uppercase">More in {group.title}</h2>
                  <ul className="mt-3 divide-y divide-line-light">
                    {related.map((o) => (
                      <li key={o.slug}>
                        <Link to={serviceHref(o)} className="group flex items-center justify-between py-3 text-[15px] text-text transition-colors hover:text-brand-ink">
                          {o.title}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>
          </aside>
        </div>
      </Section>
      <CtaBand bookTo={`/book?service=${s.slug}`} />
    </>
  );
}
