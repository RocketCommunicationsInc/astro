import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html } from 'lit-html'
import { withActions } from '@storybook/addon-actions/decorator'

const Base = (args) => {
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

export default {
    title: 'Forms/Radio',
    component: 'rux-radio',

    subcomponents: {
        RuxRadioGroup: 'rux-radio-group',
    },

    argTypes: extractArgTypes('rux-radio'),

    parameters: {
        actions: {
            handles: ['ruxblur rux-radio'],
        },
    },
    decorators: [withActions],
}

export const Default = {
    render: Base.bind(),
    name: 'Default',

    args: {
        name: 'radios',
        label: 'Radio Label',
        checked: false,
        disabled: false,
        value: '',
    },
}

export const Checked = {
    render: Base.bind(),
    name: 'Checked',

    args: {
        name: 'radios',
        label: 'Radio Label',
        checked: true,
        disabled: false,
        value: '',
    },
}

export const Disabled = {
    render: Base.bind(),

    args: {
        name: 'radios',
        label: 'Radio Label',
        disabled: true,
        checked: false,
        value: '',
    },

    name: 'Disabled',
}
