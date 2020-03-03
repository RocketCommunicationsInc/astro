---
tags: resources
date: Last Modified
path: /components/readme
permalink: /components/readme/index.html
layout: interior.template.njk
title: Read Me
---

# README

ASTRO UX Guidelines include a CSS library of standard HTML elements for building Astro Applications. No specific JavaScript library is recommended for adding functionality to these components.

There are two ways to use the Astro elements in your applications. You may simply download and refer to the compiled CSS and images in your app using the HTML and classes provided, or you may clone and serve the Astro Web Components library for development within a NodeJS project.

## Getting Started with HTML & CSS

[Additional Documentation/Git Repository](https://bitbucket.org/rocketcom/astro-styles/src/master/)

Download and unzip the [Astro UI](https://bitbucket.org/rocketcom/astro-styles/get/master.zip) Library and copy the ASTRO.css file and img directory to your project folder. In the head of all .html documents, add a link element with an href attribute to the relative location of astro.css or astro.min.css. Copy the /icons and /fonts directory to the root of your project. Note: astro.css and astro.min.css assume they are located in a sibling directory to /icons and /fonts.

Example:

```html
<link rel="stylesheet" href="/your-project/path/astro.css" />
```

::: caution
CAUTION!: astro.css is a simple CSS stylesheet, it can easily be broken or distorted if it is loaded out of order or if a reset stylesheet is used.
:::

### Why Web Components?

When the Astro predecessor SATCOM components were initially created, they were specific to the SATCOM domain. The scope of use has since expanded to include other domains in space, allowing us to create a more agnostic set of components for use across a wider spectrum of space systems.

While the initial components were purposefully created to be framework-agnostic, this limited the demonstrated experiences to pure HTML/CSS implementations. For today's space app needs, we want to provide more practical demonstrations which can be used across a wide variety of frameworks. WebComponents v1 provide us with an opportunity to deliver functional examples which can be incorporated in a variety of frameworks (Angular 2+, React, Ember) or simply used as a more relevant example of implementing Astro Guidelines in a modern framework.

**Benefits of Astro Web Components**

- Web Components provide style scope isolation; styles will exist as defined and cannot be overridden by other stylesheets
- Code is portable within self-contained HTML/CSS/JS
- Eliminates future CSS class name changes
- Code is â€œgenericâ€; it follows a similar format to popular frameworks like Angular and React, without being prescriptive.
- All the major JS frameworks were built to reflect the ideas of WebComponents and/or influenced the Web Component v1 specification; Web Components are an accepted and respected pattern in the JS community
- Localized Web Component HTML and CSS minimizes or eliminates the need for complicated CSS naming structures e.g., .rux-buttonâ€”small\_\_light
- Web Components are a W3 standard, requiring no vendor lock-in or decisions about which frameworks to use. Chrome, Firefox, and Safari support Web Components v1 without the need for polyfills. Microsoft has committed to supporting the standard in a future version of Edge. Note: IE11+ supports Web Components via polyfills.
