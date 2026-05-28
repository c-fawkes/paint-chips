/* ── State ──────────────────────────────────────────────────────────────── */
const S = {
  checked: {},
  photos: {},
  userPaintings: [],
  view: 'list',
  listMode: 'grid',
  collectionMode: 'grid',
  museumsMode: 'alpha',
  sort: 'rank',
  search: '',
  filter: { continent: null, country: null, city: null, museum: null },
  units: 'metric',
  scope: 'top100',
  expandedMuseums: new Set(),
  expandedContinents: new Set(),
  expandedCountries: new Set(),
  expandedMovements: new Set(), // used for movement groups in sort-by-movement view
};

/* ── Add-painting modal state ────────────────────────────────────────────── */
let _apMuseum = '';
let _apAutofillMuseum = null;

/* ── Persistence ────────────────────────────────────────────────────────── */
function save() {
  try {
    localStorage.setItem('pc_state', JSON.stringify({
      checked: S.checked, photos: S.photos, userPaintings: S.userPaintings,
      view: S.view, listMode: S.listMode, collectionMode: S.collectionMode, museumsMode: S.museumsMode, sort: S.sort, filter: S.filter, units: S.units, scope: S.scope,
    }));
  } catch (_) {}
}

function load() {
  try {
    const raw = localStorage.getItem('pc_state');
    if (!raw) return;
    const snap = JSON.parse(raw);
    Object.assign(S, snap);
    S.expandedMuseums    = new Set();
    S.expandedContinents = new Set();
    S.expandedCountries  = new Set();
    if (S.view === 'stats' || S.view === 'settings') S.view = 'list';
  } catch (_) {}
}

/* ── Data helpers ───────────────────────────────────────────────────────── */
function allPaintings() { return [...PAINTINGS, ...S.userPaintings]; }
function scopedPaintings() {
  const all = allPaintings();
  return S.scope === 'top100' ? all.filter(p => !p.museumOnly) : all;
}
function checkedCount(ids) { return ids.filter(id => S.checked[String(id)]).length; }
function globalChecked() { return scopedPaintings().filter(p => S.checked[String(p.id)]).length; }
function globalTotal()   { return scopedPaintings().length; }

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
  museum:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 9 12 2 21 9"/><line x1="12" y1="2" x2="12" y2="22"/><rect x="3" y="9" width="4" height="13"/><rect x="17" y="9" width="4" height="13"/><line x1="3" y1="22" x2="21" y2="22"/></svg>`,
  globe:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  stats:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  plus:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  sort:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="6" y1="12" x2="18" y2="12"/><line x1="9" y1="18" x2="15" y2="18"/></svg>`,
  grid:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>`,
  rows:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
  bookmark: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`,
  frame:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="1"/><rect x="5" y="5" width="14" height="14" rx="1"/></svg>`,
  back:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>`,
  pin:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  palette: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="8.5" cy="9" r="1.5" fill="currentColor"/><circle cx="15.5" cy="9" r="1.5" fill="currentColor"/><circle cx="12" cy="15" r="1.5" fill="currentColor"/><circle cx="8.5" cy="15" r="1.5" fill="currentColor"/><circle cx="15.5" cy="15" r="1.5" fill="currentColor"/></svg>`,
  info:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
  gear:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
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

