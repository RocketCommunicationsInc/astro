import { newSpecPage } from '@stencil/core/testing'
import { RuxDialog } from '../rux-dialog'

describe('rux-dialog', () => {
    it('builds', async () => {
        const modal: RuxDialog = new RuxDialog()
        const { open, modalMessage, modalTitle, confirmText, denyText } = modal
        expect(modal).toBeTruthy()
        expect({
            open,
            modalMessage,
            modalTitle,
            confirmText,
            denyText,
        }).toEqual({
            open: false,
            modalMessage: undefined,
            modalTitle: undefined,
            confirmText: 'Confirm',
            denyText: 'Cancel',
        })
    })
    it('renders with slots', async () => {
        const page = await newSpecPage({
            components: [RuxDialog],
            html: `
            <rux-dialog>
                <span slot="header">Header</span>
                <div slot="message">Message</div>
                <div slot="footer">Footer</div>
            </rux-dialog>
            `,
        })
        expect(page.root).toMatchSnapshot()
    })
    it('renders with a mix of slots and props', async () => {
        const page = await newSpecPage({
            components: [RuxDialog],
            html: `
            <rux-dialog modal-title="Title">
                <div slot="message">Message</div>
                <div slot="footer">Footer</div>
            </rux-dialog>
            `,
        })
        expect(page.root).toMatchSnapshot()
    })
})
