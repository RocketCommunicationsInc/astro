# rux-checkbox-group

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                                                      | Type                  | Default     |
| ----------- | ------------ | -------------------------------------------------------------------------------- | --------------------- | ----------- |
| `errorText` | `error-text` | The validation error text                                                        | `string \| undefined` | `undefined` |
| `helpText`  | `help-text`  | The help or explanation text                                                     | `string \| undefined` | `undefined` |
| `invalid`   | `invalid`    | Presentational only. Renders the Checkbox Group as invalid.                      | `boolean`             | `false`     |
| `label`     | `label`      | The label of the checkbox group. For HTML content, use the `label` slot instead. | `string \| undefined` | `undefined` |
| `required`  | `required`   | Marks that a selection from the checkbox group is requried.                      | `boolean`             | `false`     |


## Slots

| Slot          | Description              |
| ------------- | ------------------------ |
| `"(default)"` | The checkbox elements    |
| `"label"`     | The checkbox group label |


## Shadow Parts

| Part           | Description                              |
| -------------- | ---------------------------------------- |
| `"container"`  | The container div of checkbox elements   |
| `"error-text"` | The error text element                   |
| `"form-field"` | The form-field wrapper container         |
| `"help-text"`  | The help text element                    |
| `"label"`      | The input label when `label` prop is set |
| `"required"`   | The asterisk when required is true       |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