/* ── Painting Card (grid, Top 100 view) ─────────────────────────────────── */
function renderPaintingCard(p) {
  const key = String(p.id);
  const isChecked = !!S.checked[key];
  const hasPhotos = (S.photos[key] || []).length > 0;

  const imgHtml = p.imageUrl
    ? `<img class="card-img" src="${p.imageUrl}" alt="${esc(p.title)}" loading="lazy"
           onerror="this.classList.add('card-img-error');this.outerHTML='<div class=card-img-placeholder>🎨</div>'">`
    : `<div class="card-img-placeholder">🎨</div>`;

  return `<div class="painting-card${isChecked ? ' checked' : ''}" onclick="openDetail('${key}')">
    <div class="card-img-wrap">
      ${imgHtml}
      ${p.rank != null && p.rank <= 100 ? `<div class="card-rank-badge">#${p.rank}</div>` : ''}
      <div class="card-seen-badge${isChecked ? ' checked' : ''}"
           onclick="rowToggleCheck(event,'${key}')" title="Mark as seen">
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

  return `<div class="painting-row${isChecked ? ' checked' : ''}" onclick="openDetail('${key}')">
    <div class="row-img-wrap">${imgHtml}</div>
    <div class="row-meta">
      <div class="row-title">${esc(p.title)}${isUser ? '<span class="user-badge">added</span>' : ''}</div>
      <div class="row-artist">${esc(p.artist)} · ${esc(p.year)}</div>
      ${p.rank != null && p.rank <= 100 ? `<div class="row-rank">#${p.rank} of 100</div>` : ''}
    </div>
    <div class="row-check${isChecked ? ' checked' : ''}"
         onclick="rowToggleCheck(event,'${key}')" title="Mark as seen">
      ${isChecked ? ICONS.check : ''}
    </div>
  </div>`;
}

/* ── Top-100 List View ───────────────────────────────────────────────────── */
function renderListView() {
  const paintings = filteredSorted();
  const filterChips = buildFilterChips();
  const isGrid = S.listMode !== 'compact';

  let paintingsHtml;
  if (paintings.length === 0) {
    paintingsHtml = `<div class="empty-state"><div class="empty-icon">🖼</div><p>No paintings match your search.</p></div>`;
  } else if (S.sort === 'museum') {
    const museumOrder = [...new Set(paintings.map(p => p.location.museum))];
    const groups = {};
    paintings.forEach(p => { const m = p.location.museum; if (!groups[m]) groups[m] = []; groups[m].push(p); });
    paintingsHtml = `<div class="list-museum-groups">${museumOrder.map(museum => {
      const mps = groups[museum];
      const mc  = checkedCount(mps.map(p => p.id));
      return `<div class="list-museum-group">
        <div class="list-museum-header">
          <span class="list-museum-name">${esc(museum)}</span>
          <span class="list-museum-stat">${mc}/${mps.length} seen</span>
        </div>
        ${isGrid
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
        <div class="mv-artists">${mv.artists.map(a => `<span class="mv-artist-chip">${esc(a)}</span>`).join('')}</div>
      </div>` : '';
      return `<div class="list-movement-group${isOpen ? ' open' : ''}">
        <div class="list-movement-header" onclick="toggleMovementGroup('${mvKey.replace(/'/g, "\\'")}')">
          <div class="list-movement-chevron">${ICONS.chevron}</div>
          <span class="list-movement-name">${esc(mvKey)}</span>
          ${mv ? `<span class="list-movement-era">${esc(mv.era)}</span>` : ''}
          <span class="list-movement-stat">${mc}/${mps.length} seen</span>
        </div>
        ${infoBody}
        ${isGrid
          ? `<div class="paintings-grid" style="padding:4px 0 8px">${mps.map(p => renderPaintingCard(p)).join('')}</div>`
          : `<div class="paintings-compact" style="padding:0">${mps.map(p => renderPaintingRow(p)).join('')}</div>`}
      </div>`;
    }).join('')}</div>`;
  } else {
    paintingsHtml = isGrid
      ? `<div class="paintings-grid">${paintings.map(p => renderPaintingCard(p)).join('')}</div>`
      : `<div class="paintings-compact">${paintings.map(p => renderPaintingRow(p)).join('')}</div>`;
  }

  return `
    <div id="toolbar">
      <input id="search-input" type="search" placeholder="Search paintings, artists…"
             value="${esc(S.search)}" oninput="handleSearch(this.value)">
      <button class="toolbar-btn icon-only${S.sort !== 'rank' ? ' active' : ''}" onclick="openSortDropdown(event,this)" title="Sort">
        ${ICONS.sort}
      </button>
      <button class="toolbar-btn icon-only" onclick="openViewDropdown(event,this)" title="View">
        ${isGrid ? ICONS.grid : ICONS.rows}
      </button>
    </div>
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
function renderMuseumsView() {
  const modeLabels = { alpha: 'By Museum', city: 'By City', country: 'By Country', continent: 'By Continent' };
  const toolbar = `<div id="toolbar">
    <button class="toolbar-btn${S.museumsMode !== 'alpha' ? ' active' : ''}"
            onclick="openMuseumsViewDropdown(event,this)" title="Group by">
      ${modeLabels[S.museumsMode]} ${ICONS.chevron}
    </button>
  </div>`;
  if (S.museumsMode === 'city')      return toolbar + renderMuseumsCity();
  if (S.museumsMode === 'country')   return toolbar + renderMuseumsCountry();
  if (S.museumsMode === 'continent') return toolbar + renderMuseumsContinent();
  return toolbar + renderMuseumsAlpha();
}

function renderMuseumBlock(name, paintings) {
  const isOpen = S.expandedMuseums.has(name);
  const mc  = checkedCount(paintings.map(p => p.id));
  const mt  = paintings.length;
  const pct = mt ? Math.round(mc / mt * 100) : 0;
  const body = isOpen ? `<div class="museum-body">
    <div class="museum-mini-bar"><div class="museum-mini-fill" style="width:${pct}%"></div></div>
    ${paintings.sort((a,b)=>(a.rank||9999)-(b.rank||9999)).map(p => renderPaintingRow(p)).join('')}
    <div class="add-painting-row">
      <button class="add-painting-btn" onclick="openAddPainting('${esc(name).replace(/'/g, "\\'")}')">
        <div class="add-painting-thumb">${ICONS.plus}</div>
        <span>Add painting</span>
      </button>
    </div>
  </div>` : '';
  return `<div class="museum-section" style="margin:0 0 6px">
    <div class="museum-header${isOpen ? ' open' : ''}" onclick="toggleMuseum('${esc(name).replace(/'/g, "\\'")}')" style="padding:8px 12px">
      <div class="museum-info"><div class="museum-name" style="font-size:.85rem">${esc(name)}</div></div>
      <div class="museum-counter"><div class="mc-nums">${mc}/${mt}</div><div class="mc-label">seen</div></div>
      <div class="museum-chevron">${ICONS.chevron}</div>
    </div>
    ${body}
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
  return Object.entries(museums).sort(([a], [b]) => a.localeCompare(b)).map(([name, m]) => {
    const checked = checkedCount(m.paintings.map(x => x.id));
    const total   = m.paintings.length;
    const pct     = total ? Math.round(checked / total * 100) : 0;
    const isOpen  = S.expandedMuseums.has(name);
    const icon    = flagFor[m.country] || '🖼️';
    const body = isOpen ? `<div class="museum-body">
      <div class="museum-mini-bar"><div class="museum-mini-fill" style="width:${pct}%"></div></div>
      ${m.paintings.sort((a,b)=>(a.rank||9999)-(b.rank||9999)).map(p => renderPaintingRow(p)).join('')}
      <div class="add-painting-row">
        <button class="add-painting-btn" onclick="openAddPainting('${esc(name).replace(/'/g, "\\'")}')">
          <div class="add-painting-thumb">${ICONS.plus}</div>
          <span>Add painting</span>
        </button>
      </div>
    </div>` : '';
    return `<div class="museum-section">
      <div class="museum-header${isOpen ? ' open' : ''}" onclick="toggleMuseum('${esc(name).replace(/'/g, "\\'")}')" >
        <div class="museum-icon">${icon}</div>
        <div class="museum-info">
          <div class="museum-name">${esc(name)}</div>
          <div class="museum-location">${esc(m.city)}, ${esc(m.country)}</div>
        </div>
        <div class="museum-counter"><div class="mc-nums">${checked}/${total}</div><div class="mc-label">seen</div></div>
        <div class="museum-chevron">${ICONS.chevron}</div>
      </div>
      ${body}
    </div>`;
  }).join('');
}

function renderMuseumsCity() {
  const cities = {};
  scopedPaintings().forEach(p => {
    const { city, museum } = p.location;
    if (!cities[city]) cities[city] = {};
    if (!cities[city][museum]) cities[city][museum] = [];
    cities[city][museum].push(p);
  });
  return Object.keys(cities).sort().map(city => {
    const allPs   = Object.values(cities[city]).flat();
    const checked = checkedCount(allPs.map(p => p.id));
    const total   = allPs.length;
    return `<div class="loc-section">
      <div class="loc-header">
        <span class="loc-name">${esc(city)}</span>
        <span class="loc-stat">${checked}/${total} seen</span>
      </div>
      ${Object.keys(cities[city]).sort().map(m => renderMuseumBlock(m, cities[city][m])).join('')}
    </div>`;
  }).join('');
}

function renderMuseumsCountry() {
  const countries = {};
  scopedPaintings().forEach(p => {
    const { country, city, museum } = p.location;
    if (!countries[country]) countries[country] = {};
    if (!countries[country][city]) countries[country][city] = {};
    if (!countries[country][city][museum]) countries[country][city][museum] = [];
    countries[country][city][museum].push(p);
  });
  return Object.keys(countries).sort().map(country => {
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
        <span class="loc-group-name">${esc(country)}</span>
        <span class="loc-group-stat">${checked}/${total} seen</span>
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
  return Object.keys(tree).sort().map(continent => {
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
        <div class="continent-stat">${cC}/${cPs.length} seen</div>
        <div class="continent-chevron">${ICONS.chevron}</div>
      </div>
      ${cOpen ? `<div class="continent-body">${countriesHtml}</div>` : ''}
    </div>`;
  }).join('');
}

