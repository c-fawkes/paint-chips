# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Adding paintings

**Always use `/add-paintings` when asked to add paintings to the app.** Never add paintings to `data.js` ad-hoc. The slash command is at `.claude/commands/add-paintings.md` and enforces the correct workflow: reading current state, researching images, adding new artists and portraits, and syntax-checking before reporting.

## Git

**Never commit or push unless explicitly told to.** Make changes, describe them, and stop. Do not run `git commit` or `git push` until the user says so (e.g. "commit", "push", "commit and push").

When context usage reaches ~85%, pause and ask: "Context is at ~85% — want me to commit and push the current changes before we continue?"

## Before every commit

Update `docs/progress.md` with a brief note of what changed in this session before committing. Add to the current session's section if one already exists for today, or append a new `## Session N — YYYY-MM-DD` block at the **bottom** of the Session Progress section. One bullet per meaningful change — no need to repeat what's already in the commit message verbatim, but capture the *why* and any decisions made.

## Development

No build step. Open `index.html` directly in a browser, or serve locally:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

The service worker only activates over HTTPS or `localhost`. On any other local host/IP, offline caching won't work but the app still runs.

To force the service worker to pick up changes during development, go to DevTools → Application → Service Workers → click "Update" or "Unregister".

## Architecture

This is a no-framework, no-build vanilla JS PWA. All logic lives in three files loaded via `<script>` tags at the end of `<body>`:

- **`data.js`** — defines two globals: `PAINTINGS` (array of 100 painting objects) and `MUSEUMS` (object keyed by museum name). Loaded before `app.js`.
  > **Updated (Session 4+):** `PAINTINGS` now contains 291 objects (100 ranked + 191 `museumOnly` extras added across sessions). `data.js` also exports `ARTISTS`, `ARTIST_PORTRAITS`, `MOVEMENTS`, and `MUSEUMS_INFO` — all referenced by `app.js` for popups and bios.
- **`app.js`** — all application logic. Single global state object `S`, mutated directly and persisted to `localStorage` via `save()`/`load()`. Re-renders by calling `render()` which sets `innerHTML` on `#main`.
- **`styles.css`** — all styling. Dark museum aesthetic: near-black `#0f0e0d` background, gold `#c9a84c` accent. Uses CSS custom properties defined on `:root`.

### State model

`S` in `app.js` holds everything:
- `checked` — `{ [id]: true }` for seen paintings
- `photos` — `{ [id]: [dataURL, ...] }` for user-uploaded photos (stored as base64 in localStorage)
  > **Updated (Session 23):** Photos are now stored in **IndexedDB** (`beheld-db`), not localStorage. `S.photos` is still the in-memory cache but `save()` no longer serialises it. Photos are loaded from IDB in `init()`.
- `userPaintings` — array of paintings the user added manually
- `view` — active tab: `'list' | 'museums' | 'collection' | 'stats'`
  > **Updated:** Settings is now a separate view (`'settings'`), accessible via the gear icon.
- `listMode / collectionMode` — grid vs compact display toggles
  > **Updated:** `collectionMode` has three values: `'grid' | 'compact' | 'gallery'`. Default is `'gallery'`.
- `filter` — `{ continent, country, city, museum }` cascade (lower levels are cleared when a higher level is cleared)

Additional persisted state fields added since initial build:
- `notes` — `{ [id]: string }` — user notes per painting
- `dateCollected` — `{ [id]: 'YYYY-MM-DD' | 'unknown' }` — date each painting was collected
- `favorites` — `{ [id]: true }` — hearted paintings
- `visitedMuseums` — `{ [museumName]: true }` — museums marked as visited
- `hiddenFromCollection` — `{ [id]: true }` — paintings hidden from the collection tab
- `scope` — `'top100' | 'plus10' | 'plus30'` — which paintings are active everywhere
- `sort` — active sort for the Paintings tab
- `search` / `collectionSearch` / `museumsSearch` — per-tab search strings (search strings are NOT persisted; cleared on reload)
- `collectionSort` / `collectionFilter` / `collectionMode` — collection tab state
- `museumsMode` — `'alpha' | 'city' | 'country'` (continent view removed in Session 30)
- `units` — `'metric' | 'imperial'`

