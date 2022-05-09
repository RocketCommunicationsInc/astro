# Pop Up Menu

A Pop-Up Menu provides users with a quick way to access common actions for a highlighted item.

## Guidelines

-   [Astro UXDS: Pop Up Menu](http://www.astrouxds.com/library/pop-up-menu)

### 1. Installation

#### Install the Astro UXDS Pop Up Menu package via Command Line (Preferred Method)

```sh
npm i --save @astrouxds/rux-pop-up-menu
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro UXDS Component Library](https://github.com/RocketCommunicationsInc/astro-components/src/master/) source to your project.

Via CLI:

```sh
git clone https://github.com/RocketCommunicationsInc/astro-components.git
```

Or, [download the Astro UXDS Components as a .zip](https://github.com/RocketCommunicationsInc/astro-components/archive/master.zip)

### 2. Import the Astro Pop Up Menu Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxPopUpMenu } from '@astrouxds/rux-pop-up-menu/rux-pop-up-menu.js'
```

### 3. Render the Astro Pop Up Menu Web Component

Pass properties as attributes of the Astro Pop Up Menu custom element:

```xml
    <rux-pop-up-menu id="pop-up-menu">
        <rux-menu-item>Item 1</rux-menu-item>
        <rux-menu-item-divider></rux-menu-item-divider>
        <rux-menu-item value="2">Item 2</rux-menu-item>
        <rux-menu-item disabled>Item 3 is disabled</rux-menu-item>
        <rux-menu-item href="https://www.astrouxds.com">
            Item 4 is an anchor
        </rux-menu-item>
    </rux-pop-up-menu>
```

**Create a triggering element to initiate the pop up menu.**

Option 1: Use an aria-controls trigger element. For this option to work the trigger element _must_ have an `aria-controls` attribute with a value equal to the `id` of the `rux-pop-up-menu`.

```xml
<button
 aria-controls="pop-up-menu"
 aria-haspopup="true"
>
    Open pop up menu
</button>
```

Option 2: Pass a tigger and/or anchor element to the popup menu as props.

```xml
<script>
    const popUpMenu = document.getElementById('pop-up-menu')
    const buttonD = document.getElementById('button-D')
    const buttonA = document.getElementById('button-A')

    popUpMenu.triggerEl = buttonD
    popUpMenu.anchorEl = buttonA
</script>
```

Extending Astro Pop Up Menu with custom content. Content passed without a slot name will be added to the list. Any content added after the list needs a `slot="menu-end"` attribute added. Any custom content that is passed into Astro Pop Up Menu will not be styled and will require custom styling.

```xml
<rux-pop-up-menu id="popup-menu-7">
    <rux-menu-item>Item 1</rux-menu-item>
    <rux-menu-item-divider></rux-menu-item-divider>
    <rux-menu-item value="2">Item 2</rux-menu-item>
    <div slot="menu-end">
        <a href="/sign-up">Sign Up</a>
        <rux-button @click="${login()}">Login</rux-button>
    </div>
</rux-pop-up-menu>
```

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute | Description                                                                                                                                   | Type                       | Default     |
| ----------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------- |
| `anchorEl`  | --        | Element to anchor the menu to. If none is given the menu will anchor to the trigger element where aria-controls === menu id                   | `HTMLElement \| undefined` | `undefined` |
| `open`      | `open`    | Boolean which controls when to show the menu                                                                                                  | `boolean`                  | `false`     |
| `triggerEl` | --        | Optional element to trigger opening and closing of the menu. If none is supplied the element where aria-controls === menu id will be assigned | `HTMLElement \| undefined` | `undefined` |


## Events

| Event              | Description                             | Type                |
| ------------------ | --------------------------------------- | ------------------- |
| `ruxmenudidclose`  | Emitted when the menu is closed.        | `CustomEvent<void>` |
| `ruxmenudidopen`   | Emitted when the menu is open.          | `CustomEvent<void>` |
| `ruxmenuwillclose` | Emitted when the menu is about to close | `CustomEvent<void>` |
| `ruxmenuwillopen`  | Emitted when the menu is about to open. | `CustomEvent<void>` |


## Methods

### `close() => Promise<boolean>`

Closes the menu. If the menu is already closed it returns 'false'.

#### Returns

Type: `Promise<boolean>`



### `isOpen() => Promise<boolean>`

Returns 'true' if the menu is open, 'false' if it is not.

#### Returns

Type: `Promise<boolean>`



### `show() => Promise<boolean>`

Opens the menu. If the menu is already open it returns 'false'.

#### Returns

Type: `Promise<boolean>`



### `toggle() => Promise<boolean>`

Toggles the menu open or close. Will return 'true' on menu open and 'false' on menu close

#### Returns

Type: `Promise<boolean>`




## Slots

| Slot         | Description                                                                                        |
| ------------ | -------------------------------------------------------------------------------------------------- |
| `"menu-end"` | Area below the menu list to insert elements. For example, confirmation and/or cancel button group. |


## Shadow Parts

| Part          | Description                       |
| ------------- | --------------------------------- |
| `"container"` | the container for the pop-up-menu |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
