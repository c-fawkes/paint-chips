# Paint Chips — App Overview & Session Progress

---

## App Overview

### What it is

Paint Chips is a personal Progressive Web App (PWA) checklist for tracking which of the world's 100 most famous paintings you've seen in person. It's built for museum-goers who travel specifically to see art, or who want to cross off the canonical masterpieces as they encounter them.

> **Updated (Session 15):** The app was rebranded from "Paint Chips" to **Beheld**. The name "Paint Chips" is retained only in the repo path and GitHub Pages URL (`/paint-chips/`). The app displays as "Beheld" everywhere in the UI, manifest, and title.
>
> **Updated (Session 4+):** The dataset has grown beyond 100 paintings. As of Session 30 the app contains **291 paintings** — 100 ranked works plus 191 `museumOnly` extras spread across 35 museums. The scope toggle in Settings controls which paintings are active: Top 100 only, up to 10 per museum, or up to 30 per museum (total including ranked works).

The app lives at [github.com/c-fawkes/paint-chips](https://github.com/c-fawkes/paint-chips) and is deployed to GitHub Pages at `/paint-chips/`. It can be installed to the home screen on iOS and Android via the PWA manifest, where it runs in standalone (full-screen, no browser chrome) mode. All data is stored locally in the user's browser — no account, no backend.

---

### How it's built

**No framework, no build step.** Three files loaded as plain `<script>` tags in `index.html`:

- **`data.js`** — pure data, no logic. Defines two globals: `PAINTINGS` (array of 100 painting objects) and `MUSEUMS` (lookup object keyed by museum name). Loaded first so `app.js` can reference it.
  > **Updated (Sessions 5–6, 30):** `data.js` now exports five globals: `PAINTINGS` (291 objects), `MUSEUMS` (derived), `ARTISTS` (101 entries with bio/dates/nationality), `ARTIST_PORTRAITS` (Wikimedia portrait URLs), `MOVEMENTS` (19 art movements with summaries and traits), and `MUSEUMS_INFO` (blurbs and exterior photos for all 35 museums).
- **`app.js`** — all application logic. One global state object `S`, mutated in place, re-rendered via `innerHTML` replacement. No virtual DOM, no reactivity framework.
- **`styles.css`** — all styles. Uses CSS custom properties for the full design token set.

**Persistence** is `localStorage` only. The `save()` / `load()` functions in `app.js` serialize the relevant subset of `S` (checked status, photos, user-added paintings, UI preferences) to a single key `pc_state`. Photos are stored as base64 data URLs directly in localStorage — there's no file system or remote storage.

> **Updated (Session 23):** Photos are now stored in **IndexedDB** (`beheld-db`), not localStorage. `save()` no longer includes photos in its payload. `S.photos` remains the in-memory cache; it is loaded asynchronously from IDB in `init()` before first render. All other state (checked, notes, dates, favorites, preferences) remains in `localStorage` under `pc_state`.

**Offline support** comes from `sw.js`, a service worker that caches all app files on install and serves them cache-first. Wikimedia image URLs use a network-first strategy so images stay fresh but fall back to cache if offline.

---

### Layout

The app shell is a standard mobile-first layout fixed to the viewport:

```
┌──────────────────────────────────────┐
│  🎨 Paint Chips          [12 / 100]  │  ← fixed header (#app-header)
│▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │  ← 3px progress bar (#global-progress)
├──────────────────────────────────────┤
│                                      │
│           scrollable #main           │  ← swapped out on every render()
│                                      │
├──────────────────────────────────────┤
│  Paintings │ [Collection] │ Museums  │  ← fixed bottom nav (#bottom-nav)
└──────────────────────────────────────┘
```

- The **header** is fixed at 56px + iOS safe area inset. Shows the app name in serif gold and a pill counter showing seen / total (tappable → opens Stats view).
- The **progress bar** is a 3px gold gradient strip immediately below the header, always reflecting the current seen count.
- **`#main`** is the only element that changes. Every tab switch and state update calls `render()`, which sets `main.innerHTML` to the output of the active view's render function. There is no DOM diffing.
- The **bottom nav** is fixed at 60px + iOS safe area inset. Three items: Paintings, Collection (raised box), Museums. Stats and Settings are accessed from the header, not the nav.
  > **Updated (Sessions 7–15):** Nav icons updated — Paintings tab uses a **brush** icon, Museums uses a **landmark** icon. Collection button is a full closed box (no open bottom edge). Active Paintings/Museums tabs show a 1.5px gold top-line indicator. Settings is accessed via a **gear** icon in the header (right side); Stats via the `X / Y` counter (centre). A **quiz** icon (question mark circle) also appears in the header.

---

### Design language

The visual theme is "dark museum" — the feel of a gallery after-hours.

| Token | Value | Use |
|---|---|---|
| `--bg` | `#0f0e0d` | Page background — near-black with warm undertone |
| `--bg2` | `#1a1917` | Cards, headers, modals |
| `--bg3` | `#242220` | Input fields, icon backgrounds |
| `--bg4` | `#2e2c29` | Subtle raised elements |
| `--gold` | `#c9a84c` | Primary accent — active states, seen checkmarks, highlights |
| `--gold-dim` | `#8a6e2e` | Muted gold for borders, gradient starts |
| `--text` | `#e8e0d0` | Primary text — warm off-white |
| `--text-dim` | `#998f80` | Secondary text |
| `--text-faint` | `#5a5248` | Labels, placeholders |
| `--border` | `#3a3632` | Dividers and card borders |

Typography uses **Georgia** (serif) for titles and display text, giving a classical printed-catalogue feel. System sans-serif (`-apple-system`, etc.) is used for all UI chrome.

Checked/seen paintings are signaled with gold: card border turns gold-dim, the check circle fills solid gold, and row backgrounds get a barely-visible gold tint (`rgba(201,168,76,.04)`).

---

### Features

#### Paintings tab

The main list of all 100 paintings (plus any user-added extras). The default sort is by rank (1–100).

**Grid view** — two-column card grid on mobile, three columns at 600px, four at 900px. Each card shows:
- The painting image (3:4 aspect ratio, `object-fit: cover`)
- Rank badge (top-left, `#N`)
- Seen badge — circular check button (top-right); tapping it toggles seen status without opening the detail view
- Photo badge — 📷 emoji (bottom-right) if you've attached personal photos
- Title (serif, 2-line clamp), artist name, city below

**Compact/list view** — toggled by the grid/rows button in the toolbar. Each row shows a small thumbnail (52×64px), title + artist + year, rank, and a circular check button on the right.

**Sort** — dropdown button cycles through: Rank / Artist / Year / Title / Museum / Movement. When sorted by Museum or Movement, the list groups paintings under headers with seen counters.

**Search** — filters by title, artist, museum name, or country as you type.

**Filter chips** — when you navigate from the Museums tab to a location, a filter chip appears at the top of the Paintings list showing the active filter. Tapping the chip's ✕ clears it.

#### Detail sheet

Tapping any painting opens a bottom sheet modal that slides up with animation. Structure:
- Back button + "Mark Seen" / "Seen ✓" toggle + "Collection" button (appears after marking seen)
- Full painting image (`object-fit: contain`, max 50vh)
- Rank badge + title (serif) + artist (tappable → artist popup) and year
- Location box (museum name + city, country — tappable → museum popup)
- Movement pill (tappable → movement popup)
- Medium and dimensions in a two-column spec grid (converts cm/m to in/ft when imperial selected in Settings)
- Description paragraph
- Your Photos section — 3-column grid of uploaded photos with ✕ delete; tapping opens full-screen lightbox
- "Add your photo" button — native camera/file picker; uploading auto-marks seen

#### Museums tab

Browse all 35 museums with four grouping modes via a dropdown button: By Museum / By City / By Country / By Continent. All modes use collapsible accordions. Expanded state reveals a progress bar, compact painting rows, and an "Add painting" button.

> **Updated (Sessions 8, 30):** Grouping dropdown is now an icon-only button (funnel/sort icon) with three options — By Museum / By City / By Country (By Continent removed). A **search bar** was added filtering by museum name, city, and country. Each museum card has a circular **visited badge** on the flag icon (alpha view) or a circular button in the header (city/country views) — toggling marks the museum as visited (gold check when active; persisted in `S.visitedMuseums`).

#### Collection tab

Shows only paintings marked as seen. Three display modes: Grid / Compact / Gallery (full-bleed framed artwork view).

#### Stats view

Accessible by tapping the `X / Y` counter in the header. Shows seen count, total, % complete, museums visited, progress bars by continent, and top museums by paintings seen.

> **Updated (Session 30):** Summary cards now show: Collected, % Complete, **Museums Visited X/Y**, and In Scope count. The "Top Museums" bar list is replaced by a full expandable **Museums** section — all museums sorted by % collected, each expandable to show their paintings list. When scope is **Up to 10** or **Up to 30**, the expanded view shows separate sub-bars for "Top 100" titles vs "Museum-only" extras within that museum.

#### Settings

Accessible via the gear icon in the header (toggles closed on re-press). Two settings:
- **Units** — Metric / Imperial (affects dimension display in detail sheet)
- **Painting List** — Top 100 / All Famous (gates which paintings appear everywhere via `scopedPaintings()`)

> **Updated (Session 30):** "All Famous" replaced with **Up to 10** and **Up to 30**. "Up to 10" shows all ranked paintings plus museumOnly extras, capping the total at 10 per museum. "Up to 30" caps at 30 per museum total (ranked first, then extras fill remaining slots).

#### Onboarding

Shows once on first launch (gated by `localStorage.getItem('pc_onboarded')`). Two pages:
1. What's inside: 100 / 35 museums / 21 cities / 12 countries, body copy, 1425–1962 timeline
2. How it works: Mark as Seen, Add Your Photos, Add Your Own — with feature cards and SVG icons

Can be re-shown via Settings → About → View.

---

## Session Progress

Add new sessions at the **bottom** of this section. Open a new `## Session N — YYYY-MM-DD` block for each working session. One bullet per meaningful change — capture the *why* and any decisions made.

---

## Session 1 — 2026-05-26

### Built from scratch
- Designed full data model: 100 paintings across 35 museums with rank, artist, year, medium, dimensions, description, and location (continent/country/city/museum)
- `MUSEUMS` lookup object keyed by museum name
- Four-tab PWA shell: Top 100, Museums, Locations, Stats *(Locations merged into Museums in Session 2; Stats moved to header counter in Session 7)*
- Per-museum accordion with painting counts and progress bars *(accordion replaced with in-page detail view in Session 31)*
- Continent → Country → City → Museum drill-down in Locations tab
- Global progress bar and counter in the fixed header
- Check-off ("seen") toggle on each painting row, persisted to localStorage *(renamed "collected" across UI and codebase in Session 28)*
- User photo capture — attach personal photos to any checked painting, stored as base64 data URLs *(moved to IndexedDB in Session 23)*
- Add custom paintings to any museum via a form modal
- Search by title, artist, museum, or country
- Sort by rank, artist, year, title, or museum
- Filter chips: click a location in the Museums/Locations tabs to filter the Top 100
- Offline support via service worker (cache-first for app files, network-first for Wikimedia images)
- PWA manifest with icons — installable on iOS and Android
- Deployed to GitHub Pages at `github.com/c-fawkes/paint-chips`

---

## Session 2 — 2026-05-27

### PWA install fixes
- Fixed `manifest.json` `start_url` to `/paint-chips/` to match GitHub Pages subdirectory path
- Fixed iOS safe area insets using `env(safe-area-inset-top)` for Dynamic Island / notch

### Images
- Researched and patched all 100 paintings with verified Wikimedia Commons image URLs
- Grid card layout with thumbnail images, rank badge, seen badge, and photo indicator
- `onerror` fallback to 🎨 placeholder if an image fails to load
- Service worker updated to network-first strategy for all wikimedia.org / wikipedia.org URLs

### Grid/list toggle
- Added toolbar button to toggle between grid (cards with images) and compact (text rows) in the Top 100 view
- Toggle state persisted to localStorage (`listMode`)
- Fixed three duplicate rank numbers — ranks 55, 99, and 100 were assigned twice

### Tab restructure
- Merged old Map and Museums tabs into a single **Museums** tab with sub-modes: Alpha / City / Country / Continent *(Continent sub-mode removed in Session 30)*
- Added **Collection** tab with three display modes: grid, compact, and gallery (full-bleed framed artwork view) *(gallery made default in Session 20; "Framed" renamed to "Gallery" in Session 20)*
- Added seen-check toggle button on the large thumbnail in the detail modal

---

## Session 3 — 2026-05-27

### Documentation
- Created `CLAUDE.md` with development commands, architecture overview, state model reference, and deployment notes
- Created `docs/progress.md` (this file) with full app overview and session history
- Added rule to `CLAUDE.md` requiring `docs/progress.md` to be updated before each commit

### Toolbar dropdowns
- Replaced cycling sort button with an icon-only button that opens a dropdown listing all five sort options with a checkmark on the active one
- Replaced view toggle button with a dropdown offering Grid and List options with icons
- Dropdowns anchor bottom-right to their button, dismiss on outside click or re-clicking the same button

---

## Session 4 — 2026-05-27

### Museum collection paintings
- Added 114 museum-only paintings (IDs 101–214) to bring major museums to 10 paintings each
- Museum-only paintings carry `museumOnly: true` and `rank: null` — hidden from Top 100 but visible in Museums, Collection, and Stats
- Fixed `null <= 100` JavaScript coercion bug: rank badge checks updated to `p.rank != null && p.rank <= 100`
- Fixed one-character search input bug: `handleSearch` refocuses and restores cursor position after `render()` replaces the DOM

### Toolbar UX
- Sort and view buttons replaced with icon-only buttons opening positioned dropdown menus
- Dropdowns dismiss on outside click or re-clicking the same button

---

## Session 5 — 2026-05-28

### Art Movements feature
- Categorized all 214 paintings into 18 art movements via `patch_data.py`
- Added `const MOVEMENTS` to `data.js` with 18 entries, each containing era, essay-style summary, 5 key traits, and key artists
- Detail sheet shows "Movement" row as a gold tappable pill — opens the movement popup
- Movement popup is a bottom-sheet with the full movement essay, bullet traits, artist chips, and a 3-column grid of all paintings in that movement; tapping a painting jumps to its detail
- Movements page lists all 18 movements with era, truncated summary, and 3 thumbnail previews *(Movements page removed in Session 6; movement info now accessible inline via sort-by-Movement)*

### Art Movements accordion
- Movements page rows are collapsed by default; clicking expands to reveal the full essay, key characteristics, and up to 6 painting thumbnails
- Chevron rotates 180° on expand; open rows get a gold border accent
- Movement tag in the painting detail sheet opens the movement popup (whole spec box is the tap target)

### Detail sheet improvements
- Added "Collection" button to the detail nav (between Back and Seen); hidden when unseen, fades in when "Mark Seen" is toggled on; clicking navigates directly to the Collection tab *(replaced with heart Favorites button in Session 26)*
- iOS input zoom fix: bumped font-size on search input and modal fields to `1rem` (16px) so Safari doesn't auto-zoom on focus

### Add Painting UX overhaul
- "Add painting" button in museum accordions now matches painting row dimensions instead of a narrow dashed-border box
- Add Painting modal has a live search field: type a title or artist, get a dropdown of matches from all 200+ paintings; results badge "this museum" when already catalogued there
- Selecting a result autofills all form fields; warns if museum field doesn't match the accordion it was opened from

### Museum painting images
- Added Wikimedia Commons image URLs for 23 museum-only paintings (IDs 121, 137–138, 149–150, 152–157, 161, 166, 168–169, 172, 174, 180, 187–189, 200, 203)

---

## Session 6 — 2026-05-28

### Artist bios, portraits, and museum blurbs/photos
- Added `ARTISTS` constant to `data.js` with short bios, birth/death dates, and nationality for all ~80 artists
- Added `ARTIST_PORTRAITS` with Wikimedia Commons portrait image URLs for each artist
- Added `MUSEUMS_INFO` with a 3–4 sentence blurb and exterior photo URL for all 35 museums
- Artist popup: circular portrait thumbnail, name, nationality + dates, bio, movement chips, works grid
- Museum popup: full-width exterior photo, flag + city/country, seen progress bar, blurb, painting grid

### Movements sort + Artist/Museum popups
- Removed standalone Movements page and `?` header button; movement info now accessible inline when sorted by Movement
- Added "Movement" as a sort option in the sort dropdown; paintings group by movement in chronological order
- Artist name in detail sheet is a tappable link → artist popup
- Museum name in detail sheet is tappable → museum popup
- Replaced custom landmark emoji with country flag emoji for museum rows

### Bug fixes
- Fixed movement tag and accordion onclick broken by `JSON.stringify` double-quote collision — switched to single-quoted JS strings
- Fixed `ARTIST_PORTRAITS` 400/403 errors: `400px-` Wikimedia thumbnail prefix doesn't exist as a pre-generated size; replaced with verified URLs from Wikipedia REST API
- Fixed `MUSEUMS_INFO` photo URLs: same root cause (`800px-` invalid); replaced all 35 with verified 330px or 960px URLs; 2 museums set to `null` (no accessible exterior photo)
- Fixed 19 broken `imageUrl`s in museum-only paintings: Google Art Project files removed from Commons; replaced with verified thumbnails; 14 remain `null` due to copyright

---

## Session 7 — 2026-05-28

### Settings panel
- Added gear icon button to the fixed header; tapping opens a Settings view replacing `#main`
- **Units** toggle (Metric / Imperial) — dimensions in detail sheet convert `N cm` → `N.X in` via `formatDimensions()`; persisted to localStorage
- **Painting List** scope toggle (Top 100 / All Famous) — controls which paintings appear everywhere; `scopedPaintings()` helper gates all view functions; persisted to localStorage *("All Famous" replaced with three-way Up to 10 / Up to 30 in Session 30)*

### Nav restructure
- "Top 100" tab renamed to "Paintings"
- Stats tab removed from bottom nav; accessible by tapping the `X / Y` progress counter in the header
- Tab order: Paintings | Collection | Museums
- Collection button is a raised outlined box: `border-radius: 10px 10px 0 0`, no bottom border, `top: -14px` to extend above the nav bar line

---

## Session 8 — 2026-05-28

### UI polish
- Collection nav button widened from 68px to 84px
- Settings screen now has a Back button; pressing the gear icon again closes it (toggle behavior)
- Museum tab sort replaced with a dropdown button matching the Paintings tab style; button turns gold when a non-default grouping is active
- Year sort fixed: `parseInt("c. 1472–1476")` returned `NaN`; replaced with `parseYear()` which extracts the first 4-digit number via regex

---

## Session 9 — 2026-05-28

### Onboarding screen
- Added first-launch onboarding overlay (z-index 998); shows once, gated by `localStorage.getItem('pc_onboarded')`
- Layout: Paint Chips brand → gold "100" hero number → "masterpieces. One lifetime." → 35 / 21 / 12 stat columns → body copy → 1425–1962 timeline bar → "Begin your journey" CTA *(layout significantly redesigned in Sessions 20–21)*
- Settings → About section added with a "View" button to re-show the intro

---

## Session 10 — 2026-05-28

### Missing painting images
- Audited all 214 paintings for null `imageUrl`; found 17 nulls
- Resolved 12 via Wikimedia Commons and Wikipedia fair-use thumbnails: Pollock, Magritte, Picasso (×3), Matisse, Duchamp, Kahlo, Dalí (×2), Lichtenstein, Bacon
- 20th-century copyrighted works use `en.wikipedia.org` fair-use thumbnail URLs — the only Wikimedia-hosted copies available
- 5 remain null: Migration Series Panel 49 (Lawrence), Naturaleza Viva (Tamayo), Portrait of Elena Flores (Izquierdo), Woman in Blue (Izquierdo), The Harlequin (Miró) — all museumOnly, no Wikimedia source exists

---

## Session 11 — 2026-05-28

### Onboarding: two-page flow
- Converted single-page onboarding into a two-page flow with a slide transition
- Page 1 unchanged: scope stats, body copy, timeline
- Page 2 (new): "Your collection, your story." — three feature cards: Mark as Seen (check icon), Add Your Photos (camera icon), Add Your Own (plus icon)
- CTA on page 1 says "Next →" and calls `obGoPage(2)`; page 2 has "Begin your journey"
- Page indicator dots (gold = current) at the bottom of each page
- Refactored HTML into `_obPage1HTML()` and `_obPage2HTML()` helpers

---

## Session 12 — 2026-05-28

### Fix 6 broken imageUrls (404s)
- Audited all 209 non-null imageUrls; 181 returned 429 (Wikimedia rate-limiting, URLs are fine), 6 returned genuine 404
- id 118 The Child's Bath (Cassatt): wrong filename hash — replaced with verified Commons URL
- id 125 The Supper at Emmaus (Caravaggio): Google Art Project file removed — replaced with `Supper_at_Emmaus-Caravaggio_(1601).jpg`
- id 131 Skull of a Skeleton with Burning Cigarette (van Gogh): Google Art Project file removed — replaced with Van Gogh Museum file `VGM_F212`
- id 140 A Lady Writing (Vermeer): file removed — replaced with `.png` version from Commons
- id 171 Declaration of Independence (Trumbull): wrong filename — replaced with correct Commons URL
- id 205 Parnassus (Raphael): WGA file removed — replaced with `Raphael_-_The_Parnassus.jpg`
- 5 null imageUrls remain (ids 158, 176, 177, 179, 181) — no Wikimedia source exists for these

---

## Session 13 — 2026-05-28

### Paintings tab: expandable museum & artist sort groups
- Made the Museum and Artist sorts match the Movement sort format — grouped under expandable accordion headers (reusing `.list-movement-*` styling)
- Museum header shows flag + city/country + seen count; expanded body shows museum photo + blurb (from `MUSEUMS_INFO`)
- Artist header shows nationality · birth–death + seen count; expanded body shows portrait + bio + movement chips (from `ARTISTS`/`ARTIST_PORTRAITS`)
- Added state Sets `expandedListMuseums` / `expandedListArtists` (not persisted, reset on load) and toggles `toggleListMuseumGroup()` / `toggleListArtistGroup()` — kept separate from Museums-tab state to avoid cross-tab bleed

---

## Session 14 — 2026-05-28

### Fix 44 remaining broken imageUrls (404s)
- A slow re-audit with 429 retry/backoff (the earlier audit's 429s had masked them) revealed 44 genuine 404s beyond the 6 fixed in Session 12
- Root cause for most: correct Commons filename but **wrong hash-prefix directory** in the URL (e.g. `5/55/` vs `0/05/`) — found correct URLs via Commons `imageinfo` thumburl lookup
- Fixed 43 with verified Commons thumbnails (all HEAD-checked → 200)
- id 209 (Caravaggio, Madonna dei Palafrenieri): auto-search first matched a non-Caravaggio "Scuola Romana" work — manually corrected to `Caravaggio_-_La_Madonna_dei_Palafrenieri,_1605,_110.jpg`
- id 184 (Matisse, The Snail): no valid Wikimedia/Wikipedia source exists (1953 cut-out, still under US copyright) — set `imageUrl: null` rather than use a wrong image. Now 6 paintings are permanently null (158, 176, 177, 179, 181, 184)

---

## Session 15 — 2026-05-28

### Rebrand to "Beheld"
- Renamed the app from "Paint Chips" to **Beheld** across the header, splash screen, onboarding pages, `<title>`, manifest `name`/`short_name`, and apple web-app title
- Wordmark now displays in a thick cursive font (Google Fonts **Pacifico**) via a new `.brand-cursive` class and `--font-cursive` CSS var; loaded with preconnect + stylesheet link in `index.html`
- Displayed as title-case "Beheld" rather than all-caps — cursive scripts lose their connecting strokes in uppercase
- Removed the 🎨 paint emoji from the header, splash, and both onboarding pages (kept it only as the image-load fallback placeholder)
- Swapped bottom-nav icons: Paintings tab now uses the Lucide **brush** icon, Museums tab the Lucide **landmark** icon (added `brush`/`landmark` to the `ICONS` map)
- Bumped service-worker cache to `paint-chips-v2` so clients re-cache the changed static assets
- Kept `start_url` `/paint-chips/` and the repo path unchanged (deployment URLs, not display names)

### Repo cleanup: scripts/ folder + .gitignore
- Added a `.gitignore` (ignores `.claude/`, `.DS_Store`, editor dirs, `node_modules/`, logs/temp)
- Moved all one-off dev/helper scripts (fetch-*, patch-*, apply-*, search-commons, fetch-via-mediawiki, generate-icons, plus the two python helpers) into a new `scripts/` folder
- Left the runtime files (`app.js`, `data.js`, `sw.js`) at root — index.html references and the service-worker scope depend on them staying there

### New app icon: gold cursive "B"
- Replaced the palette-emoji PWA icon with a gold (`#c9a84c`) cursive **B** on the same dark `#1a1917` background, matching the new Beheld wordmark (Pacifico)
- Regenerated `icon-192.png` / `icon-512.png` via a new `scripts/generate-icons.py` (Pillow, 4× supersampled, centered on the glyph's ink bounds, sized to 62% so it stays inside the maskable safe zone)
- Removed the obsolete `scripts/generate-icons.js` (depended on the uninstalled node `canvas` module and produced the old emoji icon)

### Onboarding, settings, and detail modal polish
- Enlarged the Beheld cursive wordmark on both onboarding pages (1.5rem → 2.4rem)
- Simplified the three stat labels on page 1: removed "to visit", "across 2 continents", and "to reach" — labels now read just "museums", "cities", "countries"
- Onboarding page 2 first feature: renamed title to "Collect paintings you've seen" and rewrote the description to be action-focused
- Moved the About section in Settings to the bottom (below Display), so less-used options don't lead
- Detail modal: removed the "Your Photos" section header (photos are self-evident)
- Detail modal: added an "Add a note" textarea below the photo upload button; notes are persisted in `S.notes` (keyed by painting ID) and saved to localStorage on every keystroke

### Nav stack: step-back navigation + swipe-to-dismiss
- Added `_navStack` — each `open*` function pushes a reopen-fn before replacing the current screen; Back steps one level, never skips to the main tab
- `navBack()` pops and restores; `navDismissAll()` clears everything (backdrop tap, swipe-down, tab switch)
- `addSwipeDismiss(overlay)` attaches drag-down gesture to the `detail-nav` handle area — 120px+ releases and animates the sheet off-screen
- Photo upload/delete use `{ refresh: true }` to re-render the detail without pushing to the stack
- Tab switches call `navDismissAll()` so overlays close cleanly on nav

### Nav bar and collection tab polish
- Collection button: complete closed box (border-bottom + uniform border-radius: 10px)
- Paintings/Museums active tabs: 1.5px gold top-line indicator spanning full tab width
- Collection search bar: flex:1, same style as paintings search bar

### CLAUDE.md rules
- Added: never commit/push unless explicitly told; ask to commit at ~85% context

### Collection visibility toggle
- The collection button in the detail modal is now a toggle: "In Collection" (gold, active) vs "Add to Collection" (dimmed) *(replaced with heart Favorites button in Session 26)*
- Paintings default to in-collection when first marked as seen; the toggle lets you hide specific paintings from the Collection tab while keeping them marked as seen
- `S.hiddenFromCollection` persisted in localStorage; collection view filters out hidden paintings but the seen count in the header still reflects all seen paintings

### Collection tab overhaul
- Replaced three separate view toggle buttons with a single View dropdown (Grid / List / Framed) matching the paintings tab style
- Added Sort dropdown with options: Rank, Artist, Year, Title, Museum, Movement, Date Seen
- Sort by Artist/Museum/Movement renders collapsible group headers showing only groups present in the collection (same pattern as paintings tab)
- Added search bar matching the paintings tab style; filters by title, artist, or museum
- Removed the redundant "X of Y paintings seen" count from the collection header; count was already shown in the global progress indicator

### Nav bar and collection search polish
- Collection nav button: added bottom border and full rounded corners — now a complete closed box instead of open-bottomed
- Paintings and Museums tabs: gold top-line indicator appears above the active tab (pseudo-element on `.nav-btn::before`)
- Collection search bar: now uses the same `flex:1` styling as the paintings tab search bar — fills all available space between the sort and view buttons

### Code review fixes
- Search toolbar now renders above the empty-state check, so the search input stays visible even when results are zero; empty-state message is now context-aware (no seen, no search match, or all hidden)
- `todayISO()` switched from `toISOString()` (UTC) to local date components — users west of UTC no longer get tomorrow's date when marking paintings seen in the evening
- `toggleDateUnknown` now stashes the prior real date in `_prevDateSeen` before overwriting with 'unknown'; toggling back restores that date instead of defaulting to today
- `collectionSearch` removed from `save()` payload — search box resets on app reopen instead of silently pre-filtering the collection
- Deleted dead `formatDateSeen` helper (was never called)

### Painting detail modal layout polish
- Added a dividing line between the painting info (description, specs) and the user's section (photo, note, date)
- Collapsed Camera + Library into a single "Add photo" button using the camera icon (the file picker already offers both sources without `capture="environment"`)
- Moved Date seen below the note field — order is now: photo → note → date
- Added bottom padding (`safe-area-inset-bottom + 32px`) to avoid content being clipped by screen curvature/home indicator

### Detail modal: photo source, zoom fix, date seen, note polish
- Photo upload now shows two buttons side by side: "Camera" (capture=environment) and "Library" (file picker) — previously only camera was offered
- Note textarea font-size bumped to 1rem (16px) and date input also uses 1rem to prevent iOS auto-zoom on focus
- "Add a note" label removed; placeholder text changed to "Add a note about this painting"
- Date seen field added below the note: defaults to today when a painting is first marked as seen, editable via a date picker, or togglable to "Unknown"; persisted in `S.dateSeen` *(`dateSeen` renamed to `dateCollected` in Session 28)*

## Session 16 — 2026-05-28

### Search bar clear button
- Added an `✕` button inside both search inputs (Paintings tab and Collection tab) that appears only when there is text entered, positioned absolutely at the right edge of the input
- Wrapped each input in a `.search-wrap` div so the button can be positioned without affecting the toolbar flex layout
- Suppressed the browser's native webkit search-cancel button to avoid a double ×
- Clicking calls the existing `handleSearch('')` / `handleCollectionSearch('')` which clears, re-renders, and refocuses

### Date seen "Unknown" state — fixed collapsing input
- When "Unknown" is toggled, the date input previously shrank because an empty `type="date"` collapses on Safari/iOS
- Wrapped the input in `.detail-date-wrap` with `is-unknown` class toggled via JS; `min-height: 40px` on the input prevents collapse
- Disabled state now shows a dashed border (instead of low opacity) to signal "no data entered intentionally"
- Added a `— —` placeholder span inside the wrapper that appears only when `is-unknown` is active
- Fixed `toggleDateUnknown` DOM manipulation to use `.closest()` to find the Unknown button (broke after wrapper was added)

### Art Quiz feature
- Added a dice (⚄) button in the app header, left of the settings gear, that opens an Art Quiz modal *(icon changed to question-mark-in-circle in Session 17)*
- **Setup screen**: slider for 5–20 questions; pill toggles for question types (Artist, Year, Museum, Movement, Painting name); Multiple choice vs. Dropdown mode selector
- **Question generation**: picks randomly from the Top 100 pool, distributes types evenly, avoids duplicate painting+type combos; MC mode generates 3 wrong distractors from the same category pool
- **Question screen**: painting image, contextual hint, question text, answer options; after answering MC options highlight green/red; dropdown shows inline ✓/✗ result; progress pips in nav bar
- **Score screen**: large correct/total, grade label, full pip history, per-type breakdown with mini bar charts, Play again / Close actions
- All quiz state is ephemeral (`_quiz` let, not persisted to localStorage); modal follows the same bottom-sheet overlay pattern as detail/artist/museum overlays

## Session 17 — 2026-05-28

### Quiz polish
- Quiz modal is now full-screen (fills entire viewport) instead of a bottom sheet; overlay background matches app bg, sheet is flex:1 with safe-area insets, drag handle removed
- Museum MC options show museum name on line 1 and "City, Country" in a smaller dimmed second line; dropdown options show "Museum — City, Country" as combined label
- Quiz painting images now use `object-fit: contain` at a fixed 240px height so images display at their natural proportions without cropping
- Quiz header button icon changed from a dice to a question-mark-in-circle (Lucide help-circle)

## Session 18 — 2026-05-28

### Header counter centered
- Wrapped the quiz and settings buttons in a `.header-actions` div with `flex: 1; justify-content: flex-end`
- `h1` retains `flex: 1` on the left; counter now sits between two equal-flex flanks and is naturally centered

## Session 19 — 2026-05-28

### Sticky group subheaders
- Group headers (artist / museum / movement sorts on both Paintings and Collection tabs) were already `position: sticky` but `top: 0` hid them under the fixed app header
- Fixed by setting `top: calc(var(--header-h) + env(safe-area-inset-top, 0px) + 3px)` so they pin just below the header + progress bar

### Artist popup layout
- Portrait image no longer crammed at the very top — `mv-popup-body` top padding increased from 4px to 16px
- Bio text now flows alongside the portrait: portrait is `float: left` with right/bottom margin inside `.artist-bio-wrap`; text starts inline and wraps under the image naturally
- Name and nationality/years meta sit as full-width lines above the float section

### Hide-on-scroll toolbar *(removed in Session 22)*
- Toolbar (search bar + sort + view buttons) is now `position: sticky` at the header bottom edge
- Scrolling down past 60px hides it by translating it above the fixed header (`.toolbar-up` class); scrolling up anywhere brings it back with a 0.22s ease transition
- Scroll state (`_toolbarHidden`, `_lastScrollY`) resets on every `render()` so the toolbar is always visible after a tab or sort change
- Single `window` scroll listener added in `init()`; no re-attachment needed after re-renders

## Session 20 — 2026-05-28

### Toolbar gap fix (scroll-to-top) *(references hide-on-scroll feature; both removed in Session 22)*
- After scrolling down (toolbar hidden) and returning to the top, sparse scroll events left `toolbar-up` active at low scroll positions, showing a dark gap below the header
- Fixed by adding a `scrollY <= 60` guard at the top of the scroll handler that force-shows the toolbar whenever scroll drops back within the hide threshold

### Collection tab default view
- Default `collectionMode` changed from `'grid'` to `'gallery'`
- "Framed" renamed to "Gallery" in the view dropdown
- Gallery moved to the top of the view options list

### Onboarding page 1 redesign
- Hero section: `100` and `MASTERPIECES` now inline on one line; `1` and `LIFETIME` inline beside them, separated by a vertical divider matching the countries/cities/museums stat row style
- Both hero pairs use the large gold serif number + small uppercase faint label format; `.ob-hero` is now a horizontal flex row mirroring `.ob-stats`
- Stats reordered to countries → cities → museums
- Both `ob-rule` dividers above and below the stat row removed
- "No account · All data stays on your device" line removed from page 1 (still present on page 2)
- Logo-to-hero gap reduced (margin-bottom 36px → 20px)

## Session 21 — 2026-05-28

### Onboarding page 1 continued iteration
- Reordered sections to: Beheld logo → One lifetime → stats row → 100 Masterpieces → body text
- "One lifetime" restored to original serif font (not uppercase); `ob-hero-sub` re-added with serif, normal weight, 1.35rem, centered
- All stat numbers (12/21/35/100) switched to `var(--font-cursive)` (Pacifico) matching the Beheld wordmark; `font-weight: 700` removed (Pacifico is single-weight)
- Stats row margin-bottom tightened from 28px → 12px to reduce gap before the 100 Masterpieces line

## Session 22 — 2026-05-28

### Misc fixes
- Removed hide-on-scroll toolbar feature entirely — toolbar now scrolls naturally and is only visible at the top of the list; removed scroll listener, `_toolbarHidden`/`_lastScrollY` vars, sticky/transition CSS, and `.toolbar-up` class
- List view icon on view buttons updated to proper Lucide spec with `stroke-linecap="round" stroke-linejoin="round"` so the dot indicators render as circles
- Artist group expanded info block: padding changed from `0 16px 16px` to uniform `16px` so the portrait image has equal spacing on all sides instead of touching the subheader; removed redundant inline `margin-bottom:12px` on the portrait

## Session 23 — 2026-05-28

### IndexedDB for user photos + background image pre-caching
- User photos moved from localStorage (5 MB limit) to IndexedDB (`beheld-db`): photos now survive localStorage quota errors and scale with device storage
- `_idbOpen/Put/Delete/GetAll` Promise wrappers added; `save()` no longer includes photos in its payload
- `init()` made async: loads photos from IDB before first render; auto-migrates existing users' localStorage photos to IDB on first run
- `handlePhotoUpload` and `deletePhoto` both write to IDB (fire-and-forget) alongside updating `S.photos` in memory
- `_compressPhoto` (1200px max, JPEG 0.75) retained — keeps photos ~150–400 KB for faster IDB reads
- `_preCacheImages()` runs 2s after startup: fetches all painting/artist/museum images into the SW cache in batches of 5; skips already-cached URLs on subsequent starts
- Service worker updated from network-first to cache-first for Wikimedia images: once pre-cached, images load instantly offline with no network round-trip

## Session 24 — 2026-05-28

### Photo lightbox close button
- Close button was hidden behind the iOS status bar/Dynamic Island (`top: 16px` with no safe area offset)
- Fixed with `top: calc(env(safe-area-inset-top, 0px) + 16px)` so it always appears below the notch
- Lightbox padding updated to include safe area insets top and bottom so the image doesn't clip under the status bar or home indicator

### Date seen Unknown placeholder
- The `— —` placeholder text was left-aligned inside the input box when Unknown is selected
- Centred it with `left: 0; right: 0; text-align: center`

## Session 25 — 2026-05-28

### Artist portraits and bios in data.js
- Added Artemisia Gentileschi bio and self-portrait to `ARTISTS` and `ARTIST_PORTRAITS`
- Filled in previously-null portrait URLs for: María Izquierdo, Thomas Lawrence, Paolo Veronese, Giorgione, Giorgione (completed by Titian), Jacques-Louis David, Eugène Delacroix, Jean-Honoré Fragonard, Frans Hals, Jan Steen, Jan Davidsz. de Heem, Paulus Potter, Francis Bacon, Andrew Wyeth, Emanuel Leutze
- Cleared The Weeping Woman's imageUrl (set to null) — the 1937 Picasso is under copyright and was incorrectly pointing to a Rembrandt image URL

## Session 26 — 2026-05-29

### Favorites replacing "In Collection" toggle
- Replaced the "In Collection" / "Add to Collection" bookmark button in the detail modal with a heart-based **Favorite** button
- Defaults to off when a painting is marked as seen (previously "In Collection" defaulted to on)
- Active state shows a filled heart in rose-red; inactive shows an outline heart in the faint text color
- New `S.favorites` dict (persisted) replaces the toggle role of `S.hiddenFromCollection` (which is kept but no longer drives UI)
- `toggleFavorite()` replaces `toggleCollectionVisibility()`

### Collection view: All Seen / Favorites filter
- Added `S.collectionFilter` state (default `'all'`); persisted to localStorage
- Collection view dropdown now has two sections: view mode (Gallery / Grid / List) at top, filter (All Seen / Favorites) at bottom separated by a divider
- "All Seen" shows every seen painting; "Favorites" shows only hearted ones
- Empty-state message is context-aware for the Favorites filter

### Collection sort dropdown: icons + Expand/Collapse All
- Each sort option now has a contextual icon: hash for Rank, brush for Artist, calendar for Year/Date Seen, type "T" for Title, museum building for Museum, palette for Movement
- Active sort option shows a checkmark aligned to the right (icon → label flex-1 → check)
- When the active sort has group sections (Artist, Museum, or Movement) and view is not Gallery, a divider and **Expand All** / **Collapse All** buttons appear at the bottom of the sort dropdown
- `collExpandAll()` populates the relevant `expandedColl*` Set from the currently visible paintings; `collCollapseAll()` clears it

## Session 27 — 2026-05-29

### Paintings tab sort dropdown parity with collection tab
- Added contextual icons to all six sort options: hash (Rank), brush (Artist), calendar (Year), type-T (Title), museum building (Museum), palette (Movement)
- Active sort option shows a checkmark aligned to the right, matching collection tab style
- Expand All / Collapse All section appears below a divider when sort is Artist, Museum, or Movement
- `listExpandAll()` / `listCollapseAll()` operate on the paintings tab's own Sets (`expandedListArtists`, `expandedListMuseums`, `expandedMovements`) — no cross-tab bleed

## Session 28 — 2026-05-29

### "Seen" → "Collected" — wording and variable standardisation
- All user-facing "seen" text updated in previous session; this session renames all internal identifiers to match
- `S.dateSeen` → `S.dateCollected`; `_prevDateSeen` → `_prevDateCollected`; `saveDateSeen()` → `saveDateCollected()`
- CSS/JS class names: `card-seen-badge` → `card-collected-badge`; `detail-seen-btn` → `detail-collected-btn`
- Migration shim in `load()`: if saved state has `dateSeen` but not `dateCollected`, copies it across — existing users lose no data

### Quiz: painting pool selection
- Added "Painting pool" section to the quiz setup screen with three buttons: All Top 100 / Collected / Favorites
- `quizStart()` filters the Top 100 pool by `S.checked` (collected) or `S.favorites` before generating questions
- If the selected pool has fewer than 4 paintings, an alert blocks the quiz with a helpful message
- `quizSetPool()` toggles the active button without a full re-render

## Session 29 — 2026-05-30

### Add top 20 Museo del Prado paintings (IDs 215–234)
- El Greco: The Nobleman with his Hand on his Chest, The Adoration of the Shepherds, The Holy Trinity
- Titian: Charles V at Mühlberg, Bacchanal of the Andrians, Venus and Adonis
- Rubens: The Three Graces
- Dürer: Self-Portrait (1498), Adam and Eve
- Bruegel the Elder: The Triumph of Death
- Goya: The Clothed Maja, The Second of May 1808, Witches' Sabbath (The Great He-Goat), The Parasol
- Raphael: Holy Family with a Lamb, Portrait of a Cardinal, The Madonna of the Fish
- Zurbarán: Agnus Dei
- Murillo: The Immaculate Conception of Los Venerables
- Ribera: Jacob's Dream
- All paintings carry Wikimedia Commons 330px thumbnail URLs, medium, dimensions, description, and movement

### New artists added to ARTISTS and ARTIST_PORTRAITS
- El Greco — Greek-born, worked in Toledo; Mannerism / Spanish Renaissance; self-portrait URL
- Francisco de Zurbarán — Spanish Baroque; self-portrait URL
- Bartolomé Esteban Murillo — Spanish Baroque; self-portrait URL
- José de Ribera ("Lo Spagnoletto") — Spanish Baroque / Tenebrist; self-portrait URL

## Session 30 — 2026-05-31

### Museum-only painting expansion: Louvre + Musée d'Orsay
- Added 28 museum-only paintings (IDs 235–262) for the Louvre Museum: Grande Odalisque, The Astronomer, Bathsheba at Her Bath, Death of the Virgin, Saint John the Baptist, The Embarkation for Cythera, The Turkish Bath, Intervention of the Sabine Women, Pierrot, La Belle Jardinière, Gabrielle d'Estrées, The Fortune Teller, Et in Arcadia Ego, Women of Algiers, Virgin of Chancellor Rolin, Portrait of Louis XIV, Man with a Glove, The Card Sharp with the Ace of Diamonds, Portrait of Anne of Cleves, Arrival of Marie de Medici at Marseille, Portrait of Madame Récamier, La Belle Ferronnière, The Ship of Fools, Supper at Emmaus (Rembrandt), Saint Sebastian Tended by Saint Irene, Portrait of Francis I (Clouet), Saint Sebastian (Mantegna), The Supper at Emmaus (Titian)
- Added 29 museum-only paintings (IDs 263–291) for the Musée d'Orsay: The Balcony, The Fifer, Berthe Morisot with a Bouquet of Violets, On the Beach, Portrait of Émile Zola, The Poppy Field, Women in the Garden, The Magpie, Haystacks End of Summer, The Swing, Dance in the City, Dance in the Country, Young Girls at the Piano, The Floor Scrapers, The Circus, The Card Players, Still Life with Apples and Oranges, Tahitian Women on the Beach, The White Horse, The Cradle, The Birth of Venus (Bouguereau), The Ballet Class, The Tub, L'Étoile (The Star), A Burial at Ornans, The Painter's Studio, The Origin of the World, Bedroom in Arles, The Church at Auvers
- Added 9 new artists to ARTISTS and ARTIST_PORTRAITS: School of Fontainebleau, Jean Clouet, Andrea Mantegna, Jean-Auguste-Dominique Ingres, Jean-Antoine Watteau, Hyacinthe Rigaud, Berthe Morisot, William-Adolphe Bouguereau, Gustave Courbet
- Wikimedia thumbnail URLs computed via MD5 hash for all filenames; 1 null image (Virgin of Chancellor Rolin — webp source, no reliable jpg)

### Scope toggle: + 10 / + 30 modes
- Replaced the binary Top 100 / All Famous toggle with a three-way: **Top 100** / **+ 10** / **+ 30**
- `+ 10` shows up to 10 museum-only paintings per museum; `+ 30` shows up to 30 — gives users a gradual expansion path
- `scopedPaintings()` updated with new filtering logic; saved `'extended'` scope migrates to `'plus30'` on load

### CLAUDE.md: /add-paintings command
- Documented the `/add-paintings` slash command in CLAUDE.md, requiring it to be used for all future painting additions (enforces research workflow, avoids ad-hoc data.js edits)

### Museums tab UI parity
- Added search bar (matching style of Paintings and Collection tabs) that filters across all group-by modes by museum name, city, and country
- Changed the group-by button from a text label + chevron to an icon-only button (matching the sort buttons on the other tabs); button activates gold when grouping is non-default
- Dropdown options for group-by now have leading icons: landmark (By Museum), pin (By City), globe (By Country)
- Removed "By Continent" as a grouping option — redundant given the country view; saved `'continent'` mode migrates to `'alpha'`
- Dropdown now right-aligns to the button, consistent with other tab dropdowns

### Museum visited tracking
- Added `S.visitedMuseums` (persisted to localStorage) — a dictionary keyed by museum name
- **Alpha view**: visited badge is a small circular button overlaid on the museum's flag icon (bottom-right); tapping toggles visited without expanding the accordion; gold check fills when visited; gold checkmark also appears inline next to the museum name *(badge removed from flag icon and inline check removed in Session 32; button moved to far right of row)*
- **City/Country views**: visited button appears in the museum block header between the collected counter and the chevron, same gold-when-visited style
- `toggleMuseumVisited()` stops event propagation so badge taps don't accidentally toggle the accordion

### Stats page overhaul *(summary cards redesigned again in Session 32)*
- Summary cards: Collected count, % Complete, **Museums Visited X/Y** (new), In Scope count
- Progress by Continent section retained
- "Top Museums" section replaced with a full expandable **Museums** list — all museums sorted by % collected descending, each with a progress bar
- Expanding a museum reveals the painting list (same compact rows as the museums tab, fully interactive)
- If scope is **+ 10** or **+ 30**: expanded view shows two sub-bars — "Top 100" and "Museum-only" — before the paintings list, so progress on rank vs. museum-only work is clearly separated
- Museum rows in stats show the gold visited checkmark when visited
- `S.expandedStatsMuseums` (non-persisted) tracks open sections; resets on reload

## Session 31 — 2026-05-31

### Search bar, scope fix, dropdown cleanup, and doc annotations

- Fixed museums tab search bar styling — `#museums-search-input` was missing from the CSS selectors that style `#search-input` and `#coll-search-input`; all three inputs now share identical appearance and focus states
- Removed checkmark icons from all three sort dropdowns (Paintings, Museums, Collection) — active item is indicated by gold highlight (`.drop-item.active`) only, matching the view dropdown behaviour
- Fixed scope logic in `scopedPaintings()`: **Up to 10** and **Up to 30** now cap the *total* paintings per museum (ranked works always included; museumOnly extras fill remaining slots). Previously extras were added on top of the top-100 set, not subject to the per-museum cap
- Updated scope setting labels from "+ 10" / "+ 30" to **"Up to 10"** / **"Up to 30"** and rewrote the description sub-line for clarity
- Annotated `CLAUDE.md` with `> Updated:` notes on every section that describes the original build state — data.js contents, state model fields, four-tabs table, painting object shape, and service worker strategy — all now reflect current reality
- Annotated `docs/progress.md` App Overview with similar `> Updated:` callouts on the app description, data layer, persistence, nav bar, museums tab, stats view, and settings descriptions

### Museum tab: scope-aware detail view + painting view toggle
- Museum detail page now uses `scopedPaintings()` — paintings and collected counter reflect the active scope from Settings (Top 100 / Up to 10 / Up to 30)
- Added a **view toggle button** to the Museums tab toolbar (matches Paintings and Collection tabs); icon reflects the active mode and goes gold when non-default
- Three view modes for paintings inside a museum detail page: **Condensed** (default, 3-per-row grid), **Grid** (full painting cards), **List** (compact rows)
- In condensed mode, top-100 paintings show a gold `#N` rank badge overlay in the top-left of the thumbnail
- `S.museumsDetailMode` persisted to localStorage; defaults to `'condensed'`

### Museum alpha view: visited button cleanup
- Removed the circle badge overlay on the flag icon — visited state no longer shown there
- Removed the inline checkmark next to the museum name — redundant with the button
- Moved the pin/check visited button to the far right of the row, matching the city/country grouping style

### Museum tab: detail page view
- Clicking a museum on the Museums tab now opens a full detail page that replaces `#main` content — the header/nav bar stays visible and the Museums tab stays highlighted
- Detail page shows: museum photo (if available), flag + city/country, museum name, collected progress bar, blurb, and the full painting collection grid
- Visited toggle button appears in the detail nav row (styled like the detail-collected button)
- Back button returns to the Museums tab list via `setView('museums')`
- Removed accordion expand/collapse from museum cards in all three grouping modes (alpha/city/country) — cards are now simple clickable rows
- `openMuseumPopup` (overlay) is preserved for when museum is clicked from within a painting's detail overlay
- New view state: `museum-detail` (not persisted; resets to `list` on reload like stats/settings)

### Sort dropdown icons updated to Lucide
- Replaced `ICONS.museum` (custom building) with Lucide `landmark` (columns + triangular roof) — now matches the icon already used in the Museums groupby dropdown
- Replaced `ICONS.palette` (custom dot-circle) with Lucide `palette` (actual artist's palette shape with thumb hole and paint dots)

### Reina Sofía museum-only paintings
- Added 25 museum-only paintings (IDs 292–316) for Museo Nacional Centro de Arte Reina Sofía: House with Palm Tree, Snail Woman Flower Star, Woman Bird Star (Homage to Picasso) by Miró; Violin and Guitar, The Anisette Bottle, Coffee Grinder Cup and Glass, Coffee Mill, Open Window, Carafe and Book by Juan Gris; Young Woman at a Window, The Invisible Man, The Enigma of Hitler by Dalí; Dead Birds and Head of a Young Woman by Picasso; Garrote vil and Interior at Outdoors by Ramon Casas; Portrait of Tristan Tzara by Delaunay; Totalizer by Picabia; Woman with a Fan and Woman with Guitar by María Blanchard; The Gathering at the Café de Pombo by Solana; Portrait of Sonia Klamery by Anglada Camarasa; A World by Ángeles Santos; Lying Figure by Francis Bacon; Garrote by Goya
- Added 8 new artists to ARTISTS: Ramon Casas, Robert Delaunay, Francis Picabia, María Blanchard, José Gutiérrez Solana, Hermenegildo Anglada Camarasa, Ángeles Santos — all with full bios and nationality/dates

## Session 32 — 2026-06-01

### Stats page overhaul
- First row always shows "Top 100 Collected" (X/100) and "Top 100 Complete" (X%) — always measured against the full 100 regardless of active scope
- When scope is Up to 10 or Up to 30: a second row of dashed-border cards appears with "Extras Collected" (X/Y) and "Extras Complete" (X%) for museum-only extras
- Removed the back button from the stats page; clicking the counter in the header now toggles stats open/closed

### Museums tab: country flags in city/country views
- "By City" grouping: flag emoji appears next to each city name (resolved from the city's country via a map built during iteration)
- "By Country" grouping: flag emoji appears next to each country accordion header

### Museum tab: miscellaneous polish
- Switched view and sort button order in the Museums toolbar (sort first, view second)
- Unvisited museum circle buttons now use an empty circle matching `.row-check` style (no pin icon, `2px solid var(--border)`)
- Sticky toolbar: `#toolbar` is now `position: sticky` on all three tabs so search/sort/view buttons stay pinned below the header while scrolling *(changed to `position: fixed` in Session 33)*
- Condensed view mode: replaced frame icon with a custom 3×3 grid icon (`ICONS.grid3`, `stroke-width="1.5"` rounded squares)

### Paintings tab: clickable movement/artist chips in group views
- Sort by artist: movement chips in the expanded artist section are now `<button>` elements that open the movement popup on click; gold hover state added via `.mv-chip-link`
- Sort by movement: artist chips in the expanded movement section open the artist popup on click

## Session 33 — 2026-06-01

### Fixed toolbar
- `#toolbar` changed from `position: sticky` to `position: fixed` — no longer shifts when scrolling begins
- Added `border-bottom: 1px solid var(--bg4)` separator line (slightly dimmer than the header's `var(--border)` line above it)
- Padding changed to symmetric `10px 12px`; `#main` top padding removed to match
- `<div class="toolbar-spacer"></div>` injected after the toolbar in all three tab render functions to compensate for the toolbar leaving document flow

### progress.md formatting rules
- Added detailed `## Before every commit` rules to `CLAUDE.md` covering: session placement and numbering, block format, `###` header style, deprecated feature annotation format (`*(changed/removed in Session N)*`), and pre-commit checklist
- Corrected session ordering (18–22 and 27–31 were out of order), removed orphaned `---` separators, and added ~15 inline deprecation annotations to sessions 1–30

## Session 34 — 2026-06-01

### Grid 3×3 view on Paintings and Collection tabs
- Added condensed (Grid 3×3) view to Paintings and Collection tabs — 3-per-row thumbnail grid with title and artist, matching the museum detail page style
- Order on all three tabs: Gallery (Collection only), Grid 2×2, Grid 3×3, List
- Renamed "Grid" → "Grid 2×2" and "Condensed" → "Grid 3×3" across all three tab dropdowns for clarity
- Collected paintings in Grid 3×3 view show a gold-dim thumb border (`condensed-checked` class)
- `renderCondensedCard(p)` helper added for reuse across all three tabs
- Museum detail tab dropdown reordered to Grid 2×2, Grid 3×3, List (was Condensed, Grid, List)

### Museum tab city sort: city + country label
- City headers in "By City" grouping now read "🇫🇷 Paris, France" instead of "🇫🇷 Paris"

### Museum tab: search bar stays visible in museum detail view
- `_museumsToolbar()` helper extracts the toolbar HTML for reuse; both `renderMuseumsView()` and `renderMuseumDetailView()` now render it, keeping the search bar pinned when a museum card is open

### Toolbar button highlight removed
- Sort, view, and group-by toolbar buttons on all three tabs no longer highlight gold when a non-default option is active — removed all state-based `active` conditions from those buttons

### Nav tab indicator thinned
- Gold top-line indicator on Paintings and Museums tabs reduced from 1.5px to 1px

### Toolbar content padding
- `.toolbar-spacer` height increased by 8px (`calc(var(--toolbar-h) + 8px)`) to add breathing room between the toolbar and content on all three tabs

## Session 35 — 2026-06-01

### Museum detail: search within museum
- Search bar placeholder changes to "Search {Museum Name}…" when a museum card is open
- Typing filters paintings by title or artist within that museum; "Collection (N of Total)" label reflects filtered count while the progress bar and collected stat always show the full museum
- Back button calls `closeMuseumDetail()` which clears `S.museumSearch` before returning — previous museums-list search is preserved
- `handleMuseumSearch()` and `closeMuseumDetail()` added; `_museumsToolbar()` switches input binding based on `S.view`

### Tab scroll memory + museum card persistence
- `_tabScroll` object tracks scroll position per tab; position is saved before leaving a tab and restored after rendering the new one (`requestAnimationFrame` to allow DOM to settle)
- `_museumsDetailState` saves the active museum and search when switching away from a museum card via a tab button; switching back to the Museums tab restores the museum card, not the list
- Back button (`closeMuseumDetail`) explicitly clears `_museumsDetailState` so Back always returns to the museum list

### Swipe right from left edge = Back
- `_initSwipeBack()` adds a global `touchstart`/`touchend` listener; a touch starting within 40px of the left edge that travels ≥ 80px rightward (mostly horizontal) triggers `_globalBack()`
- `_globalBack()` checks current state: overlays → `navBack()`, museum-detail → `closeMuseumDetail()`, settings → `closeSettings()`, stats → `closeStats()`

### Museum detail painting spacing
- `.mv-popup-body` horizontal padding reduced from 16px to 12px; added `padding-left: 0; padding-right: 0` overrides for `.paintings-grid` and `.paintings-compact` inside it — all three view modes now have 12px left/right margins matching the paintings tab

### Museum list top padding
- `.museum-section:first-child` gets `margin-top: 8px`; `.loc-section:first-child` and `.loc-group:first-child` get `margin-top: 6px` (2px less for city/country views)

### Settings: Stat Tracking option
- When scope is Up to 10 or Up to 30, a **Stat Tracking** row appears in the Tracking section with Top 100 / All options
- Top 100: header counter always shows top-100 progress (X / 100); All: shows all scoped paintings (default)
- `S.statTracking` persisted; `globalChecked()` and `globalTotal()` updated to respect it

### Settings: Painting List layout + copy
- Row changed to stacked layout (`.settings-row-stacked`) — description spans full width, toggle buttons sit below
- Description rewritten to explain the +10/+30 feature conversationally

### Museums tab country sort: Expand/Collapse All
- When "By Country" is the active grouping, the sort dropdown shows a divider + Expand All / Collapse All buttons (matching paintings tab style)
- `museumsExpandAll()` adds all country keys to `S.expandedContinents`; `museumsCollapseAll()` clears it

## Session 36 — 2026-06-01

### Stats page overhaul
- "In Scope" card replaced with "% Visited" (percentage of museums visited)
- Static "Progress by Continent" + expandable Museums sections replaced with a single "Progress by" section with a dropdown (Continent / Country / City / Museum)
- All four groupings use the same `cp-bar` progress bar format, sorted by % collected descending
- Country and City entries show flag emojis; Museum entries show visited checkmark
- `S.statProgressBy` persisted, defaults to Continent
- Extras (plus10/plus30) cards now visually tuck behind the Top 100 cards: 90% width, `top: -10px`, no top border, flat top corners, `z-index: 1` (main cards at `z-index: 2`)

### Sticky group headers fixed
- `.list-movement-header` `top` updated to include `var(--toolbar-h)` so headers pin below the fixed toolbar (not behind it)

### Museum list top padding
- Removed `margin-top: 6px` from `.loc-section:first-child` and `.loc-group:first-child` — natural header padding provides consistent spacing

### Settings: painting list buttons right-justified
- `.settings-row-stacked .settings-toggle-group { align-self: flex-end }` added

### Hover effects disabled on mobile
- All 23 `:hover` rules moved into a single `@media (hover: hover)` block — touch devices see no hover highlights

### Swipe-back: animated slide
- `_initSwipeBack()` rewritten with three phases: `pending` (waits for direction lock), `dragging` (follows finger with `translateX`, fades backdrop), commit/cancel (animates off-screen or springs back at 0.22s)

### Museums tab: Expand/Collapse All in country sort dropdown
- Divider + Expand All / Collapse All appear in the sort dropdown when By Country is active
- `museumsExpandAll()` / `museumsCollapseAll()` added

### Museums tab: painting spacing in detail view
- `.mv-popup-body` horizontal padding reduced to 12px; `.paintings-grid`/`.paintings-compact` inside override to 0 padding — matches paintings tab 12px margins

### Scrollbar hidden globally
- `::-webkit-scrollbar { display: none }` and `* { scrollbar-width: none }` replace the previous styled scrollbar

## Session 37 — 2026-06-01

### More Info links on painting detail card
- Added `wikiUrl` and `grokUrl` fields to the painting object shape
- Detail card shows a **More Info** spec box (4th cell in the 2-column specs grid, to the right of Movement) when either URL is present
- Two icon links: Wikipedia (circle with W polyline) and Grokipedia (rounded square with G arc), both open in a new tab
- `ICONS.wikipedia` and `ICONS.grokipedia` added to the icon map
- `.moreinfo-links` / `.moreinfo-link` CSS added; hover gated behind `@media (hover: hover)`
- First 10 paintings (IDs 1–10, all Louvre) have `wikiUrl` and `grokUrl` populated — awaiting review before adding remaining paintings

## Session 38 — 2026-06-02

### More Info links: full dataset
- Added `wikiUrl` and `grokUrl` to 251 paintings (all 100 ranked + 151 museum-only where articles are known)
- `grokUrl` set to `null` where the title is primarily a historical/biblical/mythological event name (The Last Supper, The Creation of Adam, The Birth of Venus, etc.) or the painting is too obscure — icon shows disabled in those cases
- Disabled icon style: `.moreinfo-link-disabled` with `opacity: 0.3; pointer-events: none`
- UI condition updated to `(p.wikiUrl || p.grokUrl)` — More Info box only appears when at least one URL is non-null
- The Wedding at Cana `grokUrl` corrected to `null` (no Grokipedia article exists)
- `ICONS.wikipedia` and `ICONS.grokipedia` added in Session 37

## Session 39 — 2026-06-02

### Database audit: capped all museums at 30 paintings
- Louvre had 38 (10 ranked + 28 extras) → removed 8 extras: Pierrot, Man with a Glove, Portrait of Anne of Cleves, Supper at Emmaus (Rembrandt 1648), Saint Sebastian Tended by Saint Irene, Portrait of Francis I, Saint Sebastian (Mantegna), The Supper at Emmaus (Titian)
- Musée d'Orsay had 39 (10 ranked + 29 extras) → removed 9 extras: On the Beach, Women in the Garden, Haystacks End of Summer, Dance in the Country, Young Girls at the Piano, Still Life with Apples and Oranges, The White Horse, The Tub, The Painter's Studio — trimmed over-represented artists (4→3 Manets, 4→2 Monets, 3→1 Renoirs, etc.)
- DB now 299 paintings; all museums ≤ 30; "Up to 30" scope shows all 299

### Add-paintings command: wikiUrl + grokUrl workflow
- Updated `.claude/commands/add-paintings.md` to include `wikiUrl` and `grokUrl` in the Step 3 research workflow and data shape reference
- Both fields required on all new paintings going forward; `null` if no English Wikipedia article exists

### Museum build-up: Santa Maria delle Grazie (1 → 3)
- Added **Crucifixion** (1495) by Giovanni Donato da Montorfano (ID 317) — the fresco on the south wall of the refectory opposite The Last Supper; confirmed Wikimedia Commons image
- Added **Scourging of Christ, Ecce Homo and Crucifixion** (1542) by Gaudenzio Ferrari (ID 318) — Chapel of the Holy Crown frescoes; `imageUrl: null` (no Commons image found)
- New artists: Giovanni Donato da Montorfano, Gaudenzio Ferrari
- Site capped at 3 total — a church/convent, not a museum; only 2 more notable works genuinely on-site

### Museum build-up: Musée de l'Orangerie (3 → 10)
- Added Young Girls at the Piano (Renoir, 1892, ID 319), Large Bather (Picasso, 1921, ID 320), The Little Pastry Chef (Soutine, c. 1922, ID 321), Father Junier's Cart (Rousseau, 1908, ID 322), Odalisque with Red Culottes (Matisse, 1921, ID 323), Portrait de Madame Cézanne (Cézanne, c. 1890, ID 324), Portrait de Mademoiselle Chanel (Laurencin, 1923, ID 325)
- `imageUrl: null` on Large Bather (Picasso copyright until 2043) and Portrait de Mademoiselle Chanel (no Commons image)
- New artists: Chaïm Soutine, Marie Laurencin

### Museum build-up: Neue Galerie New York (3 → 10)
- Added The Dancer (Klimt, c. 1916–17, ID 326), Berlin Street Scene (Kirchner, 1913, ID 327), Self-Portrait with Horn (Beckmann, 1938, ID 328), Martha Hirsch (Kokoschka, 1909, ID 329), Stein on the Danube Seen from the South (Schiele, 1913, ID 330), Self-Portrait in front of a Stove (Gerstl, c. 1906–07, ID 331), Forester's House in Weissenbach II (Klimt, 1914, ID 332)
- `imageUrl: null` on Kokoschka (copyright until 2050), Schiele landscape (no Commons image), Gerstl (no Commons image)
- New artists: Ernst Ludwig Kirchner, Max Beckmann, Oskar Kokoschka, Richard Gerstl

### Museum build-up: Yale University Art Gallery (3 → 10)
- Added House of Dr. Gachet (Cézanne, c. 1872–73, ID 333), Ballet Rehearsal (Degas, ca. 1891, ID 334), Camille on the Beach at Trouville (Monet, 1870, ID 335), Parau Parau (Gauguin, 1892, ID 336), The Waterfall (Kandinsky, 1909, ID 337), Young Woman Reclining in Spanish Costume (Manet, 1862, ID 338), Portrait of a Hanseatic Merchant (Holbein, 1538, ID 339)
- `imageUrl: null` on Ballet Rehearsal (no Commons image for Yale version)
- New artist: Wassily Kandinsky

### Museum build-up: Huntington Library (3 → 10)
- Added Sarah Siddons as the Tragic Muse (Reynolds, 1783–84, ID 340), View on the Stour near Dedham (Constable, 1822, ID 341), Breakfast in Bed (Cassatt, 1897, ID 342), The Long Leg (Hopper, 1935, ID 343), Virgin and Child (van der Weyden, c. 1460, ID 344), The Grand Canal Scene (Turner, c. 1837, ID 345), Mrs. William Playfair (Sargent, 1887, ID 346)
- `imageUrl: null` on The Long Leg (Hopper copyright until 2037)
- New artist: Joshua Reynolds

### Museum build-up: Vatican Museums (Apostolic Palace) (3 → 10)
- Added Liberation of Saint Peter (ID 347), Expulsion of Heliodorus (ID 348), Mass at Bolsena (ID 349), Meeting of Leo the Great and Attila (ID 350), Fire in the Borgo (ID 351) — all Raphael frescoes from the Room of Heliodorus and Room of the Fire in the Borgo
- Added Hall of the Saints / Disputation of Saint Catherine (Pinturicchio, 1492–94, ID 352) from the Borgia Apartments
- Added Scenes from the Lives of Saints Stephen and Lawrence (Fra Angelico, 1447–51, ID 353) from the Niccoline Chapel
- New artist: Pinturicchio

### Museum build-up: San Luigi dei Francesi (3 → 8, genuine limit)
- Added Scenes from the Life of Saint Cecilia (Domenichino, 1612–15, ID 354), Saint Cecilia (Guido Reni, c. 1606, ID 355), Assumption of the Virgin (Bassano the Younger, 1589, ID 356), Saint Louis IX between History and Faith (Plautilla Bricci, c. 1676–80, ID 357), Apotheosis of Saint Louis (Natoire, 1754–56, ID 358)
- Capped at 8 — church has no more culturally significant paintings beyond the 3 Caravaggios and these 5
- New artists: Domenichino, Guido Reni, Francesco Bassano the Younger, Plautilla Bricci, Charles-Joseph Natoire

### Museum search: no-results fix
- `renderMuseumDetailView()` crashed on `paintings[0].location` when search yielded no results; changed to always read from `allMuseumPaintings[0]`
- Shows "No paintings match your search." empty state inside the detail view instead of soft-locking

### Collection empty state: whimsical messages + icon
- Replaced `🖼️` emoji with `ICONS.frame` SVG (gold-tinted via `.empty-state .empty-icon svg` CSS rule)
- "No paintings collected" case now picks randomly from 6 witty completions of "Your gallery is empty —"
- Favorites empty state uses `ICONS.heart`; Paintings tab search no-results also updated to SVG icon

### 3×3 grid: collect button
- Added `.card-collected-badge` button to `renderCondensedCard()` — same circle, gold-fill, check icon as the 2×2 grid
- `.card-collected-badge::before { inset: -8px }` extends the tap target 8 px beyond the visible button on all sides

### Swipe-back: cleaner overlay transitions
- Removed backdrop fade-during-drag so #main no longer shows through while swiping (backdrop stays opaque until commit)
- After commit, overlay and backdrop fade out together over 220ms
- Added `swipe-back-open` body class + CSS rules to suppress `slideUp`/`fadeIn` animations on re-opened previous overlay, eliminating the "pop" on return
- Museum-detail swipe still gesture-only (no translateX on #main) from prior session

### Museums tab: By Visited sort mode
- New "By Visited" option appears in the museums group-by dropdown when ≥1 museum is marked visited
- Shows visited museums first (alphabetical, gold border) then unvisited below (alphabetical) with section labels
- Falls back to alpha view if all visited museums are later unmarked

### Museums tab: visited indicator replaced with gold border
- Removed inline `museum-visited-check` checkmark span from museum name in city/country views
- Visited museums now show `.museum-header.visited-museum { border-color: var(--gold-dim) }` — matches collected painting card border style
- Applied to all three museum tab views (alpha, city, country) via `visited-museum` class on the header element

### Museum build-up: Mauritshuis (8 → 10)
- Added As the Old Sing, So Pipe the Young (Jan Steen, c. 1668–70, ID 359) — definitive version of Steen's most famous proverb painting
- Added View of Haarlem with Bleaching Grounds (Jacob van Ruisdael, c. 1670–75, ID 360) — finest Dutch landscape in the collection
- New artist: Jacob van Ruisdael (no known portrait exists)

### Museum build-up: Marmottan Monet Museum (4 → 10)
- Added The Train in the Snow (Monet, 1875, ID 361) — locomotive dissolving into blizzard at Argenteuil
- Added Rouen Cathedral, Facade (Sunset) (Monet, 1892–94, ID 362) — twilight version from the landmark series; subtitled "harmonie in gold and blue"
- Added Parliament, Reflections on the Thames (Monet, 1905, ID 363) — Houses of Parliament in violet-orange fog from the London series
- Added At the Ball (Berthe Morisot, 1875, ID 364) — frontal female gaze; painted the year of the first Impressionist exhibition
- Added The Cherry Tree (Berthe Morisot, 1891, ID 365) — Morisot's most ambitious composition; tall vertical format, daughter Julie picking cherries
- Added Self-Portrait (Berthe Morisot, 1885, ID 366) — palette in hand, artist looking directly at viewer; centerpiece of the world's largest Morisot collection
- No new artists (Monet and Morisot already in ARTISTS)

### Museum build-up: Phillips Collection (4 → 10)
- Added The Repentant St. Peter (El Greco, c. 1600–05, ID 367) — Duncan Phillips called El Greco "the first impassioned expressionist"; elongated twisting figure in electric blue robe
- Added Entrance to the Public Gardens in Arles (Van Gogh, 1888, ID 368) — strident saturated colors from the most intensely creative Arles period; acquired by Phillips in 1930
- Added The Road Menders (Van Gogh, 1889, ID 369) — painted from the window of the Saint-Paul asylum; dazzling planes of yellow and gold, "the most successful" of the series per Van Gogh
- Added Ginger Pot with Pomegranate and Pears (Cézanne, 1893–94, ID 370) — a daring still life with tilted perspective; the ginger pot recurs across Cézanne's late still-life cycle
- Added Tree Nursery (Paul Klee, 1929, ID 371) — geometric grid of colored rectangles evoking seedling nursery rows; Klee's Bauhaus years at their most systematic and playful
- Added Green and Maroon (Mark Rothko, 1953, ID 372) — transitional canvas between Rothko's red and black periods; two stacked rectangles that reward sustained, close attention
- New artists: El Greco, Paul Klee, Mark Rothko

### Museum build-up: J. Paul Getty Museum (4 → 10)
- Added Portrait of a Halberdier (Jacopo Pontormo, 1529–30, ID 373) — supreme Mannerist portrait; acidic green doublet against pale blue, sold for a record $32.5 million in 1989
- Added Danaë (Orazio Gentileschi, c. 1623, ID 374) — Zeus as shower of gold coins; clear even light unlike Baroque contemporaries; acquired by Getty in 2016 for $30.5 million
- Added An Old Man in Military Costume (Rembrandt, c. 1630–31, ID 375) — Rembrandt's father or a Leiden neighbour in archaic gorget; one of the earliest works in the Getty's Rembrandt holdings
- Added Jeanne (Spring) (Édouard Manet, 1881, ID 376) — Manet's last great female portrait; model Jeanne Demarsy in flowered hat with parasol; `imageUrl: null` (Manet copyright expired but no Commons file found)
- Added Wheatstacks, Snow Effect, Morning (Monet, 1891, ID 377) — from the Haystacks series, exhibited at Durand-Ruel 1891 where all 15 sold within three days of opening
- Added Christ's Entry into Brussels in 1889 (James Ensor, 1888, ID 378) — vast 14-foot canvas of masked carnival crowd; Ensor's masterpiece, prophetic of Expressionism and Surrealism
- New artists: Jacopo Pontormo, Orazio Gentileschi, James Ensor

### Museum build-up: Philadelphia Museum of Art (4 → 10)
- Added Saint Francis of Assisi Receiving the Stigmata (Jan van Eyck, c. 1430–32, ID 379) — smallest panel painting by a major master; microscopic alpine landscape in 5-inch panel
- Added Prometheus Bound (Rubens, c. 1611–18, ID 380) — eagle by Frans Snyders; Rubens considered it one of his most important works, retained it personally for years
- Added The Life Line (Winslow Homer, 1884, ID 381) — hero rescues unconscious woman on breeches buoy; Homer's breakthrough work at the 1884 National Academy exhibition
- Added The Annunciation (Henry Ossawa Tanner, 1898, ID 382) — Mary as an ordinary Palestinian teenager; the angel rendered as a column of golden light, rejecting academic convention
- Added Soft Construction with Boiled Beans (Premonition of Civil War) (Dalí, 1936, ID 383) — painted six months before the Spanish Civil War began; grotesque body tears itself apart; `imageUrl: null` (Dalí copyright until 2059)
- Added The Large Bathers (Renoir, 1884–87, ID 384) — Renoir's most ambitious figure painting; three years in preparation; a departure from Impressionism toward classical line
- New artists: Henry Ossawa Tanner (Winslow Homer already in ARTISTS)

### Museum build-up: National Museum of Norway (4 → 10)
- Added Blue Interior (Harriet Backer, 1883, ID 385) — woman reading by window in warm interior light; Backer's masterpiece and the finest Norwegian Impressionist interior painting
- Added Albertine in the Police Doctor's Waiting-Room (Christian Krohg, 1887, ID 386) — scandalous social-realist painting depicting registered prostitutes; the novel it illustrated was seized by police
- Added View from Stalheim (Johan Christian Dahl, 1842, ID 387) — spectacular panorama of the Nærøydalen valley; the definitive Romantic landscape of Norway
- Added Bridal Procession on the Hardangerfjord (Hans Gude, 1848, ID 388) — boats of wedding guests in national costume on the Hardanger; Adolph Tidemand painted the figures while Gude painted the landscape
- Added Madonna (Edvard Munch, . 1894–95, ID 389) — the most enigmatic of Munch's subjects; the female figure oscillates between sacred and erotic, saint and femme fatale
- Added Winter at the River Simoa (Frits Thaulow, 1883, ID 390) — still winter river with ice-edged banks; Thaulow's Naturalist style bridges Norwegian Romanticism and Impressionism
- New artists: Harriet Backer, Christian Krohg, Johan Christian Dahl, Hans Gude, Frits Thaulow

### Museum build-up: Vatican Museums — Sistine Chapel (4 → 10)
- Added The Creation of Eve (Michelangelo, 1509–10, ID 391) — God gestures Eve out of the sleeping Adam's side; one of the nine Genesis narratives on the ceiling
- Added The Creation of the Sun, Moon, and Plants (Michelangelo, 1511, ID 392) — God shown twice in one panel; vigorous foreshortening of the divine figure, back turned on the second pass
- Added The Libyan Sibyl (Michelangelo, 1511–12, ID 393) — most admired of the five sibyls; preparatory red-chalk study for her hands is one of the most celebrated drawings in art history
- Added Temptations of Christ (Botticelli, 1481–82, ID 394) — three episodes of Satan's temptations painted across a single continuous landscape on the south wall; `imageUrl: null` (no suitable Commons image)
- Added Delivery of the Keys (Pietro Perugino, 1481–82, ID 395) — Christ hands keys to Peter before an ideal Renaissance piazza; the clearest statement of papal authority on the chapel walls
- Added The Punishment of Korah, Dathan, and Abiram (Botticelli, 1481–82, ID 396) — rebels against Moses's authority swallowed by the earth; the Arch of Constantine in the background underlines Rome's succession from Israel
- New artist: Pietro Perugino

### Museum build-up: Gemäldegalerie Alte Meister (4 → 10)
- Added Holy Night (Nativity) (Correggio, c. 1528–30, ID 397) — Mary's radiance illuminates the nocturnal scene from within the Child; first fully night-lit nativity in Italian painting
- Added The Procuress (Vermeer, 1656, ID 398) — Vermeer's earliest dated genre painting; a soldier pays for a woman's favors while another man watches; self-portrait in left corner
- Added The Prodigal Son in the Brothel (Rembrandt, c. 1635, ID 399) — self-portrait with Saskia on his knee in a tavern scene; Rembrandt playing the Prodigal to his wife's barmaid
- Added Duke Henry the Pious (Lucas Cranach the Elder, 1514, ID 400) — pendant portraits of Henry and his wife Catherine of Mecklenburg; finest courtly portraits of the German Renaissance
- Added Portrait of Charles de Solier, Sieur de Morette (Hans Holbein the Younger, 1534–35, ID 401) — French ambassador to England; Holbein's most powerful male portrait, with unwavering psychological presence
- Added Dresden Triptych (Jan van Eyck, c. 1437, ID 402) — tiny foldable altarpiece with the Virgin enthroned flanked by saints; inscribed with Van Eyck's motto and dated 1437
- New artists: Correggio, Lucas Cranach the Elder (Hans Holbein the Younger already in ARTISTS)

### Museum build-up: Museo de Arte Moderno (4 → 10)
- Added Creation of the Birds (Remedios Varo, c. 1957, ID 403) — owl-like painter mixes moonlight from a flask to create birds that fly off the canvas; Varo's meditation on artistic creation; `imageUrl: null` (copyright until 2033)
- Added Portrait of Lupe Marín (Diego Rivera, 1938, ID 404) — uncompromising frontal portrait of Rivera's former wife, known for her sharp wit and striking appearance; `imageUrl: null` (copyright until 2027)
- Added The Magical World of the Mayas (Leonora Carrington, 1963, ID 405) — mural-scale canvas blending pre-Columbian mythology with Surrealist imagery; commissioned for the National Museum of Anthropology; `imageUrl: null` (copyright until 2044)
- Added El Coronelazo (Self-Portrait) (David Alfaro Siqueiros, 1945, ID 406) — Siqueiros depicts himself in a colonel's coat with fist raised; bold Pyroxilin lacquer on masonite with his characteristic spray technique; `imageUrl: null` (copyright until 2044)
- Added Caravan (Remedios Varo, 1955, ID 407) — cloaked figures whose robes sprout wheels, traveling through a desolate townscape; Varo's signature fusion of medieval imagery and Surrealist displacement; `imageUrl: null` (copyright until 2033)
- Added Day of the Dead (Diego Rivera, c. 1944, ID 408) — folk festival scene with skeletal revelers and flowers; Rivera's celebration of pre-Hispanic death ritual as living popular culture; `imageUrl: null` (copyright until 2027)
- New artists: Remedios Varo, Leonora Carrington, David Alfaro Siqueiros

### Museum build-up: Barnes Foundation (5 → 10)
- Added Mussel-Fishers at Berneval (Renoir, 1879, ID 409) — Barnes's last-ever Renoir purchase (1942), coveted for decades; 175 cm monumental outdoor figure painting of Norman coast children
- Added The Artist's Family (Renoir, 1896, ID 410) — life-size group portrait of Renoir's wife, sons, and nursemaid; hangs directly below Cézanne's Large Bathers on the east wall of the main gallery
- Added The Music Lesson (Matisse, 1917, ID 411) — family portrait around the Pleyel piano at Issy; warm domestic counter-statement to Matisse's own austere Piano Lesson (at MoMA) from the year before
- Added Acrobat and Young Harlequin (Picasso, 1905, ID 412) — Rose Period canvas of two circus figures in post-performance stillness; acquired by Barnes in 1924 through Paul Guillaume; `imageUrl: null` (Picasso copyright until 2043)
- Added The Large Bathers (Cézanne, 1895–1906, ID 413) — Barnes's crown-jewel Cézanne; 13 bathers in cathedral-like tree-arch space; left unfinished at Cézanne's death; hangs at apex of the main gallery
- No new artists

### Museum build-up: Österreichische Galerie Belvedere (5 → 10)
- Added Death and the Maiden (Schiele, 1915, ID 414) — Schiele's own face as Death embracing a woman clinging to him; painted the year he married Edith Harms, read as a farewell to his companion Wally Neuzil
- Added The Embrace (Lovers II) (Schiele, 1917, ID 415) — two nude figures locked in total embrace across the full vertical canvas; one of his last and most monumental figure compositions
- Added Early Spring in the Vienna Woods (Waldmüller, 1861, ID 416) — violets and primroses in botanical close-up while snow still lies in the shadows; Waldmüller's argument for direct painting from nature made visible; Belvedere holds the world's largest Waldmüller collection
- Added Tegetthoff in the Naval Battle of Lissa (Romako, 1878–80, ID 417) — admiral and terrified sailors at the moment of ramming; mocked in 1882, now considered the greatest Austrian 19th-century history painting and a visionary precursor to Expressionism
- Added Rocky Landscape in the Elbe Sandstone Mountains (Caspar David Friedrich, 1822–23, ID 418) — massive sandstone formations dwarfing two tiny figures; Friedrich's conviction that landscape was the supreme vehicle for spiritual experience
- New artists: Ferdinand Georg Waldmüller, Anton Romako, Caspar David Friedrich

### Museum build-up: Kunsthistorisches Museum (5 → 10)
- Added The Art of Painting (Vermeer, c. 1666–68, ID 419) — Vermeer's largest, most ambitious work; kept in his home unsold until death; model posed as Clio, Muse of History — his declaration of painting's intellectual dignity
- Added Madonna of the Meadow (Raphael, 1505–06, ID 420) — triangular pyramid composition of Mary, Christ, and John the Baptist in Umbrian landscape; the template for Renaissance Madonnas for a century; also called Madonna del Belvedere
- Added Helena Fourment in a Fur Robe (Rubens, c. 1636–38, ID 421) — Rubens's young wife stepping from the bath, wrapped only in black fur; kept privately and left to her by name in his will; the most intimate Old Master nude
- Added Infanta Margarita Teresa in a Blue Dress (Velázquez, 1659, ID 422) — the same Infanta from Las Meninas, now eight, in enormous blue crinoline dispatched to Vienna as a diplomatic gift; loose brushstrokes anticipate Impressionism
- Added Madonna of the Rosary (Caravaggio, c. 1601–07, ID 423) — Caravaggio's largest surviving canvas and his only conventional altarpiece; Saint Dominic distributes rosaries while dirty feet crowd the bottom edge; brought north by Rubens
- No new artists


### Museum build-up: Wallace Collection (5 → 10)
- Added The Lady with a Fan (Velázquez, c. 1638–39, ID 424) — unidentified Spanish woman with veil and fan; one of three Velázquezs in the collection; she has been called the most mysterious woman in Spanish art
- Added Titus, the Artist's Son (Rembrandt, c. 1657, ID 425) — Rembrandt's only surviving child at sixteen in Venetian costume; painted the year after Rembrandt's bankruptcy; authenticity never questioned
- Added The Rising of the Sun (Boucher, 1752, ID 426) — Apollo ascending into the sky; monumental Gobelins tapestry commission for Madame de Pompadour at 378 × 261 cm; considered Boucher's supreme achievement
- Added Mrs. Mary Robinson ('Perdita') (Gainsborough, 1781, ID 427) — commissioned by the Prince of Wales after his affair with the actress; she holds his miniature; one of the most elegant portraits of 18th-century England
- Added Venice: The Bacino from the Giudecca (Canaletto, c. 1735–44, ID 428) — panorama from the Giudecca canal toward San Giorgio Maggiore; one of eight Canalettos in the collection; benchmark veduta painting
- New artists: François Boucher

### Museum build-up: Tate Modern (5 → 10)
- Added Black on Maroon (Rothko, 1958, ID 429) — one of nine Seagram Murals donated to Tate after Rothko withdrew them from a New York restaurant; experienced in near-darkness as hovering doorways; `imageUrl: null` (copyright until 2040+)
- Added Marilyn Diptych (Warhol, 1962, ID 430) — 50 Monroe faces, vivid left / fading grey right; made weeks after her death; `imageUrl: null` (copyright until 2057)
- Added The Elephant Celebes (Ernst, 1921, ID 431) — mechanical elephant-form beside a headless torso; Dada/proto-Surrealist; the movement's earliest fully realized masterpiece; pre-1927 PD in US
- Added IKB 79 (Yves Klein, 1959, ID 432) — seamless ultramarine monochrome in Klein's patented International Klein Blue; acquired by Tate 1972; `imageUrl: null` (copyright until 2032+)
- Added Yellow Islands (Pollock, 1952, ID 433) — black poured enamel with yellow and crimson added by brush then tilted; finest Pollock in Europe; `imageUrl: null` (copyright until 2047)
- New artists: Max Ernst, Yves Klein

### Museum build-up: Galleria Borghese (5 → 10)
- Added The Deposition (Raphael, 1507, ID 434) — Raphael's first large altarpiece; seized by Cardinal Borghese from Perugia in 1608 causing public scandal; sweeping dynamism from classical sarcophagi study
- Added Danaë (Correggio, c. 1531, ID 435) — Zeus as golden shower; warm and languorously sensual; later inspired Titian's entire Danaë series; spent years in French royal collection before Borghese 1827
- Added Boy with a Basket of Fruit (Caravaggio, c. 1593, ID 436) — Caravaggio at ~20 years old; meticulously observed decaying fruit signals his naturalist revolution; model was companion Mario Minniti
- Added Susanna and the Elders (Rubens, c. 1607, ID 437) — painted in Rome during Rubens's Italian years; absorbs Michelangelo and Titian into an intimate vertical format; earliest Rubens treatment of this subject
- Added The Hunt of Diana (Domenichino, 1616, ID 438) — 225 × 320 cm Arcadian archery scene; seized by Cardinal Borghese from its patron within a year of completion; Raphael-influenced outdoor space
- No new artists


## Session 40 — 2026-06-02

### Force App Update Setting
- Added **Force app update** button to Settings → About section — unregisters all service workers, clears all caches, and hard-reloads to fetch the latest version without reinstalling the PWA
- User data (localStorage and IndexedDB) is unaffected; only the HTTP cache is cleared

### Collect Badge on Museum Detail 3×3 View
- Museum detail condensed (3×3) view now uses `renderCondensedCard` instead of inline rendering — collect badge matches the paintings tab exactly

### Fix Image Flash on Collect Toggle
- `rowToggleCheck` and `detailToggleCheck` no longer call `render()`, eliminating the full `innerHTML` replacement that caused all images to flash on every check/uncheck
- Added `data-pid` attribute to `painting-card`, `painting-row`, and `mv-popup-painting` wrappers
- New `_patchCheckState()` helper surgically updates card classes, badge icon, and header counter in-place

### Fix Cypresses Image (ID 35, rank #76)
- Corrected `imageUrl` — was showing *Wheat Field with Cypresses* (National Gallery, London); now shows the correct *Cypresses* (Met, New York, `Cypresses_MET_DP130999.jpg`)

### Detail Card Button Polish
- Favorite button is now truly centered in the nav bar — switched `.detail-nav` from flex `space-between` to a 3-column grid (`1fr auto 1fr`)
- Favorite button visibility changed from `display:none/flex` to `opacity`+`pointer-events` so the grid slot is always reserved
- After marking a painting as **Collected** or **Favorited**, the button label text animates away after 2.5 s, leaving just the icon; same timer fires on open if already in that state
- `toggleFavorite` no longer calls `render()`, eliminating image flash on favorite toggle
- `min-height: 32px` on both buttons prevents 1 px height shift when label collapses
- Pull-down-to-close now works anywhere on the card when scrolled to top (not just the nav handle); 8 px hysteresis avoids mis-firing on taps
- Unfavorite/uncollect transitions smoothed — icon and content swap delayed until after the colour transition completes; favorite button innerHTML not rewritten while fading out on uncollect
- Added **Version** row to Settings → About; `VERSION` constant in `app.js` auto-incremented by a pre-commit git hook on every commit (scheme: `1.0.<build>`)
- Prevent vertical scroll during swipe-back gesture — `touchmove` listener switched to `passive:false` so `preventDefault()` can be called once direction is locked rightward

### Church-Museum Scope Notes
- Added `scopeNote` field to `MUSEUMS_INFO` for **San Luigi dei Francesi** and **Santa Maria delle Grazie** — shown below the blurb in italic when +10 or +30 scope is active, explaining that the limited painting count reflects the actual extent of works in a single active church


## Session 41 — 2026-06-03

### Artist Sort Bio Alignment — 12:48am
- Fixed `margin: 12px 0 0` on `.mv-row-full-summary` — the top margin was pushing bio text 12 px below the portrait's top edge; set to `margin: 0` so text aligns flush with the image

### Artist Portrait Vertical Centering — 12:53am
- Added `margin-top: 4px` to `.artist-portrait` — centres the 88 px image between the top of the bio text and the top of the first text line that resumes below the float


## Session 42 — 2026-06-07 & 2026-06-08

### Stats & Museums Tab Icons — 11:56pm
- Aligned Stats "progress by" dropdown and Museums sort buttons to a consistent icon set: Continent = `ICONS.globe`, Country = `ICONS.flag` (Lucide flag), City = `ICONS.pin`
- Added `ICONS.flag` and `ICONS.earth` (Lucide) to the `ICONS` object

### Museums Tab Country Icon — 12:10am
- Updated Museums "By Country" sort button to use `ICONS.flag`, matching the Stats dropdown

### Museum Detail Swipe-Back Animation — 12:19am
- Swiping right from the left edge on the museum detail page now slides `#main` to the right and reveals the museum list beneath it, rather than jumping back instantly
- On swipe start a `#swipe-back-bg` fixed layer is inserted before `#main` containing a rendered snapshot of the museum list, scrolled to the saved position from when the detail was opened
- On commit (`dx ≥ 80px`): `#main` animates off-screen right, bg is removed, then `closeMuseumDetail()` fires; on cancel: `#main` snaps back and bg is removed
- Added `background: var(--bg)` to `#main` so the detail page fully covers the bg layer at rest

### Swipe-Back Toolbar Fix — 12:26am
- `#toolbar` is `position: fixed`; CSS spec causes fixed children of transformed ancestors to lose viewport-relative positioning — the toolbar shifted when scrolled
- Fix: detach `#toolbar` from `#main` into `<body>` before applying `translateX`, restore it before `.toolbar-spacer` on cancel, and let `render()` recreate it on commit
