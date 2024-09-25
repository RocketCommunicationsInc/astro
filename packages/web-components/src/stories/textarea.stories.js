import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html, render } from 'lit-html'

const Default = (args) => {
    return html`
        <rux-textarea
            label="${args.label}"
            ?disabled="${args.disabled}"
            error-text="${args.errorText}"
            help-text="${args.helpText}"
            ?invalid="${args.invalid}"
            max-length="${args.maxLength}"
            min-length="${args.minLength}"
            .name="${args.name}"
            .placeholder="${args.placeholder}"
            ?required="${args.required}"
            rows="${args.rows}"
            ?small="${args.small}"
            value="${args.value}"
            type="${args.type}"
            .size="${args.size}"
        ></rux-textarea>
    `
}

const Small = (args) => {
    return html`
        <rux-textarea
            label="${args.label}"
            ?disabled="${args.disabled}"
            error-text="${args.errorText}"
            help-text="${args.helpText}"
            ?invalid="${args.invalid}"
            max-length="${args.maxLength}"
            min-length="${args.minLength}"
            .name="${args.name}"
            .placeholder="${args.placeholder}"
            ?required="${args.required}"
            .rows="${args.rows}"
            ?small="${args.small}"
            .value="${args.value}"
            .type="${args.type}"
            .size="${args.size}"
        ></rux-textarea>
    `
}

const Large = (args) => {
    return html`
        <rux-textarea
            label="${args.label}"
            ?disabled="${args.disabled}"
            error-text="${args.errorText}"
            help-text="${args.helpText}"
            ?invalid="${args.invalid}"
            max-length="${args.maxLength}"
            min-length="${args.minLength}"
            .name="${args.name}"
            .placeholder="${args.placeholder}"
            ?required="${args.required}"
            .rows="${args.rows}"
            ?small="${args.small}"
            .value="${args.value}"
            .type="${args.type}"
            .size="${args.size}"
        ></rux-textarea>
    `
}

const Disabled = (args) => {
    return html`
        <rux-textarea
            label="${args.label}"
            ?disabled="${args.disabled}"
            error-text="${args.errorText}"
            help-text="${args.helpText}"
            ?invalid="${args.invalid}"
            max-length="${args.maxLength}"
            min-length="${args.minLength}"
            .name="${args.name}"
            .placeholder="${args.placeholder}"
            ?required="${args.required}"
            rows="${args.rows}"
            ?small="${args.small}"
            .value="${args.value}"
            .type="${args.type}"
            .size="${args.size}"
        ></rux-textarea>
    `
}

const Required = (args) => {
    return html`
        <rux-textarea
            label="${args.label}"
            ?disabled="${args.disabled}"
            error-text="${args.errorText}"
            help-text="${args.helpText}"
            ?invalid="${args.invalid}"
            max-length="${args.maxLength}"
            min-length="${args.minLength}"
            .name="${args.name}"
            .placeholder="${args.placeholder}"
            ?required="${args.required}"
            .rows="${args.rows}"
            ?small="${args.small}"
            .value="${args.value}"
            .type="${args.type}"
            .size="${args.size}"
        ></rux-textarea>
    `
}

const HelpText = (args) => {
    return html`
        <rux-textarea
            label="${args.label}"
            ?disabled="${args.disabled}"
            error-text="${args.errorText}"
            help-text="${args.helpText}"
            ?invalid="${args.invalid}"
            max-length="${args.maxLength}"
            min-length="${args.minLength}"
            .name="${args.name}"
            .placeholder="${args.placeholder}"
            ?required="${args.required}"
            rows="${args.rows}"
            ?small="${args.small}"
            value="${args.value}"
            type="${args.type}"
            .size="${args.size}"
        ></rux-textarea>
    `
}

const Invalid = (args) => {
    return html`
        <rux-textarea
            label="${args.label}"
            ?disabled="${args.disabled}"
            error-text="${args.errorText}"
            help-text="${args.helpText}"
            ?invalid="${args.invalid}"
            max-length="${args.maxLength}"
            min-length="${args.minLength}"
            .name="${args.name}"
            .placeholder="${args.placeholder}"
            ?required="${args.required}"
            rows="${args.rows}"
            ?small="${args.small}"
            value="${args.value}"
            type="${args.type}"
            .size="${args.size}"
        ></rux-textarea>
    `
}

