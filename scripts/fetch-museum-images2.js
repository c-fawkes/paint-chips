#!/usr/bin/env node
// Uses Wikipedia pageimages API to get lead images for paintings.
// Falls back to direct Commons file lookup for known filenames.

const https = require('https');
const fs = require('fs');

// Painting id → Wikipedia article title (or known Commons filename)
const targets = [
  { id: 137, wp: 'Where Are You Going? (Gauguin)' },
  { id: 138, wp: 'Portrait of a Young Woman (Botticelli, Gemäldegalerie Berlin)', alt: 'Sandro Botticelli 064.jpg' },
  { id: 149, wp: 'Diana and Her Nymphs (Rubens)' },
  { id: 152, wp: 'Regatta at Argenteuil' },
  { id: 153, wp: 'Charing Cross Bridge series (Monet)' },
  { id: 154, wp: 'Paul Guillaume (art dealer)' },
  { id: 155, wp: 'Cézanne apples' },
  { id: 156, wp: 'The Blue Room (Picasso)' },
  { id: 157, wp: 'The Penitent Magdalene (La Tour)' },
  { id: 161, wp: 'La Promenade (Renoir)' },
  { id: 163, wp: 'The Holy Family (Poussin)' },
  { id: 166, wp: 'The Gross Clinic' },
  { id: 168, wp: 'Mont Sainte-Victoire (Cézanne)' },
  { id: 169, wp: 'Models (Seurat)' },
  { id: 170, wp: 'Girl with Braids (Modigliani)' },
  { id: 172, wp: 'Italian Woman (Corot)' },
  { id: 174, wp: 'The Grand Canal (Canaletto, Royal Collection)' },
  { id: 179, wp: 'Woman in Blue (Picasso)' },
  { id: 180, wp: 'Portrait of Josette (Juan Gris)' },
  { id: 187, wp: 'Perseus and Andromeda (Titian, Wallace Collection)' },
  { id: 188, wp: 'A Dance to the Music of Time' },
  { id: 189, wp: 'Rainbow Landscape' },
  { id: 200, wp: 'Girls on the Pier' },
  { id: 203, wp: 'The Flood (Michelangelo)' },
];

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'PaintChipsImageBot/1.0 (research project)' } }, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return get(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(new Error('Parse error: ' + data.substring(0, 60))); }
      });
    }).on('error', reject);
  });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function getWikipediaImage(articleTitle) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(articleTitle)}&prop=pageimages&format=json&pithumbsize=500&redirects=1`;
  const data = await get(url);
  const pages = data?.query?.pages || {};
  const page = Object.values(pages)[0];
  return page?.thumbnail?.source || null;
}

async function searchWikipedia(query) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srlimit=3&format=json`;
  const data = await get(url);
  const results = data?.query?.search || [];
  for (const r of results) {
    await sleep(800);
    const img = await getWikipediaImage(r.title);
    if (img && /upload\.wikimedia/.test(img)) return img;
  }
  return null;
}

async function main() {
  // Load existing results
  let existing = {};
  try { existing = JSON.parse(fs.readFileSync('/tmp/museum-image-urls.json', 'utf8')); } catch (_) {}

  const results = { ...existing };

  for (const { id, wp, alt } of targets) {
    if (results[id]) { console.log(`${id}: already have URL, skipping`); continue; }
    process.stdout.write(`${id}: ${wp} … `);
    try {
      let url = await getWikipediaImage(wp);
      if (!url) {
        await sleep(1000);
        url = await searchWikipedia(wp);
      }
      if (url) {
        // Convert to 330px thumbnail
        url = url.replace(/\/\d+px-/, '/330px-');
        results[id] = url;
        console.log('✓');
      } else {
        results[id] = null;
        console.log('✗ not found');
      }
    } catch (e) {
      results[id] = null;
      console.log('✗', e.message.substring(0, 80));
    }
    await sleep(1500);
  }

  fs.writeFileSync('/tmp/museum-image-urls.json', JSON.stringify(results, null, 2));
  const found = Object.values(results).filter(Boolean).length;
  console.log(`\nDone. Found ${found} / ${Object.keys(results).length} total.`);
}

main().catch(console.error);
