# Motor Fix Autos Ltd: Website

Website for **Motor Fix Autos Ltd**, an independent garage and German vehicle specialist at
Unit 29b Wadeson Road, Ardwick Green, Manchester M13 9UG. Production domain: https://www.motorfixautos.com

React 18 + Vite + Tailwind CSS + framer-motion + react-router, pre-rendered to static HTML for fast loading and SEO.
No backend, no analytics, no third-party scripts.

## Commands

```bash
npm install
npm run dev       # local dev server
npm run build     # client build + SSR build + prerender (static HTML, sitemap.xml, robots.txt) into dist/
npm run preview   # serve dist/
npm run images    # regenerate responsive AVIF/WebP images from src/assets/originals
```

## Where to change things

All content lives in `src/data/`. Components read from data; there is no copy hard-coded in JSX that the owner needs to edit.

| File | Contents |
|------|----------|
| `business.js` | Name, phones, email, address, map links, company number, `schedule` (opening hours), WhatsApp switch, socials |
| `site.js` | Navigation, trust facts, hero chips, "why choose us" |
| `services.js` | Service groups and every service page (what it is, signs, what we do, FAQs) |
| `mot.js` | MOT page content |
| `about.js`, `gallery.js` | About page and gallery |
| `reviews.js` | Real Google reviews (empty until pasted with permission) |
| `faq.js`, `blog.js`, `legal.js`, `chatbot.js` | FAQ, car-care articles, privacy and terms, chat assistant replies |

Search the project for `TODO(client)` to find every detail still to be confirmed with the client.

### Opening hours

`schedule` in `src/data/business.js` drives the hero "Open today" status (UK time), the hours table, the booking form's closed days,
and the `openingHoursSpecification` in JSON-LD. JSON-LD only includes days with both `open` and `close` set.

### WhatsApp

Set `business.whatsapp` to the number in international format with no `+` or spaces (e.g. `447967687101`).
While it is empty, WhatsApp buttons are hidden and the booking form opens a pre-filled email instead.

### Booking form

UK phone validation (mobiles and landlines, `0`, `+44` or `0044`), UK registration validation and formatting (`AB12 CDE`),
no past dates or closed days. Submitting calls `submitBooking()` in `src/lib/booking.js`, the single place to swap in a real API later.

### Images

Originals are in `src/assets/originals`. `npm run images` writes AVIF + WebP sizes to `src/assets/img`
(never upscaled beyond the original width) and the 1200x630 `public/og-image.jpg`. Use them with `<Picture name="workshop" ... />`.

## Pages

`/`, `/services`, `/services/:slug`, `/mot`, `/bodywork`, `/about`, `/reviews`, `/gallery`, `/opening-hours`, `/book`, `/contact`,
`/blog`, `/blog/:slug`, `/faq`, `/privacy-policy`, `/terms`, and a 404 page. The route list for prerendering is in `src/routes.js`.

## Design tokens

Colours are CSS variables in `src/index.css` (`:root`), mapped in `tailwind.config.js`. Fonts: Barlow Condensed (headings) and Inter (body).

## Deployment

`vercel.json` is set up for Vercel (static output in `dist/`, clean URLs, `404.html`). Any static host works.

## Legal

The privacy policy and terms are templates. Have a professional review them before launch.
