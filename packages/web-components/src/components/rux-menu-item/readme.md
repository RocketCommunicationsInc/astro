# Menu Item

A Menu Item component for use in all menus such as Pop-up, Select, and Multi-Select.

## Guidelines

-   [Astro UXDS: Pop Up Menu](https://www.astrouxds.com/components/pop-up/)
-   [Astro UXDS: Select Menu](https://www.astrouxds.com/components/select/)

### 1. Installation

#### Install the Astro UXDS Menu Item package via Command Line (Preferred Method)

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

### 2. Import the Astro Menu Item Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxMenuItem } from '@astrouxds/rux-menu-item/rux-menu-item.js'
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


## Properties

| Property   | Attribute  | Description                                                                                                                                                                                                                                                                               | Type                  | Default     |
| ---------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `disabled` | `disabled` | Disables the item                                                                                                                                                                                                                                                                         | `boolean`             | `false`     |
| `download` | `download` | This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want). | `string \| undefined` | `undefined` |
| `href`     | `href`     | Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.                                                                                                                                                                   | `string \| undefined` | `undefined` |
| `rel`      | `rel`      | Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).                                                                                                    | `string \| undefined` | `undefined` |
| `target`   | `target`   | Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.                                                                                                                                       | `string \| undefined` | `undefined` |
| `value`    | `value`    | Value returned when item is selected. If no value is given, the text content will be used.                                                                                                                                                                                                | `any`                 | `undefined` |


## Events

| Event                 | Description                                     | Type                  |
| --------------------- | ----------------------------------------------- | --------------------- |
| `ruxmenuitemselected` | Emitted when item is clicked. Ex `{value : 10}` | `CustomEvent<object>` |


## Slots

| Slot      | Description                                   |
| --------- | --------------------------------------------- |
| `"start"` | before element text. Typically used for icons |


## Shadow Parts

| Part          | Description                        |
| ------------- | ---------------------------------- |
| `"container"` | the container of the rux-menu-item |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
