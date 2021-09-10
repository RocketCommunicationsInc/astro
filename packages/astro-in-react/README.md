# Installation

`npm i @astrouxds/react`

## Import and Usage

First, import the css into either your index.js, app.js, or any CSS file you would like.

`import '@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css'`

Next, Import any desired Astro components the same way you would any other React component.

`import { RuxProgress } from 'astro-in-react'`

You can now use astro-components as regular React components.

```
import React from 'react';

const MyComp = () => {
    return (
        <div>
            <RuxProgress />
        </div>
    )
}

export default MyComp;
```

## Astro Stencil Components Docs

Docs for all components can be found at our [Astro Stencil Storybook.](https://astro-stencil.netlify.app/)

### This repo is currently in devlopement.

This repo only has access to a limited number of Astro components translated to React components. This repo will be updated frequently with the [Astro components in Stencil repo](https://github.com/RocketCommunicationsInc/astro-components-stencil).

### Known Issues

- This version bundles all components (no tree-shaking) in order to avoid having to use `defineCustomElements` each time you want to use an astro component. Because of this, the bundle size is larger.
  We currently plan to ship two versions of this repo, one that includes tree-shaking at the cost of more imports, and this one that uses less imports at the cost of tree-shaking.
- CSS custom properties for our react-wrapped components are undefined out of the box, thus the necessity for the CSS import.
- Using event listeners currently uses onRux prefix, followed by a dash and the name. ie, onRux-change. Not ideal, we are looking into changing it.
- For using checkbox, push button, or switch onRux-change events, you need to check for the checked prop:
  ```
          <RuxSwitch
        value="switch"
        onRux-change={(e: React.ChangeEvent<HTMLRuxSwitchElement>) =>
          setSwitchVal(e.target.checked ? e.target.value : "")
        }
      />
  ```

#### Currently using @astrouxds/astro-web-components version 0.0.11
