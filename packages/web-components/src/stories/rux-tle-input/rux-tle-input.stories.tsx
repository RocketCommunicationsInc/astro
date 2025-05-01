import {
    extractArgTypes,
    extractComponentDescription,
    generateStoryboardArgTypes,
    saveStorybookData,
} from '../../utils/utils'
import { html } from 'lit-html'

export default {
    title: 'Components/TLE Input',
    component: 'rux-tle-input',
    parameters: {
        docs: {
            description: {
                component: extractComponentDescription('rux-tle-input'),
            },
        },
    },
    argTypes: generateStoryboardArgTypes('rux-tle-input'),
}

// Sample valid TLE for demonstration
const VALID_TLE =
    '1 25544U 98067A   23212.48826229  .00015266  00000-0  28485-3 0  9990\n2 25544  51.6462  39.4487 0001320  84.1403  23.1898 15.49760304407907'
const INVALID_TLE = 'This is not a valid TLE format'

/**
 * Default: demonstrates the default TLE input without any specific configuration
 */
export const Default = {
    render: (args) => html`
        <rux-tle-input
            label="${args.label}"
            help-text="${args.helpText}"
            placeholder="${args.placeholder}"
            value="${args.value}"
            ?invalid="${args.invalid}"
            ?disabled="${args.disabled}"
            ?required="${args.required}"
            ?readonly="${args.readonly}"
        ></rux-tle-input>
    `,
    args: {
        label: 'Satellite TLE',
        helpText: 'Enter a valid Two-Line Element set',
        placeholder: 'Paste a valid TLE here...',
        value: '',
        invalid: false,
        disabled: false,
        required: false,
        readonly: false,
    },
}

/**
 * With Valid TLE: demonstrates the component with a pre-populated valid TLE
 */
export const WithValidTLE = {
    name: 'With Valid TLE',
    render: (args) => html`
        <rux-tle-input
            label="${args.label}"
            help-text="${args.helpText}"
            value="${args.value}"
            ?invalid="${args.invalid}"
            ?disabled="${args.disabled}"
            ?required="${args.required}"
            ?readonly="${args.readonly}"
        ></rux-tle-input>
    `,
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

/**
 * Invalid: demonstrates the component with invalid TLE data
 */
export const Invalid = {
    render: (args) => html`
        <rux-tle-input
            label="${args.label}"
            error-text="${args.errorText}"
            value="${args.value}"
            ?invalid="${args.invalid}"
            ?disabled="${args.disabled}"
            ?required="${args.required}"
            ?readonly="${args.readonly}"
        ></rux-tle-input>
    `,
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

/**
 * ReadOnly: demonstrates the component in read-only mode
 */
export const ReadOnly = {
    name: 'Read Only',
    render: (args) => html`
        <rux-tle-input
            label="${args.label}"
            help-text="${args.helpText}"
            value="${args.value}"
            ?readonly="${args.readonly}"
        ></rux-tle-input>
    `,
    args: {
        label: 'Reference TLE',
        helpText: 'This TLE is for reference only and cannot be edited',
        value: VALID_TLE,
        readonly: true,
    },
}

/**
 * Required: demonstrates the component with the required attribute
 */
export const Required = {
    render: (args) => html`
        <rux-tle-input
            label="${args.label}"
            help-text="${args.helpText}"
            ?required="${args.required}"
        ></rux-tle-input>
    `,
    args: {
        label: 'Satellite TLE',
        helpText: 'A valid TLE is required',
        required: true,
    },
}

/**
 * Disabled: demonstrates the component in disabled state
 */
export const Disabled = {
    render: (args) => html`
        <rux-tle-input
            label="${args.label}"
            help-text="${args.helpText}"
            value="${args.value}"
            ?disabled="${args.disabled}"
        ></rux-tle-input>
    `,
    args: {
        label: 'Satellite TLE',
        helpText: 'This TLE input is currently disabled',
        value: VALID_TLE,
        disabled: true,
    },
}

/**
 * With Slots: demonstrates the component with various slots
 */
export const WithSlots = {
    name: 'With Slots',
    render: () => html`
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
                        onclick="document.querySelector('rux-tle-input').value = '1 25544U 98067A   23212.48826229  .00015266  00000-0  28485-3 0  9990\\n2 25544  51.6462  39.4487 0001320  84.1403  23.1898 15.49760304407907'"
                    >
                        ISS (ZARYA)
                    </button>
                    <button
                        onclick="document.querySelector('rux-tle-input').value = '1 48274U 21035D   23213.15018113  .00000782  00000-0  33169-4 0  9990\\n2 48274  41.4772 220.4163 0006529 332.7085  27.3453 15.08913070118343'"
                    >
                        TIANHE
                    </button>
                </div>
            </div>
        </rux-tle-input>
    `,
}

/**
 * All Features: demonstrates multiple variants of the component side by side
 */
export const AllFeatures = {
    name: 'All Features',
    render: () => html`
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
    `,
}
