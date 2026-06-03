/* ── State ──────────────────────────────────────────────────────────────── */
const S = {
  checked: {},
  photos: {},
  notes: {},
  dateCollected: {},
  hiddenFromCollection: {},
  favorites: {},
  visitedMuseums: {},
  userPaintings: [],
  view: 'list',
  listMode: 'grid',
  collectionMode: 'gallery',
  collectionSort: 'rank',
  collectionSearch: '',
  collectionFilter: 'all',
  museumsSearch: '',
  museumSearch: '',
  museumsMode: 'alpha',
  museumsDetailMode: 'condensed',
  sort: 'rank',
  search: '',
  filter: { continent: null, country: null, city: null, museum: null },
  units: 'metric',
  scope: 'top100',
  statTracking: 'all',
  statProgressBy: 'continent',
  expandedMuseums: new Set(),
  expandedContinents: new Set(),
  expandedCountries: new Set(),
  expandedMovements: new Set(), // used for movement groups in sort-by-movement view
  expandedListMuseums: new Set(), // museum groups in sort-by-museum view
  expandedListArtists: new Set(), // artist groups in sort-by-artist view
  expandedCollMuseums: new Set(),
  expandedCollArtists: new Set(),
  expandedCollMovements: new Set(),
  expandedStatsMuseums: new Set(),
  activeMuseum: null,
};

/* ── Per-tab scroll position (not persisted) ────────────────────────────── */
const _tabScroll = { list: 0, museums: 0, 'museum-detail': 0, collection: 0 };
let _museumsDetailState = null; // saved when leaving museum-detail via tab switch

/* ── Add-painting modal state ────────────────────────────────────────────── */
let _apMuseum = '';
let _apAutofillMuseum = null;

/* ── Ephemeral UI state ──────────────────────────────────────────────────── */
const _prevDateCollected = {}; // remembers the last real date before toggling Unknown

/* ── IndexedDB (user photo storage) ─────────────────────────────────────── */
let _idb = null;

function _idbOpen() {
  if (_idb) return Promise.resolve(_idb);
  return new Promise((resolve, reject) => {
    const req = indexedDB.open('beheld-db', 1);
    req.onupgradeneeded = e => e.target.result.createObjectStore('photos');
    req.onsuccess = e => { _idb = e.target.result; resolve(_idb); };
    req.onerror   = () => reject(req.error);
  });
}

function _idbPut(key, value) {
  return _idbOpen().then(db => new Promise((resolve, reject) => {
    const req = db.transaction('photos', 'readwrite').objectStore('photos').put(value, key);
    req.onsuccess = () => resolve();
    req.onerror   = () => reject(req.error);
  }));
}

function _idbDelete(key) {
  return _idbOpen().then(db => new Promise((resolve, reject) => {
    const req = db.transaction('photos', 'readwrite').objectStore('photos').delete(key);
    req.onsuccess = () => resolve();
    req.onerror   = () => reject(req.error);
  }));
}

function _idbGetAll() {
  return _idbOpen().then(db => new Promise((resolve, reject) => {
    const result = {};
    const req = db.transaction('photos', 'readonly').objectStore('photos').openCursor();
    req.onsuccess = e => {
      const cursor = e.target.result;
      if (cursor) { result[cursor.key] = cursor.value; cursor.continue(); }
      else resolve(result);
    };
    req.onerror = () => reject(req.error);
  }));
}

/* ── Navigation stack ───────────────────────────────────────────────────── */
const _navStack = []; // each entry is a fn() that reopens the previous screen

function _currentReopenFn() {
  const a = document.getElementById('artist-overlay');
  if (a) { const n = a.dataset.artistName;   return () => openArtistPopup(n); }
  const v = document.getElementById('movement-overlay');
  if (v) { const k = v.dataset.movementKey;  return () => openMovementPopup(k); }
  const m = document.getElementById('museum-overlay');
  if (m) { const n = m.dataset.museumName;   return () => openMuseumPopup(n); }
  const d = document.getElementById('detail-overlay');
  if (d) { const id = d.dataset.paintingId;  return () => openDetail(id); }
  return null;
}

function _closeAllOverlays() {
  ['detail-overlay', 'museum-overlay', 'artist-overlay', 'movement-overlay'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.remove();
  });
}

// Step back one screen; if stack is empty, close everything
function navBack() {
  _closeAllOverlays();
  if (_navStack.length > 0) {
    _navStack.pop()();
  } else {
    document.body.style.overflow = '';
  }
}

// Swipe-down or explicit full-close — dismisses everything
function navDismissAll() {
  _navStack.length = 0;
  _closeAllOverlays();
  document.body.style.overflow = '';
}

// Call at the start of every open* function to push the current screen and clear
function _navOpen() {
  const reopen = _currentReopenFn();
  if (reopen) _navStack.push(reopen);
  _closeAllOverlays();
  document.body.style.overflow = 'hidden';
}

// Swipe-down-to-dismiss — attach to an overlay element
function addSwipeDismiss(overlayEl) {
  const sheet = overlayEl.querySelector('.detail-sheet');
  if (!sheet) return;

  let startY = 0, startScrollTop = 0, active = false, dragging = false;

  sheet.addEventListener('touchstart', e => {
    startY = e.touches[0].clientY;
    startScrollTop = sheet.scrollTop;
    active = true;
    dragging = false;
    sheet.style.transition = 'none';
  }, { passive: true });

  function onMove(e) {
    if (!active && !dragging) return;
    const dy = e.touches[0].clientY - startY;

    // If content is scrolled down or the user is swiping up, let scroll work normally
    if (startScrollTop > 0 || dy <= 0) {
      active = false;
      dragging = false;
      sheet.style.transition = '';
      return;
    }

    // Confirm drag direction before intercepting (avoids mis-firing on taps)
    if (dy > 8) dragging = true;
    if (dragging) {
      e.preventDefault();
      sheet.style.transform = `translateY(${dy}px)`;
      overlayEl.style.background = `rgba(0,0,0,${Math.max(0, 0.5 - dy / 500)})`;
    }
  }

  function onEnd(e) {
    if (!active && !dragging) return;
    active = false;
    const dy = e.changedTouches[0].clientY - startY;
    sheet.style.transition = 'transform .25s ease';
    if (dragging && dy > 120) {
      sheet.style.transform = 'translateY(110%)';
      overlayEl.style.transition = 'opacity .25s';
      overlayEl.style.opacity = '0';
      setTimeout(navDismissAll, 240);
    } else {
      sheet.style.transform = '';
      overlayEl.style.background = '';
    }
    dragging = false;
  }

  window.addEventListener('touchmove', onMove, { passive: false });
  window.addEventListener('touchend', onEnd, { passive: true });
}

/* ── Persistence ────────────────────────────────────────────────────────── */
function save() {
  try {
    localStorage.setItem('pc_state', JSON.stringify({
      checked: S.checked, notes: S.notes, dateCollected: S.dateCollected, hiddenFromCollection: S.hiddenFromCollection, favorites: S.favorites, visitedMuseums: S.visitedMuseums, userPaintings: S.userPaintings,
      view: S.view, listMode: S.listMode, collectionMode: S.collectionMode, collectionSort: S.collectionSort, collectionFilter: S.collectionFilter, museumsMode: S.museumsMode, museumsDetailMode: S.museumsDetailMode, sort: S.sort, filter: S.filter, units: S.units, scope: S.scope, statTracking: S.statTracking, statProgressBy: S.statProgressBy,
    }));
  } catch (_) {}
}

function load() {
  try {
    const raw = localStorage.getItem('pc_state');
    if (!raw) return;
    const snap = JSON.parse(raw);
    if (snap.dateSeen && !snap.dateCollected) snap.dateCollected = snap.dateSeen;
    Object.assign(S, snap);
    S.expandedMuseums    = new Set();
    S.expandedContinents = new Set();
    S.expandedCountries  = new Set();
    S.expandedMovements   = new Set();
    S.expandedListMuseums = new Set();
    S.expandedListArtists = new Set();
    S.expandedCollMuseums  = new Set();
    S.expandedCollArtists  = new Set();
    S.expandedCollMovements = new Set();
    S.expandedStatsMuseums = new Set();
    if (S.view === 'stats' || S.view === 'settings' || S.view === 'museum-detail') S.view = 'list';
    if (S.scope === 'extended') S.scope = 'plus30';
    if (S.museumsMode === 'continent') S.museumsMode = 'alpha';
  } catch (_) {}
}

/* ── Date helpers ───────────────────────────────────────────────────────── */
function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

/* ── Data helpers ───────────────────────────────────────────────────────── */
function allPaintings() { return [...PAINTINGS, ...S.userPaintings]; }
function scopedPaintings() {
  const all = allPaintings();
  if (S.scope === 'top100') return all.filter(p => !p.museumOnly);
  if (S.scope === 'plus10' || S.scope === 'plus30') {
    const limit = S.scope === 'plus10' ? 10 : 30;
    // Group by museum; rank paintings always included, museumOnly fills remaining slots up to limit
    const byMuseum = {};
    all.forEach(p => {
      const m = p.location.museum;
      if (!byMuseum[m]) byMuseum[m] = { rank: [], museumOnly: [] };
      if (!p.museumOnly) byMuseum[m].rank.push(p);
      else byMuseum[m].museumOnly.push(p);
    });
    const result = [];
    Object.values(byMuseum).forEach(({ rank, museumOnly }) => {
      result.push(...rank);
      const slots = Math.max(0, limit - rank.length);
      result.push(...museumOnly.slice(0, slots));
    });
    return result;
  }
  return all;
}
function checkedCount(ids) { return ids.filter(id => S.checked[String(id)]).length; }
function globalChecked() {
  const pool = (S.statTracking === 'top100' && S.scope !== 'top100')
    ? allPaintings().filter(p => !p.museumOnly && !p.isUser)
    : scopedPaintings();
  return pool.filter(p => S.checked[String(p.id)]).length;
}
function globalTotal() {
  if (S.statTracking === 'top100' && S.scope !== 'top100') return 100;
  return scopedPaintings().length;
}

/* ── Sorting & filtering ─────────────────────────────────────────────────── */
function filteredSorted() {
  let list = scopedPaintings();
  if (S.filter.museum)    list = list.filter(p => p.location.museum    === S.filter.museum);
  else if (S.filter.city) list = list.filter(p => p.location.city      === S.filter.city);
  else if (S.filter.country) list = list.filter(p => p.location.country === S.filter.country);
  else if (S.filter.continent) list = list.filter(p => p.location.continent === S.filter.continent);

  if (S.search) {
    const q = S.search.toLowerCase();
    list = list.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.artist.toLowerCase().includes(q) ||
      p.location.museum.toLowerCase().includes(q) ||
      p.location.country.toLowerCase().includes(q)
    );
  }
  list.sort((a, b) => {
    if (S.sort === 'rank')   return (a.rank || 9999) - (b.rank || 9999);
    if (S.sort === 'artist') return a.artist.localeCompare(b.artist);
    if (S.sort === 'year')   return parseYear(a.year) - parseYear(b.year);
    if (S.sort === 'title')  return a.title.localeCompare(b.title);
    if (S.sort === 'museum') {
      const cmp = a.location.museum.localeCompare(b.location.museum);
      return cmp !== 0 ? cmp : (a.rank || 9999) - (b.rank || 9999);
    }
    if (S.sort === 'movement') {
      const order = typeof MOVEMENTS !== 'undefined' ? Object.keys(MOVEMENTS) : [];
      const idx = k => { const i = order.indexOf(k || ''); return i === -1 ? 9999 : i; };
      const cmp = idx(a.movement) - idx(b.movement);
      return cmp !== 0 ? cmp : (a.rank || 9999) - (b.rank || 9999);
    }
    return 0;
  });
  return list;
}

/* ── Icons ──────────────────────────────────────────────────────────────── */
const ICONS = {
  check:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>`,
  camera:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  list:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
  museum:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>`,
  brush:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"/><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"/></svg>`,
  landmark:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>`,
  globe:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  stats:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  plus:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  sort:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="6" y1="12" x2="18" y2="12"/><line x1="9" y1="18" x2="15" y2="18"/></svg>`,
  grid:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>`,
  grid3:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><rect x="16" y="2" width="6" height="6" rx="1"/><rect x="2" y="9" width="6" height="6" rx="1"/><rect x="9" y="9" width="6" height="6" rx="1"/><rect x="16" y="9" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="16" width="6" height="6" rx="1"/><rect x="16" y="16" width="6" height="6" rx="1"/></svg>`,
  rows:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
  bookmark: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`,
  heart:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  heartFill:`<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  frame:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="1"/><rect x="5" y="5" width="14" height="14" rx="1"/></svg>`,
  back:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>`,
  pin:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  palette: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="11.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
  info:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
  gear:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  dice:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  hash:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>`,
  calendar:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  type:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>`,
  wikipedia:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="7,8 9.5,16 12,10 14.5,16 17,8"/></svg>`,
  grokipedia: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M15 10a4 4 0 1 0 0 4M15 12h-3"/></svg>`,
  expandAll:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="7 13 12 18 17 13"/><polyline points="7 6 12 11 17 6"/></svg>`,
  collapseAll: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="7 11 12 6 17 11"/><polyline points="7 18 12 13 17 18"/></svg>`,
};

