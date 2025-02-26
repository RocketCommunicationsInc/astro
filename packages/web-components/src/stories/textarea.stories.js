import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil';
import { html } from 'lit-html';
import { withActions } from '@storybook/addon-actions/decorator';

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
            .name="${args.name}"
            .placeholder="${args.placeholder}"
            ?required="${args.required}"
            rows="${args.rows}"
            ?small="${args.small}"
            value="${args.value}"
            type="${args.type}"
            .size="${args.size}"
            ?readonly="${args.readonly}"
        ></rux-textarea>
    `
}

const HorizontalLabelExample = (args) => {
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
    decorators: [withActions],
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
        readonly: false
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

export const Invalid = {
    render: Base.bind(),
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

export const Placeholder = {
    render: Base.bind(),
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

export const HorizontalLabel = {
    render: HorizontalLabelExample.bind(),
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
