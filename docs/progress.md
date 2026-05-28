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
│  Top 100 │ Museums │ Collection │ Stats  │  ← fixed bottom nav (#bottom-nav)
└──────────────────────────────────────┘
```

- The **header** is fixed at 56px + iOS safe area inset. Shows the app name in serif gold and a pill counter showing seen / total.
- The **progress bar** is a 3px gold gradient strip immediately below the header, always reflecting the current seen count.
- **`#main`** is the only element that changes. Every tab switch and state update calls `render()`, which sets `main.innerHTML` to the output of the active view's render function. There is no DOM diffing.
- The **bottom nav** is fixed at 60px + iOS safe area inset. Built once in `init()` from a static array of nav items; active state is toggled by adding/removing the `active` class.

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

#### Top 100 tab

The main list of all 100 paintings (plus any user-added extras). The default sort is by rank (1–100).

**Grid view** — two-column card grid on mobile, three columns at 600px, four at 900px. Each card shows:
- The painting image (3:4 aspect ratio, `object-fit: cover`)
- Rank badge (top-left, `#N`)
- Seen badge — circular check button (top-right); tapping it toggles seen status without opening the detail view
- Photo badge — 📷 emoji (bottom-right) if you've attached personal photos
- Title (serif, 2-line clamp), artist name, city below

**Compact/list view** — toggled by the grid/rows button in the toolbar. Each row shows a small thumbnail (52×64px), title + artist + year, rank, and a circular check button on the right.

**Sort** — a single button cycles through: Rank → Artist → Year → Title → Museum → Rank. When sorted by Museum, the list auto-groups paintings under their museum with a seen counter header.

**Search** — filters by title, artist, museum name, or country as you type. No debounce; renders on every keystroke.

**Filter chips** — when you navigate from the Museums tab to a location (museum, city, country, or continent), a filter chip appears at the top of the Top 100 list showing the active filter. Tapping the chip's ✕ clears it back up one level of the hierarchy.

#### Detail sheet

Tapping any painting (card or row) opens a bottom sheet modal that slides up with animation. On wide screens (600px+) it centers as a dialog instead. Structure top to bottom:

- Drag handle (decorative pill)
- Back button + "Mark Seen" / "Seen ✓" toggle button
- Full painting image (`object-fit: contain`, max 50vh)
- Rank badge + title (serif 1.35rem) + artist and year
- Location box (museum name + city, country) with a gold pin icon
- Medium and dimensions in a two-column spec grid (if data exists)
- Description paragraph (historical context, 2–4 sentences per painting)
- Your Photos section — a 3-column grid of uploaded photos, each with a ✕ delete button; tapping a photo opens it in a full-screen lightbox
- "Add your photo" button — triggers native camera/file picker; uploading a photo automatically marks the painting as seen

Tapping the backdrop or the Back button closes the sheet and restores body scroll.

#### Museums tab

Browse all 35 museums with four sub-mode tabs at the top:

- **Museums (alpha)** — flat alphabetical list of every museum. Each museum is a collapsible accordion row showing the museum name, city + country, seen/total counter, and a flag emoji for the country. Expanded state reveals a mini progress bar, compact painting rows sorted by rank, and an "Add painting" button.
- **City** — museums grouped under their city. Each city header shows total seen/total count.
- **Country** — collapsible country sections, each containing city sub-sections and their museums.
- **Continent** — three-level accordion: Continent → Country (collapsed) → City → Museum. Continent headers show a globe emoji and total count.

All four modes use the same `renderMuseumBlock()` for individual museum accordions. Expanded/collapsed state for museums, continents, and countries is tracked in three `Set` objects in `S` that are not persisted (reset on page load).

The "Add painting" button in each museum accordion opens a form modal pre-filled with that museum's city, country, and continent. Submitting it adds to `S.userPaintings` and the `MUSEUMS` lookup.

#### Collection tab

Shows only paintings the user has marked as seen. Empty state prompts them to start checking paintings off in the Top 100 tab.

Three display modes toggled by buttons in the header:
- **Grid** — same 2-column card grid as Top 100
- **Compact** — same compact row layout as Top 100
- **Gallery** — a vertical stack of paintings rendered as framed museum pieces: dark brown wooden frame (`#3b2a14`), inner highlight and shadow box-shadows, cream-colored mat (`#f0ead8` with inset shadow), then the painting image full-width. Each frame is clickable to open the detail sheet.

The seen count is shown in the header: "N of 100 paintings seen".

#### Stats tab

Four stat cards in a 2×2 grid (4×1 on wide screens):
- Paintings Seen
- Total in List
- % Complete
- Number of Museums

Below: progress bars for each continent (Europe and North America currently; South America, Asia, Africa, Oceania will populate as users add paintings there). Then a "Top Museums" list showing the 8 museums with the most seen paintings, each with its own progress bar.

#### Photo capture

In the detail sheet, tapping "Add your photo" opens the native file picker with `accept="image/*" capture="environment"` — on mobile this surfaces the camera directly. Images are read via `FileReader` as base64 data URLs and stored in `S.photos[id]`. Uploading a photo automatically marks the painting as seen.

Photos appear in a 3-column grid in the detail sheet. Tapping any photo opens a full-screen lightbox (black overlay, `object-fit: contain`). The ✕ button deletes the photo from state.

Photos are large — storing many base64 images in localStorage can approach the 5–10MB browser limit. There's no current compression or warning.

#### Add custom painting

Available from any museum's expanded accordion in the Museums tab. A modal form with fields for title (required), artist (required), year, description, museum, city, country, continent (select), and image URL. Submitted paintings get `id: 'u_<timestamp>'`, `rank: 9999`, and `isUser: true`. They appear everywhere canonical paintings do — in the Top 100 list, Museums tab, Collection, and Stats.

---

## Session Progress

---

## Session 6 — 2026-05-28

**Commits:** *(this commit)*

### Artist bios, portraits, and museum blurbs/photos
- Added `ARTISTS` constant to `data.js` with individual short bios, birth/death dates, and nationality for all ~80 artists in the app
- Added `ARTIST_PORTRAITS` with Wikimedia Commons portrait image URLs for each artist (self-portraits and well-known photographs)
- Added `MUSEUMS_INFO` with a 3-4 sentence blurb and exterior/landmark photo URL for all 35 museums
- Artist popup now shows: circular portrait thumbnail, name, nationality + dates, bio paragraph, movement chips (tappable to open the movement popup), and all their works in a grid
- Museum popup now shows: full-width exterior photo, flag + city/country, seen progress bar, blurb paragraph, and the full painting collection grid

### Movements sort + Artist/Museum popups
- Removed standalone Movements page and `?` header button; movement info is now accessible inline when sorted by Movement in the Top 100 list
- Added "Movement" as a sort option in the Top 100 sort dropdown; paintings group by movement in chronological MOVEMENTS order
- Movement group headers are expandable — tapping reveals the full essay, key characteristics, and key artists (same content as the old movements page)
- Artist name in the detail sheet is now a tappable underlined link → opens an artist popup (all their works in a 3-col grid, movement name and era, movement summary as bio)
- Museum name / location box in the detail sheet is now tappable → opens a museum popup (city + flag, seen progress bar, full painting grid)
- Replaced custom landmark emoji (🗼, 🏛️, etc.) with proper country flag emoji for museum rows

### Bug fixes
- Fixed movement tag onclick and accordion onclick broken by `JSON.stringify` double-quote collision in HTML attributes — switched to single-quoted JS strings
- Fixed `ARTIST_PORTRAITS` URLs returning 400/403 errors: original URLs used `400px-` Wikimedia thumbnail prefix which doesn't exist as a pre-generated size. Replaced entire block using verified URLs from Wikipedia REST API (`/api/rest_v1/page/summary/`) which returns the actual generated thumbnail size (330px or 500px). Artists with no accessible portrait left as `null`.
- Fixed `MUSEUMS_INFO` photo URLs: same root cause — original `800px-` Wikimedia thumbnail URLs are invalid (800px not a pre-generated size). Replaced all 35 museum photos by querying Wikipedia REST API and Commons imageinfo API to get verified thumbnail URLs (330px or 960px depending on what was pre-generated). 2 museums (Marmottan Monet, Neue Galerie New York) set to `null` — no accessible exterior photo found. Vatican Museums entries now use interior shots (Sistine Chapel interior, Raphael Rooms).
- Fixed 19 broken `imageUrl`s in museum-only paintings (IDs 101–214): 18 `_-_Google_Art_Project.jpg` filenames and several others that returned 404 — these Commons files were removed/renamed. Replaced with verified thumbnails via Wikipedia REST API and Commons imageinfo API. Added images for 5 previously-null public-domain paintings (Klimt, Schiele, Poussin, Modigliani). 14 paintings remain `null` due to copyright (Picasso, Pollock, Magritte, Matisse, Dalí, Miró, Lichtenstein, Bacon, Kahlo, Tamayo, Lawrence, Izquierdo).

---

### Art Movements — accordion page + clickable detail tag
- Movements page now shows collapsed accordion rows (name, era, count, chevron only); clicking expands to reveal the full movement essay, key characteristics list, and up to 6 painting thumbnails from the collection
- Movement tag in painting detail sheet is now a tappable cell (whole spec box is the tap target) that opens the movement popup
- Chevron rotates 180° on expand; open rows get a gold border accent

### Art Movements feature
- Categorized all 214 paintings into 18 art movements (Italian Renaissance through Mannerism) via `patch_data.py`
- Added `const MOVEMENTS` to `data.js` with 18 entries, each containing era, detailed essay-style summary, 5 key traits, and key artists
- Detail sheet now shows "Movement" row in the specs grid as a gold tappable pill — opens the movement popup
- Movement popup is a bottom-sheet with the full movement essay, bullet traits, artist chips, and a 3-column grid of all paintings in that movement in the collection; tapping a painting jumps to its detail
- `?` info icon added to the fixed header; tapping opens a small dropdown with "Art Movements" → navigates to the movements page
- Movements page lists all 18 movements with era, truncated summary, and 3 thumbnail previews; tapping any row opens the movement popup

### Detail sheet improvements
- Added "Collection" button to the detail nav (between Back and Seen); hidden when unseen, auto-appears with a fade-in when "Mark Seen" is toggled on
- Clicking "Collection" closes the detail sheet and navigates directly to the Collection tab
- iOS input zoom fix: bumped `#search-input` and `.modal input/textarea/select` font-size from `.9rem`/`.88rem` to `1rem` (16px) so Safari doesn't auto-zoom on focus

### Add Painting UX overhaul
- "Add painting" button in museum accordions now matches painting row dimensions (52×64 thumbnail placeholder + same padding/height as `.painting-row`) instead of a narrow dashed-border box
- Add Painting modal now has a live search field at the top: type a title or artist, get a dropdown of matches from all 200+ paintings; results badge "this museum" when the painting is already catalogued there
- Selecting a search result autofills all form fields (title, artist, year, description, image URL, museum, city, country, continent)
- On save, warns if the autofilled painting's real museum differs from the form's museum field, or if the museum field doesn't match the accordion the form was opened from

### Museum painting images
- Added Wikimedia Commons image URLs for 23 museum-only paintings (IDs 121, 137–138, 149–150, 152–157, 161, 166, 168–169, 172, 174, 180, 187–189, 200, 203)
- Applied via `apply-images.py` patching script reading from `/tmp/paint-image-urls.json`
- Remaining null imageUrls are copyrighted modern works (Pollock, Magritte, Matisse, Rothko, etc.) that cannot use Wikimedia images

---

## Session 4 — 2026-05-27

**Commits:** *(prior commit)*

### Museum collection paintings
- Added 114 museum-only paintings (IDs 101–214) to bring 12 major museums to 10 paintings each, and top up smaller museums with 2–5 notable works each
- Museum-only paintings carry `museumOnly: true` and `rank: null` — they are hidden from the Top 100 tab but visible in Museums, Collection, and Stats tabs
- Fixed `null <= 100` JavaScript coercion bug: rank badge checks updated to `p.rank != null && p.rank <= 100` throughout `app.js`
- Fixed one-character search input bug: `handleSearch` now refocuses and restores cursor position after `render()` replaces the DOM

### Toolbar UX
- Sort and view buttons in the Top 100 toolbar replaced with icon-only buttons that open positioned dropdown menus (sort: Rank/Artist/Year/Title/Museum with checkmark on active; view: Grid/List with icons)
- Dropdowns dismiss on outside click or re-clicking the same button

---

## Session 1 — 2026-05-26

**Commits:** `ede51b3`

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
- Sort by rank, artist, year, title, or museum (cycles through)
- Filter chips: click a location in the Museums/Locations tabs to filter the Top 100
- Offline support via service worker (cache-first for app files, network-first for Wikimedia images)
- PWA manifest with icons — installable on iOS and Android
- Deployed to GitHub Pages at `github.com/c-fawkes/paint-chips`

---

## Session 2 — 2026-05-27

**Commits:** `89fa614`, `519bd7d`, `823fb40`, `8d05ecf`, `1a5bb2a`

### PWA install fixes
- Fixed `manifest.json` `start_url` from `/index.html` → `/` → `/paint-chips/` to match GitHub Pages subdirectory path so iOS home screen bookmarks open the correct URL
- Fixed iOS safe area insets: extended header and content padding to account for Dynamic Island / notch using `env(safe-area-inset-top)`

### Images
- Researched and patched all 100 paintings with verified Wikimedia Commons image URLs
- Grid card layout with thumbnail images, rank badge, seen badge, and photo indicator
- `onerror` fallback to 🎨 placeholder if an image fails to load
- Service worker updated to use network-first strategy for all wikimedia.org / wikipedia.org URLs

### Grid/list toggle
- Added toolbar button to toggle between grid (cards with images) and compact (text rows) in the Top 100 view
- Toggle state persisted to localStorage (`listMode`)
- Fixed three duplicate rank numbers — ranks 55, 99, and 100 were assigned twice; corrected to contiguous 1–100

### Tab restructure
- Merged the old separate Map and Museums tabs into a single **Museums** tab
- Added a sub-mode bar inside Museums: Alpha / City / Country / Continent
- Added **Collection** tab showing only seen paintings with three display modes: grid, compact, and gallery (full-bleed framed artwork view)
- Added seen-check toggle button directly on the large thumbnail in the detail modal (previously only available from the list row)

---

## Session 3 — 2026-05-27

**Commits:** `(this commit)`

### Documentation
- Created `CLAUDE.md` with development commands, architecture overview, state model reference, rendering pattern explanation, and deployment notes
- Created `docs/progress.md` (this file) with full app overview and session history
- Added rule to `CLAUDE.md` requiring `docs/progress.md` to be updated before each commit

### Toolbar dropdowns
- Replaced the cycling sort button (showed icon + label text, clicked to cycle) with an icon-only button that opens a positioned dropdown listing all five sort options (Rank, Artist, Year, Title, Museum) with a checkmark on the active one
- Replaced the view toggle button (clicked to flip between grid/list) with an icon-only button that opens a dropdown with Grid and List options, each with its own icon
- Dropdowns anchor bottom-right to their button, dismiss on outside click or on re-clicking the same button
- Removed the now-unused `cycleSortMenu`, `toggleListMode`, and `sortLabels` — replaced by `setSort`, `setListMode`, `openSortDropdown`, `openViewDropdown`, `closeDrop`
