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
              <div class="rux-form-field" part="form-field">
                <div class="hidden rux-label" part="label">
                  <slot name="label"></slot>
                </div>
                <div class="rux-radio-group" part="radiogroup" role="radiogroup">
                  <slot></slot>
                </div>
              </div>
            </mock:shadow-root>
          </rux-radio-group>
        `)
    })
    it('renders label prop', async () => {
        const page = await newSpecPage({
            components: [RuxRadioGroup],
            html: `<rux-radio-group label="hello"></rux-radio-group>`,
        })
        expect(page.root).toEqualHtml(`
        <rux-radio-group label="hello">
          <mock:shadow-root>
          <div class="rux-form-field" part="form-field">
              <div class="rux-label" part="label">
                <slot name="label">hello</slot>
              </div>
              <div class="rux-radio-group" part="radiogroup" role="radiogroup">
                <slot></slot>
              </div>
            </div>
          </mock:shadow-root>
        </rux-radio-group>
      `)
    })

    it('renders label slot', async () => {
        const page = await newSpecPage({
            components: [RuxRadioGroup],
            html: `<rux-radio-group><div slot="label">hello</div></rux-radio-group>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-radio-group>
        <mock:shadow-root>
        <div class="rux-form-field" part="form-field">
          <div class="rux-label" part="label">
            <slot name="label"></slot>
          </div>
          <div class="rux-radio-group" part="radiogroup" role="radiogroup">
            <slot></slot>
          </div>
          </div>
        </mock:shadow-root>
        <div slot="label">hello</div>
      </rux-radio-group>
    `)
    })
})
