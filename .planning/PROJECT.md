# santantoni.org

## What This Is

A static website for the Sant Antoni festival/artist, featuring a video gallery with full films and clips. Built with vanilla HTML/CSS/JS, hosted on GitHub Pages. Videos are sourced from YouTube and played via an embedded Vidstack player in a modal.

## Core Value

Visitors can discover and watch videos smoothly on any device.

## Requirements

### Validated

- ✓ Video gallery with featured video, films carousel, and clips grid — existing
- ✓ Vidstack custom player in modal overlay on desktop — existing
- ✓ Light/dark theme toggle with localStorage persistence — existing
- ✓ Data-driven rendering from data.json — existing

### Active

- [ ] On mobile devices, use native YouTube iframe embed instead of Vidstack player
- [ ] Fix double loading spinner on desktop Vidstack player during video load

### Out of Scope

- Server-side rendering or build tools — site is intentionally pure static HTML
- Custom video hosting — YouTube is the source, always

## Context

- Pure static HTML/CSS/JS, no framework, no build step
- Vidstack player loaded via CDN (`vidstack@next`)
- Video modal uses `<media-player>` web component with `<media-video-layout>`
- Mobile detection needed to switch between Vidstack (desktop) and YouTube iframe (mobile)
- Double spinner likely caused by Vidstack's built-in loading spinner overlapping a CSS spinner

## Constraints

- **Tech stack**: Vanilla JS only — no npm, no bundlers, no frameworks
- **Hosting**: GitHub Pages static — no server-side logic

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| YouTube iframe on mobile instead of Vidstack | Vidstack UI is complex; native YouTube embed is better suited for mobile | — Pending |
| Keep Vidstack on desktop | Full custom controls and branding desired on larger screens | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-08 after initialization*
