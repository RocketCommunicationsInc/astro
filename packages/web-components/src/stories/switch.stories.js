import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html, render } from 'lit-html'

const Switch = (args) => {
    return html`
        <div style="margin: 3rem auto; max-width: 5rem; text-align: center;">
            <rux-switch
                ?disabled=${args.disabled}
                ?checked=${args.checked}
                label=${args.label}
                name=${args.name}
                value=${args.value}
            ></rux-switch>
        </div>
    `
}

const On = (args) => {
    return html`
        <div style="margin: 3rem auto; max-width: 5rem; text-align: center;">
            <rux-switch
                ?disabled=${args.disabled}
                ?checked=${args.checked}
                .label=${args.label}
            ></rux-switch>
        </div>
    `
}

const Disabled = (args) => {
    return html`
        <div style="margin: 3rem auto; max-width: 5rem; text-align: center;">
            <rux-switch
                ?disabled=${args.disabled}
                ?checked=${args.checked}
                name=${args.name}
                value=${args.value}
                .label=${args.label}
            ></rux-switch>
        </div>
    `
}

const WithLabel = (args) => {
    return html`
        <div style="margin: 3rem auto; max-width: 5rem; text-align: center;">
            <rux-switch
                ?disabled=${args.disabled}
                ?checked=${args.checked}
                .label=${args.label}
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
}

export const Switch_ = {
    render: Switch.bind(),
    name: 'Switch',

    args: {
        checked: false,
        disabled: false,
        label: '',
        name: '',
        value: '',
    },
}

export const On_ = {
    render: On.bind(),
    name: 'On',

    args: {
        checked: true,
    },
}

export const Disabled_ = {
    render: Disabled.bind(),
    name: 'Disabled',

    args: {
        disabled: true,
        checked: false,
        label: '',
        name: '',
        value: '',
    },
}

export const WithLabel_ = {
    render: WithLabel.bind(),
    name: 'With Label',

    args: {
        label: 'Switch Label',
    },
}
