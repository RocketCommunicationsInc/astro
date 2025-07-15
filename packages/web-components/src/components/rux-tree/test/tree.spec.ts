import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Tree', () => {
    test('allows keyboard controls', async ({ page }) => {
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

    test('allows independent selections across multiple trees', async ({
        page,
    }) => {
        const template = `
            <div>
                <rux-tree id="tree1">
                    <rux-tree-node>
                        Navigation Item 1
                    </rux-tree-node>
                    <rux-tree-node>
                        Navigation Item 2
                    </rux-tree-node>
                </rux-tree>

                <rux-tree id="tree2">
                    <rux-tree-node>
                        File Item 1
                    </rux-tree-node>
                    <rux-tree-node>
                        File Item 2
                    </rux-tree-node>
                </rux-tree>
            </div>
        `
        await page.setContent(template)

        // Get references to tree nodes
        const tree1Node1 = page.locator('#tree1 rux-tree-node').first()
        const tree1Node2 = page.locator('#tree1 rux-tree-node').nth(1)
        const tree2Node1 = page.locator('#tree2 rux-tree-node').first()
        const tree2Node2 = page.locator('#tree2 rux-tree-node').nth(1)

        // Initially, no nodes should be selected
        await expect(tree1Node1).toHaveAttribute('aria-selected', 'false')
        await expect(tree1Node2).toHaveAttribute('aria-selected', 'false')
        await expect(tree2Node1).toHaveAttribute('aria-selected', 'false')
        await expect(tree2Node2).toHaveAttribute('aria-selected', 'false')

        // Select first node in tree1
        await tree1Node1.click()
        await expect(tree1Node1).toHaveAttribute('aria-selected', 'true')
        await expect(tree1Node2).toHaveAttribute('aria-selected', 'false')
        await expect(tree2Node1).toHaveAttribute('aria-selected', 'false')
        await expect(tree2Node2).toHaveAttribute('aria-selected', 'false')

        // Select first node in tree2 - tree1 selection should remain
        await tree2Node1.click()
        await expect(tree1Node1).toHaveAttribute('aria-selected', 'true')
        await expect(tree1Node2).toHaveAttribute('aria-selected', 'false')
        await expect(tree2Node1).toHaveAttribute('aria-selected', 'true')
        await expect(tree2Node2).toHaveAttribute('aria-selected', 'false')

        // Select second node in tree1 - should deselect first node in tree1 but keep tree2 selection
        await tree1Node2.click()
        await expect(tree1Node1).toHaveAttribute('aria-selected', 'false')
        await expect(tree1Node2).toHaveAttribute('aria-selected', 'true')
        await expect(tree2Node1).toHaveAttribute('aria-selected', 'true')
        await expect(tree2Node2).toHaveAttribute('aria-selected', 'false')

        // Select second node in tree2 - should deselect first node in tree2 but keep tree1 selection
        await tree2Node2.click()
        await expect(tree1Node1).toHaveAttribute('aria-selected', 'false')
        await expect(tree1Node2).toHaveAttribute('aria-selected', 'true')
        await expect(tree2Node1).toHaveAttribute('aria-selected', 'false')
        await expect(tree2Node2).toHaveAttribute('aria-selected', 'true')
    })
})
