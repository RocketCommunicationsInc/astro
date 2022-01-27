import { newSpecPage } from '@stencil/core/testing'
import { RuxInput } from '../rux-input'

describe('rux-input', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxInput],
            html: `<rux-input></rux-input>`,
        })
        expect(page.root).toMatchSnapshot()
    })

    it('renders label prop', async () => {
        const page = await newSpecPage({
            components: [RuxInput],
            html: `<rux-input label="hello"></rux-input>`,
        })
        expect(page.root).toMatchSnapshot()
    })

    it('renders label slot', async () => {
        const page = await newSpecPage({
            components: [RuxInput],
            html: `<rux-input><div slot="label">hello</div></rux-input>`,
        })
        expect(page.root).toMatchSnapshot()
    })
    it('renders rux-icon if type is password', async () => {
        const page = await newSpecPage({
            components: [RuxInput],
            html: `<rux-input type='password'></rux-input>`,
        })
        expect(page.root).toMatchSnapshot()
    })
})
