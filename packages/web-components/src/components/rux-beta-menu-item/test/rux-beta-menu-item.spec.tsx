import { newSpecPage } from '@stencil/core/testing'
import { RuxBetaMenuItem } from '../rux-beta-menu-item'

describe('rux-beta-menu-item', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxBetaMenuItem],
            html: `<rux-beta-menu-item></rux-beta-menu-item>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-beta-menu-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-beta-menu-item>
    `)
    })
})
