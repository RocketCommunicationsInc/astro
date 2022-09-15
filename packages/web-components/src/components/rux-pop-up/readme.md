# rux-pop-up



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                           | Type                                                                                                                                                                 | Default      |
| ----------- | ----------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `open`      | `open`      | determines if the pop up is open or closed                            | `boolean`                                                                                                                                                            | `false`      |
| `placement` | `placement` | the placement of the pop up relative to it's slotted trigger element. | `"bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"` | `'bottom'`   |
| `strategy`  | `strategy`  | The position strategy of the popup, either absolute or fixed.         | `"absolute" \| "fixed"`                                                                                                                                              | `'absolute'` |


## Events

| Event              | Description                                                        | Type               |
| ------------------ | ------------------------------------------------------------------ | ------------------ |
| `ruxpopupselected` | emits the value of the selected rux-menu-item inside of rux-pop-up | `CustomEvent<any>` |


## Methods

### `hide() => Promise<false>`

Closes the pop up and returns false.

#### Returns

Type: `Promise<false>`



### `show() => Promise<true>`

Opens the pop up and returns true.

#### Returns

Type: `Promise<true>`




## Slots

| Slot          | Description                        |
| ------------- | ---------------------------------- |
| `"(default)"` | The contents for rux-pop-up        |
| `"trigger"`   | The trigger element for rux-pop-up |


## Shadow Parts

| Part                  | Description                                         |
| --------------------- | --------------------------------------------------- |
| `"arrow"`             | the arrow pointing to the trigger of rux-pop-up     |
| `"container"`         | the container of rux-pop-up                         |
| `"popup-content"`     | the content that is shown when rux-pop-up is opened |
| `"trigger-container"` | the container of the pop-up trigger                 |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
