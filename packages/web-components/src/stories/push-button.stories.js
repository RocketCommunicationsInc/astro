import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil';
import { html } from 'lit-html';

const Base = (args) => {
    return html`
        <div style="padding: 10%; display: flex; justify-content: center;">
            <rux-push-button
                label=${args.label}
                .size=${args.size}
                .icon=${args.icon}
                ?checked=${args.checked}
                ?disabled=${args.disabled}
                ?icon-only=${args.iconOnly}
                .name=${args.name}
                .value=${args.value}
            ></rux-push-button>
        </div>
    `
}

const WithAllVariants = () => {
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
            .icon-only {
                padding-right: 1rem;
            }
        </style>
        <div
            style="padding: 8vh 2vw; display: flex; flex-flow: row wrap; justify-content: space-evenly;"
        >
            <ul class="button-list">
                <li>
                    <rux-push-button
                        label="Push button small"
                        size="small"
                    ></rux-push-button>
                </li>
                <li>
                    <rux-push-button
                        label="Push button medium"
                    ></rux-push-button>
                </li>
                <li>
                    <rux-push-button
                        label="Push button large"
                        size="large"
                    ></rux-push-button>
                </li>
                <li>
                    <rux-push-button
                        checked
                        label="Push button checked"
                    ></rux-push-button>
                </li>
                <li>
                    <rux-push-button
                        disabled
                        label="Push button disabled"
                    ></rux-push-button>
                </li>
                <li>
                    <rux-push-button
                        checked
                        disabled
                        label="Push button disabled checked"
                    ></rux-push-button>
                </li>
                <li>
                    <rux-push-button
                        icon="apps"
                        label="Push button with icon"
                    ></rux-push-button>
                </li>
                <li>
                    <rux-push-button
                        icon="apps"
                        disabled
                        label="Push button disabled with icon"
                    ></rux-push-button>
                </li>
                <li>
                    <rux-push-button
                        icon="apps"
                        checked
                        label="Push button checked with icon"
                    ></rux-push-button>
                </li>
                <li>
                    <rux-push-button
                        icon="apps"
                        checked
                        disabled
                        label="Push button disabled checked with icon"
                    ></rux-push-button>
                </li>
                <li>
                    <rux-push-button
                        icon="apps"
                        icon-only
                        class="icon-only"
                    ></rux-push-button>
                    <rux-push-button
                        icon="apps"
                        icon-only
                        checked
                        class="icon-only"
                    ></rux-push-button>
                    <rux-push-button
                        icon="apps"
                        icon-only
                        disabled
                        class="icon-only"
                    ></rux-push-button>
                    <rux-push-button
                        icon="apps"
                        icon-only
                        checked
                        disabled
                    ></rux-push-button>
                </li>
            </ul>
        </div>
    `
}

export default {
    title: 'Components/Push Button',
    component: 'rux-push-button',
    argTypes: extractArgTypes('rux-push-button'),

    parameters: {
        actions: {
            handles: ['ruxchange rux-push-button', 'ruxblur rux-push-button'],
        },
    },
}

export const PushButton = {
    render: Base.bind(),

    args: {
        label: 'Push Button',
        checked: false,
        disabled: false,
        icon: '',
        iconOnly: false,
        name: '',
        size: 'medium',
        value: '',
    },

    argTypes: {
        size: {
            control: 'select',
        },
    },

    name: 'Push Button',
}

export const AllVariants = {
    render: WithAllVariants.bind(),
    name: 'All Variants',

    argTypes: {
        checked: {
            table: {
                disable: true,
            },
        },

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

        size: {
            table: {
                disable: true,
            },
        },

        label: {
            table: {
                disable: true,
            },
        },

        name: {
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
