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


> **[DEPRECATED]** Button Group is deprecated and will be removed in a next major release.
Instead, you should use `flex` or `grid` in combination with our spacing design tokens.

## Properties

| Property | Attribute | Description                                          | Type                            | Default  |
| -------- | --------- | ---------------------------------------------------- | ------------------------------- | -------- |
| `hAlign` | `h-align` | The horizontal alignment of buttons within the group | `"center" \| "left" \| "right"` | `'left'` |


## Shadow Parts

| Part          | Description |
| ------------- | ----------- |
| `"container"` |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
