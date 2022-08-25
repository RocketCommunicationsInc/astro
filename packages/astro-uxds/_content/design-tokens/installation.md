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
npm i @astrouxds/astro-design-tokens@beta
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
@import "node_modules/@astrouxds/design-tokens/dist/css/index.css";
```

or

```css
@import "node_modules/@astrouxds/design-tokens/dist/css/base.reference.css";
@import "node_modules/@astrouxds/design-tokens/dist/css/base.system.css";
@import "node_modules/@astrouxds/design-tokens/dist/css/base.component.css";
```

### Light Theme Class

```css
@import "node_modules/@astrouxds/design-tokens/dist/css/theme.light.css";
```

A `light-theme` class that includes Astro's light theme.

### Typography Utility Classes

```css
@import "node_modules/@astrouxds/design-tokens/dist/css/classes/typography.css";
```

A few utility classes for applying Astro typography.

### SASS

```css
@import "node_modules/@astrouxds/design-tokens/dist/scss/base.reference.scss";
@import "node_modules/@astrouxds/design-tokens/dist/scss/base.system.scss";
@import "node_modules/@astrouxds/design-tokens/dist/scss/base.component.scss";
```

### SASS Maps

```css
@import "node_modules/@astrouxds/design-tokens/dist/scss-map-flat/base.reference.scss";
@import "node_modules/@astrouxds/design-tokens/dist/scss-map-flat/base.system.scss";
@import "node_modules/@astrouxds/design-tokens/dist/scss-map-flat/base.component.scss";
```
