import { newSpecPage } from '@stencil/core/testing'
import { RuxPushButton } from '../rux-push-button'

describe('rux-push-button', () => {
    it('should render the default push button', async () => {
        const page = await newSpecPage({
            components: [RuxPushButton],
            html: `<rux-push-button></rux-push-button>`,
        })
        expect(page.root).toMatchSnapshot()
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
