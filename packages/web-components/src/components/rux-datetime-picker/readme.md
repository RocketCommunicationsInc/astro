# rux-datetime-picker



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type                             | Default     |
| -------------- | --------------- | ----------- | -------------------------------- | ----------- |
| `disabled`     | `disabled`      |             | `boolean`                        | `false`     |
| `errorText`    | `error-text`    |             | `string \| undefined`            | `undefined` |
| `helpText`     | `help-text`     |             | `string \| undefined`            | `undefined` |
| `invalid`      | `invalid`       |             | `boolean`                        | `false`     |
| `julianFormat` | `julian-format` |             | `boolean`                        | `false`     |
| `label`        | `label`         |             | `string \| undefined`            | `undefined` |
| `maxYear`      | `max-year`      |             | `number`                         | `2100`      |
| `minYear`      | `min-year`      |             | `number`                         | `1900`      |
| `name`         | `name`          |             | `string \| undefined`            | `undefined` |
| `precision`    | `precision`     |             | `"min" \| "ms" \| "sec"`         | `'min'`     |
| `required`     | `required`      |             | `boolean`                        | `false`     |
| `size`         | `size`          |             | `"large" \| "medium" \| "small"` | `'medium'`  |
| `value`        | `value`         |             | `string \| undefined`            | `undefined` |


## Dependencies

### Depends on

- [rux-pop-up](../rux-pop-up)
- [rux-calendar](../rux-calendar)

### Graph
```mermaid
graph TD;
  rux-datetime-picker --> rux-pop-up
  rux-datetime-picker --> rux-calendar
  rux-calendar --> rux-button
  rux-calendar --> rux-select
  rux-calendar --> rux-option
  rux-calendar --> rux-day
  rux-calendar --> rux-icon
  rux-button --> rux-icon
  style rux-datetime-picker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
