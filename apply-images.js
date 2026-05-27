// Patches data.js imageUrl fields with the verified Wikipedia/Commons URLs
const fs = require('fs');

const urls = JSON.parse(fs.readFileSync('/tmp/paint-image-urls.json', 'utf8'));
let dataJs = fs.readFileSync('/Users/camfaux/Vibe_Projects/Paint Chips/data.js', 'utf8');

let patched = 0;
let failed = 0;

for (const [id, url] of Object.entries(urls)) {
  if (!url) { failed++; continue; }

  // Match the painting entry block by its id field, then replace imageUrl
  // Pattern: find `id: NUMBER,` ... `imageUrl: 'ANYTHING',`
  // We use a regex that finds the imageUrl line within the painting's object block
  // Strategy: replace imageUrl for each painting by finding the block starting with `  { id: N,`
  const idNum = parseInt(id);

  // Match the specific painting's imageUrl line — look for id followed by imageUrl within ~30 lines
  const blockRegex = new RegExp(
    `(\\{[^}]*?id:\\s*${idNum},[^}]*?imageUrl:\\s*')[^']*('(?:[^}]*?\\}))`,
    's'
  );

  const escaped = url.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  const newData = dataJs.replace(blockRegex, `$1${escaped}$2`);

  if (newData === dataJs) {
    console.log(`✗ ${id}: regex did not match`);
    failed++;
  } else {
    dataJs = newData;
    patched++;
  }
}

fs.writeFileSync('/Users/camfaux/Vibe_Projects/Paint Chips/data.js', dataJs);
console.log(`\nPatched: ${patched}, Failed: ${failed}`);
