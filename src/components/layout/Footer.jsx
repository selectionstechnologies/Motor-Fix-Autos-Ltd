import { Link } from 'react-router-dom';
import { Phone, Smartphone, Mail, MapPin, Navigation, Clock } from 'lucide-react';
import Logo from '../brand/Logo';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import { business, hoursSummary, socials } from '../../data/business';
import { mainNav, moreNav, legalNav } from '../../data/site';
import { serviceGroups, services, serviceHref } from '../../data/services';
import { hasWhatsApp, waLink } from '../../lib/whatsapp';

const footLink = 'transition-colors hover:text-white';
const heading = 'font-display text-base font-semibold tracking-tight text-white';

export default function Footer() {
  const featured = serviceGroups.map((g) => services.find((s) => s.group === g.id));
  return (
    <footer className="dark border-t border-line pb-20 md:pb-0">
      <div className="h-[3px] bg-gradient-to-r from-brand via-brand/40 to-transparent" aria-hidden="true" />
      <div className="container-x grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link to="/" className="inline-block text-white" aria-label={`${business.name}, home`}>
            <Logo className="h-11 w-auto" title={business.name} />
          </Link>
          <p className="mt-5 max-w-xs text-[15px]">{business.positioning}. Servicing, MOTs, diagnostics and bodywork in Ardwick Green, Manchester.</p>
          {socials.length > 0 && (
            <ul className="mt-6 flex gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-sm border border-line text-white transition-colors hover:border-brand hover:text-brand">
                    {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : label[0]}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <nav aria-label="Footer services" className="lg:col-span-2">
          <h2 className={heading}>Services</h2>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            {featured.map((s) => <li key={s.slug}><Link to={serviceHref(s)} className={footLink}>{s.title}</Link></li>)}
            <li><Link to="/bodywork" className={footLink}>Bodywork & paint</Link></li>
          </ul>
        </nav>

        <nav aria-label="Footer pages" className="lg:col-span-2">
          <h2 className={heading}>Garage</h2>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            {[...mainNav.filter((l) => l.to !== '/services'), ...moreNav, { label: 'Book online', to: '/book' }].map((l) => (
              <li key={l.to}><Link to={l.to} className={footLink}>{l.label}</Link></li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <h2 className={heading}>Visit the workshop</h2>
          <ul className="mt-4 space-y-3 text-[15px]">
            <li className="flex gap-3"><MapPin className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />{business.addressLine}</li>
            <li className="flex gap-3"><Clock className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" /><Link to="/opening-hours" className={footLink}>{hoursSummary}</Link></li>
            <li className="flex gap-3"><Phone className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" /><a href={business.phoneHref} className={footLink}>{business.phone}</a></li>
            <li className="flex gap-3"><Smartphone className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" /><a href={business.mobileHref} className={footLink}>{business.mobile}</a></li>
            <li className="flex gap-3"><Mail className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" /><a href={`mailto:${business.email}`} className={`${footLink} break-all`}>{business.email}</a></li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={business.directionsLink} target="_blank" rel="noopener noreferrer" className="btn-ghost-dark">
              <Navigation className="h-4 w-4" aria-hidden="true" />Get directions
            </a>
            {hasWhatsApp && (
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp"><WhatsAppIcon className="h-5 w-5" />WhatsApp</a>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-3 py-6 text-sm lg:flex-row lg:items-center lg:justify-between">
          {/* TODO(client): verify the company number and add the registered office address in src/data/business.js */}
          <p>
            &copy; {new Date().getFullYear()} {business.name}. Registered in England &amp; Wales, Company No. {business.companyNumber}.
            Registered office: {business.registeredOffice || '[TODO(client)]'}
          </p>
          <ul className="flex gap-5">
            {legalNav.map((l) => <li key={l.to}><Link to={l.to} className={footLink}>{l.label}</Link></li>)}
          </ul>
        </div>
      </div>
    </footer>
  );
}
