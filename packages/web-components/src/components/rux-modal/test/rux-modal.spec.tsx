import { newSpecPage } from '@stencil/core/testing'
import { RuxModal } from '../rux-modal'

describe('rux-modal', () => {
    it('builds', async () => {
        const modal: RuxModal = new RuxModal()
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
            components: [RuxModal],
            html: `
            <rux-modal>
                <span slot="header">Header</span>
                <div slot="message">Message</div>
                <div slot="footer">Footer</div>
            </rux-modal>
            `,
        })
        expect(page.root).toMatchSnapshot()
    })
})
