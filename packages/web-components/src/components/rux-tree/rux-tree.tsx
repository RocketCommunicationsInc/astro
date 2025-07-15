import { Element, Component, Host, h } from '@stencil/core'

/**
 * @slot (default) - the nodes of the tree.
 */
@Component({
    tag: 'rux-tree',
    styleUrl: 'rux-tree.scss',
    shadow: true,
})
export class RuxTree {
    private slotContainer?: HTMLElement
    @Element() el!: HTMLRuxTreeElement

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
        this._handleNodeSelected = this._handleNodeSelected.bind(this)
    }

    disconnectedCallback() {
        const slot = this.slotContainer?.querySelector(
            'slot'
        ) as HTMLSlotElement
        const assignedElements = slot.assignedElements({
            flatten: true,
        }) as HTMLElement[]

        assignedElements.map((el) => {
            el.removeEventListener(
                'ruxtreenodeselected',
                this._handleNodeSelected as EventListener
            )
        })
    }

    private _handleSlotChange() {
        const slot = this.slotContainer?.querySelector(
            'slot'
        ) as HTMLSlotElement
        const assignedElements = slot.assignedElements({
            flatten: true,
        }) as HTMLElement[]

        assignedElements.map((el) => {
            el.setAttribute('aria-level', '1')
            el.addEventListener(
                'ruxtreenodeselected',
                this._handleNodeSelected as EventListener
            )
        })
    }

    private _handleNodeSelected(e: CustomEvent<string>) {
        const allNodes = this.el.querySelectorAll('rux-tree-node')
        const previousSelectedNode = Array.from(allNodes).find((node) => {
            return (
                node.selected &&
                node.shadowRoot?.querySelector('.tree-node')?.id !== e.detail
            )
        })

        if (previousSelectedNode) {
            previousSelectedNode.selected = false
        }
    }

    render() {
        return (
            <Host role="tree" class="rux-tree">
                <div ref={(el) => (this.slotContainer = el)}>
                    <slot onSlotchange={this._handleSlotChange}></slot>
                </div>
            </Host>
        )
    }
}
