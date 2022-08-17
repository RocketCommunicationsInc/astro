---
tags: components
path: /components/status-symbol
date: Last Modified
layout: components.template.njk
title: Status Symbol
demo: components-status--all-variants
storybook: components-status--all-variants
git: rux-status
height: 80px
theme: true
class: color
---

# Status Symbol

The Status Symbol combines color and shape to create a standard and consistent way to indicate the status of a device or feature.

![Astro Status Symbols in context of a modem list layout.](/img/components/icons-symbols-modems.png "Astro Status Symbols in context of a modem list layout.")

::: note
To ensure compliance with [WCAG 2.0 contrast specifications for non-text content](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/#1411-non-text-contrast-aa) light themed Status Symbols must have a 1px black border set to 50% opacity.
:::

## Rules of Thumb

- Use the standard set of Status Symbols provided.
- Only use the provided colors for status.
- Use the highest color possible if multiple statuses are consolidated. For example, if the statuses of underlying components are green, yellow, and red, the consolidated indicator is red.

## Related Pages

- For a detailed description of how Status Symbols are used within Monitoring Icons, see [Icons and Symbols](/components/icons-and-symbols).
- To learn more about the usage of status colors, see [Status System](/patterns/status-system).

## Status Colors

Status colors are provided for both light and dark theme versions of Astro in Hex, RGB, and CSS Custom Property values.

### Dark Theme Status Colors

|                                                              | Hex     | RGB         | Synonyms                                       |     |
| ------------------------------------------------------------ | ------- | ----------- | ---------------------------------------------- | --- |
| ![Status Color: Critical ](/img/swatches/critical__dark.svg) | #ff3838 | 255,56,56   | Critical, form error, alert, emergency, urgent |
| ![Status Color: Serious ](/img/swatches/serious__dark.svg)   | #ffb302 | 255,179,2   | Serious, error, warning, needs attention       |
| ![Status Color: Caution ](/img/swatches/caution__dark.svg)   | #fce83a | 252,232,58  | Caution, unstable, unsatisfactory              |
| ![Status Color: Normal ](/img/swatches/normal__dark.svg)     | #56f000 | 86,240,0    | Normal, on, ok, fine, go, satisfactory         |
| ![Status Color: Standby ](/img/swatches/standby__dark.svg)   | #2dccff | 45,204,255  | Standby, available, enabled                    |
| ![Status Color: Off ](/img/swatches/off__dark.svg)           | #a4abb6 | 158,167,173 | Off, unavailable, disabled                     |

### Light Theme Status Colors

|                                                               | Hex     | RGB         | Synonyms                                       |     |
| ------------------------------------------------------------- | ------- | ----------- | ---------------------------------------------- | --- |
| ![Status Color: Critical ](/img/swatches/critical__light.svg) | #ff3838 | 255,56,56   | Critical, form error, alert, emergency, urgent |
| ![Status Color: Serious ](/img/swatches/serious__light.svg)   | #ffb302 | 255,179,2   | Serious, error, warning, needs attention       |
| ![Status Color: Caution ](/img/swatches/caution__light.svg)   | #fce83a | 252,232,58  | Caution, unstable, unsatisfactory              |
| ![Status Color: Normal ](/img/swatches/normal__light.svg)     | #56f000 | 86,240,0    | Normal, on, ok, fine, go, satisfactory         |
| ![Status Color: Standby ](/img/swatches/standby__light.svg)   | #64d9ff | 45,204,255  | Standby, available, enabled                    |
| ![Status Color: Off ](/img/swatches/off__light.svg)           | #9ea7ad | 158,167,173 | Off, unavailable, disabled                     |

### Light Theme Status Symbol Borders

- In light theme Status Symbols should have a 1px border set to the inside of the symbol.

|                                                               | Hex     | RGB       | Synonyms                                       |     |
| ------------------------------------------------------------- | ------- | --------- | ---------------------------------------------- | --- |
| ![Status Color: Critical ](/img/swatches/critical__light.svg) | #661102 | 102,17,2  | Critical, form error, alert, emergency, urgent |
| ![Status Color: Serious ](/img/swatches/serious__light.svg)   | #664618 | 102,70,24 | Serious, error, warning, needs attention       |
| ![Status Color: Caution ](/img/swatches/caution__light.svg)   | #645600 | 100,86,0  | Caution, unstable, unsatisfactory              |
| ![Status Color: Normal ](/img/swatches/normal__light.svg)     | #005a00 | 0,90,0    | Normal, on, ok, fine, go, satisfactory         |
| ![Status Color: Standby ](/img/swatches/standby__light.svg)   | #285766 | 40,87,102 | Standby, available, enabled                    |
| ![Status Color: Off ](/img/swatches/off__light.svg)           | #3c3e42 | 60,62,66  | Off, unavailable, disabled                     |

::: note
In light theme user interfaces all symbols indicating status must include a 1 pixel border set to black with an opacity of 50% to meet WCAG 2.0 Contrast Compliance.
:::
