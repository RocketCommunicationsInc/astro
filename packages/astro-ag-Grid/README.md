# AgGridApp
Demo application for testing custom Astro CSS styling.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

## Install
Run `npm i` to install packages. You will also need to globally install the Angular CLI: `npm install -g @angular/cli`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# Astro AG-Grid Theme
The Astro AG-Grid theme follows the [Astro theming guidelines](https://www.astrouxds.com/design-guidelines/theme/) and the [AG-Grid theme development guidelines](https://www.ag-grid.com/javascript-grid-themes-customising/). 

There are three parts to the Astro AG-Grid theme:
1. The colors and other properties specific to Astro, which are defined in `src/css/astro.css` or any of its variants (`astro.core.css`, etc)
2. The Astro font files, which are in `src/fonts/` and are refered to from `src/css/astro.css`
3. The Astro AG-Grid theme map itself, which is defined in `src/css/astro-theme.scss` and consumes the properties defined in the `src/css/astro.css` file above

You will need all three to theme an AG-Grid for Astro.

## Copy-paste Theme installation

1. Copy the `src/css` and `src/fonts` folders to your AG-Grid project. 

2. Import the `astro-theme.scss` file in your main `src/styles.scss` file:
 ```scss
 // see line 9 of styles.scss
 @import 'css/astro-theme.scss';
 ```

3. Apply the class "ag-theme-astro" to your `ag-grid-angular` custom element:
```html
<ag-grid-angular class='ag-theme-astro'...></ag-grid-angular>
```

The Astro Dark variant is the default, which can also be specifically assigned by wrapping the grid in any element containing the class "dark-theme". The Light variant can be assigned by instead wrapping the grid in the "light-theme" class. You may also assign these Astro theme classes directly to the `ag-grid-angular` component itself.

```html
<section class="light-theme">
  ...
  <ag-grid-angular class='ag-theme-astro'...></ag-grid-angular>
<section>
```

## Changing the theme file paths
If your build process requires a different directory structure:

1. Ensure `astro.css` (or variant) has access to the fonts, which are currently expected to be available relative to the `astro.css` file at `../fonts/`.

2. Ensure that the `astro-theme.scss` file has access to the astro.css (or variant) file, which is currently expecte to be a sibling. If you change the location of `src/css/astro.css`, make sure to update line 6 of `astro-theme.scss` to the new path.
