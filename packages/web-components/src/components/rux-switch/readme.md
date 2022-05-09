# Switch

A Switch toggles between two mutually exclusive states such as "On" or "Off." Unlike a checkbox, a switch initiates an action with immediate effect without requiring a "Save" or "Submit" action.

## Guidelines

-   [Astro UXDS: Switch](http://www.astrouxds.com/ui-components/switch)

## Web Components Usage

### 1. Installation

#### ** Install the Astro UXDS Switch package via Command Line** (Preferred Method)

```sh
npm i --save @astrouxds/rux-switch
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro UXDS Component Library](https://bitbucket.org/rocketcom/astro-components) source to your project.

Via CLI:

```sh
git clone https://bitbucket.org/rocketcom/astro-components.git
```

Or, [download the Astro UXDS Components as a .zip](https://bitbucket.org/rocketcom/astro-components/get/master.zip)

### 2. Import the Astro Switch Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxSwitch } from '@astro-components/rux-switch/rux-switch.js'
```

### 3. Render the Astro Switch Web Component

Pass properties as attributes of the Astro Switch custom element:

```xml
<rux-switch disabled="false" checked="false"></rux-switch>
```

### 4. Listening for Events

In order to get the correct value of rux-switch's `checked` attribute, use the event listener `ruxchange`. 
### Properties

| Property   | Type    | Default | Required | Description                                                                                                                                                                                 |
| ---------- | ------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disabled` | Boolean | `false` | No       | Disables the button via HTML `disabled` attribute. Button takes on a distinct visual state. Cursor uses the `not-allowed` system replacement and all keyboard and mouse events are ignored. |
| `checked`  | Boolean | `false` | No       | Checks the button via HTML `checked` attribute. Button takes on a distinct "enabled" or "selected" visual state.                                                                            |

---

## Basic HTML Usage

### 1. Include the Astro UXDS CSS file

Latest release is available in [Astro UXDS Styles repo](https://bitbucket.org/rocketcom/astro-styles/src/master/).

```xml
<link rel="stylesheet" href="/your-project/path/astro.css" />
```

### 2. Markup the component using HTML and the Astro CSS classes

Astro CSS classes follow the [BEM-style](http://getbem.com/introduction/) naming convention.

Configure the component using native HTML attributes.

```xml
 <div class="rux-switch">
    <input class="rux-switch__input" disabled id="switch1" type="checkbox">
    <label class="rux-switch__button" for="switch1"></label>
</div>
```

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                                                             | Type                  | Default     |
| ---------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `checked`  | `checked`  | Toggles checked state of a switch                                                                                                                                                       | `boolean`             | `false`     |
| `disabled` | `disabled` | Disables the switch via HTML disabled attribute. Switch takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored. | `boolean`             | `false`     |
| `label`    | `label`    | The switch label. For HTML content, use the `label` slot instead.                                                                                                                       | `string \| undefined` | `undefined` |
| `name`     | `name`     | The switch name                                                                                                                                                                         | `string`              | `''`        |
| `value`    | `value`    | The switch value                                                                                                                                                                        | `string`              | `''`        |


## Events

| Event       | Description                                                                                                                                                                    | Type               |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| `ruxblur`   | Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)                                           | `CustomEvent<any>` |
| `ruxchange` | Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)                                | `CustomEvent<any>` |
| `ruxinput`  | Fired when an alteration to the input's value is committed by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) | `CustomEvent<any>` |


## Slots

| Slot      | Description      |
| --------- | ---------------- |
| `"label"` | The switch label |


## Shadow Parts

| Part       | Description                                                 |
| ---------- | ----------------------------------------------------------- |
| `"label"`  | the label of switch                                         |
| `"switch"` | the track (::before) and the button (::after) on rux-switch |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
