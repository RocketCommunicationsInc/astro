import { newSpecPage } from '@stencil/core/testing'
import { RuxCheckboxGroup } from '../rux-checkbox-group'

describe('rux-checkbox-group', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxCheckboxGroup],
            html: `<rux-checkbox-group></rux-checkbox-group>`,
        })
        expect(page.root).toMatchSnapshot()
    })
    it('renders label prop', async () => {
        const page = await newSpecPage({
            components: [RuxCheckboxGroup],
            html: `<rux-checkbox-group label="hello"></rux-checkbox-group>`,
        })
        expect(page.root).toMatchSnapshot()
    })

    it('renders label slot', async () => {
        const page = await newSpecPage({
            components: [RuxCheckboxGroup],
            html: `<rux-checkbox-group><div slot="label">hello</div></rux-checkbox-group>`,
        })
        expect(page.root).toMatchSnapshot()
    })
})
