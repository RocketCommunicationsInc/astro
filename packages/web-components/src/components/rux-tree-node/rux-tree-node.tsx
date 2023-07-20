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

import { hasSlot } from '../../utils/utils'

let id = 0

/**
 * @slot (default) - The parent node content
 * @slot prefix - Renders content before the default slot
 * @slot suffix - Renders content after the default slot
 * @slot node - Renders a child node within the current node
 * @part text - The area bewteen the prefix and suffix slots
 * @part indicator - The opened/closed indicator
 * @part node - The individual tree node
 */
@Component({
    tag: 'rux-tree-node',
    styleUrl: 'rux-tree-node.scss',
    shadow: true,
})
export class RuxTreeNode {
    private componentId = `node-${++id}`

    @Element() el!: HTMLRuxTreeNodeElement
    @State() children: Array<HTMLRuxTreeNodeElement> = []
    @State() hasPrefix: boolean = false
    @State() hasSuffix: boolean = false

    /**
     * Sets the expanded state
     */
    @Prop({ mutable: true, reflect: true }) expanded = false

    /**
     * Sets the selected state
     */
    @Prop({ mutable: true, reflect: true }) selected = false

    /**
     * Fires when the user selects a tree node and emits the node's id on the event.detail.
     */
    @Event({ eventName: 'ruxtreenodeselected' })
    ruxTreeNodeSelected!: EventEmitter<string>

    /**
     * Fires when the user expands a tree node and emits the node's id on the event.detail.
     */
    @Event({ eventName: 'ruxtreenodeexpanded' })
    ruxTreeNodeExpanded!: EventEmitter<string>

    /**
     * Fires when the user collapses a tree node and emits the node's id on the event.detail.
     */
    @Event({ eventName: 'ruxtreenodecollapsed' })
    ruxTreeNodeCollapsed!: EventEmitter<string>

    @Watch('expanded')
    handleExpandedChange(newValue: boolean) {
        this.setExpanded(newValue)
    }

    @Watch('selected')
    handleSelectedChange(newValue: boolean) {
        this.setSelected(newValue)
    }

    @Listen('keydown', { passive: false })
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
        this._checkForPrefixAndSuffix = this._checkForPrefixAndSuffix.bind(this)
        this._handleArrowClick = this._handleArrowClick.bind(this)
        this._handleSlotChange = this._handleSlotChange.bind(this)
        this._handleTreeNodeClick = this._handleTreeNodeClick.bind(this)
    }

    componentWillLoad() {
        this._handleSlotChange()
        this._checkForPrefixAndSuffix()
    }

    get hasChildren() {
        return this.children.length > 0
    }

    private _checkForPrefixAndSuffix() {
        this.hasPrefix = hasSlot(this.el, 'prefix')
        this.hasSuffix = hasSlot(this.el, 'suffix')
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
        this.expanded
            ? this.ruxTreeNodeExpanded.emit(this.componentId)
            : this.ruxTreeNodeCollapsed.emit(this.componentId)
    }

    private _handleTreeNodeClick(e: MouseEvent) {
        e.stopPropagation()
        this.selected = !this.selected
    }

    private _expandNextNode() {
        if (!this.expanded && this.hasChildren) {
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
        const {
            _checkForPrefixAndSuffix,
            _handleArrowClick,
            _handleSlotChange,
            _handleTreeNodeClick,
            componentId,
            expanded,
            hasChildren,
            hasPrefix,
            hasSuffix,
            selected,
        } = this
        const attrs = hasChildren && { role: 'group' }

        return (
            <Host
                role="treeitem"
                aria-expanded={expanded ? 'true' : 'false'}
                aria-selected={selected ? 'true' : 'false'}
                onClick={_handleTreeNodeClick}
            >
                <div
                    id={componentId}
                    class={{
                        'tree-node': true,
                        'tree-node--expanded': expanded,
                        'tree-node--has-children': hasChildren,
                    }}
                >
                    <div class="parent" tabindex="0" part="node">
                        {hasChildren && (
                            <i
                                onClick={_handleArrowClick}
                                part="indicator"
                                class="arrow"
                            />
                        )}
                        <span class={{ prefix: hasPrefix }}>
                            <slot
                                name="prefix"
                                onSlotchange={_checkForPrefixAndSuffix}
                            />
                        </span>
                        <span part="text">
                            <slot onSlotchange={_handleSlotChange} />
                        </span>
                        <span class={{ suffix: hasSuffix }}>
                            <slot
                                name="suffix"
                                onSlotchange={_checkForPrefixAndSuffix}
                            />
                        </span>
                    </div>
                    <div {...attrs} class="children">
                        <slot name="node" onSlotchange={_handleSlotChange} />
                    </div>
                </div>
            </Host>
        )
    }
}
