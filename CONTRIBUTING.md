# Astro

Interested in contributing to Astro? We would love to have you. Here's everything you need to get started with your first contribution.

## Dev Environment Setup

**Requirements:** Node v16+

**M1 USERS ONLY:** Chromium needs to be installed manually

1. Install chromium with Homebrew

```bash
brew install chromium --no-quarantine
```

2. Modify your .zshrc file and add the following 2 lines of code at the bottom:

```bash
export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
export PUPPETEER_EXECUTABLE_PATH=`which chromium`
```

3. Restart your terminal and proceed to the next step.

Clone this repo and run

```bash
npm install
```

To get started working with web components:

```bash
npm run start
```

This will spin up a stencil dev server for rapid prototyping at [localhost:3333](http://localhost:3333) and a storybook dev server at [localhost:6006](http://localhost:6006)

## Project Structure

- `packages`
  - `ag-grid-theme` - An Astro theme for the [AG Grid](https://www.ag-grid.com/) grid library.
  - `angular` - Our sibling Angular wrapper library.
  - `astro-uxds` - Our design system documentation site, [astrouxds.com](https://astrouxds.com). Built with 11ty.
  - `react` - Our sibling React wrapper library
  - `starter-kits` - A collection of minimal starter kit environments for various frameworks.
  - **`web-components`** - The meat and potatoes. Our web component library.
    - `src`
      - `stories` - Our storybook stories.
      - `global`
        - `tokens` - This directory stores our design tokens. These files should never be edited manually and are instead automatically pulled from our [design token repository](https://github.com/RocketCommunicationsInc/astro-design-tokens).

## Tooling

- [Stencil](https://stenciljs.com/) is used to build our web components.
- [Lerna](https://github.com/lerna/lerna) is used to manage our monorepo.
- [Storybook](https://storybook.js.org/) is used for our [developer documentation](https://astro-components.netlify.app/).
- [Cypress](https://www.cypress.io/) is used for our E2E testing.
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) keep our git log nice and tidy.
- [Changesets](https://github.com/changesets/changesets) help us manage our releases.

## Branching

The `next` branch is used to stock up on breaking changes for the next upcoming major release. If your PR contains a breaking change, make sure to merge into `next` instead of `main`. For all other changes, use `main`.

## Framework Wrappers

The core of Astro is built using web components. Some frameworks still don't play nicely with web components (React) and the [DX is less than ideal](https://stenciljs.com/docs/framework-bindings). Our solution is to ship sibling libraries for React and Angular that consume our web components under the hood and offer a more native DX.

During the build stage, our web component library outputs metadata to these sibling libraries, which use that to autogenerate native React and Angular components.

## Generating New Components

`stencil generate`

Once your component has been created, rename the css file to .scss and update the path in your component.tsx file.

`npm run build`

All new components should have an associated Storybook story that displays any variants and events emitted. You can reference any of the existing storybook .mdx files if you're unfamiliar with Storybook.

## Testing

### E2E Tests

[Cypress.io](https://cypress.io/) is used for E2E testing. Single component E2E tests located in `src/component/tests/*.e2e.js`. Multi component tests are located in `src/tests/*.e2e.js`.

#### Writing an E2E Test

Each component has it's own isolated example index.html that can be used in E2E tests or debugging. These example files can be viewed in the browser at `http://localhost:3333/components/{component-name}/test` when running Stencil's dev server.

When creating a new component, make sure to create an example index.html under the `/src/components/{your-component}/tests` folder. Next, create an E2E test file in the same directory. In your test file, you can make use of the Cypress helper `visitComponent`:

```js
describe("My Test", () => {
  beforeEach(() => {
    cy.visitComponent("your-component");
  });
});
```

#### Running All Tests

`npm run test.e2e.run`

#### Running All Tests w/ Watch

> Make sure Stencil's dev server is running first - `npm run start.stencil`

`npm run test.e2e.watch` - Opens Cypress in watch mode.

## Submitting your first PR

Astro uses [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) for writing git messages.

Once you've finished your change, be sure to run `npm run test`.

If everything looks good, you'll then need to generate a changeset using `npx changeset add`. If your PR contains a breaking change, select major version and explain:

- **What?** What is the change.
- **Why?** Why are you making this change.
- **Migration** What do end developers need to do in order to migrate.

If your PR contains a minor, non-breaking change, select minor. If it contains a small bugfix, select patch.

You'll want to select all packages to version.

> NOTE: Not everything needs a changeset! Things like doc typos and build tooling don't need changesets.

## Icons

In order to ship the RuxIcon component with all SVG assets included, we create individual Icon components for every Astro icon. Due to the number of icons, it is not efficient to create these manually. Instead, we utilize Stencil's build process to automatically create Icon components for each available SVG icon. Then we automatically convert those assets to Base64 and inject them into their respective components. This is all done in relatively few lines of code. A `rux-icon` wrapper component is available to make to it easier to call these individual components.

### Fetching Icons From Figma

This repository is set up to automatically pull icons and images from our Figma design system library.

Create a new `icons-config.json` file. Enter your Figma Personal Access Token and Figma File Id.

`mv icons-config.json.example icons-config.json`

Pull the latest icons from Figma

`npm run icons.fetch`

### Generating Icons

`npm run icons.generate`

This command takes each .svg file in `src/icons` and creates Stencil components from them.

### Adding a new Icon or updating an existing Icon

The `src/icons` folder is the single source of truth for Astro icons. To add a new icon, simply add the SVG file to the directory and run `npm run build`. To update an icon, the process is the same--simply copy the new SVG to the `src/icons` folder and run the build step again.
