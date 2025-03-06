import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html } from 'lit-html'
import { withActions } from '@storybook/addon-actions/decorator'

const Base = (args) => {
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

export default {
    title: 'Forms/Checkbox',
    component: 'rux-checkbox',
    argTypes: extractArgTypes('rux-checkbox'),
    parameters: {
        actions: {
            handles: [
                'ruxchange rux-checkbox',
                'ruxinput rux-checkbox',
                'ruxblur rux-checkbox',
                'ruxfocus rux-checkbox',
            ],
        },
    },
    decorators: [withActions],
}

export const Default = {
    render: Base.bind(),
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

export const Checked = {
    render: Base.bind(),

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

export const Disabled = {
    render: Base.bind(),

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

export const Indeterminate = {
    render: Base.bind(),

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

export const WithHelpText = {
    render: Base.bind(),

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
