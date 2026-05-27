// Uses the MediaWiki pageimages API to get valid thumbnails — doesn't rate-limit as aggressively
const https = require('https');
const fs = require('fs');

// Titles to try for each remaining missing ID
const TO_FETCH = {
  16: ['The_Angelus_(Millet)', 'The_Angelus'],
  18: ['Self-Portrait_by_Vincent_van_Gogh_(September_1889)', 'Van_Gogh_Portraits'],
  31: ['Washington_Crossing_the_Delaware', 'Crossing_the_Delaware'],
  35: ['Cypresses_(Van_Gogh)', 'Cypresses_(painting)'],
  42: ['Girl_with_the_Red_Hat', 'Girl_with_a_Red_Hat'],
  43: ['Self-Portrait_by_Rembrandt_(Washington)', 'Rembrandt_self-portraits'],
  48: ['The_Large_Bathers_(Cézanne)', 'The_Large_Bathers'],
  57: ['Descent_from_the_Cross_(Rogier_van_der_Weyden)', 'Descent_from_the_Cross_(van_der_Weyden)'],
  65: ['Judith_Slaying_Holofernes_(Artemisia_Gentileschi,_Florence)', 'Judith_Slaying_Holofernes_(Gentileschi)'],
  72: ['Self-Portrait_as_the_Apostle_Paul', 'Rembrandt_self-portraits'],
  79: ['Almond_Blossom_(Van_Gogh)', 'Almond_Blossom_(painting)'],
  80: ['The_Bedroom_(Van_Gogh)', 'Bedroom_in_Arles'],
  86: ['Weeping_Woman', 'Weeping_Woman_(Picasso,_Tate)'],
  88: ['Return_of_the_Prodigal_Son_(Rembrandt)', 'The_Return_of_the_Prodigal_Son'],
};

const sleep = ms => new Promise(r => setTimeout(r, ms));

function fetchPageImage(title) {
  return new Promise((resolve) => {
    const encoded = encodeURIComponent(title);
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encoded}&prop=pageimages&pithumbsize=400&format=json&pilicense=any`;
    https.get(url, { headers: { 'User-Agent': 'PaintChips/1.0 (educational)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query?.pages || {};
          const page = Object.values(pages)[0];
          const thumb = page?.thumbnail?.source || null;
          resolve({ thumb, status: res.statusCode, missing: !!page?.missing });
        } catch {
          resolve({ thumb: null, status: res.statusCode });
        }
      });
    }).on('error', () => resolve({ thumb: null, status: 0 }));
  });
}

async function run() {
  const results = JSON.parse(fs.readFileSync('/tmp/paint-image-urls.json', 'utf8'));

  for (const [id, titles] of Object.entries(TO_FETCH)) {
    let found = false;
    for (const title of titles) {
      const r = await fetchPageImage(title);
      if (r.thumb) {
        results[id] = r.thumb;
        console.log(`✓ ${id} (${title}): ${r.thumb.slice(0, 70)}…`);
        found = true;
        break;
      } else {
        console.log(`  ✗ ${id} (${title}): status=${r.status} missing=${r.missing}`);
      }
      await sleep(800);
    }
    if (!found) console.log(`  SKIP ${id}: no image found in any title`);
    await sleep(1200);
  }

  fs.writeFileSync('/tmp/paint-image-urls.json', JSON.stringify(results, null, 2));
  const found = Object.values(results).filter(Boolean).length;
  console.log(`\nTotal: ${found}/100`);
}

run();
