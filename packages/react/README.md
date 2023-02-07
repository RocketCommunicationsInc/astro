# Installation

`npm i @astrouxds/react`

## Import and Usage

First, import the css into either your index.js, app.js, or any CSS file you would like.

`import '@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css'`

Next, Import any desired Astro components the same way you would any other React component.

`import { RuxProgress } from '@astrouxds/react`

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

Docs for all components can be found at our [Astro Stencil Storybook,](https://astro-stencil.netlify.app/) and in our [web-components package]('../packages/web-components/README.md)

### Known Issues

- CSS custom properties for our react-wrapped components are undefined out of the box, thus the necessity for the CSS import.
- For using checkbox, push button, or switch onRuxchange events, you need to check for the checked prop:
  ```
          <RuxSwitch
        value="switch"
        onRuxchange={(e: React.ChangeEvent<HTMLRuxSwitchElement>) =>
          setSwitchVal(e.target.checked ? e.target.value : "")
        }
      />
  ```