import { newE2EPage } from '@stencil/core/testing'

describe('rux-julian-input', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-julian-input></rux-julian-input>')

        const element = await page.find('rux-julian-input')
        expect(element).toHaveClass('hydrated')
    })
})
