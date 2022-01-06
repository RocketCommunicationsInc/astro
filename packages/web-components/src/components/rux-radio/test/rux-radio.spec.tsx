import { newSpecPage } from '@stencil/core/testing'
import { RuxRadio } from '../rux-radio'

describe('rux-radio', () => {
    it('builds', async () => {
        const radio = new RuxRadio()
        const { radioId, checked, disabled, name, value } = radio

        expect(radio).toBeTruthy()
        expect({
            radioId,
            checked,
            disabled,
            name,
            value,
        }).toEqual({
            radioId: 'rux-radio-1',
            checked: false,
            disabled: false,
            name: '',
            value: '',
        })
    })

    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxRadio],
            html: `<rux-radio value="test"></rux-radio>`,
        })
        expect(page.root).toMatchSnapshot()
    })
})
