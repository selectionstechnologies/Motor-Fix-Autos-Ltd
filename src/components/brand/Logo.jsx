// Text wordmark: "MOTOR FIX" bold condensed, "AUTOS LTD" small and tracked out, with a green link mark
// inspired by the green symbol on the shop signage. textLength pins each line's width, so the
// wordmark keeps its proportions even before the web font loads.

export function LogoMark({ className = 'h-6 w-auto' }) {
  return (
    <svg viewBox="0 0 44 28" className={className} aria-hidden="true" focusable="false">
      <g fill="none" className="stroke-brand" strokeWidth="4.5" transform="rotate(-12 22 14)">
        <rect x="3" y="7" width="24" height="14" rx="7" />
        <rect x="17" y="7" width="24" height="14" rx="7" />
      </g>
    </svg>
  );
}

export default function Logo({ className = 'h-10 w-auto', title = 'Motor Fix Autos Ltd' }) {
  return (
    <svg viewBox="0 0 176 44" className={className} role="img" aria-label={title} focusable="false">
      <g fill="none" className="stroke-brand" strokeWidth="4.5" transform="translate(0 8) rotate(-12 22 14)">
        <rect x="3" y="7" width="24" height="14" rx="7" />
        <rect x="17" y="7" width="24" height="14" rx="7" />
      </g>
      <text
        x="52" y="24" textLength="122" lengthAdjust="spacingAndGlyphs"
        fill="currentColor" fontFamily="Sora, Arial, sans-serif" fontWeight="700" fontSize="23" letterSpacing="-0.5"
      >
        MOTOR FIX
      </text>
      <text
        x="53" y="39" textLength="92" lengthAdjust="spacing"
        fill="currentColor" fillOpacity="0.72" fontFamily="'DM Sans', Arial, sans-serif" fontWeight="600" fontSize="9.5"
      >
        AUTOS LTD
      </text>
    </svg>
  );
}
