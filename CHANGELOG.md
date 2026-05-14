## [0.5.0] - 2026-05-14
### Added
- Shared `components/site-header.js` web component, with companion `styles/header.css`, consumed by all four pages (`index`, `info`, `lletra`, `videos`) — replaces ~800 lines of duplicated inline header markup/CSS
- Brand assets `favicon/dimoni.svg` and `favicon/tau-cross.svg` used by the header seal (tau cross at rest, dimoni silhouette on hover)
- Square branded favicon master at `favicon/favicon-master.svg` (radial fogueró fade matching the header seal, dimoni silhouette at 96% height)
- Regenerated favicon set from the new master: `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `android-chrome-192x192.png`, `android-chrome-512x512.png`, multi-res `favicon.ico` (16/32/48)
- Root-level `/favicon.ico` so Google's favicon crawler can find it (it only probes the root path, not `/favicon/favicon.ico`)
- `<link rel="icon" type="image/svg+xml">` pointing at the master SVG on all pages for crisp scaling in modern browsers

### Changed
- `favicon/site.webmanifest` now carries proper `name`/`short_name` ("Sant Antoni d'Artà"), `theme_color` `#9B1B30`, and `background_color` `#0A0A0A`
- `data.json`: added `start` offsets to three single-id clips (2025 Acapte, 2019 Primer Ball, 2009 Primer Ball) so playback skips intros

## [0.4.1] - 2026-05-14
### Added
- Footer GitHub icon now stacks a monospace `v{version}` label below it on all pages (`index`, `info`, `lletra`, `videos`)
- `--font-mono` CSS variable in `styles/fonts.css` (system monospace stack)

### Changed
- Rewrote `README.md` with accurate project structure (info, lletra, videos, components, styles), the `npm run dev` script, the `data.json` shape including `videoId` array/object forms and `coverScale` inheritance, and the versioning workflow

## [0.4.0] - 2026-05-14
### Added
- Centralized font system in `/styles/fonts.css` exposing `--font-heading` (Marcellus) and `--font-body` (Literata) CSS variables; all pages and components consume them via variables instead of hard-coded family names
- New pel·lícula "Entrevista a Don Toni Gili" (1981, 2 parts) and three 1991 clips: "Ball davant l'Església", "Cavalcada a sa Plaça de s'Aigua", "Beneïdes davant s'Ajuntament"
- `start` offset support on single-id clips (previously only multi-part entries supported per-part starts)
- `data-era` attribute on pel·lícula cards (`vintage` / `classic` / `modern`) derived from the year

### Changed
- Heading font switched from Libre Baskerville to Marcellus
- Video modal redesigned: title chip, YouTube credit, and close button now live in a flex header above the player instead of absolutely-positioned floating buttons; close button uses transparent background with hover tint
- "Més clips" panel merged with the parts track into a single unified row; multipart clip parts render first, followed by recommended clips. The "Més clips" label is rendered as pseudo-elements on the first recommendation card so it floats above the row without claiming a slot
- Recommendation clip cards fade to 55% opacity at rest and restore on hover/focus/active; same fade applied to non-active pel·lícula parts
- Pel·lícula cover frame moved from `inset box-shadow` to a `::before` pseudo-element border so the frame can animate independently from the outer shadow
- Tighter spacing on the videos row (`margin-bottom` 2.5rem → 1.5rem) and clip card container (`padding-top` 2rem → 0.5rem)
- Hero meta on the videos page: `duration` now uses `--text-secondary` (was red, alongside `creator`)
- Footer collab link copy shortened: "Tens vídeos? Col·labora al projecte →" → "Tens vídeos? Col·labora →"

### Fixed
- Clip modal: removed redundant `updatePartUI` call on queue advance and short-circuited it in clip mode so multipart-parts UI no longer flickers when chained through the unified recommendations track

## [0.3.3] - 2026-05-14
### Added
- Clips decade filter on the videos page (`Tots` / `2020s` / `2010s` / …) with counts per decade

### Fixed
- Clip modal: header chip and bottom-queue active highlight could desync from the playing video on first open. `openClip` now tears down the player before mutating state, sets the header synchronously, and `closeModal` resets queue state so a late/stale Vidstack `ended` event cannot mutate `clipQueueIdx` between sessions
- `ended` listener now ignores fires when the modal is closed or the clip queue is empty

## [0.3.2] - 2026-05-14
### Changed
- Forced dark theme site-wide; removed the theme toggle button from all pages (`index`, `videos`, `lletra`, `info`)
- Footer credit: smaller Josep Bernad logo (48px → 32px), tighter gap, slightly smaller label, smaller heart glyph
- Hero subtitle copy on the homepage rendered at higher opacity (0.85 → 0.98) for better legibility
- Carousel nav button hover on the videos page now uses white background with dark icon (was red), matching both dark and light themes

