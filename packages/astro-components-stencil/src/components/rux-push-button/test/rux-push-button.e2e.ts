import { newE2EPage } from '@stencil/core/testing'

describe('rux-push-button', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-push-button></rux-push-button>')

        const element = await page.find('rux-push-button')
        expect(element).toHaveClass('hydrated')
    })
})
