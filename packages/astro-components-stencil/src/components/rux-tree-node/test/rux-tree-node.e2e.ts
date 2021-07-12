import { newE2EPage } from '@stencil/core/testing'

describe('rux-tree-node', () => {
    it('renders', async () => {
        const page = await newE2EPage()
        await page.setContent('<rux-tree-node></rux-tree-node>')

        const element = await page.find('rux-tree-node')
        expect(element).toHaveClass('hydrated')
    })
})
