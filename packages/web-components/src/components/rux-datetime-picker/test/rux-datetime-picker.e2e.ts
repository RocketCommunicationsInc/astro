import { newE2EPage } from '@stencil/core/testing'

describe('rux-datetime-picker', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-datetime-picker></rux-datetime-picker>')

        const element = await page.find('rux-datetime-picker')
        expect(element).toHaveClass('hydrated')
    })
})
