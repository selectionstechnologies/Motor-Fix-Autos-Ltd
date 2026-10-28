import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import { fadeUp, stagger } from '../ui/Section';
import { reviews } from '../../data/reviews';
import { business } from '../../data/business';
import { formatDate } from '../../data/blog';

export function GoogleReviewsButton({ className = 'btn-primary' }) {
  return (
    <a href={business.reviewsUrl} target="_blank" rel="noopener noreferrer" className={className}>
      Read our reviews on Google
      <ExternalLink className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

// Renders real reviews from src/data/reviews.js. While that list is empty, it points to Google instead.
export default function ReviewsList({ limit }) {
  const list = limit ? reviews.slice(0, limit) : reviews;

  if (!list.length) {
    return (
      <div className="card flex flex-col items-start gap-5 p-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-2xl font-bold uppercase text-text">See what customers say</p>
          <p className="mt-1 text-text-mute">Our customer reviews are on our Google Business profile.</p>
        </div>
        <GoogleReviewsButton />
      </div>
    );
  }

  return (
    <motion.ul variants={stagger} className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {list.map((r) => (
        <motion.li key={`${r.author}-${r.date}`} variants={fadeUp}>
          <figure className="card flex h-full flex-col p-6 sm:p-7">
            <div className="flex gap-0.5" role="img" aria-label={`Rated ${r.rating} out of 5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < r.rating ? 'fill-amber text-amber' : 'text-line-light'}`} aria-hidden="true" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-text">&ldquo;{r.text}&rdquo;</blockquote>
            <figcaption className="mt-6 border-t border-line-light pt-4 text-sm text-text-mute">
              <span className="block font-semibold text-text">{r.author}</span>
              {r.source} · {formatDate(r.date)}
            </figcaption>
          </figure>
        </motion.li>
      ))}
    </motion.ul>
  );
}
