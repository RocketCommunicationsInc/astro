import { Prop, Element, Component, h, Host } from '@stencil/core'

@Component({
    tag: 'rux-bread-crumb-item',
    styleUrl: 'rux-bread-crumb-item.scss',
    shadow: true,
})
export class RuxBreadCrumb {
    @Element() el!: HTMLRuxBreadCrumbItemElement

    @Prop() href?: string

    @Prop({ reflect: true }) current?: string

    // aria-current should go on <a> or <Host>?
    render() {
        return (
            <Host /*aria-current={this.current ? this.current : null} */>
                <li class="rux-bread-crumb-item">
                    <a
                        href={this.href}
                        part="link"
                        aria-current={this.current ? this.current : null}
                    >
                        <slot></slot>
                    </a>
                </li>
            </Host>
        )
    }
}
