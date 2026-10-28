import { motion } from 'framer-motion';

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

// tone: 'light' (paper), 'white', 'dark' (ink) or 'graphite'. Alternate them for rhythm.
const tones = {
  light: 'bg-paper',
  white: 'bg-white',
  dark: 'dark',
  graphite: 'dark !bg-graphite',
};

// Every section fades up when it scrolls into view
export default function Section({ id, tone = 'light', className = '', children, ...rest }) {
  return (
    <motion.section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 ${tones[tone]} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={fadeUp}
      {...rest}
    >
      {children}
    </motion.section>
  );
}

export function SectionHeading({ eyebrow, title, text, align = 'left', as: Tag = 'h2', children }) {
  const center = align === 'center';
  return (
    <div className={`mb-10 flex flex-col gap-6 sm:mb-12 ${center ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between'}`}>
      <div className={`max-w-2xl ${center ? 'mx-auto' : ''}`}>
        {eyebrow && <p className={`eyebrow mb-5 ${center ? 'eyebrow-center' : ''}`}>{eyebrow}</p>}
        <Tag className="title-xl">{title}</Tag>
        {text && <p className="mt-4 text-lg">{text}</p>}
      </div>
      {children}
    </div>
  );
}
