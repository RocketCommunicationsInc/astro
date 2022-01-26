import { newSpecPage } from '@stencil/core/testing'
import { RuxPlayhead } from '../rux-playhead'

describe('rux-playhead', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxPlayhead],
            html: `<rux-playhead></rux-playhead>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-playhead>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-playhead>
    `)
    })
})
