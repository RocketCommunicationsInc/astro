import { render, describe, it, expect, beforeEach, vi } from '@stencil/vitest'
import { RuxTreeNode } from './rux-tree-node'
import { h } from '@stencil/core'

describe('RuxTreeNode', () => {
    let page: any
    const buttonSpy = vi.fn()
    beforeEach(async () => {
        page = await render({
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
