import { newSpecPage } from '@stencil/core/testing'
import { RuxTabs } from '../rux-tabs'

describe('rux-tabs', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxTabs],
            html: `<rux-tabs></rux-tabs>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-tabs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-tabs>
    `)
    })
})
