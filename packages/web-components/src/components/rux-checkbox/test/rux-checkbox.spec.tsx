import { newSpecPage } from '@stencil/core/testing'
import { RuxCheckbox } from '../rux-checkbox'

describe('rux-checkbox', () => {
    it('builds', async () => {
        const checkbox = new RuxCheckbox()
        const {
            checkboxId,
            checked,
            disabled,
            indeterminate,
            name,
            value,
        } = checkbox

        expect(checkbox).toBeTruthy()
        expect({
            checkboxId,
            checked,
            disabled,
            indeterminate,
            name,
            value,
        }).toEqual({
            checkboxId: 'rux-checkbox-1',
            checked: false,
            disabled: false,
            errorText: undefined,
            indeterminate: false,
            name: '',
            value: '',
        })
    })

    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxCheckbox],
            html: `<rux-checkbox></rux-checkbox>`,
        })
        expect(page.root).toMatchSnapshot()
    })
})
