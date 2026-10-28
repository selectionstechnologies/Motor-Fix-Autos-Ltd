import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { usePageFocus } from '../../lib/usePageFocus';
import Picture from './Picture';

// Dark banner at the top of every inner page, with breadcrumbs and an optional background photo.
// crumbs: [{ label, to }]. The current page is appended from `current` or `title`.
// Entrance uses a CSS animation so the heading paints before JavaScript loads.
export default function PageHero({ eyebrow, title, intro, crumbs = [], current, image, imagePosition, children }) {
  const headingRef = usePageFocus();
  const trail = [{ label: 'Home', to: '/' }, ...crumbs];

  return (
    <section className="dark relative isolate overflow-hidden border-b border-line">
      {image && (
        <>
          <Picture name={image} alt="" priority position={imagePosition} sizes="100vw"
            className="absolute inset-0 -z-20" imgClassName="h-full w-full object-cover opacity-50" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/90 to-ink/40" aria-hidden="true" />
        </>
      )}
      <div className="container-x py-12 sm:py-16 lg:py-20">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm">
            {trail.map((c) => (
              <li key={c.to} className="flex items-center gap-1.5">
                <Link to={c.to} className="text-mute transition-colors hover:text-white">{c.label}</Link>
                <ChevronRight className="h-3.5 w-3.5 text-mute" aria-hidden="true" />
              </li>
            ))}
            <li aria-current="page" className="font-medium text-white">{current ?? title}</li>
          </ol>
        </nav>
        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="animate-rise lg:col-span-8">
            {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
            <h1 ref={headingRef} tabIndex={-1} className="font-display text-h1 font-bold uppercase">
              {title}
            </h1>
            {intro && <p className="mt-5 max-w-2xl text-lg text-mute">{intro}</p>}
          </div>
          {children && <div className="animate-rise lg:col-span-4">{children}</div>}
        </div>
      </div>
    </section>
  );
}
