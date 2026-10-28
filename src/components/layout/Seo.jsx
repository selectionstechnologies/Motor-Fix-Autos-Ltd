import { Helmet } from 'react-helmet-async';
import { SITE_URL, business, schedule, socials } from '../../data/business';

const OG_IMAGE = '/og-image.jpg';

export default function Seo({ title, description, path = '/', image = OG_IMAGE, noindex = false, jsonLd }) {
  const fullTitle = `${title} | ${business.shortName}`;
  const url = `${SITE_URL}${path === '/' ? '/' : path}`;
  const img = image.startsWith('http') ? image : `${SITE_URL}${image}`;
  const blocks = [jsonLd].flat().filter(Boolean);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex" />}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:site_name" content={business.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="The Motor Fix Autos garage on Wadeson Road, Manchester" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
      {blocks.map((b, i) => <script key={i} type="application/ld+json">{JSON.stringify(b)}</script>)}
    </Helmet>
  );
}

const dayCode = { Monday: 'Monday', Tuesday: 'Tuesday', Wednesday: 'Wednesday', Thursday: 'Thursday', Friday: 'Friday', Saturday: 'Saturday', Sunday: 'Sunday' };

// Only days with confirmed opening AND closing times are published, so no guessed hours reach Google.
const hoursSpec = schedule
  .filter((d) => !d.closed && d.open && d.close)
  .map((d) => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: `https://schema.org/${dayCode[d.day]}`, opens: d.open, closes: d.close }));

export const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  '@id': `${SITE_URL}/#business`,
  name: business.name,
  url: SITE_URL,
  image: `${SITE_URL}${OG_IMAGE}`,
  logo: `${SITE_URL}/favicon.svg`,
  telephone: business.phoneIntl,
  email: business.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    addressRegion: 'Greater Manchester',
    postalCode: business.address.postcode,
    addressCountry: business.address.countryCode,
  },
  geo: { '@type': 'GeoCoordinates', latitude: business.geo.lat, longitude: business.geo.lng },
  hasMap: business.mapLink,
  areaServed: { '@type': 'City', name: 'Manchester' },
  ...(hoursSpec.length ? { openingHoursSpecification: hoursSpec } : {}),
  ...(socials.length ? { sameAs: socials.map((s) => s.href) } : {}),
};

export const breadcrumbJsonLd = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', path: '/' }, ...items].map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: `${SITE_URL}${it.path === '/' ? '/' : it.path}`,
  })),
});
