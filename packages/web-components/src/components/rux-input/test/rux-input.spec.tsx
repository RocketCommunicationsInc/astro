import { newSpecPage } from '@stencil/core/testing'
import { RuxInput } from '../rux-input'

describe('rux-input', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxInput],
            html: `<rux-input></rux-input>`,
        })
        expect(page.root).toEqualHtml(`
          <rux-input value="">
            <mock:shadow-root>
            <div class="rux-form-field" part="form-field">
              <label aria-hidden="true" class="rux-input-label" htmlfor="rux-input-1" part="label">
                <span class="hidden">
                  <slot name="label"></slot>
                </span>
              </label>
              <input aria-invalid="false" class="rux-input" id="rux-input-1" type="text" value="">
            </div>
            </mock:shadow-root>
            <input class="aux-input" type="hidden" value="">
          </rux-input>
      `)
    })

    it('renders label prop', async () => {
        const page = await newSpecPage({
            components: [RuxInput],
            html: `<rux-input label="hello"></rux-input>`,
        })
        expect(page.root).toEqualHtml(`
        <rux-input label="hello" value="">
          <mock:shadow-root>
          <div class="rux-form-field" part="form-field">
            <label aria-hidden="false" class="rux-input-label" htmlfor="rux-input-2" part="label">
              <span>
                <slot name="label">hello</slot>
              </span>
            </label>
            <input aria-invalid="false" class="rux-input" id="rux-input-2" type="text" value="">
          </div>
          </mock:shadow-root>
          <input class="aux-input" type="hidden" value="">
        </rux-input>
      `)
    })

    it('renders label slot', async () => {
        const page = await newSpecPage({
            components: [RuxInput],
            html: `<rux-input><div slot="label">hello</div></rux-input>`,
        })
        expect(page.root).toEqualHtml(`
        <rux-input value="">
          <mock:shadow-root>
          <div class="rux-form-field" part="form-field">
            <label aria-hidden="false" class="rux-input-label" htmlfor="rux-input-3" part="label">
              <span>
                <slot name="label"></slot>
              </span>
            </label>
            <input aria-invalid="false" class="rux-input" id="rux-input-3" type="text" value="">
          </div>
          </mock:shadow-root>
          <div slot="label">hello</div>
          <input class="aux-input" type="hidden" value="">
        </rux-input>
      `)
    })
    it('renders rux-icon if type is password', async () => {
        const page = await newSpecPage({
            components: [RuxInput],
            html: `<rux-input type='password'></rux-input>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-input type="password" value>
      <mock:shadow-root>
      <div class="rux-form-field" part="form-field">
      <label aria-hidden="true" class="rux-input-label" htmlfor="rux-input-4" part="label">
             <span class="hidden">
               <slot name="label"></slot>
              </span>
            </label>
        <input value="" type="password" aria-invalid="false" class="rux-input" id="rux-input-4">
        </input>
        <rux-icon part="icon" icon="visibility" class="show-password">
        </rux-icon>
      </div>
      </mock:shadow-root>
      <input class="aux-input" type="hidden" value="">
      </rux-icon>
      `)
    })
})

/*

        <rux-input type="password" value class="hydrated">
        <div class="rux-form-field" part="form-field">
          <label class="rux-input-label" part="label" aria-hidden="true" for="rux-input-1"></label>
          <input name type="password" aria-invalid="false" class="rux-input" id="rux-input-1">
          </input>
        </div>

*/
