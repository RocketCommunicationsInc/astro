# rux-global-status-bar

# Global Status Bar

The Global Status Bar is a full width view across the top of an application — an area commonly reserved for global status, global command and top-level navigation. The Global Status Bar often includes: Application Name, Applicatoin State, Monitoring Icons, Top Level Navigation and an Emergency Button.

## Guidelines

-   [Astro UXDS: Global Status Bar](https://astrouxds.com/ui-components/global-status-bar)

## Web Components Usage

### 1. Installation

#### Install the Astro UXDS Global Status Bar package via Command Line (Preferred Method)

```sh
npm i -save @astrouxds/rux-global-status-bar
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro UXDS Component Library](https://github.com/RocketCommunicationsInc/astro-components/src/master/) source to your project.

Via CLI:

```sh
git clone https://github.com/RocketCommunicationsInc/astro-components.git
```

Or, [download the Astro UXDS Components as a .zip](https://github.com/RocketCommunicationsInc/astro-components/archive/master.zip)

### 2. Import the Astro Global Status Bar Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxGlobalStatusBar } from '@astrouxds/rux-global-status-bar/rux-global-status-bar.js'
```

### 3. Render the Astro Global Status Bar Web Component

Pass properties as attributes of the Astro Global Status custom element:

```xml
 <rux-global-status-bar appDomain="ABC" appName="Astro App" appVersion="3.0"></rux-global-status-bar>
```

#### Using Slots

The Global Status Bar component uses both nammed and unnamed slots. These slots correspond to the location the slotted element will appear within the Global Status Bar.

#### Named Slots

There are three three named slots in the Global Status Bar: left-side, app-meta, right-side. These can be used by declaring a slot attribute withthe corresponding value on the element you want to be placed in that slot.

-   left-side (`<div slot="left-side" />`): places the content with the left-side slot attribute on the far left of the global status bar. The default component in the left-side slot is a `<rux-icon icon="apps" size="small">` which can be replaced by declaring a left-side slot in your markup or the icon can be changed by declaring a new menu-icon attribute. If a menu-icon attribute value is provided that does not match a icon in the rux-icon libary then a console error will be displayed.
-   app-meta (`<div slot="app-meta" />`): places the content with the app-meta slot attribute just to the right of the left-side slot a common location for an application name and app state. This slot is in the middle of the Global Status Bar component however its margin pushes it to the left. The default elements in the app-meta slot are heading 1 elements showing the default values for the appDomain, appName, and appVersion properties. The app-meta slot also contains placeholder divs for an application state and user name component. These default elements can be replaced by declaring a app-meta slot in your markup or the default app-meta informataion can be changed by decalure attributes for app-domain, app-name, and app-version.
-   right-side (`<div slot="right-side" />`): places the content with the right-side slot attribute on the far right of the global status bar. This slot has no default elemetns and will only display if a child element with the right-side slot attribute is included in your markup.

#### Unnamed Slots

There is one unnnamed slot in the Global Status Bar. This slot is intended for any other elements or components you would like placed in the status bar seperate from common components such as a menu icon and application name. Any children eleemnts of the Global Status Bar that are not nammed slots will be considered slotted into this unnamed slot. Status bar elements like the [Clock](https://www.astrouxds.com/ui-components/clock), [Tabs](https://www.astrouxds.com/ui-components/tabs) and [Buttons](https://www.astrouxds.com/ui-components/buttons) and even plain HTML can be inserted into the body of the Global Status Bar using the component’s [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot).

```xml
 <rux-global-status-bar class="dark-theme" appname="Astro App" version="3.0">
    <!-- Default component for left-side slot rendered here-->
    <!-- Default component for app-meta slot rendered here-->
	 <rux-clock></rux-clock>
	 <div><!-- Any HTML here --></div>
	 <rux-button slot="right-side">Master off</rux-button>
 </rux-global-status-bar>
```

<!-- Auto Generated Below -->

## Properties

| Property  | Attribute | Description | Type     | Default     |
| --------- | --------- | ----------- | -------- | ----------- |
| `appname` | `appname` |             | `string` | `undefined` |
| `version` | `version` |             | `string` | `undefined` |

---

_Built with [StencilJS](https://stenciljs.com/)_
