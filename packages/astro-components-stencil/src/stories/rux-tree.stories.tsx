import { html, render } from 'lit-html'
import { withKnobs } from '@storybook/addon-knobs'
import Readme from '../components/rux-tree/readme.md'

export default {
    title: 'Components/Tree',
    decorators: [withKnobs],
}

export const Tree = () => {
    const treeData = [
        {
            label: 'Tree item 1',
            expanded: true,
            children: [
                {
                    label: 'Tree item 1.1',
                    expanded: true,
                    children: [
                        { label: 'Tree item 1.1.1' },
                        { label: 'Tree item 1.1.2', selected: true },
                        { label: 'Tree item 1.1.3' },
                    ],
                },
                { label: 'Tree item 1.2' },
                {
                    label: 'Tree item 1.3',
                    expanded: false,
                    children: [
                        {
                            label: 'Tree item 1.3.1',
                            children: [
                                { label: 'Tree item 1.1.1' },
                                { label: 'Tree item 1.1.2' },
                                { label: 'Tree item 1.1.3' },
                            ],
                        },
                        {
                            label: 'Tree item 1.3.2',
                            children: [
                                { label: 'Tree item 1.1.1' },
                                { label: 'Tree item 1.1.2' },
                                { label: 'Tree item 1.1.3' },
                            ],
                        },
                        {
                            label: 'Tree item 1.3.3',
                            expanded: true,
                            children: [
                                { label: 'Tree item 1.3.3.1' },
                                { label: 'Tree item 1.3.3.2' },
                                { label: 'Tree item 1.3.3.3' },
                            ],
                        },
                    ],
                },
                {
                    label: 'Tree item 1.4',
                    children: [
                        { label: 'Tree item 1.4.1' },
                        { label: 'Tree item 1.4.2' },
                        { label: 'Tree item 1.4.3' },
                    ],
                },
                { label: 'Tree item 1.5' },
            ],
        },
        {
            label: 'Tree item 2',
            children: [
                { label: 'Tree item 2.1' },
                { label: 'Tree item 2.2' },
                { label: 'Tree item 2.3' },
            ],
        },
        {
            label: 'Tree item 3',
        },
    ]

    return html`
        <style>
            .container {
                padding: 1rem 10%;
                display: flex;
                justify-content: center;
            }

            rux-tree {
                width: 18rem;
                margin: 1rem;
            }
        </style>
        <div class="container">
            <rux-tree>
                ${treeData.map(
                    (node) => html`
                        <rux-tree-node .expanded=${node.expanded}>
                            ${node.label}
                            ${node.children?.map(
                                (child) => html`
                                    <rux-tree-node
                                        .expanded=${child.expanded}
                                        .selected=${child.selected}
                                        slot="node"
                                    >
                                        ${child.label}
                                        ${child.children?.map(
                                            (grandchild) => html`
                                                <rux-tree-node
                                                    .expanded=${grandchild.expanded}
                                                    .selected=${grandchild.selected}
                                                    slot="node"
                                                >
                                                    ${grandchild.label}
                                                    ${grandchild.children?.map(
                                                        (grandchild) => html`
                                                            <rux-tree-node
                                                                .expanded=${grandchild.expanded}
                                                                .selected=${grandchild.selected}
                                                                slot="node"
                                                            >
                                                                ${grandchild.label}
                                                            </rux-tree-node>
                                                        `
                                                    )}
                                                </rux-tree-node>
                                            `
                                        )}
                                    </rux-tree-node>
                                `
                            )}
                        </rux-tree-node>
                    `
                )}
            </rux-tree>
        </div>
    `
}
Tree.story = {
    name: 'Tree',

    parameters: {
        readme: {
            sidebar: Readme,
        },
    },
}
export const TreeWithStatus = () => {
    const treeData = [
        {
            label: 'Tree item 1',
            status: 'normal',
            children: [
                {
                    label: 'Tree item 1.1',
                },
                { label: 'Tree item 1.2' },
                {
                    label: 'Tree item 1.3',
                },
            ],
        },
        {
            label: 'Tree item 2',
            status: 'standby',
        },
        {
            label: 'Tree item 3',
            children: [
                { label: 'Tree item 3.1', status: 'off' },
                { label: 'Tree item 3.2', status: 'critical' },
                { label: 'Tree item 3.3', status: 'normal' },
            ],
        },
        {
            label: 'Tree item 4',
            status: 'caution',
            children: [
                { label: 'Tree item 4.1', status: 'caution' },
                { label: 'Tree item 4.2', status: 'normal' },
            ],
        },
    ]
    return html`
        <style>
            .container {
                padding: 1rem 10%;
                display: flex;
                justify-content: center;
            }

            rux-tree {
                width: 18rem;
                margin: 1rem;
            }
        </style>
        <div class="container">
            <rux-tree>
                ${treeData.map(
                    (node) => html`
                        <rux-tree-node>
                            <rux-status status="${node.status}"></rux-status>
                            ${node.label}
                            ${node.children?.map(
                                (child) => html`
                                    <rux-tree-node
                                        .expanded=${child.expanded}
                                        .selected=${child.selected}
                                        slot="node"
                                    >
                                        <rux-status
                                            status="${child.status}"
                                        ></rux-status>
                                        ${child.label}
                                        ${child.children?.map(
                                            (grandchild) => html`
                                                <rux-tree-node
                                                    .expanded=${grandchild.expanded}
                                                    .selected=${grandchild.selected}
                                                    slot="node"
                                                >
                                                    <rux-status
                                                        status="${grandchild.status}"
                                                    ></rux-status>
                                                    ${grandchild.label}
                                                    ${grandchild.children?.map(
                                                        (grandchild) => html`
                                                            <rux-tree-node
                                                                .expanded=${grandchild.expanded}
                                                                .selected=${grandchild.selected}
                                                                slot="node"
                                                            >
                                                                <rux-status
                                                                    status="${grandchild.status}"
                                                                ></rux-status>
                                                                ${grandchild.label}
                                                            </rux-tree-node>
                                                        `
                                                    )}
                                                </rux-tree-node>
                                            `
                                        )}
                                    </rux-tree-node>
                                `
                            )}
                        </rux-tree-node>
                    `
                )}
            </rux-tree>
        </div>
    `
}

TreeWithStatus.story = {
    name: 'Tree (with Status)',

    parameters: {
        readme: {
            sidebar: Readme,
        },
    },
}
