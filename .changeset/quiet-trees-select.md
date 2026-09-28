---
"angular-workspace": patch
"@astrouxds/astro-web-components": patch
"@astrouxds/angular": patch
"@astrouxds/react": patch
---

Fixed rux-tree-node emitting `ruxtreenodeselected` twice when `setSelected(true)` is called on (or the Enter key selects) a node that was not already selected.
