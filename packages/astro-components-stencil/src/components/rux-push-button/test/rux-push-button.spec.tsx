import { newSpecPage } from '@stencil/core/testing'
import { RuxPushButton } from '../rux-push-button'

describe('rux-push-button', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxPushButton],
            html: `<rux-push-button></rux-push-button>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-push-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rux-push-button>
    `)
    })
})
