import { Component, h, Host, Prop, Listen, Element } from '@stencil/core'
//import { hasShadowDom } from '../../utils/utils'

@Component({
    tag: 'rux-accordion',
    styleUrl: 'rux-accordion.scss',
    shadow: true,
})
export class RuxAccordion {
    @Element() el!: HTMLRuxAccordionElement
    /**
     * If present, sets a disabled state on the accordion, indicating that no part of it can be manipulated by user action.
     */
    @Prop({ reflect: true }) disabled: boolean = false

    /**
     * If present, sets accordion item headers to wrap text instead of overflow: ellipsis
     */
    @Prop({ reflect: true }) truncated: boolean = false

    /*******
     * toggles disallow muiltiple - default false
     * *********/
    @Prop({ reflect: true }) disallowMultiple: boolean = false

    @Listen('ruxexpanded')
    updatedExpanded(event: Event) {
        //if rux-accordion has the attribute to disallow-multiple then make sure only one rux-accordion-item is open at a time
        if (this.disallowMultiple === true) {
            event.preventDefault()
            const items = this.el.querySelectorAll('rux-accordion-item') //get all rux-accordion-items
            const isExpanded: boolean = this.el.hasAttribute('expanded') // state of the item when accessed

            items.forEach((item: HTMLElement) => {
                item.removeAttribute('expanded')
            })
            //only add the expanded attribute if it was not there when clicked. Else, close the item.
            !isExpanded && this.el.setAttribute('expanded', '')
        }
    }

    render() {
        return (
            <Host tabindex={this.disabled ? '-1' : null}>
                <slot></slot>
            </Host>
        )
    }
}
