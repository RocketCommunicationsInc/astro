# Installation

## Quick Start

To get up and running quickly, Astro web components are available via a CDN. Add the following to your `<head>`

```html
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
    rel="stylesheet"
/>
<link
    rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css"
   
/>
<script
    type="module"
    src="https://cdn.jsdelivr.net/npm/@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.esm.js"
></script>
```

Astro components are now available anywhere in your app.

```html
<body>
    <rux-button>Hello World</rux-button>
</body>
```

### Integrations

1. Install
   `npm i @astrouxds/astro-web-components`

2. Import Astro's Fonts

```html
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
    rel="stylesheet"
/>
```

[Roboto](https://fonts.google.com/specimen/Roboto) is used for the font.
We recommend using Google's CDN; however, you can also pull down and serve your own copy of the font.

3. Bootstrap Your Application

#### Static HTML (w/ ESM Modules)

```html
// Import Astro's base styles
<link
    rel="stylesheet"
    href="/node_modules/@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css"
/>
<script type="module">
    import { defineCustomElements } from '/node_modules/astro-web-components/loader'
    defineCustomElements()
</script>
```

#### Generic Framework

```js
// Import Astro's base styles
import 'astro-web-components/dist/astro-web-components/astro-web-components.css'
import {
    applyPolyfills,
    defineCustomElements,
} from 'astro-web-components/loader'

applyPolyfills().then(() => {
    defineCustomElements()
})
```

#### Vue

```js
import Vue from 'vue'
import App from './App.vue'

// Import Astro's base styles
import '@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css'
import {
    applyPolyfills,
    defineCustomElements,
} from '@astrouxds/astro-web-components/loader'

Vue.config.productionTip = false

// Tell Vue to ignore all components defined in the astro-web-components package
Vue.config.ignoredElements = [/rux-\w*/]

// Bind the custom elements to the window object
applyPolyfills().then(() => {
    defineCustomElements()
})

new Vue({
    render: (h) => h(App),
}).$mount('#app')
```

#### Angular

1. Include the `AstroComponentsModule` in any module that uses an Astro component.

```js
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { AstroComponentsModule } from '@astrouxds/angular'

import { AppComponent } from './app.component'

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule, AstroComponentsModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
```

Or, Define your Custom Elements in main.ts

```js
import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module'
import { environment } from './environments/environment'

// Note: loader import location set using "esmLoaderPath" within the output target config
import { defineCustomElements } from '@astrouxds/astro-web-components/loader'

if (environment.production) {
    enableProdMode()
}

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.log(err))
defineCustomElements()
```

3. Setting dynamic data in for loop

```xml
<rux-classification-marking *ngFor="let type of types" [attr.classification]="type"></rux-classification-marking>
```

#### React

```js
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import {
    applyPolyfills,
    defineCustomElements,
} from '@astrouxds/astro-web-components/loader'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

applyPolyfills().then(() => {
    defineCustomElements()
})
```

### Tree Shaking + Bundlers

Astro ships with a convenient lazy-loader, but if you'd rather more control over your build process and are using an existing bundler
that supports tree shaking, you can also cherry-pick only the components you actually use. For example:

```js
import { RuxClock } from '@astrouxds/astro-web-components/dist/components/rux-clock.js'
customElements.define('rux-clock', RuxClock)
```

NOTE: You will need to manually call `customElements.define` for every component you wish to use and their dependencies.
Refer to each component's documentation to see their dependencies at a glance.
