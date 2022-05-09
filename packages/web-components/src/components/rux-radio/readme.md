# RadioButtons

Radio Buttons allow users to mutually select an option from a predefined set of options. When one selection is made, the previous selection becomes deselected. One option should always be selected.

## Guidelines

-   [Astro UXDS: Radio Buttons](https://www.astrouxds.com/ui-components/radio-button)
-   [Astro UXDS: Toggles](http://www.astrouxds.com/ui-components/toggle)
-   [Astro UXDS: Form and Input Validation](https://www.astrouxds.com/ui-components/validation)

## Basic HTML Usage

### 1. Markup for the component

```xml
  <rux-radio
    name="radio1"
    id="ruxId`"
    disabled
    checked
  ></rux-radio>
```

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                                                           | Type                  | Default     |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `checked`  | `checked`  | Toggles checked state of a radio                                                                                                                                                      | `boolean`             | `false`     |
| `disabled` | `disabled` | Disables the radio via HTML disabled attribute. Radio takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored. | `boolean`             | `false`     |
| `label`    | `label`    | The radio label text. For HTML content, use the default slot instead.                                                                                                                 | `string \| undefined` | `undefined` |
| `name`     | `name`     | The radio name                                                                                                                                                                        | `string`              | `''`        |
| `value`    | `value`    | The radio value                                                                                                                                                                       | `string`              | `''`        |


## Events

| Event     | Description                                                                                                                          | Type               |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| `ruxblur` | Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event) | `CustomEvent<any>` |


## Slots

| Slot          | Description     |
| ------------- | --------------- |
| `"(default)"` | The radio label |


## Shadow Parts

| Part           | Description                 |
| -------------- | --------------------------- |
| `"form-field"` | the form field of the radio |
| `"label"`      | the label of the radio      |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
