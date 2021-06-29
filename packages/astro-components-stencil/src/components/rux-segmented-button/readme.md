# Segmented Button

Segmented Buttons allow users to select one item at a time from two to four options. Selecting one option automatically turns off the last selection made. Segmented Buttons are mutually exclusive.

## Guidelines

-   [Astro UXDS: Segmented Button](https://astrouxds.com/ui-components/segmented-button)

### Usage

Pass an Array of segments via the `data` attribute on the Segmented Button custom element. Segment items in the `data` Array must be objects with a `label` string. The first item in the Array will be auto-selected unless another segment item has a `selected` property with a truthy value

### Properties for items within the `data` Array

| Property   | Type    | Default | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------- | ------- | ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `label`    | String  | —       | Yes      | Defines the label for the button segment.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `selected` | Boolean | —       | No       | If true, selects this segment rather than the first segment in the `data` Array on mount. If more than one segment has a truthy `selected` value, the earliest one in the Array will register and the rest are ignored. Note that if the `selected` string property of the parent `rux-segmented-button` takes priority. When the selected segment changes within the component, this property updates with `true` or `false` if selected or not selected, on each segment. |

### Events

| Event Name | Description                                                                                                                                                                                                                                                       |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `change`   | Fires when a button segment is changed. Inspect the Event target to find the `data` and `selected` component properties. See [HTMLElement `change` event on MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) for more information. |

```js
document.addEventListener('change', (e) =>
    console.log('Target element:', e.target)
)
// > Target element: <rux-segmented-button>

document.addEventListener('change', (e) =>
    console.log('Selected Segment:', e.target.selected)
)
// > Selected Segment: Second Segment

document.addEventListener('change', (e) =>
    console.log('Array of Segments:', e.target.data)
)
// > Array of Segments: [{ label: "First Segment", selected: false }, { label: "Second Segment", selected: true }, { label: "Third Segment", selected: false }]
```

<!-- Auto Generated Below -->

## Properties

| Property   | Attribute  | Description | Type                | Default |
| ---------- | ---------- | ----------- | ------------------- | ------- |
| `data`     | --         |             | `SegmentedButton[]` | `[]`    |
| `selected` | `selected` |             | `string`            | `''`    |

## Events

| Event        | Description                                  | Type               |
| ------------ | -------------------------------------------- | ------------------ |
| `rux-change` | Emitted when the value property has changed. | `CustomEvent<any>` |

---

_Built with [StencilJS](https://stenciljs.com/)_
