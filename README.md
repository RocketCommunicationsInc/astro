# Astro

Astro is an open source Web Components and design library.
Astro Web Components use [`Stencil`](https://stenciljs.com) in order to provide fast and easy integration no matter the framework.

The Astro AG-Grid theme has moved to [it's own repo](https://github.com/RocketCommunicationsInc/ag-grid-theme). The npm package remains the same, [@astrouxds/ag-grid-theme](https://www.npmjs.com/package/@astrouxds/ag-grid-theme).


## Documentation

**Current documentation**: [astro-components.netlify.app](https://astro-components.netlify.app/)
Beta documentation: [beta-astro-components.netlify.app](https://beta-astro-components.netlify.app/)

### Packages

| Project                  | Description                                                                                                                                |                                                      Links                                                       |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------: |
| **AstroUXDS**            | The Astro UXDS site for design and developer guidelines.                                                                                   |                                     [`astrouxds.com`](https://astrouxds.com)                                     |
| **Astro Web Components** | [`@astrouxds/astro-web-components`](https://www.npmjs.com/package/@astrouxds/astro-web-components) - Astro Web Components built in Stencil |       [`README.md`](packages/web-components/README.md), [`Storybook`](https://astro-stencil.netlify.app/)        |
| **React**                | [`@astrouxds/react`](https://www.npmjs.com/package/@astrouxds/react) - Astro Web Components wrapped for React use                          |                                     [`README.md`](packages/react/README.md)                                      |
|**Angular** | [`@astrouxds/angular`](https://www.npmjs.com/package/@astrouxds/angular) - Astro Web Components wrapped for Angular use | [`README.md`](packages/angular/README.md) 
| **Starter Kits**         | Starter kits for getting Astro web-components running in React, Svelte, Vue, Angular and HTML/JS                                                | [React](packages/starter-kits/react-starter/README.md), [Svelte](packages/starter-kits/svelte-starter/README.md), [Vue](packages/starter-kits/vue3-starter), [Angular](packages/starter-kits/angular-starter/README.md), [HTML/JS](packages/starter-kits/html-js-starter) |

## Release Notes

:tada: _NEW_

- Can be used without NPM dependencies
- [Form elements as Web Components](https://astro-stencil.netlify.app/?path=/story/astro-uxds-patterns-forms-html--page)
- Form patterns/guidance for HTML, React, Vue, Angular and Svelte
- Unit and Integration tests
- Visual regression tests
- TypeScript support
- Single package import with tree shaking
- Integrations with Libraries/Frameworks
  - [Angular Wrapper](https://astro-stencil.netlify.app/?path=/docs/astro-uxds-welcome-angular--page)
  - [React Wrapper](https://astro-stencil.netlify.app/?path=/story/astro-uxds-welcome-react--page)
  - [Vue 3](https://astro-stencil.netlify.app/?path=/story/astro-uxds-welcome-vue-3--page)
  - [Svelte](https://astro-stencil.netlify.app/?path=/story/astro-uxds-welcome-svelte--page)
- Starter kits
  - [Angular](https://github.com/RocketCommunicationsInc/astro/tree/main/packages/starter-kits/angular-starter)
  - [HTML/JS](https://github.com/RocketCommunicationsInc/astro/tree/main/packages/starter-kits/html-js-starter)
  - [Svelte](https://github.com/RocketCommunicationsInc/astro/blob/main/packages/starter-kits/svelte-starter)
  - [Vue 2](https://github.com/RocketCommunicationsInc/astro/blob/main/packages/starter-kits/vue2-starter)
  - [Vue 3](https://github.com/RocketCommunicationsInc/astro/blob/main/packages/starter-kits/vue3-starter)

:pencil: _IMPROVED_

- [Storybook documentation](https://astro-stencil.netlify.app/?path=/story/astro-uxds-welcome-start-here--page)
- CSS Custom Property documentation for developer overrides
- Framework integrations
  - [HTML/JavaScript](https://astro-stencil.netlify.app/?path=/story/astro-uxds-welcome-javascript--page)
  - [React](https://astro-stencil.netlify.app/?path=/story/astro-uxds-welcome-react--page)
  - [Vue2](https://astro-stencil.netlify.app/?path=/story/astro-uxds-welcome-vue-2--page)
- Starter kits
  - [React](https://github.com/RocketCommunicationsInc/astro/blob/main/packages/starter-kits/react-starter/README.md)
    ​

:warning: Deprecation notification
The existing Lit/CSS libraries are moving to maintenance mode and only receive bug fixes starting January 1, 2022. We encourage all new projects to start with the new Stencil based components https://github.com/RocketCommunicationsInc/astro/tree/main/packages/web-components(https://github.com/RocketCommunicationsInc/astro/tree/main/packages/web-components)
