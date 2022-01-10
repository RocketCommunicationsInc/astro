import { newSpecPage } from '@stencil/core/testing'
import { RuxTimeline } from '../rux-timeline'

describe('rux-timeline', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxTimeline],
            html: `<rux-timeline></rux-timeline>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-timeline>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-timeline>
    `)
    })
})
