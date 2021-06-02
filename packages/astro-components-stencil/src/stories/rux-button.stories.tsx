import { html, render } from 'lit-html'
import { boolean, select, withKnobs } from '@storybook/addon-knobs'
import RuxButtonReadme from '../components/rux-button/readme.md'
import RuxButtonGroupReadme from '../components/rux-button-group/readme.md'

const sizeOptions = {
    Small: 'small',
    Standard: '',
    Large: 'large',
}

export default {
    title: 'Components/Buttons',
    decorators: [withKnobs],
}

export const StandardButton = () => {
    const size = select('Size', sizeOptions, '')
    const disabled = boolean('Disabled', false)
    const outline = boolean('Outline', false)
    const withIcon = boolean('With icon', false)
    const iconOnly = boolean('Icon only', false)

    return html`
        <div style="padding: 10%; display: flex; justify-content: center;">
            <rux-button
                ?disabled="${disabled}"
                ?icon-only="${iconOnly}"
                ?outline="${outline}"
                .size="${size}"
                .icon="${withIcon ? 'settings' : null}"
                >Button</rux-button
            >
        </div>
    `
}

StandardButton.parameters = {
    exports: {
        render,
        html,
    },
    readme: {
        sidebar: RuxButtonReadme,
    },
}

export const slottedIconButton = () => {
    const size = select('Size', sizeOptions, 'small')
    const disabled = boolean('Disabled', false)
    const outline = boolean('Outline', false)
    const iconOnly = boolean('Icon only', false)

    return html`
        <div style="padding: 10%; display: flex; justify-content: center;">
            <rux-button
                ?disabled="${disabled}"
                ?outline="${outline}"
                ?icon-only="${iconOnly}"
                .size="${size}"
            >
                <rux-icon
                    icon="palette"
                    color="${outline ? 'primary' : 'dark'}"
                ></rux-icon>
                Slotted icon button
            </rux-button>
        </div>
    `
}

slottedIconButton.story = {
    parameters: {
        exports: {
            render,
            html,
        },
        readme: {
            sidebar: RuxButtonReadme,
        },
    },
}

export const GroupedButtons = () => {
    const alignOptions = {
        Default: '',
        Right: 'right',
        Center: 'center',
    }

    const align = select('Align', alignOptions, 'right')

    return html`
        <style>
            .light-theme {
                --exampleContainerBackgroundColor: var(--primaryElementText);
                --exampleContainerBorderColor: var(--colorQuaternaryLighten1);
            }
            .dark-theme {
                --exampleContainerBackgroundColor: var(--colorTertiaryDarken1);
                --exampleContainerBorderColor: var(--colorTertiary);
            }
            .example-container {
                min-width: 20rem;
                background: var(--exampleContainerBackgroundColor);
                border: 1px solid var(--exampleContainerBorderColor);
                padding: 0.625rem;
                display: block;
            }
        </style>
        <div style="padding: 10%; display: flex; justify-content: center;">
            <div class="example-container">
                <rux-button-group .align="${align}">
                    <rux-button outline>Cancel</rux-button>
                    <rux-button>Continue</rux-button>
                </rux-button-group>
            </div>
        </div>
    `
}

GroupedButtons.parameters = {
    exports: {
        render,
        html,
    },
    readme: {
        sidebar: RuxButtonGroupReadme,
    },
}

export const AllButtonVariants = () => html`
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
                <rux-button size="small" icon-only outline icon="settings"
                    >Small outline icon-only button</rux-button
                >
                <rux-button size="small" outline
                    >Small outline button</rux-button
                >
            </li>
            <li>
                <rux-button size="small" outline icon="settings"
                    >Small outline button with icon</rux-button
                >
            </li>
            <li>
                <rux-button
                    size="small"
                    icon-only
                    disabled
                    outline
                    icon="settings"
                    >Small disabled outline icon-only button</rux-button
                >
                <rux-button size="small" outline disabled
                    >Small disabled outline button</rux-button
                >
            </li>
            <li>
                <rux-button size="small" outline disabled icon="settings"
                    >Small disabled outline button with icon</rux-button
                >
            </li>
        </ul>
        <ul class="button-list">
            <li>
                <rux-button icon-only icon="settings"
                    >Standard icon-only button</rux-button
                >
                <rux-button>Standard button</rux-button>
            </li>
            <li>
                <rux-button icon="settings"
                    >Standard button with icon</rux-button
                >
            </li>
            <li>
                <rux-button icon-only disabled icon="settings"
                    >Standard disabled icon-only button</rux-button
                >
                <rux-button disabled>Standard disabled button</rux-button>
            </li>
            <li>
                <rux-button disabled icon="settings"
                    >Standard disabled button with icon</rux-button
                >
            </li>
            <li>
                <rux-button icon-only outline icon="settings"
                    >Standard outline icon-only button</rux-button
                >
                <rux-button outline>Standard outline button</rux-button>
            </li>
            <li>
                <rux-button outline icon="settings"
                    >Standard outline button with icon</rux-button
                >
            </li>
            <li>
                <rux-button icon-only disabled outline icon="settings"
                    >Standard disabled outline icon-only button</rux-button
                >
                <rux-button outline disabled
                    >Standard disabled outline button</rux-button
                >
            </li>
            <li>
                <rux-button outline disabled icon="settings"
                    >Standard disabled outline button with icon</rux-button
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
                <rux-button size="large" icon-only outline icon="settings"
                    >Large outline icon-only button</rux-button
                >
                <rux-button size="large" outline
                    >Large outline button</rux-button
                >
            </li>
            <li>
                <rux-button size="large" outline icon="settings"
                    >Large outline button with icon</rux-button
                >
            </li>
            <li>
                <rux-button
                    size="large"
                    icon-only
                    disabled
                    outline
                    icon="settings"
                    >Large disabled outline icon-only button</rux-button
                >
                <rux-button size="large" outline disabled
                    >Large disabled outline button</rux-button
                >
            </li>
            <li>
                <rux-button size="large" outline disabled icon="settings"
                    >Large disabled outline button with icon</rux-button
                >
            </li>
        </ul>
        <!-- <ul class="button-list">
    <li>
      <input class="rux-button" type="submit" value="input type=submit">
    </li>
    <li>
      <input class="rux-button" type="button" value="input type=button">
    </li>
    <li>
      <input class="rux-button" type="reset" value="input type=reset">
    </li>
    <li>
      <input class="rux-button" type="submit" value="input disabled" disabled>
    </li>
  </ul> -->
    </div>
`

AllButtonVariants.parameters = {
    exports: {
        render,
        html,
    },
    readme: {
        sidebar: RuxButtonReadme,
    },
}
