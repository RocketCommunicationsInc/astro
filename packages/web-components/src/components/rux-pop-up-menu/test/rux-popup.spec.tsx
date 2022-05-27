import { newSpecPage } from '@stencil/core/testing'
import { RuxPopUpMenu } from '../rux-pop-up-menu'

describe('rux-pop-up-menu', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxPopUpMenu],
            html: `<rux-pop-up-menu></rux-pop-up-menu>`,
        })
        expect(page.root).toMatchSnapshot()
    })
    it('closes the pop up with the hide method', () => {
        const popup = new RuxPopUpMenu()
        popup.open = true
        expect(popup.open).toBe(true)
        popup.hide()
        expect(popup.open).toBe(false)
    })
    it('opens the pop up with the show method', () => {
        const popup = new RuxPopUpMenu()
        expect(popup.open).toBe(false)
        popup.show()
        expect(popup.open).toBe(true)
    })
})
