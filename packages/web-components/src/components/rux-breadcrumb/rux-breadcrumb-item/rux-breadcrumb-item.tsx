import {
    Component,
    h,
    Host,
    Prop,
    Element,
    Watch,
    Event,
    EventEmitter,
    State,
} from '@stencil/core'

// import { hasSlot } from '../../../utils/utils'

/**
 *slots and parts
 */

@Component({
    tag: 'rux-breadcrumb-item',
    styleUrl: 'rux-breadcrumb-item.scss',
    shadow: true,
})
export class RuxAccordionItem {
    @Element() el!: HTMLRuxBreadcrumbItemElement

    /**
     * The link property of the breadcrumb item
     */
    @Prop() href?: string

    render() {
        return (
            <Host>
                <a href={this.href}>
                    <slot></slot>
                </a>
            </Host>
        )
    }
}
