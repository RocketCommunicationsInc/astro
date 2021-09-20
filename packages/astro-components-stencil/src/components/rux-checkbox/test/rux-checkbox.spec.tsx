import { newSpecPage } from '@stencil/core/testing'
import { RuxCheckbox } from '../rux-checkbox'

describe('rux-checkbox', () => {
    it('builds', async () => {
        const checkbox = new RuxCheckbox()
        const {
            checkboxId,
            checked,
            disabled,
            errorText,
            indeterminate,
            name,
            required,
            value,
        } = checkbox

        expect(checkbox).toBeTruthy()
        expect({
            checkboxId,
            checked,
            disabled,
            errorText,
            indeterminate,
            name,
            required,
            value,
        }).toEqual({
            checkboxId: 'rux-checkbox-1',
            checked: false,
            disabled: false,
            errorText: undefined,
            indeterminate: false,
            name: '',
            required: false,
            value: '',
        })
    })

    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxCheckbox],
            html: `<rux-checkbox></rux-checkbox>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-checkbox value="">
        <mock:shadow-root>
          <div class="rux-form-field">
            <div class="rux-checkbox">
                <input id="rux-checkbox-2" type="checkbox" value="">
                <label htmlfor="rux-checkbox-2">
                  <span>
                  <slot></slot>
                  </span>
                </label>
            </div>
          </div>
        </mock:shadow-root>
      </rux-checkbox>
    `)
    })
})
