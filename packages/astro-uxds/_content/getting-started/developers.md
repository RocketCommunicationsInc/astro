---
path: /getting-started/developers
date: Last Modified
layout: interior.template.njk
title: "Getting Started for Developers"
---

# Getting Started for Developers

The Astro UXDS Web Component and CSS libraries provide a starting point to build in-browser space app experiences and custom applications following today’s web development best practices. The Astro UXDS Web Components are designed to be as platform and implementation-agnostic as possible, easy to implement or extend in existing projects, and generic by default. Each component, as well as the overall CSS library, is individually published and updated according to the standard Semantic Versioning pattern.

### Astro Components

In an effort to provide as close to native a development experience as possible, we’ve provided a set of [Stencil-powered](https://stenciljs.com) [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) distributed in individual packages on [npm.org](https://www.npmjs.com/package/@astrouxds/astro-web-components). You can also see the full source code here and instructions for importing the components in a typical NodeJS project [here](https://github.com/RocketCommunicationsInc/astro/blob/main/packages/web-components/README.md).

### Astro Icons, Fonts and Colors

We recognize that not all space application development projects are tooled for utilizing Web Components, you can download [Astro’s Dark theme](https://github.com/RocketCommunicationsInc/astro/blob/main/packages/web-components/src/global/_variables.scss) and [Light theme](https://github.com/RocketCommunicationsInc/astro/blob/main/packages/web-components/src/global/theme/_theme-light.scss) hex/rgb values. You may also view the specifications in the [Astro UXDS Figma file](https://www.figma.com/community/file/1014254163928270411). 

Icon assets are available as SVGs via the [Astro Icon Github Repository](https://github.com/RocketCommunicationsInc/astro/tree/main/packages/web-components/src/icons) or export to the format and size you need from the [Astro Icons Figma library](https://www.figma.com/community/file/1022883566772542677).

Astro uses the freely availabe [Roboto](https://fonts.google.com/specimen/Roboto) and [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono?query=roboto+mono).

For 
### Astro Storybook and Sample Apps

You can review the latest versions of the web components at the [Astro Storybook](https://astro-components.netlify.app/?path=/story/astro-uxds-welcome-start-here--page). The Astro development team uses Storybook as an environment for building and demonstrating the capabilities of each component. If your team often works offline, you may want to [download and run the Storybook](https://github.com/RocketCommunicationsInc/astro/tree/main/packages/web-components) on your local network to see how the examples work.

For online examples of full Astro app experiences, check out these EGS Service-Specific sample experiences:

| Ground Resources Management                                                                                                                               | Telemetry, Tracking, and Control                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| [Dashboard](/grm-service-ux-design/grm-dashboard/) - [Source code](https://bitbucket.org/rocketcom/grm-sample-apps-dashboard/src/master/)                 | [Monitor](/ttc-service-ux-design/ttc-monitor/) - [Source code](https://bitbucket.org/rocketcom/tt-c-monitor/src/master/)             |
| [Equipment Manager](/grm-service-ux-design/grm-equipment-manager/) - [Source code](https://bitbucket.org/rocketcom/grm-sample-apps-equipment/src/master/) | [Command](/ttc-service-ux-design/ttc-command/) - [Source code](https://bitbucket.org/rocketcom/tt-c-command/src/master/)             |
| [Schedule](/grm-service-ux-design/grm-schedule/) - [Source code](https://bitbucket.org/rocketcom/grm-sample-apps-schedule/src/master/)                    | [Investigate](/ttc-service-ux-design/ttc-investigate/) - [Source code](https://bitbucket.org/rocketcom/tt-c-investigate/src/master/) |

:::note
These examples use a previous release of Astro, and are not intended as boilerplates for building new applications. See below for easy ways to get started building Astro web applications.  
:::

### Astro for Material Design

We also have Material Design themes using Astro styling. These files include everything needed to build an Astro Application using both Astro Components and/or Material Design Components.

There are two ways to add Astro for Material Design CSS to your project:

- Via CDN - Simply add the one line of code to your HTML and get the newest version of Astro for Material Design.
  - Dark Theme (Default) <div class="code-block">`<link rel="stylesheet" href="https://gitcdn.link/repo/RocketCommunicationsInc/astro-material-themes/main/dark/dist/darkTheme.css" />`</div>
  - Light Theme <div class="code-block">`<link rel="stylesheet" href="https://min.gitcdn.link/repo/RocketCommunicationsInc/astro-material-themes/main/light/dist/lightTheme.css" />`</div>
- Download CSS Files Directly - Each can be found in our [downloads section](/downloads).

### EGS Compliance

The Astro team has worked with EGS to establish the EGS Compliance requirements for developers targeting the EGS Platform. These requirements are specific to EGS development; these requirements are based off of common best practices and accessibility guidance and it is highly recommended for all users to incorporate them into their applications.

### Offline Development Resources

This website and its contents are provided as separate downloadable files for the convenience of developers and designers working in closed environments. Designer and Developer assets are provided as downloads on their respective ‘Getting Started’ sections:

[Gzip Archive of Astro](git@github.com:RocketCommunicationsInc/astro.git)

### Reporting Bugs

If you’ve found a possible bug in Astro documentation or code, open a [support ticket](https://github.com/RocketCommunicationsInc/astro/issues) to let us know.

### Support

Each page on astrouxds.com has a support button at the bottom of the page for technical support.
