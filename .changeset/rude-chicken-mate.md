---
"@astrouxds/ag-grid-theme": major
"@astrouxds/angular": major
"astro-website": major
"@astrouxds/react": major
"@astrouxds/astro-web-components": major
---

What: The following properties and attributes have been removed: `modalMessage`, `modalTitle`, `confirmText`, `denyText`.
Why: These have been replaced in favor of slots to provide greater flexibility.
Migration: Use the new `header`, `message`, and `footer` slots instead.