/* ── Escape helper ──────────────────────────────────────────────────────── */
function esc(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ── Dimensions formatting ──────────────────────────────────────────────── */
let _prevView = 'list';

function formatDimensions(dim) {
  if (!dim || S.units === 'metric') return dim;
  return dim
    .replace(/(\d+(?:\.\d+)?)\s*cm/g, (_, n) => `${(parseFloat(n) * 0.393701).toFixed(1)} in`)
    .replace(/(\d+(?:\.\d+)?)\s*m\b/g, (_, n) => `${(parseFloat(n) * 3.28084).toFixed(1)} ft`);
}

function parseYear(y) {
  if (!y) return 9999;
  const m = String(y).match(/\d{4}/);
  return m ? parseInt(m[0], 10) : 9999;
}

/* ── Condensed card (3-per-row thumbnail grid) ──────────────────────────── */
function renderCondensedCard(p) {
  const key = String(p.id);
  const isChecked = !!S.checked[key];
  const img = p.imageUrl
    ? `<img src="${p.imageUrl}" alt="${esc(p.title)}" loading="lazy"
           onerror="this.outerHTML='<div class=row-thumb-placeholder>🎨</div>'">`
    : `<div class="row-thumb-placeholder">🎨</div>`;
  const rankBadge = (p.rank != null && p.rank <= 100) ? `<div class="mv-rank-badge">#${p.rank}</div>` : '';
  return `<div class="mv-popup-painting${isChecked ? ' condensed-checked' : ''}" data-pid="${key}" onclick="openDetail('${key}')">
    <div class="mv-popup-thumb-wrap">
      ${rankBadge}
      <div class="mv-popup-thumb">${img}</div>
      <div class="card-collected-badge${isChecked ? ' checked' : ''}"
           onclick="rowToggleCheck(event,'${key}')" title="Collect">
        ${isChecked ? ICONS.check : ''}
      </div>
    </div>
    <div class="mv-popup-title">${esc(p.title)}</div>
    <div class="mv-popup-artist">${esc(p.artist)}</div>
  </div>`;
}

/* ── Painting Card (grid, Top 100 view) ─────────────────────────────────── */
function renderPaintingCard(p) {
  const key = String(p.id);
  const isChecked = !!S.checked[key];
  const hasPhotos = (S.photos[key] || []).length > 0;

  const imgHtml = p.imageUrl
    ? `<img class="card-img" src="${p.imageUrl}" alt="${esc(p.title)}" loading="lazy"
           onerror="this.classList.add('card-img-error');this.outerHTML='<div class=card-img-placeholder>🎨</div>'">`
    : `<div class="card-img-placeholder">🎨</div>`;

  return `<div class="painting-card${isChecked ? ' checked' : ''}" data-pid="${key}" onclick="openDetail('${key}')">
    <div class="card-img-wrap">
      ${imgHtml}
      ${p.rank != null && p.rank <= 100 ? `<div class="card-rank-badge">#${p.rank}</div>` : ''}
      <div class="card-collected-badge${isChecked ? ' checked' : ''}"
           onclick="rowToggleCheck(event,'${key}')" title="Collect">
        ${isChecked ? ICONS.check : ''}
      </div>
      ${hasPhotos ? `<div class="card-photo-badge">📷</div>` : ''}
    </div>
    <div class="card-body">
      <div class="card-title">${esc(p.title)}</div>
      <div class="card-artist">${esc(p.artist)}</div>
      <div class="card-museum">${esc(p.location.city)}</div>
    </div>
  </div>`;
}

/* ── Painting Row (compact, used in Museum / Location views) ─────────────── */
function renderPaintingRow(p) {
  const key = String(p.id);
  const isChecked = !!S.checked[key];
  const isUser = !!p.isUser;

  const imgHtml = p.imageUrl
    ? `<img class="row-thumb" src="${p.imageUrl}" alt="${esc(p.title)}" loading="lazy"
           onerror="this.outerHTML='<div class=row-thumb-placeholder>🎨</div>'">`
    : `<div class="row-thumb-placeholder">🎨</div>`;

  return `<div class="painting-row${isChecked ? ' checked' : ''}" data-pid="${key}" onclick="openDetail('${key}')">
    <div class="row-img-wrap">${imgHtml}</div>
    <div class="row-meta">
      <div class="row-title">${esc(p.title)}${isUser ? '<span class="user-badge">added</span>' : ''}</div>
      <div class="row-artist">${esc(p.artist)} · ${esc(p.year)}</div>
      ${p.rank != null && p.rank <= 100 ? `<div class="row-rank">#${p.rank} of 100</div>` : ''}
    </div>
    <div class="row-check${isChecked ? ' checked' : ''}"
         onclick="rowToggleCheck(event,'${key}')" title="Collect">
      ${isChecked ? ICONS.check : ''}
    </div>
  </div>`;
}

/* ── Top-100 List View ───────────────────────────────────────────────────── */
function renderListView() {
  const paintings = filteredSorted();
  const filterChips = buildFilterChips();
  const mode = S.listMode;

  let paintingsHtml;
  if (paintings.length === 0) {
    paintingsHtml = `<div class="empty-state"><div class="empty-icon">${ICONS.frame}</div><p>No paintings match your search.</p></div>`;
  } else if (S.sort === 'museum') {
    const museumOrder = [...new Set(paintings.map(p => p.location.museum))];
    const groups = {};
    paintings.forEach(p => { const m = p.location.museum; if (!groups[m]) groups[m] = []; groups[m].push(p); });
    const flagFor = { France:'🇫🇷', Italy:'🇮🇹', USA:'🇺🇸', Netherlands:'🇳🇱', Spain:'🇪🇸',
      'United Kingdom':'🇬🇧', Russia:'🇷🇺', Norway:'🇳🇴', Austria:'🇦🇹', Germany:'🇩🇪',
      'Vatican City':'🇻🇦', Mexico:'🇲🇽' };
    paintingsHtml = `<div class="list-movement-groups">${museumOrder.map(museum => {
      const mps = groups[museum];
      const mc  = checkedCount(mps.map(p => p.id));
      const loc = mps[0].location;
      const info = typeof MUSEUMS_INFO !== 'undefined' ? MUSEUMS_INFO[museum] : null;
      const flag = flagFor[loc.country] || '';
      const isOpen = S.expandedListMuseums.has(museum);
      const infoBody = isOpen ? `<div class="list-movement-info">
        ${info && info.photo ? `<img class="museum-popup-photo" src="${info.photo}" alt="${esc(museum)}" style="margin-bottom:12px" onerror="this.style.display='none'">` : ''}
        ${info ? `<p class="mv-row-full-summary">${esc(info.blurb)}</p>` : '<p class="mv-row-full-summary" style="color:var(--text-faint)">No description available.</p>'}
      </div>` : '';
      return `<div class="list-movement-group${isOpen ? ' open' : ''}">
        <div class="list-movement-header" onclick="toggleListMuseumGroup('${museum.replace(/'/g, "\\'")}')">
          <div class="list-movement-chevron">${ICONS.chevron}</div>
          <span class="list-movement-name">${esc(museum)}</span>
          <span class="list-movement-era">${flag} ${esc(loc.city)}, ${esc(loc.country)}</span>
          <span class="list-movement-stat">${mc}/${mps.length} collected</span>
        </div>
        ${infoBody}
        ${mode === 'condensed'
          ? `<div class="mv-popup-paintings" style="padding:4px 8px 8px">${mps.map(renderCondensedCard).join('')}</div>`
          : mode !== 'compact'
            ? `<div class="paintings-grid" style="padding:4px 0 8px">${mps.map(p => renderPaintingCard(p)).join('')}</div>`
            : `<div class="paintings-compact" style="padding:0">${mps.map(p => renderPaintingRow(p)).join('')}</div>`}
      </div>`;
    }).join('')}</div>`;
  } else if (S.sort === 'artist') {
    const artistOrder = [...new Set(paintings.map(p => p.artist))];
    const groups = {};
    paintings.forEach(p => { const a = p.artist; if (!groups[a]) groups[a] = []; groups[a].push(p); });
    paintingsHtml = `<div class="list-movement-groups">${artistOrder.map(artist => {
      const mps = groups[artist];
      const mc  = checkedCount(mps.map(p => p.id));
      const info = typeof ARTISTS !== 'undefined' ? ARTISTS[artist] : null;
      const portrait = typeof ARTIST_PORTRAITS !== 'undefined' ? ARTIST_PORTRAITS[artist] : null;
      const metaLine = info ? [esc(info.nationality), `${esc(info.born)}–${esc(info.died)}`].filter(Boolean).join(' · ') : '';
      const movementNames = [...new Set(mps.map(p => p.movement).filter(Boolean))];
      const isOpen = S.expandedListArtists.has(artist);
      const movementChips = movementNames.map(k => {
        const mv = typeof MOVEMENTS !== 'undefined' ? MOVEMENTS[k] : null;
        return `<button class="mv-artist-chip mv-chip-link" onclick="openMovementPopup('${k.replace(/'/g, "\\'")}')">${esc(k)}${mv ? `<span style="color:var(--text-faint);font-size:.65rem"> · ${esc(mv.era)}</span>` : ''}</button>`;
      }).join('');
      const infoBody = isOpen ? `<div class="list-movement-info">
        ${portrait ? `<img class="artist-portrait" src="${portrait}" alt="${esc(artist)}" onerror="this.style.display='none'">` : ''}
        ${info ? `<p class="mv-row-full-summary">${esc(info.bio)}</p>` : '<p class="mv-row-full-summary" style="color:var(--text-faint)">No biography available.</p>'}
        ${movementChips ? `<div class="mv-section-label" style="margin-top:14px">Movement${movementNames.length > 1 ? 's' : ''}</div>
        <div class="mv-artists">${movementChips}</div>` : ''}
      </div>` : '';
      return `<div class="list-movement-group${isOpen ? ' open' : ''}">
        <div class="list-movement-header" onclick="toggleListArtistGroup('${artist.replace(/'/g, "\\'")}')">
          <div class="list-movement-chevron">${ICONS.chevron}</div>
          <span class="list-movement-name">${esc(artist)}</span>
          ${metaLine ? `<span class="list-movement-era">${metaLine}</span>` : ''}
          <span class="list-movement-stat">${mc}/${mps.length} collected</span>
        </div>
        ${infoBody}
        ${mode === 'condensed'
          ? `<div class="mv-popup-paintings" style="padding:4px 8px 8px">${mps.map(renderCondensedCard).join('')}</div>`
          : mode !== 'compact'
            ? `<div class="paintings-grid" style="padding:4px 0 8px">${mps.map(p => renderPaintingCard(p)).join('')}</div>`
            : `<div class="paintings-compact" style="padding:0">${mps.map(p => renderPaintingRow(p)).join('')}</div>`}
      </div>`;
    }).join('')}</div>`;
  } else if (S.sort === 'movement') {
    const movOrder = typeof MOVEMENTS !== 'undefined' ? Object.keys(MOVEMENTS) : [];
    const seen = [...new Set(paintings.map(p => p.movement || '(Unknown)'))];
    const orderedKeys = [...movOrder.filter(k => seen.includes(k)), ...seen.filter(k => !movOrder.includes(k))];
    const groups = {};
    paintings.forEach(p => { const k = p.movement || '(Unknown)'; if (!groups[k]) groups[k] = []; groups[k].push(p); });
    paintingsHtml = `<div class="list-movement-groups">${orderedKeys.map(mvKey => {
      const mps = groups[mvKey] || [];
      const mc  = checkedCount(mps.map(p => p.id));
      const mv  = typeof MOVEMENTS !== 'undefined' ? MOVEMENTS[mvKey] : null;
      const isOpen = S.expandedMovements.has(mvKey);
      const infoBody = (mv && isOpen) ? `<div class="list-movement-info">
        <p class="mv-row-full-summary">${esc(mv.summary)}</p>
        <div class="mv-section-label" style="margin-top:12px">Key characteristics</div>
        <ul class="mv-traits">${mv.traits.map(t => `<li>${esc(t)}</li>`).join('')}</ul>
        <div class="mv-section-label" style="margin-top:14px">Key artists</div>
        <div class="mv-artists">${mv.artists.map(a => `<button class="mv-artist-chip mv-chip-link" onclick="openArtistPopup('${a.replace(/'/g, "\\'")}')">${esc(a)}</button>`).join('')}</div>
      </div>` : '';
      return `<div class="list-movement-group${isOpen ? ' open' : ''}">
        <div class="list-movement-header" onclick="toggleMovementGroup('${mvKey.replace(/'/g, "\\'")}')">
          <div class="list-movement-chevron">${ICONS.chevron}</div>
          <span class="list-movement-name">${esc(mvKey)}</span>
          ${mv ? `<span class="list-movement-era">${esc(mv.era)}</span>` : ''}
          <span class="list-movement-stat">${mc}/${mps.length} collected</span>
        </div>
        ${infoBody}
        ${mode === 'condensed'
          ? `<div class="mv-popup-paintings" style="padding:4px 8px 8px">${mps.map(renderCondensedCard).join('')}</div>`
          : mode !== 'compact'
            ? `<div class="paintings-grid" style="padding:4px 0 8px">${mps.map(p => renderPaintingCard(p)).join('')}</div>`
            : `<div class="paintings-compact" style="padding:0">${mps.map(p => renderPaintingRow(p)).join('')}</div>`}
      </div>`;
    }).join('')}</div>`;
  } else {
    paintingsHtml = mode === 'condensed'
      ? `<div class="mv-popup-paintings" style="padding:0 8px">${paintings.map(renderCondensedCard).join('')}</div>`
      : mode !== 'compact'
        ? `<div class="paintings-grid">${paintings.map(p => renderPaintingCard(p)).join('')}</div>`
        : `<div class="paintings-compact">${paintings.map(p => renderPaintingRow(p)).join('')}</div>`;
  }

  return `
    <div id="toolbar">
      <div class="search-wrap">
        <input id="search-input" type="search" placeholder="Search paintings, artists…"
               value="${esc(S.search)}" oninput="handleSearch(this.value)">
        <button class="search-clear" onclick="handleSearch('')" title="Clear search" ${S.search ? '' : 'hidden'}>✕</button>
      </div>
      <button class="toolbar-btn icon-only" onclick="openSortDropdown(event,this)" title="Sort">
        ${ICONS.sort}
      </button>
      <button class="toolbar-btn icon-only" onclick="openViewDropdown(event,this)" title="View">
        ${mode === 'grid' ? ICONS.grid : mode === 'condensed' ? ICONS.grid3 : ICONS.rows}
      </button>
    </div>
    <div class="toolbar-spacer"></div>
    ${filterChips}
    ${paintingsHtml}
  `;
}

/* ── Filter chips ───────────────────────────────────────────────────────── */
function buildFilterChips() {
  const chips = [];
  if (S.filter.continent) chips.push(`<span class="filter-chip active" onclick="clearFilter('continent')">${S.filter.continent} <span class="remove">✕</span></span>`);
  if (S.filter.country)   chips.push(`<span class="filter-chip active" onclick="clearFilter('country')">${S.filter.country} <span class="remove">✕</span></span>`);
  if (S.filter.city)      chips.push(`<span class="filter-chip active" onclick="clearFilter('city')">${S.filter.city} <span class="remove">✕</span></span>`);
  if (S.filter.museum)    chips.push(`<span class="filter-chip active" onclick="clearFilter('museum')">${S.filter.museum} <span class="remove">✕</span></span>`);
  return chips.length ? `<div id="filter-bar">${chips.join('')}</div>` : '';
}

/* ── Museums View ───────────────────────────────────────────────────────── */
function _museumsToolbar() {
  const isDetail = S.view === 'museum-detail';
  const searchVal  = isDetail ? S.museumSearch  : S.museumsSearch;
  const placeholder = isDetail ? `Search ${esc(S.activeMuseum)}…` : 'Search museums, cities…';
  const onInput    = isDetail ? `handleMuseumSearch(this.value)` : `handleMuseumsSearch(this.value)`;
  const onClear    = isDetail ? `handleMuseumSearch('')`          : `handleMuseumsSearch('')`;
  return `<div id="toolbar">
    <div class="search-wrap">
      <input id="museums-search-input" type="search" placeholder="${placeholder}"
             value="${esc(searchVal)}" oninput="${onInput}">
      <button class="search-clear" onclick="${onClear}" title="Clear search" ${searchVal ? '' : 'hidden'}>✕</button>
    </div>
    <button class="toolbar-btn icon-only"
            onclick="openMuseumsViewDropdown(event,this)" title="Group by">
      ${ICONS.sort}
    </button>
    <button class="toolbar-btn icon-only"
            onclick="openMuseumsDetailModeDropdown(event,this)" title="Painting view">
      ${S.museumsDetailMode === 'grid' ? ICONS.grid : S.museumsDetailMode === 'list' ? ICONS.rows : ICONS.grid3}
    </button>
  </div><div class="toolbar-spacer"></div>`;
}

function renderMuseumsView() {
  const toolbar = _museumsToolbar();
  if (S.museumsMode === 'city')    return toolbar + renderMuseumsCity();
  if (S.museumsMode === 'country') return toolbar + renderMuseumsCountry();
  if (S.museumsMode === 'visited' && Object.keys(S.visitedMuseums).length > 0)
    return toolbar + renderMuseumsVisited();
  return toolbar + renderMuseumsAlpha();
}

function renderMuseumBlock(name, paintings) {
  const isVisited = !!S.visitedMuseums[name];
  const mc  = checkedCount(paintings.map(p => p.id));
  const mt  = paintings.length;
  const safeName = esc(name).replace(/'/g, "\\'");
  return `<div class="museum-section" style="margin:0 0 6px">
    <div class="museum-header${isVisited ? ' visited-museum' : ''}" onclick="openMuseumDetail('${safeName}')" style="padding:8px 12px">
      <div class="museum-info">
        <div class="museum-name" style="font-size:.85rem">${esc(name)}</div>
      </div>
      <div class="museum-counter"><div class="mc-nums">${mc}/${mt}</div><div class="mc-label">collected</div></div>
      <button class="museum-visited-btn${isVisited ? ' visited' : ''}" onclick="toggleMuseumVisited(event,'${safeName}')" title="${isVisited ? 'Visited' : 'Mark as visited'}">
        ${isVisited ? ICONS.check : ''}
      </button>
      <div class="museum-chevron">${ICONS.chevron}</div>
    </div>
  </div>`;
}

function renderMuseumsAlpha() {
  const museums = {};
  scopedPaintings().forEach(p => {
    const key = p.location.museum;
    if (!museums[key]) museums[key] = { ...p.location, paintings: [] };
    museums[key].paintings.push(p);
  });
  const flagFor = { France:'🇫🇷', Italy:'🇮🇹', USA:'🇺🇸', Netherlands:'🇳🇱', Spain:'🇪🇸',
    'United Kingdom':'🇬🇧', Russia:'🇷🇺', Norway:'🇳🇴', Austria:'🇦🇹', Germany:'🇩🇪',
    'Vatican City':'🇻🇦', Mexico:'🇲🇽' };
  const q = S.museumsSearch.toLowerCase();
  let entries = Object.entries(museums).sort(([a], [b]) => a.localeCompare(b));
  if (q) entries = entries.filter(([name, m]) =>
    name.toLowerCase().includes(q) || m.city.toLowerCase().includes(q) || m.country.toLowerCase().includes(q));
  if (!entries.length) return `<div class="empty-state"><div class="empty-icon">🏛️</div><p>No museums match your search.</p></div>`;
  return entries.map(([name, m]) => {
    const checked   = checkedCount(m.paintings.map(x => x.id));
    const total     = m.paintings.length;
    const isVisited = !!S.visitedMuseums[name];
    const icon      = flagFor[m.country] || '🖼️';
    const safeName  = esc(name).replace(/'/g, "\\'");
    return `<div class="museum-section">
      <div class="museum-header${isVisited ? ' visited-museum' : ''}" onclick="openMuseumDetail('${safeName}')">
        <div class="museum-icon-wrap">
          <div class="museum-icon">${icon}</div>
        </div>
        <div class="museum-info">
          <div class="museum-name">${esc(name)}</div>
          <div class="museum-location">${esc(m.city)}, ${esc(m.country)}</div>
        </div>
        <div class="museum-counter"><div class="mc-nums">${checked}/${total}</div><div class="mc-label">collected</div></div>
        <button class="museum-visited-btn${isVisited ? ' visited' : ''}" onclick="toggleMuseumVisited(event,'${safeName}')" title="${isVisited ? 'Visited' : 'Mark as visited'}">
          ${isVisited ? ICONS.check : ''}
        </button>
        <div class="museum-chevron">${ICONS.chevron}</div>
      </div>
    </div>`;
  }).join('');
}

function renderMuseumsVisited() {
  const museums = {};
  scopedPaintings().forEach(p => {
    const key = p.location.museum;
    if (!museums[key]) museums[key] = { ...p.location, paintings: [] };
    museums[key].paintings.push(p);
  });
  const flagFor = { France:'🇫🇷', Italy:'🇮🇹', USA:'🇺🇸', Netherlands:'🇳🇱', Spain:'🇪🇸',
    'United Kingdom':'🇬🇧', Russia:'🇷🇺', Norway:'🇳🇴', Austria:'🇦🇹', Germany:'🇩🇪',
    'Vatican City':'🇻🇦', Mexico:'🇲🇽' };
  const q = S.museumsSearch.toLowerCase();
  let entries = Object.entries(museums).sort(([a], [b]) => a.localeCompare(b));
  if (q) entries = entries.filter(([name, m]) =>
    name.toLowerCase().includes(q) || m.city.toLowerCase().includes(q) || m.country.toLowerCase().includes(q));
  if (!entries.length) return `<div class="empty-state"><div class="empty-icon">🏛️</div><p>No museums match your search.</p></div>`;

  const visited   = entries.filter(([name]) => !!S.visitedMuseums[name]);
  const unvisited = entries.filter(([name]) => !S.visitedMuseums[name]);

  function museumCard([name, m]) {
    const isVisited = !!S.visitedMuseums[name];
    const checked   = checkedCount(m.paintings.map(x => x.id));
    const total     = m.paintings.length;
    const icon      = flagFor[m.country] || '🖼️';
    const safeName  = esc(name).replace(/'/g, "\\'");
    return `<div class="museum-section">
      <div class="museum-header${isVisited ? ' visited-museum' : ''}" onclick="openMuseumDetail('${safeName}')">
        <div class="museum-icon-wrap"><div class="museum-icon">${icon}</div></div>
        <div class="museum-info">
          <div class="museum-name">${esc(name)}</div>
          <div class="museum-location">${esc(m.city)}, ${esc(m.country)}</div>
        </div>
        <div class="museum-counter"><div class="mc-nums">${checked}/${total}</div><div class="mc-label">collected</div></div>
        <button class="museum-visited-btn${isVisited ? ' visited' : ''}" onclick="toggleMuseumVisited(event,'${safeName}')" title="${isVisited ? 'Visited' : 'Mark as visited'}">
          ${isVisited ? ICONS.check : ''}
        </button>
        <div class="museum-chevron">${ICONS.chevron}</div>
      </div>
    </div>`;
  }

  const visitedHtml   = visited.length   ? `<div class="museums-visited-label">Visited</div>${visited.map(museumCard).join('')}`   : '';
  const unvisitedHtml = unvisited.length ? `<div class="museums-visited-label" style="color:var(--text-faint)">Not Yet Visited</div>${unvisited.map(museumCard).join('')}` : '';
  return visitedHtml + unvisitedHtml;
}

function renderMuseumsCity() {
  const cities = {};
  const cityCountry = {};
  const flagFor = { France:'🇫🇷', Italy:'🇮🇹', USA:'🇺🇸', Netherlands:'🇳🇱', Spain:'🇪🇸',
    'United Kingdom':'🇬🇧', Russia:'🇷🇺', Norway:'🇳🇴', Austria:'🇦🇹', Germany:'🇩🇪',
    'Vatican City':'🇻🇦', Mexico:'🇲🇽' };
  scopedPaintings().forEach(p => {
    const { city, country, museum } = p.location;
    if (!cities[city]) cities[city] = {};
    if (!cities[city][museum]) cities[city][museum] = [];
    cities[city][museum].push(p);
    cityCountry[city] = country;
  });
  const q = S.museumsSearch.toLowerCase();
  let cityKeys = Object.keys(cities).sort();
  if (q) cityKeys = cityKeys.filter(city => {
    if (city.toLowerCase().includes(q)) return true;
    return Object.keys(cities[city]).some(m => m.toLowerCase().includes(q));
  });
  if (!cityKeys.length) return `<div class="empty-state"><div class="empty-icon">🏛️</div><p>No museums match your search.</p></div>`;
  return cityKeys.map(city => {
    const allPs   = Object.values(cities[city]).flat();
    const checked = checkedCount(allPs.map(p => p.id));
    const total   = allPs.length;
    const flag = flagFor[cityCountry[city]] || '';
    return `<div class="loc-section">
      <div class="loc-header">
        <span class="loc-name">${flag ? `${flag} ` : ''}${esc(city)}, ${esc(cityCountry[city])}</span>
        <span class="loc-stat">${checked}/${total} collected</span>
      </div>
      ${Object.keys(cities[city]).sort().map(m => renderMuseumBlock(m, cities[city][m])).join('')}
    </div>`;
  }).join('');
}

function renderMuseumsCountry() {
  const flagFor = { France:'🇫🇷', Italy:'🇮🇹', USA:'🇺🇸', Netherlands:'🇳🇱', Spain:'🇪🇸',
    'United Kingdom':'🇬🇧', Russia:'🇷🇺', Norway:'🇳🇴', Austria:'🇦🇹', Germany:'🇩🇪',
    'Vatican City':'🇻🇦', Mexico:'🇲🇽' };
  const countries = {};
  scopedPaintings().forEach(p => {
    const { country, city, museum } = p.location;
    if (!countries[country]) countries[country] = {};
    if (!countries[country][city]) countries[country][city] = {};
    if (!countries[country][city][museum]) countries[country][city][museum] = [];
    countries[country][city][museum].push(p);
  });
  const q = S.museumsSearch.toLowerCase();
  let countryKeys = Object.keys(countries).sort();
  if (q) countryKeys = countryKeys.filter(country => {
    if (country.toLowerCase().includes(q)) return true;
    return Object.keys(countries[country]).some(city => {
      if (city.toLowerCase().includes(q)) return true;
      return Object.keys(countries[country][city]).some(m => m.toLowerCase().includes(q));
    });
  });
  if (!countryKeys.length) return `<div class="empty-state"><div class="empty-icon">🏛️</div><p>No museums match your search.</p></div>`;
  return countryKeys.map(country => {
    const allPs   = Object.values(countries[country]).flatMap(c => Object.values(c).flat());
    const checked = checkedCount(allPs.map(p => p.id));
    const total   = allPs.length;
    const isOpen  = S.expandedContinents.has(country);
    const citiesHtml = Object.keys(countries[country]).sort().map(city => {
      const cityPs = Object.values(countries[country][city]).flat();
      const cc = checkedCount(cityPs.map(p => p.id));
      const ct = cityPs.length;
      return `<div class="loc-city-section">
        <div class="loc-city-header">
          <span class="loc-city-name">${esc(city)}</span>
          <span class="loc-stat">${cc}/${ct}</span>
        </div>
        ${Object.keys(countries[country][city]).sort().map(m => renderMuseumBlock(m, countries[country][city][m])).join('')}
      </div>`;
    }).join('');
    return `<div class="loc-group">
      <div class="loc-group-header${isOpen ? ' open' : ''}" onclick="toggleContinent('${esc(country)}')">
        <span class="loc-group-name">${flagFor[country] ? `${flagFor[country]} ` : ''}${esc(country)}</span>
        <span class="loc-group-stat">${checked}/${total} collected</span>
        <span class="loc-chevron">${ICONS.chevron}</span>
      </div>
      ${isOpen ? `<div class="loc-group-body">${citiesHtml}</div>` : ''}
    </div>`;
  }).join('');
}

function renderMuseumsContinent() {
  const tree = {};
  scopedPaintings().forEach(p => {
    const { continent, country, city, museum } = p.location;
    if (!tree[continent]) tree[continent] = {};
    if (!tree[continent][country]) tree[continent][country] = {};
    if (!tree[continent][country][city]) tree[continent][country][city] = {};
    if (!tree[continent][country][city][museum]) tree[continent][country][city][museum] = [];
    tree[continent][country][city][museum].push(p);
  });
  const flags = { Europe:'🌍', 'North America':'🌎', 'South America':'🌎', Asia:'🌏', Africa:'🌍', Oceania:'🌏' };
  const all = scopedPaintings();
  const q = S.museumsSearch.toLowerCase();
  let continentKeys = Object.keys(tree).sort();
  if (q) continentKeys = continentKeys.filter(continent => {
    if (continent.toLowerCase().includes(q)) return true;
    return Object.keys(tree[continent]).some(country => {
      if (country.toLowerCase().includes(q)) return true;
      return Object.keys(tree[continent][country]).some(city => {
        if (city.toLowerCase().includes(q)) return true;
        return Object.keys(tree[continent][country][city]).some(m => m.toLowerCase().includes(q));
      });
    });
  });
  if (!continentKeys.length) return `<div class="empty-state"><div class="empty-icon">🏛️</div><p>No museums match your search.</p></div>`;
  return continentKeys.map(continent => {
    const cOpen = S.expandedContinents.has(continent);
    const cPs   = all.filter(p => p.location.continent === continent);
    const cC    = checkedCount(cPs.map(p => p.id));
    const countriesHtml = Object.keys(tree[continent]).sort().map(country => {
      const ck     = `${continent}||${country}`;
      const koOpen = S.expandedCountries.has(ck);
      const kPs    = cPs.filter(p => p.location.country === country);
      const kC     = checkedCount(kPs.map(p => p.id));
      const citiesHtml = Object.keys(tree[continent][country]).sort().map(city =>
        `<div class="city-section">
          <div class="city-label">${esc(city)}</div>
          ${Object.keys(tree[continent][country][city]).sort().map(museum =>
            renderMuseumBlock(museum, tree[continent][country][city][museum])).join('')}
        </div>`).join('');
      return `<div class="country-section">
        <div class="country-header${koOpen?' open':''}" onclick="toggleCountry('${esc(continent)}','${esc(country)}')">
          <div class="country-name">${esc(country)}</div>
          <div class="country-stat">${kC}/${kPs.length}</div>
          <div class="country-chevron">${ICONS.chevron}</div>
        </div>
        ${koOpen ? `<div class="continent-body" style="margin:0 0 0 12px">${citiesHtml}</div>` : ''}
      </div>`;
    }).join('');
    return `<div class="location-continent">
      <div class="continent-header${cOpen?' open':''}" onclick="toggleContinent('${esc(continent)}')">
        <span class="continent-flag">${flags[continent]||'🌐'}</span>
        <div class="continent-name">${esc(continent)}</div>
        <div class="continent-stat">${cC}/${cPs.length} collected</div>
        <div class="continent-chevron">${ICONS.chevron}</div>
      </div>
      ${cOpen ? `<div class="continent-body">${countriesHtml}</div>` : ''}
    </div>`;
  }).join('');
}

/* ── Stats View ─────────────────────────────────────────────────────────── */
function renderStatsView() {
  const all      = scopedPaintings();
  const total    = all.length;
  const hasScope = S.scope === 'plus10' || S.scope === 'plus30';

  // Top 100 stats — always against the full 100, regardless of scope
  const top100All  = allPaintings().filter(p => !p.museumOnly && !p.isUser);
  const top100Done = checkedCount(top100All.map(p => p.id));
  const top100Pct  = Math.round(top100Done / 100 * 100);

  // Museum-only extras (only relevant when scope is extended)
  const extraAll  = hasScope ? all.filter(p => p.museumOnly) : [];
  const extraDone = hasScope ? checkedCount(extraAll.map(p => p.id)) : 0;
  const extraPct  = (hasScope && extraAll.length) ? Math.round(extraDone / extraAll.length * 100) : 0;

  const done = globalChecked();
  const pct  = total ? Math.round(done / total * 100) : 0;

  const museumKeys   = [...new Set(all.map(p => p.location.museum))];
  const totalMuseums = museumKeys.length;
  const visitedCount = museumKeys.filter(k => S.visitedMuseums[k]).length;
  const visitedPct   = totalMuseums ? Math.round(visitedCount / totalMuseums * 100) : 0;

  const progressLabels = { continent: 'Continent', country: 'Country', city: 'City', museum: 'Museum' };
  const by = S.statProgressBy || 'continent';

  return `
    <div class="stats-grid">
      <div class="stat-card"><div class="stat-num">${top100Done}/100</div><div class="stat-label">Top 100 Collected</div></div>
      <div class="stat-card"><div class="stat-num">${top100Pct}%</div><div class="stat-label">Top 100 Complete</div></div>
      ${hasScope ? `
      <div class="stat-card stat-card-extra"><div class="stat-num">${extraDone}/${extraAll.length}</div><div class="stat-label">Extras Collected</div></div>
      <div class="stat-card stat-card-extra"><div class="stat-num">${extraPct}%</div><div class="stat-label">Extras Complete</div></div>` : ''}
      <div class="stat-card"><div class="stat-num">${visitedCount}/${totalMuseums}</div><div class="stat-label">Museums Visited</div></div>
      <div class="stat-card"><div class="stat-num">${visitedPct}%</div><div class="stat-label">% Visited</div></div>
    </div>
    <div class="stats-progress-header">
      <span class="section-label" style="margin:0">Progress by</span>
      <button class="stats-progress-btn" onclick="openStatsProgressDropdown(event,this)">
        ${esc(progressLabels[by])} ${ICONS.chevron}
      </button>
    </div>
    ${renderStatProgressSection()}
  `;
}

function renderStatProgressSection() {
  const by = S.statProgressBy || 'continent';
  const all = scopedPaintings();
  const flagFor = { France:'🇫🇷', Italy:'🇮🇹', USA:'🇺🇸', Netherlands:'🇳🇱', Spain:'🇪🇸',
    'United Kingdom':'🇬🇧', Russia:'🇷🇺', Norway:'🇳🇴', Austria:'🇦🇹', Germany:'🇩🇪',
    'Vatican City':'🇻🇦', Mexico:'🇲🇽' };

  const groups = {};
  all.forEach(p => {
    const key = p.location[by] || '(Unknown)';
    if (!groups[key]) groups[key] = { paintings: [], country: p.location.country };
    groups[key].paintings.push(p);
  });

  return Object.entries(groups)
    .sort(([, a], [, b]) => {
      const pa = a.paintings.length ? checkedCount(a.paintings.map(p => p.id)) / a.paintings.length : 0;
      const pb = b.paintings.length ? checkedCount(b.paintings.map(p => p.id)) / b.paintings.length : 0;
      return pb - pa;
    })
    .map(([name, data]) => {
      const cc  = checkedCount(data.paintings.map(p => p.id));
      const ct  = data.paintings.length;
      const pct = ct ? Math.round(cc / ct * 100) : 0;

      let label = esc(name);
      if (by === 'country') { const f = flagFor[name]; if (f) label = `${f} ${label}`; }
      if (by === 'city')    { const f = flagFor[data.country]; if (f) label = `${f} ${label}`; }
      if (by === 'museum' && S.visitedMuseums[name]) label += ` <span class="museum-visited-check">${ICONS.check}</span>`;

      return `<div class="continent-progress">
        <div class="cp-header"><span class="cp-name">${label}</span><span class="cp-stat">${cc}/${ct} (${pct}%)</span></div>
        <div class="cp-bar"><div class="cp-fill" style="width:${pct}%"></div></div>
      </div>`;
    }).join('');
}

function openStatsProgressDropdown(e, btn) {
  e.stopPropagation();
  const wasOpen = !!document.getElementById('toolbar-drop');
  closeDrop();
  if (wasOpen) return;
  const opts = [
    { key: 'continent', label: 'Continent', icon: ICONS.globe },
    { key: 'country',   label: 'Country',   icon: ICONS.pin },
    { key: 'city',      label: 'City',      icon: ICONS.landmark },
    { key: 'museum',    label: 'Museum',    icon: ICONS.museum },
  ];
  const rect = btn.getBoundingClientRect();
  const drop = document.createElement('div');
  drop.className = 'toolbar-drop';
  drop.id = 'toolbar-drop';
  drop.style.cssText = `top:${rect.bottom + 6}px;right:${window.innerWidth - rect.right}px`;
  drop.innerHTML = opts.map(o =>
    `<button class="drop-item${S.statProgressBy === o.key ? ' active' : ''}"
             onclick="setStatProgressBy('${o.key}');closeDrop()">
       ${o.icon}<span>${o.label}</span>
     </button>`
  ).join('');
  document.body.appendChild(drop);
  document.addEventListener('click', closeDrop, { once: true });
}

function setStatProgressBy(key) {
  S.statProgressBy = key;
  save();
  render();
}

/* ── Collection View ────────────────────────────────────────────────────── */
function sortCollection(list) {
  const cs = S.collectionSort;
  if (cs === 'artist')    return [...list].sort((a, b) => a.artist.localeCompare(b.artist));
  if (cs === 'year')      return [...list].sort((a, b) => parseYear(a.year) - parseYear(b.year));
  if (cs === 'title')     return [...list].sort((a, b) => a.title.localeCompare(b.title));
  if (cs === 'museum')    return [...list].sort((a, b) => a.location.museum.localeCompare(b.location.museum) || (a.rank||9999) - (b.rank||9999));
  if (cs === 'movement')  {
    const order = typeof MOVEMENTS !== 'undefined' ? Object.keys(MOVEMENTS) : [];
    const idx = k => { const i = order.indexOf(k || ''); return i === -1 ? 9999 : i; };
    return [...list].sort((a, b) => idx(a.movement) - idx(b.movement) || (a.rank||9999) - (b.rank||9999));
  }
  if (cs === 'date') {
    return [...list].sort((a, b) => {
      const da = S.dateCollected[String(a.id)] || '';
      const db = S.dateCollected[String(b.id)] || '';
      if (da === 'unknown' && db === 'unknown') return 0;
      if (da === 'unknown') return 1;
      if (db === 'unknown') return -1;
      if (!da && !db) return 0;
      if (!da) return 1;
      if (!db) return -1;
      return db.localeCompare(da); // newest first
    });
  }
  return [...list].sort((a, b) => (a.rank || 9999) - (b.rank || 9999));
}

function renderCollectionPaintings(list, mode) {
  if (mode === 'gallery') {
    return `<div class="gallery-view">${list.map(p => {
      const key = String(p.id);
      if (!p.imageUrl) return '';
      return `<div class="gallery-frame-wrap" onclick="openDetail('${key}')">
        <div class="gallery-frame">
          <div class="gallery-mat">
            <img class="gallery-img" src="${p.imageUrl}" alt="${esc(p.title)}" loading="lazy"
                 onerror="this.closest('.gallery-frame-wrap').style.display='none'">
          </div>
        </div>
      </div>`;
    }).join('')}</div>`;
  }
  if (mode === 'condensed') return `<div class="mv-popup-paintings" style="padding:0 8px">${list.map(renderCondensedCard).join('')}</div>`;
  return mode === 'compact'
    ? `<div class="paintings-compact">${list.map(p => renderPaintingRow(p)).join('')}</div>`
    : `<div class="paintings-grid">${list.map(p => renderPaintingCard(p)).join('')}</div>`;
}

function renderCollectionView() {
  const seen    = scopedPaintings().filter(p => S.checked[String(p.id)]);
  let visible   = S.collectionFilter === 'favorites'
    ? seen.filter(p => !!S.favorites[String(p.id)])
    : seen;
  if (S.collectionSearch) {
    const q = S.collectionSearch.toLowerCase();
    visible = visible.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.artist.toLowerCase().includes(q) ||
      p.location.museum.toLowerCase().includes(q)
    );
  }

  const mode = S.collectionMode;
  const cs   = S.collectionSort;

  const toolbar = `<div id="toolbar">
    <div class="search-wrap">
      <input id="coll-search-input" type="search" placeholder="Search your collection…"
             value="${esc(S.collectionSearch)}" oninput="handleCollectionSearch(this.value)">
      <button class="search-clear" onclick="handleCollectionSearch('')" title="Clear search" ${S.collectionSearch ? '' : 'hidden'}>✕</button>
    </div>
    <button class="toolbar-btn icon-only" onclick="openCollectionSortDropdown(event,this)" title="Sort">
      ${ICONS.sort}
    </button>
    <button class="toolbar-btn icon-only" onclick="openCollectionViewDropdown(event,this)" title="View">
      ${mode === 'gallery' ? ICONS.frame : mode === 'compact' ? ICONS.rows : mode === 'condensed' ? ICONS.grid3 : ICONS.grid}
    </button>
  </div>`;
  const spacer = '<div class="toolbar-spacer"></div>';

  if (visible.length === 0) {
    let headline, subline, icon;
    if (seen.length === 0) {
      const quips = [
        'the walls have been waiting patiently.',
        'even the docents have gone home.',
        'a minimalist would call this a statement.',
        'the frame is ready — the masterpiece is not.',
        'the lighting is perfect, though.',
        'every legendary collection started somewhere.'
      ];
      const quip = quips[Math.floor(Math.random() * quips.length)];
      headline = `Your gallery is empty —<br>${quip}`;
      subline  = 'Add a painting to start<br>building your collection.';
      icon     = ICONS.frame;
    } else if (S.collectionFilter === 'favorites' && !S.collectionSearch) {
      headline = 'No favorites yet.';
      subline  = 'Open a painting and tap the heart to favorite it.';
      icon     = ICONS.heart;
    } else if (S.collectionSearch) {
      headline = 'No results.';
      subline  = `No paintings match "${esc(S.collectionSearch)}".`;
      icon     = ICONS.frame;
    } else {
      headline = 'Nothing here.';
      subline  = '';
      icon     = ICONS.frame;
    }
    return toolbar + spacer + `<div class="empty-state">
      <div class="empty-icon">${icon}</div>
      <p>${headline}</p>
      <p style="font-size:.8rem;color:var(--text-faint);margin-top:8px">${subline}</p>
    </div>`;
  }

  const sorted = sortCollection(visible);

  // Grouped rendering for artist/museum/movement
  if (cs === 'museum' && mode !== 'gallery') {
    const museumOrder = [...new Set(sorted.map(p => p.location.museum))];
    const groups = {};
    sorted.forEach(p => { const m = p.location.museum; if (!groups[m]) groups[m] = []; groups[m].push(p); });
    const flagFor = { France:'🇫🇷', Italy:'🇮🇹', USA:'🇺🇸', Netherlands:'🇳🇱', Spain:'🇪🇸',
      'United Kingdom':'🇬🇧', Russia:'🇷🇺', Norway:'🇳🇴', Austria:'🇦🇹', Germany:'🇩🇪',
      'Vatican City':'🇻🇦', Mexico:'🇲🇽' };
    const groupsHtml = museumOrder.map(museum => {
      const mps = groups[museum];
      const loc = mps[0].location;
      const flag = flagFor[loc.country] || '';
      const isOpen = S.expandedCollMuseums.has(museum);
      return `<div class="list-movement-group${isOpen ? ' open' : ''}">
        <div class="list-movement-header" onclick="toggleCollMuseumGroup('${museum.replace(/'/g, "\\'")}')">
          <div class="list-movement-chevron">${ICONS.chevron}</div>
          <span class="list-movement-name">${esc(museum)}</span>
          <span class="list-movement-era">${flag} ${esc(loc.city)}, ${esc(loc.country)}</span>
          <span class="list-movement-stat">${mps.length} painting${mps.length !== 1 ? 's' : ''}</span>
        </div>
        ${isOpen ? (mode === 'condensed'
          ? `<div class="mv-popup-paintings" style="padding:4px 8px 8px">${mps.map(renderCondensedCard).join('')}</div>`
          : mode === 'compact'
            ? `<div class="paintings-compact" style="padding:0">${mps.map(p => renderPaintingRow(p)).join('')}</div>`
            : `<div class="paintings-grid" style="padding:4px 0 8px">${mps.map(p => renderPaintingCard(p)).join('')}</div>`)
        : ''}
      </div>`;
    }).join('');
    return toolbar + spacer + `<div class="list-movement-groups">${groupsHtml}</div>`;
  }

  if (cs === 'artist' && mode !== 'gallery') {
    const artistOrder = [...new Set(sorted.map(p => p.artist))];
    const groups = {};
    sorted.forEach(p => { const a = p.artist; if (!groups[a]) groups[a] = []; groups[a].push(p); });
    const groupsHtml = artistOrder.map(artist => {
      const mps = groups[artist];
      const info = typeof ARTISTS !== 'undefined' ? ARTISTS[artist] : null;
      const metaLine = info ? [esc(info.nationality), `${esc(info.born)}–${esc(info.died)}`].filter(Boolean).join(' · ') : '';
      const isOpen = S.expandedCollArtists.has(artist);
      return `<div class="list-movement-group${isOpen ? ' open' : ''}">
        <div class="list-movement-header" onclick="toggleCollArtistGroup('${artist.replace(/'/g, "\\'")}')">
          <div class="list-movement-chevron">${ICONS.chevron}</div>
          <span class="list-movement-name">${esc(artist)}</span>
          ${metaLine ? `<span class="list-movement-era">${metaLine}</span>` : ''}
          <span class="list-movement-stat">${mps.length} painting${mps.length !== 1 ? 's' : ''}</span>
        </div>
        ${isOpen ? (mode === 'condensed'
          ? `<div class="mv-popup-paintings" style="padding:4px 8px 8px">${mps.map(renderCondensedCard).join('')}</div>`
          : mode === 'compact'
            ? `<div class="paintings-compact" style="padding:0">${mps.map(p => renderPaintingRow(p)).join('')}</div>`
            : `<div class="paintings-grid" style="padding:4px 0 8px">${mps.map(p => renderPaintingCard(p)).join('')}</div>`)
        : ''}
      </div>`;
    }).join('');
    return toolbar + spacer + `<div class="list-movement-groups">${groupsHtml}</div>`;
  }

  if (cs === 'movement' && mode !== 'gallery') {
    const movOrder = typeof MOVEMENTS !== 'undefined' ? Object.keys(MOVEMENTS) : [];
    const presentKeys = [...new Set(sorted.map(p => p.movement || '(Unknown)'))];
    const orderedKeys = [...movOrder.filter(k => presentKeys.includes(k)), ...presentKeys.filter(k => !movOrder.includes(k))];
    const groups = {};
    sorted.forEach(p => { const k = p.movement || '(Unknown)'; if (!groups[k]) groups[k] = []; groups[k].push(p); });
    const groupsHtml = orderedKeys.map(mvKey => {
      const mps = groups[mvKey] || [];
      const mv  = typeof MOVEMENTS !== 'undefined' ? MOVEMENTS[mvKey] : null;
      const isOpen = S.expandedCollMovements.has(mvKey);
      return `<div class="list-movement-group${isOpen ? ' open' : ''}">
        <div class="list-movement-header" onclick="toggleCollMovementGroup('${mvKey.replace(/'/g, "\\'")}')">
          <div class="list-movement-chevron">${ICONS.chevron}</div>
          <span class="list-movement-name">${esc(mvKey)}</span>
          ${mv ? `<span class="list-movement-era">${esc(mv.era)}</span>` : ''}
          <span class="list-movement-stat">${mps.length} painting${mps.length !== 1 ? 's' : ''}</span>
        </div>
        ${isOpen ? (mode === 'condensed'
          ? `<div class="mv-popup-paintings" style="padding:4px 8px 8px">${mps.map(renderCondensedCard).join('')}</div>`
          : mode === 'compact'
            ? `<div class="paintings-compact" style="padding:0">${mps.map(p => renderPaintingRow(p)).join('')}</div>`
            : `<div class="paintings-grid" style="padding:4px 0 8px">${mps.map(p => renderPaintingCard(p)).join('')}</div>`)
        : ''}
      </div>`;
    }).join('');
    return toolbar + spacer + `<div class="list-movement-groups">${groupsHtml}</div>`;
  }

  return toolbar + spacer + renderCollectionPaintings(sorted, mode);
}

function setCollectionMode(mode) {
  S.collectionMode = mode;
  save();
  render();
}

function setCollectionSort(key) {
  S.collectionSort = key;
  save();
  render();
}

function toggleCollMuseumGroup(name) {
  if (S.expandedCollMuseums.has(name)) S.expandedCollMuseums.delete(name);
  else S.expandedCollMuseums.add(name);
  render();
}

function toggleCollArtistGroup(name) {
  if (S.expandedCollArtists.has(name)) S.expandedCollArtists.delete(name);
  else S.expandedCollArtists.add(name);
  render();
}

function toggleCollMovementGroup(name) {
  if (S.expandedCollMovements.has(name)) S.expandedCollMovements.delete(name);
  else S.expandedCollMovements.add(name);
  render();
}

/* ── Main Render ────────────────────────────────────────────────────────── */
function render() {
  try {
    const main     = document.getElementById('main');
    const checked  = globalChecked();
    const total    = globalTotal();
    const checkedEl = document.getElementById('counter-checked');
    const totalEl   = document.getElementById('counter-total');
    const barEl     = document.getElementById('global-progress-bar');
    if (checkedEl) checkedEl.textContent = checked;
    if (totalEl)   totalEl.textContent   = '/ ' + total;
    if (barEl)     barEl.style.width     = (total ? checked / total * 100 : 0) + '%';
    const activeNavView = S.view === 'museum-detail' ? 'museums' : S.view;
    document.querySelectorAll('.nav-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.view === activeNavView);
    });
    const settingsBtn = document.getElementById('settings-btn');
    if (settingsBtn) settingsBtn.classList.toggle('active', S.view === 'settings');
    const counterEl = document.getElementById('global-counter');
    if (counterEl) counterEl.classList.toggle('active', S.view === 'stats');
    if (S.view === 'list')            main.innerHTML = renderListView();
    else if (S.view === 'museums')    main.innerHTML = renderMuseumsView();
    else if (S.view === 'collection') main.innerHTML = renderCollectionView();
    else if (S.view === 'stats')      main.innerHTML = renderStatsView();
    else if (S.view === 'settings')      main.innerHTML = renderSettingsView();
    else if (S.view === 'museum-detail') main.innerHTML = renderMuseumDetailView();
    // stats, settings, museum-detail are not in the bottom nav tabs directly
  } catch (err) {
    console.error('Beheld render error:', err);
    const main = document.getElementById('main');
    if (main) main.innerHTML =
      `<div class="empty-state"><div class="empty-icon">⚠️</div><p>Error: ${err.message}</p></div>`;
  }
}

/* ── Detail Modal ───────────────────────────────────────────────────────── */
function openDetail(id, { refresh = false } = {}) {
  const key = String(id);
  const p   = allPaintings().find(p => String(p.id) === key);
  if (!p) return;

  if (refresh) {
    const existing = document.getElementById('detail-overlay');
    if (existing) existing.remove();
  } else {
    _navOpen();
  }

  const isChecked  = !!S.checked[key];
  const isFav      = !!S.favorites[key];
  const photos     = S.photos[key] || [];
  const note       = S.notes[key] || '';

  const imgHtml = p.imageUrl
    ? `<img class="detail-img" src="${p.imageUrl}" alt="${esc(p.title)}"
           onerror="this.parentElement.innerHTML='<div class=detail-img-placeholder>🎨</div>'">`
    : `<div class="detail-img-placeholder">🎨</div>`;

  const photoGridHtml = photos.length
    ? `<div class="photo-grid">${photos.map((src, i) =>
        `<div class="photo-thumb-wrap">
           <img src="${src}" alt="Your photo" onclick="openPhotoLightbox('${key}',${i})">
           <button class="photo-delete" onclick="deletePhoto('${key}',${i})">✕</button>
         </div>`).join('')}</div>`
    : '';

  const overlay = document.createElement('div');
  overlay.className = 'detail-overlay';
  overlay.id        = 'detail-overlay';
  overlay.dataset.paintingId = key;

  overlay.innerHTML = `
    <div class="detail-sheet" id="detail-sheet">
      <div class="detail-nav">
        <button class="detail-back-btn" onclick="navBack()">${ICONS.back} Back</button>
        <button class="detail-favorite-btn${isChecked ? ' visible' : ''}${isFav ? ' favorited' : ''}" id="detail-favorite-btn"
                onclick="toggleFavorite('${key}')">
          ${isFav ? ICONS.heartFill : ICONS.heart}<span class="detail-btn-label">${isFav ? 'Favorited' : 'Favorite'}</span>
        </button>
        <button class="detail-collected-btn${isChecked ? ' checked' : ''}" id="detail-collected-btn"
                onclick="detailToggleCheck('${key}')">
          ${isChecked ? ICONS.check + '<span class="detail-btn-label">Collected</span>' : '<span class="detail-btn-label">Collect</span>'}
        </button>
      </div>

      <div class="detail-img-wrap">${imgHtml}</div>

      <div class="detail-body">
        <div class="detail-top-row">
          ${p.rank != null && p.rank <= 100 ? `<span class="detail-rank-badge">#${p.rank} of 100</span>` : ''}
          ${p.isUser ? '<span class="user-badge">added</span>' : ''}
        </div>

        <h2 class="detail-title">${esc(p.title)}</h2>
        <p class="detail-artist-line">
          <button class="detail-link-btn" onclick="openArtistPopup('${p.artist.replace(/'/g, "\\'")}')">
            ${esc(p.artist)}
          </button>
          <span class="detail-year">· ${esc(p.year)}</span>
        </p>

        <div class="detail-location-box" onclick="openMuseumPopup('${p.location.museum.replace(/'/g, "\\'")}')">
          <div class="detail-loc-icon">${ICONS.pin}</div>
          <div>
            <div class="detail-museum">${esc(p.location.museum)}</div>
            <div class="detail-city">${esc(p.location.city)}, ${esc(p.location.country)}</div>
          </div>
          <div class="detail-loc-chevron">${ICONS.chevron}</div>
        </div>

        ${(p.medium || p.dimensions || p.movement || p.wikiUrl || p.grokUrl) ? `<div class="detail-specs">
          ${p.medium     ? `<div class="detail-spec-item"><span>Medium</span><span>${esc(p.medium)}</span></div>` : ''}
          ${p.dimensions ? `<div class="detail-spec-item"><span>Size</span><span>${esc(formatDimensions(p.dimensions))}</span></div>` : ''}
          ${p.movement   ? `<div class="detail-spec-item detail-spec-movement" onclick="openMovementPopup('${p.movement}')"><span>Movement</span><span class="movement-tag">${esc(p.movement)} ${ICONS.info}</span></div>` : ''}
          ${(p.wikiUrl || p.grokUrl) ? `<div class="detail-spec-item detail-spec-moreinfo">
            <span>More Info</span>
            <div class="moreinfo-links">
              ${p.wikiUrl
                ? `<a href="${p.wikiUrl}" target="_blank" rel="noopener" class="moreinfo-link" title="Wikipedia">${ICONS.wikipedia}</a>`
                : `<span class="moreinfo-link moreinfo-link-disabled" title="No Wikipedia article">${ICONS.wikipedia}</span>`}
              ${p.grokUrl
                ? `<a href="${p.grokUrl}" target="_blank" rel="noopener" class="moreinfo-link" title="Grokipedia">${ICONS.grokipedia}</a>`
                : `<span class="moreinfo-link moreinfo-link-disabled" title="No Grokipedia article">${ICONS.grokipedia}</span>`}
            </div>
          </div>` : ''}
        </div>` : ''}

        ${p.description ? `<p class="detail-description">${esc(p.description)}</p>` : ''}

        <div class="detail-user-section">
          <div class="detail-photos-section">
            ${photoGridHtml}
            <label style="cursor:pointer;display:block">
              <input type="file" accept="image/*" class="hidden"
                     onchange="handlePhotoUpload(event,'${key}')">
              <div class="add-photo-btn">${ICONS.camera} Add photo</div>
            </label>
          </div>

          <div class="detail-note-section">
            <textarea class="detail-note-input" placeholder="Add a note about this painting"
                      oninput="saveNote('${key}', this.value)"
                      onblur="saveNote('${key}', this.value)">${esc(note)}</textarea>
          </div>

          <div class="detail-date-section${isChecked ? '' : ' hidden'}">
            <div class="detail-section-label">Date collected</div>
            <div class="detail-date-row">
              <div class="detail-date-wrap${S.dateCollected[key] === 'unknown' ? ' is-unknown' : ''}">
                <input type="date" class="detail-date-input" id="detail-date-input"
                       value="${S.dateCollected[key] && S.dateCollected[key] !== 'unknown' ? S.dateCollected[key] : ''}"
                       ${S.dateCollected[key] === 'unknown' ? 'disabled' : ''}
                       onchange="saveDateCollected('${key}', this.value)">
                <span class="detail-date-placeholder">— —</span>
              </div>
              <button class="detail-date-unknown${S.dateCollected[key] === 'unknown' ? ' active' : ''}"
                      onclick="toggleDateUnknown('${key}')">Unknown</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  overlay.addEventListener('click', e => { if (e.target === overlay) navDismissAll(); });
  document.body.appendChild(overlay);
  addSwipeDismiss(overlay);

  if (isChecked) {
    setTimeout(() => {
      if (!S.checked[key]) return;
      const lbl = overlay.querySelector('#detail-collected-btn .detail-btn-label');
      if (lbl) lbl.classList.add('hidden');
    }, 2500);
  }
  if (isFav) {
    setTimeout(() => {
      if (!S.favorites[key]) return;
      const lbl = overlay.querySelector('#detail-favorite-btn .detail-btn-label');
      if (lbl) lbl.classList.add('hidden');
    }, 2500);
  }
}