/* ── Stats View ─────────────────────────────────────────────────────────── */
function renderStatsView() {
  const all   = scopedPaintings();
  const total = all.length;
  const done  = globalChecked();
  const pct   = total ? Math.round(done / total * 100) : 0;

  const continents = [...new Set(all.map(p => p.location.continent))].sort();
  const contHtml = continents.map(c => {
    const cps = all.filter(p => p.location.continent === c);
    const cc  = checkedCount(cps.map(p => p.id));
    const cp  = cps.length ? Math.round(cc / cps.length * 100) : 0;
    return `<div class="continent-progress">
      <div class="cp-header"><span class="cp-name">${esc(c)}</span><span class="cp-stat">${cc}/${cps.length} (${cp}%)</span></div>
      <div class="cp-bar"><div class="cp-fill" style="width:${cp}%"></div></div>
    </div>`;
  }).join('');

  const museums = {};
  all.forEach(p => {
    const k = p.location.museum;
    if (!museums[k]) museums[k] = { total: 0, checked: 0 };
    museums[k].total++;
    if (S.checked[String(p.id)]) museums[k].checked++;
  });
  const museumHtml = Object.entries(museums)
    .sort(([,a],[,b]) => b.checked - a.checked || 0)
    .slice(0, 8)
    .map(([name, m]) => {
      const mp = m.total ? Math.round(m.checked/m.total*100) : 0;
      return `<div class="continent-progress">
        <div class="cp-header"><span class="cp-name" style="font-size:.8rem">${esc(name)}</span><span class="cp-stat">${m.checked}/${m.total}</span></div>
        <div class="cp-bar"><div class="cp-fill" style="width:${mp}%"></div></div>
      </div>`;
    }).join('');

  return `
    <div class="stats-back-row">
      <button class="detail-back-btn" onclick="closeStats()">${ICONS.back} Back</button>
    </div>
    <div class="stats-grid">
      <div class="stat-card"><div class="stat-num">${done}</div><div class="stat-label">Paintings Seen</div></div>
      <div class="stat-card"><div class="stat-num">${total}</div><div class="stat-label">Total in List</div></div>
      <div class="stat-card"><div class="stat-num">${pct}%</div><div class="stat-label">Complete</div></div>
      <div class="stat-card"><div class="stat-num">${Object.keys(museums).length}</div><div class="stat-label">Museums</div></div>
    </div>
    <div class="section-label">Progress by Continent</div>
    ${contHtml}
    <div class="section-label">Top Museums</div>
    ${museumHtml}
  `;
}

