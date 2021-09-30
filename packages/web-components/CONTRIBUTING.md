# Astro Web Components

## Installation

`npm install`

## Project build commands

`npm run start` - Starts both Stencil and Storybook for development

`npm run build` - Builds Storybook static site for production in /storybook-static folder

## RuxIcon

In order to ship the RuxIcon component with all SVG assets included, we create individual Icon components for every Astro icon. Due to the number of icons, it is not efficient to create these manually. Instead, we utilize Stencil's build process to automatically create Icon components for each available SVG icon. Then we automatically convert those assets to Base64 and inject them into their respective components. This is all done in relatively few lines of code. A `rux-icon` wrapper component is available to make to it easier to call these individual components.

### Fetching Icons From Figma

Create a new `icons-config.json` file. Enter your Figma Personal Access Token and Figma File Id.

`mv icons-config.json.example icons-config.json`

Pull the latest icons from Figma

`npm run icons.fetch`

### Generating Icons

`npm run icons.generate`

This command takes each .svg file in `src/icons` and creates Stencil components from them.

### Adding a new Icon or updating an existing Icon

The `src/icons` folder is the single source of truth for Astro icons. To add a new icon, simply add the SVG file to the directory and run `npm run build`. To update an icon, the process is the same--simply copy the new SVG to the `src/icons` folder and run the build step again.

## Generating New Components

`stencil generate`

Once your component has been created, rename the css file to .scss and update the path in your component.tsx file.

`npm run build`

## Testing

### E2E Tests

[Cypress.io](https://cypress.io/) is used for E2E testing. Single component E2E tests located in `src/component/tests/*.e2e.js`. Multi component tests are located in `src/tests/*.e2e.js`.

#### Writing an E2E Test

Each component has it's own isolated example index.html that can be used in E2E tests or debugging. These example files can be viewed in the browser at `http://localhost:3333/components/{component-name}/test` when running Stencil's dev server.

When creating a new component, make sure to create an example index.html under the `/src/components/{your-component}/tests` folder. Next, create an E2E test file in the same directory. In your test file, you can make use of the Cypress helper `visitComponent`:

```js
describe('My Test', () => {
    beforeEach(() => {
        cy.visitComponent('your-component')
    })
})
```

#### Running All Tests

`npm run test.e2e.run`

#### Running All Tests w/ Watch

> Make sure Stencil's dev server is running first - `npm run start.stencil`

`npm run test.e2e.watch` - Spins up stencil's dev server, a storybook server, and opens Cypress.
