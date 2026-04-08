# External Integrations

**Analysis Date:** 2026-04-08

## APIs & External Services

**YouTube:**
- Video playback and thumbnails
  - SDK/Client: Vidstack Player (abstraction layer)
  - Integration: Custom protocol handler `youtube/{videoId}` in `videos/index.html`
  - Thumbnail CDN: `https://img.youtube.com/vi/{videoId}/hqdefault.jpg`
  - Used in: `data.json` video data, dynamic thumbnail generation

**Google Maps:**
- Location embedding
  - Integration: Direct link in `/info/index.html`
  - Link: `https://maps.app.goo.gl/57kacRwtLgmGfmZTA`

## Data Storage

**Databases:**
- Not applicable (static site)

**File Storage:**
- Local filesystem only (`data.json` for video metadata)
- `data.json` location: `/Users/josepbernad/Developer/santantoni.org/data.json`
- Stores featured video, films (pelicules), and clips with YouTube IDs

**Caching:**
- Browser localStorage for:
  - Theme preference (`theme` key)
  - Font size preference for lyrics (`lyricsFontSize` key)
  - Persists user settings between sessions

## Authentication & Identity

**Auth Provider:**
- None (public website)
- No user accounts or login system

## Monitoring & Observability

**Error Tracking:**
- None (no external service)
- Client-side error logging to browser console only

**Logs:**
- None (no external logging service)
- Console logging for debugging: `console.error()` in data loading

## CI/CD & Deployment

**Hosting:**
- GitHub Pages
- Domain: santantoni.org (via CNAME)
- Repository: `https://github.com/JosepBernad/santantoni.org`

**CI Pipeline:**
- Not detected (likely default GitHub Pages auto-deployment from main branch)

## Environment Configuration

**Required env vars:**
- None (no environment variables used)

**Secrets location:**
- Not applicable (no API keys or secrets required)

## Webhooks & Callbacks

**Incoming:**
- None

**Outgoing:**
- None

## External CDNs

**CSS Libraries:**
- Vidstack Player styles: `https://cdn.jsdelivr.net/npm/vidstack@next/player/styles/base.min.css`
- Vidstack themes: `https://cdn.jsdelivr.net/npm/vidstack@next/player/styles/default/theme.min.css`
- Vidstack layouts: `https://cdn.jsdelivr.net/npm/vidstack@next/player/styles/default/layouts/video.min.css`
- Leaflet CSS: `https://unpkg.com/leaflet@1.9.4/dist/leaflet.css`

**JavaScript Libraries:**
- Vidstack Player: `https://cdn.jsdelivr.net/npm/vidstack@next/cdn/with-layouts/vidstack.js` (ES module)
- Leaflet JS: `https://unpkg.com/leaflet@1.9.4/dist/leaflet.js`

**Font Services:**
- Google Fonts API: `https://fonts.googleapis.com/`
- Font delivery: `https://fonts.gstatic.com/`

**Image Hosting:**
- YouTube thumbnails: `https://img.youtube.com/vi/{videoId}/hqdefault.jpg`
- External images (promotional): `https://estaticos-cdn.prensaiberica.es/` and `https://www.casafari.com/`

## Data Flow

**Video Loading:**
1. Browser requests `/data.json`
2. JavaScript parses JSON containing video metadata (year, videoId, coverUrl, duration)
3. Vidstack Player receives YouTube videoId
4. Vidstack streams video from YouTube (via iframe or native protocol)
5. Thumbnails loaded directly from `img.youtube.com`

**Map Display:**
1. Leaflet library loaded from CDN
2. Map initialized in `/info/index.html`
3. Map displays location with custom styling

---

*Integration audit: 2026-04-08*
