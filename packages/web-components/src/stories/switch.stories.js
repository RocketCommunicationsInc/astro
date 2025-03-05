import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil';
import { html } from 'lit-html';
import { withActions } from '@storybook/addon-actions/decorator';

const Base = (args) => {
    return html`
        <div style="margin: 3rem auto; max-width: 5rem; text-align: center;">
            <rux-switch
                ?disabled=${args.disabled}
                ?checked=${args.checked}
                .label=${args.label}
                name=${args.name}
                value=${args.value}
            ></rux-switch>
        </div>
    `
}

export default {
    title: 'Components/Switch',
    component: 'rux-switch',
    argTypes: extractArgTypes('rux-switch'),

    parameters: {
        actions: {
            handles: [
                'ruxinput rux-switch',
                'ruxchange rux-switch',
                'ruxblur rux-switch',
            ],
        },
    },
    decorators: [withActions],
}

export const Default = {
    render: Base.bind(),
    name: 'Switch',

    args: {
        checked: false,
        disabled: false,
        label: '',
        name: '',
        value: '',
    },
}

export const On = {
    render: Base.bind(),
    name: 'On',

    args: {
        checked: true,
        disabled: false,
        label: '',
        name: '',
        value: '',
    },
}

export const Disabled = {
    render: Base.bind(),
    name: 'Disabled',

    args: {
        disabled: true,
        checked: false,
        label: '',
        name: '',
        value: '',
    },
}

export const WithLabel = {
    render: Base.bind(),
    name: 'With Label',

    args: {
        label: 'Switch Label',
        checked: false,
        disabled: false,
        name: '',
        value: '',
    },
}
