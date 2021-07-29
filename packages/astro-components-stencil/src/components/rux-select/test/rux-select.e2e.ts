import { newE2EPage } from '@stencil/core/testing'

describe('rux-select', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-select></rux-select>')

        const element = await page.find('rux-select')
        expect(element).toHaveClass('hydrated')
    })
})
