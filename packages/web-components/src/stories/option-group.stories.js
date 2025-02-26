import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil';
import { html } from 'lit-html';

const Base = (args) => {
    return html`
        <div style="width: 200px; margin: 0 auto;">
          <rux-option-group label="Group one" style="background: transparent">
              <rux-option value="1.1" label="Option 1.1"></rux-option>
              <rux-option value="1.2" label="Option 1.2"></rux-option>
              <rux-option value="1.3" label="Option 1.3"></rux-option>
              <rux-option value="1.4" label="Option 1.4"></rux-option>
          </rux-option-group>
        </div>
    `
}

export default {
    title: 'Forms/Select Menu/Option Group',
    component: 'rux-option-group',
    argTypes: extractArgTypes('rux-option-group'),
}

export const Default = {
    render: Base.bind(),

    args: {
        label: 'Group 1',
    },

    argTypes: {
        value: {
            table: {
                disable: true,
            },
        },
    },

    name: 'Option-Group',
}
