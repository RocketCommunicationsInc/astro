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
              <label aria-hidden="true" class="rux-textarea-label" htmlfor="rux-textarea-1">
                <span class="hidden">
                  <slot name="label"></slot>
                </span>
              </label>
              <textarea aria-invalid="false" class="rux-textarea" id="rux-textarea-1" value=""></textarea>
            </div>
            </mock:shadow-root>
            <input class="aux-input" type="hidden" value="">
          </rux-textarea>
        `)
    })

    it('renders label prop', async () => {
        const page = await newSpecPage({
            components: [RuxTextarea],
            html: `<rux-textarea label="hello"></rux-textarea>`,
        })
        expect(page.root).toEqualHtml(`
        <rux-textarea label="hello" value="">
          <mock:shadow-root>
          <div class="rux-textarea-field">
            <label aria-hidden="false" class="rux-textarea-label" htmlfor="rux-textarea-2">
              <span>
                <slot name="label">hello</slot>
              </span>
            </label>
            <textarea aria-invalid="false" class="rux-textarea" id="rux-textarea-2" value=""></textarea>
          </div>
          </mock:shadow-root>
          <input class="aux-input" type="hidden" value="">
        </rux-textarea>
      `)
    })

    it('renders label slot', async () => {
        const page = await newSpecPage({
            components: [RuxTextarea],
            html: `<rux-textarea><div slot="label">hello</div></rux-textarea>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-textarea value="">
        <mock:shadow-root>
        <div class="rux-textarea-field">
          <label aria-hidden="false" class="rux-textarea-label" htmlfor="rux-textarea-3">
            <span>
              <slot name="label"></slot>
            </span>
          </label>
          <textarea aria-invalid="false" class="rux-textarea" id="rux-textarea-3" value=""></textarea>
        </div>
        </mock:shadow-root>
        <div slot="label">hello</div>
        <input class="aux-input" type="hidden" value="">
      </rux-textarea>
    `)
    })
})
