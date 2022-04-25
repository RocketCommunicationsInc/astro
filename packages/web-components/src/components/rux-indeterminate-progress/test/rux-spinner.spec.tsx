import { newSpecPage } from '@stencil/core/testing'
import { RuxIndeterminateProgress } from '../rux-indeterminate-progress'

describe('rux-spinner', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxIndeterminateProgress],
            html: `<rux-indeterminate-progress></rux-indeterminate-progress>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-indeterminate-progress>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-indeterminate-progress>
    `)
    })
})
