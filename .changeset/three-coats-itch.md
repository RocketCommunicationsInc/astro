---
"@astrouxds/angular": major
"@astrouxds/react": major
"@astrouxds/astro-web-components": major
---

This PR adds a new component, rux-tooltip. This new Tooltip component offers a solution for developers to display incidental, text-based information based on a set trigger. Guidance is provided to address what sorts of elements should be tooltip triggers, but it is up to the developer to decide ultimately. Tooltips display on hover over, or focus in. Tooltip provides modification options for display and functionality in the form of props:

open: toggles the tooltip's visibility
message: the tooltip's content
placement: set via use of floating-ui, placement around the trigger
delay: set to 800ms default, the delay from when the trigger is hovered over or focused in and when the tooltip appears, can be set via prop or CSS custom property.
offset: distance from the trigger to the tooltip, set to 8px by default
disable-auto-update: disables the collision detection's flip method which bumps the tooltip to the opposite axis if there is not sufficient room for display within the viewport, happens on render and scroll.
strategy: positioning strategy for tooltip placement, can be absolute or fixed, set to absolute as default
