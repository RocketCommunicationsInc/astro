# Tree

A Tree navigation element presents a hierarchical set of related items, and allow users to explore and select items within that hierarchy. Each item can have a number of subitems.

An item can be expanded to reveal subitems, if any exist, and collapsed to hide subitems.

## Guidelines

-   [Astro UXDS: Tree](http://www.astrouxds.com/library/tree)

## Usage

A Tree can accept any number of node components through it's default slot.

```html
<rux-tree>
    <rux-tree-node>Item 1</rux-tree-node>
    <rux-tree-node>Item 2</rux-tree-node>
    <rux-tree-node>Item 3</rux-tree-node>
</rux-tree>
```

For rendering tree nodes, use the `rux-tree-node` subcomponent.

### Nesting

To create deeply nested Trees, use the `node` slot on the TreeNode component.

TreeNode has two slots:

1. Default - The parent content
2. Node - Any child nodes

```html
<rux-tree-node>
    I'm the parent
    <rux-tree-node slot="node">I'm a child (1)</rux-tree-node>
    <rux-tree-node slot="node">I'm a child (2)</rux-tree-node>
    <rux-tree-node slot="node">I'm a child (3)</rux-tree-node>
    <rux-tree-node slot="node">
        I'm a child parent
        <rux-tree-node slot="node">I'm a grandchild</rux-tree-node>
    </rux-tree-node>
</rux-tree-node>
```

<!-- Auto Generated Below -->


## Slots

| Slot          | Description            |
| ------------- | ---------------------- |
| `"(default)"` | the nodes of the tree. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
