import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil';
import { html } from 'lit-html';
import { withActions } from '@storybook/addon-actions/decorator';

const Base = (args) => {
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
                .axisLabels="${args.axisLabels}"
                ?ticks-only="${args.ticksOnly}"
                ?strict="${args.strict}"
                name="${args.name}"
            ></rux-slider>
        </div>
    `
}

const WithDualRange = (args, data) => {
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

const WithHorizontalLabel = (args) => {
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
    decorators: [withActions],
}

export const Default = {
    render: Base.bind(),
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

export const Disabled = {
    render: Base.bind(),
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

export const WithHelpText = {
    render: Base.bind(),
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

export const WithErrorText = {
    render: Base.bind(),
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

export const WithAxisLabels = {
    render: Base.bind(),
    name: 'With Axis Labels',

    args: {
        max: 100,
        min: 0,
        value: 50,
        ticksOnly: true,
        axisLabels: ['0', '25', '50', '75', '100'],
    },
}

export const DualRange = {
    render: WithDualRange.bind(),
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

export const HorizontalLabel = {
    render: WithHorizontalLabel.bind(),
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
