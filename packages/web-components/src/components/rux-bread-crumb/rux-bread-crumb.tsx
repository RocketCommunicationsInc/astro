import { Element, Component, h, Host } from '@stencil/core'

@Component({
    tag: 'rux-bread-crumb',
    styleUrl: 'rux-bread-crumb.scss',
    shadow: true,
})
export class RuxBreadCrumb {
    @Element() el!: HTMLRuxBreadCrumbElement

    render() {
        return (
            <Host>
                <nav class="rux-bread-crumb">
                    <ol>
                        <slot></slot>
                    </ol>
                </nav>
            </Host>
        )
    }
}
