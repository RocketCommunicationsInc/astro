import { Component, Host, h } from '@stencil/core'

@Component({
    tag: 'rux-push-button',
    styleUrl: 'rux-push-button.scss',
    shadow: true,
})
export class RuxPushButton {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        )
    }
}