function closeDetail() { navDismissAll(); }

function detailToggleCheck(id) {
  const key = String(id);
  const wasChecked = !!S.checked[key];
  S.checked[key] = !wasChecked;
  if (!S.checked[key]) {
    delete S.checked[key];
  } else if (!S.dateCollected[key]) {
    S.dateCollected[key] = todayISO();
  }
  save();
  _patchCheckState(key);

  const isChecked = !!S.checked[key];
  const btn = document.getElementById('detail-collected-btn');
  if (btn) {
    btn.className = 'detail-collected-btn' + (isChecked ? ' checked' : '');
    if (isChecked) {
      btn.innerHTML = ICONS.check + '<span class="detail-btn-label">Collected</span>';
      setTimeout(() => {
        if (!S.checked[key]) return;
        const lbl = btn.querySelector('.detail-btn-label');
        if (lbl) lbl.classList.add('hidden');
      }, 2500);
    } else {
      // Let the gold→grey transition play before swapping content
      setTimeout(() => {
        if (S.checked[key]) return;
        btn.innerHTML = '<span class="detail-btn-label">Collect</span>';
      }, 200);
    }
  }
  const favBtn = document.getElementById('detail-favorite-btn');
  if (favBtn) {
    const isFav = !!S.favorites[key];
    favBtn.className = 'detail-favorite-btn' + (isChecked ? ' visible' : '') + (isFav ? ' favorited' : '');
    // Don't rewrite innerHTML while the button is fading out — avoids flash
    if (isChecked) {
      favBtn.innerHTML = `${isFav ? ICONS.heartFill : ICONS.heart}<span class="detail-btn-label">${isFav ? 'Favorited' : 'Favorite'}</span>`;
    }
  }
  const dateSection = document.querySelector('.detail-date-section');
  if (dateSection) dateSection.classList.toggle('hidden', !isChecked);
  const dateInput = document.getElementById('detail-date-input');
  if (dateInput && isChecked && S.dateCollected[key] && S.dateCollected[key] !== 'unknown') {
    dateInput.value = S.dateCollected[key];
  }
}

