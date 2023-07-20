# rux-tree-node

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description             | Type      | Default |
| ---------- | ---------- | ----------------------- | --------- | ------- |
| `expanded` | `expanded` | Sets the expanded state | `boolean` | `false` |
| `selected` | `selected` | Sets the selected state | `boolean` | `false` |


## Events

| Event                  | Description                                                                            | Type                  |
| ---------------------- | -------------------------------------------------------------------------------------- | --------------------- |
| `ruxtreenodecollapsed` | Fires when the user collapses a tree node and emits the node's id on the event.detail. | `CustomEvent<string>` |
| `ruxtreenodeexpanded`  | Fires when the user expands a tree node and emits the node's id on the event.detail.   | `CustomEvent<string>` |
| `ruxtreenodeselected`  | Fires when the user selects a tree node and emits the node's id on the event.detail.   | `CustomEvent<string>` |


## Methods

### `setExpanded(value: boolean) => Promise<void>`

Sets the expanded state

#### Returns

Type: `Promise<void>`



### `setSelected(value: boolean) => Promise<void>`

Sets the selected state

#### Returns

Type: `Promise<void>`




## Slots

| Slot          | Description                                  |
| ------------- | -------------------------------------------- |
| `"(default)"` | The parent node content                      |
| `"node"`      | Renders a child node within the current node |
| `"prefix"`    | Renders content before the default slot      |
| `"suffix"`    | Renders content after the default slot       |


## Shadow Parts

| Part          | Description                                  |
| ------------- | -------------------------------------------- |
| `"indicator"` | The opened/closed indicator                  |
| `"node"`      | The individual tree node                     |
| `"text"`      | The area bewteen the prefix and suffix slots |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
