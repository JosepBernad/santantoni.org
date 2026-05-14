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
