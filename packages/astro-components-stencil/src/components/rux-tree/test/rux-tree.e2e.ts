import { E2EPage, newE2EPage } from '@stencil/core/testing'

describe('rux-tree', () => {
    let page!: E2EPage

    beforeEach(async () => {
        page = await newE2EPage()
        await page.setContent(`<rux-tree>
        <rux-tree-node id="first">Level 1</rux-tree-node>
        <rux-tree-node>Level 2</rux-tree-node>
      </rux-tree>`)
    })
    it('focuses first node', async () => {
        await page.keyboard.down('Tab')
        const activeElement = await page.evaluate(
            () => document.activeElement!.id
        )
        expect(activeElement).toBe('first')
    })
})
