import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Seo, { breadcrumbJsonLd } from '../components/layout/Seo';
import PageHero from '../components/ui/PageHero';
import Section from '../components/ui/Section';
import CtaBand from '../components/ui/CtaBand';
import NotFound from './NotFound';
import { getPost, formatDate } from '../data/blog';

function Block({ b }) {
  if (b.type === 'h2') return <h2>{b.text}</h2>;
  if (b.type === 'ul') return <ul>{b.items.map((i) => <li key={i}>{i}</li>)}</ul>;
  if (b.type === 'ol') return <ol>{b.items.map((i) => <li key={i}>{i}</li>)}</ol>;
  return <p>{b.text}</p>;
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);
  if (!post) return <NotFound />;
  const path = `/blog/${post.slug}`;

  return (
    <>
      <Seo
        title={`${post.title} | Manchester Garage Advice`}
        path={path}
        description={post.excerpt}
        jsonLd={breadcrumbJsonLd([{ name: 'Car-care tips', path: '/blog' }, { name: post.title, path }])}
      />
      <PageHero eyebrow={`${post.category} · ${post.readTime}`} title={post.title} intro={post.excerpt} crumbs={[{ label: 'Car-care tips', to: '/blog' }]} current="Article" image={post.heroImage ?? 'workshop'} imagePosition="50% 35%" />
      <Section tone="white">
        <article className="container-x max-w-3xl">
          <p className="text-sm text-text-mute">Published <time dateTime={post.date}>{formatDate(post.date)}</time></p>
          <div className="prose-body mt-8">
            {post.body.map((b, i) => <Block key={i} b={b} />)}
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line-light pt-6">
            <Link to="/blog" className="link-arrow"><ArrowLeft className="h-4 w-4" aria-hidden="true" /> All car-care tips</Link>
            {post.relatedService && <Link to={post.relatedService} className="link-arrow">Related service <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>}
          </div>
        </article>
      </Section>
      <CtaBand />
    </>
  );
}
