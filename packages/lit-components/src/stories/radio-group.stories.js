import { html } from 'lit-html'
import '../components/rux-radio-group/rux-radio-group.ts'
import '../components/rux-radio/rux-radio.ts'

const Base = (args) => {
    return html`
        <rux-radio-group
            name="${args.name}"
            label="${args.label}"
            value="${args.value}"
            ?invalid="${args.invalid}"
            ?required="${args.required}"
            help-text="${args.helpText}"
            error-text="${args.errorText}"
        >
            <rux-radio value="one" name="radios">One</rux-radio>
            <rux-radio value="two" name="radios">Two</rux-radio>
            <rux-radio value="three" name="radios">Three</rux-radio>
        </rux-radio-group>
    `
}

export default {
    title: 'Forms/Radio Group',
    component: 'rux-radio-group',
    subcomponents: {
        RuxRadio: 'rux-radio',
    },
}

export const Default = {
    render: Base.bind(),
    args: {
        name: 'radios',
        label: 'Radio group',
        errorText: '',
        helpText: '',
        invalid: false,
        required: false,
        value: '',
    },
    name: 'Default',
}

export const WithDefault = {
    render: Base.bind(),
    args: {
        name: 'radios',
        label: 'Radio group with default',
        value: 'two',
    },
    name: 'With Default Value',
}

export const Invalid = {
    render: Base.bind(),
    args: {
        name: 'radios',
        label: 'Invalid radio group',
        invalid: true,
        errorText: 'Selection is required',
    },
    name: 'Invalid',
}

export const WithHelpText = {
    render: Base.bind(),
    args: {
        name: 'radios',
        label: 'Radio group',
        helpText: 'Select one option',
    },
    name: 'With Help Text',
}
