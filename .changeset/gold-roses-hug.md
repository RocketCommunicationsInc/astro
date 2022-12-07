---
"@astrouxds/astro-web-components": minor
---

Removing min-height, and widening min-width slightly on monitoring-icon. This accounts for monitoring icon taking up space when no labels were used, and increases the space available for notifications. Global Status Bar also had the overflow: hidden property removed from the header element for the use case of a monitoring icon with a very large amount of notifications being able to show those notifications and not be cut-off.
