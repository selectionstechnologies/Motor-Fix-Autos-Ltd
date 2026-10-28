import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, MapPin, Phone, CalendarCheck } from 'lucide-react';
import Logo from '../brand/Logo';
import OpenStatus from '../ui/OpenStatus';
import { business } from '../../data/business';
import { mainNav, moreNav } from '../../data/site';

function TopBar() {
  return (
    <div className="hidden border-b border-line bg-ink text-sm text-mute md:block">
      <div className="container-x flex h-10 items-center justify-between gap-6">
        <p className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
          {business.addressLine}
        </p>
        <div className="flex items-center gap-6">
          <OpenStatus />
          <a href={business.mobileHref} className="transition-colors hover:text-white">Mobile {business.mobile}</a>
        </div>
      </div>
    </div>
  );
}

const linkCls = ({ isActive }) =>
  `relative py-2 text-[15px] font-medium transition-colors hover:text-white after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-brand after:transition-transform ${
    isActive ? 'text-white after:scale-x-100' : 'text-mute after:scale-x-0 hover:after:scale-x-100'
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-40 border-b border-line bg-ink/95 backdrop-blur">
        <nav className="container-x flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]" aria-label="Main navigation">
          <Link to="/" className="text-white" aria-label={`${business.name}, home`}>
            <Logo className="h-9 w-auto sm:h-10" title={business.name} />
          </Link>

          <ul className="hidden items-center gap-7 lg:flex">
            {mainNav.map((l) => (
              <li key={l.to}><NavLink to={l.to} className={linkCls}>{l.label}</NavLink></li>
            ))}
          </ul>

          <div className="hidden items-center gap-5 lg:flex">
            <a href={business.phoneHref} className="flex items-center gap-2 font-semibold text-white transition-colors hover:text-brand">
              <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
              {business.phone}
            </a>
            <Link to="/book" className="btn-primary min-h-[44px] py-2.5">Book a service</Link>
          </div>

          <button
            type="button"
            className="rounded-sm p-2 text-white transition-colors hover:bg-steel lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-ink lg:hidden"
            >
              <ul className="container-x grid gap-1 py-4">
                {[{ label: 'Home', to: '/' }, ...mainNav, ...moreNav].map((l) => (
                  <li key={l.to}>
                    <NavLink
                      to={l.to}
                      end={l.to === '/'}
                      className={({ isActive }) =>
                        `block rounded-sm border-l-2 px-3 py-3 font-display text-xl font-bold uppercase tracking-wide transition-colors ${
                          isActive ? 'border-brand bg-graphite text-white' : 'border-transparent text-mute hover:bg-graphite hover:text-white'
                        }`
                      }
                    >
                      {l.label}
                    </NavLink>
                  </li>
                ))}
                <li className="mt-3 grid gap-2 sm:grid-cols-2">
                  <Link to="/book" className="btn-primary w-full"><CalendarCheck className="h-5 w-5" aria-hidden="true" />Book a service</Link>
                  <a href={business.phoneHref} className="btn-ghost-dark w-full"><Phone className="h-5 w-5" aria-hidden="true" />Call {business.phone}</a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
