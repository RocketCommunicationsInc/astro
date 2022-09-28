---
path: /design-tokens/installation
date: Last Modified
layout: interior.template.njk
title: Installation
---

# Installation

## For Developers

If you're using our Web Components, our Design Tokens are already accessible to you in the form of CSS Custom Properties as part of the package when you import `astro-web-components.css`.

### Manual Installation

If you'd like more control over what you import and are not using our web components, you can install our design tokens separately:

```bash
npm i @astrouxds/tokens
```

### Structure

Each export target has the following files:

- base.reference.\*
  - All of the possible variables.
  - Useful in instances where there aren't any system options.
- base.system.\*
  - A limited set of variables with semantic meaning
  - Useful for creating custom pieces of UI.
- base.component.\*
  - Component-specific variables
  - Useful for recreating existing Astro components.

### CSS Custom Properties

```css
@import "node_modules/@astrouxds/tokens/dist/css/index.css";
```

or

```css
@import "node_modules/@astrouxds/tokens/dist/css/base.reference.css";
```

```css
@import "node_modules/@astrouxds/tokens/dist/css/base.system.css";
```

```css
@import "node_modules/@astrouxds/tokens/dist/css/base.component.css";
```

### Light Theme Class

```css
@import "node_modules/@astrouxds/tokens/dist/css/theme.light.css";
```

A `light-theme` class that includes Astro's light theme.

### Typography Utility Classes

```css
@import "node_modules/@astrouxds/tokens/dist/css/classes/typography.css";
```

A few utility classes for applying Astro typography.
| Style | Class |
| ----- | ----- |
| Body 1 | `.rux-body-1` |
| Body 1 Bold | `.rux-body-1-bold` |
| Body 2 | `.rux-body-2` |
| Body 2 Bold | `.rux-body-2-bold` |
| Body 3 | `.rux-body-3` |
| Body 3 Bold | `.rux-body-3-bold` |
| Control Body 1 | `.rux-control-body-1` |
| Control Body 1 Bold | `.rux-control-body-1-bold` |
| Heading 1 | `.rux-heading-1` |
| Heading 1 Bold | `.rux-heading-1-bold` |
| Heading 2 | `.rux-heading-2` |
| Heading 3 | `.rux-heading-3` |
| Heading 4 | `.rux-heading-4` |
| Heading 5 | `.rux-heading-5` |
| Heading 6 | `.rux-heading-6` |
| Display 1 | `.rux-display-1` |
| Display 2 | `.rux-display-2` |
| Monospace 1 | `.rux-monospace-1` |

### SASS

```css
@import "node_modules/@astrouxds/tokens/dist/scss/base.reference.scss";
```

```css
@import "node_modules/@astrouxds/tokens/dist/scss/base.system.scss";
```

```css
@import "node_modules/@astrouxds/tokens/dist/scss/base.component.scss";
```

### SASS Maps

```css
@import "node_modules/@astrouxds/tokens/dist/scss-map-flat/base.reference.scss";
```

```css
@import "node_modules/@astrouxds/tokens/dist/scss-map-flat/base.system.scss";
```

```css
@import "node_modules/@astrouxds/tokens/dist/scss-map-flat/base.component.scss";
```
