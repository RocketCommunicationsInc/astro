import { newSpecPage } from '@stencil/core/testing'
import { RuxButton } from '../rux-button'

// Button RuxButton {
//   icon: '',
//   iconOnly: false,
//   outline: false,
//   type: 'button',
//   disabled: false
// }

describe('rux-button', () => {
    it('builds', async () => {
        const button = new RuxButton()

        expect(button).toBeTruthy()
        expect(button).toEqual({
            icon: '',
            iconOnly: false,
            outline: false,
            type: 'button',
            disabled: false,
        })
    })

    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxButton],
            html: `<rux-button>Button</rux-button>`,
        })

        expect(page.root).toEqualHtml(`
          <rux-button>
            <mock:shadow-root>
              <button type="button" class="rux-button">
                <slot></slot>
              </button>
            </mock:shadow-root>
            Button
          </rux-button>
        `)
    })

    it('sets attributes', async () => {
        const page = await newSpecPage({
            components: [RuxButton],
            html: `<rux-button type="submit" outline disabled>Button</rux-button>`,
        })

        expect(page.root).toEqualHtml(`
          <rux-button type="submit" outline disabled>
            <mock:shadow-root>
              <button type="submit" class="rux-button rux-button--outline" disabled aria-disabled="true">
                <slot></slot>
              </button>
            </mock:shadow-root>
            Button
          </rux-button>
        `)
    })
})
