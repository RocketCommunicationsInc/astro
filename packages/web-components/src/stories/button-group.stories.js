import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html, render } from 'lit-html'
import { styled } from '@storybook/theming'

const StyledDiv = styled.div`
    position: relative;
    margin: 1rem 0;
    border-left: 20px solid var(--color-status-serious);
    background: white;
    color: var(--color-status-serious);
    padding: 19px;
    font-family: var(--font-body-1-bold-font-family);
    font-size: var(--font-body-1-bold-font-size);
    font-weight: var(--font-body-1-bold-font-weight);
    letter-spacing: var(--font-body-1-bold-letter-spacing);
    .banner-text {
        margin-top: 1rem;
        color: var(--color-text-inverse);
    }
`

const BetaTag = styled.div`
    display: inline-block;
    padding: 7px;
    color: var(--color-palette-neutral-1000);
    border-radius: var(--radius-base);
    background: var(--color-palette-teal-300);
    font-family: var(--font-body-2-bold-font-family);
    font-size: var(--font-body-2-bold-font-size);
    font-weight: var(--font-body-2-bold-font-weight);
    letter-spacing: var(--font-body-2-bold-letter-spacing);
`

const Default = (args) => {
    return html`
        <style>
            .light-theme {
                --exampleContainerBackgroundColor: var(--color-text-inverse);
                --exampleContainerBorderColor: var(--colorQuaternaryLighten1);
            }
            .dark-theme {
                --exampleContainerBackgroundColor: var(
                    --color-background-surface-default
                );
                --exampleContainerBorderColor: #283f58;
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
                <rux-button-group
                    h-align="${args.hAlign ? args.hAlign : 'right'}"
                >
                    <rux-button secondary>Cancel</rux-button>
                    <rux-button>Continue</rux-button>
                </rux-button-group>
            </div>
        </div>
    `
}

export default {
    title: 'Components/Button Group [DEPRECATED]',
    component: 'rux-button-group',

    subcomponents: {
        'Rux Button': 'rux-button',
    },

    argTypes: extractArgTypes('rux-button-group'),
}

export const ButtonGroup = {
    render: Default.bind(),

    args: {
        hAlign: 'right',
    },

    name: 'Button Group',
}
