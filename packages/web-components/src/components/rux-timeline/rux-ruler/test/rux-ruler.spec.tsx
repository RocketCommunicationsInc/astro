import { newSpecPage } from '@stencil/core/testing'
import { RuxRuler } from '../rux-ruler'

describe('rux-ruler', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxRuler],
            html: `<rux-ruler></rux-ruler>`,
        })

        expect(page.root).toMatchSnapshot()
    })
})
