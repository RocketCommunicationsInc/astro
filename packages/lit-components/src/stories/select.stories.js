import { html } from 'lit-html'
import '../components/rux-select/rux-select.ts'
import '../components/rux-option/rux-option.ts'
import '../components/rux-option-group/rux-option-group.ts'

const Base = (args) => {
    return html`
        <div style="width: 200px; margin: 0 auto;">
            <rux-select
                ?disabled="${args.disabled}"
                ?required="${args.required}"
                ?invalid="${args.invalid}"
                label="${args.label}"
                input-id="${args.inputId}"
                label-id="${args.labelId}"
                error-text="${args.errorText}"
                help-text="${args.helpText}"
                name="${args.name}"
                size="${args.size}"
                ?multiple="${args.multiple}"
            >
                <rux-option value="" selected label="Select an option"></rux-option>
                <rux-option value="1.1" label="Option 1.1"></rux-option>
                <rux-option value="1.2" label="Option 1.2"></rux-option>
                <rux-option value="1.3" label="Option 1.3"></rux-option>
                <rux-option value="1.4" disabled label="Option 1.4 (disabled)"></rux-option>
            </rux-select>
        </div>
    `
}

const WithSizes = () => {
    return html`
        <div style="width: 200px; margin: 0 auto;">
            <rux-select size="small" label="Small">
                <rux-option label="Select an option" value=""></rux-option>
                <rux-option label="Red" value="red"></rux-option>
                <rux-option value="Blue" label="Blue"></rux-option>
                <rux-option value="Green" label="Green"></rux-option>
            </rux-select>
            <br />
            <rux-select size="medium" label="Medium">
                <rux-option label="Select an option" value=""></rux-option>
                <rux-option label="Red" value="red"></rux-option>
                <rux-option value="Blue" label="Blue"></rux-option>
                <rux-option value="Green" label="Green"></rux-option>
            </rux-select>
            <br />
            <rux-select size="large" label="Large">
                <rux-option label="Select an option" value=""></rux-option>
                <rux-option label="Red" value="red"></rux-option>
                <rux-option value="Blue" label="Blue"></rux-option>
                <rux-option value="Green" label="Green"></rux-option>
            </rux-select>
        </div>
    `
}

const OptionGroups = (args) => {
    return html`
        <div style="width: 200px; margin: 0 auto;">
            <rux-select ?disabled="${args.disabled}" label="${args.label}">
                <rux-option value="" label="Select an option" selected></rux-option>
                <rux-option-group label="Group one">
                    <rux-option value="1.1" label="Option 1.1"></rux-option>
                    <rux-option value="1.2" label="Option 1.2"></rux-option>
                    <rux-option value="1.3" label="Option 1.3"></rux-option>
                    <rux-option value="1.4" label="Option 1.4"></rux-option>
                </rux-option-group>
                <rux-option-group label="Group two">
                    <rux-option value="2.1" label="Option 2.1"></rux-option>
                    <rux-option value="2.2" label="Option 2.2"></rux-option>
                    <rux-option value="2.3" label="Option 2.3"></rux-option>
                    <rux-option value="2.4" disabled label="Option 2.4 (disabled)"></rux-option>
                </rux-option-group>
            </rux-select>
        </div>
    `
}

export default {
    title: 'Forms/Select',
    component: 'rux-select',
    subcomponents: {
        RuxOption: 'rux-option',
        RuxOptionGroup: 'rux-option-group',
    },
}

export const Default = {
    render: Base.bind(),
    name: 'Default',
    args: {
        label: 'Select label',
        disabled: false,
        required: false,
        invalid: false,
        inputId: '',
        labelId: '',
        errorText: '',
        helpText: '',
        name: '',
        size: 'medium',
        multiple: false,
    },
}

export const Disabled = {
    render: Base.bind(),
    name: 'Disabled',
    args: {
        label: 'Disabled select',
        disabled: true,
    },
}

export const Invalid = {
    render: Base.bind(),
    name: 'Invalid',
    args: {
        label: 'Invalid select',
        invalid: true,
        errorText: 'Selection is required',
    },
}

export const Sizes = {
    render: WithSizes.bind(),
    name: 'Sizes',
}

export const WithOptionGroups = {
    render: OptionGroups.bind(),
    name: 'With Option Groups',
    args: {
        label: 'Select with groups',
    },
}
