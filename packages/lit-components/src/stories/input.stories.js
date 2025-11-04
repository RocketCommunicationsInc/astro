import { html } from 'lit-html'
import '../components/rux-input/rux-input.ts'

const Base = (args) => {
    return html`
        <rux-input
            label="${args.label}"
            ?disabled="${args.disabled}"
            error-text="${args.errorText}"
            ?invalid="${args.invalid}"
            help-text="${args.helpText}"
            min="${args.min}"
            max="${args.max}"
            name="${args.name}"
            placeholder="${args.placeholder}"
            ?required="${args.required}"
            value="${args.value}"
            step="${args.step}"
            type=${args.type}
            ?readonly="${args.readonly}"
            autocomplete="${args.autocomplete}"
            ?spellcheck="${args.spellcheck}"
            size="${args.size}"
            minlength="${args.minlength}"
            maxlength="${args.maxlength}"
        ></rux-input>
    `
}

const Sizes = (args) => {
    return html`
        <rux-input label="Small input" ?disabled="${args.disabled}" size="small" value="${args.value}" type=${args.type}></rux-input>
        <br />
        <rux-input label="Medium input" ?disabled="${args.disabled}" size="medium" value="${args.value}" type=${args.type}></rux-input>
        <br />
        <rux-input label="Large input" ?disabled="${args.disabled}" size="large" value="${args.value}" type=${args.type}></rux-input>
    `
}

const Types = () => {
    return html`
        <style>
            .grid {
                display: grid;
                grid-template-columns: repeat(3, minmax(0, 1fr));
                gap: 2rem;
            }
        </style>
        <div class="grid">
            <rux-input label="Text Input" type="text" placeholder="Text input"></rux-input>
            <rux-input label="Number Input" type="number" placeholder="1"></rux-input>
            <rux-input label="Phone Input" type="tel" placeholder="(999) 999-9999"></rux-input>
            <rux-input label="Password Input" type="password" placeholder="password"></rux-input>
            <rux-input label="Web address" type="url" placeholder="http://example.com"></rux-input>
            <rux-input label="Email" type="email" placeholder="user@example.com"></rux-input>
            <rux-input label="Search" type="search" placeholder="Enter search term"></rux-input>
            <rux-input label="Date" type="date"></rux-input>
            <rux-input label="Datetime-local" type="datetime-local"></rux-input>
            <rux-input label="Time" type="time"></rux-input>
        </div>
    `
}

export default {
    title: 'Forms/Input',
    component: 'rux-input',
}

export const Default = {
    render: Base.bind(),
    name: 'Default',
    args: {
        type: 'text',
        label: 'Input label',
        autocomplete: '',
        disabled: false,
        errorText: '',
        helpText: '',
        invalid: false,
        max: '',
        min: '',
        name: '',
        placeholder: '',
        readonly: false,
        required: false,
        size: 'medium',
        spellcheck: false,
        step: '',
        value: '',
        minlength: '',
        maxlength: '',
    },
}

export const Disabled = {
    render: Base.bind(),
    name: 'Disabled',
    args: {
        type: 'text',
        label: 'Disabled input',
        disabled: true,
        value: '',
    },
}

export const Required = {
    render: Base.bind(),
    name: 'Required',
    args: {
        type: 'text',
        label: 'Required Input',
        required: true,
    },
}

export const WithSizes = {
    render: Sizes.bind(),
    name: 'Sizes',
    args: {
        type: 'text',
    },
}

export const HelpText = {
    render: Base.bind(),
    name: 'Help Text',
    args: {
        type: 'text',
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
        label: 'Input Field',
        type: 'text',
        required: true,
    },
}

export const WithTypes = {
    render: Types.bind(),
    name: 'Types',
}
