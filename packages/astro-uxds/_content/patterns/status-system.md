---
tags: resources
path: /patterns/status-system
date: Last Modified
layout: interior.template.njk
title: Status System
class: color
---

# Status System

Consistent use of colors and symbols to convey status is critical for user success.

Astro's user research, conducted on a wide variety of space applications, showed that inconsistent and unconstrained use of colors and symbols left users confused and even dismissive of color systems. The research further showed that wide overuse of red to indicate both "off" and "emergency" stripped the color of its attention-getting power.

The Astro Status System is a standard to consistently indicate the state of an object or concept (typically represented by an Icon). The Status System consists of Status Symbols and Status Colors.

The Status Color palette for the Status System is based on a color temperature scale. The lowest level of severity, Off, is grey (neutral) and the highest level of severity, Alert, is red (hot).

#3.1.1[Status system taxonomy](/img/patterns/status-system-fundamentals.png)

Each Status Symbol is a combination of a Status Color and a shape. The shapes are provided to ensure people with color blindness can also clearly identify the state of the object or concept

## Rules of Thumb

- A state change must be reflected by a change in the Status Color and, if appropriate, the Status Icon.
- Only use the standard set of Status Symbols and Status Colors provided.
- Use the highest level of urgency status if multiple statuses are consolidated. For example, if the statuses of underlying components are green, yellow, and red, the consolidated indicator is red.
- Reserve red for states that are urgent and require immediate attention.

## Status Colors

|                                                              | Hex     | RGB         | CSS                       | Synonyms                                        |
| ------------------------------------------------------------ | ------- | ----------- | ------------------------- | ----------------------------------------------- |
| ![Status Color: Critical ](/img/swatches/critical__dark.svg) | #ff3838 | 255,56,56   | `--color-status-critical` | Critical, alert, form, error, emergency, urgent |
| ![Status Color: Serious ](/img/swatches/serious__dark.svg)   | #ffb302 | 255,179,2   | `--color-status-serious`  | Serious, error, warning, needs attention        |
| ![Status Color: Caution ](/img/swatches/caution__dark.svg)   | #fce83a | 252,232,58  | `--color-status-caution`  | Caution, unstable, unsatisfactory               |
| ![Status Color: Normal ](/img/swatches/normal__dark.svg)     | #56f000 | 86,240,0    | `--color-status-normal`   | Normal, on, ok, fine, go, satisfactory          |
| ![Status Color: Standby ](/img/swatches/standby__dark.svg)   | #2dccff | 45,204,255  | `--color-status-standby`  | Standby, available, enabled                     |
| ![Status Color: Off ](/img/swatches/off__dark.svg)           | #9ea7ad | 158,167,173 | `--color-status-off`      | Off, unavailable, disabled                      |

## Status Colors-Light Background

|                                                              | Hex                                | RGB                                     | CSS                                            | Synonyms                                        |
| ------------------------------------------------------------ | ---------------------------------- | --------------------------------------- | ---------------------------------------------- | ----------------------------------------------- |
| ![Status Color: Critical ](/img/swatches/critical__dark.svg) | Fill: #ff2A04 <br> Border: #661102 | Fill: 255,42,4 <br> Border: 102,17,2    | `--status-symbol-color-fill-critical-on-light` | Critical, alert, form, error, emergency, urgent |
| ![Status Color: Serious ](/img/swatches/serious__dark.svg)   | Fill: #ffaf3d <br> Border: #664618 | Fill: 255,179,2 <br> Border: 102,70,24  | `--status-symbol-color-fill-serious-on-light`  | Serious, error, warning, needs attention        |
| ![Status Color: Caution ](/img/swatches/caution__dark.svg)   | Fill: #fad800 <br> Border: #645600 | Fill: 252,232,58 <br> Border:100,86,0   | `--status-symbol-color-fill-caution-on-light`  | Caution, unstable, unsatisfactory               |
| ![Status Color: Normal ](/img/swatches/normal__dark.svg)     | Fill: #00e200 <br> Border: #005A00 | Fill: 86,240,0 <br> Border: 40,87,102   | `--status-symbol-color-fill-normal-on-light`   | Normal, on, ok, fine, go, satisfactory          |
| ![Status Color: Standby ](/img/swatches/standby__dark.svg)   | Fill: #64d9ff <br> Border: #285766 | Fill: 45,204,255 <br> Border: 40,87,102 | `--color-status-standby`                       | Standby, available, enabled                     |
| ![Status Color: Off ](/img/swatches/off__dark.svg)           | Fill: #7b8089 <br> Border: #3C3E42 | Fill: 158,167,173 <br> Border: 60,62,66 | `--status-symbol-color-fill-off-on-light`      | Off, unavailable, disabled                      |

::: caution
Avoid adding additional colors if possible. Creating additional colors greatly reduces the user’s ability to learn and properly use the application.
:::