/* ── Collection View ────────────────────────────────────────────────────── */
function renderCollectionView() {
  const seen = scopedPaintings().filter(p => S.checked[String(p.id)]);
  if (seen.length === 0) {
    return `<div class="empty-state">
      <div class="empty-icon">🖼️</div>
      <p>No paintings seen yet.</p>
      <p style="font-size:.8rem;color:var(--text-faint);margin-top:8px">Mark paintings as seen in the Paintings tab.</p>
    </div>`;
  }
  seen.sort((a, b) => (a.rank || 9999) - (b.rank || 9999));
  const mode = S.collectionMode;

  const toggleBtns = `
    <button class="toolbar-btn${mode === 'grid'    ? ' active' : ''}" onclick="setCollectionMode('grid')"    title="Grid">${ICONS.grid}</button>
    <button class="toolbar-btn${mode === 'compact' ? ' active' : ''}" onclick="setCollectionMode('compact')" title="List">${ICONS.rows}</button>
    <button class="toolbar-btn${mode === 'gallery' ? ' active' : ''}" onclick="setCollectionMode('gallery')" title="Gallery">${ICONS.frame}</button>`;

  const header = `<div class="collection-header">
    <span class="collection-count">${seen.length} of ${allPaintings().length} paintings seen</span>
    <div style="display:flex;gap:6px">${toggleBtns}</div>
  </div>`;

  if (mode === 'gallery') {
    return header + `<div class="gallery-view">${seen.map(p => {
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

  return header + (mode === 'compact'
    ? `<div class="paintings-compact">${seen.map(p => renderPaintingRow(p)).join('')}</div>`
    : `<div class="paintings-grid">${seen.map(p => renderPaintingCard(p)).join('')}</div>`);
}

function setCollectionMode(mode) {
  S.collectionMode = mode;
  save();
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
    document.querySelectorAll('.nav-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.view === S.view);
    });
    const settingsBtn = document.getElementById('settings-btn');
    if (settingsBtn) settingsBtn.classList.toggle('active', S.view === 'settings');
    const counterEl = document.getElementById('global-counter');
    if (counterEl) counterEl.classList.toggle('active', S.view === 'stats');
    if (S.view === 'list')            main.innerHTML = renderListView();
    else if (S.view === 'museums')    main.innerHTML = renderMuseumsView();
    else if (S.view === 'collection') main.innerHTML = renderCollectionView();
    else if (S.view === 'stats')      main.innerHTML = renderStatsView();
    else if (S.view === 'settings')   main.innerHTML = renderSettingsView();
    // stats and settings are not in the bottom nav; don't highlight any nav btn for them
  } catch (err) {
    console.error('Paint Chips render error:', err);
    const main = document.getElementById('main');
    if (main) main.innerHTML =
      `<div class="empty-state"><div class="empty-icon">⚠️</div><p>Error: ${err.message}</p></div>`;
  }
}

/* ── Detail Modal ───────────────────────────────────────────────────────── */
function openDetail(id) {
  const key = String(id);
  const p   = allPaintings().find(p => String(p.id) === key);
  if (!p) return;

  closeDetail();

  const isChecked = !!S.checked[key];
  const photos    = S.photos[key] || [];

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
        <button class="detail-back-btn" onclick="closeDetail()">${ICONS.back} Back</button>
        <button class="detail-collection-btn${isChecked ? ' visible' : ''}" id="detail-collection-btn"
                onclick="showInCollection()">
          ${ICONS.bookmark}<span>Collection</span>
        </button>
        <button class="detail-seen-btn${isChecked ? ' checked' : ''}" id="detail-seen-btn"
                onclick="detailToggleCheck('${key}')">
          ${isChecked ? ICONS.check + '<span>Seen</span>' : '<span>Mark Seen</span>'}
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

        ${(p.medium || p.dimensions || p.movement) ? `<div class="detail-specs">
          ${p.medium     ? `<div class="detail-spec-item"><span>Medium</span><span>${esc(p.medium)}</span></div>` : ''}
          ${p.dimensions ? `<div class="detail-spec-item"><span>Size</span><span>${esc(formatDimensions(p.dimensions))}</span></div>` : ''}
          ${p.movement   ? `<div class="detail-spec-item detail-spec-movement" onclick="openMovementPopup('${p.movement}')"><span>Movement</span><span class="movement-tag">${esc(p.movement)} ${ICONS.info}</span></div>` : ''}
        </div>` : ''}

        ${p.description ? `<p class="detail-description">${esc(p.description)}</p>` : ''}

        <div class="detail-photos-section">
          <div class="detail-section-label">Your Photos</div>
          ${photoGridHtml}
          <label style="cursor:pointer;display:block;margin-top:6px">
            <input type="file" accept="image/*" capture="environment" class="hidden"
                   onchange="handlePhotoUpload(event,'${key}')">
            <div class="add-photo-btn">${ICONS.camera} Add your photo</div>
          </label>
        </div>
      </div>
    </div>
  `;

  overlay.addEventListener('click', e => { if (e.target === overlay) closeDetail(); });
  document.body.appendChild(overlay);

  // Prevent body scroll while modal is open
  document.body.style.overflow = 'hidden';
}

function closeDetail() {
  const el = document.getElementById('detail-overlay');
  if (el) el.remove();
  document.body.style.overflow = '';
}

function detailToggleCheck(id) {
  const key = String(id);
  S.checked[key] = !S.checked[key];
  if (!S.checked[key]) delete S.checked[key];
  save();
  render();

  const isChecked = !!S.checked[key];
  const btn = document.getElementById('detail-seen-btn');
  if (btn) {
    btn.className = 'detail-seen-btn' + (isChecked ? ' checked' : '');
    btn.innerHTML = isChecked
      ? ICONS.check + '<span>Seen</span>'
      : '<span>Mark Seen</span>';
  }
  const colBtn = document.getElementById('detail-collection-btn');
  if (colBtn) colBtn.className = 'detail-collection-btn' + (isChecked ? ' visible' : '');
}

function showInCollection() {
  closeDetail();
  setView('collection');
}

/* ── Inline check toggle (from list row, doesn't open modal) ─────────────── */
function rowToggleCheck(e, id) {
  e.stopPropagation();
  const key = String(id);
  S.checked[key] = !S.checked[key];
  if (!S.checked[key]) delete S.checked[key];
  save();
  render();
}

/* ── Photo handling ──────────────────────────────────────────────────────── */
function handlePhotoUpload(e, id) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    const key = String(id);
    if (!S.photos[key]) S.photos[key] = [];
    S.photos[key].push(ev.target.result);
    S.checked[key] = true;
    save();
    render();
    // Refresh the detail modal
    const overlay = document.getElementById('detail-overlay');
    if (overlay && overlay.dataset.paintingId === key) {
      openDetail(id);
    }
  };
  reader.readAsDataURL(file);
}

