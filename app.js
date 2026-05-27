/* ── State ────────────────────────────────────────────────────────────── */
const S = {
  checked: {},       // { id: true }
  photos: {},        // { id: [dataURL, ...] }
  userPaintings: [], // extra paintings added by user
  view: 'list',      // 'list' | 'museums' | 'locations' | 'stats'
  sort: 'rank',      // 'rank' | 'artist' | 'year' | 'title'
  search: '',
  filter: { continent: null, country: null, city: null, museum: null },
  expanded: new Set(),         // expanded painting details
  expandedMuseums: new Set(),  // expanded museum sections
  expandedContinents: new Set(),
  expandedCountries: new Set(),
};

/* ── Persistence ──────────────────────────────────────────────────────── */
function save() {
  const snap = {
    checked: S.checked,
    photos: S.photos,
    userPaintings: S.userPaintings,
    view: S.view,
    sort: S.sort,
    filter: S.filter,
  };
  try { localStorage.setItem('pc_state', JSON.stringify(snap)); } catch (_) {}
}

function load() {
  try {
    const raw = localStorage.getItem('pc_state');
    if (!raw) return;
    const snap = JSON.parse(raw);
    Object.assign(S, snap);
    S.expanded = new Set();
    S.expandedMuseums = new Set();
    S.expandedContinents = new Set();
    S.expandedCountries = new Set();
  } catch (_) {}
}

/* ── All paintings (built-in + user) ──────────────────────────────────── */
function allPaintings() {
  return [...PAINTINGS, ...S.userPaintings];
}

/* ── Counters ──────────────────────────────────────────────────────────── */
function checkedCount(ids) {
  return ids.filter(id => S.checked[id]).length;
}

function globalChecked() { return Object.values(S.checked).filter(Boolean).length; }
function globalTotal() { return allPaintings().length; }

function museumTotal(name) {
  return allPaintings().filter(p => p.location.museum === name).length;
}
function museumChecked(name) {
  return allPaintings().filter(p => p.location.museum === name && S.checked[p.id]).length;
}

/* ── Sorting & Filtering ──────────────────────────────────────────────── */
function filteredSorted() {
  let list = allPaintings();

  // filter
  if (S.filter.museum) list = list.filter(p => p.location.museum === S.filter.museum);
  else if (S.filter.city) list = list.filter(p => p.location.city === S.filter.city);
  else if (S.filter.country) list = list.filter(p => p.location.country === S.filter.country);
  else if (S.filter.continent) list = list.filter(p => p.location.continent === S.filter.continent);

  // search
  if (S.search) {
    const q = S.search.toLowerCase();
    list = list.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.artist.toLowerCase().includes(q) ||
      p.location.museum.toLowerCase().includes(q) ||
      p.location.country.toLowerCase().includes(q)
    );
  }

  // sort
  list.sort((a, b) => {
    if (S.sort === 'rank') return (a.rank || 999) - (b.rank || 999);
    if (S.sort === 'artist') return a.artist.localeCompare(b.artist);
    if (S.sort === 'year') return parseInt(a.year) - parseInt(b.year);
    if (S.sort === 'title') return a.title.localeCompare(b.title);
    return 0;
  });

  return list;
}

/* ── SVG Icons ─────────────────────────────────────────────────────────── */
const ICONS = {
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>`,
  camera: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  list: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
  museum: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 9 12 2 21 9"/><line x1="12" y1="2" x2="12" y2="22"/><rect x="3" y="9" width="4" height="13"/><rect x="17" y="9" width="4" height="13"/><line x1="3" y1="22" x2="21" y2="22"/></svg>`,
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  stats: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  sort: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="6" y1="12" x2="18" y2="12"/><line x1="9" y1="18" x2="15" y2="18"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
};

/* ── Rendering helpers ──────────────────────────────────────────────────── */
function thumb(p) {
  if (p.imageUrl) {
    return `<img class="painting-thumb" src="${p.imageUrl}" alt="${esc(p.title)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
            <div class="painting-thumb-placeholder" style="display:none">🎨</div>`;
  }
  return `<div class="painting-thumb-placeholder">🎨</div>`;
}

