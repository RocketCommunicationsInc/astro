import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html, render } from 'lit-html'

const Default = (args) => {
    return html`
        <rux-input
            label="${args.label}"
            .disabled="${args.disabled}"
            .errorText="${args.errorText}"
            ?invalid="${args.invalid}"
            .helpText="${args.helpText}"
            .min="${args.min}"
            .max="${args.max}"
            .name="${args.name}"
            .placeholder="${args.placeholder}"
            ?required="${args.required}"
            .value="${args.value}"
            .step="${args.step}"
            type=${args.type}
            ?readonly="${args.readonly}"
            autocomplete="${args.autocomplete}"
            ?spellcheck="${args.spellcheck}"
            size="${args.size}"
        ></rux-input>
    `
}

const Disabled = (args) => {
    return html`
        <rux-input
            label="${args.label}"
            ?disabled="${args.disabled}"
            .error-text="${args.errorText}"
            ?invalid="${args.invalid}"
            .help-text="${args.helpText}"
            .min="${args.min}"
            .max="${args.max}"
            .name="${args.name}"
            .placeholder="${args.placeholder}"
            ?required="${args.required}"
            .value="${args.value}"
            .step="${args.step}"
            type=${args.type}
            ?readonly="${args.readonly}"
            ?autocomplete="${args.autocomplete}"
            ?spellcheck="${args.spellcheck}"
            size="${args.size}"
        ></rux-input>
    `
}

const Required = (args) => {
    return html`
        <rux-input
            label="${args.label}"
            ?disabled="${args.disabled}"
            .error-text="${args.errorText}"
            ?invalid="${args.invalid}"
            .help-text="${args.helpText}"
            .min="${args.min}"
            .max="${args.max}"
            .name="${args.name}"
            .placeholder="${args.placeholder}"
            ?required="${args.required}"
            .value="${args.value}"
            .step="${args.step}"
            type=${args.type}
            ?readonly="${args.readonly}"
            ?autocomplete="${args.autocomplete}"
            ?spellcheck="${args.spellcheck}"
        ></rux-input>
    `
}

const WithIcons = (args) => {
    return html`
        <rux-input
            label="With Prefix"
            ?disabled="${args.disabled}"
            .errorText="${args.errorText}"
            ?invalid="${args.invalid}"
            .helpText="${args.helpText}"
            .min="${args.min}"
            .max="${args.max}"
            .name="${args.name}"
            .placeholder="${args.placeholder}"
            ?required="${args.required}"
            .size="${args.size}"
            .value="${args.value}"
            type=${args.type}
            .step="${args.step}"
            ?readonly="${args.readonly}"
            ?autocomplete="${args.autocomplete}"
            ?spellcheck="${args.spellcheck}"
        >
            <rux-icon
                slot="prefix"
                icon="border-clear"
                size="extra-small"
            ></rux-icon>
        </rux-input>
        <br />
        <rux-input
            label="With Suffix"
            ?disabled="${args.disabled}"
            .errorText="${args.errorText}"
            ?invalid="${args.invalid}"
            .helpText="${args.helpText}"
            .min="${args.min}"
            .max="${args.max}"
            .name="${args.name}"
            .placeholder="${args.placeholder}"
            ?required="${args.required}"
            .size="${args.size}"
            .value="${args.value}"
            type=${args.type}
            .step="${args.step}"
            ?readonly="${args.readonly}"
            ?autocomplete="${args.autocomplete}"
            ?spellcheck="${args.spellcheck}"
        >
            <rux-icon
                slot="suffix"
                icon="border-clear"
                size="extra-small"
            ></rux-icon>
        </rux-input>
        <br />
        <rux-input
            label="With Prefix and Suffix"
            ?disabled="${args.disabled}"
            .errorText="${args.errorText}"
            ?invalid="${args.invalid}"
            .helpText="${args.helpText}"
            .min="${args.min}"
            .max="${args.max}"
            .name="${args.name}"
            .placeholder="${args.placeholder}"
            ?required="${args.required}"
            .size="${args.size}"
            .value="${args.value}"
            type=${args.type}
            .step="${args.step}"
            ?readonly="${args.readonly}"
            ?autocomplete="${args.autocomplete}"
            ?spellcheck="${args.spellcheck}"
        >
            <rux-icon
                slot="prefix"
                icon="border-clear"
                size="extra-small"
            ></rux-icon>
            <rux-icon
                slot="suffix"
                icon="border-clear"
                size="extra-small"
            ></rux-icon>
        </rux-input>
    `
}

