# rux-tooltip



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description                                                                                                        | Type                                                                                                                                                                           | Default      |
| ------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ |
| `delay`             | `delay`               | How long it takes the tooltip to appear in milliseconds, default = 800, Overrides the css custom property --delay. | `number \| string \| undefined`                                                                                                                                                | `undefined`  |
| `disableAutoUpdate` | `disable-auto-update` | Turns disableAutoUpdate on or off which makes the tooltip move to stay in view based on scroll. Defaults to false. | `boolean`                                                                                                                                                                      | `false`      |
| `message`           | `message`             | The tooltip's content.                                                                                             | `string`                                                                                                                                                                       | `''`         |
| `offset`            | `offset`              | Pixel offset from trigger, default = 8                                                                             | `number`                                                                                                                                                                       | `8`          |
| `open`              | `open`                | Whether or not the tooltip is open                                                                                 | `boolean`                                                                                                                                                                      | `false`      |
| `placement`         | `placement`           | The placement of the tooltip relative to it's slotted trigger element. Defaults to auto.                           | `"auto" \| "bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"` | `'auto'`     |
| `strategy`          | `strategy`            | The position strategy of the tooltip, either absolute or fixed.                                                    | `"absolute" \| "fixed"`                                                                                                                                                        | `'absolute'` |


## Events

| Event              | Description                        | Type               |
| ------------------ | ---------------------------------- | ------------------ |
| `ruxtooltipclosed` | Emits when the tooltip has closed. | `CustomEvent<any>` |
| `ruxtooltipopened` | Emits when the tooltip has opened  | `CustomEvent<any>` |


## Methods

### `hide() => Promise<boolean>`

Closes the tooltip and returns false.

#### Returns

Type: `Promise<boolean>`



### `show() => Promise<true>`

Opens the tooltip and returns true.

#### Returns

Type: `Promise<true>`




## Shadow Parts

| Part                  | Description |
| --------------------- | ----------- |
| `"container"`         |             |
| `"trigger-container"` |             |


## CSS Custom Properties

| Name      | Description                      |
| --------- | -------------------------------- |
| `--delay` | how long until the tooltip shows |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
