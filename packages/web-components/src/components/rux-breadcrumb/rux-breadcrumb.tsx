import { Component, Element } from '@stencil/core'

@Component({
    tag: 'rux-breadcrumb',
    styleUrl: 'rux-breadcrumb.scss',
    shadow: true,
})
export class RuxBreadcrumb {
    @Element() el!: HTMLRuxBreadcrumbElement

    // observe changes to LightDOM children
    componentWillLoad() {
        new MutationObserver(() => this._updateShadowRoot()).observe(this.el, {
            childList: true,
        })

        this._updateShadowRoot()
    }

    private _updateShadowRoot() {
        const navEl = document.createElement('nav')
        const listEl = document.createElement('ol')

        let slotIndex = 0

        for (const childEl of this.el.children) {
            const listItemEl = document.createElement('li')
            const slotEl = document.createElement('slot')

            childEl.slot = slotEl.name = `slot-${++slotIndex}`

            listItemEl.append(slotEl)
            listEl.append(listItemEl)
        }

        navEl.append(listEl)

        if (this.el.shadowRoot) {
            const existingNavEl = this.el.shadowRoot.querySelector('nav')

            if (existingNavEl) {
                existingNavEl.replaceWith(navEl)
            } else {
                this.el.shadowRoot.append(navEl)
            }
        }
    }
}
