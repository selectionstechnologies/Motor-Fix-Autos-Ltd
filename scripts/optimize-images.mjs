// Generates responsive AVIF + WebP sizes from src/assets/originals into src/assets/img,
// writes src/assets/img/manifest.json and the 1200x630 Open Graph image in public/.
// Run with `npm run images` whenever a photo in src/assets/originals changes.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const SRC = path.resolve('src/assets/originals');
const OUT = path.resolve('src/assets/img');
const TARGET_WIDTHS = [640, 1024, 1600, 2400];

// Optional crop per image, as fractions of the original (left, top, width, height)
const crops = {
  // Portrait 4:5, keeping the painter and the spray gun in frame
  'paint-booth': { left: 0, top: 0.04, width: 1, height: 0.9375 },
};

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

const manifest = {};

for (const file of fs.readdirSync(SRC).filter((f) => /\.(webp|jpe?g|png)$/i.test(f))) {
  const name = path.parse(file).name;
  let base = sharp(path.join(SRC, file));
  const meta = await base.metadata();
  let { width, height } = meta;

  const c = crops[name];
  if (c) {
    const region = {
      left: Math.round(c.left * width),
      top: Math.round(c.top * height),
      width: Math.round(c.width * width),
      height: Math.round(c.height * height),
    };
    base = sharp(await base.extract(region).toBuffer());
    ({ width, height } = region);
  }

  // Never upscale: keep the target widths below the original, plus the original width itself
  const widths = [...TARGET_WIDTHS.filter((w) => w < width), width];

  for (const w of widths) {
    const resized = base.clone().resize({ width: w });
    await resized.clone().avif({ quality: 55, effort: 6 }).toFile(path.join(OUT, `${name}-${w}.avif`));
    await resized.clone().webp({ quality: 74, effort: 6 }).toFile(path.join(OUT, `${name}-${w}.webp`));
  }

  manifest[name] = { width, height, widths };
  console.log(`  ${name}: ${widths.join(', ')}w (${width}x${height})`);
}

fs.writeFileSync(path.join(OUT, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);

// Open Graph image: exterior-front cropped to 1200x630, focused slightly left of centre on the signage
const og = sharp(path.join(SRC, 'exterior-front.webp'));
const { width: ow, height: oh } = await og.metadata();
const cropH = Math.round(ow / (1200 / 630));
await og
  .extract({ left: 0, top: Math.round((oh - cropH) * 0.45), width: ow, height: cropH })
  .resize(1200, 630)
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(path.resolve('public/og-image.jpg'));
console.log('  public/og-image.jpg (1200x630)');
