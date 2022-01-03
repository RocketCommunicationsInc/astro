import { newSpecPage } from '@stencil/core/testing'
import { RuxMenuItem } from '../rux-menu-item'

describe('rux-menu-item', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxMenuItem],
            html: `<rux-menu-item></rux-menu-item>`,
        })
        expect(page.root).toMatchSnapshot()
    })
    it('changes to anchor tag based on an href prop', async () => {
        const page = await newSpecPage({
            components: [RuxMenuItem],
            html: `<rux-menu-item href="https://www.astrouxds.com"></rux-menu-item>`,
        })
        expect(page.root).toMatchSnapshot()
    })
})
