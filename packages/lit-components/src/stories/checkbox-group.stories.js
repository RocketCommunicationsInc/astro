import { html } from 'lit-html'
import '../components/rux-checkbox-group/rux-checkbox-group.ts'
import '../components/rux-checkbox/rux-checkbox.ts'

const Base = (args) => {
    return html`
        <rux-checkbox-group
            name="checkboxes"
            label="${args.label}"
            value="${args.value}"
            ?invalid="${args.invalid}"
            ?required="${args.required}"
            help-text="${args.helpText}"
            error-text="${args.errorText}"
        >
            <rux-checkbox value="one" name="checkboxes">One</rux-checkbox>
            <rux-checkbox value="two" name="checkboxes">Two</rux-checkbox>
            <rux-checkbox value="three" name="checkboxes">Three</rux-checkbox>
        </rux-checkbox-group>
    `
}

export default {
    title: 'Forms/Checkbox Group',
    component: 'rux-checkbox-group',
    subcomponents: {
        RuxCheckbox: 'rux-checkbox',
    },
}

export const Default = {
    render: Base.bind(),
    args: {
        label: 'Checkbox group',
        errorText: '',
        helpText: '',
        invalid: false,
        required: false,
        value: [],
    },
    name: 'Default',
}

export const WithDefaults = {
    render: Base.bind(),
    args: {
        label: 'Checkbox group with defaults',
        value: ['one', 'three'],
    },
    name: 'With Default Values',
}

export const Invalid = {
    render: Base.bind(),
    args: {
        label: 'Invalid checkbox group',
        invalid: true,
        errorText: 'At least one selection required',
    },
    name: 'Invalid',
}

export const WithHelpText = {
    render: Base.bind(),
    args: {
        label: 'Checkbox group',
        helpText: 'Select one or more options',
    },
    name: 'With Help Text',
}
