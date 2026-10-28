import Seo from '../components/layout/Seo';
import PageHero from '../components/ui/PageHero';
import Section from '../components/ui/Section';
import { privacy, terms, legalNotice } from '../data/legal';
import { formatDate } from '../data/blog';

function LegalPage({ title, seoTitle, path, description, doc }) {
  return (
    <>
      <Seo title={seoTitle} path={path} description={description} />
      <PageHero eyebrow="Legal" title={title} intro={`Last updated ${formatDate(doc.updated)}.`} image="exterior-wide" imagePosition="50% 55%" />
      <Section tone="white">
        <div className="container-x prose-body max-w-3xl">
          <p className="rounded border border-amber bg-paper p-4 text-[15px] font-semibold">{legalNotice}</p>
          {doc.sections.map((s) => (
            <div key={s.h}>
              <h2>{s.h}</h2>
              {s.p.map((p) => <p key={p} className="mt-3">{p}</p>)}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

export function PrivacyPolicy() {
  return <LegalPage title="Privacy policy" seoTitle="Privacy Policy | Manchester Garage" path="/privacy-policy" description="How Motor Fix Autos, Manchester, uses the details you send through this website, under UK GDPR." doc={privacy} />;
}

export function Terms() {
  return <LegalPage title="Terms & conditions" seoTitle="Terms & Conditions | Manchester Garage" path="/terms" description="Terms for quotes, estimates, payment, parts and vehicles left at Motor Fix Autos, Manchester M13." doc={terms} />;
}
