#!/usr/bin/env node
// Fetches Wikimedia Commons image URLs for museum-only paintings missing images.
// Uses Wikipedia's pageimages API: searches the painting's Wikipedia article for its lead image.

const https = require('https');
const fs = require('fs');

const targets = [
  { id: 121, query: 'The Herring Net Winslow Homer' },
  { id: 137, query: 'Woman Picking Fruit Gauguin Hermitage' },
  { id: 138, query: 'Portrait Young Woman Botticelli Hermitage' },
  { id: 149, query: 'Diana and Her Nymphs Rubens Mauritshuis' },
  { id: 150, query: 'Vase with Flowers Jan Davidsz de Heem Mauritshuis' },
  { id: 152, query: 'Regatta at Argenteuil Monet 1872' },
  { id: 153, query: 'Charing Cross Bridge Fog Monet 1903' },
  { id: 154, query: 'Portrait Paul Guillaume Modigliani 1915' },
  { id: 155, query: 'Apples and Biscuits Cézanne Orangerie' },
  { id: 156, query: 'The Blue Room Picasso 1901' },
  { id: 157, query: 'The Penitent Magdalene Georges de La Tour' },
  { id: 161, query: 'La Promenade Renoir 1870 Getty' },
  { id: 163, query: 'Holy Family Infant Saint John Baptist Poussin Getty' },
  { id: 166, query: 'The Gross Clinic Thomas Eakins' },
  { id: 168, query: 'Mont Sainte-Victoire Cézanne Barnes' },
  { id: 169, query: 'Les Poseuses The Models Seurat Barnes' },
  { id: 170, query: 'Girl with Braids Modigliani painting' },
  { id: 172, query: 'Italian Woman Corot painting Yale' },
  { id: 174, query: 'Grand Canal Venice Canaletto painting' },
  { id: 179, query: 'Woman in Blue Picasso 1901 Reina Sofia' },
  { id: 180, query: 'Portrait of Josette Juan Gris 1916' },
  { id: 187, query: 'Perseus and Andromeda Titian Wallace Collection' },
  { id: 188, query: 'Dance to the Music of Time Poussin Wallace Collection' },
  { id: 189, query: 'Rainbow Landscape Rubens Wallace Collection' },
  { id: 200, query: 'Girls on the Pier Munch painting' },
  { id: 203, query: 'The Flood Michelangelo Sistine Chapel fresco' },
];

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'PaintChipsBot/1.0' } }, res => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

async function searchCommons(query) {
  // Search Commons for a file matching the query, return the first image URL
  const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srnamespace=6&srlimit=5&format=json`;
  const result = await get(searchUrl);
  const hits = result?.query?.search || [];
  for (const hit of hits) {
    const title = hit.title; // e.g. "File:SomeImage.jpg"
    const infoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url&iiurlwidth=330&format=json`;
    const info = await get(infoUrl);
    const pages = info?.query?.pages || {};
    const page = Object.values(pages)[0];
    const thumbUrl = page?.imageinfo?.[0]?.thumburl;
    if (thumbUrl && /\.(jpg|jpeg|png)/i.test(thumbUrl)) return thumbUrl;
  }
  return null;
}

async function main() {
  const results = {};
  for (const { id, query } of targets) {
    process.stdout.write(`Fetching ${id}: ${query} … `);
    try {
      const url = await searchCommons(query);
      if (url) {
        results[id] = url;
        console.log('✓');
      } else {
        results[id] = null;
        console.log('✗ not found');
      }
    } catch (e) {
      results[id] = null;
      console.log('✗ error:', e.message);
    }
    // Polite delay
    await new Promise(r => setTimeout(r, 300));
  }
  fs.writeFileSync('/tmp/museum-image-urls.json', JSON.stringify(results, null, 2));
  console.log('\nSaved to /tmp/museum-image-urls.json');
  console.log('Found:', Object.values(results).filter(Boolean).length, '/', targets.length);
}

main().catch(console.error);
