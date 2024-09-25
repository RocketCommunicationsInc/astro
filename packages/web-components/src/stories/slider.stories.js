import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html, render } from 'lit-html'

const Default = (args) => {
    return html`
        <div style="padding: 5%">
            <rux-slider
                max="${args.max}"
                min="${args.min}"
                step="${args.step}"
                value="${args.value}"
                ?disabled="${args.disabled}"
                help-text="${args.helpText}"
                error-text="${args.errorText}"
                label="${args.label}"
                name="${args.name}"
            ></rux-slider>
        </div>
    `
}

const Disabled = (args) => {
    return html`
        <div style="padding: 5%">
            <rux-slider
                max="${args.max}"
                min="${args.min}"
                step="${args.step}"
                value="${args.value}"
                ?disabled="${args.disabled}"
                help-text="${args.helpText}"
                error-text="${args.errorText}"
                label="${args.label}"
                name="${args.name}"
            ></rux-slider>
        </div>
    `
}

const WithHelpText = (args) => {
    return html`
        <div style="padding: 5%">
            <rux-slider
                max="${args.max}"
                min="${args.min}"
                step="${args.step}"
                .value="${args.value}"
                ?disabled="${args.disabled}"
                help-text="${args.helpText}"
                error-text="${args.errorText}"
                label="${args.label}"
                name="${args.label}"
            ></rux-slider>
        </div>
    `
}

const WithErrorText = (args) => {
    return html`
        <div style="padding: 5%">
            <rux-slider
                max="${args.max}"
                min="${args.min}"
                step="${args.step}"
                .value="${args.value}"
                ?disabled="${args.disabled}"
                help-text="${args.helpText}"
                error-text="${args.errorText}"
                label="${args.label}"
                name="${args.name}"
            ></rux-slider>
        </div>
    `
}

const WithAxisLabels = (args, data) => {
    return html`
        <div style="padding: 5%">
            <rux-slider
                id="axis-labels"
                max="${args.max}"
                min="${args.min}"
                step="${args.step}"
                .value="${args.value}"
                ?disabled="${args.disabled}"
                help-text="${args.helpText}"
                error-text="${args.errorText}"
                .axisLabels="${args.axisLabels}"
                ?ticks-only="${args.ticksOnly}"
                label="${args.label}"
            ></rux-slider>
        </div>
    `
}

const DualRange = (args, data) => {
    return html`
        <div style="padding: 5%">
            <rux-slider
                id="dual-range"
                max="${args.max}"
                min="${args.min}"
                step="${args.step}"
                value="${args.value}"
                min-val="${args.minVal}"
                ?disabled="${args.disabled}"
                help-text="${args.helpText}"
                error-text="${args.errorText}"
                .axisLabels="${args.axisLabels}"
                ?ticks-only="${args.ticksOnly}"
                label="${args.label}"
                ?strict="${args.strict}"
                name="${args.name}"
            ></rux-slider>
        </div>
    `
}

const HorizontalLabel = (args) => {
    return html`
        <style>
            #left-example::part(form-field) {
                display: flex;
                flex-direction: row;
            }
            #left-example::part(label) {
                margin-right: var(--spacing-2);
            }
        </style>
        <rux-slider
            id="left-example"
            max="${args.max}"
            min="${args.min}"
            step="${args.step}"
            .value="${args.value}"
            ?disabled="${args.disabled}"
            help-text="${args.helpText}"
            error-text="${args.errorText}"
            label="${args.label}"
            name="${args.label}"
        ></rux-slider>
    `
}

export default {
    title: 'Forms/Slider',
    component: 'rux-slider',
    argTypes: extractArgTypes('rux-slider'),

    parameters: {
        actions: {
            handles: [
                'ruxinput rux-slider',
                'ruxblur rux-slider',
                'ruxchange rux-slider',
            ],
        },
    },
}

export const Default_ = {
    render: Default.bind(),
    name: 'Default',

    args: {
        max: 100,
        min: 0,
        value: 50,
        step: 1,
        disabled: false,
        errorText: '',
        helpText: '',
        label: '',
        name: '',
    },
}

export const Disabled_ = {
    render: Disabled.bind(),
    name: 'Disabled',

    args: {
        max: 100,
        min: 0,
        value: 50,
        disabled: true,
        errorText: '',
        helpText: '',
        label: '',
        name: '',
        step: null,
    },
}

export const WithHelpText_ = {
    render: WithHelpText.bind(),
    name: 'With Help Text',

    args: {
        max: 100,
        min: 0,
        value: 50,
        helpText: 'Help text',
        disabled: false,
        errorText: '',
        label: '',
        name: '',
        step: null,
    },
}

export const WithErrorText_ = {
    render: WithErrorText.bind(),
    name: 'With Error Text',

    args: {
        max: 100,
        min: 0,
        value: 50,
        errorText: 'Error text',
        step: null,
        disabled: false,
        helpText: '',
        label: '',
        name: '',
    },
}

export const WithAxisLabels_ = {
    render: WithAxisLabels.bind(),
    name: 'With Axis Labels',

    args: {
        max: 100,
        min: 0,
        value: 50,
        ticksOnly: true,
        axisLabels: ['0', '25', '50', '75', '100'],
    },
}

export const DualRange_ = {
    render: DualRange.bind(),
    name: 'Dual Range',

    args: {
        max: 100,
        min: 0,
        value: 75,
        minVal: 25,
        label: '',
        ticksOnly: false,
        disabled: false,
        strict: false,
        errorText: '',
        helpText: '',
        name: '',
        step: 1,
        axisLabels: ['0', '25', '50', '75', '100'],
    },
}

export const HorizontalLabel_ = {
    render: HorizontalLabel.bind(),
    name: 'Horizontal Label',

    args: {
        max: 100,
        min: 0,
        value: 50,
        errorText: '',
        step: null,
        disabled: false,
        helpText: '',
        label: 'Label',
        name: '',
    },
}
