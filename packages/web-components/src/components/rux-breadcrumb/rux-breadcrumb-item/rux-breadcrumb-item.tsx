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
    // childEls: HTMLElement[]

    /**
     * The link property of the breadcrumb item
     */
    @Prop({ reflect: true }) href?: string

    render() {
        return (
            <Host>
                <a href={this.href} part="link">
                    <slot></slot>
                </a>
            </Host>
        )
    }
}
