import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html, render } from 'lit-html'

const Default = (args) => {
    return html`
        <div style="padding: 10%; display: flex; justify-content: center;">
            <rux-button
                ?disabled="${args.disabled}"
                ?icon-only="${args.iconOnly}"
                ?secondary="${args.secondary}"
                ?borderless="${args.borderless}"
                .size="${args.size}"
                .icon="${args.icon}"
            >
                Button
            </rux-button>
        </div>
    `
}

const slottedIconButton = (args) => {
    const { size, disabled, secondary, iconOnly } = args
    return html`
        <div style="padding: 10%; display: flex; justify-content: center;">
            <rux-button
                ?disabled="${args.disabled}"
                ?icon-only="${args.iconOnly}"
                ?secondary="${args.secondary}"
                ?borderless="${args.borderless}"
                .size="${args.size}"
                .icon="${args.icon}"
            >
                <rux-icon icon="palette" size="extra-small"></rux-icon>
                Slotted icon button
            </rux-button>
        </div>
    `
}

const Secondary = (args) => {
    return html`
        <div style="padding: 10%; display: flex; justify-content: center;">
            <rux-button
                ?disabled="${args.disabled}"
                ?icon-only="${args.iconOnly}"
                ?secondary="${args.secondary}"
                ?borderless="${args.borderless}"
                .size="${args.size}"
                .icon="${args.icon}"
            >
                Button
            </rux-button>
        </div>
    `
}

const Borderless = (args) => {
    return html`
        <div style="padding: 10%; display: flex; justify-content: center;">
            <rux-button
                ?disabled="${args.disabled}"
                ?icon-only="${args.iconOnly}"
                ?secondary="${args.secondary}"
                ?borderless="${args.borderless}"
                .size="${args.size}"
                .icon="${args.icon}"
            >
                Button
            </rux-button>
        </div>
    `
}

const AllVariants = () => {
    return html`
        <style>
            .button-list {
                list-style-type: none;
                margin: 0 1rem 0 0;
                padding: 0;
                display: flex;
                flex-flow: column;
            }
            .button-list li {
                margin: 0 1rem 1rem 0;
                display: flex;
            }
            .button-list li rux-button:not(:last-child) {
                margin-right: 1rem;
            }
        </style>
        <div
            style="padding: 8vh 2vw; display: flex; flex-flow: row wrap; justify-content: space-evenly;"
        >
            <ul class="button-list">
                <li>
                    <rux-button size="small" icon-only icon="settings"
                        >Small icon-only button</rux-button
                    >
                    <rux-button size="small">Small button</rux-button>
                </li>
                <li>
                    <rux-button size="small" icon="settings"
                        >Small button with icon</rux-button
                    >
                </li>
                <li>
                    <rux-button size="small" icon-only disabled icon="settings"
                        >Small disabled icon-only button</rux-button
                    >
                    <rux-button size="small" disabled
                        >Small disabled button</rux-button
                    >
                </li>
                <li>
                    <rux-button size="small" disabled icon="settings"
                        >Small disabled button with icon</rux-button
                    >
                </li>
                <li>
                    <rux-button size="small" icon-only secondary icon="settings"
                        >Small secondary icon-only button</rux-button
                    >
                    <rux-button size="small" secondary
                        >Small secondary button</rux-button
                    >
                </li>
                <li>
                    <rux-button size="small" secondary icon="settings"
                        >Small secondary button with icon</rux-button
                    >
                </li>
                <li>
                    <rux-button
                        size="small"
                        icon-only
                        disabled
                        secondary
                        icon="settings"
                        >Small disabled secondary icon-only button</rux-button
                    >
                    <rux-button size="small" secondary disabled
                        >Small disabled secondary button</rux-button
                    >
                </li>
                <li>
                    <rux-button size="small" secondary disabled icon="settings"
                        >Small disabled secondary button with icon</rux-button
                    >
                </li>
            </ul>
            <ul class="button-list">
                <li>
                    <rux-button icon-only icon="settings"
                        >Medium icon-only button</rux-button
                    >
                    <rux-button>Medium button</rux-button>
                </li>
                <li>
                    <rux-button icon="settings"
                        >Medium button with icon</rux-button
                    >
                </li>
                <li>
                    <rux-button icon-only disabled icon="settings"
                        >Medium disabled icon-only button</rux-button
                    >
                    <rux-button disabled>Medium disabled button</rux-button>
                </li>
                <li>
                    <rux-button disabled icon="settings"
                        >Medium disabled button with icon</rux-button
                    >
                </li>
                <li>
                    <rux-button icon-only secondary icon="settings"
                        >Medium secondary icon-only button</rux-button
                    >
                    <rux-button secondary>Medium secondary button</rux-button>
                </li>
                <li>
                    <rux-button secondary icon="settings"
                        >Medium secondary button with icon</rux-button
                    >
                </li>
                <li>
                    <rux-button icon-only disabled secondary icon="settings"
                        >Medium disabled secondary icon-only button</rux-button
                    >
                    <rux-button secondary disabled
                        >Medium disabled secondary button</rux-button
                    >
                </li>
                <li>
                    <rux-button secondary disabled icon="settings"
                        >Medium disabled secondary button with icon</rux-button
                    >
                </li>
            </ul>
            <ul class="button-list">
                <li>
                    <rux-button size="large" icon-only icon="settings"
                        >Large icon-only button</rux-button
                    >
                    <rux-button size="large">Large button</rux-button>
                </li>
                <li>
                    <rux-button size="large" icon="settings"
                        >Large button with icon</rux-button
                    >
                </li>
                <li>
                    <rux-button size="large" icon-only disabled icon="settings"
                        >Large disabled icon-only button</rux-button
                    >
                    <rux-button size="large" disabled
                        >Large disabled button</rux-button
                    >
                </li>
                <li>
                    <rux-button size="large" disabled icon="settings"
                        >Large disabled button with icon</rux-button
                    >
                </li>
                <li>
                    <rux-button size="large" icon-only secondary icon="settings"
                        >Large secondary icon-only button</rux-button
                    >
                    <rux-button size="large" secondary
                        >Large secondary button</rux-button
                    >
                </li>
                <li>
                    <rux-button size="large" secondary icon="settings"
                        >Large secondary button with icon</rux-button
                    >
                </li>
                <li>
                    <rux-button
                        size="large"
                        icon-only
                        disabled
                        secondary
                        icon="settings"
                        >Large disabled secondary icon-only button</rux-button
                    >
                    <rux-button size="large" secondary disabled
                        >Large disabled secondary button</rux-button
                    >
                </li>
                <li>
                    <rux-button size="large" secondary disabled icon="settings"
                        >Large disabled secondary button with icon</rux-button
                    >
                </li>
            </ul>
            <ul class="button-list">
                <li>
                    <rux-button icon-only icon="settings" borderless>
                    </rux-button>
                    <rux-button borderless> Borderless button </rux-button>
                </li>
                <li>
                    <rux-button borderless icon="settings">
                        Borderless button with icon
                    </rux-button>
                </li>
                <li>
                    <rux-button icon-only icon="settings" borderless disabled>
                    </rux-button>
                    <rux-button borderless disabled>
                        Disabled borderless button
                    </rux-button>
                </li>
                <li>
                    <rux-button borderless icon="settings" disabled>
                        Disabled borderless button with icon
                    </rux-button>
                </li>
            </ul>
        </div>
    `
}

