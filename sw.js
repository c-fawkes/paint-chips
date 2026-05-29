const CACHE = 'paint-chips-v2';
const STATIC = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './data.js',
  './manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(STATIC)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Cache-first for Wikimedia/Wikipedia images (pre-cached on first load)
  if (url.hostname.includes('wikimedia.org') || url.hostname.includes('wikipedia.org')) {
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return res;
        });
      })
    );
    return;
  }

  // Cache-first for local files
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
