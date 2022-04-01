/* eslint react/jsx-no-bind: 0 */ // --> OFF
import {
    Prop,
    Event,
    EventEmitter,
    State,
    Element,
    Component,
    Host,
    Listen,
    Method,
    Watch,
    h,
} from '@stencil/core'

let id = 0
@Component({
    tag: 'rux-tree-node',
    styleUrl: 'rux-tree-node.scss',
    shadow: true,
})

/**
 * @slot - The parent node content
 * @slot node - Renders a child node within the current node
 */
export class RuxTreeNode {
    private componentId = `node-${++id}`
    @Element() el!: HTMLRuxTreeNodeElement
    @State() children: Array<HTMLRuxTreeNodeElement> = []

    /**
     * Sets the expanded state
     */
    @Prop({ mutable: true, reflect: true }) expanded = false
    /**
     * Sets the selected state
     */
    @Prop({ mutable: true, reflect: true }) selected = false

    /**
     * Emit when user selects a tree node
     */
    @Event({ eventName: 'ruxtreenodeselected' })
    ruxTreeNodeSelected!: EventEmitter<string>

    @Watch('expanded')
    handleExpandedChange(newValue: boolean) {
        this.setExpanded(newValue)
    }

    @Watch('selected')
    handleSelectedChange(newValue: boolean) {
        this.setSelected(newValue)
    }

    @Listen('keydown', { passive: true })
    handleKeyDown(ev: KeyboardEvent) {
        if (ev.target !== ev.currentTarget) {
            return true
        }

        switch (ev.key) {
            case 'ArrowUp':
                ev.preventDefault()
                this._focusNext(-1)
                break
            case 'ArrowRight':
                ev.preventDefault()
                this._expandNextNode()
                break
            case 'ArrowDown':
                ev.preventDefault()
                this._focusNext(1)
                break
            case 'ArrowLeft':
                ev.preventDefault()
                this._collapseParent()
                break
            case 'Enter':
                ev.preventDefault()
                this.setSelected(true)
                break
        }
    }

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
    }

    componentWillLoad() {
        this._handleSlotChange()
    }

    get _hasChildren() {
        return this.children.length > 0
    }

    /**
     * Sets the expanded state
     * @param value
     */
    @Method()
    async setExpanded(value: boolean) {
        this.expanded = value
    }

    /**
     * Sets the selected state
     * @param value
     */
    @Method()
    async setSelected(value: boolean) {
        this.selected = value
        if (value) {
            this.ruxTreeNodeSelected.emit(this.componentId)
        }
    }

    private _handleSlotChange() {
        const children = Array.from(
            this.el.querySelectorAll(`[slot="node"]`)
        ) as HTMLRuxTreeNodeElement[]
        this.children = children
        this._setAriaLevel()
    }

    /**
     * Manually set the aria-level attribute.
     * Tree is responsible for setting the root node levels.
     */
    private _setAriaLevel() {
        const level = this.el.getAttribute('aria-level')
        if (level) {
            this.children.map((child) => {
                child.setAttribute('aria-level', `${+level + 1}`)
            })
        }
    }

    private _handleArrowClick(e: MouseEvent) {
        e.stopPropagation()
        this.setExpanded(!this.expanded)
    }

    private _handleTreeNodeClick(e: MouseEvent) {
        e.stopPropagation()
        this.selected = !this.selected
    }

    private _expandNextNode() {
        if (!this.expanded && this._hasChildren) {
            this.setExpanded(true)
        }
    }

    private _focusItem(el: HTMLRuxTreeNodeElement) {
        const parent = el?.shadowRoot?.querySelector('.parent') as HTMLElement
        if (parent) {
            parent.focus()
        }
    }

    private _collapseParent() {
        if (this.expanded) {
            this.setExpanded(false)
        } else if (this.el.parentElement) {
            const parentTreeItemNode:
                | Element
                | null
                | undefined = this.el.parentElement!.closest(
                "[role='treeitem']"
            )

            if (parentTreeItemNode) {
                this._focusItem(parentTreeItemNode as HTMLRuxTreeNodeElement)
            }
        }
    }

    private _focusNext(direction: number) {
        const visibleNodes = this._getVisibleNodes()
        const currentIndex: number = visibleNodes.indexOf(this.el)
        console.log('start focus')
        if (currentIndex !== -1) {
            let nextElement: HTMLRuxTreeNodeElement | undefined =
                visibleNodes[currentIndex + direction]
            if (nextElement !== undefined) {
                // Skips any disabled nodes
                while (nextElement.hasAttribute('disabled')) {
                    const offset: number = direction >= 0 ? 1 : -1
                    nextElement =
                        visibleNodes[currentIndex + direction + offset]
                    if (nextElement) {
                        break
                    }
                }
            }

            if (nextElement !== null) {
                this._focusItem(nextElement as HTMLRuxTreeNodeElement)
            }
        }
    }

    private _getVisibleNodes() {
        const rootTree = this.el.closest("[role='tree']") as HTMLRuxTreeElement
        const nodes = Array.from(rootTree.querySelectorAll('rux-tree-node'))
        return nodes.filter(
            (node: HTMLRuxTreeNodeElement) => node.offsetParent !== null
        )
    }

    render() {
        const attrs = this._hasChildren && { role: 'group' }

        return (
            <Host
                role="treeitem"
                aria-expanded={this.expanded ? 'true' : 'false'}
                aria-selected={this.selected ? 'true' : 'false'}
                onClick={(event: MouseEvent) =>
                    this._handleTreeNodeClick(event)
                }
            >
                <div
                    id={this.componentId}
                    class={{
                        'tree-node': true,
                        'tree-node--expanded': this.expanded,
                        'tree-node--has-children': this._hasChildren,
                        'tree-node--selected': this.selected,
                    }}
                >
                    <div class="parent" tabindex="0">
                        {this._hasChildren && (
                            <i
                                onClick={(e) => this._handleArrowClick(e)}
                                class="arrow"
                            ></i>
                        )}
                        <slot onSlotchange={this._handleSlotChange}></slot>
                    </div>
                    <div {...attrs} class="children">
                        <slot
                            name="node"
                            onSlotchange={this._handleSlotChange}
                        ></slot>
                    </div>
                </div>
            </Host>
        )
    }
}

/*
                    {this.selected && (
                        <div class="selected"></div>
                        )
                    }
*/
