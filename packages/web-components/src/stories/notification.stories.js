import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html, render } from 'lit-html'

const Default = (args) => {
    return html`
        <div style="display: flex; flex-flow: column; justify-content: center;">
            <rux-notification
                ?open="${args.open}"
                ?small="${args.small}"
                .closeAfter="${args.closeAfter}"
                .hideClose="${args.hideClose}"
                status="${args.status}"
                message="${args.message}"
            ></rux-notification>
        </div>
    `
}

const NotificationAutoClose = (args) => {
    return html`
        <div style="display: flex; flex-flow: column; justify-content: center;">
            <rux-notification
                ?open="${args.open}"
                ?small="${args.small}"
                .closeAfter="${args.closeAfter}"
                .status="${args.status}"
                message="This is a notification banner. It will disappear in 2000 ms."
            ></rux-notification>
        </div>
    `
}

const HideClose = (args) => {
    return html`
        <div style="display: flex; flex-flow: column; justify-content: center;">
            <rux-notification
                ?open="${args.open}"
                ?small="${args.small}"
                .closeAfter="${args.closeAfter}"
                .status="${args.status}"
                .hideClose="${args.hideClose}"
                message="This is a notification banner. It will disappear in 2000 ms."
            ></rux-notification>
        </div>
    `
}

const Small = (args) => {
    return html`
        <div style="display: flex; flex-flow: column; justify-content: center;">
            <rux-notification
                ?open="${args.open}"
                ?small="${args.small}"
                .closeAfter="${args.closeAfter}"
                status="${args.status}"
                message="${args.message}"
                .hideClose="${args.hideClose}"
            ></rux-notification>
        </div>
    `
}

const PrefixSlot = (args) => {
    return html`
        <div style="display: flex; flex-flow: column; justify-content: center;">
            <rux-notification
                ?open="${args.open}"
                ?small="${args.small}"
                .closeAfter="${args.closeAfter}"
                status="${args.status}"
                message="${args.message}"
                .hideClose="${args.hideClose}"
            >
                <rux-classification-marking
                    classification="unclassified"
                    tag
                    slot="prefix"
                ></rux-classification-marking>
                Notification banner
            </rux-notification>
        </div>
    `
}

const DefaultSlot = (args) => {
    return html`
        <div style="display: flex; flex-flow: column; justify-content: center;">
            <rux-notification
                ?open="${args.open}"
                ?small="${args.small}"
                .closeAfter="${args.closeAfter}"
                status="${args.status}"
                message="${args.message}"
                .hideClose="${args.hideClose}"
            >
                Notification banner
                <a href="#" style="margin-left: 8px">Link</a>
            </rux-notification>
        </div>
    `
}

const ActionsSlot = (args) => {
    return html`
        <div style="display: flex; flex-flow: column; justify-content: center;">
            <rux-notification
                ?open="${args.open}"
                ?small="${args.small}"
                .closeAfter="${args.closeAfter}"
                status="${args.status}"
                message="${args.message}"
                .hideClose="${args.hideClose}"
            >
                Notification banner
                <rux-button slot="actions">Acknowledge</rux-button>
            </rux-notification>
        </div>
    `
}

const WithSlottedContent = (args) => {
    return html`
        <div style="display: flex; flex-flow: column; justify-content: center;">
            <rux-notification
                ?open="${args.open}"
                ?small="${args.small}"
                .closeAfter="${args.closeAfter}"
                status="${args.status}"
                message="${args.message}"
                .hideClose="${args.hideClose}"
            >
                <rux-classification-marking
                    classification="unclassified"
                    tag
                    slot="prefix"
                ></rux-classification-marking>
                <div>
                    Slotted Content
                    <a href="#" style="margin-left: 8px">Link</a>
                </div>
                <rux-button slot="actions">Acknowledge</rux-button>
            </rux-notification>
        </div>
    `
}

const WithWrappedText = (args) => {
    return html`
        <style>
            rux-notification::part(message) {
                overflow: visible;
                text-overflow: unset;
                white-space: normal;
            }
        </style>
        <div style="display: flex; flex-flow: column; justify-content: center;">
            <rux-notification
                ?open="${args.open}"
                ?small="${args.small}"
                .closeAfter="${args.closeAfter}"
                status="${args.status}"
                message="${args.message}"
                .hideClose="${args.hideClose}"
            >
                In my younger and more vulnerable years my father gave me some
                advice that I’ve been turning over in my mind ever since.
                “Whenever you feel like criticizing any one,” he told me, “just
                remember that all the people in this world haven’t had the
                advantages that you’ve had.”
            </rux-notification>
        </div>
    `
}

