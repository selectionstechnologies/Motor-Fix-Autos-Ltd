import { useHoursStatus } from '../../lib/hours';
import { hoursSummary } from '../../data/business';

// "Open today · closes 6pm" from the hours data in UK time.
// Before hydration it shows the static summary, so prerendered HTML never shows a stale status.
export default function OpenStatus({ className = '' }) {
  const status = useHoursStatus();
  return (
    <p className={`flex items-center gap-2 ${className}`}>
      <span
        className={`h-2.5 w-2.5 shrink-0 rounded-full ${status ? (status.open ? 'bg-brand shadow-[0_0_0_4px_rgb(var(--brand)/0.25)]' : 'bg-amber') : 'bg-mute'}`}
        aria-hidden="true"
      />
      {status ? (
        <span>
          <span className="font-semibold text-white">{status.label}</span>
          {status.detail && <> · {status.detail}</>}
        </span>
      ) : (
        <span>{hoursSummary}</span>
      )}
    </p>
  );
}
