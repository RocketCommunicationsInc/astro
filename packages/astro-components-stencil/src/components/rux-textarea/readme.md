# rux-textarea



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                                                                                                                                                             | Type                  | Default     |
| ------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| `disabled`    | `disabled`    | Disables the button via HTML disabled attribute. Button takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored. | `boolean`             | `false`     |
| `errorText`   | `error-text`  | The validation error text                                                                                                                                                               | `string \| undefined` | `undefined` |
| `helpText`    | `help-text`   | The  or explanation text                                                                                                                                                                | `string \| undefined` | `undefined` |
| `invalid`     | `invalid`     | Marks the textarea as invalid                                                                                                                                                           | `boolean`             | `false`     |
| `label`       | `label`       | The textarea label text. For HTML content, use the `label` slot instead.                                                                                                                | `string \| undefined` | `undefined` |
| `maxLength`   | `max-length`  | The input maxLength attribute                                                                                                                                                           | `string \| undefined` | `undefined` |
| `minLength`   | `min-length`  | The input minLength attribute                                                                                                                                                           | `string \| undefined` | `undefined` |
| `name`        | `name`        | The input name                                                                                                                                                                          | `string`              | `''`        |
| `placeholder` | `placeholder` | The textarea placeholder text                                                                                                                                                           | `string \| undefined` | `undefined` |
| `required`    | `required`    | Sets the input as disabled                                                                                                                                                              | `boolean`             | `false`     |
| `rows`        | `rows`        | The input rows attribute                                                                                                                                                                | `number \| undefined` | `undefined` |
| `small`       | `small`       | Styles the input element and label smaller for space-limited situations.                                                                                                                | `boolean`             | `false`     |
| `value`       | `value`       | The input value                                                                                                                                                                         | `string`              | `''`        |


## Events

| Event        | Description                                                                                                                                                                    | Type               |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| `rux-blur`   | Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)                                           | `CustomEvent<any>` |
| `rux-change` | Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)                                | `CustomEvent<any>` |
| `rux-input`  | Fired when an alteration to the input's value is committed by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) | `CustomEvent<any>` |


## Slots

| Slot      | Description        |
| --------- | ------------------ |
| `"label"` | The textarea label |


## CSS Custom Properties

| Name                                    | Description                                |
| --------------------------------------- | ------------------------------------------ |
| `--textarea-background-color`           | Background color                           |
| `--textarea-border-color`               | Border color of the textarea.              |
| `--textarea-focus-border-color`         | Border color while in a focused state      |
| `--textarea-invalid-border-color`       | Border color while in an invalid state     |
| `--textarea-selection-background-color` | Background color while in a selected state |
| `--textarea-text-color`                 | Text color                                 |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
