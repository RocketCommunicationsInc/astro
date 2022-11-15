import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Tree Node', () => {
    test('it renders', async ({ astroPage }) => {
        const template = `<rux-tree-node>Node</rux-tree-node>`
        const el = await astroPage.load(template)
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
    test('it renders children', async ({ astroPage }) => {
        const template = `
            <rux-tree-node>
                Item 1
                <rux-tree-node slot="node">
                    Item 1.1
                </rux-tree-node>
            </rux-tree-node>
        `
        const el = await astroPage.load(template)
        const childDiv = el.locator('.tree-node').first()
        await expect(childDiv).toHaveClass('tree-node tree-node--has-children')
    })

    test('handles prefix slot change', async ({ astroPage }) => {
        const template = `<rux-tree-node>Node</rux-tree-node>`
        const el = await astroPage.load(template)

        await el.evaluate((e) => {
            const slot = document.createElement('rux-icon')
            slot.setAttribute('icon', 'apps')
            slot.setAttribute('size', '1rem')
            slot.setAttribute('slot', 'prefix')
            e.appendChild(slot)
        })

        await expect(el.locator('.parent span:first-child')).toHaveClass(
            'prefix'
        )
    })

    test('handles suffix slot change', async ({ astroPage }) => {
        const template = `<rux-tree-node>Node</rux-tree-node>`
        const el = await astroPage.load(template)

        await el.evaluate((e) => {
            const slot = document.createElement('rux-icon')
            slot.setAttribute('icon', 'apps')
            slot.setAttribute('size', '1rem')
            slot.setAttribute('slot', 'suffix')
            e.appendChild(slot)
        })

        await expect(el.locator('.parent span:last-child')).toHaveClass(
            'suffix'
        )
    })
})
