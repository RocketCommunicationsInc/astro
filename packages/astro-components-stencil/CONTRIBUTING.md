# Astro Web Components

## Installation

`npm install`

## Project build commands

`npm run astro` - Starts both Stencil and Storybook for development

`npm run build-astro-prod` - Builds Storybook static site for production in /storybook-static folder

## RuxIcon

In order to ship the RuxIcon component with all SVG assets included, we create individual Icon components for every Astro icon. Due to the number of icons, it is not efficient to create these manually. Instead, we utilize Stencil's build process to automatically create Icon components for each available SVG icon. Then we automatically convert those assets to Base64 and inject them into their respective components. This is all done in relatively few lines of code. A `rux-icon` wrapper component is available to make to it easier to call these individual components.

### Generating Icons

`npm run generate:icons`

This command takes each .svg file in `src/icons` and creates Stencil components from them.

### Adding a new Icon or updating an existing Icon

The `src/icons` folder is the single source of truth for Astro icons. To add a new icon, simply add the SVG file to the directory and run `npm run build`. To update an icon, the process is the same--simply copy the new SVG to the `src/icons` folder and run the build step again.

## Generating New Components

`stencil generate`

Once your component has been created, rename the css file to .scss and update the path in your component.tsx file.

`npm run build`

## Testing

### E2E Tests

[Cypress.io](https://cypress.io/) is used for E2E testing. E2E tests located in `src/component/tests/*.e2e.js`

#### Writing Test

Use the helper method `cy.visitStory()` to load your component's story. You only need to pass in the storybook id. For example: `http://localhost:6060/iframe.html?id=components-button--default-story&args=&viewMode=story` -> `cy.visitStory('components-button--default-story')`

#### Running All Tests

`npm run cy.test` - Spins up a Storybook server and runs Cypress against that.

#### Running All Tests w/ Watch

`npm run cy.test.watch` - Spins up stencil's dev server, a storybook server, and opens Cypress.
