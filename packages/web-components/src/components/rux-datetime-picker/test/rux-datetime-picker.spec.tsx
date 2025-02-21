import { newSpecPage } from '@stencil/core/testing'
import { RuxDatetimePicker } from '../rux-datetime-picker'

describe('rux-datetime-picker', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxDatetimePicker],
            html: `<rux-datetime-picker></rux-datetime-picker>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-datetime-picker>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-datetime-picker>
    `)
    })
})
