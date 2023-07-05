# rux-datepicker



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type                  | Default     |
| ---------- | ---------- | ----------- | --------------------- | ----------- |
| `julian`   | `julian`   |             | `boolean`             | `false`     |
| `max`      | `max`      |             | `number \| undefined` | `undefined` |
| `min`      | `min`      |             | `number \| undefined` | `undefined` |
| `open`     | `open`     |             | `boolean`             | `false`     |
| `standard` | `standard` |             | `boolean`             | `true`      |


## Events

| Event          | Description | Type               |
| -------------- | ----------- | ------------------ |
| `ruxcollapsed` |             | `CustomEvent<any>` |
| `ruxexpanded`  |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [rux-pop-up](../rux-pop-up)
- [rux-icon](../rux-icon)
- [rux-calendar](../rux-calendar)
- [rux-button](../rux-button)

### Graph
```mermaid
graph TD;
  rux-datepicker --> rux-pop-up
  rux-datepicker --> rux-icon
  rux-datepicker --> rux-calendar
  rux-datepicker --> rux-button
  rux-calendar --> rux-icon
  rux-calendar --> rux-select
  rux-calendar --> rux-option
  rux-calendar --> rux-day
  rux-button --> rux-icon
  style rux-datepicker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
