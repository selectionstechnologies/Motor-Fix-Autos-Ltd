// Car-care articles. Each body block is { type: 'p' | 'h2' | 'ul' | 'ol', text | items }.
// TODO(client): review the articles and set real publish dates.
export const posts = [
  {
    slug: 'how-to-prepare-your-car-for-its-mot',
    title: 'How to prepare your car for its MOT',
    date: '2026-10-06',
    readTime: '5 min read',
    category: 'MOT',
    relatedService: '/mot',
    excerpt: 'Many MOT failures come down to simple things you can check on your drive in ten minutes. Here is what to look at before the test.',
    body: [
      { type: 'p', text: 'A large share of MOT failures are for small, cheap items: a blown bulb, a worn wiper blade, an empty washer bottle. You can check most of them yourself in ten minutes, and fixing them before the test saves you a failure on your record and a second trip.' },
      { type: 'h2', text: 'Ten-minute checks' },
      { type: 'ol', items: [
        'Lights: switch on sidelights, dipped and main beam, indicators, hazards, brake lights and the number plate light. Ask someone to stand behind the car while you press the brake pedal.',
        'Tyres: tread must be at least 1.6mm across the central three-quarters of the tread. A 20p coin is a quick guide: if you can see the outer band of the coin in the groove, the tread may be too low, so replace the tyre. Also look for cuts and bulges too.',
        'Wipers and washers: the blades should clear the screen without smearing, and the washer bottle must be topped up.',
        'Windscreen: chips or cracks in the area swept by the wipers in front of the driver can mean a fail.',
        'Horn: give it a press.',
        'Seatbelts: pull each one out fully, check for fraying and make sure it locks with a sharp tug.',
        'Number plates: clean, secure and easy to read.',
        'Warning lights: check that no warning lights stay on after the engine starts, including the engine management, ABS and airbag lights.',
        'Fluids: top up the engine oil and make sure there is enough fuel for the emissions test.',
        'Mirrors: present, secure and not cracked.',
      ] },
      { type: 'h2', text: 'Before you drop the car off' },
      { type: 'ul', items: [
        'Clear the boot and cabin. The tester needs to reach the seatbelts and the boot floor.',
        'Leave the locking wheel nut key in the car if you have one.',
        'Check your MOT due date and history on GOV.UK. Previous advisories show what the tester flagged last year.',
      ] },
      { type: 'h2', text: 'Book early and keep your date' },
      { type: 'p', text: 'You can have an MOT up to a month (minus a day) before your current one runs out and keep the same renewal date. Booking early gives you time to sort any repairs without being left with a car you cannot use.' },
      { type: 'p', text: 'If you would rather not do the checks yourself, book a service before the MOT. We look at the same areas and can fix minor items first.' },
    ],
  },
  {
    slug: 'what-a-dpf-warning-light-means',
    title: 'What a DPF warning light means',
    date: '2026-09-22',
    readTime: '5 min read',
    category: 'Diagnostics',
    relatedService: '/services/dpf-cleaning',
    excerpt: 'The DPF light is common on diesels used for short trips around town. Here is what it means, what to do and what to avoid.',
    body: [
      { type: 'p', text: 'Most diesel cars built since around 2009 have a diesel particulate filter (DPF) in the exhaust. It traps soot so it does not come out of the tailpipe. To stop the filter filling up, the car burns the soot off from time to time. This is called regeneration.' },
      { type: 'h2', text: 'Why the light comes on' },
      { type: 'p', text: 'Regeneration needs a hot exhaust, which usually means 20 minutes or more at a steady speed. Short journeys and stop-start city traffic do not get the exhaust hot enough, so soot builds up. When the filter reaches a set level, the DPF warning light comes on.' },
      { type: 'h2', text: 'What to do when it comes on' },
      { type: 'ol', items: [
        'Check your handbook. Many makers advise a drive of 15 to 20 minutes at a steady speed above 40mph to let the filter regenerate.',
        'If it is safe and legal, take that drive on a dual carriageway or motorway.',
        'If the light goes out, the filter has cleared. If it stays on, or other lights appear, book the car in.',
      ] },
      { type: 'h2', text: 'When to get it checked straight away' },
      { type: 'ul', items: [
        'The engine management light comes on as well',
        'The car goes into limp mode with low power',
        'The light comes back soon after a long drive',
      ] },
      { type: 'p', text: 'At that point the filter may be too full to clear on the road, or something else is making the engine produce extra soot. Faulty EGR valves, injectors and sensors are common causes. Cleaning the filter without fixing the cause means the light will come back.' },
      { type: 'h2', text: 'What not to do' },
      { type: 'p', text: 'Do not have the DPF removed. It is illegal for road use, the car will fail its MOT, and it can affect your insurance. A blocked filter can almost always be cleaned or regenerated.' },
      { type: 'h2', text: 'How to prevent it' },
      { type: 'ul', items: [
        'Take a longer steady drive every week or two if most of your trips are short',
        'Use the engine oil grade your manufacturer specifies (usually a low-ash oil for DPF cars)',
        'Do not ignore the engine management light',
        'Keep up with servicing',
      ] },
    ],
  },
  {
    slug: 'why-your-air-con-smells',
    title: 'Why your air con smells, and how to fix it',
    date: '2026-09-08',
    readTime: '4 min read',
    category: 'Air conditioning',
    relatedService: '/services/air-conditioning',
    excerpt: 'A musty smell from the vents is common and usually easy to fix. Here is what causes it and what a proper clean involves.',
    body: [
      { type: 'p', text: 'Turn on the fan and get a smell like damp washing or an old cellar? You are not alone. It is one of the most common air con complaints, and the cause is usually simple.' },
      { type: 'h2', text: 'What causes the smell' },
      { type: 'p', text: 'Air con cools the air by passing it over a part called the evaporator, hidden behind the dashboard. Water condenses on it, which is why you sometimes see a puddle under a parked car on a warm day. That damp, dark space is ideal for bacteria and mould, especially if the system is rarely used.' },
      { type: 'p', text: 'A blocked or old cabin (pollen) filter makes it worse. It traps leaves, dust and moisture right in the airflow.' },
      { type: 'h2', text: 'Smells and what they usually mean' },
      { type: 'ul', items: [
        'Musty or damp: bacteria or mould on the evaporator, or a dirty cabin filter',
        'Sweet, syrupy smell: possible coolant leak from the heater matrix. Get this checked soon.',
        'Burning or electrical smell: switch the system off and have it checked',
        'Exhaust fumes: possible exhaust leak. Get this checked straight away.',
      ] },
      { type: 'h2', text: 'How to fix a musty smell' },
      { type: 'ol', items: [
        'Replace the cabin filter. It is cheap, and on many cars it is a quick job.',
        'Have the system cleaned with an antibacterial treatment that reaches the evaporator.',
        'If the system is also blowing warm air, have it tested and re-gassed.',
      ] },
      { type: 'h2', text: 'Stop it coming back' },
      { type: 'ul', items: [
        'Run the air con for at least 10 minutes a week, even in winter. It also clears a misted windscreen faster.',
        'A few minutes before the end of a journey, switch the air con off but leave the fan running. This helps dry the evaporator.',
        'Change the cabin filter at the interval in your service schedule.',
      ] },
    ],
  },
];

export const getPost = (slug) => posts.find((p) => p.slug === slug);

export const formatDate = (iso) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/London' });
