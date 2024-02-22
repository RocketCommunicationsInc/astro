import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html, render } from 'lit-html'

const Default = (args) => {
    return html`
        <div style="margin: 3rem auto;  padding: 2rem; text-align: center;">
            <rux-progress
                value="${args.value}"
                .max=${args.max}
                ?hide-label="${args.hideLabel}"
            ></rux-progress>
        </div>
    `
}

const DeterminateProgressMax = (args) => {
    return html`
        <div style="margin: 3rem auto;  padding: 2rem; text-align: center;">
            <rux-progress
                value="${args.value}"
                max=${args.max}
                ?hide-label="${args.hideLabel}"
            ></rux-progress>
        </div>
    `
}

const DeterminateProgressCustomMax = (args) => {
    return html`
        <div style="margin: 3rem auto;  padding: 2rem; text-align: center;">
            <rux-progress
                value="${args.value}"
                max=${args.max}
                ?hide-label="${args.hideLabel}"
            ></rux-progress>
        </div>
    `
}

export default {
    title: 'Components/Progress',
    component: 'rux-progress',
    argTypes: extractArgTypes('rux-progress'),
}

export const Default_ = {
    render: Default.bind(),

    args: {
        value: 1,
        hideLabel: false,
        max: 100,
    },

    name: 'Default',
}

export const DeterminateProgressMax_ = {
    render: DeterminateProgressMax.bind(),

    args: {
        value: 100,
        max: 100,
        hideLabel: false,
    },

    name: 'Determinate Progress Max',
}

export const DeterminateProgressWithCustomMax = {
    render: DeterminateProgressCustomMax.bind(),

    args: {
        value: 1123,
        max: 2400,
        hideLabel: false,
    },

    name: 'Determinate Progress with Custom Max',
}
