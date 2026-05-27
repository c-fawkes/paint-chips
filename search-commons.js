// Searches Wikimedia Commons for paintings by name to get correct file URLs
const https = require('https');
const fs = require('fs');

const SEARCHES = {
  16:  'Millet Angelus painting Orsay',
  35:  'Van Gogh Cypresses 1889 Metropolitan',
  43:  'Rembrandt Self Portrait 1659 Washington',
  48:  'Cézanne Large Bathers Philadelphia',
  65:  'Gentileschi Judith Holofernes Uffizi Florence',
  72:  'Rembrandt Self Portrait Apostle Paul Rijksmuseum',
  79:  'Van Gogh Almond Blossom 1890',
  80:  'Van Gogh Bedroom Arles',
  86:  'Picasso Weeping Woman 1937',
  88:  'Rembrandt Return Prodigal Son Hermitage',
};

const sleep = ms => new Promise(r => setTimeout(r, ms));

function searchCommons(query) {
  return new Promise((resolve) => {
    const encoded = encodeURIComponent(query);
    const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=${encoded}&gsrlimit=3&prop=imageinfo&iiprop=url&iiurlwidth=400&format=json`;
    https.get(url, { headers: { 'User-Agent': 'PaintChips/1.0 (educational)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = Object.values(json.query?.pages || {});
          for (const page of pages) {
            const info = page?.imageinfo?.[0];
            const thumb = info?.thumburl || info?.url;
            if (thumb) return resolve({ thumb, title: page.title, status: res.statusCode });
          }
          resolve({ thumb: null, status: res.statusCode });
        } catch {
          resolve({ thumb: null, status: res.statusCode });
        }
      });
    }).on('error', () => resolve({ thumb: null, status: 0 }));
  });
}

async function run() {
  const results = JSON.parse(fs.readFileSync('/tmp/paint-image-urls.json', 'utf8'));

  for (const [id, query] of Object.entries(SEARCHES)) {
    const r = await searchCommons(query);
    if (r.thumb) {
      results[id] = r.thumb;
      console.log(`✓ ${id}: [${r.title}] ${r.thumb.slice(0, 70)}…`);
    } else {
      console.log(`✗ ${id} (${r.status}): no result for "${query}"`);
    }
    await sleep(1200);
  }

  fs.writeFileSync('/tmp/paint-image-urls.json', JSON.stringify(results, null, 2));
  const good = Object.values(results).filter(Boolean).length;
  console.log(`\nTotal: ${good}/100`);
}

run();
