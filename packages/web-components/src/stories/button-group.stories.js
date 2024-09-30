import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html } from 'lit-html'

const Base = (args) => {
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

export const Default = {
    render: Base.bind(),

    args: {
        hAlign: 'right',
    },

    name: 'Button Group',
}
