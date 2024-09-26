import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil';
import { html } from 'lit-html';

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
                .errorText="${args.errorText}"
                .helpText="${args.helpText}"
                name="${args.name}"
                size="${args.size}"
                ?multiple="${args.multiple}"
            >
                <rux-option
                    value=""
                    selected
                    label="Select an option"
                ></rux-option>
                <rux-option value="1.1" label="Option 1.1"></rux-option>
                <rux-option value="1.2" label="Option 1.2"></rux-option>
                <rux-option value="1.3" label="Option 1.3"></rux-option>
                <rux-option
                    value="1.4"
                    disabled
                    label="Option 1.4 (disabled)"
                ></rux-option>
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
            <rux-select
                ?disabled="${args.disabled}"
                ?required="${args.required}"
                ?invalid="${args.invalid}"
                label="${args.label}"
                input-id="${args.inputId}"
                label-id="${args.labelId}"
                .errorText="${args.errorText}"
                .helpText="${args.helpText}"
                name="${args.name}"
                size="${args.size}"
                ?multiple="${args.multiple}"
            >
                <rux-option
                    value=""
                    label="Select an option"
                    selected
                ></rux-option>
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
                    <rux-option
                        value="2.4"
                        disabled
                        label="Option 2.4 (disabled)"
                    ></rux-option>
                </rux-option-group>
                <rux-option value="3.1" label="Option 3.1"></rux-option>
            </rux-select>
        </div>
    `
}

const Base_2 = (args) => {
    return html`
        <div style="width: 200px; margin: 0 auto;">
            <rux-select
                ?disabled="${args.disabled}"
                ?required="${args.required}"
                ?invalid="${args.invalid}"
                label="${args.label}"
                input-id="${args.inputId}"
                label-id="${args.labelId}"
                .errorText="${args.errorText}"
                .helpText="${args.helpText}"
                .name="${args.name}"
                size="${args.size}"
                ?multiple="${args.multiple}"
            >
                <rux-option
                    value=""
                    selected
                    label="Select an option"
                ></rux-option>
                <rux-option value="1.1" label="Option 1.1"></rux-option>
                <rux-option value="1.2" label="Option 1.2"></rux-option>
                <rux-option value="1.3" label="Option 1.3"></rux-option>
                <rux-option value="1.4" label="Option 1.4"></rux-option>
            </rux-select>
        </div>
    `
}

const WithMultiple = (args) => {
    return html`
        <div style="width: 200px; margin: 0 auto;">
            <rux-select
                ?disabled="${args.disabled}"
                ?required="${args.required}"
                ?invalid="${args.invalid}"
                label="${args.label}"
                input-id="${args.inputId}"
                label-id="${args.labelId}"
                .error-text="${args.errorText}"
                help-text="${args.helpText}"
                ?multiple="${args.multiple}"
                size="${args.size}"
            >
                <rux-option value="1.1" label="Option 1.1"></rux-option>
                <rux-option value="1.2" label="Option 1.2"></rux-option>
                <rux-option value="1.3" label="Option 1.3"></rux-option>
                <rux-option value="1.4" label="Option 1.4"></rux-option>
                <rux-option
                    value="1.5"
                    disabled
                    label="Option 1.5 (disabled)"
                ></rux-option>
            </rux-select>
        </div>
    `
}

const WithMultipleWithOptionGroups = (args) => {
    return html`
        <div style="width: 200px; margin: 0 auto;">
            <rux-select
                ?disabled="${args.disabled}"
                ?required="${args.required}"
                ?invalid="${args.invalid}"
                label="${args.label}"
                input-id="${args.inputId}"
                label-id="${args.labelId}"
                .error-text="${args.errorText}"
                help-text="${args.helpText}"
                ?multiple="${args.multiple}"
                size="${args.size}"
            >
                <rux-option value="" label="Select Option"></rux-option>
                <rux-option-group label="Option 1">
                    <rux-option value="1.1" label="Option 1.1"></rux-option>
                    <rux-option value="1.2" label="Option 1.2"></rux-option>
                    <rux-option value="1.3" label="Option 1.3"></rux-option>
                    <rux-option value="1.4" label="Option 1.4"></rux-option>
                    <rux-option value="1.5" label="Option 1.5"></rux-option>
                </rux-option-group>
                <rux-option-group label="Option 2">
                    <rux-option value="2.1" label="Option 2.1"></rux-option>
                    <rux-option value="2.2" label="Option 2.2"></rux-option>
                    <rux-option value="2.3" label="Option 2.3"></rux-option>
                    <rux-option value="2.4" label="Option 2.4"></rux-option>
                    <rux-option
                        value="2.5"
                        disabled
                        label="Option 2.5 (disabled)"
                    ></rux-option>
                </rux-option-group>
            </rux-select>
        </div>
    `
}

const WithInline = (args) => {
    return html`
        <div style="width: 200px; margin: 0 auto;">
            <rux-select ?inline="${args.inline}">
                <rux-option value="" label="Select Option"></rux-option>
                <rux-option value="2.1" label="Option 2.1"></rux-option>
                <rux-option value="2.2" label="Option 2.2"></rux-option>
                <rux-option value="2.3" label="Option 2.3"></rux-option>
                <rux-option value="2.4" label="Option 2.4"></rux-option>
                <rux-option
                    value="2.5"
                    disabled
                    label="Option 2.5 (disabled)"
                ></rux-option>
            </rux-select>
        </div>
    `
}

const WidthExample = () => {
    return html`
        <style>
            rux-select::part(select) {
                width: inherit;
            }
        </style>
        <rux-select>
            <rux-option value="" label="Select Option"></rux-option>
            <rux-option value="2.1" label="Option 2.1"></rux-option>
            <rux-option value="2.2" label="Option 2.2.2.2.2"></rux-option>
            <rux-option value="2.3" label="Option 2.3"></rux-option>
            <rux-option value="2.4" label="Option 2.4"></rux-option>
        </rux-select>
    `
}

export default {
    title: 'Forms/Select Menu',
    component: 'rux-select',
    argTypes: extractArgTypes('rux-select'),

    subcomponents: {
        RuxOptionGroup: 'rux-option-group',
        RuxOption: 'rux-option',
    },

    parameters: {
        actions: {
            handles: ['ruxchange rux-select', 'ruxblur rux-select'],
        },
    },
}

export const Default = {
    render: Base.bind(),

    args: {
        label: 'Select Menu',
        inputId: '1',
        labelId: '1',
        disabled: false,
        errorText: '',
        helpText: '',
        invalid: false,
        name: 'default',
        required: false,
        size: 'medium',
        multiple: false,
    },

    argTypes: {
        value: {
            table: {
                disable: true,
            },
        },
    },

    name: 'Select Menu',
}

export const Sizes = {
    render: WithSizes.bind(),

    argTypes: {
        value: {
            table: {
                disable: true,
            },
        },

        label: {
            table: {
                disable: true,
            },
        },

        invalid: {
            table: {
                disable: true,
            },
        },

        inputId: {
            table: {
                disable: true,
            },
        },

        labelId: {
            table: {
                disable: true,
            },
        },

        errorText: {
            table: {
                disable: true,
            },
        },

        helpText: {
            table: {
                disable: true,
            },
        },

        disabled: {
            table: {
                disable: true,
            },
        },

        name: {
            table: {
                disable: true,
            },
        },

        required: {
            table: {
                disable: true,
            },
        },

        size: {
            table: {
                disable: true,
            },
        },

        multiple: {
            table: {
                disable: true,
            },
        },
    },

    name: 'Sizes',
}

export const WithOptionGroups = {
    render: OptionGroups.bind(),

    args: {
        label: 'With option groups',
        inputId: '1',
        labelId: '1',
        disabled: false,
        errorText: '',
        helpText: '',
        invalid: false,
        name: '',
        required: false,
        size: 'medium',
        multiple: false,
    },

    argTypes: {
        value: {
            table: {
                disable: true,
            },
        },
    },

    name: 'With Option Groups',
}

export const Disabled = {
    render: Base_2.bind(),

    args: {
        label: 'Disabled Select Menu',
        disabled: true,
        inputId: '1',
        labelId: '1',
        errorText: '',
        helpText: '',
        invalid: false,
        name: '',
        required: false,
        size: 'medium',
        multiple: false,
    },

    argTypes: {
        value: {
            table: {
                disable: true,
            },
        },
    },

    name: 'Disabled',
}

export const Invalid = {
    render: Base_2.bind(),

    args: {
        label: 'Invalid Select Menu',
        invalid: true,
        inputId: '1',
        labelId: '1',
        errorText: '',
        helpText: '',
        disabled: false,
        name: '',
        required: false,
        size: 'medium',
        multiple: false,
    },

    argTypes: {
        value: {
            table: {
                disable: true,
            },
        },
    },

    name: 'Invalid',
}

export const Required = {
    render: Base_2.bind(),

    args: {
        label: 'Required Select Menu',
        invalid: false,
        inputId: '1',
        labelId: '1',
        errorText: '',
        helpText: '',
        disabled: false,
        name: '',
        required: true,
        size: 'medium',
        multiple: false,
    },

    argTypes: {
        value: {
            table: {
                disable: true,
            },
        },
    },

    name: 'Required',
}

export const WithHelpText = {
    render: Base_2.bind(),

    args: {
        label: 'Select menu',
        inputId: '1',
        labelId: '1',
        helpText: 'Help text',
        disabled: false,
        errorText: '',
        invalid: false,
        name: '',
        required: false,
        size: 'medium',
        multiple: false,
    },

    argTypes: {
        value: {
            table: {
                disable: true,
            },
        },
    },

    name: 'With Help Text',
}

export const WithErrorText = {
    render: Base_2.bind(),

    args: {
        label: 'Select menu',
        inputId: '1',
        labelId: '1',
        errorText: 'Error text',
        disabled: false,
        helpText: '',
        invalid: false,
        name: '',
        required: false,
        size: 'medium',
        multiple: false,
    },

    argTypes: {
        value: {
            table: {
                disable: true,
            },
        },
    },

    name: 'With Error Text',
}

export const Multiple = {
    render: WithMultiple.bind(),

    args: {
        label: 'Select menu',
        inputId: '1',
        labelId: '1',
        helpText: '',
        disabled: false,
        errorText: '',
        invalid: false,
        name: '',
        required: false,
        size: 'medium',
        multiple: true,
    },

    argTypes: {
        value: {
            table: {
                disable: true,
            },
        },
    },

    name: 'Multiple',
}

export const MultipleWithOptionGroups = {
    render: WithMultipleWithOptionGroups.bind(),

    args: {
        label: 'Select menu',
        inputId: '1',
        labelId: '1',
        helpText: '',
        disabled: false,
        errorText: '',
        invalid: false,
        name: '',
        required: false,
        size: 'medium',
        multiple: true,
    },

    argTypes: {
        value: {
            table: {
                disable: true,
            },
        },
    },

    name: 'Multiple With Option Groups',
}

export const Inline = {
    render: WithInline.bind(),

    args: {
        inline: true,
    },

    argTypes: {
        value: {
            table: {
                disable: true,
            },
        },
    },

    name: 'Inline',
}

export const Width = {
    render: WidthExample.bind(),

    argTypes: {
        value: {
            table: {
                disable: true,
            },
        },
    },

    name: 'Width',
}
