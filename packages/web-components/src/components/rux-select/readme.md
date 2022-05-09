# Select Menu

Select Menus allow users to select a value from a list of values.

## Guidelines

-   [Astro UXDS: Select](https://www.astrouxds.com/ui-components/select)
-   [Astro UXDS: Form and Input Validation](https://www.astrouxds.com/ui-components/validation)

## Web Components Usage

### 1. Render the Astro Select Menu Component

Pass properties as attributes of the Astro Select Menu custom element. Add native HTML form attributes like `disabled` or `required`:

```xml
<rux-select
    required
    label="Select an option"
    input-id="my select"
    label-id="select label"
></rux-select>
```

### 2. Insert Options and/or Option Groups into the Select Menu

Select Menu renders a native `<select>` element and allows native `<option>` and `<optgroup>` elements to be inserted.

```xml
<rux-select label="Select an option">
    <option value="" selected>Select an option</option>
    <optgroup label="Group one">
        <option>Option 1.1</option>
        <option>Option 1.2</option>
        <option>Option 1.3</option>
        <option>Option 1.4</option>
    </optgroup>
    <optgroup label="Group two">
        <option>Option 2.1</option>
        <option>Option 2.2</option>
        <option>Option 2.3</option>
        <option>Option 2.4</option>
    </optgroup>
</rux-select>
```

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                                                                                                                                                                       | Type                                          | Default     |
| ----------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ----------- |
| `disabled`  | `disabled`   | Disables the select menu via HTML disabled attribute. Select menu takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored. | `boolean`                                     | `false`     |
| `errorText` | `error-text` | The validation error text                                                                                                                                                                         | `string \| undefined`                         | `undefined` |
| `helpText`  | `help-text`  | The help or explanation text                                                                                                                                                                      | `string \| undefined`                         | `undefined` |
| `inputId`   | `input-id`   | Id for the Select Input                                                                                                                                                                           | `string \| undefined`                         | `undefined` |
| `invalid`   | `invalid`    | Presentational only. Renders the Select Menu as invalid.                                                                                                                                          | `boolean`                                     | `false`     |
| `label`     | `label`      | The select label text. For HTML content, use the `label` slot instead.                                                                                                                            | `string \| undefined`                         | `undefined` |
| `labelId`   | `label-id`   | Id for the Label                                                                                                                                                                                  | `string \| undefined`                         | `undefined` |
| `multiple`  | `multiple`   | Enables multiselect                                                                                                                                                                               | `boolean`                                     | `false`     |
| `name`      | `name`       | Sets the Name of the Input Element                                                                                                                                                                | `string`                                      | `''`        |
| `required`  | `required`   | Sets the field as required                                                                                                                                                                        | `boolean`                                     | `false`     |
| `size`      | `size`       | The size of rux-select                                                                                                                                                                            | `"large" \| "medium" \| "small" \| undefined` | `'medium'`  |
| `value`     | `value`      | The value of the selected option. If multiple is true, this is an array.                                                                                                                          | `string \| string[] \| undefined`             | `undefined` |


## Events

| Event       | Description                                                                                                                          | Type                |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------- |
| `ruxblur`   | Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event) | `CustomEvent<any>`  |
| `ruxchange` | Event Emitted when the Value of the Select is Changed                                                                                | `CustomEvent<void>` |


## Slots

| Slot          | Description        |
| ------------- | ------------------ |
| `"(default)"` | The select options |
| `"label"`     | The select label   |


## Shadow Parts

| Part           | Description                        |
| -------------- | ---------------------------------- |
| `"error-text"` | The error text element             |
| `"form-field"` | The form-field wrapper container   |
| `"help-text"`  | The help text element              |
| `"label"`      | The select label                   |
| `"required"`   | The asterisk when required is true |
| `"select"`     | The select element                 |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
