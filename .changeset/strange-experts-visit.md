---
"angular-workspace": major
"@astrouxds/angular": major
"astro-website": major
"@astrouxds/react": major
"@astrouxds/astro-web-components": major
---

WHAT: Removed the `ruxmenuitemselected` event from `rux-menu-item`.
WHY: This event was being emitted for it's parent to hear and was not intended for use. This has been refactored to no longer be needed.
HOW TO MIGRATE: If you have instaces of listeners listening for the `ruxmenuitemselected` event, those can be replaced with the new `ruxmenuselected` event. The `e.detail` that the `ruxmenuselected` event returns is the equivalent of `ruxmenuitemselected`.
