import { useState } from 'react';
import { MapPin, Phone, Smartphone, Mail, Navigation, Map as MapIcon } from 'lucide-react';
import { business } from '../../data/business';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import { hasWhatsApp, waLink } from '../../lib/whatsapp';

const items = [
  { icon: Phone, label: 'Workshop', value: business.phone, href: business.phoneHref },
  { icon: Smartphone, label: 'Mobile', value: business.mobile, href: business.mobileHref },
  hasWhatsApp && { icon: WhatsAppIcon, label: 'WhatsApp', value: business.mobile, href: waLink(), external: true },
  { icon: Mail, label: 'Email', value: business.email, href: `mailto:${business.email}` },
  { icon: MapPin, label: 'Address', value: business.addressLine, href: business.mapLink, external: true },
].filter(Boolean);

export default function ContactDetails() {
  return (
    <address className="grid gap-3 not-italic">
      {items.map(({ icon: Icon, label, value, href, external }) => (
        <a
          key={label}
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="group card flex items-start gap-4 p-5 transition duration-300 hover:border-brand-dark hover:shadow-card"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-ink text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-ink">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block text-sm text-text-mute">{label}</span>
            <span className="block break-words font-semibold text-text">{value}</span>
          </span>
        </a>
      ))}
    </address>
  );
}

// Google Maps sets cookies, so the iframe only loads after the visitor asks for it (UK GDPR / PECR)
export function MapEmbed({ className = '', heightClass = 'h-80 lg:h-full lg:min-h-[28rem]' }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`overflow-hidden rounded border border-line-light ${className}`}>
      {loaded ? (
        <iframe
          title={`Map showing ${business.name}, ${business.addressLine}`}
          src={business.mapEmbed}
          className={`w-full border-0 ${heightClass}`}
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className={`dark relative flex w-full flex-col items-center justify-center gap-4 p-8 text-center ${heightClass}`}>
          <div className="absolute inset-0 bg-[linear-gradient(rgb(var(--line))_1px,transparent_1px),linear-gradient(90deg,rgb(var(--line))_1px,transparent_1px)] bg-[size:32px_32px] opacity-60" aria-hidden="true" />
          <div className="relative flex flex-col items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-ink">
              <MapPin className="h-7 w-7" aria-hidden="true" />
            </span>
            <p className="max-w-xs font-semibold text-white">{business.addressLine}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <button type="button" onClick={() => setLoaded(true)} className="btn-primary">
                <MapIcon className="h-5 w-5" aria-hidden="true" />
                Load map
              </button>
              <a href={business.directionsLink} target="_blank" rel="noopener noreferrer" className="btn-ghost-dark">
                <Navigation className="h-5 w-5" aria-hidden="true" />
                Get directions
              </a>
            </div>
            <p className="max-w-sm text-xs">Loading the map shows content from Google, which may set cookies. See our privacy policy.</p>
          </div>
        </div>
      )}
    </div>
  );
}
