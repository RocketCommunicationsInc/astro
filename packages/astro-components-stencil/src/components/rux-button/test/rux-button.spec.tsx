import { newSpecPage } from '@stencil/core/testing'
import { RuxButton } from '../rux-button'

describe('rux-button', () => {
    it('builds', async () => {
        const button = new RuxButton()

        expect(button).toBeTruthy()
        expect(button).toEqual({
            iconOnly: false,
            handleClick: expect.any(Function),
            secondary: false,
            disabled: false,
            type: 'button',
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
            html: `<rux-button type="submit" secondary disabled>Button</rux-button>`,
        })

        expect(page.root).toEqualHtml(`
          <rux-button type="submit" secondary disabled>
            <mock:shadow-root>
              <button type="button" class="rux-button rux-button--secondary" disabled aria-disabled="true">
                <slot></slot>
              </button>
            </mock:shadow-root>
            Button
          </rux-button>
        `)
    })
})