function deletePhoto(id, index) {
  const key = String(id);
  if (S.photos[key]) {
    S.photos[key].splice(index, 1);
    if (!S.photos[key].length) delete S.photos[key];
    save();
    render();
    const overlay = document.getElementById('detail-overlay');
    if (overlay && overlay.dataset.paintingId === key) openDetail(id);
  }
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
  S.view = v;
  save();
  render();
  window.scrollTo(0, 0);
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
    { key: 'rank',     label: 'Rank' },
    { key: 'artist',   label: 'Artist' },
    { key: 'year',     label: 'Year' },
    { key: 'title',    label: 'Title' },
    { key: 'museum',   label: 'Museum' },
    { key: 'movement', label: 'Movement' },
  ];
  const rect = btn.getBoundingClientRect();
  const drop = document.createElement('div');
  drop.className = 'toolbar-drop';
  drop.id = 'toolbar-drop';
  drop.style.cssText = `top:${rect.bottom + 6}px;right:${window.innerWidth - rect.right}px`;
  drop.innerHTML = opts.map(o =>
    `<button class="drop-item${S.sort === o.key ? ' active' : ''}"
             onclick="setSort('${o.key}');closeDrop()">
       ${S.sort === o.key ? ICONS.check : '<span class="drop-spacer"></span>'} ${o.label}
     </button>`
  ).join('');
  document.body.appendChild(drop);
  document.addEventListener('click', closeDrop, { once: true });
}