function toggleFavorite(id) {
  const key = String(id);
  if (!S.checked[key]) return;
  if (S.favorites[key]) {
    delete S.favorites[key];
  } else {
    S.favorites[key] = true;
  }
  save();
  _patchCheckState(key);
  const isFav = !!S.favorites[key];
  const favBtn = document.getElementById('detail-favorite-btn');
  if (favBtn) {
    favBtn.className = 'detail-favorite-btn visible' + (isFav ? ' favorited' : '');
    if (isFav) {
      favBtn.innerHTML = `${ICONS.heartFill}<span class="detail-btn-label">Favorited</span>`;
      setTimeout(() => {
        if (!S.favorites[key]) return;
        const lbl = favBtn.querySelector('.detail-btn-label');
        if (lbl) lbl.classList.add('hidden');
      }, 2500);
    } else {
      // Let the red→grey color transition play before swapping the icon
      setTimeout(() => {
        if (S.favorites[key]) return;
        favBtn.innerHTML = `${ICONS.heart}<span class="detail-btn-label">Favorite</span>`;
      }, 150);
    }
  }
}

/* ── Inline check toggle (from list row, doesn't open modal) ─────────────── */
function rowToggleCheck(e, id) {
  e.stopPropagation();
  const key = String(id);
  const wasChecked = !!S.checked[key];
  S.checked[key] = !wasChecked;
  if (!S.checked[key]) {
    delete S.checked[key];
  } else if (!S.dateCollected[key]) {
    S.dateCollected[key] = todayISO();
  }
  save();
  _patchCheckState(key);
}

