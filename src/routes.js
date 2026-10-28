import { detailServices } from './data/services';
import { posts } from './data/blog';

// Every URL that gets a pre-rendered HTML file and a sitemap entry
export const staticRoutes = [
  '/',
  '/services',
  ...detailServices.map((s) => `/services/${s.slug}`),
  '/mot',
  '/bodywork',
  '/about',
  '/reviews',
  '/gallery',
  '/opening-hours',
  '/book',
  '/contact',
  '/blog',
  ...posts.map((p) => `/blog/${p.slug}`),
  '/faq',
  '/privacy-policy',
  '/terms',
];
