import { newE2EPage } from '@stencil/core/testing'

describe('rux-clock', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-clock></rux-clock>')

        const element = await page.find('rux-clock')
        expect(element).toHaveClass('hydrated')
    })
})
