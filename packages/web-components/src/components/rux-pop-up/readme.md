# rux-pop-up



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                                             | Type                                                                                                                                                                           | Default      |
| ----------- | ----------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ |
| `open`      | `open`      | Determines if the pop up is open or closed                                              | `boolean`                                                                                                                                                                      | `false`      |
| `placement` | `placement` | The placement of the pop up relative to it's slotted trigger element. Defaults to auto. | `"auto" \| "bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"` | `'auto'`     |
| `strategy`  | `strategy`  | The position strategy of the pop up, either absolute or fixed.                           | `"absolute" \| "fixed"`                                                                                                                                                        | `'absolute'` |


## Events

| Event            | Description                       | Type               |
| ---------------- | --------------------------------- | ------------------ |
| `ruxpopupclosed` | Emits when the pop up has closed. | `CustomEvent<any>` |
| `ruxpopupopened` | Emits when the pop up has opened  | `CustomEvent<any>` |


## Methods

### `hide() => Promise<false>`

Closes the pop up and returns false.

#### Returns

Type: `Promise<false>`



### `show() => Promise<true>`

Opens the pop up and returns true.

#### Returns

Type: `Promise<true>`




## Shadow Parts

| Part                  | Description |
| --------------------- | ----------- |
| `"arrow"`             |             |
| `"container"`         |             |
| `"popup-content"`     |             |
| `"trigger-container"` |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
