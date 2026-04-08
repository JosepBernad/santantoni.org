# Roadmap: santantoni.org

## Overview

Two focused fixes to the video player: swap in a native YouTube iframe for mobile visitors, and eliminate the double loading spinner on desktop. Both changes touch the same modal/player code and ship together as a single coherent delivery.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Video Player Fixes** - Mobile YouTube iframe + desktop spinner deduplication

## Phase Details

### Phase 1: Video Player Fixes
**Goal**: Visitors on any device get a clean, functional video playback experience — mobile users see a native YouTube embed, desktop users see a single loading spinner
**Depends on**: Nothing (first phase)
**Requirements**: MOB-01, MOB-02, MOB-03, DSK-01, DSK-02
**Success Criteria** (what must be TRUE):
  1. A visitor on a mobile device opens a video and sees a YouTube iframe embed (not the Vidstack player)
  2. The YouTube iframe loads with autoplay enabled using the standard `youtube.com/embed/VIDEO_ID?autoplay=1` URL format
  3. Device detection is based on screen width or pointer media queries — no user-agent strings in the code
  4. A visitor on desktop opens a video and sees exactly one loading spinner while the video buffers
  5. The Vidstack built-in spinner remains intact; any duplicate custom spinner is hidden, not removed
**Plans**: TBD
**UI hint**: yes

## Progress

**Execution Order:**
Phases execute in numeric order: 1

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Video Player Fixes | 0/? | Not started | - |
