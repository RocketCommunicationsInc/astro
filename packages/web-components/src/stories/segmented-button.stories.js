import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html, render } from 'lit-html'

const Default = (args) => {
    const segmentButtonArray = [
        { label: 'First item' },
        { label: 'Second item' },
        { label: 'Third item' },
    ]
    document.addEventListener('change', (e) => action('change')(e.target))
    return html`
        <div style="padding: 10vh 5vw; display: flex; justify-content: center;">
            <rux-segmented-button
                .data="${args.data}"
                .selected="${args.selected}"
                .size="${args.size}"
            ></rux-segmented-button>
        </div>
    `
}

const Disabled = (args) => {
    const segmentButtonArray = [
        { label: 'First item' },
        { label: 'Second item' },
        { label: 'Third item' },
    ]
    document.addEventListener('change', (e) => action('change')(e.target))
    return html`
        <div style="padding: 10vh 5vw; display: flex; justify-content: center;">
            <rux-segmented-button
                .data="${args.data}"
                .size="${args.size}"
                ?disabled="${args.disabled}"
            ></rux-segmented-button>
        </div>
    `
}

const Medium = (args) => {
    const segmentButtonArray = [
        { label: 'First item' },
        { label: 'Second item' },
        { label: 'Third item' },
    ]
    document.addEventListener('change', (e) => action('change')(e.target))
    return html`
        <div style="padding: 10vh 5vw; display: flex; justify-content: center;">
            <rux-segmented-button
                .data="${args.data}"
                .size="${args.size}"
            ></rux-segmented-button>
        </div>
    `
}

const Large = (args) => {
    const segmentButtonArray = [
        { label: 'First item' },
        { label: 'Second item' },
        { label: 'Third item' },
    ]
    document.addEventListener('change', (e) => action('change')(e.target))
    return html`
        <div style="padding: 10vh 5vw; display: flex; justify-content: center;">
            <rux-segmented-button
                .data="${args.data}"
                .size="${args.size}"
            ></rux-segmented-button>
        </div>
    `
}

export default {
    title: 'Components/Segmented Button',
    component: 'rux-segmented-button',
    argTypes: extractArgTypes('rux-segmented-button'),

    parameters: {
        actions: {
            handles: ['ruxchange rux-segmented-button'],
        },
    },
}

export const Default_ = {
    render: Default.bind(),

    args: {
        data: [
            {
                label: 'First item',
            },
            {
                label: 'Second item',
                selected: true,
            },
            {
                label: 'Third item',
            },
        ],

        selected: 'Second item',
        size: 'small',
    },

    name: 'Default',
}

export const Disabled_ = {
    render: Disabled.bind(),

    args: {
        data: [
            {
                label: 'First item',
            },
            {
                label: 'Second item',
                selected: true,
            },
            {
                label: 'Third item',
            },
        ],

        selected: 'Second item',
        size: 'small',
        disabled: true,
    },

    name: 'Disabled',
}

export const Medium_ = {
    render: Medium.bind(),

    args: {
        data: [
            {
                label: 'First item',
            },
            {
                label: 'Second item',
                selected: true,
            },
            {
                label: 'Third item',
            },
        ],

        selected: 'Second item',
        size: 'medium',
    },

    name: 'Medium',
}

export const Large_ = {
    render: Large.bind(),

    args: {
        data: [
            {
                label: 'First item',
            },
            {
                label: 'Second item',
                selected: true,
            },
            {
                label: 'Third item',
            },
        ],

        selected: 'Second item',
        size: 'large',
    },

    name: 'Large',
}
