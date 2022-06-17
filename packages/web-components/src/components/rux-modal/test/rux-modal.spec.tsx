import { newSpecPage } from '@stencil/core/testing'
import { RuxModal } from '../rux-modal'

describe('rux-modal', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxModal],
            html: `<rux-modal></rux-modal>`,
        })
        expect(page.root).toEqualHtml(`
            <rux-modal>
                <mock:shadow-root></mock:shadow-root>
            </rux-modal>
        `)
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
    it('renders with a mix of slots and props', async () => {
        const page = await newSpecPage({
            components: [RuxModal],
            html: `
            <rux-modal modal-title="Title">
                <div slot="message">Message</div>
                <div slot="footer">Footer</div>
            </rux-modal>
            `,
        })
        expect(page.root).toMatchSnapshot()
    })
})
