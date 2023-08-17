import { newSpecPage } from '@stencil/core/testing'
import { RuxJulianInput } from '../rux-julian-input'

describe('rux-julian-input', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxJulianInput],
            html: `<rux-julian-input></rux-julian-input>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-julian-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-julian-input>
    `)
    })
})
