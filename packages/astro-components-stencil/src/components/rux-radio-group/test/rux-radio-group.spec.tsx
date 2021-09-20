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
              <div class="hidden rux-label">
                <slot name="label"></slot>
              </div>
              <div class="rux-radio-group" role="radiogroup">
                <slot></slot>
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
            <div class="rux-label">
              <slot name="label">hello</slot>
            </div>
            <div class="rux-radio-group" role="radiogroup">
              <slot></slot>
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
          <div class="rux-label">
            <slot name="label"></slot>
          </div>
          <div class="rux-radio-group" role="radiogroup">
            <slot></slot>
          </div>
        </mock:shadow-root>
        <div slot="label">hello</div>
      </rux-radio-group>
    `)
    })
})
