/**
 * Derives the transparent mascot asset from the full logo lockup.
 *
 * The lockup renders the mascot above the "Doodle IOT" wordmark on solid black.
 * We keep only the mascot band so the wordmark can stay as live text in
 * DoodleLogo.tsx, then key out the black backdrop.
 *
 * Run: node scripts/generate-logo.mjs
 */
import sharp from 'sharp';
import { existsSync } from 'node:fs';

const SOURCE_CANDIDATES = ['src/assets/doodle-logo.png', 'src/assets/1.jpg'];
const OUTPUT = 'src/assets/doodle-mascot.png';

// Luminance ramp used to key the backdrop. Values below LUM_LO are backdrop,
// values above LUM_HI are subject; the gap absorbs JPEG ringing around the
// mascot so it does not turn into an opaque grey fringe.
const LUM_LO = 25;
const LUM_HI = 85;
const ALPHA_FLOOR = 4;

const source = SOURCE_CANDIDATES.find((p) => existsSync(p));
if (!source) throw new Error(`No logo source found. Looked for: ${SOURCE_CANDIDATES.join(', ')}`);

const { data, info } = await sharp(source).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width: w, height: h, channels: ch } = info;

const luminance = (i) => 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];

/** Vertical runs of rows containing subject pixels. The first is the mascot. */
function findBands() {
  const bright = [];
  for (let y = 0; y < h; y++) {
    let any = false;
    for (let x = 0; x < w && !any; x++) {
      if (luminance((y * w + x) * ch) > LUM_HI) any = true;
    }
    bright.push(any);
  }
  const bands = [];
  let start = -1;
  for (let y = 0; y < h; y++) {
    if (bright[y] && start < 0) start = y;
    if (!bright[y] && start >= 0) {
      bands.push([start, y - 1]);
      start = -1;
    }
  }
  if (start >= 0) bands.push([start, h - 1]);
  return bands;
}

const bands = findBands();
if (bands.length === 0) throw new Error('No subject found in source image');
const [bandTop, bandBottom] = bands[0];
if (bands.length < 2) {
  console.warn('Only one band found — source may not include a wordmark to strip.');
}

// Alpha-key the mascot band, tracking the tight bounding box as we go.
const bandHeight = bandBottom - bandTop + 1;
const out = Buffer.alloc(w * bandHeight * 4);
let minX = w;
let maxX = -1;
let minY = bandHeight;
let maxY = -1;

for (let y = 0; y < bandHeight; y++) {
  for (let x = 0; x < w; x++) {
    const src = ((y + bandTop) * w + x) * ch;
    const dst = (y * w + x) * 4;
    const lum = luminance(src);
    const alpha = Math.round(Math.max(0, Math.min(1, (lum - LUM_LO) / (LUM_HI - LUM_LO))) * 255);
    out[dst] = data[src];
    out[dst + 1] = data[src + 1];
    out[dst + 2] = data[src + 2];
    out[dst + 3] = alpha;
    if (alpha > ALPHA_FLOOR) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}

const crop = { left: minX, top: minY, width: maxX - minX + 1, height: maxY - minY + 1 };

await sharp(out, { raw: { width: w, height: bandHeight, channels: 4 } })
  .extract(crop)
  .png({ compressionLevel: 9 })
  .toFile(OUTPUT);

console.log(`source     ${source} (${w}x${h})`);
console.log(`bands      ${JSON.stringify(bands)}`);
console.log(`mascot band y=${bandTop}..${bandBottom}`);
console.log(`wrote      ${OUTPUT} (${crop.width}x${crop.height})`);
