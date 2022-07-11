---
tags: components
path: /components/link
date: Last Modified
layout: components.template.njk
title: Link
---

# Link

A Link (also known as a Hyperlink) is a clickable text element. It may be used for navigation and to trigger an event. Links are visualized to stand out from standard (non-clickable) text.

## Rules of Thumb

- Choose text for Links that:
  - Tell the user what will happen when clicking the Link.
  - Hint at the deeper content the Link will reveal.
- Keep the text for Links short. Short Links are more visually scannable.

::: note
Avoid using "Click Here," or "Link."
:::

## Appearance and Behavior

### Links

Inline and standalone links are to be styled the same way, with the primary blue (#4DACFF) for normal links and hover (#92CBFF) accompanied by an underline for links in hover state.

Underlines can be applied by detaching the text style and selecting the three dots to access further text options, and selecting the underline setting within. This is a less than satisfactory but temporary fix.

## Examples

:::two-col
![Do: Use Astro defined color for Links ](/img/components/links-do-1.png "Do: Use Astro defined color for Links ")

![Don’t: Change text color on hover](/img/components/links-dont-1.png "Don’t: Change text color on hover")

![Do: Add an underline when hovering over a link.](/img/components/links-do-2.png "Do: Add an underline when hovering over a link.")

![Don't: Forget to change to a hand cursor when hovering over a link or add additional decoration to links.](/img/components/links-dont-2.png "Don't: Forget to change to a hand cursor when hovering over a link or add additional decoration to links.")

:::
