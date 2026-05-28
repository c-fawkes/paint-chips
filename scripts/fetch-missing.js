// Fetches correct image URLs for paintings that were missing
const https = require('https');
const fs = require('fs');

// Alternative/corrected Wikipedia article titles for the 21 missing paintings
const MISSING_TITLES = {
  10: 'Virgin_and_Child_with_Saint_Anne',
  16: 'The_Angelus',
  18: 'Self-Portrait_(Van_Gogh,_September_1889)',
  20: "L'Absinthe",
  30: 'Girl_before_a_Mirror',
  31: 'Washington_Crossing_the_Delaware_(Leutze)',
  33: 'The_Death_of_Socrates',
  35: 'Cypresses_(Van_Gogh,_New_York)',
  39: 'Nighthawks_(painting)',
  42: 'Girl_with_the_Red_Hat_(Vermeer)',
  43: 'Self-Portrait_(Rembrandt,_Washington,_1659)',
  48: 'The_Large_Bathers',
  57: 'Descent_from_the_Cross_(van_der_Weyden)',
  65: 'Judith_Slaying_Holofernes_(Gentileschi,_Naples)',
  69: 'The_Milkmaid_(Vermeer)',
  70: 'Woman_Reading_a_Letter_(Vermeer)',
  72: 'Self-Portrait_as_Saint_Paul_(Rembrandt)',
  79: 'Almond_Blossom_(Van_Gogh)',
  80: 'The_Bedroom_(Van_Gogh)',
  86: 'Weeping_Woman_(Picasso)',
  88: 'Return_of_the_Prodigal_Son_(Rembrandt)',
};

const sleep = ms => new Promise(r => setTimeout(r, ms));

function fetchSummary(title) {
  return new Promise((resolve) => {
    const encoded = encodeURIComponent(title.replace(/ /g, '_'));
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encoded}`;
    https.get(url, { headers: { 'User-Agent': 'PaintChips/1.0 (educational)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const thumb = json.thumbnail?.source || json.originalimage?.source || null;
          resolve({ thumb, status: res.statusCode });
        } catch {
          resolve({ thumb: null, status: res.statusCode });
        }
      });
    }).on('error', () => resolve({ thumb: null, status: 0 }));
  });
}

async function run() {
  const results = JSON.parse(fs.readFileSync('/tmp/paint-image-urls.json', 'utf8'));

  for (const [id, title] of Object.entries(MISSING_TITLES)) {
    const r = await fetchSummary(title);
    if (r.thumb) {
      results[id] = r.thumb;
      console.log(`✓ ${id}: ${title.slice(0,40)} → ${r.thumb.slice(0,70)}…`);
    } else {
      console.log(`✗ (${r.status}) ${id}: ${title.slice(0,40)}`);
    }
    await sleep(1500);
  }

  fs.writeFileSync('/tmp/paint-image-urls.json', JSON.stringify(results, null, 2));
  const found = Object.values(results).filter(Boolean).length;
  console.log(`\nTotal: ${found}/100`);
}

run();
