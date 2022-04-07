import { Component, Host, h } from '@stencil/core'

@Component({
    tag: 'rux-menu',
    styleUrl: 'rux-menu.scss',
    shadow: true,
})
export class RuxMenu {
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
