import { Link } from 'react-router-dom';
import { Phone, Navigation, CalendarCheck } from 'lucide-react';
import { business } from '../../data/business';

// Sticky Call · Directions · Book bar on small screens
export default function MobileActionBar() {
  const item = 'flex flex-1 flex-col items-center justify-center gap-1 py-2.5 text-xs font-semibold';
  return (
    <nav aria-label="Quick actions" className="fixed inset-x-0 bottom-0 z-50 flex border-t border-line bg-ink/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
      <a href={business.phoneHref} className={`${item} text-white`}>
        <Phone className="h-5 w-5 text-brand" aria-hidden="true" />Call
      </a>
      <a href={business.directionsLink} target="_blank" rel="noopener noreferrer" className={`${item} border-x border-line text-white`}>
        <Navigation className="h-5 w-5 text-brand" aria-hidden="true" />Directions
      </a>
      <Link to="/book" className={`${item} bg-brand text-ink`}>
        <CalendarCheck className="h-5 w-5" aria-hidden="true" />Book
      </Link>
    </nav>
  );
}
