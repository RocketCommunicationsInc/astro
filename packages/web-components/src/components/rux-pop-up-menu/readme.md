# rux-pop-up-menu



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description | Type                                                                                                                                                                 | Default    |
| ----------- | ----------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `open`      | `open`      |             | `boolean`                                                                                                                                                            | `false`    |
| `placement` | `placement` |             | `"bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"` | `'bottom'` |


## Events

| Event                  | Description | Type               |
| ---------------------- | ----------- | ------------------ |
| `ruxpopupmenuselected` |             | `CustomEvent<any>` |


## Methods

### `hide() => Promise<false>`

Closes the pop up menu and returns false.

#### Returns

Type: `Promise<false>`



### `show() => Promise<true>`

Opens the pop up menu and returns true.

#### Returns

Type: `Promise<true>`




## Slots

| Slot          | Description                             |
| ------------- | --------------------------------------- |
| `"(default)"` | The contents for rux-pop-up-menu        |
| `"trigger"`   | The trigger element for rux-pop-up-menu |


## Shadow Parts

| Part                  | Description                                              |
| --------------------- | -------------------------------------------------------- |
| `"arrow"`             | the arrow pointing to the trigger of rux-pop-up-menu     |
| `"container"`         | the container of rux-pop-up-menu                         |
| `"popup-content"`     | the content that is shown when rux-pop-up-menu is opened |
| `"trigger-container"` | the container of the pop-up trigger                      |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
