import { newSpecPage } from '@stencil/core/testing'
import { RuxPushButton } from '../rux-push-button'

describe('rux-push-button', () => {
    it('should render the default push button', async () => {
        const page = await newSpecPage({
            components: [RuxPushButton],
            html: `<rux-push-button></rux-push-button>`,
        })
        expect(page.root).toEqualHtml(`
        <rux-push-button aria-checked="false" role="switch" value="">
            <mock:shadow-root>
                <input class="rux-push-button__input" id="rux-push-button-0" type="checkbox" value="">
                <label class="rux-push-button__button" htmlFor="rux-push-button-0">Push Button</label>
                <slot></slot>
            </mock:shadow-root>
        </rux-push-button>
    `)
    })

    it('should auto increments its own unique id', async () => {
        const page = await newSpecPage({
            components: [RuxPushButton],
            html: `<rux-push-button></rux-push-button> <rux-push-button></rux-push-button>`,
        })
        const firstPushButton = page.body.querySelectorAll('rux-push-button')[0]
        const secondPushButton = page.body.querySelectorAll(
            'rux-push-button'
        )[1]
        const firstInputId = firstPushButton
            .shadowRoot!.querySelector('input')!
            .getAttribute('id')
        const secondInputId = secondPushButton
            .shadowRoot!.querySelector('input')!
            .getAttribute('id')

        expect(secondInputId).toBe('rux-push-button-2')
        expect(firstInputId).not.toBe('rux-push-button-2')
    })
})
