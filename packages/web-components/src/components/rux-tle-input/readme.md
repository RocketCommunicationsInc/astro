# rux-tle-input

The `rux-tle-input` component allows users to input and validate TLE (Two-Line Element) data for orbital objects. The component now supports both standard TLE format and the Alpha-5 extension format.

## Alpha-5 Extension Support

The TLE input now supports the Alpha-5 extension format introduced by the U.S. Space Force (via space-track.org) to expand the five-digit satellite catalog number limit in TLEs. 

In the Alpha-5 format:
- A letter (A-Z) replaces the first digit of the satellite number
- A0001 represents satellite number 100001
- B0001 represents satellite number 200001, and so on

This extension allows catalog numbers up to 2,599,999, providing a temporary solution until a full migration to a more robust format like OMM.

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

| Event             | Description                                                                                                                                                                    | Type                               |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------- |
| `ruxblur`         | Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)                                           | `CustomEvent<any>`                 |
| `ruxchange`       | Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)                                | `CustomEvent<any>`                 |
| `ruxinput`        | Fired when an alteration to the input's value is committed by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) | `CustomEvent<any>`                 |
| `ruxtlevalidated` | Fired when a TLE is validated - returns the validation result with details                                                                                                     | `CustomEvent<TLEValidationResult>` |


## Methods

### `reportValidity() => Promise<boolean>`

For form validation with constraint validation API

#### Returns

Type: `Promise<boolean>`



### `selectAll() => Promise<void>`

Selects all text

#### Returns

Type: `Promise<void>`



### `setFocus(options?: FocusOptions) => Promise<void>`

Sets element as focused

#### Returns

Type: `Promise<void>`



### `validateTle() => Promise<TLEValidationResult>`

Validates the TLE format

#### Returns

Type: `Promise<TLEValidationResult>`




## Slots

| Slot           | Description         |
| -------------- | ------------------- |
| `"error-text"` | The error text      |
| `"help-text"`  | The help text       |
| `"label"`      | The TLE input label |


## Shadow Parts

| Part                   | Description                              |
| ---------------------- | ---------------------------------------- |
| `"error-text"`         | The error text element                   |
| `"form-field"`         | The form-field wrapper container         |
| `"help-text"`          | The help text element                    |
| `"label"`              | The input label when `label` prop is set |
| `"required"`           | The asterisk when required is true       |
| `"tle-input"`          | The textarea element                     |
| `"validation-message"` | The validation message container         |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
