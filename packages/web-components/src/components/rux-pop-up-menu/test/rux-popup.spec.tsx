import { newSpecPage } from '@stencil/core/testing'
import { RuxPopUpMenu } from '../rux-pop-up-menu'

describe('rux-pop-up-menu', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxPopUpMenu],
            html: `<rux-pop-up-menu></rux-pop-up-menu>`,
        })
        expect(page.root).toMatchSnapshot()
    })
})
