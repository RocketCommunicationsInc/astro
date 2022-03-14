import { newSpecPage } from '@stencil/core/testing'
import { RuxRadioGroup } from '../rux-radio-group'

describe('rux-radio-group', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxRadioGroup],
            html: `<rux-radio-group></rux-radio-group>`,
        })
        expect(page.root).toMatchSnapshot()
    })
    it('renders label prop', async () => {
        const page = await newSpecPage({
            components: [RuxRadioGroup],
            html: `<rux-radio-group label="hello"></rux-radio-group>`,
        })
        expect(page.root).toMatchSnapshot()
    })

    it('renders label slot', async () => {
        const page = await newSpecPage({
            components: [RuxRadioGroup],
            html: `<rux-radio-group><div slot="label">hello</div></rux-radio-group>`,
        })
        expect(page.root).toMatchSnapshot()
    })
})
