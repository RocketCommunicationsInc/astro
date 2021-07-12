import { newE2EPage } from '@stencil/core/testing'

describe('rux-tree', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-tree></rux-tree>')

        const element = await page.find('rux-tree')
        expect(element).toHaveClass('hydrated')
    })
})
