---
"angular-workspace": patch
"@astrouxds/angular": patch
"astro-website": patch
"@astrouxds/react": patch
"@astrouxds/astro-web-components": patch
---

This fix addresses a bug where adding certain CSS styles to a parent element wrapping an Astro web component would cause certain parts of some components to inherit that styling. The major affectors were font-size, line-height, and text-align.
This fix affects the styling of most of the Astro web components. Specific font-size, line-height, or text-align attributes were added to the affected components to ensure that no parental inheritance affected styles that are dictated specifically in Figma.
