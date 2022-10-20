import { test, expect } from '@playwright/test'
import { startTestInBefore, setBodyContent } from './utils/_startTestEnv'

test.describe('Tree Node', () => {
    test.beforeEach(async ({ page }) => {
        await startTestInBefore(page)

        await setBodyContent(
            page,
            `
        <rux-tree-node>Node</rux-tree-node>
        <div class="parent-child">
            <rux-tree-node>
            Parent
            <rux-tree-node slot="node">Child</rux-tree-node>
            </rux-tree-node>
        </div>
        `
        )
    })

    test('it renders', async ({ page }) => {
        const el = page.locator('rux-tree-node').first()
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
    test('it renders children', async ({ page }) => {
        const el = page.locator('.parent-child rux-tree-node').first()
        const childDiv = el.locator('.tree-node').first()
        await expect(childDiv).toHaveClass('tree-node tree-node--has-children')
    })

    test('handles prefix slot change', async ({ page }) => {
        const el = page.locator('rux-tree-node').first()

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

    test('handles suffix slot change', async ({ page }) => {
        const el = page.locator('rux-tree-node').first()

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
