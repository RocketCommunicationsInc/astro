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
})