function _patchCheckState(key) {
  const isChecked = !!S.checked[key];

  // Update header counter without re-rendering main
  const checked = globalChecked();
  const total   = globalTotal();
  const checkedEl = document.getElementById('counter-checked');
  const totalEl   = document.getElementById('counter-total');
  const barEl     = document.getElementById('global-progress-bar');
  if (checkedEl) checkedEl.textContent = checked;
  if (totalEl)   totalEl.textContent   = '/ ' + total;
  if (barEl)     barEl.style.width     = (total ? checked / total * 100 : 0) + '%';

  // Patch every visible card/row for this painting in-place
  document.querySelectorAll(`[data-pid="${key}"]`).forEach(card => {
    if (card.classList.contains('painting-card') || card.classList.contains('painting-row')) {
      card.classList.toggle('checked', isChecked);
    } else if (card.classList.contains('mv-popup-painting')) {
      card.classList.toggle('condensed-checked', isChecked);
    }
    const badge = card.querySelector('.card-collected-badge');
    if (badge) {
      badge.classList.toggle('checked', isChecked);
      badge.innerHTML = isChecked ? ICONS.check : '';
    }
    const rowCheck = card.querySelector('.row-check');
    if (rowCheck) {
      rowCheck.classList.toggle('checked', isChecked);
      rowCheck.innerHTML = isChecked ? ICONS.check : '';
    }
  });
}

/* ── Photo handling ──────────────────────────────────────────────────────── */
function _compressPhoto(dataUrl, callback) {
  const img = new Image();
  img.onload = () => {
    const MAX = 1200;
    let { width, height } = img;
    if (width > MAX || height > MAX) {
      const ratio = Math.min(MAX / width, MAX / height);
      width  = Math.round(width  * ratio);
      height = Math.round(height * ratio);
    }
    const canvas = document.createElement('canvas');
    canvas.width  = width;
    canvas.height = height;
    canvas.getContext('2d').drawImage(img, 0, 0, width, height);
    callback(canvas.toDataURL('image/jpeg', 0.75));
  };
  img.src = dataUrl;
}

function handlePhotoUpload(e, id) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    _compressPhoto(ev.target.result, compressed => {
      const key = String(id);
      if (!S.photos[key]) S.photos[key] = [];
      S.photos[key].push(compressed);
      if (!S.checked[key]) {
        S.checked[key] = true;
        if (!S.dateCollected[key]) S.dateCollected[key] = todayISO();
      }
      save();
      _idbPut(key, S.photos[key]).catch(() => {});
      render();
      const overlay = document.getElementById('detail-overlay');
      if (overlay && overlay.dataset.paintingId === key) {
        openDetail(id, { refresh: true });
      }
    });
  };
  reader.readAsDataURL(file);
}

function deletePhoto(id, index) {
  const key = String(id);
  if (S.photos[key]) {
    S.photos[key].splice(index, 1);
    if (!S.photos[key].length) {
      delete S.photos[key];
      _idbDelete(key).catch(() => {});
    } else {
      _idbPut(key, S.photos[key]).catch(() => {});
    }
    save();
    render();
    const overlay = document.getElementById('detail-overlay');
    if (overlay && overlay.dataset.paintingId === key) openDetail(id, { refresh: true });
  }
}

function saveDateCollected(id, value) {
  const key = String(id);
  if (value) S.dateCollected[key] = value;
  else delete S.dateCollected[key];
  save();
}

function toggleDateUnknown(id) {
  const key = String(id);
  const isUnknown = S.dateCollected[key] === 'unknown';
  if (isUnknown) {
    // Revert: restore the last real date we remembered, or fall back to today
    S.dateCollected[key] = _prevDateCollected[key] || todayISO();
    delete _prevDateCollected[key];
  } else {
    // Going to Unknown: stash the current real date so we can restore it
    if (S.dateCollected[key] && S.dateCollected[key] !== 'unknown') {
      _prevDateCollected[key] = S.dateCollected[key];
    }
    S.dateCollected[key] = 'unknown';
  }
  save();
  const input = document.getElementById('detail-date-input');
  if (input) {
    input.value = isUnknown ? S.dateCollected[key] : '';
    input.disabled = !isUnknown;
    const wrap = input.closest('.detail-date-wrap');
    if (wrap) wrap.classList.toggle('is-unknown', !isUnknown);
    const btn = wrap && wrap.closest('.detail-date-row') && wrap.closest('.detail-date-row').querySelector('.detail-date-unknown');
    if (btn) btn.classList.toggle('active', !isUnknown);
  }
}

function saveNote(id, text) {
  const key = String(id);
  if (text.trim()) {
    S.notes[key] = text;
  } else {
    delete S.notes[key];
  }
  save();
}

function openPhotoLightbox(id, index) {
  const photos = S.photos[String(id)] || [];
  if (!photos[index]) return;
  const lb = document.createElement('div');
  lb.className = 'photo-lightbox';
  lb.innerHTML = `<img src="${photos[index]}" alt="Photo">
    <button class="photo-lightbox-close" onclick="this.parentElement.remove()">✕</button>`;
  lb.addEventListener('click', e => { if (e.target === lb) lb.remove(); });
  document.body.appendChild(lb);
}

/* ── Nav / View switching ────────────────────────────────────────────────── */
function setView(v) {
  // Save scroll for the view we're leaving
  if (_tabScroll.hasOwnProperty(S.view)) _tabScroll[S.view] = window.scrollY;

  // If leaving museum-detail via a tab switch (not the Back button), save state to restore later
  if (S.view === 'museum-detail' && v !== 'museums') {
    _museumsDetailState = { activeMuseum: S.activeMuseum, museumSearch: S.museumSearch };
  }

  navDismissAll();

  // Switching to museums tab: restore museum-detail if the user was there
  if (v === 'museums' && _museumsDetailState) {
    S.activeMuseum  = _museumsDetailState.activeMuseum;
    S.museumSearch  = _museumsDetailState.museumSearch;
    S.view = 'museum-detail';
    _museumsDetailState = null;
  } else {
    S.view = v;
  }

  save();
  render();

  const savedScroll = _tabScroll[S.view] || 0;
  if (savedScroll) requestAnimationFrame(() => window.scrollTo(0, savedScroll));
  else window.scrollTo(0, 0);
}

function handleSearch(val) {
  S.search = val;
  render();
  const input = document.getElementById('search-input');
  if (input) {
    input.focus();
    input.setSelectionRange(val.length, val.length);
  }
}

function setListMode(key) {
  S.listMode = key;
  save();
  render();
}

function setSort(key) {
  S.sort = key;
  save();
  render();
}

function setMuseumsMode(mode) {
  S.museumsMode = mode;
  save();
  render();
}

/* ── Toolbar dropdowns ───────────────────────────────────────────────────── */
function openSortDropdown(e, btn) {
  e.stopPropagation();
  const wasOpen = !!document.getElementById('toolbar-drop');
  closeDrop();
  if (wasOpen) return;
  const opts = [
    { key: 'rank',     label: 'Rank',     icon: ICONS.hash },
    { key: 'artist',   label: 'Artist',   icon: ICONS.brush },
    { key: 'year',     label: 'Year',     icon: ICONS.calendar },
    { key: 'title',    label: 'Title',    icon: ICONS.type },
    { key: 'museum',   label: 'Museum',   icon: ICONS.museum },
    { key: 'movement', label: 'Movement', icon: ICONS.palette },
  ];
  const grouped = ['artist', 'museum', 'movement'];
  const isGrouped = grouped.includes(S.sort);
  const rect = btn.getBoundingClientRect();
  const drop = document.createElement('div');
  drop.className = 'toolbar-drop';
  drop.id = 'toolbar-drop';
  drop.style.cssText = `top:${rect.bottom + 6}px;right:${window.innerWidth - rect.right}px`;
  drop.innerHTML =
    opts.map(o =>
      `<button class="drop-item${S.sort === o.key ? ' active' : ''}"
               onclick="setSort('${o.key}');closeDrop()">
         ${o.icon}<span>${o.label}</span>
       </button>`
    ).join('') +
    (isGrouped ? `<div class="drop-divider"></div>
      <button class="drop-item" onclick="listExpandAll();closeDrop()">${ICONS.expandAll} Expand All</button>
      <button class="drop-item" onclick="listCollapseAll();closeDrop()">${ICONS.collapseAll} Collapse All</button>` : '');
  document.body.appendChild(drop);
  document.addEventListener('click', closeDrop, { once: true });
}

function listExpandAll() {
  const paintings = filteredSorted();
  if (S.sort === 'museum') {
    paintings.forEach(p => S.expandedListMuseums.add(p.location.museum));
  } else if (S.sort === 'artist') {
    paintings.forEach(p => S.expandedListArtists.add(p.artist));
  } else if (S.sort === 'movement') {
    paintings.forEach(p => S.expandedMovements.add(p.movement || '(Unknown)'));
  }
  render();
}

function listCollapseAll() {
  if (S.sort === 'museum') S.expandedListMuseums.clear();
  else if (S.sort === 'artist') S.expandedListArtists.clear();
  else if (S.sort === 'movement') S.expandedMovements.clear();
  render();
}

function openViewDropdown(e, btn) {
  e.stopPropagation();
  const wasOpen = !!document.getElementById('toolbar-drop');
  closeDrop();
  if (wasOpen) return;
  const opts = [
    { key: 'grid',      label: 'Grid 2×2', icon: ICONS.grid },
    { key: 'condensed', label: 'Grid 3×3', icon: ICONS.grid3 },
    { key: 'compact',   label: 'List',      icon: ICONS.rows },
  ];
  const rect = btn.getBoundingClientRect();
  const drop = document.createElement('div');
  drop.className = 'toolbar-drop';
  drop.id = 'toolbar-drop';
  drop.style.cssText = `top:${rect.bottom + 6}px;right:${window.innerWidth - rect.right}px`;
  drop.innerHTML = opts.map(o =>
    `<button class="drop-item${S.listMode === o.key ? ' active' : ''}"
             onclick="setListMode('${o.key}');closeDrop()">
       ${o.icon} ${o.label}
     </button>`
  ).join('');
  document.body.appendChild(drop);
  document.addEventListener('click', closeDrop, { once: true });
}

function openMuseumsViewDropdown(e, btn) {
  e.stopPropagation();
  const wasOpen = !!document.getElementById('toolbar-drop');
  closeDrop();
  if (wasOpen) return;
  const hasVisited = Object.keys(S.visitedMuseums).length > 0;
  const opts = [
    { key: 'alpha',   label: 'By Museum',  icon: ICONS.landmark },
    ...(hasVisited ? [{ key: 'visited', label: 'By Visited', icon: ICONS.check }] : []),
    { key: 'city',    label: 'By City',    icon: ICONS.pin },
    { key: 'country', label: 'By Country', icon: ICONS.globe },
  ];
  const rect = btn.getBoundingClientRect();
  const drop = document.createElement('div');
  drop.className = 'toolbar-drop';
  drop.id = 'toolbar-drop';
  drop.style.cssText = `top:${rect.bottom + 6}px;right:${window.innerWidth - rect.right}px`;
  drop.innerHTML =
    opts.map(o =>
      `<button class="drop-item${S.museumsMode === o.key ? ' active' : ''}"
               onclick="setMuseumsMode('${o.key}');closeDrop()">
         ${o.icon}<span>${o.label}</span>
       </button>`
    ).join('') +
    (S.museumsMode === 'country' ? `<div class="drop-divider"></div>
      <button class="drop-item" onclick="museumsExpandAll();closeDrop()">${ICONS.expandAll} Expand All</button>
      <button class="drop-item" onclick="museumsCollapseAll();closeDrop()">${ICONS.collapseAll} Collapse All</button>` : '');
  document.body.appendChild(drop);
  document.addEventListener('click', closeDrop, { once: true });
}

function museumsExpandAll() {
  const countries = [...new Set(scopedPaintings().map(p => p.location.country))];
  countries.forEach(c => S.expandedContinents.add(c));
  render();
}

function museumsCollapseAll() {
  S.expandedContinents.clear();
  render();
}

function openMuseumsDetailModeDropdown(e, btn) {
  e.stopPropagation();
  const wasOpen = !!document.getElementById('toolbar-drop');
  closeDrop();
  if (wasOpen) return;
  const opts = [
    { key: 'grid',      label: 'Grid 2×2', icon: ICONS.grid },
    { key: 'condensed', label: 'Grid 3×3', icon: ICONS.grid3 },
    { key: 'list',      label: 'List',      icon: ICONS.rows },
  ];
  const rect = btn.getBoundingClientRect();
  const drop = document.createElement('div');
  drop.className = 'toolbar-drop';
  drop.id = 'toolbar-drop';
  drop.style.cssText = `top:${rect.bottom + 6}px;right:${window.innerWidth - rect.right}px`;
  drop.innerHTML = opts.map(o =>
    `<button class="drop-item${S.museumsDetailMode === o.key ? ' active' : ''}"
             onclick="setMuseumsDetailMode('${o.key}');closeDrop()">
       ${o.icon}<span>${o.label}</span>
     </button>`
  ).join('');
  document.body.appendChild(drop);
  document.addEventListener('click', closeDrop, { once: true });
}

function setMuseumsDetailMode(key) {
  S.museumsDetailMode = key;
  save();
  render();
}

function closeDrop() {
  const d = document.getElementById('toolbar-drop');
  if (d) d.remove();
}

function openCollectionSortDropdown(e, btn) {
  e.stopPropagation();
  const wasOpen = !!document.getElementById('toolbar-drop');
  closeDrop();
  if (wasOpen) return;
  const opts = [
    { key: 'rank',     label: 'Rank',      icon: ICONS.hash },
    { key: 'artist',   label: 'Artist',    icon: ICONS.brush },
    { key: 'year',     label: 'Year',      icon: ICONS.calendar },
    { key: 'title',    label: 'Title',     icon: ICONS.type },
    { key: 'museum',   label: 'Museum',    icon: ICONS.museum },
    { key: 'movement', label: 'Movement',  icon: ICONS.palette },
    { key: 'date',     label: 'Date Collected', icon: ICONS.calendar },
  ];
  const grouped = ['artist', 'museum', 'movement'];
  const isGrouped = grouped.includes(S.collectionSort) && S.collectionMode !== 'gallery';
  const rect = btn.getBoundingClientRect();
  const drop = document.createElement('div');
  drop.className = 'toolbar-drop';
  drop.id = 'toolbar-drop';
  drop.style.cssText = `top:${rect.bottom + 6}px;right:${window.innerWidth - rect.right}px`;
  drop.innerHTML =
    opts.map(o =>
      `<button class="drop-item${S.collectionSort === o.key ? ' active' : ''}"
               onclick="setCollectionSort('${o.key}');closeDrop()">
         ${o.icon}<span>${o.label}</span>
       </button>`
    ).join('') +
    (isGrouped ? `<div class="drop-divider"></div>
      <button class="drop-item" onclick="collExpandAll();closeDrop()">${ICONS.expandAll} Expand All</button>
      <button class="drop-item" onclick="collCollapseAll();closeDrop()">${ICONS.collapseAll} Collapse All</button>` : '');
  document.body.appendChild(drop);
  document.addEventListener('click', closeDrop, { once: true });
}

function collExpandAll() {
  const seen = scopedPaintings().filter(p => S.checked[String(p.id)]);
  const visible = S.collectionFilter === 'favorites' ? seen.filter(p => !!S.favorites[String(p.id)]) : seen;
  if (S.collectionSort === 'museum') {
    visible.forEach(p => S.expandedCollMuseums.add(p.location.museum));
  } else if (S.collectionSort === 'artist') {
    visible.forEach(p => S.expandedCollArtists.add(p.artist));
  } else if (S.collectionSort === 'movement') {
    visible.forEach(p => S.expandedCollMovements.add(p.movement || '(Unknown)'));
  }
  render();
}

function collCollapseAll() {
  if (S.collectionSort === 'museum') S.expandedCollMuseums.clear();
  else if (S.collectionSort === 'artist') S.expandedCollArtists.clear();
  else if (S.collectionSort === 'movement') S.expandedCollMovements.clear();
  render();
}

