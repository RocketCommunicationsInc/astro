import { Component, Host, h } from '@stencil/core'

@Component({
    tag: 'rux-beta-menu',
    styleUrl: 'rux-beta-menu.scss',
    shadow: true,
})
export class RuxBetaMenu {
    render() {
        return (
            <Host>
                <div class="rux-menu">
                    <slot></slot>
                </div>
            </Host>
        )
    }
}
