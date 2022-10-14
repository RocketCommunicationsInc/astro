---
tags: resources
path: /design-guidelines/color
date: Last Modified
layout: interior.template.njk
class: color
title: Color
---

# Color

Maintaining color consistency across applications is an essential part of what makes an application an Astro Application. Astro uses [Design Tokens](/design-tokens/getting-started/), which answers questions like “what color should be used for XYZ”? They define UI elements and their states within the Astro Design System. There are three types of Design Tokens based on how the color will be used: [Reference Tokens](/design-tokens/reference/), [System Tokens](/design-tokens/system), and [Component Tokens](/design-tokens/component).

[Reference Tokens](/design-tokens/reference) are all the possible colors within the Astro Design System. There is no specific meaning attached to these colors, and they are organized according to thematic palettes. An example of a reference token is: "color.palette.brightblue.500".

[System Tokens](/design-tokens/system) are the high-level uses for each color. System tokens have specific names like “color.text.error” to describe a particular use case and its state. The token previously mentioned would only be used for error message text, while a token like “color.border.interactive.default” would be used as the border color of an interactive element in its default state. It is recommended to use System Tokens as much as possible to add meaning to the colors within your designs.

[Component Tokens](/design-tokens/component) refer to colors used only for specific components. For example, a Status Symbol with a normal status has a Component token: ”status-symbol.color.fill.normal.on-dark”. These colors should not be used outside of their specific component and are not found in System Tokens.

All color pairings should follow the latest WCAG AA contrast rules. Astro components are pre-built to include appropriate color contrasts. In order to remain compliant, it is advised that users avoid creating new colors or values outside of the Astro design system palette.

## 7.0 Migration

### Primary Palette

| 6.0 Hex Code | 6.0 CSS Name             | 7.0 Hex Code | 7.0 Design Token               |
| ------------ | ------------------------ | ------------ | ------------------------------ |
| #CBDEE9      | `--colorPrimaryLighten4` | #CBDEE9      | `--color-palette-darkblue-100` |
| #98BDD3      | `--colorPrimaryLighten3` | #98BDD3      | `--color-palette-darkblue-200` |
| #649CBD      | `--colorPrimaryLighten2` | #649CBD      | `--color-palette-darkblue-300` |
| #2F7AA7      | `--colorPrimaryLighten1` | #2F7AA7      | `--color-palette-darkblue-400` |
| #005A8F      | `--colorPrimary`         | #005A8F      | `--color-palette-darkblue-500` |
| #004872      | `--colorPrimaryDarken1`  | #004872      | `--color-palette-darkblue-600` |
| #003655      | `--colorPrimaryDarken2`  | #1C3F5E      | `--color-palette-darkblue-700` |
| #002349      | `--colorPrimaryDarken3`  | #1B2D3E      | `--color-palette-darkblue-800` |
| #00121C      | `--colorPrimaryDarken4`  | #172635      | `--color-palette-darkblue-900` |
| n/a          | n/a                      | #080C11      | `--color-palette-darkblue-950` |

### Secondary Palette

| 6.0 Hex Code | 6.0 CSS Name                | 7.0 Hex Code | 7.0 Design Token                 |
| ------------ | --------------------------- | ------------ | -------------------------------- |
| #DAEEFF      | `--colorSecondaryLighten4`  | #DAEEFF      | `--color-palette-brightblue-100` |
| #B7DCFF      | `--colorSecondaryLighten3`  | #CEE9FC      | `--color-palette-brightblue-200` |
| #92CBFF      | `--colorsSecondaryLighten2` | #87DCFF      | `--color-palette-brightblue-300` |
| #6EBAFF      | `--colorSecondaryLighten1`  | #92CBFF      | `--color-palette-brightblue-400` |
| #4DACFF      | `--colorSecondary`          | #4DACFF      | `--color-palette-brightblue-500` |
| #3A87CF      | `--colorSecondaryDarken1`   | #3A87CF      | `--color-palette-brightblue-600` |
| #2B659B      | `--colorSecondaryDarken2`   | #2B659B      | `--color-palette-brightblue-700` |
| #1D4367      | `--colorSecondaryDarken3`   | #1C3851      | `--color-palette-brightblue-800` |
| #0E2234      | `--colorSecondaryDarken4`   | #142435      | `--color-palette-brightblue-850` |
| n/a          | n/a                         | #101923      | `--color-palette-brightblue-900` |

### Tertiary Palette

| 6.0 Hex Code | 6.0 CSS Name               | 7.0 Hex Code | 7.0 Design Token           |
| ------------ | -------------------------- | ------------ | -------------------------- |
| #D4D8DD      | `--colorTertiaryLighten4`  | #F5F6F9      | `--color-palette-grey-100` |
| #A9B2BC      | `--colorTertiaryLighten3`  | #EAEEF4      | `--color-palette-grey-200` |
| #7E8C9B      | `--colorsTertiaryLighten2` | #E0E5EB      | `--color-palette-grey-250` |
| #52667A      | `--colorTertiaryLighten1`  | #D4D8DD      | `--color-palette-grey-300` |
| #274059      | `--colorSecondary`         | #BBC1C9      | `--color-palette-grey-400` |
| #1F3347      | `--colorTertiaryDarken1`   | #A4ABB6      | `--color-palette-grey-500` |
| #172635      | `--colorTertiaryDarken2`   | #7B8089      | `--color-palette-grey-600` |
| #101923      | `--colorTertiaryDarken3`   | #51555B      | `--color-palette-grey-700` |
| #080C11      | `--colorTertiaryDarken4`   | #3C3E42      | `--color-palette-grey-800` |
| n/a          | n/a                        | #292A2D      | `--color-palette-grey-900` |