function esc(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ── Painting Card ──────────────────────────────────────────────────────── */
function renderPainting(p, compact = false) {
  const isChecked = !!S.checked[p.id];
  const isExpanded = S.expanded.has(p.id);
  const isUser = !!p.isUser;
  const photos = S.photos[p.id] || [];

  const rankLabel = p.rank <= 100
    ? `<div class="painting-rank">#${p.rank}</div>`
    : `<div class="painting-rank" style="color:var(--text-faint);font-size:.65rem">+</div>`;

  let detail = '';
  if (isExpanded) {
    const imgHtml = p.imageUrl
      ? `<img class="painting-detail-img" src="${p.imageUrl}" alt="${esc(p.title)}" loading="lazy">`
      : '';

    const photoGridHtml = photos.length
      ? `<div class="photo-grid">${photos.map((src, i) =>
          `<div class="photo-thumb-wrap">
             <img src="${src}" alt="Your photo" onclick="openPhotoLightbox('${p.id}',${i})">
             <button class="photo-delete" onclick="deletePhoto('${p.id}',${i})" title="Remove photo">✕</button>
           </div>`
        ).join('')}</div>`
      : '';

    detail = `<div class="painting-detail">
      ${imgHtml}
      <dl class="detail-info">
        <dt>Artist</dt><dd>${esc(p.artist)}</dd>
        <dt>Year</dt><dd>${esc(p.year)}</dd>
        ${p.medium ? `<dt>Medium</dt><dd>${esc(p.medium)}</dd>` : ''}
        ${p.dimensions ? `<dt>Size</dt><dd>${esc(p.dimensions)}</dd>` : ''}
        <dt>Museum</dt><dd>${esc(p.location.museum)}</dd>
        <dt>City</dt><dd>${esc(p.location.city)}, ${esc(p.location.country)}</dd>
      </dl>
      <p class="painting-description">${esc(p.description || '')}</p>
      <div class="photo-section">
        ${photoGridHtml}
        <label style="cursor:pointer;width:100%">
          <input type="file" accept="image/*" capture="environment" class="hidden" onchange="handlePhotoUpload(event,'${p.id}')">
          <div class="add-photo-btn">${ICONS.camera} Add your photo</div>
        </label>
      </div>
    </div>`;
  }

  return `<div class="painting-item${isChecked?' checked':''}${compact?' compact':''}" id="pi-${p.id}">
    <div class="painting-header" onclick="toggleExpand('${p.id}')">
      ${rankLabel}
      ${thumb(p)}
      <div class="painting-meta">
        <div class="painting-title">${esc(p.title)}${isUser ? '<span class="user-badge">added</span>' : ''}</div>
        <div class="painting-artist">${esc(p.artist)} · ${esc(p.year)}</div>
        <div class="painting-location-tag">${esc(p.location.museum)} · ${esc(p.location.city)}</div>
      </div>
      <div class="painting-check${isChecked?' checked':''}" onclick="toggleCheck(event,'${p.id}')" title="Mark as seen">
        ${isChecked ? ICONS.check : ''}
      </div>
    </div>
    ${detail}
  </div>`;
}

/* ── Views ──────────────────────────────────────────────────────────────── */
function renderListView() {
  const paintings = filteredSorted();

  const filterChips = buildFilterChips();

  const sortLabels = { rank: 'Rank', artist: 'Artist', year: 'Year', title: 'Title' };

  return `
    <div id="toolbar">
      <input id="search-input" type="search" placeholder="Search paintings, artists…" value="${esc(S.search)}" oninput="handleSearch(this.value)">
      <button class="toolbar-btn${S.sort!=='rank'?' active':''}" onclick="cycleSortMenu()">
        ${ICONS.sort} ${sortLabels[S.sort]}
      </button>
    </div>
    ${filterChips}
    ${paintings.length === 0
      ? `<div class="empty-state"><div class="empty-icon">🖼</div><p>No paintings match your search.</p></div>`
      : paintings.map(p => renderPainting(p)).join('')
    }
  `;
}

function buildFilterChips() {
  const chips = [];
  if (S.filter.continent) {
    chips.push(`<span class="filter-chip active" onclick="clearFilter('continent')">${S.filter.continent} <span class="remove">✕</span></span>`);
  }
  if (S.filter.country) {
    chips.push(`<span class="filter-chip active" onclick="clearFilter('country')">${S.filter.country} <span class="remove">✕</span></span>`);
  }
  if (S.filter.city) {
    chips.push(`<span class="filter-chip active" onclick="clearFilter('city')">${S.filter.city} <span class="remove">✕</span></span>`);
  }
  if (S.filter.museum) {
    chips.push(`<span class="filter-chip active" onclick="clearFilter('museum')">${S.filter.museum} <span class="remove">✕</span></span>`);
  }

  if (chips.length === 0) return '';
  return `<div id="filter-bar">${chips.join('')}</div>`;
}

function renderMuseumsView() {
  // Group all paintings by museum
  const museums = {};
  allPaintings().forEach(p => {
    const key = p.location.museum;
    if (!museums[key]) museums[key] = {
      name: key,
      ...p.location,
      paintings: []
    };
    museums[key].paintings.push(p);
  });

  // Sort museums by checked% desc, then name
  const sorted = Object.values(museums).sort((a, b) => {
    const pa = checkedCount(a.paintings.map(x=>x.id)) / a.paintings.length;
    const pb = checkedCount(b.paintings.map(x=>x.id)) / b.paintings.length;
    if (pb !== pa) return pb - pa;
    return a.name.localeCompare(b.name);
  });

  const museumIcons = {
    'France': '🗼', 'Italy': '🏛️', 'USA': '🗽', 'Netherlands': '🌷',
    'Spain': '🌹', 'United Kingdom': '💂', 'Russia': '🪆', 'Norway': '🏔️',
    'Austria': '🎼', 'Germany': '🏰', 'Vatican City': '✝️', 'Mexico': '🌮',
  };

  return sorted.map(m => {
    const checked = checkedCount(m.paintings.map(x=>x.id));
    const total = m.paintings.length;
    const pct = total ? Math.round(checked / total * 100) : 0;
    const isOpen = S.expandedMuseums.has(m.name);
    const icon = museumIcons[m.country] || '🖼️';

    const bodyHtml = isOpen
      ? `<div class="museum-body">
           <div class="museum-mini-bar"><div class="museum-mini-fill" style="width:${pct}%"></div></div>
           ${m.paintings.sort((a,b)=>(a.rank||999)-(b.rank||999)).map(p=>renderPainting(p, true)).join('')}
           <div class="add-painting-row">
             <button class="add-painting-btn" onclick="openAddPainting('${esc(m.name)}')">
               ${ICONS.plus} Add painting to ${esc(m.name)}
             </button>
           </div>
         </div>`
      : '';

    return `<div class="museum-section">
      <div class="museum-header${isOpen?' open':''}" onclick="toggleMuseum('${esc(m.name)}')">
        <div class="museum-icon">${icon}</div>
        <div class="museum-info">
          <div class="museum-name">${esc(m.name)}</div>
          <div class="museum-location">${esc(m.city)}, ${esc(m.country)}</div>
        </div>
        <div class="museum-counter">
          <div class="mc-nums">${checked}/${total}</div>
          <div class="mc-label">seen</div>
        </div>
        <div class="museum-chevron">${ICONS.chevron}</div>
      </div>
      ${bodyHtml}
    </div>`;
  }).join('');
}

function renderLocationsView() {
  // Build hierarchy
  const tree = {};
  allPaintings().forEach(p => {
    const { continent, country, city, museum } = p.location;
    if (!tree[continent]) tree[continent] = {};
    if (!tree[continent][country]) tree[continent][country] = {};
    if (!tree[continent][country][city]) tree[continent][country][city] = {};
    if (!tree[continent][country][city][museum]) tree[continent][country][city][museum] = [];
    tree[continent][country][city][museum].push(p);
  });

  const continentFlags = {
    'Europe': '🌍',
    'North America': '🌎',
    'South America': '🌎',
    'Asia': '🌏',
    'Africa': '🌍',
    'Oceania': '🌏',
  };

  return Object.keys(tree).sort().map(continent => {
    const cOpen = S.expandedContinents.has(continent);
    const cPaintings = allPaintings().filter(p=>p.location.continent===continent);
    const cChecked = checkedCount(cPaintings.map(p=>p.id));
    const cTotal = cPaintings.length;

    const countryHtml = Object.keys(tree[continent]).sort().map(country => {
      const key = `${continent}||${country}`;
      const koOpen = S.expandedCountries.has(key);
      const koPaintings = cPaintings.filter(p=>p.location.country===country);
      const koChecked = checkedCount(koPaintings.map(p=>p.id));
      const koTotal = koPaintings.length;

      const cityHtml = Object.keys(tree[continent][country]).sort().map(city => {
        return `<div class="city-section">
          <div class="city-label">${esc(city)}</div>
          ${Object.keys(tree[continent][country][city]).sort().map(museum => {
            const mps = tree[continent][country][city][museum];
            const isOpen = S.expandedMuseums.has(museum);
            const mc = checkedCount(mps.map(p=>p.id));
            const mt = mps.length;
            const pct = mt ? Math.round(mc/mt*100) : 0;
            const bodyHtml = isOpen
              ? `<div class="museum-body">
                   <div class="museum-mini-bar"><div class="museum-mini-fill" style="width:${pct}%"></div></div>
                   ${mps.sort((a,b)=>(a.rank||999)-(b.rank||999)).map(p=>renderPainting(p,true)).join('')}
                   <div class="add-painting-row">
                     <button class="add-painting-btn" onclick="openAddPainting('${esc(museum)}')">
                       ${ICONS.plus} Add painting
                     </button>
                   </div>
                 </div>` : '';
            return `<div class="museum-section" style="margin:0 0 6px">
              <div class="museum-header${isOpen?' open':''}" onclick="toggleMuseum('${esc(museum)}')" style="padding:8px 12px">
                <div class="museum-info">
                  <div class="museum-name" style="font-size:.85rem">${esc(museum)}</div>
                </div>
                <div class="museum-counter">
                  <div class="mc-nums">${mc}/${mt}</div>
                  <div class="mc-label">seen</div>
                </div>
                <div class="museum-chevron">${ICONS.chevron}</div>
              </div>
              ${bodyHtml}
            </div>`;
          }).join('')}
        </div>`;
      }).join('');

      const bodyHtml = koOpen ? `<div class="continent-body" style="margin:0 0 0 12px">${cityHtml}</div>` : '';

      return `<div class="country-section">
        <div class="country-header${koOpen?' open':''}" onclick="toggleCountry('${esc(continent)}','${esc(country)}')">
          <div class="country-name">${esc(country)}</div>
          <div class="country-stat">${koChecked}/${koTotal}</div>
          <div class="country-chevron">${ICONS.chevron}</div>
        </div>
        ${bodyHtml}
      </div>`;
    }).join('');

    const cBodyHtml = cOpen
      ? `<div class="continent-body">${countryHtml}</div>`
      : '';

    return `<div class="location-continent">
      <div class="continent-header${cOpen?' open':''}" onclick="toggleContinent('${esc(continent)}')">
        <span class="continent-flag">${continentFlags[continent]||'🌐'}</span>
        <div class="continent-name">${esc(continent)}</div>
        <div class="continent-stat">${cChecked}/${cTotal} seen</div>
        <div class="continent-chevron">${ICONS.chevron}</div>
      </div>
      ${cBodyHtml}
    </div>`;
  }).join('');
}

function renderStatsView() {
  const all = allPaintings();
  const total = all.length;
  const checked = globalChecked();
  const pct = total ? Math.round(checked / total * 100) : 0;

  // by continent
  const continents = [...new Set(all.map(p=>p.location.continent))].sort();
  const contHtml = continents.map(c => {
    const cps = all.filter(p=>p.location.continent===c);
    const cc = checkedCount(cps.map(p=>p.id));
    const ct = cps.length;
    const cp = ct ? Math.round(cc/ct*100) : 0;
    return `<div class="continent-progress">
      <div class="cp-header">
        <span class="cp-name">${esc(c)}</span>
        <span class="cp-stat">${cc}/${ct} (${cp}%)</span>
      </div>
      <div class="cp-bar"><div class="cp-fill" style="width:${cp}%"></div></div>
    </div>`;
  }).join('');

  // top museums
  const museums = {};
  all.forEach(p => {
    const k = p.location.museum;
    if (!museums[k]) museums[k] = { name: k, total: 0, checked: 0 };
    museums[k].total++;
    if (S.checked[p.id]) museums[k].checked++;
  });
  const topMuseums = Object.values(museums)
    .sort((a,b) => b.checked - a.checked || a.name.localeCompare(b.name))
    .slice(0, 8);

  const museumHtml = topMuseums.map(m => {
    const mp = m.total ? Math.round(m.checked/m.total*100) : 0;
    return `<div class="continent-progress">
      <div class="cp-header">
        <span class="cp-name" style="font-size:.8rem">${esc(m.name)}</span>
        <span class="cp-stat">${m.checked}/${m.total}</span>
      </div>
      <div class="cp-bar"><div class="cp-fill" style="width:${mp}%"></div></div>
    </div>`;
  }).join('');

  return `
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-num">${checked}</div>
        <div class="stat-label">Paintings Seen</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">${total}</div>
        <div class="stat-label">Total in List</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">${pct}%</div>
        <div class="stat-label">Complete</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">${Object.keys(museums).length}</div>
        <div class="stat-label">Museums</div>
      </div>
    </div>

    <div class="section-label">Progress by Continent</div>
    ${contHtml}

    <div class="section-label">Top Museums</div>
    ${museumHtml}
  `;
}

/* ── Main Render ────────────────────────────────────────────────────────── */
function render() {
  const main = document.getElementById('main');
  const checked = globalChecked();
  const total = globalTotal();

  // Header counter
  document.getElementById('counter-checked').textContent = checked;
  document.getElementById('counter-total').textContent = total;

  // Progress bar
  const pct = total ? (checked / total * 100) : 0;
  document.getElementById('global-progress-bar').style.width = pct + '%';

  // Nav active
  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.view === S.view);
  });

  // Render view
  if (S.view === 'list') main.innerHTML = renderListView();
  else if (S.view === 'museums') main.innerHTML = renderMuseumsView();
  else if (S.view === 'locations') main.innerHTML = renderLocationsView();
  else if (S.view === 'stats') main.innerHTML = renderStatsView();
}

