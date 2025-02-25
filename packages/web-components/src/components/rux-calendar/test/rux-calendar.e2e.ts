import { newE2EPage } from '@stencil/core/testing'

describe('rux-calendar', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-calendar></rux-calendar>')

        const element = await page.find('rux-calendar')
        expect(element).toHaveClass('hydrated')
    })
})
