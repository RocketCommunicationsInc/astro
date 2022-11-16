import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Tree', () => {
    test.beforeEach(async ({ page }) => {
        const template = `
            <rux-tree>
                <rux-tree-node expanded>
                    Tree item 1

                    <rux-tree-node
                        slot="node"
                        expanded
                    >
                        Tree item 1.1

                        <rux-tree-node slot="node">
                            Tree item 1.1.1
                        </rux-tree-node>

                        <rux-tree-node slot="node">
                            Tree item 1.1.2
                        </rux-tree-node>

                        <rux-tree-node slot="node">
                            Tree item 1.1.3
                        </rux-tree-node>

                    </rux-tree-node>

                    <rux-tree-node slot="node">
                        Tree item 1.2
                    </rux-tree-node>

                    <rux-tree-node slot="node">
                        Tree item 1.3

                        <rux-tree-node slot="node">
                            Tree item 1.3.1
                            <rux-tree-node slot="node">
                                Tree item 1.1.1
                            </rux-tree-node>

                            <rux-tree-node slot="node">
                                Tree item 1.1.2
                            </rux-tree-node>

                            <rux-tree-node slot="node">
                                Tree item 1.1.3
                            </rux-tree-node>
                        </rux-tree-node>

                        <rux-tree-node slot="node">
                            Tree item 1.3.2

                            <rux-tree-node slot="node">
                                Tree item 1.1.1
                            </rux-tree-node>

                            <rux-tree-node slot="node">
                                Tree item 1.1.2
                            </rux-tree-node>

                            <rux-tree-node slot="node">
                                Tree item 1.1.3
                            </rux-tree-node>
                        </rux-tree-node>
                        <rux-tree-node slot="node">
                            Tree item 1.3.3
                            <rux-tree-node slot="node">
                                Tree item 1.3.3.1
                            </rux-tree-node>
                            <rux-tree-node slot="node">
                                Tree item 1.3.3.2
                            </rux-tree-node>
                            <rux-tree-node slot="node">
                                Tree item 1.3.3.3
                            </rux-tree-node>
                        </rux-tree-node>
                        
                    </rux-tree-node>
                    <rux-tree-node slot="node">
                        Tree item 1.4
                        <rux-tree-node slot="node">
                            Tree item 1.4.1
                        </rux-tree-node>
                        <rux-tree-node slot="node">
                            Tree item 1.4.2
                        </rux-tree-node>
                        <rux-tree-node slot="node">
                            Tree item 1.4.3
                        </rux-tree-node>
                    </rux-tree-node>
                    <rux-tree-node slot="node">
                        Tree item 1.5
                    </rux-tree-node>
                </rux-tree-node>
                <rux-tree-node id="test-expanded">
                    Tree item 2
                    <rux-tree-node slot="node">
                        Tree item 2.1
                    </rux-tree-node>
                    <rux-tree-node slot="node">
                        Tree item 2.2
                    </rux-tree-node>
                    <rux-tree-node slot="node">
                        Tree item 2.3
                    </rux-tree-node>
                </rux-tree-node>
                <rux-tree-node>
                    Tree item 3
                </rux-tree-node>
            </rux-tree>
        `

        await page.setContent(template)

        await page.addScriptTag({
            content: `
        document.addEventListener('ruxtreenodeexpanded', function (event) {
            console.log('rux-tree-node-expanded', event.detail)
        })
        document.addEventListener('ruxtreenodecollapsed', function (event) {
            console.log('rux-tree-node-collapsed', event.detail)
        })
        document.addEventListener('ruxtreenodeselected', function (event) {
            console.log('rux-tree-node-selected', event.detail)
        })
        `,
        })
    })

    test('it renders', async ({ page }) => {
        const el = await page.locator('rux-tree')
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('rux-tree hydrated')
    })
    test('allows keyboard controls', async ({ page }) => {
        //Arrange
        const treeNode = await page.locator('rux-tree-node').first()
        const parent = treeNode.locator('.parent').first()
        const treeNodeNested = treeNode.locator('rux-tree-node').first()

        //Act
        await parent.focus()

        //Assert
        await expect(treeNode).toHaveAttribute('expanded', '')

        //Act
        await page.keyboard.press('ArrowDown')

        //Assert
        await expect(treeNodeNested).toHaveAttribute('expanded', '')

        //Act
        await page.keyboard.press('ArrowLeft')

        await expect(treeNodeNested).not.toHaveAttribute('expanded', '')
        //Assert
    })
    test('emits ruxtreenodeselected event', async ({ page }) => {
        //TODO need to check that event only fires once
        //Arrange
        const ruxTreeNode = await page.locator('rux-tree-node').first()
        const parent = ruxTreeNode.locator('.parent').first()

        //Assert
        page.on('console', (msg) => {
            expect(msg.text()).toContain('ruxtreenodeselected')
        })

        //Act
        await Promise.all([
            page.waitForEvent('console', { timeout: 500 }),
            parent.click(),
        ])
    })

    test('emits ruxtreenodeexpanded', async ({ page }) => {
        //TODO need to check that event only fires once
        //Arrange
        const testExpanded = await page.locator('#test-expanded').first()
        const parent = testExpanded.locator('.parent').first()
        const arrow = parent.locator('.arrow').first()

        //Assert
        page.on('console', (msg) => {
            expect(msg.text()).toContain('ruxtreenodeexpanded node')
        })

        //Act
        await Promise.all([
            page.waitForEvent('console', { timeout: 500 }),
            arrow.click(),
        ])
    })
    test('emits ruxtreenodecollapsed', async ({ page }) => {
        //TODO need to check that event only fires once
        //Arrange
        const testExpanded = await page.locator('#test-expanded').first()
        const parent = await testExpanded.locator('.parent').first()
        const arrow = await parent.locator('.arrow').first()

        //Act
        await arrow.click()

        //Assert
        page.on('console', (msg) => {
            expect(msg.text()).toContain('ruxtreenodecollapsed node')
        })

        //Act
        await Promise.all([
            page.waitForEvent('console', { timeout: 500 }),
            arrow.click(),
        ])
    })
})
/*
    Need to test: 
    - Event only fires once
*/
