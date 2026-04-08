# Requirements: santantoni.org

**Defined:** 2026-04-08
**Core Value:** Visitors can discover and watch videos smoothly on any device.

## v1 Requirements

### Video Player — Mobile

- [ ] **MOB-01**: On mobile devices, the video modal shows a native YouTube iframe embed instead of the Vidstack player
- [ ] **MOB-02**: The YouTube iframe uses standard embed URL (`youtube.com/embed/VIDEO_ID`) with autoplay enabled
- [ ] **MOB-03**: Mobile detection uses a CSS media query or `matchMedia` check — no user-agent sniffing

### Video Player — Desktop

- [ ] **DSK-01**: On desktop, only one loading spinner is visible during video load (no double spinner)
- [ ] **DSK-02**: The fix does not remove Vidstack's built-in spinner — it hides any duplicate custom spinner

## Out of Scope

| Feature | Reason |
|---------|--------|
| Custom mobile video controls | YouTube's native embed handles this well |
| Responsive player layout changes | Existing modal layout already works on mobile |
| User-agent sniffing for device detection | Brittle — use screen width / pointer media queries |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| MOB-01 | Phase 1 | Pending |
| MOB-02 | Phase 1 | Pending |
| MOB-03 | Phase 1 | Pending |
| DSK-01 | Phase 1 | Pending |
| DSK-02 | Phase 1 | Pending |

**Coverage:**
- v1 requirements: 5 total
- Mapped to phases: 5
- Unmapped: 0 ✓

---
*Requirements defined: 2026-04-08*
*Last updated: 2026-04-08 after roadmap creation*
