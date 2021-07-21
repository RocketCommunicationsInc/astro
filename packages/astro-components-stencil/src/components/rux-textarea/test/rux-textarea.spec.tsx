import { newSpecPage } from '@stencil/core/testing'
import { RuxTextarea } from '../rux-textarea'

describe('rux-textarea', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxTextarea],
            html: `<rux-textarea></rux-textarea>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-textarea value="">
        <mock:shadow-root>
        <div class="rux-textarea-field">
          <label class="rux-textarea-label" htmlfor="input-1"></label>
          <textarea aria-invalid="false" class="rux-textarea" id="input-1" value=""></textarea>
        </div>
        </mock:shadow-root>
      </rux-textarea>
    `)
    })
})
