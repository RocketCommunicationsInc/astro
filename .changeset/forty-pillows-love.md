---
"@astrouxds/astro-web-components": patch
"angular-workspace": patch
"@astrouxds/angular": patch
"@astrouxds/react": patch
---

Fixed an issue where content wrapped by rux-tooltip would not inherit width. In order to prevent tooltip from wrapping to the next line if so desiered, use the placement prop
