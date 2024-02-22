import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html, render } from 'lit-html'

const Default = (args) => {
    return html`
        <rux-checkbox
            ?disabled="${args.disabled}"
            ?checked="${args.checked}"
            ?indeterminate="${args.indeterminate}"
            .helpText="${args.helpText}"
            name="${args.name}"
            .value="${args.value}"
            label="${args.label}"
            >Checkbox Label</rux-checkbox
        >
    `
}

const Checked = (args) => {
    return html`
        <rux-checkbox
            ?disabled="${args.disabled}"
            ?checked="${args.checked}"
            ?indeterminate="${args.indeterminate}"
            .helpText="${args.helpText}"
            name="${args.name}"
            .value="${args.value}"
            label="${args.label}"
        >
            Checkbox Label
        </rux-checkbox>
    `
}

const Disabled = (args) => {
    return html`
        <rux-checkbox
            ?disabled="${args.disabled}"
            ?checked="${args.checked}"
            ?indeterminate="${args.indeterminate}"
            .helpText="${args.helpText}"
            name="${args.name}"
            .value="${args.value}"
            label="${args.label}"
        >
            Checkbox Label
        </rux-checkbox>
    `
}

const Indeterminate = (args) => {
    return html`
        <rux-checkbox
            ?disabled="${args.disabled}"
            ?checked="${args.checked}"
            ?indeterminate="${args.indeterminate}"
            .helpText="${args.helpText}"
            name="${args.name}"
            .value="${args.value}"
            label="${args.label}"
        >
            Checkbox Label
        </rux-checkbox>
    `
}

const WithHelpText = (args) => {
    return html`
        <rux-checkbox
            ?disabled="${args.disabled}"
            ?checked="${args.checked}"
            ?indeterminate="${args.indeterminate}"
            help-text="${args.helpText}"
            name="${args.name}"
            .value="${args.value}"
            label="${args.label}"
        >
            Checkbox Label
        </rux-checkbox>
    `
}

export default {
    title: 'Forms/Checkbox',
    component: 'rux-checkbox',
    argTypes: extractArgTypes('rux-checkbox'),

    subcomponents: {
        RuxCheckboxGroup: 'rux-checkbox-group',
    },

    parameters: {
        actions: {
            handles: [
                'ruxchange rux-checkbox',
                'ruxinput rux-checkbox',
                'ruxblur rux-checkbox',
            ],
        },
    },
}

export const Default_ = {
    render: Default.bind(),
    name: 'Default',

    args: {
        name: 'checkbox',
        label: 'Checkbox Label',
        checked: false,
        disabled: false,
        helpText: '',
        indeterminate: false,
        value: '',
    },
}

export const Checked_ = {
    render: Checked.bind(),

    args: {
        checked: true,
        label: 'Checkbox Label',
        disabled: false,
        helpText: '',
        indeterminate: false,
        value: '',
        name: '',
    },

    name: 'Checked',
}

export const Disabled_ = {
    render: Disabled.bind(),

    args: {
        checked: false,
        label: 'Checkbox Label',
        disabled: true,
        helpText: '',
        indeterminate: false,
        value: '',
        name: '',
    },

    name: 'Disabled',
}

export const Indeterminate_ = {
    render: Indeterminate.bind(),

    args: {
        indeterminate: true,
        checked: true,
        label: 'Checkbox Label',
        disabled: false,
        helpText: '',
        name: '',
        value: '',
    },

    name: 'Indeterminate',
}

export const WithHelpText_ = {
    render: WithHelpText.bind(),

    args: {
        indeterminate: false,
        checked: false,
        label: 'Checkbox Label',
        disabled: false,
        helpText: 'Help text',
        name: '',
        value: '',
    },

    name: 'With Help Text',
}
