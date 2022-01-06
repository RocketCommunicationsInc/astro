import { newSpecPage } from '@stencil/core/testing'
import { RuxTextarea } from '../rux-textarea'

describe('rux-textarea', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxTextarea],
            html: `<rux-textarea></rux-textarea>`,
        })
        expect(page.root).toMatchSnapshot()
    })

    it('renders label prop', async () => {
        const page = await newSpecPage({
            components: [RuxTextarea],
            html: `<rux-textarea label="hello"></rux-textarea>`,
        })
        expect(page.root).toMatchSnapshot()
    })

    it('renders label slot', async () => {
        const page = await newSpecPage({
            components: [RuxTextarea],
            html: `<rux-textarea><div slot="label">hello</div></rux-textarea>`,
        })
        expect(page.root).toMatchSnapshot()
    })
})
