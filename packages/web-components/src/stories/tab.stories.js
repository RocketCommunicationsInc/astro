import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html, render } from 'lit-html'

const Default = (args) => {
    return html`
        <rux-tab
            id="tab1"
            ?disabled=${args.disabled}
            ?selected=${args.selected}
        >
            Tab 1
        </rux-tab>
    `
}

const Disabled = (args) => {
    return html`
        <rux-tab
            id="tab1"
            ?disabled=${args.disabled}
            ?selected=${args.selected}
        >
            Tab 1
        </rux-tab>
    `
}

const Selected = (args) => {
    return html`
        <rux-tab id="tab1" ?disabled=${args.disabled} ?selected=${args.selected}
            >Tab 1</rux-tab
        >
    `
}

export default {
    title: 'Components/Tabs/Tab',
    component: 'rux-tab',

    subcomponents: {
        'Rux Tabs': 'rux-tabs',
    },

    argTypes: extractArgTypes('rux-tab'),
}

export const Default_ = {
    render: Default.bind(),
    name: 'Default',

    args: {
        disabled: false,
        selected: false,
    },
}

export const Disabled_ = {
    render: Disabled.bind(),
    name: 'Disabled',

    args: {
        disabled: true,
        selected: false,
    },
}

export const Selected_ = {
    render: Selected.bind(),
    name: 'Selected',

    args: {
        selected: true,
        disabled: false,
    },
}
