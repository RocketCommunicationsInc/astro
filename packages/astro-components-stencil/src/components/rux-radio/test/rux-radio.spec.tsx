import { newSpecPage } from '@stencil/core/testing'
import { RuxRadio } from '../rux-radio'

describe('rux-radio', () => {
    it('builds', async () => {
        const radio = new RuxRadio()
        const {
            radioId,
            checked,
            disabled,
            errorText,
            name,
            required,
            value,
        } = radio

        expect(radio).toBeTruthy()
        expect({
            radioId,
            checked,
            disabled,
            errorText,
            name,
            required,
            value,
        }).toEqual({
            radioId: 'rux-radio-1',
            checked: false,
            disabled: false,
            errorText: undefined,
            name: '',
            required: false,
            value: '',
        })
    })

    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxRadio],
            html: `<rux-radio></rux-radio>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-radio value="">
        <mock:shadow-root>
          <div class="rux-form-field">
            <div class="rux-radio">
                <input id="rux-radio-2" type="radio" value="">
                <label htmlfor="rux-radio-2">
                  <slot></slot>
                </label>
            </div>
          </div>
        </mock:shadow-root>
      </rux-radio>
    `)
    })
})
