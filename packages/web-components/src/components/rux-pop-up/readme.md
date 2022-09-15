# rux-pop-up



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                           | Type                                                                                                                                                                 | Default      |
| ----------- | ----------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `open`      | `open`      | determines if the pop up is open or closed                            | `boolean`                                                                                                                                                            | `false`      |
| `placement` | `placement` | the placement of the pop up relative to it's slotted trigger element. | `"bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"` | `'bottom'`   |
| `strategy`  | `strategy`  | The position strategy of the popup, either absolute or fixed.         | `"absolute" \| "fixed"`                                                                                                                                              | `'absolute'` |


## Events

| Event                  | Description                                                             | Type               |
| ---------------------- | ----------------------------------------------------------------------- | ------------------ |
| `ruxpopupmenuselected` | emits the value of the selected rux-menu-item inside of rux-pop-up-menu | `CustomEvent<any>` |


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
