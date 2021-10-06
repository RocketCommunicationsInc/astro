import { newSpecPage } from '@stencil/core/testing'
import { RuxSelect } from '../rux-select'

describe('rux-select', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxSelect],
            html: `
            <rux-select label="test">
                <rux-option label="one"></rux-option>
                <rux-option label="two"></rux-option>
            </rux-select>
      `,
        })
        expect(page.root).toEqualHtml(`
          <rux-select label="test">
            <mock:shadow-root>
                <label aria-hidden="false">
                    <span>
                        <slot name="label">
                            test
                        </slot>
                    </span>
                </label>
                <select class="rux-select"></select>
                <div aria-hidden="true" class="hidden">
                    <slot></slot>
                </div>
            </mock:shadow-root>
              <rux-option label="one"></rux-option>
              <rux-option label="two"></rux-option>
              <input class="aux-input" type="hidden" value="">
          </rux-select>
      `)
    })

    it('renders option groups', async () => {
        const page = await newSpecPage({
            components: [RuxSelect],
            html: `
            <rux-select>
              <rux-option label="outside option"></rux-option>
              <rux-option-group label="Group one">
                <rux-option label="inside option"></rux-option>
              </rux-option-group>
              <rux-option label="outside option"></rux-option>
            </rux-select>
          `,
        })
        expect(page.root).toEqualHtml(`
        <rux-select>
            <mock:shadow-root>
                <label aria-hidden="true">
                    <span class="hidden">
                        <slot name="label"></slot>
                    </span>
                </label>
                <select class="rux-select"></select>
                <div aria-hidden="true" class="hidden">
                    <slot></slot>
                </div>
            </mock:shadow-root>
            <rux-option label="outside option"></rux-option>
            <rux-option-group label="Group one">
                <rux-option label="inside option"></rux-option>
            </rux-option-group>
            <rux-option label="outside option"></rux-option>
            <input class="aux-input" type="hidden" value="">
        </rux-select>
    `)
    })
})
