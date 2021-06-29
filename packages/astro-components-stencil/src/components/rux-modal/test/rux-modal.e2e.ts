import { newE2EPage } from '@stencil/core/testing'

describe('rux-modal', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-modal></rux-modal>')

        const element = await page.find('rux-modal')
        expect(element).toHaveClass('hydrated')
    })
})