const Sizes = (args) => {
    return html`
        <rux-input
            label="Small input"
            ?disabled="${args.disabled}"
            .errorText="${args.errorText}"
            ?invalid="${args.invalid}"
            .helpText="${args.helpText}"
            .min="${args.min}"
            .max="${args.max}"
            .name="${args.name}"
            .placeholder="${args.placeholder}"
            ?required="${args.required}"
            size="small"
            .value="${args.value}"
            type=${args.type}
            .step="${args.step}"
            ?readonly="${args.readonly}"
            ?autocomplete="${args.autocomplete}"
            ?spellcheck="${args.spellcheck}"
        ></rux-input>
        <br />
        <rux-input
            label="Medium input"
            ?disabled="${args.disabled}"
            .errorText="${args.errorText}"
            ?invalid="${args.invalid}"
            .helpText="${args.helpText}"
            .min="${args.min}"
            .max="${args.max}"
            .name="${args.name}"
            .placeholder="${args.placeholder}"
            ?required="${args.required}"
            size="medium"
            .value="${args.value}"
            type=${args.type}
            .step="${args.step}"
            ?readonly="${args.readonly}"
            ?autocomplete="${args.autocomplete}"
            ?spellcheck="${args.spellcheck}"
        ></rux-input>
        <br />
        <rux-input
            label="Large input"
            ?disabled="${args.disabled}"
            .errorText="${args.errorText}"
            ?invalid="${args.invalid}"
            .helpText="${args.helpText}"
            .min="${args.min}"
            .max="${args.max}"
            .name="${args.name}"
            .placeholder="${args.placeholder}"
            ?required="${args.required}"
            size="large"
            .value="${args.value}"
            type=${args.type}
            .step="${args.step}"
            ?readonly="${args.readonly}"
            ?autocomplete="${args.autocomplete}"
            ?spellcheck="${args.spellcheck}"
        ></rux-input>
    `
}

const HelpText = (args) => {
    return html`
        <rux-input
            label="${args.label}"
            ?disabled="${args.disabled}"
            .error-text="${args.errorText}"
            ?invalid="${args.invalid}"
            help-text="${args.helpText}"
            .min="${args.min}"
            .max="${args.max}"
            .name="${args.name}"
            .placeholder="${args.placeholder}"
            ?required="${args.required}"
            .value="${args.value}"
            type=${args.type}
            .step="${args.step}"
            ?readonly="${args.readonly}"
            ?autocomplete="${args.autocomplete}"
            ?spellcheck="${args.spellcheck}"
            size="${args.size}"
        ></rux-input>
    `
}

const Invalid = (args) => {
    return html`
        <rux-input
            label="${args.label}"
            .disabled="${args.disabled}"
            error-text="${args.errorText}"
            ?invalid="${args.invalid}"
            .helpText="${args.helpText}"
            .min="${args.min}"
            .max="${args.max}"
            .name="${args.name}"
            .placeholder="${args.placeholder}"
            ?required="${args.required}"
            .value="${args.value}"
            type=${args.type}
            .step="${args.step}"
            ?readonly="${args.readonly}"
            ?autocomplete="${args.autocomplete}"
            ?spellcheck="${args.spellcheck}"
            size="${args.size}"
        ></rux-input>
    `
}

const Types = (args) => {
    return html`
        <style>
            .grid {
                display: grid;
                grid-template-columns: repeat(3, minmax(0, 1fr));
                gap: 2rem;
            }
        </style>
        <div class="grid">
            <rux-input
                label="Text Input"
                type="text"
                placeholder="Text input"
            ></rux-input>
            <rux-input
                label="Number Input"
                type="number"
                placeholder="1"
            ></rux-input>
            <rux-input
                label="Phone Input"
                type="tel"
                placeholder="(999) 999-9999"
            ></rux-input>
            <rux-input
                label="Password Input"
                type="password"
                placeholder="Reindeer Flotilla"
            ></rux-input>
            <rux-input
                label="Web address"
                type="url"
                placeholder="http://example.com"
            ></rux-input>
            <rux-input
                label="Email"
                type="email"
                placeholder="user@example.com"
            ></rux-input>
            <rux-input
                label="Search"
                type="search"
                placeholder="Enter search term"
            ></rux-input>
            <rux-input label="Date" type="date"></rux-input>
            <rux-input label="Datetime-local" type="datetime-local"></rux-input>
            <rux-input label="Time" type="time"></rux-input>
        </div>
    `
}

const VanillaMask = () => {
    return html` <iframe
        src="https://codesandbox.io/embed/rux-julian-input-mask-6gt7g8?fontsize=14&hidenavigation=1&theme=dark"
        style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
        title="rux-julian-input-mask"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>`
}

const HorizontalLabel = (args) => {
    return html`
        <style>
            #left-example::part(form-field) {
                flex-direction: row;
                align-items: center;
            }
            #left-example::part(label) {
                margin-right: var(--spacing-2);
                margin-bottom: 0;
            }
        </style>
        <rux-input
            id="left-example"
            label="${args.label}"
            .disabled="${args.disabled}"
            error-text="${args.errorText}"
            ?invalid="${args.invalid}"
            .helpText="${args.helpText}"
            .min="${args.min}"
            .max="${args.max}"
            .name="${args.name}"
            .placeholder="${args.placeholder}"
            ?required="${args.required}"
            .value="${args.value}"
            type=${args.type}
            .step="${args.step}"
            ?readonly="${args.readonly}"
            ?autocomplete="${args.autocomplete}"
            ?spellcheck="${args.spellcheck}"
            size="${args.size}"
        ></rux-input>
    `
}

