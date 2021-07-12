import { newSpecPage } from '@stencil/core/testing'
import { RuxButtonGroup } from '../../rux-button-group/rux-button-group'
import { RuxButton } from '../../rux-button/rux-button'

describe('rux-button-group', () => {
    it('builds', async () => {
        const buttonGroup = new RuxButtonGroup()

        expect(buttonGroup).toBeTruthy()
        expect(buttonGroup).toEqual({
            align: 'left',
        })
    })

    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxButtonGroup, RuxButton],
            html: `<rux-button-group>
              <rux-button icon="" secondary>Button</rux-button>
              <rux-button icon="">Button</rux-button>
            </rux-button-group>`,
        })

        expect(page.root).toEqualHtml(`
          <rux-button-group>
            <mock:shadow-root>
              <div class="rux-button-group rux-button-group--left">
                <slot></slot>
              </div>
            </mock:shadow-root>
              <rux-button icon="" secondary="">
                  <mock:shadow-root>
                  <button class="rux-button rux-button--secondary" type="button">
                    <slot></slot>
                  </button>
                </mock:shadow-root>
                Button
              </rux-button>
              <rux-button icon="">
                <mock:shadow-root>
                  <button class="rux-button" type="button">
                    <slot></slot>
                  </button>
                </mock:shadow-root>
                Button
              </rux-button>
          </rux-button-group>
        `)
    })

    it('aligns', async () => {
        const page = await newSpecPage({
            components: [RuxButtonGroup],
            html: `<rux-button-group align="right"></rux-button-group>`,
        })

        expect(page.root).toEqualHtml(`
          <rux-button-group align="right">
            <mock:shadow-root>
              <div class="rux-button-group rux-button-group--right">
                <slot></slot>
              </div>
            </mock:shadow-root>
          </rux-button-group>
        `)
    })
})
