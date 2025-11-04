import { html } from 'lit-html'
import '../components/rux-dialog/rux-dialog.ts'
import '../components/rux-button/rux-button.ts'
import '../components/rux-input/rux-input.ts'

const Base = (args) => {
    return html`
        <div style="display: flex; flex-flow: column; justify-content: center;">
            <rux-dialog ?open="${args.open}" message="${args.message}" header="${args.header}" confirm-text="${args.confirmText}" deny-text="${args.denyText}"></rux-dialog>
        </div>
    `
}

const Slots = (args) => {
    return html`
        <div style="display: flex; flex-direction: column; justify-content: center;">
            <rux-dialog ?open="${args.open}">
                <span slot="header">Slot Header</span>
                <div style="display: flex; flex-direction: column;">
                    <span style="margin-bottom: 1rem;">Default Slot Content</span>
                    <rux-input label="Input Label" placeholder="Dialog Input"></rux-input>
                </div>
                <div slot="footer" style="display: flex; justify-content: space-between; align-items: center;">
                    <a href="https://astrouxds.com">Link</a>
                    <div style="display: flex; align-items: center; margin-left: auto;">
                        <rux-button secondary style="margin-right: var(--spacing-2);">Cancel</rux-button>
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
}

export const Dialog = {
    render: Base.bind(),
    args: {
        open: true,
        message: 'Dialog message',
        header: 'Dialog header',
        confirmText: 'Release',
        denyText: 'Cancel',
    },
    name: 'Default',
}

export const WithSlots = {
    render: Slots.bind(),
    args: {
        open: true,
    },
    name: 'With Slots',
}
