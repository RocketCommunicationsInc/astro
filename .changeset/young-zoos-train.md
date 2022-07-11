---
"angular-workspace": major
"@astrouxds/angular": major
"astro-website": major
"@astrouxds/react": major
"@astrouxds/astro-web-components": major
---

Modal has been removed. It has been renamed to Dialog to align with our Design System naming and shares the exact same API as Modal.

Migration: You can do a global find/replace on your project for:

`rux-modal` -> `rux-dialog`
`ruxmodalclosed` -> `ruxdialogclosed`
`ruxmodalopened` -> `ruxdialogopened`
