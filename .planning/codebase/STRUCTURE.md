# STRUCTURE.md — Directory Layout and Organization

## Root Layout

```
santantoni.org/
├── index.html          # Home page
├── data.json           # Single data source for all dynamic content
├── CNAME               # GitHub Pages custom domain (santantoni.org)
├── robots.txt          # Search engine crawl rules
├── sitemap.xml         # SEO sitemap
├── README.md           # Project documentation
├── videos/
│   └── index.html      # Video gallery page
├── info/
│   └── index.html      # Info page (currently disabled via meta-refresh)
├── lletra/
│   └── index.html      # Lyrics (lletra) page
└── favicon/
    ├── favicon.ico
    ├── favicon-16x16.png
    ├── favicon-32x32.png
    ├── apple-touch-icon.png
    ├── android-chrome-192x192.png
    ├── android-chrome-512x512.png
    └── site.webmanifest
```

## Key Locations

| Purpose | Path |
|---------|------|
| Home page | `index.html` |
| All content data | `data.json` |
| Video gallery | `videos/index.html` |
| Song lyrics | `lletra/index.html` |
| Info / about | `info/index.html` (disabled) |
| Favicons | `favicon/` |
| Domain config | `CNAME` |
| SEO config | `sitemap.xml`, `robots.txt` |

## Page Responsibilities

### `index.html` — Home
- Featured video hero section
- Navigation to other pages
- Theme toggle (dark/light)
- Loads `data.json` to populate featured content

### `videos/index.html` — Video Gallery
- Grid of video cards (full films + clips)
- Vidstack player integration (CDN)
- Video modal/inline playback
- Carousel navigation for clips
- Loads `data.json` for all video metadata

### `lletra/index.html` — Lyrics
- Song lyrics display with adjustable font size
- Font size persistence via `localStorage`
- Static content (no data.json dependency)

### `info/index.html` — Info (Disabled)
- Redirects to home via `<meta http-equiv="refresh">`
- Page is fully built but not accessible

## Data Structure (`data.json`)

```json
{
  "featured": {
    "videoId": "...",
    "title": "...",
    "year": "..."
  },
  "pelicules": [
    { "videoId": "...", "title": "...", "year": "...", "duration": "..." }
  ],
  "clips": [
    { "videoId": "...", "title": "...", "year": "...", "duration": "..." }
  ]
}
```

## External Dependencies (CDN)

All external resources loaded via CDN — no local copies:

| Resource | CDN |
|----------|-----|
| Vidstack player JS | `cdn.jsdelivr.net/npm/vidstack@next` |
| Vidstack CSS (3 files) | `cdn.jsdelivr.net/npm/vidstack@next` |
| Literata font | `fonts.googleapis.com` |
| Libre Baskerville font | `fonts.googleapis.com` |

## Naming Conventions

| Type | Convention |
|------|-----------|
| Pages | Lowercase directories with `index.html` |
| Data file | Lowercase JSON (`data.json`) |
| CSS classes | kebab-case |
| CSS variables | `--kebab-case` |
| JS functions | camelCase |
| Images/favicons | kebab-case with size suffixes |

## No Build Artifacts

This site has no:
- `node_modules/` — no npm dependencies
- `dist/` or `build/` — no compilation step
- `.env` — no environment variables
- Config files (webpack, vite, tsconfig, etc.)

Deployment is direct: files are served as-is by GitHub Pages.
