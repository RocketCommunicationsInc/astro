# Checkbox

A Checkbox describes a state or value that can be either "True or False.” Checkboxes are not mutually exclusive. More than one Checkbox may be checked at the same time.


## Guidelines

- [Astro UXDS: Checkboxes](https://www.astrouxds.com/ui-components/checkbox)
- [Astro UXDS: Form and Input Validation](https://www.astrouxds.com/ui-components/validation)

## Basic HTML Usage

### 1. Instalation 
Download the [Astro UXDS Component Library](https://github.com/RocketCommunicationsInc/astro-components) source to your project.

Via CLI:

```sh
git clone https://github.com/RocketCommunicationsInc/astro-components.git
```

### 2. Markup the component using HTML and the Astro CSS classes
```xml
<rux-checkbox
    name="checkboxGroup"
    id="checkbox4c"
    indeterminate
    checked
    disabled
>
    Label Text
</rux-checkbox>
```

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description                                                                                                                                                                                 | Type                  | Default     |
| --------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `checked`       | `checked`       | Toggles checked state of a checkbox                                                                                                                                                         | `boolean`             | `false`     |
| `disabled`      | `disabled`      | Disables the checkbox via HTML disabled attribute. Checkbox takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored. | `boolean`             | `false`     |
| `errorText`     | `error-text`    | The validation error text                                                                                                                                                                   | `string \| undefined` | `undefined` |
| `helpText`      | `help-text`     | The help or explanation text                                                                                                                                                                | `string \| undefined` | `undefined` |
| `indeterminate` | `indeterminate` | Toggles indeterminate state of a checkbox                                                                                                                                                   | `boolean`             | `false`     |
| `name`          | `name`          | The checkbox name                                                                                                                                                                           | `string`              | `''`        |
| `required`      | `required`      | Sets the input as required                                                                                                                                                                  | `boolean`             | `false`     |
| `value`         | `value`         | The checkbox value                                                                                                                                                                          | `string`              | `''`        |


## Events

| Event        | Description                                                                                                                                                                    | Type               |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| `rux-blur`   | Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)                                           | `CustomEvent<any>` |
| `rux-change` | Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)                                | `CustomEvent<any>` |
| `rux-input`  | Fired when an alteration to the input's value is committed by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) | `CustomEvent<any>` |


## CSS Custom Properties

| Name                                  | Description                    |
| ------------------------------------- | ------------------------------ |
| `--controlBorderColor`                | Checkbox border color          |
| `--controlHoverBorderColor`           | Checkbox border color on hover |
| `--controlLabelColor`                 | Label text color               |
| `--controlOutlineBackgroundColor`     | Checkbox background color      |
| `--controlSelectedOutlineBorderColor` | Selected checkbox border color |
| `--controlTextColor`                  | Selected checkbox icon color   |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
