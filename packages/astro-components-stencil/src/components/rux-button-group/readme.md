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

By default button group aligns buttons to the left. Alternatively an `align` property may be passed to change alignment to `"center"` or `"right"`.

```xml
<rux-button-group align="right">
  <rux-button>Button 1</rux-button>
  <rux-button>Button 2</rux-button>
</rux-button-group>
```

## Properties

| Property | Attribute | Description | Type                           | Default |
| -------- | --------- | ----------- | ------------------------------ | ------- |
| `align`  | `align`   |             | `"N/A" \| "right" \| "center"` | `N/A`   |

Read the [Rux-Buttons Readme](/?path=/info/components-buttons--standard-button) for more information.
