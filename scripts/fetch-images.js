// Run with: node fetch-images.js
// Fetches verified Wikipedia thumbnail URLs for all 100 paintings and patches data.js

const https = require('https');
const fs    = require('fs');

const WP_TITLES = {
  1:  'Mona_Lisa',
  2:  'Liberty_Leading_the_People',
  3:  'The_Raft_of_the_Medusa',
  4:  'The_Wedding_at_Cana_(Veronese)',
  5:  'The_Coronation_of_Napoleon',
  6:  'Oath_of_the_Horatii',
  7:  'The_Lacemaker_(Vermeer)',
  8:  'Virgin_of_the_Rocks',
  9:  'Portrait_of_Baldassare_Castiglione',
  10: 'Virgin_and_Child_with_Saint_Anne_(Leonardo)',
  11: "Whistler%27s_Mother",
  12: 'Olympia_(Manet)',
  13: 'Le_D%C3%A9jeuner_sur_l%27herbe',
  14: 'Bal_du_moulin_de_la_Galette',
  15: 'The_Gleaners',
  16: 'The_Angelus_(Millet)',
  17: 'The_Dance_Class',
  18: 'Van_Gogh_self-portrait_(September_1889)',
  19: 'Starry_Night_Over_the_Rh%C3%B4ne',
  20: 'L%27Absinthe_(Degas)',
  21: 'Impression%2C_Sunrise',
  22: 'Water_Lilies_(Monet_series)',
  23: 'The_Starry_Night',
  24: 'The_Persistence_of_Memory',
  25: 'Les_Demoiselles_d%27Avignon',
  26: "Christina%27s_World",
  27: "Campbell%27s_Soup_Cans",
  28: 'Broadway_Boogie-Woogie',
  29: 'The_Sleeping_Gypsy',
  30: 'Girl_Before_a_Mirror',
  31: 'Washington_Crossing_the_Delaware',
  32: 'Aristotle_with_a_Bust_of_Homer',
  33: 'The_Death_of_Socrates_(David)',
  34: 'Portrait_of_Juan_de_Pareja',
  35: 'Cypresses_(Van_Gogh)',
  36: 'Young_Woman_with_a_Water_Pitcher',
  37: 'A_Sunday_on_La_Grande_Jatte',
  38: 'American_Gothic',
  39: 'Nighthawks',
  40: 'At_the_Moulin_Rouge',
  41: 'Paris_Street%3B_Rainy_Day',
  42: 'Girl_with_the_Red_Hat',
  43: 'Self-Portrait_(Rembrandt%2C_Washington)',
  44: 'The_Alba_Madonna',
  45: 'Luncheon_of_the_Boating_Party',
  46: 'Portrait_of_Adele_Bloch-Bauer_I',
  47: 'Irises_(painting)',
  48: 'The_Large_Bathers_(C%C3%A9zanne)',
  49: 'The_Card_Players',
  50: 'The_Night_Caf%C3%A9',
  51: 'The_Blue_Boy',
  52: 'The_Two_Fridas',
  53: 'Las_Meninas',
  54: 'The_Garden_of_Earthly_Delights',
  55: 'The_Third_of_May_1808',
  56: 'Saturn_Devouring_His_Son',
  57: 'Descent_from_the_Cross_(Rogier_van_der_Weyden)',
  58: 'The_Surrender_of_Breda',
  59: 'Annunciation_(Fra_Angelico%2C_Madrid)',
  60: 'Rokeby_Venus',
  61: 'Guernica_(Picasso)',
  62: 'The_Birth_of_Venus',
  63: 'Primavera_(Botticelli)',
  64: 'Annunciation_(Leonardo)',
  65: 'Judith_Slaying_Holofernes_(Gentileschi%2C_Florence)',
  66: 'Doni_Tondo',
  67: 'Madonna_of_the_Goldfinch',
  68: 'The_Night_Watch',
  69: 'The_Milkmaid',
  70: 'Woman_Reading_a_Letter',
  71: 'The_Jewish_Bride',
  72: 'Self-Portrait_as_the_Apostle_Paul_(Rembrandt)',
  73: 'The_Merry_Drinker',
  74: 'Girl_with_a_Pearl_Earring',
  75: 'View_of_Delft',
  76: 'The_Anatomy_Lesson_of_Dr._Nicolaes_Tulp',
  77: 'Wheatfield_with_Crows',
  78: 'The_Potato_Eaters',
  79: 'Almond_Blossom_(Van_Gogh_series)',
  80: 'The_Bedroom_(Van_Gogh_series)',
  81: 'Arnolfini_Portrait',
  82: 'The_Hay_Wain',
  83: 'Sunflowers_(Van_Gogh_series)',
  84: 'The_Ambassadors_(Holbein)',
  85: 'Virgin_of_the_Rocks',
  86: 'Weeping_Woman',
  87: 'The_Laughing_Cavalier',
  88: 'Return_of_the_Prodigal_Son_(Rembrandt)',
  89: 'The_Dance_(Matisse)',
  90: 'Madonna_Litta',
  91: 'Dana%C3%AB_(Rembrandt)',
  92: 'The_Kiss_(Klimt)',
  93: 'The_Tower_of_Babel_(Bruegel)',
  94: 'The_Scream',
  95: 'The_Creation_of_Adam',
  96: 'The_School_of_Athens',
  97: 'The_Last_Supper_(Leonardo_da_Vinci)',
  98: 'The_Calling_of_Saint_Matthew_(Caravaggio)',
  99: 'Sacred_and_Profane_Love',
  100: 'Sistine_Madonna',
};

