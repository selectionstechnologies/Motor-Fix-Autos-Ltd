import Seo from '../components/layout/Seo';
import PageHero from '../components/ui/PageHero';
import Section from '../components/ui/Section';
import Accordion from '../components/ui/Accordion';
import CtaBand from '../components/ui/CtaBand';
import { faqGroups } from '../data/faq';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqGroups.flatMap((g) =>
    g.items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } }))
  ),
};

const anchor = (t) => t.toLowerCase().replace(/[^a-z]+/g, '-');

export default function Faq() {
  return (
    <>
      <Seo title="MOT & Garage FAQs | Manchester" path="/faq" description="Answers about MOTs, booking, waiting times, collection, insurance repairs and payment at Motor Fix Autos, Manchester M13." jsonLd={faqJsonLd} />
      <PageHero eyebrow="FAQ" title="Common questions" intro="Can't find your answer? Ask the chat assistant or call the workshop." image="exterior-wide" imagePosition="50% 55%" />
      <Section>
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <nav aria-label="FAQ categories" className="hidden lg:col-span-3 lg:block">
            <ul className="sticky top-28 space-y-2 border-l border-line-light">
              {faqGroups.map((g) => (
                <li key={g.title}>
                  <a href={`#${anchor(g.title)}`} className="-ml-px block border-l-2 border-transparent py-1 pl-4 text-[15px] text-text-mute transition-colors hover:border-brand hover:text-text">{g.title}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-14 lg:col-span-9">
            {faqGroups.map((g) => (
              <div key={g.title} id={anchor(g.title)} className="scroll-mt-28">
                <h2 className="mb-4 font-display text-3xl font-bold uppercase">{g.title}</h2>
                <Accordion items={g.items} />
              </div>
            ))}
          </div>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
