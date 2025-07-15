import { extractArgTypes } from '@astrouxds/storybook-addon-docs-stencil'
import { html } from 'lit-html'
import { withActions } from '@storybook/addon-actions/decorator'

const Base = (args) => {
    return html`
        <div style="display: flex; flex-flow: column; justify-content: center;">
            <rux-dialog
                ?open="${args.open}"
                message="${args.message}"
                header="${args.header}"
                confirm-text="${args.confirmText}"
                deny-text="${args.denyText}"
            ></rux-dialog>
        </div>
    `
}

const Slots = (args) => {
    return html`
        <div
            style="display: flex; flex-direction: column; justify-content: center;"
        >
            <rux-dialog ?open="${args.open}">
                <span slot="header">Slot Header</span>
                <div style="display: flex; flex-direction: column;">
                    <span style="margin-bottom: 1rem;"
                        >Default Slot Content</span
                    >
                    <rux-input
                        label="Input Label"
                        placeholder="Dialog Input"
                    ></rux-input>
                </div>
                <div
                    slot="footer"
                    style="display: flex; justify-content: space-between; align-items: center;"
                >
                    <a href="astrouxds.com">Link</a>
                    <div
                        style="display: flex; align-items: center; margin-left: auto;"
                    >
                        <rux-button
                            secondary
                            style="margin-right: var(--spacing-2);"
                            >Cancel</rux-button
                        >
                        <rux-button>Confirm</rux-button>
                    </div>
                </div>
            </rux-dialog>
        </div>
    `
}

export default {
    title: 'Components/Dialog',
    component: 'rux-dialog',
    argTypes: extractArgTypes('rux-dialog'),

    parameters: {
        actions: {
            handles: ['ruxdialogclosed', 'ruxdialogopened'],
        },
    },
    decorators: [withActions],
}

export const Dialog = {
    render: Base.bind(),

    args: {
        open: true,
        message: 'Dialog message',
        header: 'Dialog header',
        confirmText: 'Release',
        denyText: 'Cancel',
        clickToClose: false,
    },

    name: 'Dialog',
}

export const WithSlots = {
    render: Slots.bind(),

    args: {
        open: true,
        clickToClose: false,
    },

    argTypes: {
        header: {
            table: {
                disable: true,
            },
        },

        message: {
            table: {
                disable: true,
            },
        },

        confirmText: {
            table: {
                disable: true,
            },
        },

        denyText: {
            table: {
                disable: true,
            },
        },
    },

    name: 'With Slots',
}
