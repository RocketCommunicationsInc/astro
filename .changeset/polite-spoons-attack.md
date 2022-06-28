---
"@astrouxds/angular": minor
"@astrouxds/react": minor
"@astrouxds/astro-web-components": minor
"astro-website": minor
---

Modal is now deprecated and will be removed in 7.0. It is being renamed to Dialog to align with our Design System naming and which shares the exact same API as Modal. It is recommended that you migrate to Dialog before 7.0. You can do a global find/replace on your project for:

`rux-modal` -> `rux-dialog`
`ruxmodalclosed` -> `ruxdialogclosed`
`ruxmodalopened` -> `ruxmodalopened`