function openCollectionViewDropdown(e, btn) {
  e.stopPropagation();
  const wasOpen = !!document.getElementById('toolbar-drop');
  closeDrop();
  if (wasOpen) return;
  const viewOpts = [
    { key: 'gallery',   label: 'Gallery',   icon: ICONS.frame },
    { key: 'grid',      label: 'Grid 2×2', icon: ICONS.grid },
    { key: 'condensed', label: 'Grid 3×3', icon: ICONS.grid3 },
    { key: 'compact',   label: 'List',      icon: ICONS.rows },
  ];
  const filterOpts = [
    { key: 'all',       label: 'All Collected', icon: ICONS.check },
    { key: 'favorites', label: 'Favorites', icon: ICONS.heart },
  ];
  const rect = btn.getBoundingClientRect();
  const drop = document.createElement('div');
  drop.className = 'toolbar-drop';
  drop.id = 'toolbar-drop';
  drop.style.cssText = `top:${rect.bottom + 6}px;right:${window.innerWidth - rect.right}px`;
  drop.innerHTML =
    viewOpts.map(o =>
      `<button class="drop-item${S.collectionMode === o.key ? ' active' : ''}"
               onclick="setCollectionMode('${o.key}');closeDrop()">
         ${o.icon} ${o.label}
       </button>`
    ).join('') +
    `<div class="drop-divider"></div>` +
    filterOpts.map(o =>
      `<button class="drop-item${S.collectionFilter === o.key ? ' active' : ''}"
               onclick="setCollectionFilter('${o.key}');closeDrop()">
         ${o.icon} ${o.label}
       </button>`
    ).join('');
  document.body.appendChild(drop);
  document.addEventListener('click', closeDrop, { once: true });
}

function setCollectionFilter(key) {
  S.collectionFilter = key;
  save();
  render();
}

function handleCollectionSearch(val) {
  S.collectionSearch = val;
  render();
  const input = document.getElementById('coll-search-input');
  if (input) { input.focus(); input.setSelectionRange(val.length, val.length); }
}

function handleMuseumsSearch(val) {
  S.museumsSearch = val;
  render();
  const input = document.getElementById('museums-search-input');
  if (input) { input.focus(); input.setSelectionRange(val.length, val.length); }
}

function handleMuseumSearch(val) {
  S.museumSearch = val;
  render();
  const input = document.getElementById('museums-search-input');
  if (input) { input.focus(); input.setSelectionRange(val.length, val.length); }
}

function closeMuseumDetail() {
  S.museumSearch = '';
  _museumsDetailState = null; // explicit Back: don't restore detail, go to list
  setView('museums');
}

function clearFilter(level) {
  if (level === 'museum')    S.filter.museum = null;
  if (level === 'city')      { S.filter.city = null; S.filter.museum = null; }
  if (level === 'country')   { S.filter.country = null; S.filter.city = null; S.filter.museum = null; }
  if (level === 'continent') S.filter = { continent: null, country: null, city: null, museum: null };
  save();
  render();
}

function toggleMuseum(name) {
  if (S.expandedMuseums.has(name)) S.expandedMuseums.delete(name);
  else S.expandedMuseums.add(name);
  render();
}

function toggleMuseumVisited(e, name) {
  e.stopPropagation();
  if (S.visitedMuseums[name]) delete S.visitedMuseums[name];
  else S.visitedMuseums[name] = true;
  save();
  render();
}

function toggleStatsMuseum(name) {
  if (S.expandedStatsMuseums.has(name)) S.expandedStatsMuseums.delete(name);
  else S.expandedStatsMuseums.add(name);
  render();
}

function toggleContinent(name) {
  if (S.expandedContinents.has(name)) S.expandedContinents.delete(name);
  else S.expandedContinents.add(name);
  render();
}

function toggleCountry(continent, country) {
  const key = `${continent}||${country}`;
  if (S.expandedCountries.has(key)) S.expandedCountries.delete(key);
  else S.expandedCountries.add(key);
  render();
}

/* ── Add Painting Modal ──────────────────────────────────────────────────── */
function openAddPainting(museumName) {
  _apMuseum = museumName || '';
  _apAutofillMuseum = null;
  const museum = MUSEUMS[museumName] || {};
  const continents = ['Europe','North America','South America','Asia','Africa','Oceania'];
  const contOpts = continents.map(c =>
    `<option value="${c}"${museum.continent===c?' selected':''}>${c}</option>`
  ).join('');
  showModal(`
    <h2>Add Painting</h2>
    <div class="ap-search-wrap">
      <label>Search to autofill</label>
      <input id="ap-search" type="text" placeholder="Search by title or artist…"
             oninput="apSearch(this.value)" autocomplete="off">
      <div id="ap-results" class="ap-results"></div>
    </div>
    <label>Title *</label>
    <input id="ap-title" type="text" placeholder="Painting title" required>
    <label>Artist *</label>
    <input id="ap-artist" type="text" placeholder="Artist name" required>
    <label>Year</label>
    <input id="ap-year" type="text" placeholder="e.g. 1889 or c. 1500">
    <label>Description</label>
    <textarea id="ap-desc" placeholder="Brief description…"></textarea>
    <label>Museum</label>
    <input id="ap-museum" type="text" value="${esc(museumName || '')}" placeholder="Museum name">
    <label>City</label>
    <input id="ap-city" type="text" value="${esc(museum.city || '')}" placeholder="City">
    <label>Country</label>
    <input id="ap-country" type="text" value="${esc(museum.country || '')}" placeholder="Country">
    <label>Continent</label>
    <select id="ap-continent">${contOpts}</select>
    <label>Image URL (optional)</label>
    <input id="ap-img" type="url" placeholder="https://…">
    <div class="modal-actions">
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="submitAddPainting()">Add Painting</button>
    </div>
  `);
}

function apSearch(val) {
  const el = document.getElementById('ap-results');
  if (!el) return;
  const q = val.trim().toLowerCase();
  if (!q) { el.innerHTML = ''; return; }

  const all = [...PAINTINGS, ...S.userPaintings];
  const matches = all.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.artist.toLowerCase().includes(q) ||
    (p.year && String(p.year).includes(q))
  ).slice(0, 8);

  if (!matches.length) {
    el.innerHTML = '<div class="ap-no-results">No matches found</div>';
    return;
  }
  el.innerHTML = matches.map(p => {
    const atThisMuseum = _apMuseum && p.location.museum === _apMuseum;
    const badge = atThisMuseum ? '<span class="ap-museum-badge">this museum</span>' : '';
    return `<div class="ap-result" onclick="apAutofill(${JSON.stringify(p.id)})">
      <div class="ap-result-title">${esc(p.title)}${badge}</div>
      <div class="ap-result-sub">${esc(p.artist)} · ${esc(p.year || '')} · ${esc(p.location.museum)}</div>
    </div>`;
  }).join('');
}

function apAutofill(id) {
  const all = [...PAINTINGS, ...S.userPaintings];
  const p = all.find(x => x.id === id);
  if (!p) return;
  document.getElementById('ap-search').value = p.title;
  document.getElementById('ap-results').innerHTML = '';
  document.getElementById('ap-title').value  = p.title;
  document.getElementById('ap-artist').value = p.artist;
  document.getElementById('ap-year').value   = p.year || '';
  document.getElementById('ap-desc').value   = p.description || '';
  document.getElementById('ap-img').value    = p.imageUrl || '';
  document.getElementById('ap-museum').value  = p.location.museum;
  document.getElementById('ap-city').value    = p.location.city;
  document.getElementById('ap-country').value = p.location.country;
  document.getElementById('ap-continent').value = p.location.continent;
  _apAutofillMuseum = p.location.museum;
}

function submitAddPainting() {
  const title  = document.getElementById('ap-title').value.trim();
  const artist = document.getElementById('ap-artist').value.trim();
  if (!title || !artist) { alert('Title and Artist are required.'); return; }
  const museum = document.getElementById('ap-museum').value.trim() || 'Unknown';

  if (_apAutofillMuseum && _apAutofillMuseum !== museum) {
    if (!confirm(`The autofilled painting is from "${_apAutofillMuseum}", but the museum field now says "${museum}". Save anyway?`)) return;
  } else if (_apMuseum && museum !== _apMuseum) {
    if (!confirm(`This painting will be added to "${museum}", not "${_apMuseum}" where you opened this form. Continue?`)) return;
  }

  const newId = 'u_' + Date.now();
  const p = {
    id: newId, rank: 9999, title, artist,
    year: document.getElementById('ap-year').value.trim() || 'Unknown',
    description: document.getElementById('ap-desc').value.trim(),
    imageUrl: document.getElementById('ap-img').value.trim() || null,
    location: {
      museum,
      city:      document.getElementById('ap-city').value.trim()     || 'Unknown',
      country:   document.getElementById('ap-country').value.trim()  || 'Unknown',
      continent: document.getElementById('ap-continent').value,
    },
    isUser: true,
  };
  S.userPaintings.push(p);
  const key = p.location.museum;
  if (!MUSEUMS[key]) MUSEUMS[key] = { name: key, ...p.location, paintings: [] };
  MUSEUMS[key].paintings.push(p.id);
  save();
  closeModal();
  render();
}

/* ── Generic modal ───────────────────────────────────────────────────────── */
function showModal(html) {
  closeModal();
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.id        = 'modal-overlay';
  overlay.innerHTML = `<div class="modal">${html}</div>`;
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.body.appendChild(overlay);
}

function closeModal() {
  const m = document.getElementById('modal-overlay');
  if (m) m.remove();
}

/* ── Movement group toggle (sort-by-movement in Top 100) ─────────────────── */
function toggleMovementGroup(key) {
  if (S.expandedMovements.has(key)) {
    S.expandedMovements.delete(key);
  } else {
    S.expandedMovements.add(key);
  }
  render();
}

function toggleListMuseumGroup(key) {
  if (S.expandedListMuseums.has(key)) S.expandedListMuseums.delete(key);
  else S.expandedListMuseums.add(key);
  render();
}

function toggleListArtistGroup(key) {
  if (S.expandedListArtists.has(key)) S.expandedListArtists.delete(key);
  else S.expandedListArtists.add(key);
  render();
}

function openMovementPopup(movementKey) {
  if (typeof MOVEMENTS === 'undefined' || !MOVEMENTS[movementKey]) return;
  const m = MOVEMENTS[movementKey];
  const paintings = allPaintings().filter(p => p.movement === movementKey);

  const thumbs = paintings.map(p => {
    const img = p.imageUrl
      ? `<img src="${p.imageUrl}" alt="${esc(p.title)}" loading="lazy"
             onerror="this.outerHTML='<div class=row-thumb-placeholder>🎨</div>'">`
      : `<div class="row-thumb-placeholder">🎨</div>`;
    return `<div class="mv-popup-painting" onclick="openDetail('${String(p.id)}')">
      <div class="mv-popup-thumb">${img}</div>
      <div class="mv-popup-title">${esc(p.title)}</div>
      <div class="mv-popup-artist">${esc(p.artist)}</div>
    </div>`;
  }).join('');

  const traits = m.traits.map(t => `<li>${esc(t)}</li>`).join('');
  const artists = m.artists.map(a => `<span class="mv-artist-chip">${esc(a)}</span>`).join('');

  _navOpen();
  const overlay = document.createElement('div');
  overlay.className = 'detail-overlay';
  overlay.id        = 'movement-overlay';
  overlay.dataset.movementKey = movementKey;
  overlay.innerHTML = `
    <div class="detail-sheet movement-sheet" id="movement-sheet">
      <div class="detail-nav">
        <button class="detail-back-btn" onclick="navBack()">${ICONS.back} Back</button>
      </div>
      <div class="mv-popup-body">
        <div class="mv-popup-era">${esc(m.era)}</div>
        <h2 class="mv-popup-name">${esc(movementKey)}</h2>
        <p class="mv-popup-summary">${esc(m.summary)}</p>
        <div class="mv-section-label">Key characteristics</div>
        <ul class="mv-traits">${traits}</ul>
        <div class="mv-section-label">Key artists</div>
        <div class="mv-artists">${artists}</div>
        ${paintings.length ? `<div class="mv-section-label">In this collection (${paintings.length})</div>
        <div class="mv-popup-paintings">${thumbs}</div>` : ''}
      </div>
    </div>
  `;
  overlay.addEventListener('click', e => { if (e.target === overlay) navDismissAll(); });
  document.body.appendChild(overlay);
  addSwipeDismiss(overlay);
}

function closeMovementPopup() { navDismissAll(); }

/* ── Artist popup ────────────────────────────────────────────────────────── */
function openArtistPopup(artistName) {
  const all = allPaintings();
  const paintings = all.filter(p => p.artist === artistName);
  if (!paintings.length) return;

  const info     = (typeof ARTISTS !== 'undefined') ? ARTISTS[artistName] : null;
  const portrait = (typeof ARTIST_PORTRAITS !== 'undefined') ? ARTIST_PORTRAITS[artistName] : null;

  // collect all unique movements this artist is associated with
  const movementNames = [...new Set(paintings.map(p => p.movement).filter(Boolean))];

  const thumbs = paintings.map(p => {
    const img = p.imageUrl
      ? `<img src="${p.imageUrl}" alt="${esc(p.title)}" loading="lazy"
             onerror="this.outerHTML='<div class=row-thumb-placeholder>🎨</div>'">`
      : `<div class="row-thumb-placeholder">🎨</div>`;
    return `<div class="mv-popup-painting" onclick="openDetail('${String(p.id)}')">
      <div class="mv-popup-thumb">${img}</div>
      <div class="mv-popup-title">${esc(p.title)}</div>
      <div class="mv-popup-artist">${esc(p.year)}</div>
    </div>`;
  }).join('');

  const portraitHtml = portrait
    ? `<img class="artist-portrait" src="${portrait}" alt="${esc(artistName)}"
           onerror="this.style.display='none'">`
    : '';

  const metaLine = [
    info ? `${esc(info.nationality)}` : '',
    info ? `${esc(info.born)}–${esc(info.died)}` : '',
  ].filter(Boolean).join(' · ');

  const movementChips = movementNames.map(k => {
    const mv = (typeof MOVEMENTS !== 'undefined') ? MOVEMENTS[k] : null;
    return `<span class="mv-artist-chip" style="cursor:pointer"
      onclick="openMovementPopup('${k.replace(/'/g,"\\'")}')">
      ${esc(k)}${mv ? `<span style="color:var(--text-faint);font-size:.65rem"> · ${esc(mv.era)}</span>` : ''}
    </span>`;
  }).join('');

  _navOpen();
  const overlay = document.createElement('div');
  overlay.className = 'detail-overlay';
  overlay.id        = 'artist-overlay';
  overlay.dataset.artistName = artistName;
  overlay.innerHTML = `
    <div class="detail-sheet movement-sheet" id="artist-sheet">
      <div class="detail-nav">
        <button class="detail-back-btn" onclick="navBack()">${ICONS.back} Back</button>
      </div>
      <div class="mv-popup-body">
        <h2 class="mv-popup-name artist-popup-name">${esc(artistName)}</h2>
        ${metaLine ? `<div class="mv-popup-era" style="margin-bottom:12px">${metaLine}</div>` : ''}
        <div class="artist-bio-wrap">
          ${portraitHtml}
          ${info ? `<p class="mv-popup-summary artist-bio-text">${esc(info.bio)}</p>` : ''}
        </div>
        ${!info ? '<div style="height:12px"></div>' : ''}
        ${movementChips ? `<div class="mv-section-label">Movement${movementNames.length > 1 ? 's' : ''}</div>
        <div class="mv-artists">${movementChips}</div>` : ''}
        <div class="mv-section-label" style="margin-top:20px">Works in this collection (${paintings.length})</div>
        <div class="mv-popup-paintings">${thumbs}</div>
      </div>
    </div>
  `;
  overlay.addEventListener('click', e => { if (e.target === overlay) navDismissAll(); });
  document.body.appendChild(overlay);
  addSwipeDismiss(overlay);
}

function closeArtistPopup() { navDismissAll(); }

/* ── Museum detail view (replaces #main content, keeps header visible) ────── */
function openMuseumDetail(name) {
  navDismissAll();
  _tabScroll['museums'] = window.scrollY; // save list scroll before entering detail
  _museumsDetailState = { activeMuseum: name, museumSearch: '' };
  S.activeMuseum = name;
  S.view = 'museum-detail';
  save();
  render();
  window.scrollTo(0, 0);
}

