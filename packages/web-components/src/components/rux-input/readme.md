# rux-input

<!-- Auto Generated Below -->

## Properties

| Property      | Attribute     | Description                                                                                                                                                                             | Type                                                                        | Default     |
| ------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ----------- |
| `disabled`    | `disabled`    | Disables the button via HTML disabled attribute. Button takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored. | `boolean`                                                                   | `false`     |
| `errorText`   | `error-text`  | The validation error text                                                                                                                                                               | `string \| undefined`                                                       | `undefined` |
| `helpText`    | `help-text`   | The help or explanation text                                                                                                                                                            | `string \| undefined`                                                       | `undefined` |
| `invalid`     | `invalid`     | Presentational only. Renders the Input Field as invalid.                                                                                                                                | `boolean`                                                                   | `false`     |
| `label`       | `label`       | The input label text. For HTML content, use the `label` slot instead.                                                                                                                   | `string \| undefined`                                                       | `undefined` |
| `max`         | `max`         | The input max attribute                                                                                                                                                                 | `string \| undefined`                                                       | `undefined` |
| `min`         | `min`         | The input min attribute                                                                                                                                                                 | `string \| undefined`                                                       | `undefined` |
| `name`        | `name`        | The input name                                                                                                                                                                          | `string`                                                                    | `''`        |
| `placeholder` | `placeholder` | The input placeholder text                                                                                                                                                              | `string \| undefined`                                                       | `undefined` |
| `required`    | `required`    | Sets the input as disabled                                                                                                                                                              | `boolean`                                                                   | `false`     |
| `small`       | `small`       | Styles the input element and label smaller for space-limited situations.                                                                                                                | `boolean`                                                                   | `false`     |
| `step`        | `step`        | The input step attribute                                                                                                                                                                | `string \| undefined`                                                       | `undefined` |
| `type`        | `type`        | The input type                                                                                                                                                                          | `"email" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "url"` | `'text'`    |
| `value`       | `value`       | The input value                                                                                                                                                                         | `string`                                                                    | `''`        |

## Events

| Event        | Description                                                                                                                                                                    | Type               |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| `rux-blur`   | Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)                                           | `CustomEvent<any>` |
| `rux-change` | Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)                                | `CustomEvent<any>` |
| `rux-input`  | Fired when an alteration to the input's value is committed by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) | `CustomEvent<any>` |

## Slots

| Slot      | Description     |
| --------- | --------------- |
| `"label"` | The input label |

## Shadow Parts

| Part           | Description                              |
| -------------- | ---------------------------------------- |
| `"form-field"` | The form-field wrapper container         |
| `"label"`      | The input label when `label` prop is set |

## CSS Custom Properties

| Name                                 | Description                              |
| ------------------------------------ | ---------------------------------------- |
| `--input-background-color`           | the input background color               |
| `--input-border-color`               | the input border color                   |
| `--input-focus-border-color`         | the input focus border color             |
| `--input-invalid-border-color`       | the input invalid border color           |
| `--input-selection-background-color` | the background color of highlighted text |
| `--input-text-color`                 | the input text color                     |

## Dependencies

### Used by

-   [rux-log](../rux-log)

### Graph

```mermaid
graph TD;
  rux-log --> rux-input
  style rux-input fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
