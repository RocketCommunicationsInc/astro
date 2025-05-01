# rux-tle-input



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                                               | Type                  | Default                                      |
| ------------- | ------------- | ------------------------------------------------------------------------- | --------------------- | -------------------------------------------- |
| `disabled`    | `disabled`    | Sets the input as disabled                                                | `boolean`             | `false`                                      |
| `errorText`   | `error-text`  | The validation error text                                                 | `string \| undefined` | `'This TLE may not be valid, please verify'` |
| `helpText`    | `help-text`   | The help text                                                             | `string \| undefined` | `undefined`                                  |
| `invalid`     | `invalid`     | Presentational only. Renders the TLE input as invalid.                    | `boolean`             | `false`                                      |
| `label`       | `label`       | The TLE input label text. For HTML content, use the `label` slot instead. | `string \| undefined` | `undefined`                                  |
| `name`        | `name`        | The input name                                                            | `string`              | `''`                                         |
| `placeholder` | `placeholder` | The TLE input placeholder text                                            | `string \| undefined` | `'Paste a valid TLE here...'`                |
| `readonly`    | `readonly`    | Sets the input as readonly                                                | `boolean`             | `false`                                      |
| `required`    | `required`    | Sets the input as required                                                | `boolean`             | `false`                                      |
| `value`       | `value`       | The input value                                                           | `string`              | `''`                                         |


## Events

| Event             | Description                                                                                                                                                                    | Type                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------- |
| `ruxblur`         | Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)                                           | `CustomEvent<any>`     |
| `ruxchange`       | Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)                                | `CustomEvent<any>`     |
| `ruxinput`        | Fired when an alteration to the input's value is committed by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) | `CustomEvent<any>`     |
| `ruxtlevalidated` | Fired when a TLE is validated - returns true if valid, false if invalid                                                                                                        | `CustomEvent<boolean>` |


## Methods

### `selectAll() => Promise<void>`

Selects all text

#### Returns

Type: `Promise<void>`



### `setFocus(options?: FocusOptions) => Promise<void>`

Sets element as focused

#### Returns

Type: `Promise<void>`



### `validateTle() => Promise<boolean>`

Validates the TLE format

#### Returns

Type: `Promise<boolean>`




## Slots

| Slot             | Description                                                 |
| ---------------- | ----------------------------------------------------------- |
| `"error-text"`   | The error text                                              |
| `"help-text"`    | The help text                                               |
| `"label"`        | The TLE input label                                         |
| `"tle-examples"` | Use this slot to provide example TLEs that users can select |


## Shadow Parts

| Part                   | Description                              |
| ---------------------- | ---------------------------------------- |
| `"error-text"`         | The error text element                   |
| `"form-field"`         | The form-field wrapper container         |
| `"help-text"`          | The help text element                    |
| `"label"`              | The input label when `label` prop is set |
| `"required"`           | The asterisk when required is true       |
| `"tle-examples"`       |                                          |
| `"tle-input"`          | The textarea element                     |
| `"validation-message"` | The validation message container         |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