function renderMuseumDetailView() {
  const museumName = S.activeMuseum;
  const allMuseumPaintings = scopedPaintings().filter(p => p.location.museum === museumName).sort((a,b) => (a.rank||9999)-(b.rank||9999));
  if (!allMuseumPaintings.length) return `<div class="empty-state"><div class="empty-icon">🏛️</div><p>Museum not found.</p></div>`;
  const q = S.museumSearch.toLowerCase();
  const paintings = q
    ? allMuseumPaintings.filter(p => p.title.toLowerCase().includes(q) || p.artist.toLowerCase().includes(q))
    : allMuseumPaintings;

  const loc  = allMuseumPaintings[0].location;
  const info = (typeof MUSEUMS_INFO !== 'undefined') ? MUSEUMS_INFO[museumName] : null;
  const flagFor = { France:'🇫🇷', Italy:'🇮🇹', USA:'🇺🇸', Netherlands:'🇳🇱', Spain:'🇪🇸',
    'United Kingdom':'🇬🇧', Russia:'🇷🇺', Norway:'🇳🇴', Austria:'🇦🇹', Germany:'🇩🇪',
    'Vatican City':'🇻🇦', Mexico:'🇲🇽' };
  const flag = flagFor[loc.country] || '';
  const mc   = checkedCount(allMuseumPaintings.map(p => p.id));
  const isVisited = !!S.visitedMuseums[museumName];
  const safeName  = esc(museumName).replace(/'/g, "\\'");

  const photoHtml = (info && info.photo)
    ? `<img class="museum-detail-photo" src="${info.photo}" alt="${esc(museumName)}"
           onerror="this.style.display='none'">`
    : '';

  let paintingsHtml;
  const mode = S.museumsDetailMode || 'condensed';
  if (!paintings.length) {
    paintingsHtml = `<div class="empty-state" style="padding:32px 0"><p>No paintings match your search.</p></div>`;
  } else if (mode === 'grid') {
    paintingsHtml = `<div class="paintings-grid">${paintings.map(p => renderPaintingCard(p)).join('')}</div>`;
  } else if (mode === 'list') {
    paintingsHtml = `<div class="paintings-compact">${paintings.map(p => renderPaintingRow(p)).join('')}</div>`;
  } else {
    paintingsHtml = `<div class="mv-popup-paintings">${paintings.map(p => renderCondensedCard(p)).join('')}</div>`;
  }

  return _museumsToolbar() + `
    <div class="museum-detail-nav">
      <button class="detail-back-btn" onclick="closeMuseumDetail()">${ICONS.back} Back</button>
      <button class="museum-detail-visited-btn${isVisited ? ' visited' : ''}"
              onclick="toggleMuseumVisited(event,'${safeName}')"
              title="${isVisited ? 'Visited' : 'Mark as visited'}">
        ${isVisited ? ICONS.check : ICONS.pin}
        <span>${isVisited ? 'Visited' : 'Mark visited'}</span>
      </button>
    </div>
    ${photoHtml}
    <div class="mv-popup-body">
      <div class="mv-popup-era">${flag} ${esc(loc.city)}, ${esc(loc.country)}</div>
      <h2 class="mv-popup-name">${esc(museumName)}</h2>
      <div class="museum-popup-stats">
        <span class="museum-popup-stat">${mc} of ${allMuseumPaintings.length} collected</span>
        <div class="museum-popup-bar"><div class="museum-popup-fill" style="width:${allMuseumPaintings.length ? Math.round(mc/allMuseumPaintings.length*100) : 0}%"></div></div>
      </div>
      ${info ? `<p class="mv-popup-summary" style="margin-top:14px;border-bottom:none;padding-bottom:0">${esc(info.blurb)}</p>` : ''}
      <div class="mv-section-label" style="margin-top:18px">Collection (${q ? `${paintings.length} of ${allMuseumPaintings.length}` : allMuseumPaintings.length})</div>
      ${paintingsHtml}
    </div>
  `;
}

/* ── Museum popup (from painting detail overlay) ──────────────────────────── */
function openMuseumPopup(museumName) {
  const all = allPaintings();
  const paintings = all.filter(p => p.location.museum === museumName).sort((a,b) => (a.rank||9999)-(b.rank||9999));
  if (!paintings.length) return;

  const loc  = paintings[0].location;
  const info = (typeof MUSEUMS_INFO !== 'undefined') ? MUSEUMS_INFO[museumName] : null;
  const flagFor = { France:'🇫🇷', Italy:'🇮🇹', USA:'🇺🇸', Netherlands:'🇳🇱', Spain:'🇪🇸',
    'United Kingdom':'🇬🇧', Russia:'🇷🇺', Norway:'🇳🇴', Austria:'🇦🇹', Germany:'🇩🇪',
    'Vatican City':'🇻🇦', Mexico:'🇲🇽' };
  const flag = flagFor[loc.country] || '';
  const mc   = checkedCount(paintings.map(p => p.id));

  const photoHtml = (info && info.photo)
    ? `<img class="museum-popup-photo" src="${info.photo}" alt="${esc(museumName)}"
           onerror="this.style.display='none'">`
    : '';

  const thumbs = paintings.map(p => {
    const img = p.imageUrl
      ? `<img src="${p.imageUrl}" alt="${esc(p.title)}" loading="lazy"
             onerror="this.outerHTML='<div class=row-thumb-placeholder>🎨</div>'">`
      : `<div class="row-thumb-placeholder">🎨</div>`;
    return `<div class="mv-popup-painting" onclick="openDetail('${String(p.id)}')">
      <div class="mv-popup-thumb">${img}</div>
      <div class="mv-popup-title">${esc(p.title)}</div>
      <div class="mv-popup-artist">${esc(p.artist)}</div>
    </div>`;
  }).join('');

  _navOpen();
  const overlay = document.createElement('div');
  overlay.className = 'detail-overlay';
  overlay.id        = 'museum-overlay';
  overlay.dataset.museumName = museumName;
  overlay.innerHTML = `
    <div class="detail-sheet movement-sheet" id="museum-sheet">
      <div class="detail-nav">
        <button class="detail-back-btn" onclick="navBack()">${ICONS.back} Back</button>
      </div>
      ${photoHtml}
      <div class="mv-popup-body">
        <div class="mv-popup-era">${flag} ${esc(loc.city)}, ${esc(loc.country)}</div>
        <h2 class="mv-popup-name">${esc(museumName)}</h2>
        <div class="museum-popup-stats">
          <span class="museum-popup-stat">${mc} of ${paintings.length} collected</span>
          <div class="museum-popup-bar"><div class="museum-popup-fill" style="width:${paintings.length ? Math.round(mc/paintings.length*100) : 0}%"></div></div>
        </div>
        ${info ? `<p class="mv-popup-summary" style="margin-top:14px;border-bottom:none;padding-bottom:0">${esc(info.blurb)}</p>` : ''}
        <div class="mv-section-label" style="margin-top:18px">Collection (${paintings.length})</div>
        <div class="mv-popup-paintings">${thumbs}</div>
      </div>
    </div>
  `;
  overlay.addEventListener('click', e => { if (e.target === overlay) navDismissAll(); });
  document.body.appendChild(overlay);
  addSwipeDismiss(overlay);
}

function closeMuseumPopup() { navDismissAll(); }

/* ── Stats navigation ────────────────────────────────────────────────────── */
function openStats() {
  if (S.view !== 'stats') _prevView = S.view;
  setView('stats');
}

function closeStats() {
  setView(_prevView || 'list');
}

/* ── Settings View ───────────────────────────────────────────────────────── */
function renderSettingsView() {
  return `
    <div class="stats-back-row">
      <button class="detail-back-btn" onclick="closeSettings()">${ICONS.back} Back</button>
    </div>
    <div class="settings-view">
      <div class="settings-section">
        <div class="settings-section-title">Tracking</div>
        <div class="settings-row settings-row-stacked">
          <div class="settings-row-label">
            <div class="settings-row-name">Painting List</div>
            <div class="settings-row-sub">Some museums hold several paintings from the Top 100 — others just one. Since you're already there, why not see a few more masterpieces? +10 and +30 fill each museum's list to up to 10 or 30 great works, so every visit goes deeper.</div>
          </div>
          <div class="settings-toggle-group">
            <button class="settings-toggle-btn${S.scope === 'top100'  ? ' active' : ''}" onclick="setScope('top100')">Top 100</button>
            <button class="settings-toggle-btn${S.scope === 'plus10'  ? ' active' : ''}" onclick="setScope('plus10')">Up to 10</button>
            <button class="settings-toggle-btn${S.scope === 'plus30'  ? ' active' : ''}" onclick="setScope('plus30')">Up to 30</button>
          </div>
        </div>
        ${(S.scope === 'plus10' || S.scope === 'plus30') ? `
        <div class="settings-row">
          <div class="settings-row-label">
            <div class="settings-row-name">Stat Tracking</div>
            <div class="settings-row-sub">What the header counter counts when an expanded list is active</div>
          </div>
          <div class="settings-toggle-group">
            <button class="settings-toggle-btn${S.statTracking === 'top100' ? ' active' : ''}" onclick="setStatTracking('top100')">Top 100</button>
            <button class="settings-toggle-btn${S.statTracking === 'all'    ? ' active' : ''}" onclick="setStatTracking('all')">All</button>
          </div>
        </div>` : ''}
      </div>
      <div class="settings-section">
        <div class="settings-section-title">Display</div>
        <div class="settings-row">
          <div class="settings-row-label">
            <div class="settings-row-name">Units</div>
            <div class="settings-row-sub">Painting dimensions</div>
          </div>
          <div class="settings-toggle-group">
            <button class="settings-toggle-btn${S.units === 'metric'   ? ' active' : ''}" onclick="setUnits('metric')">Metric</button>
            <button class="settings-toggle-btn${S.units === 'imperial' ? ' active' : ''}" onclick="setUnits('imperial')">Imperial</button>
          </div>
        </div>
      </div>
      <div class="settings-section">
        <div class="settings-section-title">About</div>
        <div class="settings-row">
          <div class="settings-row-label">
            <div class="settings-row-name">Show intro screen</div>
            <div class="settings-row-sub">Review the app introduction</div>
          </div>
          <button class="settings-action-btn" onclick="showOnboarding()">View</button>
        </div>
        <div class="settings-row">
          <div class="settings-row-label">
            <div class="settings-row-name">Force app update</div>
            <div class="settings-row-sub">Clear cached files and reload with the latest version</div>
          </div>
          <button class="settings-action-btn" onclick="forceAppUpdate()">Update</button>
        </div>
      </div>
    </div>
  `;
}

function openSettings() {
  if (S.view === 'settings') { closeSettings(); return; }
  _prevView = S.view;
  setView('settings');
}

function closeSettings() {
  setView(_prevView || 'list');
}

function setStatTracking(v) {
  S.statTracking = v;
  save();
  render();
}

function setUnits(u) {
  S.units = u;
  save();
  render();
}

function setScope(s) {
  S.scope = s;
  save();
  render();
}

async function forceAppUpdate() {
  if ('serviceWorker' in navigator) {
    const regs = await navigator.serviceWorker.getRegistrations();
    await Promise.all(regs.map(r => r.unregister()));
  }
  const keys = await caches.keys();
  await Promise.all(keys.map(k => caches.delete(k)));
  location.reload(true);
}

/* ── Onboarding ──────────────────────────────────────────────────────────── */
function _obPage1HTML() {
  return `
        <div class="ob-top">
          <div class="ob-brand brand-cursive">Beheld</div>
        </div>

        <div class="ob-hero-sub">One lifetime</div>

        <div class="ob-stats">
          <div class="ob-stat">
            <div class="ob-stat-num">12</div>
            <div class="ob-stat-label">countries</div>
          </div>
          <div class="ob-stat-divider"></div>
          <div class="ob-stat">
            <div class="ob-stat-num">21</div>
            <div class="ob-stat-label">cities</div>
          </div>
          <div class="ob-stat-divider"></div>
          <div class="ob-stat">
            <div class="ob-stat-num">35</div>
            <div class="ob-stat-label">museums</div>
          </div>
        </div>

        <div class="ob-hero">
          <div class="ob-hero-stat">
            <div class="ob-hero-num">100</div>
            <div class="ob-hero-word">masterpieces</div>
          </div>
        </div>

        <p class="ob-body">
          From Botticelli's Florence to Monet's Paris, Vermeer's Delft
          to Hopper's New York — these paintings span six centuries of
          human imagination across the Italian Renaissance, the Dutch
          Golden Age, Impressionism, and beyond.
        </p>
        <p class="ob-body">
          Some hang in marble palaces. Others in converted power stations.
          All of them are worth the trip.
        </p>

        <div class="ob-timeline">
          <div class="ob-timeline-line"></div>
          <div class="ob-timeline-dot ob-timeline-start">
            <div class="ob-timeline-year">1425</div>
            <div class="ob-timeline-label">Jan van Eyck</div>
          </div>
          <div class="ob-timeline-dot ob-timeline-end">
            <div class="ob-timeline-year">1962</div>
            <div class="ob-timeline-label">Andy Warhol</div>
          </div>
        </div>

        <button class="ob-cta" onclick="obGoPage(2)">
          Next
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:16px;height:16px;vertical-align:middle;margin-left:6px"><polyline points="9 18 15 12 9 6"/></svg>
        </button>

        <div class="ob-dots">
          <span class="ob-dot ob-dot-active"></span>
          <span class="ob-dot"></span>
        </div>
  `;
}

function _obPage2HTML() {
  return `
        <div class="ob-top">
          <div class="ob-brand brand-cursive">Beheld</div>
        </div>

        <div class="ob-p2-headline">Your collection,<br>your story.</div>

        <div class="ob-rule"></div>

        <div class="ob-features">
          <div class="ob-feature">
            <div class="ob-feature-icon">${ICONS.check}</div>
            <div class="ob-feature-text">
              <div class="ob-feature-title">Collect paintings you've visited</div>
              <div class="ob-feature-desc">Tap the check on any painting to collect it and add it to your collection.</div>
            </div>
          </div>
          <div class="ob-feature">
            <div class="ob-feature-icon">${ICONS.camera}</div>
            <div class="ob-feature-text">
              <div class="ob-feature-title">Add Your Photos</div>
              <div class="ob-feature-desc">Took a picture at the museum? Attach it to the painting. Your Collection tab becomes a visual diary of every work you've stood in front of.</div>
            </div>
          </div>
          <div class="ob-feature">
            <div class="ob-feature-icon">${ICONS.plus}</div>
            <div class="ob-feature-text">
              <div class="ob-feature-title">Add Your Own</div>
              <div class="ob-feature-desc">Found a masterpiece not on the list? Add any painting you love and it lives alongside the greats in your personal collection.</div>
            </div>
          </div>
        </div>

        <div class="ob-rule" style="margin-top:4px"></div>

        <button class="ob-cta" onclick="dismissOnboarding()">
          Begin your journey
        </button>

        <div class="ob-dots">
          <span class="ob-dot"></span>
          <span class="ob-dot ob-dot-active"></span>
        </div>

        <div class="ob-fine">No account · All data stays on your device</div>
  `;
}

function showOnboarding() {
  const el = document.createElement('div');
  el.className = 'ob-overlay';
  el.id = 'ob-overlay';
  el.innerHTML = `<div class="ob-scroll"><div class="ob-content">${_obPage1HTML()}</div></div>`;
  document.body.appendChild(el);
}

function obGoPage(n) {
  const content = document.querySelector('#ob-overlay .ob-content');
  if (!content) return;
  content.style.transition = 'opacity .2s, transform .2s';
  content.style.opacity = '0';
  content.style.transform = 'translateX(-20px)';
  setTimeout(() => {
    content.innerHTML = n === 2 ? _obPage2HTML() : _obPage1HTML();
    content.style.transition = 'none';
    content.style.transform = 'translateX(20px)';
    content.style.opacity = '0';
    // force reflow then animate in
    content.getBoundingClientRect();
    content.style.transition = 'opacity .25s, transform .25s';
    content.style.opacity = '1';
    content.style.transform = 'translateX(0)';
    const scroll = document.querySelector('.ob-scroll');
    if (scroll) scroll.scrollTop = 0;
  }, 200);
}

function dismissOnboarding() {
  localStorage.setItem('pc_onboarded', '1');
  const el = document.getElementById('ob-overlay');
  if (!el) return;
  el.style.opacity = '0';
  setTimeout(() => el.remove(), 300);
}

/* ── Quiz ────────────────────────────────────────────────────────────────── */
let _quiz = null;
let _quizOpts = []; // current question's options array, indexed by MC buttons

function openQuiz() {
  if (document.getElementById('quiz-overlay')) return;
  _quiz = {
    phase: 'setup',
    setup: { count: 10, types: ['artist', 'year', 'museum', 'movement', 'title'], mode: 'multiple', pool: 'all' },
    questions: [],
    current: 0,
    answers: [],
    answered: false,
  };
  const overlay = document.createElement('div');
  overlay.id = 'quiz-overlay';
  overlay.className = 'quiz-overlay';
  overlay.innerHTML = `<div class="quiz-sheet" id="quiz-sheet"></div>`;
  overlay.addEventListener('click', e => { if (e.target === overlay) closeQuiz(); });
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
  _renderQuiz();
}

function closeQuiz() {
  const el = document.getElementById('quiz-overlay');
  if (el) { el.style.opacity = '0'; setTimeout(() => el.remove(), 200); }
  document.body.style.overflow = '';
  _quiz = null;
}

function _renderQuiz() {
  const sheet = document.getElementById('quiz-sheet');
  if (!sheet || !_quiz) return;
  if (_quiz.phase === 'setup')    sheet.innerHTML = _quizSetupHTML();
  else if (_quiz.phase === 'question') sheet.innerHTML = _quizQuestionHTML();
  else if (_quiz.phase === 'score')    sheet.innerHTML = _quizScoreHTML();
  sheet.scrollTop = 0;
}

/* ── Setup screen ─────────────────────────────────────────────────────────── */
function _quizSetupHTML() {
  const s = _quiz.setup;
  const types = [
    { key: 'artist',   label: 'Artist' },
    { key: 'year',     label: 'Year' },
    { key: 'museum',   label: 'Museum' },
    { key: 'movement', label: 'Movement' },
    { key: 'title',    label: 'Painting name' },
  ];
  return `
    <div class="quiz-nav">
      <button class="detail-back-btn" onclick="closeQuiz()">${ICONS.back} Close</button>
      <span class="quiz-nav-title">Art Quiz</span>
    </div>
    <div class="quiz-setup">
      <div class="quiz-section">
        <div class="quiz-section-label">Questions — <span id="quiz-count-val">${s.count}</span></div>
        <input type="range" class="quiz-slider" min="5" max="20" step="1" value="${s.count}"
               oninput="quizSetCount(this.value)">
      </div>
      <div class="quiz-section">
        <div class="quiz-section-label">Question types</div>
        <div class="quiz-type-grid">
          ${types.map(t => `
            <button class="quiz-type-btn${s.types.includes(t.key) ? ' active' : ''}"
                    id="qt-${t.key}" onclick="quizToggleType('${t.key}')">${t.label}</button>
          `).join('')}
        </div>
      </div>
      <div class="quiz-section">
        <div class="quiz-section-label">Answer mode</div>
        <div class="quiz-mode-row">
          <button class="quiz-mode-btn${s.mode === 'multiple' ? ' active' : ''}"
                  id="qm-multiple" onclick="quizSetMode('multiple')">Multiple choice</button>
          <button class="quiz-mode-btn${s.mode === 'dropdown' ? ' active' : ''}"
                  id="qm-dropdown" onclick="quizSetMode('dropdown')">Dropdown</button>
        </div>
      </div>
      <div class="quiz-section">
        <div class="quiz-section-label">Painting pool</div>
        <div class="quiz-mode-row">
          <button class="quiz-mode-btn${s.pool === 'all' ? ' active' : ''}"
                  id="qp-all" onclick="quizSetPool('all')">All Top 100</button>
          <button class="quiz-mode-btn${s.pool === 'collected' ? ' active' : ''}"
                  id="qp-collected" onclick="quizSetPool('collected')">Collected</button>
          <button class="quiz-mode-btn${s.pool === 'favorites' ? ' active' : ''}"
                  id="qp-favorites" onclick="quizSetPool('favorites')">Favorites</button>
        </div>
      </div>
      <button class="quiz-start-btn" onclick="quizStart()">Start Quiz</button>
    </div>
  `;
}

function quizSetCount(val) {
  _quiz.setup.count = parseInt(val);
  const el = document.getElementById('quiz-count-val');
  if (el) el.textContent = val;
}

function quizToggleType(type) {
  const types = _quiz.setup.types;
  const idx = types.indexOf(type);
  if (idx >= 0) {
    if (types.length === 1) return;
    types.splice(idx, 1);
  } else {
    types.push(type);
  }
  const btn = document.getElementById(`qt-${type}`);
  if (btn) btn.classList.toggle('active', types.includes(type));
}

function quizSetMode(mode) {
  _quiz.setup.mode = mode;
  document.getElementById('qm-multiple').classList.toggle('active', mode === 'multiple');
  document.getElementById('qm-dropdown').classList.toggle('active', mode === 'dropdown');
}

function quizSetPool(pool) {
  _quiz.setup.pool = pool;
  ['all', 'collected', 'favorites'].forEach(p =>
    document.getElementById(`qp-${p}`).classList.toggle('active', pool === p)
  );
}

/* ── Question generation ──────────────────────────────────────────────────── */
function quizStart() {
  const { count, types, mode, pool: poolKey } = _quiz.setup;
  if (!types.length) return;

  const top100 = PAINTINGS.filter(p => p.rank && p.rank <= 100);
  let pool;
  if (poolKey === 'collected') {
    pool = top100.filter(p => S.checked[String(p.id)]);
  } else if (poolKey === 'favorites') {
    pool = top100.filter(p => S.favorites[String(p.id)]);
  } else {
    pool = top100;
  }
  if (pool.length < 4) {
    alert(poolKey === 'favorites'
      ? 'You need at least 4 favorited paintings to start a quiz.'
      : 'You need at least 4 collected paintings to start a quiz.');
    return;
  }

  const allArtists   = [...new Set(pool.map(p => p.artist))];
  const allYears     = [...new Set(pool.map(p => p.year))];
  const allMuseums   = [...new Set(pool.map(p => p.location.museum))];
  const allMovements = [...new Set(pool.filter(p => p.movement).map(p => p.movement))];
  const allTitles    = [...new Set(pool.map(p => p.title))];

  // Build museum → { city, country } lookup for richer MC display
  const museumInfo = {};
  pool.forEach(p => {
    if (!museumInfo[p.location.museum]) {
      museumInfo[p.location.museum] = { city: p.location.city, country: p.location.country };
    }
  });
  _quiz.museumInfo = museumInfo;

  const shuffled = [...pool].sort(() => Math.random() - 0.5);

  const questions = [];
  let attempts = 0;
  while (questions.length < count && attempts < 500) {
    attempts++;
    const painting = shuffled[attempts % shuffled.length];
    const type = types[Math.floor(Math.random() * types.length)];

    if (type === 'movement' && !painting.movement) continue;
    if (questions.some(q => q.painting.id === painting.id && q.type === type)) continue;

    let answer, optPool, questionText, hint;
    if (type === 'artist') {
      answer = painting.artist;
      optPool = allArtists;
      questionText = 'Who painted this?';
      hint = painting.title;
    } else if (type === 'year') {
      answer = painting.year;
      optPool = allYears;
      questionText = 'When was this painted?';
      hint = `${painting.title}  ·  ${painting.artist}`;
    } else if (type === 'museum') {
      answer = painting.location.museum;
      optPool = allMuseums;
      questionText = 'Where is this painting displayed?';
      hint = `${painting.title}  ·  ${painting.artist}`;
    } else if (type === 'movement') {
      answer = painting.movement;
      optPool = allMovements;
      questionText = 'What movement is this from?';
      hint = `${painting.title}  ·  ${painting.artist}`;
    } else {
      answer = painting.title;
      optPool = allTitles;
      questionText = 'What is this painting called?';
      hint = painting.artist;
    }

    let options;
    if (mode === 'multiple') {
      const distractors = optPool.filter(o => o !== answer).sort(() => Math.random() - 0.5).slice(0, 3);
      if (distractors.length < 3) continue;
      options = [...distractors, answer].sort(() => Math.random() - 0.5);
    } else {
      options = [...optPool].sort((a, b) => a.localeCompare(b));
    }

    questions.push({ painting, type, questionText, hint, answer, options });
  }

  _quiz.questions = questions.slice(0, count);
  _quiz.current = 0;
  _quiz.answers = [];
  _quiz.answered = false;
  _quiz.phase = 'question';
  _renderQuiz();
}

/* ── Question screen ──────────────────────────────────────────────────────── */
function _quizQuestionHTML() {
  const q = _quiz.questions[_quiz.current];
  const n = _quiz.current;
  const total = _quiz.questions.length;
  const answered = _quiz.answered;
  const userAnswer = answered ? _quiz.answers[n].given : null;

  _quizOpts = q.options;

  const imgHtml = q.painting.imageUrl
    ? `<img class="quiz-painting-img" src="${q.painting.imageUrl}" alt="" onerror="this.style.display='none'">`
    : `<div class="quiz-painting-placeholder">🎨</div>`;

  const pips = Array.from({ length: total }, (_, i) => {
    let cls = 'quiz-pip';
    if (i < n) cls += _quiz.answers[i].correct ? ' done' : ' missed';
    else if (i === n) cls += ' current';
    return `<span class="${cls}"></span>`;
  }).join('');

  const museumLabel = (name) => {
    const info = _quiz.museumInfo && _quiz.museumInfo[name];
    if (!info) return esc(name);
    return `<span class="quiz-opt-name">${esc(name)}</span><span class="quiz-opt-sub">${esc(info.city)}, ${esc(info.country)}</span>`;
  };

  let answersHtml;
  if (_quiz.setup.mode === 'multiple') {
    answersHtml = `<div class="quiz-options">
      ${q.options.map((opt, i) => {
        let cls = 'quiz-option';
        if (answered) {
          if (opt === q.answer) cls += ' correct';
          else if (opt === userAnswer) cls += ' wrong';
          else cls += ' faded';
        }
        const label = q.type === 'museum' ? museumLabel(opt) : esc(opt);
        return `<button class="${cls}" ${answered ? 'disabled' : `onclick="quizAnswerMC(${i})"`}>${label}</button>`;
      }).join('')}
    </div>`;
  } else {
    answersHtml = `<div class="quiz-dropdown-wrap">
      <select class="quiz-select" id="quiz-select" ${answered ? 'disabled' : ''}>
        <option value="">— select an answer —</option>
        ${q.options.map(opt => {
          const info = q.type === 'museum' && _quiz.museumInfo && _quiz.museumInfo[opt];
          const label = info ? `${opt} — ${info.city}, ${info.country}` : opt;
          return `<option value="${esc(opt)}"${answered && opt === userAnswer ? ' selected' : ''}>${esc(label)}</option>`;
        }).join('')}
      </select>
      ${!answered
        ? `<button class="quiz-submit-btn" onclick="quizAnswerDropdown()">Submit</button>`
        : `<div class="quiz-dd-result ${userAnswer === q.answer ? 'correct' : 'wrong'}">
             ${userAnswer === q.answer ? '✓ Correct!' : `✗ Correct answer: ${esc(q.answer)}`}
           </div>`}
    </div>`;
  }

  return `
    <div class="quiz-nav">
      <button class="detail-back-btn" onclick="closeQuiz()">${ICONS.back} Close</button>
      <div class="quiz-progress-pips">${pips}</div>
      <span class="quiz-qnum">${n + 1} / ${total}</span>
    </div>
    <div class="quiz-body">
      <div class="quiz-img-wrap">${imgHtml}</div>
      <div class="quiz-hint">${esc(q.hint)}</div>
      <div class="quiz-question">${esc(q.questionText)}</div>
      ${answersHtml}
      ${answered ? `<button class="quiz-next-btn" onclick="quizNext()">
        ${n + 1 < total ? 'Next →' : 'See results'}
      </button>` : ''}
    </div>
  `;
}

function quizAnswerMC(idx) {
  if (_quiz.answered) return;
  quizRecordAnswer(_quizOpts[idx]);
}

function quizAnswerDropdown() {
  const sel = document.getElementById('quiz-select');
  if (!sel || !sel.value) return;
  quizRecordAnswer(sel.value);
}

function quizRecordAnswer(given) {
  if (_quiz.answered) return;
  _quiz.answered = true;
  const q = _quiz.questions[_quiz.current];
  _quiz.answers.push({ given, correct: given === q.answer });
  _renderQuiz();
}

function quizNext() {
  _quiz.current++;
  _quiz.answered = false;
  if (_quiz.current >= _quiz.questions.length) {
    _quiz.phase = 'score';
  }
  _renderQuiz();
}

/* ── Score screen ─────────────────────────────────────────────────────────── */
function _quizScoreHTML() {
  const total = _quiz.answers.length;
  const correct = _quiz.answers.filter(a => a.correct).length;
  const pct = total ? Math.round((correct / total) * 100) : 0;

  const byType = {};
  _quiz.questions.forEach((q, i) => {
    if (!byType[q.type]) byType[q.type] = { correct: 0, total: 0 };
    byType[q.type].total++;
    if (_quiz.answers[i] && _quiz.answers[i].correct) byType[q.type].correct++;
  });

  const typeLabels = { artist: 'Artist', year: 'Year', museum: 'Museum', movement: 'Movement', title: 'Painting name' };

  const grade = pct === 100 ? 'Perfect score!' : pct >= 80 ? 'Art expert!' : pct >= 60 ? 'Well done!' : pct >= 40 ? 'Getting there!' : 'Keep exploring!';

  const pips = _quiz.answers.map(a =>
    `<span class="quiz-pip ${a.correct ? 'done' : 'missed'}"></span>`
  ).join('');

  const hasMultipleTypes = Object.keys(byType).length > 1;

  return `
    <div class="quiz-nav">
      <button class="detail-back-btn" onclick="closeQuiz()">${ICONS.back} Close</button>
    </div>
    <div class="quiz-score">
      <div class="quiz-score-grade">${grade}</div>
      <div class="quiz-score-display">
        <span class="quiz-score-big">${correct}</span>
        <span class="quiz-score-denom">/ ${total}</span>
      </div>
      <div class="quiz-progress-pips">${pips}</div>
      ${hasMultipleTypes ? `<div class="quiz-breakdown">
        ${Object.entries(byType).map(([type, st]) => `
          <div class="quiz-breakdown-row">
            <span class="quiz-breakdown-label">${typeLabels[type]}</span>
            <div class="quiz-breakdown-bar-wrap">
              <div class="quiz-breakdown-bar" style="width:${Math.round(st.correct/st.total*100)}%"></div>
            </div>
            <span class="quiz-breakdown-score">${st.correct}/${st.total}</span>
          </div>
        `).join('')}
      </div>` : ''}
      <div class="quiz-score-actions">
        <button class="quiz-start-btn" onclick="quizPlayAgain()">Play again</button>
        <button class="quiz-close-btn" onclick="closeQuiz()">Close</button>
      </div>
    </div>
  `;
}

function quizPlayAgain() {
  _quiz.phase = 'setup';
  _quiz.questions = [];
  _quiz.current = 0;
  _quiz.answers = [];
  _quiz.answered = false;
  _renderQuiz();
}

/* ── Image pre-caching ───────────────────────────────────────────────────── */
async function _preCacheImages() {
  if (!('caches' in window)) return;
  try {
    const cache = await caches.open('paint-chips-v2');
    const urls = new Set();
    PAINTINGS.forEach(p => { if (p.imageUrl) urls.add(p.imageUrl); });
    if (typeof ARTIST_PORTRAITS !== 'undefined')
      Object.values(ARTIST_PORTRAITS).forEach(u => { if (u) urls.add(u); });
    if (typeof MUSEUMS_INFO !== 'undefined')
      Object.values(MUSEUMS_INFO).forEach(m => { if (m && m.photo) urls.add(m.photo); });
    const list = [...urls];
    for (let i = 0; i < list.length; i += 5) {
      await Promise.allSettled(list.slice(i, i + 5).map(async url => {
        if (await cache.match(url)) return;
        const resp = await fetch(url, { mode: 'cors' });
        if (resp.ok) await cache.put(url, resp);
      }));
    }
  } catch (_) {}
}

/* ── Init ────────────────────────────────────────────────────────────────── */
async function init() {
  try {
    load(); // restores all state except photos from localStorage

    // Load user photos from IndexedDB; migrate from localStorage if first run
    try {
      const idbPhotos = await _idbGetAll();
      if (Object.keys(idbPhotos).length > 0) {
        S.photos = idbPhotos;
      } else if (Object.keys(S.photos).length > 0) {
        // First run after upgrade: migrate old localStorage photos into IDB
        for (const [id, photos] of Object.entries(S.photos)) {
          await _idbPut(id, photos).catch(() => {});
        }
        save(); // rewrite localStorage without photos
      }
    } catch (_) {} // IDB unavailable — photos stay in memory only

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    }

    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') save(); });
    window.addEventListener('pagehide', save);

    const quizBtn = document.getElementById('quiz-btn');
    if (quizBtn) quizBtn.innerHTML = ICONS.dice;
    const settingsBtn = document.getElementById('settings-btn');
    if (settingsBtn) settingsBtn.innerHTML = ICONS.gear;

    const nav = document.getElementById('bottom-nav');
    const navItems = [
      { view: 'list',       icon: ICONS.brush,    label: 'Paintings' },
      { view: 'collection', icon: ICONS.frame,    label: 'Collection', special: true },
      { view: 'museums',    icon: ICONS.landmark, label: 'Museums' },
    ];
    nav.innerHTML = navItems.map(n => {
      const isActive = S.view === n.view;
      const cls = `nav-btn${n.special ? ' nav-btn-collection' : ''}${isActive ? ' active' : ''}`;
      return `<button class="${cls}" data-view="${n.view}" onclick="setView('${n.view}')">${n.icon}<span>${n.label}</span></button>`;
    }).join('');

    render();
    _initSwipeBack();

    if (!localStorage.getItem('pc_onboarded')) showOnboarding();

    // Pre-cache all painting/museum/artist images for offline use
    setTimeout(_preCacheImages, 2000);
  } catch (err) {
    document.getElementById('main').innerHTML =
      `<div class="empty-state"><div class="empty-icon">⚠️</div><p>Error: ${err.message}</p></div>`;
    console.error('Beheld init error:', err);
  }
}

