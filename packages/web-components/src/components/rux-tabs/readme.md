# Tabs

Tabs are used to divide major areas of content and to indicate work process.

## Guidelines

-   [Astro UXDS: Tabs](https://www.astrouxds.com/ui-components/tabs)

## Web Components Usage

### 1. Installation

#### Install the Astro UXDS Tabs package via Command Line (Preferred Method)

```sh
npm i --save @astrouxds/rux-tabs
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro UXDS Component Library](https://github.com/RocketCommunicationsInc/astro-components) source to your project.

Via CLI:

```sh
git clone https://github.com/RocketCommunicationsInc/astro-components.git
```

Or, [download the Astro UXDS Components as a .zip](https://github.com/RocketCommunicationsInc/astro-components/archive/master.zip)

### 2. Import the Astro Tabs Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxTabs } from '@astrouxds/rux-tabs/rux-tabs.js'
```

### 3. Render the Astro Tabs Web Component

The Astro UXDS Tabs pattern makes use of four Web Components via [slots](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot):

1. **Tabs:** Container for the tab bar, handles tabs logic and state
2. **Tab:** Individual tab title element
3. **Panels:** Container for the tab content panels
4. **Panel:** Individual tab content element

Note that you only need to import the first component (Astro UXDS Tabs) in your application. The other three are automatically imported by the Astro UXDS Tabs component.

The Astro UXDS Tabs pattern is configured using properties passed into the custom elements via attributes at either the top level or at the child level. Make sure that you set a unique `id` for `<rux-tabs>` and each of its children `<rux-tab>`, and associate each with corresponding `aria-labelledby` attributes ([W3C spec](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-labelledby)), as indicated below:

```xml
<rux-tabs id="tab-set-id-1">
  <rux-tab id="tab-id-1">Tab 1 title</rux-tab>
  <rux-tab id="tab-id-2">Tab 2 title</rux-tab>
  <rux-tab id="tab-id-3">Tab 3 title</rux-tab>
</rux-tabs>

<rux-tab-panels aria-labelledby="tab-set-id-1">
  <rux-tab-panel aria-labelledby="tab-id-1">Tab 1 HTML content</rux-tab-panel>
  <rux-tab-panel aria-labelledby="tab-id-2">Tab 2 HTML content</rux-tab-panel>
  <rux-tab-panel aria-labelledby="tab-id-3">Tab 3 HTML content</rux-tab-panel>
</rux-tab-panels>
```

The `small` property may be passed as a simple attribute on the Astro UXDS Tabs container element:

```xml
<rux-tabs small id="tab-set-id-1">
  ...
</rux-tabs>
...
```

Astro UXDS Tab (child) properties are passed as simple attributes on the individual tabs themselves.

```xml
<rux-tabs id="tab-set-id-1">
  <rux-tab id="tab-id-1">Tab 1 title</rux-tab>
  <rux-tab id="tab-id-2" selected>Tab 2 title</rux-tab>
  <rux-tab id="tab-id-3" disabled>Tab 3 title</rux-tab>
</rux-tabs>
...
```

### Tabs Container Attributes

| Attribute | Type    | Default | Required | Description                                                                                                                                                                                  |
| --------- | ------- | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`      | String  | —       | Yes      | Associates this tab container with a Tabs Panel container element. Must match the `aria-labelledby` attribute on a `<rux-tabs-panels>` container element elsewhere within the HTML document. |
| `small`   | Boolean | `false` | No       | If passed or set to true, displays the tabs in a smaller style, suitable for limited-space uses. Previously `compact`.                                                                       |

### Tab Child Attributes

| Attribute  | Type    | Default | Required | Description                                                                                                                                                                                                                    |
| ---------- | ------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`       | String  | —       | Yes      | Associates this tab with the tab content in a Tab Panel content element. Must match the `aria-labelledby` attribute on a `<rux-tabs-panel>` element elsewhere within the HTML document, within a `<rux-tab-panels>` container. |
| `selected` | Boolean | `false` | No       | If present, overrides which tab is selected on load / mount. By default, the first `<rux-tab>` item is selected.                                                                                                               |
| `disabled` | Boolean | `false` | No       | If present, sets a disabled state on this tab item, indicating it cannot be selected by user action.                                                                                                                           |

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                                                      | Type                   | Default     |
| -------- | --------- | ------------------------------------------------------------------------------------------------ | ---------------------- | ----------- |
| `small`  | `small`   | If passed or set to true, displays the tabs in a smaller style, suitable for limited-space uses. | `boolean \| undefined` | `undefined` |


## Events

| Event         | Description                                                       | Type               |
| ------------- | ----------------------------------------------------------------- | ------------------ |
| `ruxselected` | Fires whenever a new tab is selected, and emits the selected tab. | `CustomEvent<any>` |


## Slots

| Slot          | Description                   |
| ------------- | ----------------------------- |
| `"(default)"` | Used for instances of rux-tab |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
