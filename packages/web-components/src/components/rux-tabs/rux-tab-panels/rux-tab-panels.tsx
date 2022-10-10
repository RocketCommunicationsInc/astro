import { Component, Host, h, Element, Event, EventEmitter } from '@stencil/core'

/**
 * @slot (default) - Used for instances of rux-tab-panel
 */
@Component({
    tag: 'rux-tab-panels',
    styleUrl: '.././rux-tab-panel/rux-tab-panel.scss',
    shadow: true,
})
export class RuxTabPanels {
    @Element() el!: HTMLRuxTabPanelsElement

    connectedCallback() {
        this.el.setAttribute('style', 'position: relative; width: 100%;')
        this._getSlottedChildren = this._getSlottedChildren.bind(this)
    }

    private _getSlottedChildren() {
        const slot = this.el?.shadowRoot?.querySelector('slot')

        if (slot) {
            const childNodes = slot.assignedNodes({ flatten: true })
            const children = Array.prototype.filter.call(
                childNodes,
                (node) => node.nodeType == Node.ELEMENT_NODE
            )

            this._registerTabPanels(children)
            return children
        } else {
            return []
        }
    }

    /**
     * Emits a list of the Tab Panels on the event.detail which have been passed in
     */
    @Event({ eventName: 'ruxregisterpanels' })
    ruxRegisterPanels!: EventEmitter<HTMLRuxTabPanelsElement[]>
    private _registerTabPanels(children: HTMLRuxTabPanelsElement[]) {
        this.ruxRegisterPanels.emit(children)
    }

    render() {
        return (
            <Host>
                <slot onSlotchange={this._getSlottedChildren}></slot>
            </Host>
        )
    }
}
