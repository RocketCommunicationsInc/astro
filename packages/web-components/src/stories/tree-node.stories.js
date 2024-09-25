import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html, render } from 'lit-html'

const Default = (args) => {
    return html`
        <rux-tree-node
            ?selected="${args.selected}"
            ?expanded="${args.expanded}"
            aria-level="1"
        >
            Level 1
        </rux-tree-node>
    `
}

const Selected = (args) => {
    return html`
        <rux-tree-node
            ?selected="${args.selected}"
            ?expanded="${args.expanded}"
            aria-level="1"
        >
            Level 1
        </rux-tree-node>
    `
}

const Expanded = (args) => {
    return html`
        <rux-tree-node
            ?selected="${args.selected}"
            ?expanded="${args.expanded}"
            aria-level="1"
        >
            Level 1
            <rux-tree-node slot="node">Level 2</rux-tree-node>
        </rux-tree-node>
    `
}

export default {
    title: 'Components/Tree/Tree Node',
    component: 'rux-tree-node',
    argTypes: extractArgTypes('rux-tree-node'),

    parameters: {
        actions: {
            handles: ['ruxtreenodeselected rux-tree-node'],
        },
    },
}

export const Default_ = {
    render: Default.bind(),
    name: 'Default',

    args: {
        expanded: false,
        selected: false,
    },
}

export const Selected_ = {
    render: Selected.bind(),

    args: {
        expanded: false,
        selected: true,
    },

    name: 'Selected',
}

export const Expanded_ = {
    render: Expanded.bind(),

    args: {
        expanded: true,
        selected: false,
    },

    name: 'Expanded',
}
