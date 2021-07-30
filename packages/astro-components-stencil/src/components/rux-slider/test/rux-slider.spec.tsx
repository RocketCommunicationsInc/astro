import { newSpecPage } from '@stencil/core/testing'
import { RuxSlider } from '../rux-slider'

describe('rux-slider', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxSlider],
            html: `<rux-slider></rux-slider>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-slider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-slider>
    `)
    })
})
