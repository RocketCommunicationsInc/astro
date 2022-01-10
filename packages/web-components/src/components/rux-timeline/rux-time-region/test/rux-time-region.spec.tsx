import { newSpecPage } from '@stencil/core/testing'
import { RuxTimeRegion } from '../rux-time-region'

describe('rux-time-region', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxTimeRegion],
            html: `<rux-time-region></rux-time-region>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-time-region>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-time-region>
    `)
    })
})
