import { newSpecPage } from '@stencil/core/testing'
import { RuxContainer } from '../rux-container'

describe('rux-container', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxContainer],
            html: `<rux-container></rux-container>`,
        })
        expect(page.root).toMatchSnapshot()
    })
})
