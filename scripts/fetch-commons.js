// Uses Wikimedia Commons search API to find correct file URLs
const https = require('https');
const fs = require('fs');

// Known correct Wikimedia Commons file names for problem paintings
const COMMONS_FILES = {
  16: 'Jean-François_Millet_-_L\'Angélus.jpg',
  18: 'Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_(719161).jpg',
  31: 'Washington_Crossing_the_Delaware_by_Emanuel_Leutze,_MMA-NYC,_1851.jpg',
  35: 'Vincent_van_Gogh_-_Cypresses_(F1525).jpg',
  43: 'Rembrandt_van_Rijn_-_Self-Portrait_(1659)_-_Google_Art_Project.jpg',
  48: 'Paul_Cézanne_-_Les_Grandes_Baigneuses_(Les_Baigneurs_au_repos)_-_WGA4456.jpg',
  57: 'Weyden_Deposition.jpg',
  65: 'Artemisia_Gentileschi_-_Judith_Beheading_Holofernes_(Uffizi).jpg',
  72: 'Rembrandt_-_Self-Portrait_as_the_Apostle_Paul_-_WGA19223.jpg',
  79: 'Almond_blossom_(Van_Gogh).jpg',
  80: 'Vincent_van_Gogh_-_The_Bedroom_-_Google_Art_Project.jpg',
  86: 'Weeping_woman.jpg',
  88: 'Rembrandt_-_The_Return_of_the_Prodigal_Son.jpg',
};

const sleep = ms => new Promise(r => setTimeout(r, ms));

function fetchFileInfo(filename) {
  return new Promise((resolve) => {
    const encoded = encodeURIComponent('File:' + filename);
    const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encoded}&prop=imageinfo&iiprop=url&iiurlwidth=400&format=json`;
    https.get(url, { headers: { 'User-Agent': 'PaintChips/1.0 (educational)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query?.pages || {};
          const page = Object.values(pages)[0];
          if (page?.missing !== undefined) return resolve({ thumb: null, status: 404 });
          const info = page?.imageinfo?.[0];
          const thumb = info?.thumburl || info?.url || null;
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

  for (const [id, filename] of Object.entries(COMMONS_FILES)) {
    const r = await fetchFileInfo(filename);
    if (r.thumb) {
      results[id] = r.thumb;
      console.log(`✓ ${id}: ${r.thumb.slice(0, 80)}…`);
    } else {
      console.log(`✗ ${id} (${r.status}): ${filename.slice(0, 50)}`);
    }
    await sleep(1000);
  }

  fs.writeFileSync('/tmp/paint-image-urls.json', JSON.stringify(results, null, 2));
  const found = Object.values(results).filter(Boolean).length;
  console.log(`\nTotal: ${found}/100`);
}

run();
