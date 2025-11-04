import { html } from 'lit-html'
import '../components/rux-textarea/rux-textarea.ts'

const Base = (args) => {
    return html`
        <rux-textarea
            label="${args.label}"
            ?disabled="${args.disabled}"
            error-text="${args.errorText}"
            help-text="${args.helpText}"
            ?invalid="${args.invalid}"
            max-length="${args.maxLength}"
            min-length="${args.minLength}"
            name="${args.name}"
            placeholder="${args.placeholder}"
            ?required="${args.required}"
            rows="${args.rows}"
            value="${args.value}"
            size="${args.size}"
            ?readonly="${args.readonly}"
        ></rux-textarea>
    `
}

export default {
    title: 'Forms/Textarea',
    component: 'rux-textarea',
}

export const Default = {
    render: Base.bind(),
    name: 'Default',
    args: {
        label: 'Textarea label',
        disabled: false,
        errorText: '',
        helpText: '',
        invalid: false,
        maxLength: '',
        minLength: '',
        name: '',
        placeholder: '',
        required: false,
        rows: null,
        size: 'medium',
        value: '',
        readonly: false,
    },
}

export const Small = {
    render: Base.bind(),
    name: 'Small',
    args: {
        label: 'Small textarea',
        size: 'small',
    },
}

export const Large = {
    render: Base.bind(),
    name: 'Large',
    args: {
        label: 'Large textarea',
        size: 'large',
    },
}

export const Disabled = {
    render: Base.bind(),
    name: 'Disabled',
    args: {
        label: 'Disabled textarea',
        disabled: true,
    },
}

export const Required = {
    render: Base.bind(),
    name: 'Required',
    args: {
        label: 'Required textarea',
        required: true,
    },
}

export const HelpText = {
    render: Base.bind(),
    name: 'Help Text',
    args: {
        label: 'Help text',
        helpText: 'Help text',
    },
}

export const Invalid = {
    render: Base.bind(),
    name: 'Invalid',
    args: {
        invalid: true,
        errorText: 'Field is required',
        label: 'Textarea Field',
    },
}

export const Placeholder = {
    render: Base.bind(),
    name: 'Placeholder',
    args: {
        label: 'Placeholder Text',
        placeholder: 'Placeholder',
    },
}