### Quaternary Palette

The Quaternary Palette has been removed entirely.

### Tag 1 Palette

| 6.0 Hex Code | 6.0 CSS Name          | 7.0 Hex Code | 7.0 Design Token           |
| ------------ | --------------------- | ------------ | -------------------------- |
| #DOF4F4      | `--colorTag1Lighten4` | #DOF4F4      | `--color-palette-teal-100` |
| #A1E9EB      | `--colorTag1Lighten3` | #A1E9EB      | `--color-palette-teal-200` |
| #70DDE0      | `--colorTag1Lighten2` | #70DDE0      | `--color-palette-teal-300` |
| #3ED2D6      | `--colorTag1Lighten1` | #3ED2D6      | `--color-palette-teal-400` |
| #00C7CB      | `--colorTag1`         | #00C7CB      | `--color-palette-teal-500` |
| #009FA3      | `--colorTag1Darken1`  | #009FA3      | `--color-palette-teal-600` |
| #00777A      | `--colorTag1Darken2`  | #00777A      | `--color-palette-teal-700` |
| #035051      | `--colorTag1Darken3`  | #035051      | `--color-palette-teal-800` |
| #032828      | `--colorTag1Darken4`  | #032828      | `--color-palette-teal-900` |

### Tag 2 Palette

| 6.0 Hex Code | 6.0 CSS Name          | 7.0 Hex Code | 7.0 Design Token             |
| ------------ | --------------------- | ------------ | ---------------------------- |
| #E4E2F7      | `--colorTag2Lighten4` | #E4E2F7      | `--color-palette-purple-100` |
| #C9C5ED      | `--colorTag2Lighten3` | #C9C5ED      | `--color-palette-purple-200` |
| #AEA8E5      | `--colorTag2Lighten2` | #AEA8E5      | `--color-palette-purple-300` |
| #938BDB      | `--colorTag2Lighten1` | #938BDB      | `--color-palette-purple-400` |
| #786DD3      | `--colorTag2`         | #786DD3      | `--color-palette-purple-500` |
| #6058A8      | `--colorTag2Darken1`  | #6058A8      | `--color-palette-purple-600` |
| #48417F      | `--colorTag2Darken2`  | #48417F      | `--color-palette-purple-700` |
| #302C54      | `--colorTag2Darken3`  | #302C54      | `--color-palette-purple-800` |
| #18152B      | `--colorTag2Darken4`  | #18152B      | `--color-palette-purple-900` |

### Tag 3 Palette

| 6.0 Hex Code | 6.0 CSS Name          | 7.0 Hex Code | 7.0 Design Token           |
| ------------ | --------------------- | ------------ | -------------------------- |
| #EDCEF3      | `--colorTag3Lighten4` | #EDCEF3      | `--color-palette-pink-100` |
| #DA9CE7      | `--colorTag3Lighten3` | #DA9CE7      | `--color-palette-pink-200` |
| #C76ADA      | `--colorTag3Lighten2` | #C76ADA      | `--color-palette-pink-300` |
| #B534CE      | `--colorTag3Lighten1` | #B534CE      | `--color-palette-pink-400` |
| #A200C1      | `--colorTag3`         | #A200C1      | `--color-palette-pink-500` |
| #81009A      | `--colorTag3Darken1`  | #81009A      | `--color-palette-pink-600` |
| #610074      | `--colorTag3Darken2`  | #610074      | `--color-palette-pink-700` |
| #41004D      | `--colorTag3Darken3`  | #41004D      | `--color-palette-pink-800` |
| #200227      | `--colorTag3Darken4`  | #200227      | `--color-palette-pink-900` |

### Tag 4 Palette

| 6.0 Hex Code | 6.0 CSS Name          | 7.0 Hex Code | 7.0 Design Token                |
| ------------ | --------------------- | ------------ | ------------------------------- |
| #F8DDD1      | `--colorTag4Lighten4` | #F8DDD1      | `--color-palette-hotorange-100` |
| #F0BAA3      | `--colorTag4Lighten3` | #F0BAA3      | `--color-palette-hotorange-200` |
| #EA9875      | `--colorTag4Lighten2` | #EA9875      | `--color-palette-hotorange-300` |
| #E27545      | `--colorTag4Lighten1` | #E27545      | `--color-palette-hotorange-400` |
| #DA5309      | `--colorTag4`         | #DA5309      | `--color-palette-hotorange-500` |
| #AF420A      | `--colorTag4Darken1`  | #AF420A      | `--color-palette-hotorange-600` |
| #833209      | `--colorTag4Darken2`  | #833209      | `--color-palette-hotorange-700` |
| #572108      | `--colorTag4Darken3`  | #572108      | `--color-palette-hotorange-800` |
| #2B1105      | `--colorTag4Darken4`  | #2B1105      | `--color-palette-hotorange-900` |
