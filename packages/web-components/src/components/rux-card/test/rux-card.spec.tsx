import { newSpecPage } from '@stencil/core/testing'
import { RuxCard } from '../rux-card'

describe('rux-card', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxCard],
            html: `<rux-card></rux-card>`,
        })
        expect(page.root).toMatchSnapshot()
    })
})
