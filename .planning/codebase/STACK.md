# Technology Stack

**Analysis Date:** 2026-04-08

## Languages

**Primary:**
- HTML5 - Markup for all pages
- CSS3 - Styling (embedded in HTML files)
- JavaScript (ES6+) - Client-side functionality

**Secondary:**
- JSON - Data storage (`data.json`)
- XML - Sitemap generation

## Runtime

**Environment:**
- Browser (client-side only)

**Package Manager:**
- None (no build system or package manager required)

**Deployment:**
- Static site hosted on GitHub Pages (via CNAME: santantoni.org)
- No server-side runtime required

## Frameworks

**Core:**
- Vanilla JavaScript (no framework dependencies)

**UI Components:**
- Vidstack Player (via CDN) - Video player for YouTube content (`/videos/index.html`)
- Leaflet - Map library for interactive maps (`/info/index.html`)

**Design:**
- CSS Grid and Flexbox - Layout
- CSS Custom Properties (CSS variables) - Theme management

## Key Dependencies

**Critical:**
- Vidstack Player (latest) - Video playback with YouTube source support
  - Loaded via: `https://cdn.jsdelivr.net/npm/vidstack@next/cdn/with-layouts/vidstack.js`
- Leaflet 1.9.4 - Interactive mapping
  - CSS: `https://unpkg.com/leaflet@1.9.4/dist/leaflet.css`
  - JS: `https://unpkg.com/leaflet@1.9.4/dist/leaflet.js`

**Frontend Assets:**
- Google Fonts (Literata and Libre Baskerville) - Typography
  - `https://fonts.googleapis.com/css2?family=Literata:wght@400;500;600;700&family=Libre+Baskerville:wght@400;700`

## Configuration

**Environment:**
- Client-side configuration only
- VSCode Live Preview configured for `/index.html`
- No environment variables or build configuration

**Static Assets:**
- Favicon set (multiple sizes in `/favicon/` directory)
- Robots.txt for SEO
- Sitemap.xml for search engines

## Platform Requirements

**Development:**
- Any text editor (VSCode with Live Preview extension recommended)
- No build tools or dependencies required
- Local server recommended for fetch operations

**Production:**
- Static web hosting (currently GitHub Pages)
- HTTPS required for Leaflet and external resources
- CDN availability for Vidstack and Leaflet libraries

---

*Stack analysis: 2026-04-08*
