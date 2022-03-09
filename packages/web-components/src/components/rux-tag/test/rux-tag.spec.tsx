import { newSpecPage } from '@stencil/core/testing'
import { RuxTag } from '../rux-tag'

describe('rux-tag', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxTag],
            html: `<rux-tag></rux-tag>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-tag>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-tag>
    `)
    })
})
