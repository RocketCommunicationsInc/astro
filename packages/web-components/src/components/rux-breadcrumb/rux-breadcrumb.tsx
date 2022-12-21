import { Component, Element, Prop } from '@stencil/core'

/**
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

    /**
     * determines whether the breadcrumb is allowed to wrap too the next line or not
     */
    @Prop({ reflect: true }) wrap?: boolean = false

    //to do
    /**
     * determines whether the breadcrumb gets truncated in the middle
     */
    @Prop({ reflect: true }) truncate?: boolean = false

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
        const listEl = document.createElement('ol')
        listEl.setAttribute('part', 'base')
        if (this.wrap === true) {
            listEl.classList.add('wrap')
        }

        let slotIndex = 0

        const children = Array.from(this.el.children)

        for (const [index, childEl] of children.entries()) {
            if (index === children.length - 1 && true) {
                childEl.removeAttribute('href')
            }

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
