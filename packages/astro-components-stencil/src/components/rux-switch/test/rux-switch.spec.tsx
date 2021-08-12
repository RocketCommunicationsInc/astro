import { newSpecPage } from '@stencil/core/testing'
import { RuxSwitch } from '../rux-switch'

describe('rux-switch', () => {
    it('builds', async () => {
        const switchBtn = new RuxSwitch()
        const {
            switchId,
            checked,
            disabled,
            errorText,
            name,
            required,
            value,
        } = switchBtn

        expect(switchBtn).toBeTruthy()
        expect({
            switchId,
            checked,
            disabled,
            errorText,
            name,
            required,
            value,
        }).toEqual({
            switchId: 'rux-switch-1',
            checked: false,
            disabled: false,
            errorText: undefined,
            name: '',
            required: false,
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
        expect(page.root).toEqualHtml(`
        <rux-switch value="">
          <mock:shadow-root>
            <div class="rux-form-field" aria-checked="false" role="switch">
              <div class="rux-switch">
                <input aria-checked="false" class="rux-switch__input" id="rux-switch-3" role="switch" type="checkbox" value="">
                <label class="rux-switch__button" htmlfor="rux-switch-3"></label>
              </div>
            </div>
          </mock:shadow-root>
        </rux-switch>
    `)
    })
})
