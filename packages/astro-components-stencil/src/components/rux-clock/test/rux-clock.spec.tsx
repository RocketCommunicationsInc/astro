import { newSpecPage } from '@stencil/core/testing'
import { RuxClock } from '../rux-clock'

describe('rux-clock', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxClock],
            html: `<rux-clock></rux-clock>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-clock>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-clock>
    `)
    })

    it('shows the current time', async () => {
        // Save original global.Date.now so we can put it back
        const realDateNow = Date.now.bind(global.Date)

        // Swap date.now with our stub
        const dateNowStub = jest.fn(() => 577688523000) // April 22, 1988 01:02:03 EDT
        global.Date.now = dateNowStub

        const page = await newSpecPage({
            components: [RuxClock],
            html: `<rux-clock></rux-clock>`,
        })

        expect(page.root.time).toBe('05:02:03 UTC')

        // Put back the original global.date.now
        global.Date.now = realDateNow
    })
})
