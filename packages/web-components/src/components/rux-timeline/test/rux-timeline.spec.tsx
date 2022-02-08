import { newSpecPage } from '@stencil/core/testing'
import { RuxTimeline } from '../rux-timeline'

describe('rux-timeline', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxTimeline],
            html: `<rux-timeline start="2021-02-01T00:00:00Z" end="2021-02-05T12:00:00Z"></rux-timeline>`,
        })

        expect(page.root).toMatchSnapshot()
    })
})
