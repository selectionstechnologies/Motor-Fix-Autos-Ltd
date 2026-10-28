// MOT page content. Test items follow the DVSA "what is checked" list for cars and light vans.
// TODO(client): confirm which MOT classes the bay is approved for (class 4 cars/vans up to 3,000kg,
// class 7 vans 3,000–3,500kg) and the usual test length.

export const motChecks = [
  { title: 'Lights', text: 'Condition, operation and headlight aim.' },
  { title: 'Brakes', text: 'Condition, operation and performance, plus ABS and stability warning lights.' },
  { title: 'Tyres & wheels', text: 'Tread depth, condition, size and security.' },
  { title: 'Steering & suspension', text: 'Condition and operation.' },
  { title: 'Seatbelts & seats', text: 'All belts present and working, seats secure.' },
  { title: 'Body & structure', text: 'No excessive corrosion or sharp edges in key areas.' },
  { title: 'Exhaust & emissions', text: 'Secure, no serious leaks, and within emission limits.' },
  { title: 'Fuel system', text: 'No leaks and the fuel cap seals properly.' },
  { title: 'Windscreen, wipers & washers', text: 'A clear view of the road for the driver.' },
  { title: 'Mirrors, horn & doors', text: 'Present, secure and working.' },
  { title: 'Registration plates & VIN', text: 'Legible, secure and correctly formed.' },
  { title: 'Electrical & battery', text: 'Wiring and battery secure and undamaged.' },
];

export const motNotChecked = 'The MOT does not check the condition of the engine, clutch or gearbox. A service does.';

export const motBring = [
  'The locking wheel nut key, if your wheels have locking nuts',
  'Enough fuel and engine oil for the emissions test',
  'A clear boot and cabin, so the tester can reach the seatbelts and spare wheel well',
  'Any recent repair paperwork, if you have it (useful, not required)',
];

export const motSteps = [
  { title: 'Book', text: 'Book online or call us. Tell us your registration and whether it is a car or van.' },
  { title: 'Test', text: 'The vehicle is tested in our MOT bay against the DVSA standard.' },
  { title: 'Result', text: 'Pass results are recorded on the DVSA database. If anything fails, we show you what and why.' },
  { title: 'Repair', text: 'We quote for any repairs and can carry them out in the same workshop.' },
];

export const motFacts = [
  'Cars and vans need their first MOT when they are 3 years old, then every year.',
  'You can have an MOT up to a month (minus a day) before it runs out and keep the same renewal date.',
  'You can drive to a pre-booked MOT without a current certificate, as long as the vehicle is roadworthy.',
  'Driving without a valid MOT can lead to a fine of up to £1,000.',
];

export const motCheckLink = 'https://www.gov.uk/check-mot-history';
