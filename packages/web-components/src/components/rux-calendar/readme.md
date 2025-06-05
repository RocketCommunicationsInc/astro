# rux-calendar



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                                                                                                                         | Type                                        | Default |
| ----------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | ------- |
| `isJulian`  | `is-julian` | Controls whether or not the calendar displays dates in Julian                                                                                                       | `boolean`                                   | `false` |
| `iso`       | `iso`       | The iso string to be used to display the date in the calendar                                                                                                       | `string`                                    | `''`    |
| `maxYear`   | `max-year`  | The maximum year the calendar can use                                                                                                                               | `number`                                    | `2100`  |
| `minYear`   | `min-year`  | The minimum year the calendar can use                                                                                                                               | `number`                                    | `1900`  |
| `precision` | `precision` | Determines the precision of the time picker down to milliseconds. When the calendar is within a rux-datepicker, the precision is set from the datepicker component. | `"day" \| "hour" \| "min" \| "ms" \| "sec"` | `'min'` |


## Dependencies

### Used by

 - [rux-datetime-picker](../rux-datetime-picker)

### Depends on

- [rux-button](../rux-button)
- [rux-select](../rux-select)
- [rux-option](../rux-option)
- [rux-day](rux-day)
- [rux-icon](../rux-icon)

### Graph
```mermaid
graph TD;
  rux-calendar --> rux-button
  rux-calendar --> rux-select
  rux-calendar --> rux-option
  rux-calendar --> rux-day
  rux-calendar --> rux-icon
  rux-button --> rux-icon
  rux-datetime-picker --> rux-calendar
  style rux-calendar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
