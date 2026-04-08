# CONCERNS.md — Technical Debt and Issues

## Summary

This is a small static site with low overall risk. Main concerns are code duplication across pages and unstable CDN pinning for the video player.

---

## High Priority

### 1. Vidstack CDN pinned to `@next` (unstable)
- **Location:** `videos/index.html:29-32`
- **Issue:** `cdn.jsdelivr.net/npm/vidstack@next` uses the `next` dist-tag, which points to the latest prerelease. This can break silently when Vidstack publishes a new version.
- **Fix:** Pin to a specific version (e.g. `vidstack@1.x.x`)

### 2. CSS and JS duplicated across all pages
- **Location:** `index.html`, `videos/index.html`, `lletra/index.html`, `info/index.html`
- **Issue:** Full CSS `:root` variables, reset styles, theme toggle logic, and font loading are copy-pasted into every page. Changes must be made in 4 places.
- **Fix:** Extract shared CSS and JS to external files (`/styles.css`, `/theme.js`)

---

## Medium Priority

### 3. `info/` page disabled but deployed
- **Location:** `info/index.html`
- **Issue:** Page redirects to home via `<meta http-equiv="refresh" content="0; url=/">`. The page is fully built but publicly deployed and unreachable. Confusing state.
- **Fix:** Either finish and enable it, or delete it

### 4. YouTube video IDs not sanitized before DOM insertion
- **Location:** `videos/index.html` JS
- **Issue:** `videoId` values from `data.json` are inserted into the DOM without sanitization. If `data.json` is ever edited with malicious content, XSS is possible.
- **Risk:** Low (data.json is hand-curated, not user-generated)
- **Fix:** Validate videoId matches `/^[a-zA-Z0-9_-]{11}$/` before use

### 5. No `data.json` schema validation
- **Location:** All pages that call `fetch('/data.json')`
- **Issue:** If `data.json` is malformed or missing expected fields, pages silently render empty or throw runtime errors with no user feedback.
- **Fix:** Add a simple shape check before rendering

### 6. External OG image hosted on third-party domain
- **Location:** All `<meta property="og:image">` tags
- **Issue:** `https://www.casafari.com/wp-content/uploads/...` — image not owned by this project. It could be removed or changed at any time.
- **Fix:** Host the OG image in this repo

---

## Low Priority

### 7. SVG icons inlined per-page instead of using a sprite sheet
- **Issue:** Each page inlines the same SVG icon markup. Increases HTML payload and makes icon updates require editing every page.
- **Fix:** Use a shared `<svg>` sprite or `<use>` references

### 8. CSS animations declared globally even when not in use
- **Issue:** Pages define keyframe animations that may not be used on that specific page.
- **Impact:** Minimal — no runtime cost for unused CSS animations

### 9. Fisher-Yates shuffle on clips array on every page load
- **Location:** `videos/index.html` JS
- **Issue:** Shuffled on every load so users see a different order each time, which may be intentional but could be seen as unpredictable UX.
- **Impact:** Negligible performance impact

### 10. `localStorage` keys not namespaced
- **Issue:** Keys like `'theme'` and `'fontSize'` are generic and could conflict with other sites if ever embedded (not applicable for standalone pages, but worth noting).

---

## Security Assessment

| Concern | Severity | Notes |
|---------|----------|-------|
| XSS via videoId | Low | `data.json` is hand-curated |
| Third-party CDN (Vidstack, Google Fonts) | Medium | Standard practice, but represents a supply chain dependency |
| External OG image | Low | Cosmetic risk only |
| No HTTPS enforcement | N/A | Handled by GitHub Pages |

---

## Performance Assessment

| Concern | Impact | Notes |
|---------|--------|-------|
| Google Fonts (2 families) | Low | `preconnect` hints in place |
| Vidstack CDN (3 CSS + 1 JS) | Medium | Loaded on videos page only |
| No image optimization | Low | OG image is external, favicons are small |
| Inline CSS per page | Negligible | Pages are small |

---

## What's Working Well

- Graceful error handling on data fetches (`try/catch` + fallback)
- Theme persistence via `localStorage`
- Touch device detection for hover effects
- Semantic HTML and ARIA attributes throughout
- Good SEO setup (canonical URLs, OG tags, sitemap, robots.txt)
