import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil';
import { html } from 'lit-html';
import { withActions } from '@storybook/addon-actions/decorator';

const Base = (args) => {
    return html`
        <div
            style="display: flex; flex-flow: column; justify-content: center; align-items: center;"
        >
            <rux-toast
                message="${args.message}"
                close-after="${args.closeAfter}"
                hide-close=${args.hideClose}
                status="${args.status}"
            ></rux-toast>
        </div>
    `
}

const DefaultSlotExample = () => {
    return html`
        <div
            style="display: flex; flex-flow: column; justify-content: center; align-items: center;"
        >
            <rux-toast message="Toast message">
                Toast
                <a href="#" style="margin-left: 8px">Link</a>
            </rux-toast>
        </div>
    `
}

const AllVariantsExample = () => html`
    <div
        style="display: flex; flex-flow: column; justify-content: center; align-items: center;"
    >
        <rux-toast message="Toast with message set via prop."></rux-toast>
        <rux-toast>
            Toast with content set via default slot
            <a href="#" style="margin-left: 8px">Link</a>
        </rux-toast>
        <rux-toast
            hide-close="true"
            message="Toast with close icon hidden."
        ></rux-toast>
        <rux-toast
            close-after="2000"
            hide-close="true"
            message="Toast will close after 2000ms"
        ></rux-toast>
        <rux-toast message="Standby" status="standby"></rux-toast>
        <rux-toast message="Normal" status="normal"></rux-toast>
        <rux-toast message="Off" status="off"></rux-toast>
        <rux-toast message="Caution" status="caution"></rux-toast>
        <rux-toast message="Serious" status="serious"></rux-toast>
        <rux-toast message="Critical" status="critical"></rux-toast>
    </div>
`

export default {
    title: 'Beta/Toast [BETA]',
    component: 'rux-toast',
    argTypes: extractArgTypes('rux-toast'),
    parameters: {
        actions: {
            handles: ['ruxtoastopen rux-toast', 'ruxtoastclosed rux-toast'],
        },
    },
    decorators: [withActions],
}

export const Default = {
    render: Base.bind(),
    name: 'Default',

    args: {
        closeAfter: null,
        hideClose: false,
        message: 'This is a toast',
        status: '',
    },
}

export const AutoClose = {
    render: Base.bind(),
    name: 'Auto Close',

    args: {
        closeAfter: 5000,
        hideClose: null,
        message: 'This toast will disappear in 5000 ms.',
        status: '',
    },


}

export const HideClose = {
    render: Base.bind(),

    args: {
        closeAfter: null,
        hideClose: true,
        message: 'Toast without the close icon.',
        status: '',
    },

    name: 'Hide Close',
}

export const WithStatus = {
    render: Base.bind(),

    args: {
        closeAfter: null,
        hideClose: false,
        message: 'Toast with a status.',
        status: 'normal',
    },

    name: 'With Status',
}

export const DefaultSlot = {
    render: DefaultSlotExample.bind(),
    name: 'Default Slot',
}

export const AllVariants = {
    render: AllVariantsExample.bind(),
    name: 'All Variants',

    argTypes: {
        closeAfter: {
            table: {
                disable: true,
            },
        },

        message: {
            table: {
                disable: true,
            },
        },

        open: {
            table: {
                disable: true,
            },
        },

        status: {
            table: {
                disable: true,
            },
        },
    },
}
