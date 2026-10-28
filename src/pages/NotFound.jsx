import { Link } from 'react-router-dom';
import Seo from '../components/layout/Seo';
import { usePageFocus } from '../lib/usePageFocus';

export default function NotFound() {
  const ref = usePageFocus();
  return (
    <>
      <Seo title="Page Not Found | Manchester Garage" path="/404" description="This page could not be found. Visit Motor Fix Autos, Manchester, for MOTs, servicing and bodywork." noindex />
      <section className="dark">
        <div className="container-x flex min-h-[60vh] flex-col items-start justify-center py-20">
          <p className="font-display text-8xl font-bold text-brand">404</p>
          <h1 ref={ref} tabIndex={-1} className="mt-4 font-display text-h1 font-bold tracking-tight">Wrong turn</h1>
          <p className="mt-4 max-w-lg text-lg">This page has moved or never existed. Try one of these instead.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/" className="btn-primary">Back to home</Link>
            <Link to="/services" className="btn-ghost-dark">Services</Link>
            <Link to="/book" className="btn-ghost-dark">Book a service</Link>
          </div>
        </div>
      </section>
    </>
  );
}
