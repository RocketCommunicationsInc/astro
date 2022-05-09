# Slider

A Slider allows users to choose from a range of continuous and discrete values. The Slider displays the range of possible values and the Slider’s indicator displays the current value.

## Guidelines

-   [Astro UXDS: Slider](http://www.astrouxds.com/ui-components/slider)
-   [MDN: HTML Input Range](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range)

## Web Components Usage

### 1. Installation

#### Install the Astro UXDS Slider package via Command Line (Preferred Method)

```sh
npm i -save @astrouxds/rux-slider
```

You may use Yarn, NPM, or your Node package manager of choice. The `--save` flag adds this component as a dependency in your `package.json` file.

#### **Alternatively**, download the [Astro UXDS Component Library](https://github.com/RocketCommunicationsInc/astro-components/) source to your project.

Via CLI:

```sh
git clone https://github.com/RocketCommunicationsInc/astro-components.git
```

Or, [download the Astro UXDS Components as a .zip](https://github.com/RocketCommunicationsInc/astro-components/archive/master.zip)

### 2. Import the Astro Slider Web Component

This example assumes you're using the NPM package in `node_modules`. Otherwise, import the component using the path to the Astro Components directory in your project.

```javascript
import { RuxSlider } from '@astrouxds/rux-slider/rux-slider.js'
```

### 3. Render the Astro Slider Web Component

Pass properties via attributes similar to the native [HTML Input Range](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range) attributes:

```xml
<rux-slider
  min="0"
  max="400"
  step="5"
  val="200"
  disabled
  >
</rux-slider>
```

<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                                                                                                                                                                                   | Type                  | Default                                   |
| ------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------------------------------------- |
| `axisLabels` | --           | Shows tick marks and labels in the order provided and aligns evenly based on the length.                                                                                                                      | `string[]`            | `[]`                                      |
| `disabled`   | `disabled`   | Determines if the slider is disabled.                                                                                                                                                                         | `boolean`             | `false`                                   |
| `errorText`  | `error-text` | The validation error text                                                                                                                                                                                     | `string \| undefined` | `undefined`                               |
| `helpText`   | `help-text`  | The help or explanation text                                                                                                                                                                                  | `string \| undefined` | `undefined`                               |
| `label`      | `label`      | The slider label text. For HTML content, use the `label` slot instead.                                                                                                                                        | `string \| undefined` | `undefined`                               |
| `max`        | `max`        | Max value of slider.                                                                                                                                                                                          | `number`              | `100`                                     |
| `min`        | `min`        | Min value of the slider.                                                                                                                                                                                      | `number`              | `0`                                       |
| `name`       | `name`       | Name of the Input Field for Form Submission                                                                                                                                                                   | `string`              | `''`                                      |
| `step`       | `step`       | Step amount of slider value.                                                                                                                                                                                  | `number`              | `1`                                       |
| `ticksOnly`  | `ticks-only` | Hides labels and only shows tick marks if axis-labels is provided.                                                                                                                                            | `boolean`             | `false`                                   |
| `value`      | `value`      | Current value of the slider. The default value is halfway between the specified minimum and maximum. - [HTMLElement/input_type_range>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range) | `number`              | `(this.max! - this.min!) / 2 + this.min!` |


## Events

| Event      | Description                                                                                                                                     | Type               |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `ruxblur`  | Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)            | `CustomEvent<any>` |
| `ruxinput` | Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) | `CustomEvent<any>` |


## Slots

| Slot      | Description      |
| --------- | ---------------- |
| `"label"` | The slider label |


## Shadow Parts

| Part               | Description                                   |
| ------------------ | --------------------------------------------- |
| `"axis-label"`     | the axis label                                |
| `"error-text"`     | The error text element                        |
| `"form-field"`     | The form-field wrapper container              |
| `"help-text"`      | The help text element                         |
| `"input"`          | The input element                             |
| `"label"`          | The input label when `label` prop is set      |
| `"tick"`           | the tick mark                                 |
| `"tick-container"` | The container of the tick mark and axis-label |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
