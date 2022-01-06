import { newSpecPage } from '@stencil/core/testing'
import { RuxSlider } from '../rux-slider'

describe('rux-slider', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxSlider],
            html: `<rux-slider></rux-slider>`,
        })
        expect(page.root).toMatchSnapshot()
    })

    it('renders label prop', async () => {
        const page = await newSpecPage({
            components: [RuxSlider],
            html: `<rux-slider label="hello"></rux-slider>`,
        })
        expect(page.root).toMatchSnapshot()
    })

    it('renders label slot', async () => {
        const page = await newSpecPage({
            components: [RuxSlider],
            html: `<rux-slider><div slot="label">hello</div></rux-slider>`,
        })
        expect(page.root).toMatchSnapshot()
    })
})