const Placeholder = (args) => {
    return html`
        <rux-textarea
            label="${args.label}"
            ?disabled="${args.disabled}"
            error-text="${args.errorText}"
            help-text="${args.helpText}"
            ?invalid="${args.invalid}"
            max-length="${args.maxLength}"
            min-length="${args.minLength}"
            .name="${args.name}"
            placeholder="${args.placeholder}"
            ?required="${args.required}"
            rows="${args.rows}"
            ?small="${args.small}"
            value="${args.value}"
            type="${args.type}"
            .size="${args.size}"
        ></rux-textarea>
    `
}

const HorizontalLabel = (args) => {
    return html`
        <style>
            #left-example::part(form-field) {
                flex-direction: row;
            }
            #left-example::part(label) {
                margin-right: var(--spacing-2);
            }
        </style>
        <rux-textarea
            id="left-example"
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
            ?small="${args.small}"
            value="${args.value}"
            type="${args.type}"
        ></rux-textarea>
    `
}

export default {
    title: 'Forms/Textarea',
    component: 'rux-textarea',
    argTypes: extractArgTypes('rux-textarea'),

    parameters: {
        actions: {
            handles: [
                'ruxinput rux-textarea',
                'ruxchange rux-textarea',
                'ruxblur rux-textarea',
            ],
        },
    },
}

export const Default_ = {
    render: Default.bind(),
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
        small: false,
        value: '',
    },
}

export const Small_ = {
    render: Small.bind(),
    name: 'Small',

    args: {
        label: 'Small textarea',
        size: 'small',
    },
}

export const Large_ = {
    render: Large.bind(),
    name: 'Large',

    args: {
        label: 'Large textarea',
        size: 'large',
    },
}

export const Disabled_ = {
    render: Disabled.bind(),
    name: 'Disabled',

    args: {
        label: 'Disabled textarea',
        disabled: true,
        errorText: '',
        helpText: '',
        invalid: false,
        maxLength: '',
        minLength: '',
        name: '',
        placeholder: '',
        required: false,
        rows: null,
        small: false,
        value: '',
    },
}

export const Required_ = {
    render: Required.bind(),
    name: 'Required',

    args: {
        label: 'Required textarea',
        required: true,
    },
}

export const HelpText_ = {
    render: HelpText.bind(),
    name: 'Help Text',

    args: {
        label: 'Help text',
        helpText: 'Help text',
        disabled: false,
        errorText: '',
        invalid: false,
        maxLength: '',
        minLength: '',
        name: '',
        placeholder: '',
        required: false,
        rows: null,
        small: false,
        value: '',
    },
}

export const Invalid_ = {
    render: Invalid.bind(),
    name: 'Invalid',

    args: {
        invalid: true,
        errorText: 'Field is required',
        label: 'Textarea Field',
        helpText: '',
        disabled: false,
        maxLength: '',
        minLength: '',
        name: '',
        placeholder: '',
        required: false,
        rows: null,
        small: false,
        value: '',
    },
}

export const Placeholder_ = {
    render: Placeholder.bind(),
    name: 'Placeholder',

    args: {
        label: 'Placeholder Text',
        placeholder: 'Placeholder',
        invalid: false,
        errorText: '',
        helpText: '',
        disabled: false,
        maxLength: '',
        minLength: '',
        name: '',
        required: false,
        rows: null,
        small: false,
        value: '',
    },
}

export const HorizontalLabel_ = {
    render: HorizontalLabel.bind(),
    name: 'Horizontal Label',

    args: {
        label: 'Label',
        placeholder: 'Text input',
        invalid: false,
        errorText: '',
        helpText: '',
        disabled: false,
        maxLength: '',
        minLength: '',
        name: '',
        required: false,
        rows: null,
        small: false,
        value: '',
    },
}