export default {
    title: 'Components/Button',
    component: 'rux-button',

    subcomponents: {
        RuxButtonGroup: 'rux-button-group',
    },

    argTypes: extractArgTypes('rux-button'),
}

export const Default_ = {
    render: Default.bind(),
    name: 'Default',

    args: {
        disabled: false,
        iconOnly: false,
        secondary: false,
        borderless: false,
        size: 'medium',
        icon: '',
        type: 'button',
    },

    argTypes: {
        size: {
            control: 'select',
        },

        type: {
            control: 'select',
        },
    },
}

export const WithSlottedIcon = {
    render: slottedIconButton.bind(),
    name: 'With Slotted Icon',

    args: {
        disabled: false,
        iconOnly: false,
        secondary: false,
        size: 'medium',
        icon: '',
        type: 'button',
    },

    argTypes: {
        size: {
            control: 'select',
        },

        type: {
            control: 'select',
        },
    },
}

export const Secondary_ = {
    render: Secondary.bind(),

    args: {
        secondary: true,
        borderless: false,
        disabled: false,
        iconOnly: false,
        size: 'medium',
        icon: '',
        type: 'button',
    },

    argTypes: {
        size: {
            control: 'select',
        },

        type: {
            control: 'select',
        },
    },

    name: 'Secondary',
}

export const Borderless_ = {
    render: Borderless.bind(),

    args: {
        borderless: true,
    },

    name: 'Borderless',
}

export const AllVariants_ = {
    render: AllVariants.bind(),
    name: 'All Variants',

    argTypes: {
        disabled: {
            table: {
                disable: true,
            },
        },

        icon: {
            table: {
                disable: true,
            },
        },

        iconOnly: {
            table: {
                disable: true,
            },
        },

        secondary: {
            table: {
                disable: true,
            },
        },

        size: {
            table: {
                disable: true,
            },
        },

        type: {
            table: {
                disable: true,
            },
        },
    },
}
