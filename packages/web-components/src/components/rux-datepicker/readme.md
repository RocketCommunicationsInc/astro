# rux-datepicker



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type      | Default |
| -------- | --------- | ----------- | --------- | ------- |
| `open`   | `open`    |             | `boolean` | `false` |


## Events

| Event          | Description                                       | Type               |
| -------------- | ------------------------------------------------- | ------------------ |
| `ruxcollapsed` | Emitted when the datepicker's calendar is closed. | `CustomEvent<any>` |
| `ruxexpanded`  | Emitted when the datepickers calendar is opened.  | `CustomEvent<any>` |


## Dependencies

### Depends on

- [rux-input](../rux-input)
- [rux-pop-up](../rux-pop-up)
- [rux-icon](../rux-icon)
- [rux-calendar](../rux-calendar)

### Graph
```mermaid
graph TD;
  rux-datepicker --> rux-input
  rux-datepicker --> rux-pop-up
  rux-datepicker --> rux-icon
  rux-datepicker --> rux-calendar
  rux-input --> rux-icon
  rux-calendar --> rux-icon
  rux-calendar --> rux-select
  rux-calendar --> rux-option
  rux-calendar --> rux-day
  style rux-datepicker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
