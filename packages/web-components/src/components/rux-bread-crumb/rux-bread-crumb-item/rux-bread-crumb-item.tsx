import { Prop, Element, Component, h, Host } from '@stencil/core'

@Component({
    tag: 'rux-bread-crumb-item',
    styleUrl: 'rux-bread-crumb-item.scss',
    shadow: true,
})
export class RuxBreadCrumb {
    @Element() el!: HTMLRuxBreadCrumbItemElement

    @Prop() href?: string

    render() {
        return (
            <Host>
                <li class="rux-bread-crumb-item">
                    {this.href ? (
                        <a href={this.href} part="link">
                            <slot></slot>
                        </a>
                    ) : (
                        <span>
                            <slot></slot>
                        </span>
                    )}
                </li>
            </Host>
        )
    }
}
