# Status

The Status Symbol combines color and shape to create a standard and consistent way to indicate the status of a device or feature.

## Guidelines

- [Astro UXDS: Status Symbols](http://www.astrouxds.com/ui-components/status-symbol)

## Web Components Usage

### 1. Installation

#### Install the Astro UXDS Status package via Command Line (Preferred Method)

```sh
npm i --save @astrouxds/rux-status
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro UXDS Component Library](https://github.com/RocketCommunicationsInc/astro-components/src/master/) source to your project.

Via CLI:

```sh
git clone https://github.com/RocketCommunicationsInc/astro-components.git
```

Or, [download the Astro UXDS Components as a .zip](https://github.com/RocketCommunicationsInc/astro-components/archive/master.zip)

### 2. Import the Astro Status Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxStatus } from '@astrouxds/rux-status/rux-status.js';
```

### 3. Render the Astro Status Web Component

Pass properties as attributes of the Astro Status custom element:

```xml
<rux-status status="critical"></rux-status>
```

### Properties

| Property | Type   | Default | Required | Description                                                                                               |
| -------- | ------ | ------- | -------- | --------------------------------------------------------------------------------------------------------- |
| `status` | String | `''`    | Yes      | Sets the status symbol, valid options are `critical`, `serious`, `caution`, `normal`, `standby` and `off` |

---

## Revision History

##### **4.0**

- Replaced SVG status elements with PNG sprite for improved performance
- Moved Advanced Status to its own component, Astro UXDS Monitoring Icon (see [Astro 4 migration note](#astro-4-migration) below)
- Removed `satcom_` prefix from HTML/CSS versions
- Removed `::after` psuedo class in HTML/CSS version in favor of simpler background image
- Removed undocumented small status variant
- Replaced [Polymer 3](https://www.polymer-project.org) implementation with [LitElement](https://lit-element.polymer-project.org/) for improved speed and interoperability with JS Frameworks as well as simpler template declaration now available in vanilla JavaScript.

##### **3.0**

- Removed Master Off Button Style
- Replaced various properties with css custom properties to support
- Removed `.satcom` class definition
- Removed `narrow`/`short` definitions

##### **1.4**

- Added `rux_` prefixes and BEM-compatible classes to all `satcom_`-prefixed elements. NOTE: `satcom_` will be removed in a future version
- Disabled user selection of text on all buttons
- Removed redundant background hover from `disabled` state by using `:not()` on the `:hover` state
- Removed redundant background hover from `master off` by using `:not()` on the `:hover` state // deprecate after 1.4
- Fixed Firefox alignment issue where text was misaligned vertically
- Renamed `half-height` to `short` and `half-width` to `narrow` (Note: `rux_` only, `satcom_` retains old syntax)
- Removed `user-select` and placed it in astro.css to apply to all input types
- Embedded master off icon and removed the additional states required to handle icons and gradient backgrounds

<a name="astro-4-migration">

## Important Astro 4 Migration Note:

Prior to Astro 4, the Astro UXDS Status Component was responsible for both the [small status indicators](https://astrouxds.com/ui-components/status-symbol) and the more complicated [monitoring icon](https://astrouxds.com/ui-components/icons-and-symbols). Astro 4 separates these two use cases into distinct components. The Astro UXDS Status Component is solely responsible for the status indicators. This component, [Astro UXDS Monitoring Icon Component](../rux-monitoring-icon/), replaces the previous "Advanced Status" features of Astro UXDS Status.

<!-- Auto Generated Below -->

## Properties

| Property | Attribute | Description | Type     | Default     |
| -------- | --------- | ----------- | -------- | ----------- |
| `status` | `status`  |             | `string` | `undefined` |

---

_Built with [StencilJS](https://stenciljs.com/)_
