import { newSpecPage } from '@stencil/core/testing'
import { RuxPopUp } from '../rux-pop-up'

describe('rux-pop-up', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxPopUp],
            html: `<rux-pop-up></rux-pop-up>`,
        })
        expect(page.root).toMatchSnapshot()
    })
    it('closes the pop up with the hide method', () => {
        const popup = new RuxPopUp()
        popup.open = true
        expect(popup.open).toBe(true)
        popup.hide()
        expect(popup.open).toBe(false)
    })
    it('opens the pop up with the show method', () => {
        const popup = new RuxPopUp()
        expect(popup.open).toBe(false)
        popup.show()
        expect(popup.open).toBe(true)
    })
})
