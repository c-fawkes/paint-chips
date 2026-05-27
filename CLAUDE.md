# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Before every commit

Update `docs/progress.md` with a brief note of what changed in this session before committing. Add to the current session's section if one already exists for today, or open a new `## Session N — YYYY-MM-DD` block. One bullet per meaningful change — no need to repeat what's already in the commit message verbatim, but capture the *why* and any decisions made.

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
- **`app.js`** — all application logic. Single global state object `S`, mutated directly and persisted to `localStorage` via `save()`/`load()`. Re-renders by calling `render()` which sets `innerHTML` on `#main`.
- **`styles.css`** — all styling. Dark museum aesthetic: near-black `#0f0e0d` background, gold `#c9a84c` accent. Uses CSS custom properties defined on `:root`.

### State model

`S` in `app.js` holds everything:
- `checked` — `{ [id]: true }` for seen paintings
- `photos` — `{ [id]: [dataURL, ...] }` for user-uploaded photos (stored as base64 in localStorage)
- `userPaintings` — array of paintings the user added manually
- `view` — active tab: `'list' | 'museums' | 'collection' | 'stats'`
- `listMode / collectionMode` — grid vs compact display toggles
- `filter` — `{ continent, country, city, museum }` cascade (lower levels are cleared when a higher level is cleared)

The Set fields (`expandedMuseums`, `expandedContinents`, `expandedCountries`) track accordion open state and are intentionally **not** persisted to localStorage (they reset on reload).

### Rendering pattern

`render()` reads `S.view` and calls the matching `render*View()` function, which returns an HTML string set via `innerHTML`. There is no virtual DOM or diffing — every state change re-renders the whole `#main`. Event handlers are attached inline as `onclick="fnName()"` strings pointing to globals. The detail modal is appended to `<body>` as a separate element, not inside `#main`.

### Four tabs

| Tab | Function | Notes |
|---|---|---|
| Top 100 | `renderListView()` | Sortable (rank/artist/year/title/museum), searchable, filterable via chips |
| Museums | `renderMuseumsView()` | 4 sub-modes: alpha / city / country / continent; accordion expand per museum |
| Collection | `renderCollectionView()` | Seen-only paintings; 3 display modes: grid / compact / gallery |
| Stats | `renderStatsView()` | Aggregated progress by continent and museum |

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

### Service worker

`sw.js` uses cache-first for local files and network-first for Wikimedia/Wikipedia image URLs. The cache name is `paint-chips-v1` — bump this string to force all clients to re-cache when static assets change significantly.

### Deployment

Deployed to GitHub Pages at the `/paint-chips/` subdirectory. The `manifest.json` `start_url` is `/paint-chips/` to match. The repo is `github.com/c-fawkes/paint-chips`.
