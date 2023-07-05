# rux-calendar



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                             | Type                            | Default     |
| -------- | --------- | ----------------------------------------------------------------------- | ------------------------------- | ----------- |
| `dateIn` | `date-in` | Option to give the calendar a specfic month/year                        | `number \| string \| undefined` | `undefined` |
| `max`    | `max`     | Max date that the calendar will go to. Needs to be a valid date string. | `string \| undefined`           | `undefined` |
| `min`    | `min`     | Min date that the calendar will go to. Needs to be a valid date string. | `string \| undefined`           | `undefined` |


## Dependencies

### Used by

 - [rux-datepicker](../rux-datepicker)

### Depends on

- [rux-icon](../rux-icon)
- [rux-select](../rux-select)
- [rux-option](../rux-option)
- [rux-day](rux-day)

### Graph
```mermaid
graph TD;
  rux-calendar --> rux-icon
  rux-calendar --> rux-select
  rux-calendar --> rux-option
  rux-calendar --> rux-day
  rux-datepicker --> rux-calendar
  style rux-calendar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
