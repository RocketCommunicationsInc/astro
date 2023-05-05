import { Component, Element } from '@stencil/core'

/**
 * @slot (default) - place breadcrumb-items in the default slot
 *
 * @part container - the nav element containing the breadcrumb list
 * @part base - the ordered list containing the breadcrumb-items
 */
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
        navEl.setAttribute('part', 'container')
        navEl.setAttribute('aria-label', 'Breadcrumb')
        const listEl = document.createElement('ol')
        listEl.setAttribute('part', 'base')

        let slotIndex = 0

        const children = Array.from(this.el.children)

        for (const childEl of children) {
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
