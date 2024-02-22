import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html, render } from 'lit-html'

const Default = (args) => {
    return html`
        <rux-radio
            name="${args.name}"
            ?checked=${args.checked}
            ?disabled=${args.disabled}
            .value="${args.value}"
            label="${args.label}"
        >
            ${args.label}
        </rux-radio>
    `
}

const Checked = (args) => {
    return html`
        <rux-radio
            name="${args.name}"
            ?checked=${args.checked}
            ?disabled=${args.disabled}
            value="${args.value}"
            >${args.label}</rux-radio
        >
    `
}

const Disabled = (args) => {
    return html`
        <rux-radio
            .name="${args.name}"
            ?checked=${args.checked}
            ?disabled=${args.disabled}
            .value="${args.value}"
            .label="${args.label}"
            >${args.label}</rux-radio
        >
    `
}

export default {
    title: 'Forms/Radio',
    component: 'rux-radio',

    subcomponents: {
        RuxRadioGroup: 'rux-radio-group',
    },

    argTypes: extractArgTypes('rux-radio'),

    parameters: {
        actions: {
            handles: ['ruxchange rux-radio', 'ruxblur rux-radio'],
        },
    },
}

export const Default_ = {
    render: Default.bind(),
    name: 'Default',

    args: {
        name: 'radios',
        label: 'Radio Label',
        checked: false,
        disabled: false,
        value: '',
    },
}

export const Checked_ = {
    render: Checked.bind(),
    name: 'Checked',

    args: {
        name: 'radios',
        label: 'Radio Label',
        checked: true,
        disabled: false,
        value: '',
    },
}

export const Disabled_ = {
    render: Disabled.bind(),

    args: {
        name: 'radios',
        label: 'Radio Label',
        disabled: true,
        checked: false,
        value: '',
    },

    name: 'Disabled',
}
