import { newE2EPage } from '@stencil/core/testing'

describe('rux-icon', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-icon></rux-icon>')

        const element = await page.find('rux-icon')
        expect(element).toHaveClass('hydrated')
    })
})
