/** @type {import('tailwindcss').Config} */

// Every colour comes from a CSS variable in src/index.css (:root), stored as RGB channels
// so Tailwind opacity modifiers like bg-ink/80 keep working.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: token('ink'),
        graphite: token('graphite'),
        steel: token('steel'),
        line: token('line'),
        mute: token('mute'),
        paper: token('paper'),
        white: token('white'),
        text: token('text'),
        'text-mute': token('text-mute'),
        'line-light': token('line-light'),
        brand: {
          DEFAULT: token('brand'),
          dark: token('brand-dark'),
          soft: token('brand-soft'),
          ink: token('brand-ink'),
        },
        amber: token('amber'),
        danger: {
          DEFAULT: token('danger'),
          ink: token('danger-ink'),
        },
        whatsapp: token('whatsapp'),
      },
      fontFamily: {
        display: ['"Barlow Condensed"', '"Barlow Condensed Fallback"', '"Arial Narrow"', 'sans-serif'],
        body: ['Inter', '"Inter Fallback"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(2.75rem, 6vw, 5.5rem)', { lineHeight: '0.95', letterSpacing: '0.01em' }],
        h1: ['clamp(2.25rem, 4.5vw, 4rem)', { lineHeight: '1', letterSpacing: '0.01em' }],
        h2: ['clamp(1.875rem, 3.2vw, 2.875rem)', { lineHeight: '1.05', letterSpacing: '0.01em' }],
        h3: ['clamp(1.25rem, 1.6vw, 1.5rem)', { lineHeight: '1.2' }],
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '8px',
        lg: '16px',
      },
      boxShadow: {
        // Light sections only; dark sections use borders and glow
        card: '0 1px 2px rgb(var(--ink) / 0.06), 0 16px 32px -20px rgb(var(--ink) / 0.35)',
        glow: '0 0 0 1px rgb(var(--brand) / 0.45), 0 8px 28px -8px rgb(var(--brand) / 0.45)',
      },
      transitionDuration: {
        DEFAULT: '250ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        rise: 'rise 500ms cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};
