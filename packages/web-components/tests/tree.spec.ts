import { test, expect } from '@playwright/test'
import { startTestInBefore } from './utils/_startTestEnv'

test.describe('Tree', () => {
    test.beforeEach(async ({ page }) => {
        await startTestInBefore(page)

        await page.setContent(`
        <body>
            <rux-tree role="tree" class="hydrated">
                <rux-tree-node
                    role="treeitem"
                    aria-expanded="true"
                    aria-selected="false"
                    expanded=""
                    aria-level="1"
                    class="hydrated"
                >
                    Tree item 1
                    <rux-tree-node
                        slot="node"
                        role="treeitem"
                        aria-expanded="true"
                        aria-selected="false"
                        expanded=""
                        aria-level="2"
                        class="hydrated"
                    >
                        Tree item 1.1
                        <rux-tree-node
                            slot="node"
                            role="treeitem"
                            aria-expanded="false"
                            aria-selected="false"
                            class="hydrated"
                            aria-level="3"
                        >
                            Tree item 1.1.1
                        </rux-tree-node>
                        <rux-tree-node
                            slot="node"
                            role="treeitem"
                            aria-expanded="false"
                            aria-selected="true"
                            selected=""
                            class="hydrated"
                            aria-level="3"
                        >
                            Tree item 1.1.2
                        </rux-tree-node>
                        <rux-tree-node
                            slot="node"
                            role="treeitem"
                            aria-expanded="false"
                            aria-selected="false"
                            class="hydrated"
                            aria-level="3"
                        >
                            Tree item 1.1.3
                        </rux-tree-node>
                    </rux-tree-node>
                    <rux-tree-node
                        slot="node"
                        role="treeitem"
                        aria-expanded="false"
                        aria-selected="false"
                        class="hydrated"
                        aria-level="2"
                    >
                        Tree item 1.2
                    </rux-tree-node>
                    <rux-tree-node
                        slot="node"
                        role="treeitem"
                        aria-expanded="false"
                        aria-selected="false"
                        aria-level="2"
                        class="hydrated"
                    >
                        Tree item 1.3
                        <rux-tree-node
                            slot="node"
                            role="treeitem"
                            aria-expanded="false"
                            aria-selected="false"
                            aria-level="3"
                            class="hydrated"
                        >
                            Tree item 1.3.1
                            <rux-tree-node
                                slot="node"
                                role="treeitem"
                                aria-expanded="false"
                                aria-selected="false"
                                class="hydrated"
                                aria-level="4"
                            >
                                Tree item 1.1.1
                            </rux-tree-node>
                            <rux-tree-node
                                slot="node"
                                role="treeitem"
                                aria-expanded="false"
                                aria-selected="false"
                                class="hydrated"
                                aria-level="4"
                            >
                                Tree item 1.1.2
                            </rux-tree-node>
                            <rux-tree-node
                                slot="node"
                                role="treeitem"
                                aria-expanded="false"
                                aria-selected="false"
                                class="hydrated"
                                aria-level="4"
                            >
                                Tree item 1.1.3
                            </rux-tree-node>
                        </rux-tree-node>
                        <rux-tree-node
                            slot="node"
                            role="treeitem"
                            aria-expanded="false"
                            aria-selected="false"
                            aria-level="3"
                            class="hydrated"
                        >
                            Tree item 1.3.2
                            <rux-tree-node
                                slot="node"
                                role="treeitem"
                                aria-expanded="false"
                                aria-selected="false"
                                class="hydrated"
                                aria-level="4"
                            >
                                Tree item 1.1.1
                            </rux-tree-node>
                            <rux-tree-node
                                slot="node"
                                role="treeitem"
                                aria-expanded="false"
                                aria-selected="false"
                                class="hydrated"
                                aria-level="4"
                            >
                                Tree item 1.1.2
                            </rux-tree-node>
                            <rux-tree-node
                                slot="node"
                                role="treeitem"
                                aria-expanded="false"
                                aria-selected="false"
                                class="hydrated"
                                aria-level="4"
                            >
                                Tree item 1.1.3
                            </rux-tree-node>
                        </rux-tree-node>
                        <rux-tree-node
                            slot="node"
                            role="treeitem"
                            aria-expanded="true"
                            aria-selected="false"
                            expanded=""
                            aria-level="3"
                            class="hydrated"
                        >
                            Tree item 1.3.3
                            <rux-tree-node
                                slot="node"
                                role="treeitem"
                                aria-expanded="false"
                                aria-selected="false"
                                class="hydrated"
                                aria-level="4"
                            >
                                Tree item 1.3.3.1
                            </rux-tree-node>
                            <rux-tree-node
                                slot="node"
                                role="treeitem"
                                aria-expanded="false"
                                aria-selected="false"
                                class="hydrated"
                                aria-level="4"
                            >
                                Tree item 1.3.3.2
                            </rux-tree-node>
                            <rux-tree-node
                                slot="node"
                                role="treeitem"
                                aria-expanded="false"
                                aria-selected="false"
                                class="hydrated"
                                aria-level="4"
                            >
                                Tree item 1.3.3.3
                            </rux-tree-node>
                        </rux-tree-node>
                    </rux-tree-node>
                    <rux-tree-node
                        slot="node"
                        role="treeitem"
                        aria-expanded="false"
                        aria-selected="false"
                        aria-level="2"
                        class="hydrated"
                    >
                        Tree item 1.4
                        <rux-tree-node
                            slot="node"
                            role="treeitem"
                            aria-expanded="false"
                            aria-selected="false"
                            class="hydrated"
                            aria-level="3"
                        >
                            Tree item 1.4.1
                        </rux-tree-node>
                        <rux-tree-node
                            slot="node"
                            role="treeitem"
                            aria-expanded="false"
                            aria-selected="false"
                            class="hydrated"
                            aria-level="3"
                        >
                            Tree item 1.4.2
                        </rux-tree-node>
                        <rux-tree-node
                            slot="node"
                            role="treeitem"
                            aria-expanded="false"
                            aria-selected="false"
                            class="hydrated"
                            aria-level="3"
                        >
                            Tree item 1.4.3
                        </rux-tree-node>
                    </rux-tree-node>
                    <rux-tree-node
                        slot="node"
                        role="treeitem"
                        aria-expanded="false"
                        aria-selected="false"
                        class="hydrated"
                        aria-level="2"
                        >Tree item 1.5
                    </rux-tree-node>
                </rux-tree-node>
                <rux-tree-node
                    id="test-expanded"
                    role="treeitem"
                    aria-expanded="false"
                    aria-selected="false"
                    aria-level="1"
                    class="hydrated"
                    >Tree item 2
                    <rux-tree-node
                        slot="node"
                        role="treeitem"
                        aria-expanded="false"
                        aria-selected="false"
                        class="hydrated"
                        aria-level="2"
                        >Tree item 2.1
                    </rux-tree-node>
                    <rux-tree-node
                        slot="node"
                        role="treeitem"
                        aria-expanded="false"
                        aria-selected="false"
                        class="hydrated"
                        aria-level="2"
                    >
                        Tree item 2.2
                    </rux-tree-node>
                    <rux-tree-node
                        slot="node"
                        role="treeitem"
                        aria-expanded="false"
                        aria-selected="false"
                        class="hydrated"
                        aria-level="2"
                    >
                        Tree item 2.3
                    </rux-tree-node>
                </rux-tree-node>
                <rux-tree-node
                    role="treeitem"
                    aria-expanded="false"
                    aria-selected="false"
                    class="hydrated"
                    aria-level="1"
                >
                    Tree item 3
                </rux-tree-node>
            </rux-tree>
            <script>
                document.addEventListener('ruxtreenodeexpanded', function (event) {
                    console.log('rux-tree-node-expanded', event.detail)
                })
                document.addEventListener('ruxtreenodecollapsed', function (event) {
                    console.log('rux-tree-node-collapsed', event.detail)
                })
                document.addEventListener('ruxtreenodeselected', function (event) {
                    console.log('rux-tree-node-selected', event.detail)
                })
            </script>
        </body>
        `)
    })

    test('it renders', async ({ page }) => {
        const el = page.locator('rux-tree').first()
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated rux-tree')
    })
    test('allows keyboard controls', async ({ page }) => {
        //Arrange
        const treeNode = page.locator('rux-tree-node').first()
        const parent = treeNode.locator('.parent').first()
        const treeNodeNested = treeNode.locator('rux-tree-node').first()
        const treeNodeNestedParent = treeNodeNested.locator('.parent').first()

        //Act
        await parent.focus()

        //Assert
        await expect(parent).toHaveAttribute('expanded', '')

        //Act
        await page.keyboard.press('ArrowDown')

        //Assert
        await expect(treeNodeNestedParent).toHaveAttribute('expanded', '')

        //Act
        await page.keyboard.press('ArrowLeft')

        //Assert
        await treeNodeNestedParent
            .evaluate((e) => {
                return e.hasAttribute('expanded')
            })
            .then((e) => {
                expect(e).toBeFalsy()
            })
    })
    test('emits ruxtreenodeselected event', async ({ page }) => {
        //TODO need to check that event only fires once
        //Arrange
        const ruxTreeNode = page.locator('rux-tree-node').first()
        const parent = ruxTreeNode.locator('.parent').first()

        //Assert
        page.on('console', (msg) => {
            expect(msg.text()).toContain('rux-tree-node-selected')
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
        const testExpanded = page.locator('#test-expanded').first()
        const parent = testExpanded.locator('.parent').first()
        const arrow = parent.locator('.arrow').first()

        //Assert
        page.on('console', (msg) => {
            expect(msg.text()).toContain('rux-tree-node-expanded node')
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
        const testExpanded = page.locator('#test-expanded').first()
        const parent = testExpanded.locator('.parent').first()
        const arrow = parent.locator('.arrow').first()

        //Act
        await arrow.click()

        //Assert
        page.on('console', (msg) => {
            expect(msg.text()).toContain('rux-tree-node-collapsed node')
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
    
*/
