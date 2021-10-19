import { h } from '@stencil/core'
import { newSpecPage, SpecPage } from '@stencil/core/testing'
import { RuxTreeNode } from './rux-tree-node'

describe('RuxTreeNode', () => {
    let page: SpecPage
    const buttonSpy = jest.fn()
    beforeEach(async () => {
        page = await newSpecPage({
            components: [RuxTreeNode],
            template: () => (
                <rux-tree-node
                    onRuxtreenodeselected={(ev: any) => buttonSpy(ev)}
                ></rux-tree-node>
            ),
        })!
    })

    it('Should emit on click', async () => {
        const button = page.doc?.querySelector('rux-tree-node')
        page.waitForChanges()
        button!.click()

        expect(buttonSpy).toHaveBeenCalledTimes(1)
        // [0][0] - first argument of the first call
        expect(buttonSpy.mock.calls[0][0].detail).toEqual('node-1')
    })
})
