# Astro Web Components

> ⚠️ This repo is currently in alpha and under active development. Expect APIs to change ⚠️

**Documentation & Installation Instructions:** https://astro-stencil.netlify.app/

Check the [CHANGELOG](./CHANGELOG.md) for breaking changes.


## Quick Start

To get up and running quickly, Astro web components are available via a CDN. Add the following to your `<head>`

```html
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400&family=Roboto:wght@200;300;400;500;600;800&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="https://unpkg.com/@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css"/>
<script type="module" src="https://unpkg.com/@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.esm.js"></script>
```

Astro components are now available anywhere in your app.

```html
<body>
    <rux-button>Hello World</rux-button>
</body>
```

