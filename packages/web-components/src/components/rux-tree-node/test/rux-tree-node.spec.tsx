import { newSpecPage } from '@stencil/core/testing'
import { RuxTreeNode } from '../rux-tree-node'

describe('rux-tree-node', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxTreeNode],
            html: `<rux-tree-node></rux-tree-node>`,
        })
        expect(page.root).toMatchSnapshot()
    })

    it('renders children', async () => {
        const page = await newSpecPage({
            components: [RuxTreeNode],
            html: `<rux-tree-node>
            Parent
            <rux-tree-node slot="node">Child</rux-tree-node>
          </rux-tree-node>`,
        })
        expect(page.root).toMatchSnapshot()
    })
})
