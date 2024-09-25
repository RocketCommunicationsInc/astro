import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html, render } from 'lit-html'

const Default = (args) => {
    return html`
        <rux-radio-group
            name="${args.name}"
            label="${args.label}"
            .value="${args.value}"
            ?invalid="${args.invalid}"
            ?required="${args.required}"
            .helpText="${args.helpText}"
            .errorText="${args.errorText}"
        >
            <rux-radio value="one" name="radios">One</rux-radio>
            <rux-radio value="two" name="radios">Two</rux-radio>
            <rux-radio value="three" name="radios">Three</rux-radio>
        </rux-radio-group>
    `
}

const Invalid = (args) => {
    return html`
        <rux-radio-group
            name="radios"
            label="${args.label}"
            .value="${args.value}"
            ?invalid="${args.invalid}"
            ?required="${args.required}"
            .helpText="${args.helpText}"
            .errorText="${args.errorText}"
        >
            <rux-radio value="one" name="radios">One</rux-radio>
            <rux-radio value="two" name="radios">Two</rux-radio>
            <rux-radio value="three" name="radios">Three</rux-radio>
        </rux-radio-group>
    `
}

const Required = (args) => {
    return html`
        <rux-radio-group
            name="radios"
            label="${args.label}"
            .value="${args.value}"
            ?invalid="${args.invalid}"
            ?required="${args.required}"
            .helpText="${args.helpText}"
            .errorText="${args.errorText}"
        >
            <rux-radio value="one" name="radios">One</rux-radio>
            <rux-radio value="two" name="radios">Two</rux-radio>
            <rux-radio value="three" name="radios">Three</rux-radio>
        </rux-radio-group>
    `
}

const WithHelpText = (args) => {
    return html`
        <rux-radio-group
            name="radios"
            label="${args.label}"
            .value="${args.value}"
            ?invalid="${args.invalid}"
            ?required="${args.required}"
            help-text="${args.helpText}"
            .error-text="${args.errorText}"
        >
            <rux-radio value="one" name="radios">One</rux-radio>
            <rux-radio value="two" name="radios">Two</rux-radio>
            <rux-radio value="three" name="radios">Three</rux-radio>
        </rux-radio-group>
    `
}

const WithErrorText = (args) => {
    return html`
        <rux-radio-group
            name="radios"
            label="${args.label}"
            .value="${args.value}"
            ?invalid="${args.invalid}"
            ?required="${args.required}"
            .help-text="${args.helpText}"
            error-text="${args.errorText}"
        >
            <rux-radio value="one" name="radios">One</rux-radio>
            <rux-radio value="two" name="radios">Two</rux-radio>
            <rux-radio value="three" name="radios">Three</rux-radio>
        </rux-radio-group>
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
        <rux-radio-group
            id="left-example"
            name="${args.name}"
            label="${args.label}"
            .value="${args.value}"
            ?invalid="${args.invalid}"
            help-text="${args.helpText}"
            error-text="${args.errorText}"
        >
            <rux-radio value="1">one</rux-radio>
            <rux-radio value="2">two</rux-radio>
            <rux-radio value="3">three</rux-radio>
        </rux-radio-group>
    `
}

export default {
    title: 'Forms/Radio Group',
    component: 'rux-radio-group',

    subcomponents: {
        'Rux Radio': 'rux-radio',
    },

    argTypes: extractArgTypes('rux-radio-group'),

    parameters: {
        actions: {
            handles: ['ruxchange rux-radio-group'],
        },
    },
}

export const Default_ = {
    render: Default.bind(),

    args: {
        name: 'radios',
        label: 'Radio group',
        errorText: '',
        helpText: '',
        invalid: false,
    },

    name: 'Default',
}

export const Invalid_ = {
    render: Invalid.bind(),

    args: {
        name: 'radios',
        label: 'Radio group',
        invalid: true,
        errorText: '',
        helpText: '',
    },

    name: 'Invalid',
}

export const Required_ = {
    render: Required.bind(),

    args: {
        name: 'radios',
        label: 'Radio group',
        required: true,
    },

    name: 'Required',
}

export const WithHelpText_ = {
    render: WithHelpText.bind(),

    args: {
        name: 'radios',
        label: 'Radio group',
        helpText: 'Help text',
        errorText: '',
        invalid: false,
    },

    name: 'With Help Text',
}

export const WithErrorText_ = {
    render: WithErrorText.bind(),

    args: {
        name: 'radios',
        label: 'Radio group',
        errorText: 'Error text',
        helpText: '',
        invalid: false,
    },

    name: 'With Error Text',
}

export const HorizontalLabel_ = {
    render: HorizontalLabel.bind(),
    name: 'Horizontal Label',

    args: {
        name: 'radios',
        label: 'Label',
        errorText: '',
        helpText: '',
        invalid: false,
    },
}
