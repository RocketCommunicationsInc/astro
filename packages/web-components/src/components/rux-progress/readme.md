# Progress

A visual indicator of a tasks progress. When indicating progress with a finite duration, use determinate progress. When indicating progress with an indefinite duration, use indeterminate progress.

## Guidelines

-   [Astro UXDS: Progress](https://astrouxds.com/components/progress/)

## Web Component Usage

### 1. Installation

#### Install the Astro UXDS Progress package via Command Line (Preferred Method)

```sh
npm i --save @astrouxds/rux-progress
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro UXDS Component Library](https://github.com/RocketCommunicationsInc/astro-components) source to your project.

Via CLI:

```sh
git clone https://github.com/RocketCommunicationsInc/astro-components.git
```

Or, [download the Astro UXDS Components as a .zip](https://github.com/RocketCommunicationsInc/astro-components/archive/master.zip)

### 2. Import the Astro Progress Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxProgress } from '@astrouxds/rux-progress/rux-progress.js'
```

### 3. Render the Astro Progress Web Component

Indeterminate Progress

```xml
<rux-progress></rux-progress>
```

Determinate Progress

```xml
<rux-progress value="50" max="150" hide-label></rux-progress>
```

---

## Basic HTML Usage

### 1. Include the Astro UXDS CSS File

Latest release is available in the [static css directory](https://github.com/RocketCommunicationsInc/astro-components/tree/master/static/css).

```xml
<link rel="stylesheet" href="/your-project/path/astro.css" />
```

### 2. Markup the component using HTML and the Astro CSS classes

Determinate progress

```xml
<rux-progress value="50" max="100" hide-label></rux-progress>
```

Indeterminate progress

```xml
<rux-progress></rux-progress>
```

### Attributes

| Attribute | Type   | Default | Requried | Description                                                                         |
| --------- | ------ | ------- | -------- | ----------------------------------------------------------------------------------- |
| `value`   | Number | null    | Yes      | Current progress value between 0 and 100 (or the max, if defined below).            |
| `max`     | Number | 100     | No       | For progress bars where progress bars have a maximum value greater or less than 100 |

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                                                         | Type                  | Default     |
| ----------- | ------------ | ----------------------------------------------------------------------------------- | --------------------- | ----------- |
| `hideLabel` | `hide-label` | Hides the progress label                                                            | `boolean`             | `false`     |
| `max`       | `max`        | For progress bars where progress bars have a maximum value greater or less than 100 | `number`              | `100`       |
| `value`     | `value`      | Current progress value between 0 and 100 (or the max, if defined below).            | `number \| undefined` | `undefined` |


## Shadow Parts

| Part         | Description                 |
| ------------ | --------------------------- |
| `"output"`   | the native output element   |
| `"progress"` | the native progress element |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