function openViewDropdown(e, btn) {
  e.stopPropagation();
  const wasOpen = !!document.getElementById('toolbar-drop');
  closeDrop();
  if (wasOpen) return;
  const opts = [
    { key: 'grid',    label: 'Grid',    icon: ICONS.grid },
    { key: 'compact', label: 'List',    icon: ICONS.rows },
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
  const opts = [
    { key: 'alpha',     label: 'By Museum' },
    { key: 'city',      label: 'By City' },
    { key: 'country',   label: 'By Country' },
    { key: 'continent', label: 'By Continent' },
  ];
  const rect = btn.getBoundingClientRect();
  const drop = document.createElement('div');
  drop.className = 'toolbar-drop';
  drop.id = 'toolbar-drop';
  drop.style.cssText = `top:${rect.bottom + 6}px;left:${rect.left}px`;
  drop.innerHTML = opts.map(o =>
    `<button class="drop-item${S.museumsMode === o.key ? ' active' : ''}"
             onclick="setMuseumsMode('${o.key}');closeDrop()">
       ${S.museumsMode === o.key ? ICONS.check : '<span class="drop-spacer"></span>'} ${o.label}
     </button>`
  ).join('');
  document.body.appendChild(drop);
  document.addEventListener('click', closeDrop, { once: true });
}

function closeDrop() {
  const d = document.getElementById('toolbar-drop');
  if (d) d.remove();
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

function openMovementPopup(movementKey) {
  if (typeof MOVEMENTS === 'undefined' || !MOVEMENTS[movementKey]) return;
  const m = MOVEMENTS[movementKey];
  const paintings = allPaintings().filter(p => p.movement === movementKey);

  const thumbs = paintings.map(p => {
    const img = p.imageUrl
      ? `<img src="${p.imageUrl}" alt="${esc(p.title)}" loading="lazy"
             onerror="this.outerHTML='<div class=row-thumb-placeholder>🎨</div>'">`
      : `<div class="row-thumb-placeholder">🎨</div>`;
    return `<div class="mv-popup-painting" onclick="closeMovementPopup();openDetail('${String(p.id)}')">
      <div class="mv-popup-thumb">${img}</div>
      <div class="mv-popup-title">${esc(p.title)}</div>
      <div class="mv-popup-artist">${esc(p.artist)}</div>
    </div>`;
  }).join('');

  const traits = m.traits.map(t => `<li>${esc(t)}</li>`).join('');
  const artists = m.artists.map(a => `<span class="mv-artist-chip">${esc(a)}</span>`).join('');

  const overlay = document.createElement('div');
  overlay.className = 'detail-overlay';
  overlay.id        = 'movement-overlay';
  overlay.innerHTML = `
    <div class="detail-sheet movement-sheet" id="movement-sheet">
      <div class="detail-nav">
        <button class="detail-back-btn" onclick="closeMovementPopup()">${ICONS.back} Back</button>
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
  overlay.addEventListener('click', e => { if (e.target === overlay) closeMovementPopup(); });
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
}

function closeMovementPopup() {
  const el = document.getElementById('movement-overlay');
  if (el) el.remove();
  document.body.style.overflow = '';
}

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
    return `<div class="mv-popup-painting" onclick="closeArtistPopup();openDetail('${String(p.id)}')">
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
      onclick="closeArtistPopup();openMovementPopup('${k.replace(/'/g,"\\'")}')">
      ${esc(k)}${mv ? `<span style="color:var(--text-faint);font-size:.65rem"> · ${esc(mv.era)}</span>` : ''}
    </span>`;
  }).join('');

  const overlay = document.createElement('div');
  overlay.className = 'detail-overlay';
  overlay.id        = 'artist-overlay';
  overlay.innerHTML = `
    <div class="detail-sheet movement-sheet" id="artist-sheet">
      <div class="detail-nav">
        <button class="detail-back-btn" onclick="closeArtistPopup()">${ICONS.back} Back</button>
      </div>
      <div class="mv-popup-body">
        <div class="artist-popup-header">
          ${portraitHtml}
          <div class="artist-popup-meta">
            <h2 class="mv-popup-name" style="margin-bottom:4px">${esc(artistName)}</h2>
            ${metaLine ? `<div class="mv-popup-era">${metaLine}</div>` : ''}
          </div>
        </div>
        ${info ? `<p class="mv-popup-summary">${esc(info.bio)}</p>` : '<div style="height:12px"></div>'}
        ${movementChips ? `<div class="mv-section-label">Movement${movementNames.length > 1 ? 's' : ''}</div>
        <div class="mv-artists">${movementChips}</div>` : ''}
        <div class="mv-section-label" style="margin-top:20px">Works in this collection (${paintings.length})</div>
        <div class="mv-popup-paintings">${thumbs}</div>
      </div>
    </div>
  `;
  overlay.addEventListener('click', e => { if (e.target === overlay) closeArtistPopup(); });
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
}

function closeArtistPopup() {
  const el = document.getElementById('artist-overlay');
  if (el) el.remove();
  document.body.style.overflow = '';
}

/* ── Museum popup ────────────────────────────────────────────────────────── */
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
    return `<div class="mv-popup-painting" onclick="closeMuseumPopup();openDetail('${String(p.id)}')">
      <div class="mv-popup-thumb">${img}</div>
      <div class="mv-popup-title">${esc(p.title)}</div>
      <div class="mv-popup-artist">${esc(p.artist)}</div>
    </div>`;
  }).join('');

  const overlay = document.createElement('div');
  overlay.className = 'detail-overlay';
  overlay.id        = 'museum-overlay';
  overlay.innerHTML = `
    <div class="detail-sheet movement-sheet" id="museum-sheet">
      <div class="detail-nav">
        <button class="detail-back-btn" onclick="closeMuseumPopup()">${ICONS.back} Back</button>
      </div>
      ${photoHtml}
      <div class="mv-popup-body">
        <div class="mv-popup-era">${flag} ${esc(loc.city)}, ${esc(loc.country)}</div>
        <h2 class="mv-popup-name">${esc(museumName)}</h2>
        <div class="museum-popup-stats">
          <span class="museum-popup-stat">${mc} of ${paintings.length} seen</span>
          <div class="museum-popup-bar"><div class="museum-popup-fill" style="width:${paintings.length ? Math.round(mc/paintings.length*100) : 0}%"></div></div>
        </div>
        ${info ? `<p class="mv-popup-summary" style="margin-top:14px;border-bottom:none;padding-bottom:0">${esc(info.blurb)}</p>` : ''}
        <div class="mv-section-label" style="margin-top:18px">Collection (${paintings.length})</div>
        <div class="mv-popup-paintings">${thumbs}</div>
      </div>
    </div>
  `;
  overlay.addEventListener('click', e => { if (e.target === overlay) closeMuseumPopup(); });
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
}

function closeMuseumPopup() {
  const el = document.getElementById('museum-overlay');
  if (el) el.remove();
  document.body.style.overflow = '';
}

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
        <div class="settings-row">
          <div class="settings-row-label">
            <div class="settings-row-name">Painting List</div>
            <div class="settings-row-sub">Which paintings appear in the list and museums tabs</div>
          </div>
          <div class="settings-toggle-group">
            <button class="settings-toggle-btn${S.scope === 'top100'   ? ' active' : ''}" onclick="setScope('top100')">Top 100</button>
            <button class="settings-toggle-btn${S.scope === 'extended' ? ' active' : ''}" onclick="setScope('extended')">All Famous</button>
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

/* ── Onboarding ──────────────────────────────────────────────────────────── */
function _obPage1HTML() {
  return `
        <div class="ob-top">
          <div class="ob-emoji">🎨</div>
          <div class="ob-brand">Paint Chips</div>
        </div>

        <div class="ob-hero">
          <div class="ob-hero-num">100</div>
          <div class="ob-hero-sub">masterpieces.<br>One lifetime.</div>
        </div>

        <div class="ob-rule"></div>

        <div class="ob-stats">
          <div class="ob-stat">
            <div class="ob-stat-num">35</div>
            <div class="ob-stat-label">museums<br>to visit</div>
          </div>
          <div class="ob-stat-divider"></div>
          <div class="ob-stat">
            <div class="ob-stat-num">21</div>
            <div class="ob-stat-label">cities across<br>2 continents</div>
          </div>
          <div class="ob-stat-divider"></div>
          <div class="ob-stat">
            <div class="ob-stat-num">12</div>
            <div class="ob-stat-label">countries<br>to reach</div>
          </div>
        </div>

        <div class="ob-rule"></div>

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

        <div class="ob-fine">No account · All data stays on your device</div>
  `;
}

function _obPage2HTML() {
  return `
        <div class="ob-top">
          <div class="ob-emoji">🎨</div>
          <div class="ob-brand">Paint Chips</div>
        </div>

        <div class="ob-p2-headline">Your collection,<br>your story.</div>

        <div class="ob-rule"></div>

        <div class="ob-features">
          <div class="ob-feature">
            <div class="ob-feature-icon">${ICONS.check}</div>
            <div class="ob-feature-text">
              <div class="ob-feature-title">Mark as Seen</div>
              <div class="ob-feature-desc">Tap any painting to check it off your list. Your progress is tracked across all 100 masterpieces and shown right in the header.</div>
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

/* ── Init ────────────────────────────────────────────────────────────────── */
function init() {
  try {
    load();

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    }

    const settingsBtn = document.getElementById('settings-btn');
    if (settingsBtn) settingsBtn.innerHTML = ICONS.gear;

    const nav = document.getElementById('bottom-nav');
    const navItems = [
      { view: 'list',       icon: ICONS.list,   label: 'Paintings' },
      { view: 'collection', icon: ICONS.frame,  label: 'Collection', special: true },
      { view: 'museums',    icon: ICONS.museum, label: 'Museums' },
    ];
    nav.innerHTML = navItems.map(n => {
      const isActive = S.view === n.view;
      const cls = `nav-btn${n.special ? ' nav-btn-collection' : ''}${isActive ? ' active' : ''}`;
      return `<button class="${cls}" data-view="${n.view}" onclick="setView('${n.view}')">${n.icon}<span>${n.label}</span></button>`;
    }).join('');

    render();

    if (!localStorage.getItem('pc_onboarded')) showOnboarding();
  } catch (err) {
    document.getElementById('main').innerHTML =
      `<div class="empty-state"><div class="empty-icon">⚠️</div><p>Error: ${err.message}</p></div>`;
    console.error('Paint Chips init error:', err);
  }
}

// Scripts are at end of <body> — DOM is ready, call init directly
init();
