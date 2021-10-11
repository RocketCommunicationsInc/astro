# Installation

`npm i @astrouxds/angular`

## Import and Usage

First, import the css into your `angular.json`

```json
{
  "architect": {
    "build": {
      "builder": "@angular-devkit/build-angular:browser",
      "options": {
        "assets": ["src/favicon.ico", "src/assets"],
        "styles": [
          "./node_modules/@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css",
          "styles.scss"
        ],
        "scripts": []
      }
    }
  }
}
```

Next, Import `AstroComponentsModule` into module where you would want to use the components.

```js
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AstroComponentsModule } from "@astrouxds/angular";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AstroComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [],
})
export class AppModule {}
```

You can now use astro-components as regular Angular components.

```html
<section>
  <rux-input name="myInput"></rux-progress>
</section>
```

## Astro Stencil Components Docs

Docs for all components can be found at our [Astro Stencil Storybook.](https://astro-stencil.netlify.app/)

### This repo is currently in devlopement.

This repo will be updated frequently with the [Astro components in Stencil repo](https://github.com/RocketCommunicationsInc/astro-components-stencil).

### Known Issues

- Angular versions 9 and higher may through an error `ɵɵInjectorDeclaration`. To solve that issue you'll need to add the following to your `tsconfig.json` `compilerOptions`

```json
  "paths": {
      "@angular/*": ["./node_modules/@angular/*"]
  }
```

- Presently all components work with an exception of `rux-checkbox`, `rux-switch`, and `rux-input` which presently do not support native `ngModel` and `formControl` integration

- This version bundles all components (no tree-shaking) in order to avoid having to use `defineCustomElements` each time you want to use an astro component. Because of this, the bundle size is larger.

- CSS custom properties for our angular-wrapped components are undefined out of the box, thus the necessity for the CSS import.

#### Currently using @astrouxds/astro-web-components version 0.0.16
