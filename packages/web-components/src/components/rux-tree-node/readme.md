# rux-tree-node

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description             | Type      | Default |
| ---------- | ---------- | ----------------------- | --------- | ------- |
| `expanded` | `expanded` | Sets the expanded state | `boolean` | `false` |
| `selected` | `selected` | Sets the selected state | `boolean` | `false` |


## Events

| Event                 | Description                        | Type                  |
| --------------------- | ---------------------------------- | --------------------- |
| `ruxtreenodeselected` | Emit when user selects a tree node | `CustomEvent<string>` |


## Methods

### `setExpanded(value: boolean) => Promise<void>`

Sets the expanded state

#### Returns

Type: `Promise<void>`



### `setSelected(value: boolean) => Promise<void>`

Sets the selected state

#### Returns

Type: `Promise<void>`




## CSS Custom Properties

| Name                            | Description                              |
| ------------------------------- | ---------------------------------------- |
| `--tree-accent-color`           | [DEPRECATED] tree accent color           |
| `--tree-expanded-border-color`  | [DEPRECATED] tree expanded border color  |
| `--tree-hover-background-color` | [DEPRECATED] tree hover background color |
| `--tree-hover-text-color`       | [DEPRECATED] tree hover text color       |
| `--tree-selected-accent-color`  | [DEPRECATED] tree selected accent color  |
| `--tree-selected-border-color`  | [DEPRECATED] tree selected border color  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
