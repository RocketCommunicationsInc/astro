---
tags: components
path: /components/link
date: Last Modified
layout: components.template.njk
title: Link
---

# Link

A Link (also known as a hyperlink) is a clickable text element. It may be used for navigation and to trigger an event. Links are visualized to stand out from standard (non-clickable) text.

## Rules of Thumb

- Choose text for Links that:
  - Tell the user what will happen when clicking the Link.
  - Hint at the deeper content the Link will reveal.
- Keep the text for Links short. Short Links are more visually scannable.
- Links are to be styled in the Astro-defined primary interactive color.
- Hovered links are to be styled in the same primary interactive color accompanied by an underline.
- Un-clicked or un-hovered links have no underline.
- Inline and standalone links are to be styled the same way.
- Underlines for hover state are not needed for other elements like tabs, buttons, and pop up menus. However the link hover pattern with underlines are present on hovered pagination.
- Link-styled icons do not have the underline unless they’re part of an inline text link. Without text, follow button guidance (no underline on hover).

::: note
Avoid using “Click Here” or “Link” for the link text.
:::

## Appearance and Behavior

### Links

Inline and standalone links are to be styled the same way, with the primary blue (#4DACFF) for normal links and hover (#92CBFF) accompanied by an underline for links in hover state.

Underlines can be applied by detaching the text style and selecting the three dots to access further text options, and selecting the underline setting within. This is a less than satisfactory but temporary fix.

## Examples

:::two-col
![Do: Use the Astro-defined primary interactive color for links.](/img/components/links-do-1.png "Do: Use the Astro-defined primary interactive color for links.")

![Don’t: Style links with non-link colors.](/img/components/links-dont-1.png "Don’t: Style links with non-link colors.")

![Do: Style hovered links with an underline without any color change.](/img/components/links-do-2.png "Do: Style hovered links with an underline without any color change.")

![Don’t: Add underlines on non-hovered links.](/img/components/links-dont-2.png "Don’t: Add underlines on non-hovered links.")

:::
