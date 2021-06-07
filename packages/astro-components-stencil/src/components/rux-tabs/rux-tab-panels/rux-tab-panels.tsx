import { Component, Host, h, Element, Event, EventEmitter } from '@stencil/core'

@Component({
    tag: 'rux-tab-panels',
    styleUrl: '.././rux-tab-panel/rux-tab-panel.scss',
    shadow: true,
})
export class RuxTabPanels {
    @Element() el: HTMLElement

    connectedCallback() {
        this.el.setAttribute('style', 'position: relative; width: 100%;')
    }

    _getSlottedChildren() {
        const slot = this.el.shadowRoot.querySelector('slot')
        const childNodes = slot.assignedNodes({ flatten: true })
        const children = Array.prototype.filter.call(
            childNodes,
            (node) => node.nodeType == Node.ELEMENT_NODE
        )
        return children
    }

    componentDidLoad() {
        this._registerTabPanels(this._getSlottedChildren())
    }

    @Event() registerPanels: EventEmitter<HTMLRuxTabPanelsElement[]>
    _registerTabPanels(children: HTMLRuxTabPanelsElement[]) {
        this.registerPanels.emit(children)
    }

    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        )
    }
}
