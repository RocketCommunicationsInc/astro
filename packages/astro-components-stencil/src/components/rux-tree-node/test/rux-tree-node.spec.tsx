import { newSpecPage } from '@stencil/core/testing'
import { RuxTreeNode } from '../rux-tree-node'

describe('rux-tree-node', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [RuxTreeNode],
            html: `<rux-tree-node></rux-tree-node>`,
        })
        expect(page.root).toEqualHtml(`
              <rux-tree-node aria-expanded="false" aria-selected="false" id="node-1" role="treeitem">
                <mock:shadow-root>
                  <div class="tree-node">
                    <div class="parent" tabindex="0">
                      <slot></slot>
                    </div>
                    <div class="children">
                      <slot name="node"></slot>
                    </div>
                  </div>
                </mock:shadow-root>
              </rux-tree-node>
    `)
    })

    it('renders children', async () => {
        const page = await newSpecPage({
            components: [RuxTreeNode],
            html: `<rux-tree-node>
            Parent
            <rux-tree-node slot="node">Child</rux-tree-node>
          </rux-tree-node>`,
        })
        expect(page.root).toEqualHtml(`
          <rux-tree-node
            aria-expanded="false"
            aria-selected="false"
            id="node-2"
            role="treeitem"
          >
            <mock:shadow-root>
              <div class="tree-node tree-node--has-children">
                <div class="parent" tabindex="0">
                  <i class="arrow"></i>
                  <slot></slot>
                </div>
                <div class="children" role="group">
                  <slot name="node"></slot>
                </div>
              </div>
            </mock:shadow-root>
            Parent
            <rux-tree-node
              aria-expanded="false"
              aria-selected="false"
              id="node-3"
              role="treeitem"
              slot="node"
            >
              <mock:shadow-root>
                <div class="tree-node">
                  <div class="parent" tabindex="0">
                    <slot></slot>
                  </div>
                  <div class="children">
                    <slot name="node"></slot>
                  </div>
                </div>
              </mock:shadow-root>
              Child
          </rux-tree-node></rux-tree-node>
      `)
    })
})
