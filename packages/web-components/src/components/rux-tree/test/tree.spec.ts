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
})
