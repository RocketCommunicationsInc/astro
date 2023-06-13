# rux-toast-stack



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                        | Type                   | Default       |
| --------------- | ---------------- | -------------------------------------------------- | ---------------------- | ------------- |
| `animateToasts` | `animate-toasts` | Enables animation on all toasts                    | `boolean \| undefined` | `false`       |
| `maxToasts`     | `max-toasts`     | sets max number of toasts to be displayed in stack | `number`               | `4`           |
| `position`      | `position`       | position of toast stack in viewport                | `string`               | `'top-right'` |


## Methods

### `addToast(props: { [x: string]: any; hasOwnProperty: (arg0: string) => any; }) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Slots

| Slot          | Description         |
| ------------- | ------------------- |
| `"(default)"` | where all toasts go |


## Dependencies

### Used by

 - [rux-toast](../rux-toast)

### Depends on

- [rux-toast](../rux-toast)

### Graph
```mermaid
graph TD;
  rux-toast-stack --> rux-toast
  rux-toast --> rux-toast-stack
  style rux-toast-stack fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
