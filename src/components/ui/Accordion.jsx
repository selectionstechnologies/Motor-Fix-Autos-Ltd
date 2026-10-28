import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function Accordion({ items, headingLevel = 3 }) {
  const [open, setOpen] = useState(null);
  const base = useId();
  const H = `h${headingLevel}`;

  return (
    <div className="divide-y divide-line-light border-y border-line-light">
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${base}-btn-${i}`;
        const panelId = `${base}-panel-${i}`;
        return (
          <div key={item.q}>
            <H className="font-body text-base font-semibold">
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left text-text transition-colors hover:text-brand-ink"
              >
                {item.q}
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border transition-colors ${isOpen ? 'border-brand bg-brand text-ink' : 'border-line-light text-text'}`}>
                  <Plus className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} aria-hidden="true" />
                </span>
              </button>
            </H>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-6 text-text-mute">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
