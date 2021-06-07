import { Component, Host, h } from '@stencil/core'

@Component({
    tag: 'rux-notification',
    styleUrl: 'rux-notification.scss',
    shadow: true,
})
export class RuxNotification {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        )
    }
}
