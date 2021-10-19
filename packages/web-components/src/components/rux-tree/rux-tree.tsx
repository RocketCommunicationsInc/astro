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
    slotContainer?: HTMLElement
    @Element() el!: HTMLElement

    connectedCallback() {
        this.handleSlotChange = this.handleSlotChange.bind(this)
        this.handleNodeSelected = this.handleNodeSelected.bind(this)
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
                this.handleNodeSelected as EventListener
            )
        })
    }

    handleSlotChange() {
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
                this.handleNodeSelected as EventListener
            )
        })
    }

    handleNodeSelected(e: CustomEvent<string>) {
        const allNodes = document.querySelectorAll('rux-tree-node')
        if (allNodes) {
            const previousSelectedNode = Array.from(allNodes).find((node) => {
                return (
                    node.selected &&
                    node.shadowRoot?.querySelector('.tree-node')?.id !==
                        e.detail
                )
            })

            if (previousSelectedNode) {
                previousSelectedNode.selected = false
            }
        }
    }

    render() {
        return (
            <Host role="tree">
                <div ref={(el) => (this.slotContainer = el)}>
                    <slot onSlotchange={this.handleSlotChange}></slot>
                </div>
            </Host>
        )
    }
}