export default {
    title: 'Forms/Input',
    component: 'rux-input',
    argTypes: extractArgTypes('rux-input'),

    parameters: {
        actions: {
            handles: [
                'ruxinput rux-input',
                'ruxchange rux-input',
                'ruxblur rux-input',
                'ruxfocus rux-input',
            ],
        },
    },
}

export const Default_ = {
    render: Default.bind(),
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
    },

    argTypes: {
        size: {
            control: 'select',
        },
    },
}

export const Disabled_ = {
    render: Disabled.bind(),
    name: 'Disabled',

    args: {
        type: 'text',
        label: 'Disabled input',
        autocomplete: '',
        disabled: true,
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
    },

    argTypes: {
        size: {
            control: 'select',
        },
    },
}

export const Required_ = {
    render: Required.bind(),
    name: 'Required',

    args: {
        label: 'Required input',
        required: true,
        type: 'text',
    },
}

export const WithIcons_ = {
    render: WithIcons.bind(),
    name: 'With Icons',

    args: {
        type: 'text',
        size: 'medium',
    },
}

export const Sizes_ = {
    render: Sizes.bind(),
    name: 'Sizes',

    args: {
        type: 'text',
    },

    argTypes: {
        autcomplete: {
            table: {
                disable: true,
            },
        },

        disabled: {
            table: {
                disable: true,
            },
        },

        errorText: {
            table: {
                disable: true,
            },
        },

        invalid: {
            table: {
                disable: true,
            },
        },

        label: {
            table: {
                disable: true,
            },
        },

        max: {
            table: {
                disable: true,
            },
        },

        min: {
            table: {
                disable: true,
            },
        },

        name: {
            table: {
                disable: true,
            },
        },

        placeholder: {
            table: {
                disable: true,
            },
        },

        readonly: {
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

        spellcheck: {
            table: {
                disable: true,
            },
        },

        step: {
            table: {
                disable: true,
            },
        },

        helpText: {
            table: {
                disable: true,
            },
        },

        autocomplete: {
            table: {
                disable: true,
            },
        },

        value: {
            table: {
                disable: true,
            },
        },
    },
}

export const HelpText_ = {
    render: HelpText.bind(),
    name: 'Help Text',

    args: {
        type: 'text',
        label: 'Help text',
        autocomplete: '',
        disabled: false,
        errorText: '',
        helpText: 'Help text',
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
    },

    argTypes: {
        size: {
            control: 'select',
        },
    },
}

export const Invalid_ = {
    render: Invalid.bind(),
    name: 'Invalid',

    args: {
        invalid: true,
        errorText: 'Field is required',
        label: 'Input Field',
        type: 'text',
        autocomplete: '',
        disabled: false,
        helpText: '',
        max: '',
        min: '',
        name: '',
        placeholder: '',
        readonly: false,
        required: true,
        size: 'medium',
        spellcheck: false,
        step: '',
        value: '',
    },

    argTypes: {
        size: {
            control: 'select',
        },
    },
}

export const Types_ = {
    render: Types.bind(),
    name: 'Types',

    argTypes: {
        type: {
            table: {
                disable: true,
            },
        },

        autcomplete: {
            table: {
                disable: true,
            },
        },

        disabled: {
            table: {
                disable: true,
            },
        },

        errorText: {
            table: {
                disable: true,
            },
        },

        invalid: {
            table: {
                disable: true,
            },
        },

        label: {
            table: {
                disable: true,
            },
        },

        max: {
            table: {
                disable: true,
            },
        },

        min: {
            table: {
                disable: true,
            },
        },

        name: {
            table: {
                disable: true,
            },
        },

        placeholder: {
            table: {
                disable: true,
            },
        },

        readonly: {
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

        spellcheck: {
            table: {
                disable: true,
            },
        },

        step: {
            table: {
                disable: true,
            },
        },

        helpText: {
            table: {
                disable: true,
            },
        },

        autocomplete: {
            table: {
                disable: true,
            },
        },

        value: {
            table: {
                disable: true,
            },
        },
    },
}

export const JulianMask = {
    render: VanillaMask.bind(),
    name: 'Julian Mask',
}

export const HorizontalLabel_ = {
    render: HorizontalLabel.bind(),
    name: 'Horizontal Label',

    args: {
        invalid: false,
        errorText: '',
        label: 'Label',
        type: 'text',
        autocomplete: '',
        disabled: false,
        helpText: '',
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
    },

    argTypes: {
        size: {
            control: 'select',
        },
    },
}
