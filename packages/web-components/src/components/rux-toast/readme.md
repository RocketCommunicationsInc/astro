# rux-toast



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Type                                                                                  | Default     |
| ------------ | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ----------- |
| `closeAfter` | `close-after` | If provided, the toast will automatically close after this amount of time. Accepts value either in milliseconds or seconds (which will be converted to milliseconds internally), between `2000` and `10000`, or `2` and `10`, respectively. Any number provided outside of the `2000`-`10000` range will be ignored in favor of the default 2000ms delay. <br>If `closeAfter` is not passed or if it is given an undefined or `null` value, the toast will stay open until the user closes it. | `number \| undefined`                                                                 | `undefined` |
| `hideClose`  | `hide-close`  | Prevents the user from dismissing the notification. Hides the close icon.                                                                                                                                                                                                                                                                                                                                                                                                                      | `boolean`                                                                             | `false`     |
| `message`    | `message`     | Message for the toast.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `string`                                                                              | `''`        |
| `status`     | `status`      | Allows for a status to be assigned to the toast.                                                                                                                                                                                                                                                                                                                                                                                                                                               | `"caution" \| "critical" \| "normal" \| "off" \| "serious" \| "standby" \| undefined` | `undefined` |


## Events

| Event            | Description                  | Type                   |
| ---------------- | ---------------------------- | ---------------------- |
| `ruxtoastclosed` | Fires when a toast is closed | `CustomEvent<boolean>` |
| `ruxtoastopen`   | Fires when a toast is opened | `CustomEvent<boolean>` |


## Slots

| Slot          | Description         |
| ------------- | ------------------- |
| `"(default)"` | the toast's message |


## Shadow Parts

| Part          | Description                   |
| ------------- | ----------------------------- |
| `"container"` | the toast's container element |
| `"icon"`      | the toast's close icon        |
| `"message"`   | the toast's message           |


## CSS Custom Properties

| Name         | Description           |
| ------------ | --------------------- |
| `--height`   | the Toast's height    |
| `--iconSize` | The cloes icons size. |


## Dependencies

### Used by

 - [rux-toast-stack](../rux-toast-stack)

### Depends on

- [rux-status](../rux-status)
- [rux-icon](../rux-icon)

### Graph
```mermaid
graph TD;
  rux-toast --> rux-status
  rux-toast --> rux-icon
  rux-toast-stack --> rux-toast
  style rux-toast fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
