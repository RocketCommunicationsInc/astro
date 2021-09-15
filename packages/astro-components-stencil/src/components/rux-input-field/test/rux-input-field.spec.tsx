import { newSpecPage } from '@stencil/core/testing'
import { RuxInputField } from '../rux-input-field'

describe('rux-input', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxInputField],
            html: `<rux-input-field></rux-input-field>`,
        })
        expect(page.root).toEqualHtml(`
          <rux-input-field value="">
            <mock:shadow-root>
            <div class="rux-form-field">
              <input aria-invalid="false" class="rux-input" id="rux-input-1" type="text" value="">
            </div>
            </mock:shadow-root>
            <input class="aux-input" type="hidden" value="">
          </rux-input-field>
    `)
    })
})
