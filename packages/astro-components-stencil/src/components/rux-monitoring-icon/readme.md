# Monitoring Icon

These icons represent objects, equipment, and concepts that are being administered or monitored. The purpose of these icons is to easily, concisely, and clearly visually communicate their status to be to users.

## Guidelines

-   [Astro UXDS: Icons and Symbols](https://astrouxds.com/ui-components/icons-and-symbols)

## Web Components Usage

### 1. Installation

#### Install the Astro UXDS Monitoring Icon package via Command Line (Preferred Method)

```sh
npm i --save @astrouxds/rux--monitoring-icon
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro UXDS Component Library](https://github.com/RocketCommunicationsInc/astro-components/src/master/) source to your project.

Via CLI:

```sh
git clone https://github.com/RocketCommunicationsInc/astro-components.git
```

Or, [download the Astro UXDS Components as a .zip](https://github.com/RocketCommunicationsInc/astro-components/archive/master.zip)

### 2. Import the Astro Monitoring Icon Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxMonitoringIcon } from '@astrouxds/rux-monitoring-icon/rux-monitoring-icon.js'
```

### 3. Render the Astro Monitoring Icon Web Component

Pass properties as attributes of the Astro Monitoring Icon custom element:

```xml
<rux-monitoring-icon
 icon="altitude"
 label="Altitude for satellite X"
 sublabel="10000m"
 status="normal"
 notifications="10">
</rux-monitoring-icon>
```

# Monitoring Progress Icon

The Monitoring Progress Icon is a unique instance of the Monitoring Icon for displaying live progress of a monitored item. The Monitoring Progress Icon uses a "donut"-style progress meter rather than a specific icon.

## Guidelines

-   [Astro UXDS: Icons and Symbols](https://astrouxds.com/ui-components/icons-and-symbols)

## Web Components Usage

### 1. Installation

#### Install the Astro UXDS Monitoring Icon package via Command Line (Preferred Method)

```sh
npm i --save @astrouxds/rux--monitoring-icon
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro UXDS Component Library](https://github.com/RocketCommunicationsInc/astro-components/src/master/) source to your project.

Via CLI:

```sh
git clone https://github.com/RocketCommunicationsInc/astro-components.git
```

Or, [download Astro UXDS Components as a .zip](https://github.com/RocketCommunicationsInc/astro-components/archive/master.zip)

### 2. Import the Astro Monitoring Progress Icon Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project. Status is assigned via a range object.

```javascript
import { RuxMonitoringProgressIcon } from '@astrouxds/rux-monitoring-icon/rux-monitoring-progress-icon.js'
```

### 3. Render the Astro Monitoring Progress Icon Web Component

Pass properties as attributes of the Astro Monitoring Progress Icon custom element:

````xml
<rux-monitoring-progress-icon
 label="Battery level"
 progress="50">
</rux-monitoring-progress-icon>



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description | Type                                                                     | Default     |
| --------------- | --------------- | ----------- | ------------------------------------------------------------------------ | ----------- |
| `icon`          | `icon`          |             | `string`                                                                 | `undefined` |
| `label`         | `label`         |             | `string`                                                                 | `undefined` |
| `notifications` | `notifications` |             | `number`                                                                 | `0`         |
| `status`        | `status`        |             | `"caution" \| "critical" \| "normal" \| "off" \| "serious" \| "standby"` | `'normal'`  |
| `sublabel`      | `sublabel`      |             | `string`                                                                 | `undefined` |


## Dependencies

### Depends on

- [rux-icon](../rux-icon)
- [rux-status](../rux-status)

### Graph
```mermaid
graph TD;
  rux-monitoring-icon --> rux-icon
  rux-monitoring-icon --> rux-status
  style rux-monitoring-icon fill:#f9f,stroke:#333,stroke-width:4px
````

---

_Built with [StencilJS](https://stenciljs.com/)_
