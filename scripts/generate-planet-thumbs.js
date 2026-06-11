const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const INPUT_DIR = path.join(__dirname, "../public/images/pano");
const OUTPUT_DIR = path.join(__dirname, "../public/images/pano/planets");
const OUTPUT_SIZE = 600;
const SAMPLE_WIDTH = 2048;
const SAMPLE_HEIGHT = 1024;
const ZOOM = 1.35;

// Bilinear interpolation for smoother sampling
function bilinearSample(data, w, h, x, y) {
  const x0 = Math.floor(x);
  const y0 = Math.floor(y);
  const x1 = Math.min(x0 + 1, w - 1);
  const y1 = Math.min(y0 + 1, h - 1);
  const wx = x - x0;
  const wy = y - y0;

  const result = [0, 0, 0];
  for (let c = 0; c < 3; c++) {
    const tl = data[(y0 * w + x0) * 3 + c];
    const tr = data[(y0 * w + x1) * 3 + c];
    const bl = data[(y1 * w + x0) * 3 + c];
    const br = data[(y1 * w + x1) * 3 + c];
    result[c] = tl * (1 - wx) * (1 - wy) + tr * wx * (1 - wy) + bl * (1 - wx) * wy + br * wx * wy;
  }
  return result;
}

async function generatePlanet(inputPath, outputPath) {
  const { data: srcData, info } = await sharp(inputPath)
    .resize(SAMPLE_WIDTH, SAMPLE_HEIGHT, { fit: "fill" })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const srcW = info.width;
  const srcH = info.height;

  const outputData = Buffer.alloc(OUTPUT_SIZE * OUTPUT_SIZE * 3);
  const cx = OUTPUT_SIZE / 2;

  for (let oy = 0; oy < OUTPUT_SIZE; oy++) {
    for (let ox = 0; ox < OUTPUT_SIZE; ox++) {
      const dx = ox - cx;
      const dy = oy - cx;
      const r = Math.sqrt(dx * dx + dy * dy);

      const dstIdx = (oy * OUTPUT_SIZE + ox) * 3;

      // Stereographic projection from south pole (nadir at center)
      // Clamp r so pixels outside the circle stretch the edge instead of going black
      const rClamped = Math.min(r, cx);
      const theta = Math.atan2(dy, dx);
      const phi = -Math.PI / 2 + 2 * Math.atan((rClamped / cx) * ZOOM); // latitude: -π/2 (nadir) at r=0, past equator into sky at r=cx
      const lambda = theta - Math.PI / 2; // rotate so panorama front faces bottom of planet

      // Map to equirectangular pixel
      let srcX = ((lambda + Math.PI) / (2 * Math.PI)) * srcW;
      let srcY = ((Math.PI / 2 - phi) / Math.PI) * srcH;

      // Wrap longitude
      srcX = ((srcX % srcW) + srcW) % srcW;
      srcY = Math.max(0, Math.min(srcH - 1, srcY));

      const [r_, g, b] = bilinearSample(srcData, srcW, srcH, srcX, srcY);
      outputData[dstIdx] = r_;
      outputData[dstIdx + 1] = g;
      outputData[dstIdx + 2] = b;
    }
  }

  await sharp(outputData, {
    raw: { width: OUTPUT_SIZE, height: OUTPUT_SIZE, channels: 3 },
  })
    .jpeg({ quality: 88 })
    .toFile(outputPath);
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const images = fs
    .readdirSync(INPUT_DIR)
    .filter((f) => /\.(jpg|jpeg|png)$/i.test(f) && !fs.statSync(path.join(INPUT_DIR, f)).isDirectory());

  let generated = 0;
  let skipped = 0;

  for (const file of images) {
    const name = path.parse(file).name;
    const outputPath = path.join(OUTPUT_DIR, `${name}.jpg`);

    if (fs.existsSync(outputPath)) {
      skipped++;
      continue;
    }

    process.stdout.write(`  generating planet: ${file}...`);
    const inputPath = path.join(INPUT_DIR, file);
    await generatePlanet(inputPath, outputPath);
    process.stdout.write(" done\n");
    generated++;
  }

  if (generated > 0) console.log(`\n✓ Generated ${generated} planet thumbnail(s)`);
  if (skipped > 0) console.log(`  Skipped ${skipped} (already exist)`);
}

main().catch((err) => {
  console.error("Planet thumb generation failed:", err);
  process.exit(1);
});
