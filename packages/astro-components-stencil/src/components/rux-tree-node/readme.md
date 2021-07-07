# rux-tree-node

<!-- Auto Generated Below -->

## Properties

| Property   | Attribute  | Description             | Type      | Default |
| ---------- | ---------- | ----------------------- | --------- | ------- |
| `expanded` | `expanded` | Sets the expanded state | `boolean` | `false` |
| `selected` | `selected` | Sets the selected state | `boolean` | `false` |

## Events

| Event                    | Description                        | Type                  |
| ------------------------ | ---------------------------------- | --------------------- |
| `rux-tree-node-selected` | Emit when user selects a tree node | `CustomEvent<string>` |

## Methods

### `setExpanded(value: boolean) => Promise<void>`

#### Returns

Type: `Promise<void>`

### `setSelected(value: boolean) => Promise<void>`

#### Returns

Type: `Promise<void>`

## CSS Custom Properties

| Name                         | Description                 |
| ---------------------------- | --------------------------- |
| `--treeAccentColor`          | tree accent color           |
| `--treeExpandedBorderColor`  | tree expanded border color  |
| `--treeHoverBackgroundColor` | tree hover background color |
| `--treeHoverTextColor`       | tree hover text color       |
| `--treeSelectedAccentColor`  | tree selected accent color  |
| `--treeSelectedBorderColor`  | tree selected border color  |

---

_Built with [StencilJS](https://stenciljs.com/)_
