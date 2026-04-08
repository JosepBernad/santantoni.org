# CONVENTIONS.md — Code Style and Patterns

## Overview

This is a static multi-page website with no build tooling, formatters, or linters. All conventions are informal and consistent across 4 HTML files.

## Language

- **UI text and comments:** Catalan (lang="ca" on all `<html>` tags)
- **Code (variables, functions, CSS classes):** English or Catalan mixed
- **CSS custom properties:** Catalan semantic names (`--vermell-foc`, `--negre-nit`, `--blanc-camisa`)

## HTML Structure

- Each page is a self-contained `index.html` with inline `<style>` and `<script>` blocks
- No external CSS or JS files — all styles and logic live inside each HTML file
- Pages: `/index.html`, `/videos/index.html`, `/info/index.html`, `/lletra/index.html`
- DOCTYPE, charset, viewport meta, SEO meta (OG + Twitter cards), favicon links, font preconnects in every `<head>`

## CSS Conventions

- CSS custom properties defined in `:root` for theming
- Semantic Catalan color names: `--vermell-foc` (fire red), `--negre-nit` (night black), `--blanc-camisa` (shirt white), `--gris-fum` (smoke grey)
- Light theme via `[data-theme="light"]` attribute override
- CSS reset: `* { margin: 0; padding: 0; box-sizing: border-box; }`
- Mobile-first responsive design with `@media` queries
- BEM-style kebab-case class names (e.g. `.video-card`, `.nav-link`)
- CSS transitions for theme switching: `transition: background-color 0.3s ease, color 0.3s ease`

## JavaScript Conventions

- **No framework, no build step** — vanilla JS only
- Initialization logic runs on `DOMContentLoaded`
- `fetch()` used to load `/data.json` for dynamic content
- camelCase function names
- Error handling via `try/catch` with graceful fallbacks (console.error + UI fallback)
- Touch device detection via `navigator.maxTouchPoints` or `ontouchstart`
- Theme persistence via `localStorage` (`localStorage.getItem('theme')`)
- `document.documentElement.setAttribute('data-theme', theme)` for theme switching

## Patterns

### Data Loading
```js
async function loadData() {
  try {
    const response = await fetch('/data.json');
    const data = await response.json();
    renderContent(data);
  } catch (error) {
    console.error('Error loading data:', error);
    showFallback();
  }
}
document.addEventListener('DOMContentLoaded', loadData);
```

### Theme Toggle
```js
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
```

### Touch Detection
```js
const isTouchDevice = navigator.maxTouchPoints > 0 || 'ontouchstart' in window;
if (!isTouchDevice) {
  document.documentElement.style.setProperty('--hover-underline', '1');
}
```

## Accessibility

- Semantic HTML (`<header>`, `<main>`, `<footer>`, `<nav>`, `<article>`)
- `aria-label` attributes on interactive elements
- `alt` attributes on images
- Keyboard navigation supported

## Typography

- Primary font: `Literata` (Google Fonts, serif)
- Secondary font: `Libre Baskerville` (Google Fonts, serif)
- Both loaded via `<link>` with `preconnect` for performance

## Naming

| Type | Convention | Example |
|------|-----------|---------|
| CSS classes | kebab-case | `.video-card`, `.nav-link` |
| JS functions | camelCase | `loadVideos()`, `renderCard()` |
| CSS variables | `--kebab-case` with Catalan semantics | `--vermell-foc` |
| HTML ids | kebab-case | `#video-player`, `#theme-toggle` |
| Files | lowercase | `index.html`, `data.json` |

## What's Not Present

- No linter (no `.eslintrc`, `.stylelintrc`)
- No formatter (no `.prettierrc`)
- No build tool (no `package.json`, `webpack.config`, `vite.config`)
- No TypeScript
- No CSS preprocessor (Sass/Less)
- No component framework
