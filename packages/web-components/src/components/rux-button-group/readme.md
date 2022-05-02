# Grouped Buttons

Common button groupings follow these conventions:

-   Cancel buttons are always presented to the left of actions such as “Submit.”

-   Buttons within the same group should maintain their inherent size. Do not stretch one button to match another’s width.

## Web Component Usage

### 1. Render the Astro Button Group Web Component

```xml
<rux-button-group>
  <rux-button>Button 1</rux-button>
  <rux-button>Button 2</rux-button>
</rux-button-group>
```

By default button group aligns buttons to the left. Alternatively an `h-align` property may be passed to change alignment to `"center"` or `"right"`.

```xml
<rux-button-group h-align="right">
  <rux-button>Button 1</rux-button>
  <rux-button>Button 2</rux-button>
</rux-button-group>
```

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                          | Type                            | Default  |
| -------- | --------- | ---------------------------------------------------- | ------------------------------- | -------- |
| `hAlign` | `h-align` | The horizontal alignment of buttons within the group | `"center" \| "left" \| "right"` | `'left'` |


## Slots

| Slot          | Description                                             |
| ------------- | ------------------------------------------------------- |
| `"(default)"` | Two or more RuxButton components to render in the group |


## Shadow Parts

| Part          | Description              |
| ------------- | ------------------------ |
| `"container"` | the components container |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
