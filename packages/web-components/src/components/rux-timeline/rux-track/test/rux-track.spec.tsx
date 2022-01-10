import { newSpecPage } from '@stencil/core/testing'
import { RuxTrack } from '../rux-track'

describe('rux-track', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxTrack],
            html: `<rux-track></rux-track>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-track>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-track>
    `)
    })
})
