import { newSpecPage } from '@stencil/core/testing'
import { RuxMenuItem } from '../rux-menu-item'

describe('rux-beta-menu-item', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxMenuItem],
            html: `<rux-menu-item></rux-menu-item>`,
        })
        expect(page.root).toMatchSnapshot()
    })
})