/* ── Global back action ─────────────────────────────────────────────────── */
function _globalBack() {
  const overlayIds = ['detail-overlay','museum-overlay','artist-overlay','movement-overlay'];
  if (overlayIds.some(id => document.getElementById(id))) { navBack(); return; }
  if (S.view === 'museum-detail') { closeMuseumDetail(); return; }
  if (S.view === 'settings')      { closeSettings();     return; }
  if (S.view === 'stats')         { closeStats();         return; }
}

/* ── Swipe-right from left edge = Back (animated) ───────────────────────── */
function _initSwipeBack() {
  const EDGE      = 40;   // px from left edge to start tracking
  const MIN_DX    = 80;   // px to commit the back action
  const DIR_LOCK  = 10;   // px of movement before direction is decided

  let startX = 0, startY = 0;
  let phase    = 'idle';  // 'idle' | 'pending' | 'dragging' | 'rejected'
  let target   = null;    // element being dragged
  let fullPage = false;   // true when target is #main (no slide animation)

  function getTarget() {
    for (const id of ['detail-overlay','museum-overlay','artist-overlay','movement-overlay']) {
      const el = document.getElementById(id);
      if (el) return el.querySelector('.detail-sheet') || null;
    }
    if (['museum-detail','settings','stats'].includes(S.view)) return document.getElementById('main');
    return null;
  }

  document.addEventListener('touchstart', e => {
    const t = e.touches[0];
    if (t.clientX > EDGE) { phase = 'idle'; return; }
    startX = t.clientX; startY = t.clientY;
    target = getTarget();
    fullPage = target?.id === 'main';
    phase = target ? 'pending' : 'idle';
  }, { passive: true });

  document.addEventListener('touchmove', e => {
    if (phase === 'idle' || phase === 'rejected' || !target) return;
    const t  = e.touches[0];
    const dx = t.clientX - startX;
    const dy = Math.abs(t.clientY - startY);

    if (phase === 'pending') {
      if (Math.max(dx, dy) < DIR_LOCK) return;
      if (dy > dx || dx < 0) { phase = 'rejected'; return; }
      phase = 'dragging';
      if (!fullPage) target.style.transition = 'none';
    }

    if (phase === 'dragging' && !fullPage) {
      const x = Math.max(0, dx);
      target.style.transform = `translateX(${x}px)`;
      // Keep backdrop opaque during drag — don't reveal #main underneath
    }
  }, { passive: true });

  document.addEventListener('touchend', e => {
    if (phase !== 'dragging' || !target) { phase = 'idle'; return; }
    const dx  = e.changedTouches[0].clientX - startX;
    const el  = target;
    const overlay = el.closest && el.closest('.detail-overlay, [class*="-overlay"]');
    phase = 'idle';

    if (dx >= MIN_DX) {
      if (fullPage) {
        target = null;
        _globalBack();
      } else {
        el.style.transition = 'transform 0.22s ease';
        el.style.transform  = `translateX(${window.innerWidth}px)`;
        if (overlay) {
          overlay.style.transition = 'opacity 0.22s';
          overlay.style.opacity = '0';
        }
        // Suppress the re-open animation so the previous screen appears instantly
        document.body.classList.add('swipe-back-open');
        setTimeout(() => {
          document.body.classList.remove('swipe-back-open');
          el.style.cssText = '';
          if (overlay) overlay.style.cssText = '';
          target = null;
          _globalBack();
        }, 220);
      }
    } else {
      if (!fullPage) {
        el.style.transition = 'transform 0.2s ease';
        el.style.transform  = '';
        setTimeout(() => { el.style.transition = ''; target = null; }, 200);
      } else {
        target = null;
      }
    }
  }, { passive: true });
}

// Scripts are at end of <body> — DOM is ready, call init directly
init();