const AllVariants = () => html`
    <style>
        .wrapper {
            margin-bottom: 1rem;
        }
    </style>
    <section>
        <div class="wrapper">
            <rux-notification open status="normal">
                Notification banner
                <a href="#" style="margin-left: 8px">Link</a>
            </rux-notification>
        </div>
        <div class="wrapper wrapper--small">
            <rux-notification open small status="normal">
                Notification banner
                <a href="#" style="margin-left: 8px">Link</a>
            </rux-notification>
        </div>
        <div class="wrapper">
            <rux-notification open status="caution">
                Notification banner
                <a href="#" style="margin-left: 8px">Link</a>
            </rux-notification>
        </div>
        <div class="wrapper wrapper--small">
            <rux-notification open small status="caution">
                Notification banner
                <a href="#" style="margin-left: 8px">Link</a>
            </rux-notification>
        </div>
        <div class="wrapper">
            <rux-notification open status="serious">
                Notification banner
                <a href="#" style="margin-left: 8px">Link</a>
            </rux-notification>
        </div>
        <div class="wrapper wrapper--small">
            <rux-notification open small status="serious">
                Notification banner
                <a href="#" style="margin-left: 8px">Link</a>
            </rux-notification>
        </div>
        <div class="wrapper">
            <rux-notification open status="critical">
                Notification banner
                <a href="#" style="margin-left: 8px">Link</a>
            </rux-notification>
        </div>
        <div class="wrapper wrapper--small">
            <rux-notification open small status="critical">
                Notification banner
                <a href="#" style="margin-left: 8px">Link</a>
            </rux-notification>
        </div>
        <div class="wrapper">
            <rux-notification open status="standby">
                Notification banner
                <a href="#" style="margin-left: 8px">Link</a>
            </rux-notification>
        </div>
        <div class="wrapper wrapper--small">
            <rux-notification open small status="standby">
                Notification banner
                <a href="#" style="margin-left: 8px">Link</a>
            </rux-notification>
        </div>
        <div class="wrapper">
            <rux-notification open status="off">
                Notification banner
                <a href="#" style="margin-left: 8px">Link</a>
            </rux-notification>
        </div>
        <div class="wrapper wrapper--small">
            <rux-notification open small status="off">
                Notification banner
                <a href="#" style="margin-left: 8px">Link</a>
            </rux-notification>
        </div>
        <div class="wrapper">
            <rux-notification open>
                Notification banner
                <a href="#" style="margin-left: 8px">Link</a>
            </rux-notification>
        </div>
        <div class="wrapper wrapper--small">
            <rux-notification open small>
                Notification banner
                <a href="#" style="margin-left: 8px">Link</a>
            </rux-notification>
        </div>
    </section>
`

export default {
    title: 'Components/Notification',
    component: 'rux-notification',
    argTypes: args,

    parameters: {
        actions: {
            handles: ['ruxclosed rux-notification'],
        },
    },
}

export const Default_ = {
    render: Default.bind(),
    name: 'Default',
    height: '100px',

    args: {
        open: true,
        closeAfter: null,
        message:
            'This is a notification banner. It won’t disappear until the user dismisses it.',
        status: 'standby',
    },
}

export const AutoClose = {
    render: NotificationAutoClose.bind(),

    args: {
        open: true,
        closeAfter: 2000,
    },

    name: 'Auto Close',
    height: '100px',
}

export const HideClose_ = {
    render: HideClose.bind(),

    args: {
        open: true,
        hideClose: true,
    },

    name: 'Hide Close',
    height: '100px',
}

export const Small_ = {
    render: Small.bind(),
    name: 'Small',
    height: '100px',

    args: {
        small: true,
    },
}

export const PrefixSlot_ = {
    render: PrefixSlot.bind(),
    name: 'Prefix Slot',
    height: '100px',

    args: {
        open: true,
    },
}

export const DefaultSlot_ = {
    render: DefaultSlot.bind(),
    name: 'Default Slot',
    height: '100px',

    args: {
        open: true,
    },
}

export const ActionsSlot_ = {
    render: ActionsSlot.bind(),
    name: 'Actions Slot',
    height: '100px',

    args: {
        open: true,
    },
}

export const WithSlottedContent_ = {
    render: WithSlottedContent.bind(),
    name: 'With Slotted Content',
    height: '100px',

    args: {
        open: true,
    },
}

export const WithWrappedContent = {
    render: WithWrappedText.bind(),
    name: 'With Wrapped Content',
    height: '100px',

    args: {
        open: true,
        status: 'normal',
    },
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
