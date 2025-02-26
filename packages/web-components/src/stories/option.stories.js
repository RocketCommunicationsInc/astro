import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil';
import { html } from 'lit-html';

const Base = (args) => {
    return html`
        <div style="width: 200px; margin: 0 auto;">
                <rux-option
                    value=""
                    selected
                    label="Select an option"
                ></rux-option>
        </div>
    `
}

export default {
    title: 'Forms/Select Menu/Option',
    component: 'rux-option',
    argTypes: extractArgTypes('rux-option'),
}

export const Default = {
    render: Base.bind(),

    args: {
        disabled: false,
        label: 'Option 1',
    },

    argTypes: {
        value: {
            table: {
                disable: true,
            },
        },
    },

    name: 'Option',
}
