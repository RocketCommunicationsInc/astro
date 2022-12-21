import {
    Component,
    h,
    Host,
    Prop,
    Element,
    // Watch,
    // Event,
    // EventEmitter,
    // State,
} from '@stencil/core'

// import { hasSlot } from '../../../utils/utils'

/**
 *slots and parts
 */

/**
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
     * The link property of the breadcrumb item
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
                        el.setAttribute('size', fontSize) //need to change this to a more variable size
                })
            }
        }
    }

    render() {
        const TagType = this.href ? 'a' : 'span'
        return (
            <Host>
                <TagType href={this.href} part="link">
                    <slot onSlotchange={this._handleSlotChange}></slot>
                </TagType>
            </Host>
        )
    }
}
