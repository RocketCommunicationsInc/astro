import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html } from 'lit-html'

const Base = (args) => {
    return html`
        <div>
            <rux-datetime-picker
                value="${args.value}"
                ?disabled="${args.disabled}"
                error-text="${args.errorText}"
                help-text="${args.helpText}"
                ?invalid="${args.invalid}"
                label="${args.label}"
                name="${args.name}"
                ?required="${args.required}"
                size="${args.size}"
                precision="${args.precision}"
                min-year="${args.minYear}"
                max-year="${args.maxYear}"
                ?julian-format="${args.julianFormat}"
            ></rux-datetime-picker>
        </div>
    `
}

export default {
    title: 'Components/Datetime Picker',
    component: 'rux-datetime-picker',
    argTypes: extractArgTypes('rux-datetime-picker'),
}

export const Default = {
    render: Base.bind(),
    name: 'Default',

    args: {
        value: '',
        disabled: false,
        errorText: '',
        helpText: '',
        invalid: false,
        label: 'Default',
        name: 'default',
        required: false,
        size: 'medium',
        precision: 'ms',
        minYear: '',
        maxYear: '',
        julianFormat: false,
    },
}

export const JulianFormat = {
    render: Base.bind(),

    args: {
        value: '',
        disabled: false,
        errorText: '',
        helpText: '',
        invalid: false,
        label: 'Default',
        name: 'default',
        required: false,
        size: 'medium',
        precision: 'ms',
        minYear: '',
        maxYear: '',
        julianFormat: true,
    },

    name: 'Julian Format',
}
