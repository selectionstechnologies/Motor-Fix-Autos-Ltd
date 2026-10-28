import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { usePageFocus } from '../../lib/usePageFocus';
import Picture from './Picture';

// Dark banner at the top of every inner page, with breadcrumbs and an optional background photo.
// crumbs: [{ label, to }]. The current page is appended from `current` or `title`.
// Entrance uses a CSS animation so the heading paints before JavaScript loads.
// Every page hero has a photo, with a slow zoom (Ken Burns) (off when reduced motion is set)
export default function PageHero({ eyebrow, title, intro, crumbs = [], current, image = 'workshop', imagePosition, children }) {
  const headingRef = usePageFocus();
  const trail = [{ label: 'Home', to: '/' }, ...crumbs];

  return (
    <section className="dark relative isolate overflow-hidden border-b border-line">
      <div className="absolute inset-0 -z-20 animate-kenburns" aria-hidden="true">
        <Picture name={image} alt="" priority position={imagePosition} sizes="100vw"
          className="block h-full w-full" imgClassName="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/30" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-ink/90 to-transparent" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-brand via-brand/50 to-transparent" aria-hidden="true" />
      <div className="container-x flex min-h-[22rem] flex-col justify-end py-12 sm:min-h-[26rem] sm:py-16 lg:min-h-[30rem] lg:py-20">
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
            <h1 ref={headingRef} tabIndex={-1} className="font-display text-h1 font-bold tracking-tight">
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
