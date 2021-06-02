import { newE2EPage } from '@stencil/core/testing'

describe('rux-button-group', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-button-group></rux-button-group>')

        const element = await page.find('rux-button-group')
        expect(element).toHaveClass('hydrated')
    })
})
