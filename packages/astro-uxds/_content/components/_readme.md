---
tags: resources
date: Last Modified
path: /components/readme
permalink: /components/readme/index.html
layout: interior.template.njk
title: Read Me
---

# README


## Getting Started with Astro Web Components

[Additional Documentation/Storybook](https://astro-components.netlify.app/?path=/story/astro-uxds-welcome-start-here--page)


### Why Web Components?

When the Astro predecessor SATCOM components were initially created, they were specific to the SATCOM domain. The scope of use has since expanded to include other domains in space, allowing us to create a more agnostic set of components for use across a wider spectrum of space systems.

While the initial components were purposefully created to be framework-agnostic, this limited the demonstrated experiences to pure HTML/CSS implementations. For today's space app needs, we want to provide more practical demonstrations which can be used across a wide variety of frameworks. WebComponents v1 provide us with an opportunity to deliver functional examples which can be incorporated in a variety of frameworks (Angular 2+, React, Ember) or simply used as a more relevant example of implementing Astro Guidelines in a modern framework.

**Benefits of Astro Web Components**

- Web Components provide style scope isolation; styles will exist as defined and cannot be overridden by other stylesheets
- Code is portable within self-contained HTML/CSS/JS
- Eliminates future CSS class name changes
- Code is generic; it follows a similar format to popular frameworks like Angular and React, without being prescriptive.
- All the major JS frameworks were built to reflect the ideas of WebComponents and/or influenced the Web Component v1 specification; Web Components are an accepted and respected pattern in the JS community
- Localized Web Component HTML and CSS minimizes or eliminates the need for complicated CSS naming structures e.g., `.rux-button--small__light`
- Web Components are a W3 standard, requiring no vendor lock-in or decisions about which frameworks to use. All modern browsers support Web Components. Microsoft has committed to supporting the standard in a future version of Edge. Note: IE11+ supports Web Components via polyfills.
