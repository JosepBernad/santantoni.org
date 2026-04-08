# Architecture

**Analysis Date:** 2026-04-08

## Pattern Overview

**Overall:** Single-Page Static Site with Client-Side Data Binding

**Key Characteristics:**
- Pure HTML/CSS/JavaScript (no build tools or frameworks)
- Data-driven UI via JSON (`data.json`) loaded dynamically
- Client-side rendering of video galleries
- Progressive enhancement: works with or without JavaScript
- Local storage for theme persistence
- Self-hosted via GitHub Pages (CNAME: santantoni.org)

## Layers

**Presentation (UI):**
- Purpose: HTML templates and CSS styling
- Location: `index.html`, `videos/index.html`, `lletra/index.html`
- Contains: Markup structure, component styles, responsive design
- Depends on: Vidstack video player library (CDN), Google Fonts (CDN)
- Used by: Browser rendering engine

**Data Layer:**
- Purpose: Content source for pages
- Location: `data.json`
- Contains: Featured video, full films (pelicules), clips metadata
- Structure: Featured section, two arrays (pelicules, clips) with year/videoId/title/duration
- Depends on: Nothing
- Used by: Videos page JavaScript to dynamically render galleries

**Logic/Interaction:**
- Purpose: Client-side interactivity and state management
- Location: Inline `<script>` tags in HTML files
- Contains: Theme toggle, modal video players, carousel navigation, data fetching
- Depends on: data.json, Vidstack library for video playback
- Used by: User interactions (clicks, navigation)

**Styling:**
- Purpose: Visual design and responsive layout
- Location: `<style>` blocks in each HTML file, Google Fonts
- Contains: CSS variables (theme colors), grid layouts, animations
- Depends on: Nothing (self-contained)
- Used by: DOM rendering

## Data Flow

**Page Load → Video Display:**

1. HTML loads with embedded CSS and JavaScript
2. `loadData()` async function fetches `/data.json`
3. Data parsed into featured video, pelicules array, clips array
4. DOM elements created dynamically from template literals for each video
5. Carousel navigation event listeners attached
6. Clips array shuffled before rendering for variety

**Theme Switching:**

1. User clicks theme toggle button
2. `toggleTheme()` reads current theme from HTML `data-theme` attribute
3. Switches between 'light' and 'dark' themes
4. Updates DOM attribute and saves preference to `localStorage`
5. CSS variables update via `[data-theme]` selector
6. All elements transition smoothly via CSS transitions

**Video Playback:**

1. User clicks video card/thumbnail
2. `openVideo(videoId)` function triggered
3. Modal dialog becomes visible (`videoModal` element)
4. Vidstack player embedded with iframe sourced to YouTube
5. Player waits for `canPlay` event before enabling controls
6. User closes modal via close button, backdrop click, or Escape key

**State Management:**
- Theme preference: `localStorage.setItem('theme', newTheme)`
- Video data: Loaded once on page init, cached in memory
- UI state: Modal visibility toggle, carousel scroll position

## Key Abstractions

**Video Card Component:**
- Purpose: Reusable template for rendering video metadata as clickable cards
- Examples: `videos/index.html` (pelicules cards), `videos/index.html` (clips cards)
- Pattern: Template literal with semantic HTML (`<article>`) containing image, metadata, and click handler

**Modal Video Player:**
- Purpose: Isolated video playback experience in overlay
- Examples: `videos/index.html` videoModal element
- Pattern: Hidden by default with `display: none`, shown/hidden via JavaScript class manipulation

**Carousel Navigation:**
- Purpose: Horizontal scrolling through film collection
- Examples: `videos/index.html` pelicules-container with left/right nav buttons
- Pattern: CSS scroll-behavior, JavaScript updates button state based on scroll position

**Theme System:**
- Purpose: Unified light/dark mode styling
- Examples: All HTML files use `[data-theme]` CSS selector
- Pattern: CSS custom properties (--variables) that change values based on data-theme attribute

## Entry Points

**Home Page:**
- Location: `/index.html`
- Triggers: Direct navigation to santantoni.org root
- Responsibilities: Hero section, navigation, featured content, section cards linking to other pages

**Videos Gallery:**
- Location: `/videos/index.html`
- Triggers: User clicks "Vídeos" nav link or /videos/ URL
- Responsibilities: Fetch and display featured video, render pelicules carousel, render randomized clips grid, attach all interaction listeners

**Lyrics Page:**
- Location: `/lletra/index.html`
- Triggers: User clicks "Lletra" nav link or /lletra/ URL
- Responsibilities: Display song lyrics with light/dark theme support, semantic HTML for lyrics content

## Error Handling

**Strategy:** Graceful degradation

**Patterns:**
- Fetch errors: Silent failure (if data.json doesn't load, galleries remain empty)
- Missing video data: Skipped in rendering loops (no crash if clip missing videoId)
- Theme detection: Falls back to system preference, then defaults to dark
- Player errors: Vidstack library handles with built-in error states

## Cross-Cutting Concerns

**Logging:** None - no console logging for production analytics

**Validation:** Minimal - assumes data.json structure is correct (no type checking)

**Authentication:** Not applicable - public content site

**SEO:** Rich Schema.org markup embedded in home page (WebSite and Festival schemas), Open Graph meta tags on all pages, canonical URLs, semantic HTML structure

**Accessibility:**
- Theme toggle has `aria-label`
- Links have descriptive text
- Color contrast tested for both themes
- Responsive design supports mobile viewports

---

*Architecture analysis: 2026-04-08*
