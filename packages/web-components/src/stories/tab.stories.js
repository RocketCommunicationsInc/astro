import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html } from 'lit-html'

const Base = (args) => {
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

const ActionsExample = (args) => {
    return html`
        <rux-tab id="tab1" ?disabled=${args.disabled} ?selected=${args.selected}
            ><span>Tab 1</span
            ><rux-button
                iconOnly
                icon="close"
                borderless
                slot="actions"
            ></rux-button
        ></rux-tab>
    `
}

export default {
    title: 'Components/Tabs/Tab',
    component: 'rux-tab',
    argTypes: extractArgTypes('rux-tab'),
}

export const Default = {
    render: Base.bind(),
    name: 'Default',

    args: {
        disabled: false,
        selected: false,
    },
}

export const Disabled = {
    render: Base.bind(),
    name: 'Disabled',

    args: {
        disabled: true,
        selected: false,
    },
}

export const Selected = {
    render: Base.bind(),
    name: 'Selected',

    args: {
        selected: true,
        disabled: false,
    },
}

export const Actions = {
    render: ActionsExample.bind(),
    name: 'Actions',

    args: {
        selected: false,
        disabled: false,
    },
}
