import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Tree Node', () => {
    test('it renders children', async ({ page }) => {
        const template = `
            <rux-tree-node>
                Item 1
                <rux-tree-node slot="node">
                    Item 1.1
                </rux-tree-node>
            </rux-tree-node>
        `

        await page.setContent(template)
        const el = await page.locator('rux-tree-node')
        const childDiv = el.locator('.tree-node').first()
        await expect(childDiv).toHaveClass('tree-node tree-node--has-children')
    })

    test('handles prefix slot change', async ({ page }) => {
        const template = `<rux-tree-node>Node</rux-tree-node>`
        await page.setContent(template)
        const el = await page.locator('rux-tree-node')

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
        const template = `<rux-tree-node>Node</rux-tree-node>`
        await page.setContent(template)
        const el = await page.locator('rux-tree-node')

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

    test('emits ruxtreenodecollapsed', async ({ page }) => {
        const template = `
                <rux-tree-node data-test-id="parent" expanded>
                    Parent
                    <rux-tree-node slot="node" data-test-id="child">
                        Child
                    </rux-tree-node>
                </rux-tree-node>
        `
        await page.setContent(template)
        const arrow = await page.locator('[data-test-id="parent"] .arrow')
        const eventSpy = await page.spyOnEvent('ruxtreenodecollapsed')

        await arrow.click()

        expect(eventSpy).toHaveReceivedEventTimes(1)
    })

    test('emits ruxtreenodeselected event', async ({ page }) => {
        const template = `<rux-tree-node>Node</rux-tree-node>`
        await page.setContent(template)
        const el = await page.locator('rux-tree-node')
        const eventSpy = await page.spyOnEvent('ruxtreenodeselected')

        await el.click()
        expect(eventSpy).toHaveReceivedEventTimes(1)
    })

    test('emits ruxtreenodeexpanded', async ({ page }) => {
        const template = `
                <rux-tree-node data-test-id="parent">
                    Parent
                    <rux-tree-node slot="node" data-test-id="child">
                        Child
                    </rux-tree-node>
                </rux-tree-node>
        `
        await page.setContent(template)

        const arrow = await page.locator('[data-test-id="parent"] .arrow')
        const eventSpy = await page.spyOnEvent('ruxtreenodeexpanded')

        await arrow.click()
        expect(eventSpy).toHaveReceivedEventTimes(1)
    })
    test('does not select the tree node if tree node was not the target of a click', async ({
        page,
    }) => {
        const template = `
    <rux-tree>
    <rux-tree-node>
      <rux-button>Click me</rux-button>
    </rux-tree-node>
    <rux-tree-node>Default</rux-tree-node>
  </rux-tree>
    `
        await page.setContent(template)
        const btn = await page.locator('rux-button')
        const eventSpy = await page.spyOnEvent('ruxtreenodeselected')
        await btn.click()
        expect(eventSpy).toHaveReceivedEventTimes(0)
    })
    test('emits ruxtreenodeselected once when setSelected(true) is called on an unselected node', async ({
        page,
    }) => {
        const template = `<rux-tree-node>Node</rux-tree-node>`
        await page.setContent(template)
        const el = await page.locator('rux-tree-node')
        const eventSpy = await page.spyOnEvent('ruxtreenodeselected')

        await el.evaluate(async (node: HTMLRuxTreeNodeElement) => {
            await node.setSelected(true)
        })

        await expect(el).toHaveAttribute('selected', '')
        expect(eventSpy).toHaveReceivedEventTimes(1)
    })

    test('emits ruxtreenodeselected once when setSelected(true) is called on a node in a tree', async ({
        page,
    }) => {
        const template = `
            <rux-tree>
                <rux-tree-node data-test-id="first" selected>First</rux-tree-node>
                <rux-tree-node data-test-id="second">Second</rux-tree-node>
            </rux-tree>
        `
        await page.setContent(template)
        const first = await page.locator('[data-test-id="first"]')
        const second = await page.locator('[data-test-id="second"]')
        const eventSpy = await page.spyOnEvent('ruxtreenodeselected')

        await second.evaluate(async (node: HTMLRuxTreeNodeElement) => {
            await node.setSelected(true)
        })

        await expect(second).toHaveAttribute('selected', '')
        await expect(first).not.toHaveAttribute('selected', '')
        expect(eventSpy).toHaveReceivedEventTimes(1)
    })

    test('emits ruxtreenodeselected once when an already selected node is set selected again', async ({
        page,
    }) => {
        const template = `<rux-tree-node selected>Node</rux-tree-node>`
        await page.setContent(template)
        const el = await page.locator('rux-tree-node')
        const eventSpy = await page.spyOnEvent('ruxtreenodeselected')

        await el.evaluate(async (node: HTMLRuxTreeNodeElement) => {
            await node.setSelected(true)
        })

        await expect(el).toHaveAttribute('selected', '')
        expect(eventSpy).toHaveReceivedEventTimes(1)
    })

    test('emits ruxtreenodeselected once when the selected prop is set', async ({
        page,
    }) => {
        const template = `<rux-tree-node>Node</rux-tree-node>`
        await page.setContent(template)
        const el = await page.locator('rux-tree-node')
        const eventSpy = await page.spyOnEvent('ruxtreenodeselected')

        await el.evaluate((node: HTMLRuxTreeNodeElement) => {
            node.selected = true
        })

        await expect(el).toHaveAttribute('selected', '')
        expect(eventSpy).toHaveReceivedEventTimes(1)
    })

    test('emits ruxtreenodeselected once when selected with the Enter key', async ({
        page,
    }) => {
        const template = `<rux-tree-node>Node</rux-tree-node>`
        await page.setContent(template)
        const el = await page.locator('rux-tree-node')
        const eventSpy = await page.spyOnEvent('ruxtreenodeselected')

        await el.locator('.parent').focus()
        await page.keyboard.press('Enter')

        await expect(el).toHaveAttribute('selected', '')
        expect(eventSpy).toHaveReceivedEventTimes(1)
    })

    test('does not emit ruxtreenodeselected when setSelected(false) is called', async ({
        page,
    }) => {
        const template = `<rux-tree-node selected>Node</rux-tree-node>`
        await page.setContent(template)
        const el = await page.locator('rux-tree-node')
        const eventSpy = await page.spyOnEvent('ruxtreenodeselected')

        await el.evaluate(async (node: HTMLRuxTreeNodeElement) => {
            await node.setSelected(false)
        })

        await expect(el).not.toHaveAttribute('selected', '')
        expect(eventSpy).toHaveReceivedEventTimes(0)
    })
})
