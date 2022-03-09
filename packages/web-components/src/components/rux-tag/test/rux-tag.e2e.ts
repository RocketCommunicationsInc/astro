import { newE2EPage } from '@stencil/core/testing'

describe('rux-tag', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-tag></rux-tag>')

        const element = await page.find('rux-tag')
        expect(element).toHaveClass('hydrated')
    })
})
