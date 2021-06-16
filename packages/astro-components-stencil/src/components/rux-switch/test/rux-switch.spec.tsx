import { newSpecPage } from '@stencil/core/testing'
import { RuxSwitch } from '../rux-switch'

describe('rux-switch', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxSwitch],
            html: `<rux-switch></rux-switch>`,
        })
        expect(page.root).toEqualHtml(`
          <rux-switch aria-checked="false" role="switch">
            <mock:shadow-root>
              <div class="rux-switch">
                <input aria-checked="false" class="rux-switch__input" id="rux-switch-0" role="switch" type="checkbox">
                <label class="rux-switch__button" htmlfor="rux-switch-0"></label>
              </div>
              </mock:shadow-root>
          </rux-switch>
        `)
    })

    it('auto increments its own unique id', async () => {
        const page = await newSpecPage({
            components: [RuxSwitch],
            html: `<rux-switch></rux-switch> <rux-switch></rux-switch>`,
        })
        const second = page.body.querySelectorAll('rux-switch')[1]

        const inputId = second.shadowRoot
            .querySelector('input')
            .getAttribute('id')
        expect(inputId).toBe('rux-switch-2')
    })

    it('handles event', async () => {
        const page = await newSpecPage({
            components: [RuxSwitch],
            html: `<rux-switch></rux-switch>`,
        })
        page.waitForChanges()
        const handleClick = jest.fn()
        page.root.addEventListener('click', handleClick)
        page.root.dispatchEvent(new MouseEvent('click'))
        expect(handleClick).toHaveBeenCalled()
    })
})
