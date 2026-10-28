// Images are referenced by name from src/assets/originals (see components/ui/Picture.jsx).
// Items without `image` render a "photo coming soon" tile.
// TODO(client): send finished-work photos (especially a repaired "after" shot of the red car).

export const gallery = [
  {
    image: 'exterior-front',
    caption: 'Our garage on Wadeson Road',
    alt: 'Front of the Motor Fix Autos garage on Wadeson Road, Manchester, with the MOT sign and the reception entrance',
    position: '55% 45%',
  },
  {
    image: 'workshop',
    caption: 'Inside the workshop',
    alt: 'Inside the workshop: a blue car raised on a two-post lift with an engine being rebuilt on a pallet in front',
    position: '50% 30%',
  },
  {
    image: 'paint-booth',
    caption: 'Respraying in the spray booth',
    alt: 'A painter in a protective suit and mask spraying primer on the side of a grey car in the spray booth',
    position: '40% 55%',
  },
  {
    image: 'bodywork-before',
    caption: 'Accident damage, before repair',
    alt: 'A red car with a crushed rear quarter panel and missing rear light, before body repair',
    position: '30% 55%',
  },
  {
    image: 'exterior-wide',
    caption: 'The building from Wadeson Road',
    alt: 'Wide view of the Motor Fix Autos building and car park on Wadeson Road, Ardwick Green',
    position: '50% 55%',
  },
  { caption: 'Finished bodywork' },
];
