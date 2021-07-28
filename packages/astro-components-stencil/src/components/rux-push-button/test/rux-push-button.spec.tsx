import { newSpecPage } from '@stencil/core/testing'
import { RuxPushButton } from '../rux-push-button'

describe('rux-push-button', () => {
    it('should render the default push button', async () => {
        const page = await newSpecPage({
            components: [RuxPushButton],
            html: `<rux-push-button></rux-push-button>`,
        })
        expect(page.root).toEqualHtml(`
        <rux-push-button aria-checked="false" role="switch">
            <mock:shadow-root>
                <input class="rux-push-button__input" id="rux-push-button-0" type="checkbox">
                <label class="rux-push-button__button" htmlFor="rux-push-button-0"><slot>Push Button</slot></label>
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
        const firstInputId = firstPushButton.shadowRoot
            .querySelector('input')
            .getAttribute('id')
        const secondInputId = secondPushButton.shadowRoot
            .querySelector('input')
            .getAttribute('id')

        expect(secondInputId).toBe('rux-push-button-2')
        expect(firstInputId).not.toBe('rux-push-button-2')
    })

    it('should call handleClick on click event', async () => {
        const page = await newSpecPage({
            components: [RuxPushButton],
            html: `<rux-push-button></rux-push-button>`,
        })
        page.waitForChanges()
        const handleClick = jest.fn()
        page.root.addEventListener('click', handleClick)
        page.root.dispatchEvent(new MouseEvent('click'))
        expect(handleClick).toHaveBeenCalled()
    })

    it('shoudl not become checked when clicked while disabled', async () => {
        const page = await newSpecPage({
            components: [RuxPushButton],
            html: `<rux-push-button disabled></rux-push-button>`,
        })
        page.waitForChanges()
        const pushButton = page.body.querySelectorAll('rux-push-button')[0]
        const handleClick = jest.fn()
        page.root.addEventListener('click', handleClick)
        page.root.dispatchEvent(new MouseEvent('click'))
        expect(handleClick).toHaveBeenCalled()
        expect(pushButton.hasAttribute('checked')).toBe(false)
    })
})
