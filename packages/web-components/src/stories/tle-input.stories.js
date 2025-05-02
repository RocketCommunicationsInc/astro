import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html } from 'lit-html'
import { withActions } from '@storybook/addon-actions/decorator'

// Sample valid TLE for demonstration
const VALID_TLE =
    '1 25544U 98067A   08264.51782528 -.00002182  00000-0 -11606-4 0  2927\n2 25544  51.6416 247.4627 0006703 130.5360 325.0288 15.72125391563537'
const INVALID_TLE =
    '1 25544U 98067A   23212.48826229  .00015266  00000-0  28485-3 0  9990\n2 25544  51.6462  39.4487 0001320  84.1403  23.1898 15.49760304407907'

const Base = (args) => {
    return html`
        <rux-tle-input
            label="${args.label}"
            ?disabled="${args.disabled}"
            error-text="${args.errorText}"
            help-text="${args.helpText}"
            ?invalid="${args.invalid}"
            .name="${args.name}"
            .placeholder="${args.placeholder}"
            ?required="${args.required}"
            ?readonly="${args.readonly}"
            value="${args.value}"
        ></rux-tle-input>
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
        <rux-tle-input
            id="left-example"
            label="${args.label}"
            ?disabled="${args.disabled}"
            error-text="${args.errorText}"
            help-text="${args.helpText}"
            ?invalid="${args.invalid}"
            name="${args.name}"
            placeholder="${args.placeholder}"
            ?required="${args.required}"
            ?readonly="${args.readonly}"
            value="${args.value}"
        ></rux-tle-input>
    `
}

const WithSlotsExample = () => {
    return html`
        <rux-tle-input>
            <span slot="label">Custom <em>Formatted</em> Label</span>
            <span slot="help-text"
                >This is <strong>custom</strong> help text</span
            >
            <span slot="error-text"
                >Custom error message for invalid TLE format</span
            >
            <div slot="tle-examples">
                <h4 style="margin-top: 0; margin-bottom: 8px;">
                    Example TLEs:
                </h4>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                    <button
                        @click=${() => {
                            document.querySelector(
                                'rux-tle-input'
                            ).value = VALID_TLE
                        }}
                    >
                        ISS ZARA
                    </button>
                    <button
                        @click=${() => {
                            document.querySelector(
                                'rux-tle-input'
                            ).value = INVALID_TLE
                        }}
                    >
                        TIANHE
                    </button>
                </div>
            </div>
        </rux-tle-input>
    `
}

const AllFeaturesExample = () => {
    return html`
        <style>
            .tle-demo-container {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 24px;
                margin-bottom: 32px;
            }
        </style>

        <h3>TLE Input Variants</h3>
        <div class="tle-demo-container">
            <div>
                <h4>Default</h4>
                <rux-tle-input
                    label="Satellite TLE"
                    help-text="Enter a valid Two-Line Element set"
                ></rux-tle-input>
            </div>

            <div>
                <h4>With Valid TLE</h4>
                <rux-tle-input
                    label="ISS TLE"
                    help-text="International Space Station TLE data"
                    value="${VALID_TLE}"
                ></rux-tle-input>
            </div>

            <div>
                <h4>Invalid</h4>
                <rux-tle-input
                    label="Satellite TLE"
                    error-text="This TLE may not be valid, please verify"
                    value="${INVALID_TLE}"
                    invalid
                ></rux-tle-input>
            </div>

            <div>
                <h4>Read Only</h4>
                <rux-tle-input
                    label="Reference TLE"
                    help-text="This TLE is for reference only"
                    value="${VALID_TLE}"
                    readonly
                ></rux-tle-input>
            </div>

            <div>
                <h4>Required</h4>
                <rux-tle-input
                    label="Satellite TLE"
                    help-text="A valid TLE is required"
                    required
                ></rux-tle-input>
            </div>

            <div>
                <h4>Disabled</h4>
                <rux-tle-input
                    label="Satellite TLE"
                    help-text="This TLE input is currently disabled"
                    value="${VALID_TLE}"
                    disabled
                ></rux-tle-input>
            </div>
        </div>
    `
}

export default {
    title: 'Forms/TLE Input',
    component: 'rux-tle-input',
    parameters: {
        docs: {
            description: {
                component:
                    'TLE Input allows users to input and validate Two-Line Element (TLE) data for satellite tracking and orbital calculations.',
            },
        },
        actions: {
            handles: [
                'ruxinput rux-tle-input',
                'ruxchange rux-tle-input',
                'ruxblur rux-tle-input',
                'ruxtlevalidated rux-tle-input',
            ],
        },
    },
    argTypes: extractArgTypes('rux-tle-input'),
    decorators: [withActions],
}

export const Default = {
    render: Base.bind(),
    name: 'Default',

    args: {
        label: 'Satellite TLE',
        helpText: 'Enter a valid Two-Line Element set',
        placeholder: 'Paste a valid TLE here...',
        value: '',
        invalid: false,
        disabled: false,
        required: false,
        readonly: false,
        name: '',
        errorText: '',
    },
}

export const WithValidTLE = {
    render: Base.bind(),
    name: 'With Valid TLE',

    args: {
        label: 'ISS TLE',
        helpText: 'International Space Station TLE data',
        value: VALID_TLE,
        invalid: false,
        disabled: false,
        required: false,
        readonly: false,
    },
}

export const Invalid = {
    render: Base.bind(),
    name: 'Invalid',

    args: {
        label: 'Satellite TLE',
        errorText: 'This TLE may not be valid, please verify',
        value: INVALID_TLE,
        invalid: true,
        disabled: false,
        required: false,
        readonly: false,
    },
}

export const ReadOnly = {
    render: Base.bind(),
    name: 'Read Only',

    args: {
        label: 'Reference TLE',
        helpText: 'This TLE is for reference only and cannot be edited',
        value: VALID_TLE,
        readonly: true,
        disabled: false,
        required: false,
        invalid: false,
    },
}

export const Required = {
    render: Base.bind(),
    name: 'Required',

    args: {
        label: 'Satellite TLE',
        helpText: 'A valid TLE is required',
        required: true,
        value: '',
        disabled: false,
        readonly: false,
        invalid: false,
    },
}

export const Disabled = {
    render: Base.bind(),
    name: 'Disabled',

    args: {
        label: 'Satellite TLE',
        helpText: 'This TLE input is currently disabled',
        value: VALID_TLE,
        disabled: true,
        required: false,
        readonly: false,
        invalid: false,
    },
}

export const WithSlots = {
    render: WithSlotsExample.bind(),
    name: 'With Slots',
    parameters: {
        docs: {
            description: {
                story:
                    'The component provides several slots for customization, including a slot for TLE examples.',
            },
        },
    },
}

export const HorizontalLabel = {
    render: HorizontalLabelExample.bind(),
    name: 'Horizontal Label',
    parameters: {
        docs: {
            description: {
                story:
                    'You can utilize the `form-field` and `label` Shadow Parts to have full control over label placement.',
            },
        },
    },
    args: {
        label: 'Satellite TLE:',
        placeholder: 'Paste a valid TLE here...',
        invalid: false,
        errorText: '',
        helpText: 'Paste a valid Two-Line Element set',
        disabled: false,
        name: '',
        required: false,
        value: '',
    },
}

export const AllFeatures = {
    render: AllFeaturesExample.bind(),
    name: 'All Features',
    parameters: {
        docs: {
            description: {
                story:
                    'This example shows all variants of the TLE Input component side by side for comparison.',
            },
        },
    },
}
