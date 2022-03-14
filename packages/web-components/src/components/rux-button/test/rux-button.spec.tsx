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
            borderless: false,
            disabled: false,
            type: 'button',
        })
    })

    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxButton],
            html: `<rux-button>Button</rux-button>`,
        })

        expect(page.root).toMatchSnapshot()
    })

    it('sets attributes', async () => {
        const page = await newSpecPage({
            components: [RuxButton],
            html: `<rux-button type="submit" secondary disabled>Button</rux-button>`,
        })

        expect(page.root).toMatchSnapshot()
    })
})
