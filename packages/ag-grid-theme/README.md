# ag-grid-theme

AG Grid theme using Astro UXDS styling.

The Astro AG-Grid theme follows the [Astro theming guidelines](https://www.astrouxds.com/design-guidelines/theme/) and the [AG-Grid theme development guidelines](https://www.ag-grid.com/javascript-grid-themes-customising/).

There are three parts to the Astro AG-Grid theme:

1. The CSS custom properties specific to Astro, which you will need to import seperately from the `@astrouxds/astro-web-components` repositroy.
2. The AG-Grid community alpine-dark theme that the Astro AG-Grid theme builds off of, which is imported from the `ag-grid-community` repository.
3. The Astro AG-Grid theme itself, which is defined in `@astrouxds/ag-grid/dist/main.css` and consumes the imported custom properties above.

The @astrouxds/ag-grid-theme/dist/main.css file merges the ag-grid.css, ag-theme-alpine.css and the astro ag-grid theme sources so you will only need to import two files.

## Installation

Import the Astro Web Components

Run `npm install @astrouxds/astro-web-components` while in your project directory

Import the Astro AG-grid theme

Run `npm install @astrouxds/ag-grid-theme` while in your project directory.

## Usage

In your main css entrypoint (for Angular `src/styles.scss`):

`@import "~@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css"`
`@import "~@astrouxds/ag-grid-theme/dist/main.css"`

> If you are already importing `ag-grid-community/dist/styles/ag-grid.css` or `ag-grid-community/dist/styles/ag-theme-alpine.css` you can remove them as they are already bundled in our ag-grid-theme css.

Apply the class "ag-theme-astro" to your `ag-grid` element:

```html
<ag-grid class="ag-theme-astro" ...></ag-grid>
```

## Themes

The Astro Dark variant is the default theme. The Light variant can be assigned by wrapping the grid in an element with the "light-theme" class.

```html
<section class="light-theme">
  <ag-grid- class="ag-theme-astro" ...></ag-grid->
</section>
```
