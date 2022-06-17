# rux-menu-item



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                    | Type      | Default     |
| ---------- | ---------- | ---------------------------------------------------------------------------------------------- | --------- | ----------- |
| `disabled` | `disabled` | sets the menu item as disabled                                                                 | `boolean` | `false`     |
| `selected` | `selected` | sets the menu item as selected                                                                 | `boolean` | `false`     |
| `value`    | `value`    | the value returned when item is selected. If no value is given, the text content will be used. | `any`     | `undefined` |


## Events

| Event                 | Description                                     | Type                  |
| --------------------- | ----------------------------------------------- | --------------------- |
| `ruxmenuitemselected` | Emitted when item is clicked. Ex `{value : 10}` | `CustomEvent<object>` |


## Slots

| Slot      | Description                                   |
| --------- | --------------------------------------------- |
| `"start"` | before element text. Typically used for icons |


## Shadow Parts

| Part          | Description                        |
| ------------- | ---------------------------------- |
| `"container"` | the container of the rux-menu-item |


## CSS Custom Properties

| Name                                       | Description                                   |
| ------------------------------------------ | --------------------------------------------- |
| `--popup-menu-item-background-color`       | [DEPRECATED] Menu Item Background Color       |
| `--popup-menu-item-hover-background-color` | [DEPRECATED] Menu Item Hover Background Color |
| `--popup-menu-text-color`                  | [DEPRECATED] Menu Text Color                  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
