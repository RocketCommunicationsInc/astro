import { Component, h, Host } from '@stencil/core'
//import { hasShadowDom } from '../../utils/utils'

@Component({
    tag: 'rux-accordion',
    styleUrl: 'rux-accordion.scss',
    shadow: true,
})
export class RuxAccordion {
    render() {
        return (
            <Host class="rux-accordion">
                <slot></slot>
            </Host>
        )
    }
}
