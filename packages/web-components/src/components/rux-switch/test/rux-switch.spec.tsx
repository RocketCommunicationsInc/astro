import { newSpecPage } from '@stencil/core/testing'
import { RuxSwitch } from '../rux-switch'

describe('rux-switch', () => {
    it('builds', async () => {
        const switchBtn = new RuxSwitch()
        const { switchId, checked, disabled, name, value } = switchBtn

        expect(switchBtn).toBeTruthy()
        expect({
            switchId,
            checked,
            disabled,
            name,
            value,
        }).toEqual({
            switchId: 'rux-switch-1',
            checked: false,
            disabled: false,
            errorText: undefined,
            name: '',
            value: '',
        })
    })

    it('auto-increments', () => {
        const switchBtn = new RuxSwitch()
        const { switchId } = switchBtn
        expect({ switchId }).toEqual({ switchId: 'rux-switch-2' })
    })

    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxSwitch],
            html: `<rux-switch></rux-switch>`,
        })
        expect(page.root).toMatchSnapshot()
    })

    it('renders label prop', async () => {
        const page = await newSpecPage({
            components: [RuxSwitch],
            html: `<rux-switch label="hello"></rux-switch>`,
        })
        expect(page.root).toMatchSnapshot()
    })
    it('renders label slot', async () => {
        const page = await newSpecPage({
            components: [RuxSwitch],
            html: `<rux-switch><div slot="label">hello</div></rux-switch>`,
        })
        expect(page.root).toMatchSnapshot()
    })
})
