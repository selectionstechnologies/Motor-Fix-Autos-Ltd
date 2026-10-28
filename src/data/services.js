import {
  Wrench, ClipboardCheck, ScanLine, Filter, Wind, CircleDot, Snowflake, Disc3, Flame,
  Hammer, SprayCan, Car, Sparkles, ShieldAlert, Truck,
} from 'lucide-react';

// No prices anywhere: every service is "Call for a quote" / "Free estimate" until the client confirms otherwise.
// TODO(client): read through every service and remove anything the garage does not offer.

export const serviceGroups = [
  { id: 'servicing', title: 'Servicing & Repairs', text: 'Routine servicing, mechanical repairs and the jobs that keep a car on the road.' },
  { id: 'mot', title: 'MOT', text: 'Car and van MOT testing in our own test bay.' },
  { id: 'diagnostics', title: 'Diagnostics & Engine', text: 'Warning lights, fault codes and emissions systems on modern diesel and petrol engines.' },
  { id: 'tyres-brakes', title: 'Tyres & Brakes', text: 'Grip, stopping and drive: the parts that keep you safe.' },
  { id: 'bodywork', title: 'Bodywork & Paint', text: 'Dents, scratches, panels, paint and wheels, repaired in our own body shop.' },
];

export const services = [
  // ───────────── Servicing & Repairs ─────────────
  {
    slug: 'servicing-and-repairs',
    group: 'servicing',
    icon: Wrench,
    title: 'Servicing & Repairs',
    short: 'Interim and full servicing plus general mechanical repairs for every make.',
    intro: [
      'A regular service keeps your engine clean, catches worn parts early and helps the car hold its value. We service all makes, with specialist knowledge of German models such as BMW, Mercedes-Benz, Audi, VW, SEAT and Škoda.',
      'If the car needs a repair, we explain the fault, give you a quote and only start once you have agreed to the work.',
    ],
    signs: [
      'Your service light or dashboard reminder is on',
      'It has been 12 months or 10,000 miles since the last service',
      'New noises, knocks or rattles when driving',
      'Oil leaks or spots under the car',
      'The car feels down on power or uses more fuel than usual',
    ],
    whatWeDo: [
      { title: 'Check in', text: 'We note your mileage, any concerns and when the car was last serviced.' },
      { title: 'Inspect and service', text: 'Oil and filter change, fluid levels and a visual check of brakes, tyres, steering and suspension.' },
      { title: 'Report', text: 'We call you with anything that needs attention, ranked by what is urgent and what can wait.' },
      { title: 'Reset and hand back', text: 'Service indicator reset and a summary of the work done.' },
    ],
    faqs: [
      { q: 'Will servicing with you affect my manufacturer warranty?', a: 'UK competition rules let you use an independent garage without losing your warranty, as long as the work follows the manufacturer schedule and uses parts of matching quality. Tell us your warranty terms when you book.' },
      { q: 'How long does a service take?', a: 'Most services are done the same day. Book ahead and we will give you a collection time when you drop off.' }, // TODO(client): confirm typical turnaround
      { q: 'How much does a service cost?', a: 'It depends on the car and the type of service. Call us with your registration for a quote.' },
    ],
  },
  {
    slug: 'air-conditioning',
    group: 'servicing',
    icon: Snowflake,
    title: 'Air Conditioning',
    short: 'Air con re-gas, leak checks and repairs so the cabin stays cool and clear.',
    intro: [
      'Air con systems lose a little refrigerant every year. Once the level drops, the system blows warm air, works harder and can fail early. Air con also dries the air, so it clears a misted windscreen much faster in winter.',
      'We test the system, find leaks, re-gas it to the correct level and fix faulty parts.',
    ],
    signs: [
      'Air blows warm or only slightly cool',
      'A musty or damp smell from the vents',
      'The windscreen takes a long time to demist',
      'A clicking or rattling noise when the air con is switched on',
      'Water inside the footwell',
    ],
    whatWeDo: [
      { title: 'System test', text: 'We measure vent temperature and system pressure to see how it is performing.' },
      { title: 'Leak check', text: 'A leak test before re-gassing, so you are not paying to fill a system that will empty again.' },
      { title: 'Re-gas', text: 'Old refrigerant recovered and the system refilled to the manufacturer specification.' },
      { title: 'Repair', text: 'If a part has failed, such as a condenser or compressor, we quote before replacing it.' },
    ],
    faqs: [
      { q: 'How often does air con need a re-gas?', a: 'Most makers suggest a re-gas every 2 years, but if it still blows cold, it may not need one yet. We can test it first.' },
      { q: 'Why does my air con smell?', a: 'Usually bacteria or mould on the evaporator or a blocked cabin filter. A clean and a new filter normally fix it. See our article on air con smells.' },
    ],
  },
  {
    slug: 'welding',
    group: 'servicing',
    icon: Flame,
    title: 'Welding',
    short: 'Structural and MOT welding for rusted sills, floors, subframes and exhausts.',
    intro: [
      'Corrosion on sills, floor pans and suspension mounts is a common MOT failure on older cars and vans. Left alone, it weakens the structure the car relies on in a crash.',
      'We cut out the rot, let in new metal and protect the repair, so the car passes its test and stays solid.',
    ],
    signs: [
      'An MOT failure or advisory for corrosion',
      'Visible rust bubbling on sills or wheel arches',
      'Holes in the floor or boot well',
      'A blowing or rattling exhaust',
    ],
    whatWeDo: [
      { title: 'Assess', text: 'We put the car on a lift and check how far the corrosion has spread.' },
      { title: 'Quote', text: 'You get a quote for the repair, with photos of the problem if you want them.' },
      { title: 'Repair', text: 'Corroded metal cut out, new steel welded in and finished.' },
      { title: 'Protect', text: 'Seam sealer and underbody protection applied to the repaired area.' },
    ],
    faqs: [
      { q: 'Can you weld my car after an MOT failure?', a: 'Yes. Bring the failure sheet so we can see exactly what the tester flagged.' },
      { q: 'Is welding worth it on an older car?', a: 'It depends on how much rust there is and the value of the car. We will give you an honest view before you spend money.' },
    ],
  },
  {
    slug: 'recovery-collection-delivery',
    group: 'servicing',
    icon: Truck,
    title: 'Recovery, Collection & Delivery',
    short: 'Non-runner recovery and vehicle collection and delivery, by arrangement.',
    intro: [
      'If your car will not start, or you cannot get to us during the working day, we can arrange to bring it to the workshop and return it when the job is done.',
      'Call us with your location and the problem, and we will tell you what we can arrange and when.',
    ],
    signs: [
      'The car will not start or is not safe to drive',
      'You cannot take time off work to drop the car off',
      'The car has failed an MOT and should not be driven',
    ],
    whatWeDo: [
      { title: 'Call us', text: 'Tell us where the car is, what is wrong and when you need it back.' },
      { title: 'Collection', text: 'We collect the car at an agreed time.' },
      { title: 'Repair', text: 'We diagnose, quote and repair once you approve.' },
      { title: 'Return', text: 'The car is delivered back to you.' },
    ],
    faqs: [
      { q: 'Do you charge for collection and delivery?', a: 'It depends on distance and the job. Call us for a quote.' }, // TODO(client): confirm charges and area covered
      { q: 'I have broken down on a motorway. Can you help?', a: 'If you are in a live lane or anyone is in danger, call 999 first. For motorway breakdowns, use your breakdown cover. Once you are safe, call us to arrange the repair.' },
    ],
  },

  // ───────────── MOT (has its own page at /mot) ─────────────
  {
    slug: 'mot',
    href: '/mot',
    group: 'mot',
    icon: ClipboardCheck,
    title: 'MOT (Car & Van)',
    short: 'MOT testing for cars and vans, with repairs on site if anything fails.',
  },

  // ───────────── Diagnostics & Engine ─────────────
  {
    slug: 'diagnostics',
    group: 'diagnostics',
    icon: ScanLine,
    title: 'Diagnostics',
    short: 'Fault code reading and live data checks to find the cause of warning lights.',
    intro: [
      'Modern cars report faults through warning lights and stored codes. A code tells us where to look. It does not always tell us which part has failed, so we combine the code with live data and hands-on testing.',
      'That way you pay to fix the actual fault, not to replace parts until the light goes out.',
    ],
    signs: [
      'Engine management (check engine) light is on',
      'Limp mode: the car will not rev or go above low speed',
      'Rough idle, misfires or hesitation',
      'ABS, airbag or other system warnings',
      'Starting problems or flat battery for no clear reason',
    ],
    whatWeDo: [
      { title: 'Read codes', text: 'We connect diagnostic equipment and read stored and pending fault codes.' },
      { title: 'Live data', text: 'Sensor readings checked while the engine runs, to confirm what the codes suggest.' },
      { title: 'Test', text: 'Physical checks on wiring, connectors and components.' },
      { title: 'Explain and quote', text: 'You get the cause, the fix and a quote before any repair.' },
    ],
    faqs: [
      { q: 'Can I keep driving with the engine light on?', a: 'A steady light means get it checked soon. A flashing light usually means a misfire that can damage the catalytic converter: reduce speed and get it looked at straight away.' },
      { q: 'Do you have dealer-level software for German makes?', a: 'Call us with your model and we will confirm what we can read and code.' }, // TODO(client): confirm diagnostic equipment
    ],
  },
  {
    slug: 'dpf-cleaning',
    group: 'diagnostics',
    icon: Filter,
    title: 'DPF Regeneration & Cleaning',
    short: 'Forced regeneration and cleaning for a blocked diesel particulate filter (DPF).',
    intro: [
      'A diesel particulate filter (DPF) traps soot from the exhaust and burns it off when the engine runs hot on longer drives. City driving and short trips do not give it the chance, so the filter blocks.',
      'We find out why the filter blocked, then clean or regenerate it. Fixing the cause matters, or the warning light comes straight back.',
    ],
    signs: [
      'The DPF warning light is on',
      'Loss of power or limp mode',
      'The engine fan runs after you switch off',
      'Higher fuel use than usual',
      'Mostly short journeys or stop-start city driving',
    ],
    whatWeDo: [
      { title: 'Diagnose', text: 'Read codes and check soot load, sensors and the EGR system.' },
      { title: 'Forced regeneration', text: 'Where the filter is not too full, we run a controlled regeneration using diagnostic equipment.' },
      { title: 'Clean', text: 'Heavily blocked filters are cleaned to restore flow.' },
      { title: 'Prevent', text: 'Advice on driving and servicing so it does not block again.' },
    ],
    faqs: [
      { q: 'Can I just remove the DPF?', a: 'No. Removing a DPF is illegal for road use in the UK and the car will fail its MOT. We do not remove them.' },
      { q: 'How do I stop the DPF blocking again?', a: 'A regular 20 to 30 minute drive at steady speed lets it regenerate. Using the correct low-ash engine oil also helps.' },
    ],
  },
  {
    slug: 'egr-cleaning',
    group: 'diagnostics',
    icon: Wind,
    title: 'EGR Cleaning',
    short: 'Cleaning and repair of sticking or carboned-up EGR valves.',
    intro: [
      'The exhaust gas recirculation (EGR) valve sends some exhaust gas back into the engine to cut emissions. Over time soot builds up and the valve sticks open or closed.',
      'A sticking EGR valve causes poor running, warning lights and can contribute to a blocked DPF. We clean or replace the valve and check the system around it.',
    ],
    signs: [
      'Engine management light with EGR-related codes',
      'Rough idle or stalling',
      'Hesitation or flat spots when accelerating',
      'Black smoke from the exhaust',
    ],
    whatWeDo: [
      { title: 'Diagnose', text: 'Fault codes and live data confirm whether the EGR valve is the cause.' },
      { title: 'Remove and inspect', text: 'We check the valve, cooler and intake for carbon build-up.' },
      { title: 'Clean or replace', text: 'Cleaned where possible, replaced if it has failed.' },
      { title: 'Test', text: 'Codes cleared and the car road-tested.' },
    ],
    faqs: [
      { q: 'Is it better to clean or replace an EGR valve?', a: 'If the valve is only carboned up, cleaning is usually enough. If the motor or sensor has failed, it needs replacing. We will tell you which.' },
    ],
  },

  // ───────────── Tyres & Brakes ─────────────
  {
    slug: 'tyres',
    group: 'tyres-brakes',
    icon: CircleDot,
    title: 'Tyres',
    short: 'New tyres, puncture checks and fitting for cars and vans.',
    intro: [
      'Tyres are the only part of the car touching the road. The legal minimum tread depth in the UK is 1.6mm across the central three-quarters of the tread, but grip in the wet drops well before that.',
      'We supply and fit tyres to suit your car and budget, and check pressures and condition while the car is with us.',
    ],
    signs: [
      'Tread close to the wear bars or below 3mm',
      'Cuts, bulges or cracks in the sidewall',
      'Uneven wear on the inner or outer edge',
      'A tyre that keeps losing pressure',
      'The TPMS (tyre pressure) warning light',
    ],
    whatWeDo: [
      { title: 'Check', text: 'Tread depth, sidewalls and pressures on all four tyres.' },
      { title: 'Quote', text: 'Options to suit your car and budget.' },
      { title: 'Fit and balance', text: 'Tyres fitted and wheels balanced.' },
      { title: 'Advise', text: 'If wear is uneven, we check for alignment or suspension problems.' },
    ],
    faqs: [
      { q: 'Can a puncture be repaired?', a: 'Often, if it is in the central part of the tread and the tyre has not been driven on flat. Damage near the sidewall means a new tyre.' },
      { q: 'Do you do wheel alignment?', a: 'Call us to check.' }, // TODO(client): confirm wheel alignment availability
    ],
  },
  {
    slug: 'brakes-and-clutch',
    group: 'tyres-brakes',
    icon: Disc3,
    title: 'Brakes & Clutch',
    short: 'Pads, discs, fluid and clutch replacement for cars and vans.',
    intro: [
      'Brakes wear every time you use them. Pads, discs and brake fluid all need replacing during the life of a car, and leaving them too long costs more in the end.',
      'We also replace clutches and dual-mass flywheels, which are common on German diesel models.',
    ],
    signs: [
      'Squealing, grinding or scraping when braking',
      'The car pulls to one side under braking',
      'A soft or spongy brake pedal',
      'The brake warning light is on',
      'A slipping clutch, high biting point or difficulty changing gear',
      'Vibration or rattling at idle (often the flywheel)',
    ],
    whatWeDo: [
      { title: 'Inspect', text: 'Pads, discs, calipers, hoses and fluid checked, or clutch operation tested.' },
      { title: 'Quote', text: 'Clear options and a quote before any work.' },
      { title: 'Replace', text: 'Worn parts replaced and the system bled or adjusted.' },
      { title: 'Road test', text: 'Every brake and clutch job is road-tested before handover.' },
    ],
    faqs: [
      { q: 'How often should brake fluid be changed?', a: 'Most makers recommend every 2 years, because the fluid absorbs water and becomes less effective.' },
      { q: 'Do I need new discs as well as pads?', a: 'Not always. We measure disc thickness and check for scoring before recommending them.' },
    ],
  },

  // ───────────── Bodywork & Paint ─────────────
  {
    slug: 'dent-and-scratch-repair',
    group: 'bodywork',
    icon: Hammer,
    title: 'Dent & Scratch Repair',
    short: 'Car park dents, scuffs and scratches repaired and colour-matched.',
    intro: [
      'Small dents and scratches spoil the look of a car and can let rust start if the paint is broken through.',
      'We repair dents, fill and flat deep scratches and blend the paint so the repair is hard to spot.',
    ],
    signs: [
      'Car park dings and door dents',
      'Scratches through to the primer or metal',
      'Scuffed bumper corners',
      'Keyed paintwork',
    ],
    whatWeDo: [
      { title: 'Free estimate', text: 'We look at the damage and give you a price before any work.' },
      { title: 'Repair', text: 'Dents pulled or filled and scratches prepared.' },
      { title: 'Paint', text: 'Colour-matched paint applied and blended into the surrounding panel.' },
      { title: 'Finish', text: 'Lacquered and polished for an even shine.' },
    ],
    faqs: [
      { q: 'Can you send me a quote from photos?', a: 'Yes, photos help us give a rough idea. A final price needs us to see the car in person.' },
      { q: 'Will the paint match?', a: 'We match paint to your car’s colour code and blend it into the surrounding panel so the edge does not show.' },
    ],
  },
  {
    slug: 'painting-and-respraying',
    group: 'bodywork',
    icon: SprayCan,
    title: 'Painting & Respraying',
    short: 'Panel resprays and full resprays in our spray booth.',
    image: 'paint-booth',
    intro: [
      'From a single bumper to a full colour change, a good paint job depends on preparation. We take the time to get the surface right before any paint goes on.',
      'Painting is done in a dedicated spray booth, which keeps dust off the finish while it cures.',
    ],
    signs: [
      'Faded, peeling or flaking paint',
      'Lacquer failure on the roof or bonnet',
      'Mismatched panels after an old repair',
      'You want a colour change',
    ],
    whatWeDo: [
      { title: 'Estimate', text: 'We check the paint condition and give you a free estimate.' },
      { title: 'Prepare', text: 'Masking, sanding and priming so the new paint bonds properly.' },
      { title: 'Spray', text: 'Base coat and lacquer applied in the spray booth.' },
      { title: 'Finish', text: 'Flatted and polished, then refitted and checked in daylight.' },
    ],
    faqs: [
      { q: 'Do I need to tell the DVLA if I change colour?', a: 'Yes. You must update the colour on your V5C logbook if the car is resprayed a different colour.' },
      { q: 'How long does a respray take?', a: 'It depends on the size of the job. We will give you a time with your estimate.' },
    ],
  },
  {
    slug: 'body-repair-and-panel-replacement',
    group: 'bodywork',
    icon: Car,
    title: 'Body Repair & Panel Replacement',
    short: 'Damaged panels repaired or replaced, aligned and painted to match.',
    image: 'bodywork-before',
    intro: [
      'When a panel is too badly damaged to repair, we replace it, line it up with the panels around it and paint it to match.',
      'We handle wings, doors, bumpers, bonnets and rear quarters on cars and vans.',
    ],
    signs: [
      'Deep dents or creases in a panel',
      'Torn or cracked bumpers',
      'Panel gaps that no longer line up',
      'Rust that has gone through a panel',
    ],
    whatWeDo: [
      { title: 'Free estimate', text: 'We check the damage and advise whether to repair or replace.' },
      { title: 'Strip and repair', text: 'Damaged parts removed and the structure behind them checked.' },
      { title: 'Fit and align', text: 'New or repaired panels fitted with even gaps.' },
      { title: 'Paint and finish', text: 'Painted to match and refitted with all trims and lights.' },
    ],
    faqs: [
      { q: 'Should I repair or replace a panel?', a: 'Minor damage is usually cheaper to repair. Heavily creased or stretched metal is often better replaced. We will explain the options.' },
    ],
  },
  {
    slug: 'alloy-wheel-refurbishment',
    group: 'bodywork',
    icon: Sparkles,
    title: 'Alloy Wheel Refurbishment',
    short: 'Kerbed, scuffed and corroded alloys repaired and refinished.',
    intro: [
      'Kerb damage and corrosion make wheels look tired. Corrosion on the rim can also stop a tyre sealing properly and cause slow leaks.',
      'We repair and refinish alloy wheels so they look right and seal properly again.',
    ],
    signs: [
      'Kerb scrapes on the rim',
      'Flaking or bubbling paint',
      'White corrosion around the rim edge',
      'A tyre that slowly loses pressure',
    ],
    whatWeDo: [
      { title: 'Inspect', text: 'We check each wheel for cracks or buckles before refinishing.' },
      { title: 'Repair', text: 'Damage filled and smoothed, corrosion removed.' },
      { title: 'Refinish', text: 'Primed, painted and lacquered.' },
      { title: 'Refit', text: 'Tyres refitted and wheels balanced.' },
    ],
    faqs: [
      { q: 'Can you change the colour of my wheels?', a: 'Yes. Ask about colour options when you call for a quote.' },
      { q: 'Can a cracked alloy be repaired?', a: 'We will not refinish a cracked or badly buckled wheel without telling you. Safety comes first.' },
    ],
  },
  {
    slug: 'accident-and-insurance-repairs',
    group: 'bodywork',
    icon: ShieldAlert,
    title: 'Accident & Insurance Claim Repairs',
    short: 'Accident damage repaired, with help working through your insurance claim.',
    image: 'bodywork-before',
    intro: [
      'After an accident you want the car repaired properly and the paperwork kept simple. We assess the damage, prepare an estimate your insurer can use and carry out the repair.',
      'You usually have the right to choose your own repairer, even if your insurer suggests one. Check your policy wording or ask your insurer.',
    ],
    signs: [
      'Your car has accident damage, however small',
      'Your insurer has asked for a repair estimate',
      'You would rather pay privately than claim',
    ],
    whatWeDo: [
      { title: 'Assess', text: 'We inspect the damage, including hidden damage behind panels.' },
      { title: 'Estimate', text: 'A detailed estimate for you or your insurer.' },
      { title: 'Repair', text: 'Structural repair, panels and paint completed in-house.' },
      { title: 'Hand back', text: 'Final check of fit, finish, lights and parking sensors work.' },
    ],
    faqs: [
      { q: 'Do you deal with insurers directly?', a: 'We can provide estimates and photos for your insurer. Call us to talk through your claim.' }, // TODO(client): confirm how insurance work is handled
      { q: 'Do you offer a courtesy car?', a: 'Please ask when you call.' }, // TODO(client): courtesy car availability
    ],
  },
];

// Services that have their own /services/:slug detail page (MOT has its own /mot page)
export const detailServices = services.filter((s) => !s.href);

export const serviceHref = (s) => s.href ?? `/services/${s.slug}`;
export const getService = (slug) => detailServices.find((s) => s.slug === slug);
export const servicesInGroup = (id) => services.filter((s) => s.group === id);
export const getGroup = (id) => serviceGroups.find((g) => g.id === id);
