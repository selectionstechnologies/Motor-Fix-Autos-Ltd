import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Seo from '../components/layout/Seo';
import PageHero from '../components/ui/PageHero';
import Section, { fadeUp, stagger } from '../components/ui/Section';
import { posts, formatDate } from '../data/blog';

export default function Blog() {
  return (
    <>
      <Seo title="Car-Care Tips from a Manchester Garage" path="/blog" description="Practical car-care advice from Motor Fix Autos in Manchester: MOT preparation, DPF warning lights and air con smells." />
      <PageHero eyebrow="Car-care tips" title="Advice from the workshop" intro="Short, practical reads on the questions customers ask us most." />
      <Section>
        <div className="container-x">
          <motion.ul variants={stagger} className="grid gap-6 md:grid-cols-3">
            {posts.map((p) => (
              <motion.li key={p.slug} variants={fadeUp}>
                <Link to={`/blog/${p.slug}`} className="group card relative flex h-full flex-col overflow-hidden p-7 transition hover:-translate-y-1 hover:shadow-card">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink">{p.category}</span>
                  <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight">{p.title}</h2>
                  <p className="mt-3 flex-1 text-[15px] text-text-mute">{p.excerpt}</p>
                  <span className="mt-6 flex items-center justify-between border-t border-line-light pt-4 text-sm text-text-mute">
                    {formatDate(p.date)} · {p.readTime}
                    <ArrowRight className="h-4 w-4 text-brand-ink transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                  <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Section>
    </>
  );
}
