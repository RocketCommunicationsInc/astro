import { newSpecPage } from '@stencil/core/testing'
import { RuxIcon } from '../rux-icon'

describe('rux-icon', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxIcon],
            html: `<rux-icon icon="360"></rux-icon>`,
        })
        expect(page.root).toMatchSnapshot()
    })
})
