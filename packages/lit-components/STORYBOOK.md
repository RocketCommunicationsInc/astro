# Storybook Setup for Lit Components

This document describes the Storybook setup created for the `lit-components` package.

## What Was Created

### 1. Storybook Configuration Files (`.storybook/`)

-   **`main.js`** - Main Storybook configuration
    -   Uses `@storybook/web-components-vite` framework (instead of webpack5 used in web-components)
    -   Removed Stencil-specific addon (`@astrouxds/storybook-addon-docs-stencil`)
    -   Stories path: `../src/stories/**/*.mdx` and `../src/stories/*.stories.@(js|jsx|ts|tsx)`
    -   Static files from `../public` directory
-   **`preview.js`** - Preview configuration and decorators
    -   Theme toggle between light/dark modes
    -   Same story sorting and categories as web-components Storybook
-   **`theme.js`** - Custom Astro UXDS theming
    -   Light and dark theme configurations
    -   Updated brand title to "AstroUXDS Lit Components"
-   **`preview-head.html`** - Preview iframe head content
    -   Loads Roboto fonts
    -   Loads Astro CSS from CDN (for design tokens/styling)
    -   Sets up dark theme by default
-   **`manager-head.html`** - Manager UI head content
    -   Loads Roboto fonts
    -   Google Analytics tracking
-   **`manager.js`** - Manager UI configuration
    -   Sets dark theme as default
    -   Panel position to right
-   **`preview.css`** & **`manager.css`** - Custom styling

    -   Copied from web-components Storybook
    -   Astro-specific component and sidebar styling

-   **`logo.svg`** - Astro logo for branding

### 2. Package.json Updates

Added Storybook dependencies:

```json
{
    "devDependencies": {
        "@storybook/addon-a11y": "^8.3.2",
        "@storybook/addon-actions": "^8.3.2",
        "@storybook/addon-docs": "^8.3.2",
        "@storybook/addon-essentials": "^8.3.2",
        "@storybook/addon-links": "^8.3.2",
        "@storybook/addons": "^7.6.17",
        "@storybook/blocks": "~8.3.3",
        "@storybook/theming": "^8.3.2",
        "@storybook/web-components": "^8.3.2",
        "@storybook/web-components-vite": "~8.3.2",
        "lit-html": "^3.3.1",
        "storybook": "^8.3.2",
        "storybook-addon-themes": "~6.1.0"
    }
}
```

Added npm scripts:

```json
{
    "scripts": {
        "storybook": "storybook dev -p 6007",
        "build-storybook": "storybook build"
    }
}
```

### 3. Story Files (`src/stories/`)

Created initial story files:

-   **`astro-uxds/StartHere.mdx`** - Welcome page with:

    -   Introduction to Lit Components version
    -   List of converted components
    -   Getting started guide
    -   Links to resources

-   **`button.stories.js`** - Button component stories with:

    -   Default story with all controls
    -   WithIcon variant
    -   Secondary variant
    -   Borderless variant
    -   IconOnly variant
    -   AllVariants showcase story

-   **`checkbox.stories.js`** - Checkbox component stories with:
    -   Default story with all controls
    -   Checked variant
    -   Disabled variant
    -   Indeterminate variant
    -   AllVariants showcase story

## Key Differences from Web-Components Storybook

1. **Framework**: Uses `@storybook/web-components-vite` instead of `@storybook/web-components-webpack5`

    - Faster build times with Vite
    - Better integration with the Lit component build process

2. **No Stencil Addon**: Removed `@astrouxds/storybook-addon-docs-stencil` since these are Lit components

3. **Component Loading**:

    - Web-components: Loads from pre-built `dist/` folder
    - Lit-components: Loads directly from source via Vite

4. **Port**: Runs on port 6007 (vs 6006 for web-components) to avoid conflicts

## How to Use

### Start Storybook

```bash
cd packages/lit-components
npm run storybook
```

This will start Storybook at http://localhost:6007

### Build Storybook

```bash
cd packages/lit-components
npm run build-storybook
```

This will create a static build in `storybook-static/` directory

## Next Steps

1. **Create More Stories**: Add story files for all converted Lit components

    - Accordion
    - Breadcrumb
    - Card
    - Classification Marking
    - Clock
    - Container
    - Dialog
    - And all others...

2. **Add MDX Documentation**: Create `.mdx` files for component documentation similar to web-components

3. **Add Args Tables**: Enhance stories with complete argTypes for better documentation

4. **Visual Regression Testing**: Consider setting up visual regression tests with Playwright

5. **Update Package Versions**: Address the version warnings:

    - Update `@storybook/web-components-vite` to 8.6.14
    - Consider alternatives to deprecated `@storybook/addons`

6. **Convert to ESM**: Update `main.js` to use ESM instead of CommonJS (as warned by Vite)

## Troubleshooting

### Port Already in Use

If port 6007 is already in use, change it in `package.json`:

```json
"storybook": "storybook dev -p 6008"
```

### Component Not Showing

Make sure to import the component in your story file:

```javascript
import '../components/rux-button/rux-button.ts'
```

### Styling Issues

Ensure the Astro CSS is loaded in `preview-head.html` and that components use the `@astrouxds/tokens` package for styling.

## Resources

-   [Storybook Documentation](https://storybook.js.org/docs)
-   [Storybook Web Components Guide](https://storybook.js.org/docs/web-components/get-started/introduction)
-   [Lit Documentation](https://lit.dev/)
-   [Astro UXDS](https://www.astrouxds.com/)
