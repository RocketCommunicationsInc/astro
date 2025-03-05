import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html } from 'lit-html'
import { withActions } from '@storybook/addon-actions/decorator';

const Base = (args) => {
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

const ExpandedExample = (args) => {
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
    decorators: [withActions],
}

export const Default = {
    render: Base.bind(),
    name: 'Default',

    args: {
        expanded: false,
        selected: false,
    },
}

export const Selected = {
    render: Base.bind(),

    args: {
        expanded: false,
        selected: true,
    },

    name: 'Selected',
}

export const Expanded = {
    render: ExpandedExample.bind(),

    args: {
        expanded: true,
        selected: false,
    },

    name: 'Expanded',
}
