# TESTING.md — Test Structure and Practices

## Overview

**No automated testing exists in this codebase.** This is appropriate for a content-driven static website with no server-side logic, no API endpoints, and no complex business rules to unit test.

## Current State

| Category | Status |
|----------|--------|
| Test framework | None |
| Unit tests | None |
| Integration tests | None |
| E2E tests | None |
| CI pipeline | None |
| Test configuration | None |

## What Testing Looks Like

All QA is manual browser-based testing:
- Open pages in browser and visually inspect
- Check dark/light theme toggle
- Verify video player loads and plays
- Check mobile layout on different screen sizes
- Verify data.json loads and renders correctly

## Rationale for No Automated Tests

This site is:
- **Static HTML** — no dynamic routing or server logic
- **Vanilla JS only** — no modules or components to unit test
- **Content-driven** — correctness is visual and data-driven
- **No build step** — nothing to run tests against in a pipeline
- **Single data source** — `/data.json` is hand-curated, not generated

## If Testing Were Added

For future test coverage (e.g. if JS complexity grows), the most appropriate tools would be:

- **E2E / browser tests:** [Playwright](https://playwright.dev/) — test actual page behavior in a real browser
- **Unit tests (if JS is extracted):** [Vitest](https://vitest.dev/) — lightweight, no build config needed
- **Visual regression:** Playwright screenshots

### Example Playwright test (hypothetical)
```js
import { test, expect } from '@playwright/test';

test('homepage loads and shows navigation', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('nav')).toBeVisible();
  await expect(page.locator('h1')).toContainText('Sant Antoni');
});

test('theme toggle persists', async ({ page }) => {
  await page.goto('/');
  await page.click('#theme-toggle');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
});
```

## Coverage

- **Current:** 0% automated coverage
- **Risk:** Low — site is static, no business logic to break silently
- **Recommendation:** Add Playwright E2E tests if pages become more complex or if a build step is introduced
