// Run with: node generate-icons.js
// Generates simple canvas-based PWA icons
const { createCanvas } = require('canvas');
const fs = require('fs');

function generateIcon(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = '#1a1917';
  ctx.fillRect(0, 0, size, size);

  // Gold circle
  const cx = size / 2, cy = size / 2, r = size * 0.42;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fillStyle = '#c9a84c';
  ctx.fill();

  // Palette emoji-style mark
  ctx.font = `bold ${size * 0.45}px serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#0f0e0d';
  ctx.fillText('🎨', cx, cy + size * 0.02);

  return canvas.toBuffer('image/png');
}

try {
  fs.writeFileSync('icon-192.png', generateIcon(192));
  fs.writeFileSync('icon-512.png', generateIcon(512));
  console.log('Icons generated');
} catch (e) {
  console.log('canvas module not available, creating SVG icons instead');
  // SVG fallback
  const svg = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" fill="#1a1917"/>
  <circle cx="${size/2}" cy="${size/2}" r="${size*0.42}" fill="#c9a84c"/>
  <text x="50%" y="54%" font-size="${size*0.4}" text-anchor="middle" dominant-baseline="middle">🎨</text>
</svg>`;
  fs.writeFileSync('icon-192.svg', svg(192));
  fs.writeFileSync('icon-512.svg', svg(512));
}
