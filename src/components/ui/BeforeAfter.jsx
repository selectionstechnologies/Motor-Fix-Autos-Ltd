import { useId, useState } from 'react';
import { MoveHorizontal } from 'lucide-react';
import Picture from './Picture';

// Keyboard-accessible before/after slider (a native range input drives the split).
// If there is no `after` photo yet, it shows the before image alone with a caption.
// Never fake an "after" image.
export default function BeforeAfter({ before, after, caption }) {
  const [pos, setPos] = useState(50);
  const [focused, setFocused] = useState(false);
  const id = useId();

  if (!after) {
    return (
      <figure>
        <div className="relative overflow-hidden rounded border border-line-light">
          <Picture name={before.name} alt={before.alt} position={before.position} sizes="(min-width: 1024px) 50vw, 100vw"
            imgClassName="aspect-[4/3] h-full w-full object-cover" />
          <span className="absolute left-3 top-3 rounded-sm bg-ink px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-white">Before</span>
        </div>
        <figcaption className="mt-3 text-[15px] text-text-mute">{caption}</figcaption>
      </figure>
    );
  }

  return (
    <figure>
      <div className="relative overflow-hidden rounded border border-line-light">
        <Picture name={after.name} alt={after.alt} position={after.position} sizes="(min-width: 1024px) 50vw, 100vw"
          imgClassName="aspect-[4/3] h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Picture name={before.name} alt={before.alt} position={before.position} sizes="(min-width: 1024px) 50vw, 100vw"
            imgClassName="aspect-[4/3] h-full w-full object-cover" />
        </div>
        <span className="absolute left-3 top-3 rounded-sm bg-ink px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-white">Before</span>
        <span className="absolute right-3 top-3 rounded-sm bg-brand px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-ink">After</span>
        <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white" style={{ left: `${pos}%` }} aria-hidden="true">
          <span className={`absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-ink text-white ${focused ? 'ring-2 ring-brand ring-offset-2 ring-offset-ink' : ''}`}>
            <MoveHorizontal className="h-5 w-5" />
          </span>
        </div>
        <label htmlFor={id} className="sr-only">Drag or use arrow keys to compare before and after</label>
        <input
          id={id}
          type="range"
          min="0"
          max="100"
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          aria-valuetext={`${pos}% before`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      {caption && <figcaption className="mt-3 text-[15px] text-text-mute">{caption}</figcaption>}
    </figure>
  );
}
