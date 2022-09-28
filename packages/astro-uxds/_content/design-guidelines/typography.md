---
tags: resources
path: /design-guidelines/typography
date: Last Modified
layout: interior.template.njk
title: Typography
---

# Typography

Astro uses the open source typeface [Roboto](https://fonts.google.com/specimen/Roboto?query=roboto&sidebar.open=true&selection.family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700) for all elements, but [system fonts](https://drafts.csswg.org/css-fonts-4/#system-ui-def) can also be used. As with all Astro elements, sizing is rendered in rem units. For those working with systems that don’t support rem, the corollary size is provided in points. Unless explicitly mentioned otherwise in a component, Astro recommends using sentence case capitalization throughout your applications.

## Display Headings

Astro supports two levels of display text.

| Style     | Weight        | Font Size        | Letter Spacing | Line Height       | Class            | Design Token Identifier |
| --------- | ------------- | ---------------- | -------------- | ----------------- | ---------------- | ----------------------- |
| Display 1 | Light (300)   | 3.75 rem (60 px) | -0.50          | 4.375 rem (70 px) | `.rux-display-1` | `display-1`             |
| Display 2 | Regular (400) | 3 rem (48 px)    | 0.00           | 3.5 rem (56 px)   | `.rux-display-2` | `display-2`             |

## Headings

Astro supports six levels of headline text.

| Style          | Weight        | Font Size         | Letter Spacing | Line Height      | Class                 | Design Token Identifier |
| -------------- | ------------- | ----------------- | -------------- | ---------------- | --------------------- | ----------------------- |
| Heading 1      | Regular (400) | 2.125 rem (34 px) | 0.25           | 2.5 rem (40 px)  | `.rux-heading-1`      | `heading-1`             |
| Heading 1 Bold | Bold (700)    | 2.125 rem (34 px) | 0.25           | 2 rem (32 px)    | `.rux-heading-1-bold` | `heading-1-bold`        |
| Heading 2      | Regular (400) | 1.5 rem (24 px)   | 0.00           | 1.75 rem (28 px) | `.rux-heading-2`      | `heading-2`             |
| Heading 3      | Medium (500)  | 1.25 rem (20 px)  | 0.15           | 1.5 rem (24 px)  | `.rux-heading-3`      | `heading-3`             |
| Heading 4      | Light (300)   | 1.25 rem (20 px)  | 0.15           | 1.5 rem (24 px)  | `.rux-heading-4`      | `heading-4`             |
| Heading 5      | Regular (400) | 1.125 rem (18 px) | 0.00           | 1.5 rem (24 px)  | `.rux-heading-5`      | `heading-5`             |
| Heading 6      | Light (300)   | 1.125 rem (18 px) | 0.00           | 1.5 rem (24 px)  | `.rux-heading-6`      | `heading-6`             |

## Body Text

The default font size in Astro is 1 rem/16 px. Astro supports three additional font sizes for body copy.
| Style | Weight | Font Size | Letter Spacing | Line Height | Class | Design Token Identifier |
| ------------------- | ------------- | ----------------- | -------------- | ---------------- | -------------------------- | ----------------------- |
| Body 1 | Regular (400) | 1 rem (16 px) | 0.50 | 1.5 rem (24 px) | `.rux-body-1` | `body-1` |
| Body 1 Bold | Bold (700) | 1 rem (16 px) | 0.50 | 1.5 rem (24 px) | `.rux-body-1-bold` | `body-1-bold` |
| Body 2 | Regular (400) | 0.875 rem (14 px) | 0.50 | 1.25 rem (20 px) | `.rux-body-2` | `body-2` |
| Body 2 Bold | Bold (700) | 0.875 rem (14 px) | 0.50 | 1.25 rem (20 px) | `.rux-body-2-bold` | `body-2-bold` |
| Body 3 | Regular (400) | 0.75 rem (12 px) | 0.00 | 1 rem (16 px) | `.rux-body-3` | `body-3` |
| Body 3 Bold | Bold (700) | 0.75 rem (12 px) | 0.00 | 1 rem (16 px) | `.rux-body-3-bold` | `body-3-bold` |
| Control Body 1 | Regular (400) | 1rem (16 px) | 0.50 | 1.25 rem (20 px) | `.rux-control-body-1` | `control-body-1` |
| Control Body 1 Bold | Bold (700) | 1rem (16 px) | 0.50 | 1.25 rem (20 px) | `.rux-control-body-1-bold` | `control-body-1-bold` |

## Using Typography in Development

### Using Utility Classes (Preferred)

When it comes to typography, working with individual design tokens can be verbose. Because of this, astro-web-components.css ships with a handful of CSS utility classes defined above that encapsulate all of our typography tokens, including letter-spacing, in a single place.

You may use these classes on individual elements through your application:

```html
<h1 class="rux-heading-1">Heading 1</h1>
```

### Using Tokens

If you’d prefer not to use utility classes or would like to create your own global styles, you may also use our raw typography tokens.

```css
h1 {
  font-family: var(--font-heading-1-font-family);
  font-size: var(--font-heading-1-font-size);
  font-weight: var(--font-heading-1-font-weight);
  letter-spacing: var(--font-heading-1-letter-spacing);
  line-height: var(--font-heading-1-line-height);
}
```

Each Astro text style is built using a combination of design tokens. The design tokens are created by adding the corresponding value from the Design Token Identifier column above into each of the following design token patterns. An example result would be --font-display-1-letter-spacing.

- --font-[identifier]-letter-spacing
- --font-[identifier]-font-size
- --font-[identifier]-line-height
- --font-[identifier]-font-weight
- --font-[identifier]-font-family
