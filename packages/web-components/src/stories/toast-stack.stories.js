import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil';
import { html } from 'lit-html';

const Base = (args) => {
    return html`
    <div style="height: 300px;">
      <rux-toast-stack position="${args.position}">
            <rux-toast message="Toast 1"></rux-toast>
            <rux-toast message="Toast 2"></rux-toast>
        </rux-toast-stack>
    </div>

    `
}

const AllVariantsExample = () => {
  return html`
    <style>
        .wrapper {
            margin-bottom: 1rem;
            height: 500px;
        }
    </style>
    <section>
        <div class="wrapper">
            <rux-toast-stack position="top-right">
                <rux-toast message="Toast 1"></rux-toast>
                <rux-toast message="Toast 2"></rux-toast>
            </rux-toast-stack>
            <rux-toast-stack position="top-left">
                <rux-toast message="Toast 1"></rux-toast>
                <rux-toast message="Toast 2"></rux-toast>
            </rux-toast-stack>
            <rux-toast-stack position="bottom-right">
                <rux-toast message="Toast 1"></rux-toast>
                <rux-toast message="Toast 2"></rux-toast>
            </rux-toast-stack>
            <rux-toast-stack position="bottom-left">
                <rux-toast message="Toast 1"></rux-toast>
                <rux-toast message="Toast 2"></rux-toast>
            </rux-toast-stack>
        </div>
    </section>
`
      }

export default {
    title: 'Beta/Toast Stack [BETA]',
    component: 'rux-toast-stack',

    subcomponents: {
        RuxToast: 'rux-toast',
    },

    argTypes: extractArgTypes('rux-toast-stack'),
}

export const Default = {
    render: Base.bind(),
    name: 'Default',

    args: {
        position: 'top-right',
    },
}

export const Position = {
    render: Base.bind(),

    args: {
        position: 'top-right',
    },

    name: 'Position',
}

export const AllVariants = {
    render: AllVariantsExample.bind(),
    name: 'All Variants',

    argTypes: {
        position: {
            table: {
                disable: true,
            },
        },
    },
}
