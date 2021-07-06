import { newE2EPage } from '@stencil/core/testing'

describe('rux-segmented-button', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-segmented-button></rux-segmented-button>')

        const element = await page.find('rux-segmented-button')
        expect(element).toHaveClass('hydrated')
    })
})
