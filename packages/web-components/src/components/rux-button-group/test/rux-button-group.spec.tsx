import { newSpecPage } from '@stencil/core/testing'
import { RuxButtonGroup } from '../../rux-button-group/rux-button-group'
import { RuxButton } from '../../rux-button/rux-button'

describe('rux-button-group', () => {
    it('builds', async () => {
        const buttonGroup = new RuxButtonGroup()

        expect(buttonGroup).toBeTruthy()
        expect(buttonGroup).toEqual({
            hAlign: 'left',
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
        expect(page.root).toMatchSnapshot()
    })

    it('aligns', async () => {
        const page = await newSpecPage({
            components: [RuxButtonGroup],
            html: `<rux-button-group h-align="right"></rux-button-group>`,
        })

        expect(page.root).toMatchSnapshot()
    })
})
