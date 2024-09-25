import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html, render } from 'lit-html'

const Default = (args) => {
    return html`
        <rux-checkbox-group
            name="checkboxes"
            label="${args.label}"
            .value="${args.value}"
            ?invalid="${args.invalid}"
            ?required="${args.required}"
            .helpText="${args.helpText}"
            .errorText="${args.errorText}"
        >
            <rux-checkbox value="one" name="checkboxes">One</rux-checkbox>
            <rux-checkbox value="two" name="checkboxes">Two</rux-checkbox>
            <rux-checkbox value="three" name="checkboxes">Three</rux-checkbox>
        </rux-checkbox-group>
    `
}

const Invalid = (args) => {
    return html`
        <rux-checkbox-group
            name="checkboxes"
            label="${args.label}"
            .value="${args.value}"
            ?invalid="${args.invalid}"
            ?required="${args.required}"
            .helpText="${args.helpText}"
            .errorText="${args.errorText}"
        >
            <rux-checkbox value="one" name="checkboxes">One</rux-checkbox>
            <rux-checkbox value="two" name="checkboxes">Two</rux-checkbox>
            <rux-checkbox value="three" name="checkboxes">Three</rux-checkbox>
        </rux-checkbox-group>
    `
}

const Required = (args) => {
    return html`
        <rux-checkbox-group
            name="checkboxes"
            label="${args.label}"
            .value="${args.value}"
            ?invalid="${args.invalid}"
            ?required="${args.required}"
            .helpText="${args.helpText}"
            .errorText="${args.errorText}"
        >
            <rux-checkbox value="one" name="checkboxes">One</rux-checkbox>
            <rux-checkbox value="two" name="checkboxes">Two</rux-checkbox>
            <rux-checkbox value="three" name="checkboxes">Three</rux-checkbox>
        </rux-checkbox-group>
    `
}

const WithHelpText = (args) => {
    return html`
        <rux-checkbox-group
            name="checkboxes"
            label="${args.label}"
            .value="${args.value}"
            ?invalid="${args.invalid}"
            ?required="${args.required}"
            help-text="${args.helpText}"
            .errorText="${args.errorText}"
        >
            <rux-checkbox value="one" name="checkboxes">One</rux-checkbox>
            <rux-checkbox value="two" name="checkboxes">Two</rux-checkbox>
            <rux-checkbox value="three" name="checkboxes">Three</rux-checkbox>
        </rux-checkbox-group>
    `
}

const WithErrorText = (args) => {
    return html`
        <rux-checkbox-group
            name="checkboxes"
            label="${args.label}"
            .value="${args.value}"
            ?invalid="${args.invalid}"
            ?required="${args.required}"
            .helpText="${args.helpText}"
            error-text="${args.errorText}"
        >
            <rux-checkbox value="one" name="checkboxes">One</rux-checkbox>
            <rux-checkbox value="two" name="checkboxes">Two</rux-checkbox>
            <rux-checkbox value="three" name="checkboxes">Three</rux-checkbox>
        </rux-checkbox-group>
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
        <rux-checkbox-group
            id="left-example"
            label="${args.label}"
            .value="${args.value}"
            ?invalid="${args.invalid}"
            .helpText="${args.helpText}"
            error-text="${args.errorText}"
        >
            <rux-checkbox value="1">one</rux-checkbox>
            <rux-checkbox value="2">two</rux-checkbox>
            <rux-checkbox value="3">three</rux-checkbox>
        </rux-checkbox-group>
    `
}

export default {
    title: 'Forms/Checkbox Group',
    component: 'rux-checkbox-group',

    subcomponents: {
        RuxCheckbox: 'rux-checkbox',
    },

    argTypes: extractArgTypes('rux-checkbox-group'),
}

export const Default_ = {
    render: Default.bind(),

    args: {
        label: 'Checkbox group',
        errorText: '',
        helpText: '',
        invalid: false,
    },

    name: 'Default',
}

export const Invalid_ = {
    render: Invalid.bind(),

    args: {
        label: 'Checkbox group',
        invalid: true,
        errorText: '',
        helpText: '',
    },

    name: 'Invalid',
}

export const Required_ = {
    render: Required.bind(),

    args: {
        name: 'checkboxes',
        label: 'Checkbox group',
        required: true,
    },

    name: 'Required',
}

export const WithHelpText_ = {
    render: WithHelpText.bind(),

    args: {
        label: 'Checkbox group',
        helpText: 'Help text',
        errorText: '',
        invalid: false,
    },

    name: 'With Help Text',
}

export const WithErrorText_ = {
    render: WithErrorText.bind(),

    args: {
        label: 'Checkbox group',
        errorText: 'Error text',
        helpText: '',
        invalid: true,
    },

    name: 'With Error Text',
}

export const HorizontalLabel_ = {
    render: HorizontalLabel.bind(),
    name: 'Horizontal Label',

    args: {
        label: 'Label',
        invalid: false,
        errorText: '',
        helpText: '',
    },
}
