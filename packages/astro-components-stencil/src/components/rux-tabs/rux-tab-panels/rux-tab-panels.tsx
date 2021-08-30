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
    @Element() el!: HTMLElement

    connectedCallback() {
        this.el.setAttribute('style', 'position: relative; width: 100%;')
    }

    _getSlottedChildren() {
        const slot = this.el?.shadowRoot?.querySelector('slot')
        if (slot) {
            const childNodes = slot.assignedNodes({ flatten: true })
            const children = Array.prototype.filter.call(
                childNodes,
                (node) => node.nodeType == Node.ELEMENT_NODE
            )
            return children
        } else {
            return []
        }
    }

    componentDidLoad() {
        this._registerTabPanels(this._getSlottedChildren())
    }

    /**
     * Emits a list of the Tab Panels that have been passed in
     */
    @Event({ eventName: 'rux-register-panels' })
    ruxRegisterPanels!: EventEmitter<HTMLRuxTabPanelsElement[]>
    _registerTabPanels(children: HTMLRuxTabPanelsElement[]) {
        this.ruxRegisterPanels.emit(children)
    }

    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        )
    }
}