## [0.3.1] - 2026-05-14
### Changed
- Redesigned clip cards: 16:9 cover image with title and year rendered below the cover (no overlay), tighter typography
- Clips grid is now 2 columns on mobile (≤600px) instead of single column
- Introduced `--page-pad` CSS variable as the single source of truth for horizontal page padding (3rem desktop, 1.5rem mobile)
- Shortened homepage `<title>` to "Sant Antoni d'Artà"

### Fixed
- Removed stray leading `e` character before `<!DOCTYPE html>` in `index.html`

## [0.3.0] - 2026-05-14
### Added
- Clip autoplay queue: clicking a clip opens a modal that auto-advances through the (shuffled) clip list and shows a "Més clips" recommendations panel below the player
- Clip modal title chip showing the clip title and year at the top-left of the player
- `coverScale` per video (films and clips) to zoom the thumbnail and crop letterbox bars — applied to card images, modal credit context, and recommendations/episodes panels
- Per-part start offset for multi-part films: `videoId` entries may now be `{ "id": "...", "start": 13 }` so each part can begin at a given second (works on desktop Vidstack and mobile via YouTube `start` param)
- Hero parallax: the videos-page hero background scrolls slower than the page (respects `prefers-reduced-motion`)
- Viewport-stage layout on desktop: the hero and the "Pel·lícules Completes" carousel are sized to share one screen height
- Year alongside the creator name in the modal credit chip

### Changed
- "Pel·lícules Completes" row title now renders the punt volat as a tighter inline glyph (`<span class="punt-volat">·</span>`) for better typographic spacing
- Renamed `playCurrentPart` → `playCurrentVideo` and unified the modal state machine around a `modalMode` of `'pelicula'` or `'clip'`
- Films row now sits inside the viewport-stage container above the rest of the content section; clips row gets the standard content padding
- Cards container gets more vertical breathing room (`2rem 3rem 4.25rem`) so card hover/scale doesn't clip against the row edge

### Fixed
- Light-mode `.episode-label` override removed (was overriding the active-part red highlight)

## [0.2.1] - 2026-05-14
### Changed
- Videos page: "Pel·lícules Completes" row now has a featured red-glow background with gradient borders
- Film card year overlay moved from centered to top-left and enlarged (4rem; 3.4rem for year ranges)
- Default to dark mode regardless of OS preference (system `prefers-color-scheme` no longer auto-applies light)

## [0.2.0] - 2026-05-14
### Added
- Creator attribution on full films: each `pelicula` now has a `creator`, and `data.json` ships a `creators` map of channel URLs
- Multi-part video support: `videoId` can be a list of YouTube IDs, with a streaming-style episodes tray in the modal that auto-advances on `ended` (mobile uses the YouTube `playlist` param)
- Video modal credit chip linking to the creator's channel (Cmd/Ctrl+Shift opens the current part on YouTube directly)
- Eight more historical full films (2002, 1999, 1991, 1990, 1984, 1982–1983, 1981 — Miquel Mestre archive) plus the 2017 "Darrer ball Xisco Mosca" clip
- Hero call-to-action button on the homepage linking to `/videos`
- `<footer-credit>` web component (in `components/footer-credit.js`) and the Josep Bernad branding SVGs, embedded on every page
- "Open Source" tooltip on the footer GitHub icon
- `card-year-top` overlay and multi-part badge on film cards
- `Pel·lícules Completes` row header on the videos page

### Changed
- Header layout: centered logo and nav links, smaller logo (1.75rem), theme toggle absolutely positioned on the right
- Videos page hero meta now shows creator + duration instead of year + "Artà"
- Film card info footer shows creator instead of year (year moved to a large top overlay)
- Video modal scrolls when content overflows (`align-items: safe center`, `overflow-y: auto`) and uses tighter mobile padding/close-button sizing
- Lletra font controls moved up (`bottom: 5rem` desktop, `4.5rem` mobile) to clear the new footer credit
- Footer bottom padding reduced (`1.5rem`) to tighten the credit section

### Removed
- 2009 short clip and standalone 1981 clips (merged into the multi-part 1981 entry)
- "Conversa Miquel Montoro i Borja Viejo" clip

## [0.1.3] - 2026-04-28
### Changed
- Migrated hosting from GitHub Pages to Vercel; disabled the GitHub Pages site and removed the `CNAME` file
- `.gitignore` now excludes `.env.local`

### Added
- `rig.config.json` for cross-provider env/secret syncing via the rig tool

## [0.1.2] - 2026-04-17
### Added
- `version.json` at repo root exposing the deployed version for external monitors
- `.gitignore` to exclude local Claude settings and common OS/tool artifacts

## [0.1.1] - 2026-04-08
### Fixed
- Mobile video player now shows YouTube iframe (with autoplay) instead of Vidstack on touch devices
- Desktop video modal now shows exactly one loading spinner during buffering (hid duplicate `<media-spinner>` injected by `media-video-layout`)

## [0.1.0] - 2026-04-08
### Added
- Initial project setup with `npm run dev` script (static file server on port 3000)