/* ── Event Handlers ─────────────────────────────────────────────────────── */
function setView(v) {
  S.view = v;
  save();
  render();
  document.getElementById('main').scrollTop = 0;
  window.scrollTo(0, 0);
}

function toggleExpand(id) {
  const numId = typeof id === 'string' ? id : String(id);
  if (S.expanded.has(numId)) S.expanded.delete(numId);
  else S.expanded.add(numId);
  render();
  // Scroll the item into view
  setTimeout(() => {
    const el = document.getElementById(`pi-${numId}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 50);
}

function toggleCheck(e, id) {
  e.stopPropagation();
  const numId = String(id);
  S.checked[numId] = !S.checked[numId];
  if (!S.checked[numId]) delete S.checked[numId];
  save();
  // Partial re-render — just update the item
  const item = document.getElementById(`pi-${numId}`);
  if (item) {
    const isChecked = !!S.checked[numId];
    item.classList.toggle('checked', isChecked);
    const checkEl = item.querySelector('.painting-check');
    if (checkEl) {
      checkEl.classList.toggle('checked', isChecked);
      checkEl.innerHTML = isChecked ? ICONS.check : '';
    }
  }
  // Update header counter
  const c = globalChecked();
  document.getElementById('counter-checked').textContent = c;
  const total = globalTotal();
  document.getElementById('global-progress-bar').style.width = (total ? c/total*100 : 0) + '%';
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

function handleSearch(val) {
  S.search = val;
  render();
}

function cycleSortMenu() {
  const opts = ['rank', 'artist', 'year', 'title'];
  const idx = opts.indexOf(S.sort);
  S.sort = opts[(idx + 1) % opts.length];
  save();
  render();
}

function clearFilter(level) {
  if (level === 'museum') { S.filter.museum = null; }
  else if (level === 'city') { S.filter.city = null; S.filter.museum = null; }
  else if (level === 'country') { S.filter.country = null; S.filter.city = null; S.filter.museum = null; }
  else if (level === 'continent') { S.filter = { continent: null, country: null, city: null, museum: null }; }
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
    save();
    // Also mark as checked
    S.checked[key] = true;
    save();
    render();
    // Re-expand the item
    S.expanded.add(key);
    render();
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
    S.expanded.add(key);
    render();
  }
}

function openPhotoLightbox(id, index) {
  const photos = S.photos[String(id)] || [];
  if (!photos[index]) return;
  const overlay = document.createElement('div');
  overlay.className = 'photo-lightbox';
  overlay.innerHTML = `
    <img src="${photos[index]}" alt="Photo">
    <button class="photo-lightbox-close" onclick="this.parentElement.remove()">✕</button>
  `;
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
  document.body.appendChild(overlay);
}

/* ── Add Painting Modal ──────────────────────────────────────────────────── */
function openAddPainting(museumName) {
  const museum = MUSEUMS[museumName] || {};
  showModal(`
    <h2>Add Painting</h2>
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
    <select id="ap-continent">
      <option value="Europe"${museum.continent==='Europe'?' selected':''}>Europe</option>
      <option value="North America"${museum.continent==='North America'?' selected':''}>North America</option>
      <option value="South America"${museum.continent==='South America'?' selected':''}>South America</option>
      <option value="Asia"${museum.continent==='Asia'?' selected':''}>Asia</option>
      <option value="Africa"${museum.continent==='Africa'?' selected':''}>Africa</option>
      <option value="Oceania"${museum.continent==='Oceania'?' selected':''}>Oceania</option>
    </select>
    <label>Image URL (optional)</label>
    <input id="ap-img" type="url" placeholder="https://…">
    <div class="modal-actions">
      <button class="btn btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="submitAddPainting()">Add Painting</button>
    </div>
  `);
}

function submitAddPainting() {
  const title = document.getElementById('ap-title').value.trim();
  const artist = document.getElementById('ap-artist').value.trim();
  if (!title || !artist) {
    alert('Title and Artist are required.');
    return;
  }
  const newId = 'u_' + Date.now();
  const p = {
    id: newId,
    rank: 9999,
    title,
    artist,
    year: document.getElementById('ap-year').value.trim() || 'Unknown',
    description: document.getElementById('ap-desc').value.trim(),
    imageUrl: document.getElementById('ap-img').value.trim() || null,
    location: {
      museum: document.getElementById('ap-museum').value.trim() || 'Unknown',
      city: document.getElementById('ap-city').value.trim() || 'Unknown',
      country: document.getElementById('ap-country').value.trim() || 'Unknown',
      continent: document.getElementById('ap-continent').value,
    },
    isUser: true,
  };
  S.userPaintings.push(p);
  // Update MUSEUMS cache
  const key = p.location.museum;
  if (!MUSEUMS[key]) {
    MUSEUMS[key] = { name: key, ...p.location, paintings: [] };
  }
  MUSEUMS[key].paintings.push(p.id);
  save();
  closeModal();
  render();
}

/* ── Modal ───────────────────────────────────────────────────────────────── */
function showModal(html) {
  closeModal();
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.id = 'modal-overlay';
  overlay.innerHTML = `<div class="modal">${html}</div>`;
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.body.appendChild(overlay);
}

function closeModal() {
  const m = document.getElementById('modal-overlay');
  if (m) m.remove();
}

/* ── Init ────────────────────────────────────────────────────────────────── */
function init() {
  load();

  // PWA service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }

  // Build nav
  const nav = document.getElementById('bottom-nav');
  const navItems = [
    { view: 'list',      icon: ICONS.list,   label: 'Top 100' },
    { view: 'museums',   icon: ICONS.museum, label: 'Museums' },
    { view: 'locations', icon: ICONS.globe,  label: 'Map' },
    { view: 'stats',     icon: ICONS.stats,  label: 'Stats' },
  ];
  nav.innerHTML = navItems.map(n =>
    `<button class="nav-btn${S.view===n.view?' active':''}" data-view="${n.view}" onclick="setView('${n.view}')">
       ${n.icon}<span>${n.label}</span>
     </button>`
  ).join('');

  render();
}

document.addEventListener('DOMContentLoaded', init);
