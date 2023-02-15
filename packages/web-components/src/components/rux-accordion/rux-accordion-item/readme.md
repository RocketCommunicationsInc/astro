# rux-accordion-item



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                | Type      | Default |
| ---------- | ---------- | ---------------------------------------------------------------------------------------------------------- | --------- | ------- |
| `disabled` | `disabled` | If present, sets a disabled state on this accordion item, indicating it cannot be selected by user action. | `boolean` | `false` |
| `expanded` | `expanded` | If present, sets the initial state on this accordion item to open, displaying the accordion content.       | `boolean` | `false` |


## Events

| Event          | Description                                | Type               |
| -------------- | ------------------------------------------ | ------------------ |
| `ruxcollapsed` | Fired when an accordion-item has collapsed | `CustomEvent<any>` |
| `ruxexpanded`  | Fired when an accordion-item has expanded  | `CustomEvent<any>` |


## Slots

| Slot          | Description               |
| ------------- | ------------------------- |
| `"(default)"` | The expanded content      |
| `"label"`     | Summary title             |
| `"prefix"`    | Area to the left of label |


## Shadow Parts

| Part              | Description                                          |
| ----------------- | ---------------------------------------------------- |
| `"container"`     | The accordion item                                   |
| `"indicator"`     | The opened/closed indicator                          |
| `"label"`         | The label                                            |
| `"label-wrapper"` | The element wrapping prefix, indicator and the label |
| `"prefix"`        | The wrapper for the prefix slot                      |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
