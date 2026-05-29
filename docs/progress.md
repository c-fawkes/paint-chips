# Paint Chips — App Overview & Session Progress

---

## App Overview

### What it is

Paint Chips is a personal Progressive Web App (PWA) checklist for tracking which of the world's 100 most famous paintings you've seen in person. It's built for museum-goers who travel specifically to see art, or who want to cross off the canonical masterpieces as they encounter them.

The app lives at [github.com/c-fawkes/paint-chips](https://github.com/c-fawkes/paint-chips) and is deployed to GitHub Pages at `/paint-chips/`. It can be installed to the home screen on iOS and Android via the PWA manifest, where it runs in standalone (full-screen, no browser chrome) mode. All data is stored locally in the user's browser — no account, no backend.

---

### How it's built

**No framework, no build step.** Three files loaded as plain `<script>` tags in `index.html`:

- **`data.js`** — pure data, no logic. Defines two globals: `PAINTINGS` (array of 100 painting objects) and `MUSEUMS` (lookup object keyed by museum name). Loaded first so `app.js` can reference it.
- **`app.js`** — all application logic. One global state object `S`, mutated in place, re-rendered via `innerHTML` replacement. No virtual DOM, no reactivity framework.
- **`styles.css`** — all styles. Uses CSS custom properties for the full design token set.

**Persistence** is `localStorage` only. The `save()` / `load()` functions in `app.js` serialize the relevant subset of `S` (checked status, photos, user-added paintings, UI preferences) to a single key `pc_state`. Photos are stored as base64 data URLs directly in localStorage — there's no file system or remote storage.

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

#### Collection tab

Shows only paintings marked as seen. Three display modes: Grid / Compact / Gallery (full-bleed framed artwork view).

#### Stats view

Accessible by tapping the `X / Y` counter in the header. Shows seen count, total, % complete, museums visited, progress bars by continent, and top museums by paintings seen.

#### Settings

Accessible via the gear icon in the header (toggles closed on re-press). Two settings:
- **Units** — Metric / Imperial (affects dimension display in detail sheet)
- **Painting List** — Top 100 / All Famous (gates which paintings appear everywhere via `scopedPaintings()`)

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
- Four-tab PWA shell: Top 100, Museums, Locations, Stats
- Per-museum accordion with painting counts and progress bars
- Continent → Country → City → Museum drill-down in Locations tab
- Global progress bar and counter in the fixed header
- Check-off ("seen") toggle on each painting row, persisted to localStorage
- User photo capture — attach personal photos to any checked painting, stored as base64 data URLs
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
- Merged old Map and Museums tabs into a single **Museums** tab with sub-modes: Alpha / City / Country / Continent
- Added **Collection** tab with three display modes: grid, compact, and gallery (full-bleed framed artwork view)
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
- Movements page lists all 18 movements with era, truncated summary, and 3 thumbnail previews

### Art Movements accordion
- Movements page rows are collapsed by default; clicking expands to reveal the full essay, key characteristics, and up to 6 painting thumbnails
- Chevron rotates 180° on expand; open rows get a gold border accent
- Movement tag in the painting detail sheet opens the movement popup (whole spec box is the tap target)

### Detail sheet improvements
- Added "Collection" button to the detail nav (between Back and Seen); hidden when unseen, fades in when "Mark Seen" is toggled on; clicking navigates directly to the Collection tab
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
- **Painting List** scope toggle (Top 100 / All Famous) — controls which paintings appear everywhere; `scopedPaintings()` helper gates all view functions; persisted to localStorage

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
- Layout: Paint Chips brand → gold "100" hero number → "masterpieces. One lifetime." → 35 / 21 / 12 stat columns → body copy → 1425–1962 timeline bar → "Begin your journey" CTA
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
- The collection button in the detail modal is now a toggle: "In Collection" (gold, active) vs "Add to Collection" (dimmed)
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
- Date seen field added below the note: defaults to today when a painting is first marked as seen, editable via a date picker, or togglable to "Unknown"; persisted in `S.dateSeen`

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
- Added a dice (⚄) button in the app header, left of the settings gear, that opens an Art Quiz modal
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

## Session 20 — 2026-05-28

### Toolbar gap fix (scroll-to-top)
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

## Session 19 — 2026-05-28

### Sticky group subheaders
- Group headers (artist / museum / movement sorts on both Paintings and Collection tabs) were already `position: sticky` but `top: 0` hid them under the fixed app header
- Fixed by setting `top: calc(var(--header-h) + env(safe-area-inset-top, 0px) + 3px)` so they pin just below the header + progress bar

### Artist popup layout
- Portrait image no longer crammed at the very top — `mv-popup-body` top padding increased from 4px to 16px
- Bio text now flows alongside the portrait: portrait is `float: left` with right/bottom margin inside `.artist-bio-wrap`; text starts inline and wraps under the image naturally
- Name and nationality/years meta sit as full-width lines above the float section

### Hide-on-scroll toolbar
- Toolbar (search bar + sort + view buttons) is now `position: sticky` at the header bottom edge
- Scrolling down past 60px hides it by translating it above the fixed header (`.toolbar-up` class); scrolling up anywhere brings it back with a 0.22s ease transition
- Scroll state (`_toolbarHidden`, `_lastScrollY`) resets on every `render()` so the toolbar is always visible after a tab or sort change
- Single `window` scroll listener added in `init()`; no re-attachment needed after re-renders

## Session 18 — 2026-05-28

### Header counter centered
- Wrapped the quiz and settings buttons in a `.header-actions` div with `flex: 1; justify-content: flex-end`
- `h1` retains `flex: 1` on the left; counter now sits between two equal-flex flanks and is naturally centered

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

## Session 27 — 2026-05-29

### Paintings tab sort dropdown parity with collection tab
- Added contextual icons to all six sort options: hash (Rank), brush (Artist), calendar (Year), type-T (Title), museum building (Museum), palette (Movement)
- Active sort option shows a checkmark aligned to the right, matching collection tab style
- Expand All / Collapse All section appears below a divider when sort is Artist, Museum, or Movement
- `listExpandAll()` / `listCollapseAll()` operate on the paintings tab's own Sets (`expandedListArtists`, `expandedListMuseums`, `expandedMovements`) — no cross-tab bleed
