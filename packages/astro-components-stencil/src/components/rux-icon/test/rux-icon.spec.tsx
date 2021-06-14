import { newSpecPage } from '@stencil/core/testing'
import { RuxIcon } from '../rux-icon'

describe('rux-icon', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxIcon],
            html: `<rux-icon icon="360"></rux-icon>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-icon icon="360" size="normal">
        <mock:shadow-root>
          <rux-icon-360 class="icon" size="normal" viewbox="0 0 24 24"></rux-icon-360>
        </mock:shadow-root>
      </rux-icon>
    `)
    })

    it('errors without a label', async () => {
        const icon = new RuxIcon()

        expect(() => {
            icon.labelRequired('')
        }).toThrowError('label is required')
    })
})
