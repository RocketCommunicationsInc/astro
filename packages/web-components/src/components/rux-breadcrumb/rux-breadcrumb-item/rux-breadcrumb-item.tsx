import { Component, h, Host, Prop, Element } from '@stencil/core'

/**
 * @slot (default) - The breadcrumb item content
 * @part container - the li containing the link element
 * @part link - the link element
 */

@Component({
    tag: 'rux-breadcrumb-item',
    styleUrl: 'rux-breadcrumb-item.scss',
    shadow: true,
})
export class RuxBreadcrumbItem {
    // private breadcrumbParent: HTMLRuxBreadcrumbElement | null = null
    @Element() el!: HTMLRuxBreadcrumbItemElement
    /**
     * The href property of the breadcrumb item link
     */
    @Prop({ reflect: true }) href?: string

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
    }

    componentWillLoad() {
        this._handleSlotChange()
    }

    private _handleSlotChange() {
        const slot = this.el?.shadowRoot?.querySelector(
            'slot'
        ) as HTMLSlotElement
        //if the slot exists
        if (slot) {
            const link = this.el.shadowRoot?.querySelector(
                '[part="link"]'
            ) as HTMLElement
            const fontSize = window
                .getComputedStyle(link)
                .getPropertyValue('font-size')
            const childEls = slot.assignedNodes({}) as HTMLElement[]
            //slotted content might just be text which would return nothing
            if (childEls.length) {
                //give rux-icons the correct size
                childEls.map((el) => {
                    if (el.nodeName === 'RUX-ICON')
                        el.setAttribute('size', fontSize)
                })
            }
        }
    }

    render() {
        return (
            <Host>
                <a href={this.href} part="link">
                    <slot onSlotchange={this._handleSlotChange} />
                </a>
            </Host>
        )
    }
}
