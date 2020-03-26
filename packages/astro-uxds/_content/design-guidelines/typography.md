---
tags: resources
path: /design-guidelines/typography
date: Last Modified
layout: interior.template.njk
title: Typography
---

# Typography

Astro uses the open source typeface [Open Sans](https://fonts.google.com/specimen/Open+Sans) with bold, regular and light font variants for all heading, body copy and most interface elements. Astro also uses the open source typeface [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono) for elements requiring a monospaced typeface. As with all Astro elements, sizing is rendered in rem units. For those working with systems that don’t support [rem](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Values_and_units#Length_and_size), the corollary size is provided in points.

## Headings

Astro supports three levels of headline text (h1, h2, h3). CSS properties are automatically applied to HTML elements.

| Heading | Weight | Markup | REM   | PX  | Class |
| ------ | ------ | ------ | ----- | --- | ----- |
| Heading Level 1     | Light  | `<h1>` | 2.375 | 38  | `.h1` |
| Heading Level 2     | Light  | `<h2>` | 1.75  | 28  | `.h2` |
| Heading Level 3     | Light  | `<h3>` | 1.375 | 22  | `.h3` |

::: note
In addition to semantic headings, Astro supports overriding a header element's presentation via .h1, .h2 .h3 CSS classes which will apply the visual appearance of the corresponding header element.
:::

## Body Text

The default font size in Astro is 1rem/16px. Astro supports four additional font sizes for body copy.

| Size        | Weight | REM   | PX  | Class |
| ------------- | ------ | ----- | --- | ----- |
| Extra large | Normal | 1.125 | 18  | `.xl` |
| Normal/large | Normal | 1     | 16  | --    |
| Medium | Normal | 0.875 | 14  | `.md` |
| Small | Normal | 0.75  | 12  | `.sm` |
| Extra small | Normal | 0.65  | 10  | `.xs` |

## Inline Text Styles

| Sample              | Class            |
| ------------------- | ---------------- |
| Link Color          | --               |
| Low Contrast\*      | `.low-contrast` |
| Inverted Text Style | `.inverted`      |

\* The low contrast text option will fail WCAG readability compliance