const sleep = ms => new Promise(r => setTimeout(r, ms));

function fetchSummary(title, retries = 4) {
  return new Promise((resolve) => {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${title}`;
    const req = https.get(url, { headers: { 'User-Agent': 'PaintChips/1.0 (educational art checklist; mailto:camfaux@gmail.com)' } }, (res) => {
      if (res.statusCode === 429 && retries > 0) {
        const wait = (5 - retries) * 3000 + 2000; // 2s, 5s, 8s, 11s
        res.resume();
        setTimeout(() => fetchSummary(title, retries - 1).then(resolve), wait);
        return;
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const thumb = json.thumbnail?.source || json.originalimage?.source || null;
          resolve({ title, thumb, status: res.statusCode });
        } catch {
          resolve({ title, thumb: null, status: res.statusCode });
        }
      });
    });
    req.on('error', () => resolve({ title, thumb: null, status: 0 }));
  });
}

async function run() {
  // Load existing results if any
  let results = {};
  try {
    results = JSON.parse(fs.readFileSync('/tmp/paint-image-urls.json', 'utf8'));
    console.log(`Resuming — ${Object.values(results).filter(Boolean).length} already found`);
  } catch { /* start fresh */ }

  const ids = Object.keys(WP_TITLES).map(Number).sort((a, b) => a - b);

  for (const id of ids) {
    // Skip if already have a good URL
    if (results[id]) {
      console.log(`  skip ${id}: already have URL`);
      continue;
    }

    const r = await fetchSummary(WP_TITLES[id]);
    results[id] = r.thumb;
    const status = r.thumb ? '✓' : `✗ (${r.status})`;
    console.log(`${status} ${id}: ${WP_TITLES[id].slice(0, 40)} → ${r.thumb ? r.thumb.slice(0, 70) + '…' : 'NO IMAGE'}`);

    // Save progress after each fetch
    fs.writeFileSync('/tmp/paint-image-urls.json', JSON.stringify(results, null, 2));

    // 1.5s between requests to stay well under rate limit
    await sleep(1500);
  }

  const found = Object.values(results).filter(Boolean).length;
  console.log(`\nDone: ${found}/${ids.length} images found`);
  console.log('Saved to /tmp/paint-image-urls.json');
}

run();
