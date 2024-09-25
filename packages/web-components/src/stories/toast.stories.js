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

const ToastAutoClose = (args) => {
    return html`
        <div
            style="display: flex; flex-flow: column; justify-content: center; align-items: center;"
        >
            <rux-toast
                close-after="${args.closeAfter}"
                message="${args.message}"
            ></rux-toast>
        </div>
    `
}

const HideClose = (args) => {
    return html`
        <div
            style="display: flex; flex-flow: column; justify-content: center; align-items: center;"
        >
            <rux-toast
                close-after="${args.closeAfter}"
                hide-close="${args.hideClose}"
                message="${args.message}"
            ></rux-toast>
        </div>
    `
}

const WithStatus = (args) => {
    return html`
        <div
            style="display: flex; flex-flow: column; justify-content: center; align-items: center;"
        >
            <rux-toast
                close-after="${args.closeAfter}"
                hide-close="${args.hideClose}"
                message="${args.message}"
                status="${args.status}"
            ></rux-toast>
        </div>
    `
}

const DefaultSlot = (args) => {
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

const AllVariants = () => html`
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

    subcomponents: {
        RuxToastStack: 'rux-toast-stack',
    },

    argTypes: args,

    parameters: {
        actions: {
            handles: ['ruxtoastopen rux-toast', 'ruxtoastclosed rux-toast'],
        },
    },
}

export const Default_ = {
    render: Default.bind(),
    name: 'Default',
    height: '100px',

    args: {
        closeAfter: null,
        hideClose: null,
        message: 'This is a toast',
        status: 'standby',
    },
}

export const AutoClose = {
    render: ToastAutoClose.bind(),

    args: {
        closeAfter: 2000,
        hideClose: null,
        message: 'This toast will disappear in 2000 ms.',
    },

    name: 'Auto Close',
    height: '100px',
}

export const HideClose_ = {
    render: HideClose.bind(),

    args: {
        closeAfter: null,
        hideClose: true,
        message: 'Toast without the close icon.',
    },

    name: 'Hide Close',
    height: '100px',
}

export const WithStatus_ = {
    render: WithStatus.bind(),

    args: {
        closeAfter: null,
        hideClose: true,
        message: 'Toast with a status.',
        status: 'normal',
    },

    name: 'With Status',
    height: '100px',
}

export const DefaultSlot_ = {
    render: DefaultSlot.bind(),
    name: 'Default Slot',
    height: '100px',
}

export const AllVariants_ = {
    render: AllVariants.bind(),
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
