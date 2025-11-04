import { html } from 'lit-html'
import '../components/rux-slider/rux-slider.ts'

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
            ></rux-slider>
        </div>
    `
}

const WithDualRange = (args) => {
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

export default {
    title: 'Forms/Slider',
    component: 'rux-slider',
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
        label: 'Slider',
        name: '',
        helpText: '',
        errorText: '',
        axisLabels: [],
        ticksOnly: false,
        strict: false,
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
        label: 'Slider',
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
        label: 'Dual Range',
    },
}

export const WithAxisLabels = {
    render: Base.bind(),
    name: 'With Axis Labels',
    args: {
        max: 100,
        min: 0,
        value: 50,
        label: 'With Axis Labels',
        axisLabels: ['0', '25', '50', '75', '100'],
    },
}