The Set fields (`expandedMuseums`, `expandedContinents`, `expandedCountries`) track accordion open state and are intentionally **not** persisted to localStorage (they reset on reload).
> **Updated:** Many more non-persisted Sets exist: `expandedListMuseums`, `expandedListArtists`, `expandedMovements`, `expandedCollMuseums`, `expandedCollArtists`, `expandedCollMovements`, `expandedStatsMuseums`.

### Rendering pattern

`render()` reads `S.view` and calls the matching `render*View()` function, which returns an HTML string set via `innerHTML`. There is no virtual DOM or diffing — every state change re-renders the whole `#main`. Event handlers are attached inline as `onclick="fnName()"` strings pointing to globals. The detail modal is appended to `<body>` as a separate element, not inside `#main`.

### Four tabs

| Tab | Function | Notes |
|---|---|---|
| Top 100 | `renderListView()` | Sortable (rank/artist/year/title/museum), searchable, filterable via chips |
| Museums | `renderMuseumsView()` | 4 sub-modes: alpha / city / country / continent; accordion expand per museum |
| Collection | `renderCollectionView()` | Seen-only paintings; 3 display modes: grid / compact / gallery |
| Stats | `renderStatsView()` | Aggregated progress by continent and museum |

> **Updated (Sessions 7–30):**
> - "Top 100" tab is now labelled **Paintings** in the nav; also sortable by Movement with expandable group headers.
> - Museums tab has **3** sub-modes (continent removed in Session 30); includes search bar and visited-museum badge on each card.
> - Collection tab has Sort and Filter dropdowns, a Favorites filter, and Gallery as the default view.
> - Stats is **not a tab** — accessed by tapping the `X / Y` counter in the header. It now shows visited-museum count and expandable per-museum rows with scope breakdown.
> - A fourth overlay screen `renderSettingsView()` is toggled by the gear icon in the header.

### Painting object shape

```js
{
  id: 1,                      // number for canonical paintings, 'u_<timestamp>' for user-added
  rank: 1,                    // 1–100; user-added get 9999
  title, artist, year,
  medium, dimensions,         // optional
  description,                // optional
  imageUrl,                   // Wikimedia Commons URL or null
  location: { continent, country, city, museum },
  isUser: true,               // only on user-added paintings
}
```

> **Updated (Session 4+):** Museum-only paintings (not in the ranked top 100) carry two additional fields:
> ```js
> rank: null,
> museumOnly: true,
> movement: "Baroque",        // art movement key — matches a key in MOVEMENTS
> ```
> `scopedPaintings()` gates which paintings are visible based on `S.scope`:
> - `'top100'` — only paintings where `!p.museumOnly`
> - `'plus10'` — all rank paintings + museumOnly up to a total of 10 per museum
> - `'plus30'` — all rank paintings + museumOnly up to a total of 30 per museum

### Service worker

`sw.js` uses cache-first for local files and network-first for Wikimedia/Wikipedia image URLs. The cache name is `paint-chips-v1` — bump this string to force all clients to re-cache when static assets change significantly.

> **Updated (Sessions 15 + 23):** Cache name bumped to `paint-chips-v2` in Session 15 (rebrand). Image strategy changed to **cache-first** in Session 23 — `_preCacheImages()` runs 2s after startup and fetches all painting/artist/museum images into the SW cache in batches of 5, so images load instantly offline after first visit.

### Deployment

Deployed to GitHub Pages at the `/paint-chips/` subdirectory. The `manifest.json` `start_url` is `/paint-chips/` to match. The repo is `github.com/c-fawkes/paint-chips`.
