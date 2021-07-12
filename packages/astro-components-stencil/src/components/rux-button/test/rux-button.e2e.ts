import { newE2EPage } from '@stencil/core/testing'

describe('rux-button', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-button></rux-button>')

        const element = await page.find('rux-button')
        expect(element).toHaveClass('hydrated')
    })
})
