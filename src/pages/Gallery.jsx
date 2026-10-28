import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import Seo from '../components/layout/Seo';
import PageHero from '../components/ui/PageHero';
import Section, { reveal, stagger } from '../components/ui/Section';
import Picture from '../components/ui/Picture';
import CtaBand from '../components/ui/CtaBand';
import { gallery } from '../data/gallery';

export default function Gallery() {
  return (
    <>
      <Seo title="Workshop Gallery | Manchester Garage" path="/gallery" description="Photos of the Motor Fix Autos garage, workshop, spray booth and bodywork in Ardwick Green, Manchester M13." />
      <PageHero eyebrow="Gallery" title="The workshop & our work" intro="A look around the garage on Wadeson Road." image="paint-booth" imagePosition="40% 45%" />
      <Section>
        <div className="container-x">
          <motion.ul variants={stagger} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <motion.li key={g.caption} {...reveal(i % 3)}>
                <figure>
                  {g.image ? (
                    <Picture name={g.image} alt={g.alt} position={g.position} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      imgClassName="aspect-[4/3] w-full rounded border border-line-light object-cover" />
                  ) : (
                    <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 rounded border border-dashed border-line-light bg-white text-sm text-text-mute">
                      <Camera className="h-7 w-7" aria-hidden="true" />
                      Photo coming soon
                    </div>
                  )}
                  <figcaption className="mt-3 font-display text-lg font-bold uppercase tracking-wide text-text">{g.caption}</figcaption>
                </figure>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
