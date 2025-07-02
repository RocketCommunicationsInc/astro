import { newSpecPage } from '@stencil/core/testing'
import { RuxCalendar } from '../rux-calendar'

describe('rux-calendar', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxCalendar],
            html: `<rux-calendar></rux-calendar>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-calendar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-calendar>
    `)
    })
})
