import { newSpecPage } from '@stencil/core/testing'
import { RuxRadioGroup } from '../rux-radio-group'

describe('rux-radio-group', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxRadioGroup],
            html: `<rux-radio-group></rux-radio-group>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-radio-group>
        <mock:shadow-root>
        <div class="rux-radio-group" role="radiogroup">
          <slot></slot>
          </div>
        </mock:shadow-root>
      </rux-radio-group>
    `)
    })
})
