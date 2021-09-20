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
          <rux-switch aria-checked="false" class="rux-form-field" role="switch" value="">
            <mock:shadow-root>
                <div class="rux-switch">
                  <input aria-checked="false" class="rux-switch__input" id="rux-switch-3" role="switch" type="checkbox" value="">
                  <label class="rux-switch__button" htmlfor="rux-switch-3">
                  <span class="hidden rux-switch__label">
                    <slot name="label"></slot>
                  </span>
                  </label>
                </div>
            </mock:shadow-root>
          </rux-switch>
      `)
    })

    it('renders label prop', async () => {
        const page = await newSpecPage({
            components: [RuxSwitch],
            html: `<rux-switch label="hello"></rux-switch>`,
        })
        expect(page.root).toEqualHtml(`
        <rux-switch label="hello" aria-checked="false" class="rux-form-field" role="switch" value="">
          <mock:shadow-root>
              <div class="rux-switch">
                <input aria-checked="false" class="rux-switch__input" id="rux-switch-4" role="switch" type="checkbox" value="">
                <label class="rux-switch__button" htmlfor="rux-switch-4">
                <span class="rux-switch__label">
                  <slot name="label">hello</slot>
                </span>
                </label>
              </div>
          </mock:shadow-root>
        </rux-switch>
    `)
    })
    it('renders label slot', async () => {
        const page = await newSpecPage({
            components: [RuxSwitch],
            html: `<rux-switch><div slot="label">hello</div></rux-switch>`,
        })
        expect(page.root).toEqualHtml(`
      <rux-switch aria-checked="false" class="rux-form-field" role="switch" value="">
        <mock:shadow-root>
            <div class="rux-switch">
              <input aria-checked="false" class="rux-switch__input" id="rux-switch-5" role="switch" type="checkbox" value="">
              <label class="rux-switch__button" htmlfor="rux-switch-5">
              <span class="rux-switch__label">
                <slot name="label"></slot>
              </span>
              </label>
            </div>
        </mock:shadow-root>
        <div slot="label">hello</div>
      </rux-switch>
  `)
    })
})
