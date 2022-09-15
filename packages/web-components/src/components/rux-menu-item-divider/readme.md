# Menu Item Divider

A Menu Item divider component for use in dividing items in Pop-up, Select, and Multi-Select menus.

## Guidelines

-   [Astro UXDS: Pop Up Menu](https://www.astrouxds.com/components/pop-up/)
-   [Astro UXDS: Select Menu](https://www.astrouxds.com/components/select/)

### 1. Installation

#### Install the Astro UXDS Menu Item package via Command Line (Preferred Method)

```sh
npm i --save @astrouxds/rux-menu-item-divider
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro UXDS Component Library](https://github.com/RocketCommunicationsInc/astro-components/src/master/) source to your project.

Via CLI:

```sh
git clone https://github.com/RocketCommunicationsInc/astro-components.git
```

Or, [download the Astro UXDS Components as a .zip](https://github.com/RocketCommunicationsInc/astro-components/archive/master.zip)

### 2. Import the Astro Menu Item Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxMenuItemDivider } from '@astrouxds/rux-menu-item-divider/rux-menu-item-divider.js'
```

### 3. Render the Astro Menu Item Web Component

Pass properties as slotted components in the Astro Pop Up Menu or Astro Select Menu custom element:

```xml
    <rux-pop-up-menu id="pop-up-menu" open>
        <rux-menu-item>Item 1</rux-menu-item>
        <rux-menu-item-divider></rux-menu-item-divider>
        <rux-menu-item value="2">Item 2</rux-menu-item>
        <rux-menu-item disabled>Item 3 is disabled</rux-menu-item>
        <rux-menu-item href="https://www.astrouxds.com">
            Item 4 is an anchor
        </rux-menu-item>
    </rux-pop-up-menu>
```

<!-- Auto Generated Below -->


## Shadow Parts

| Part          | Description                                |
| ------------- | ------------------------------------------ |
| `"container"` | the container of the rux-menu-item-divider |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
