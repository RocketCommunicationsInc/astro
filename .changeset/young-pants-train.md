---
"angular-workspace": major
"@astrouxds/angular": major
"astro-website": major
"@astrouxds/react": major
"@astrouxds/astro-web-components": major
---

WHAT: Removed the `ruxpopupselected` event on rux-pop-up. Added two new events to `rux-pop-up`, `ruxpopupopened` and `ruxpopupclosed`.
WHY: The `ruxpopupselected` event has been replaced with the `ruxmenuselected` event on `rux-menu`. `rux-pop-up` was missing opened and closed events as well.
HOW TO MIGRATE: Replace all listeners using `ruxpopupselected` with `ruxmenuselected`. For any listeners that are listening for the opening or closing of the `rux-pop-up`, you can now use `ruxpopupopened` and `ruxpopupclosed`.
