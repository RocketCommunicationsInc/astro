import { Component, Host, h } from '@stencil/core'

@Component({
    tag: 'rux-modal',
    styleUrl: 'rux-modal.scss',
    shadow: true,
})
export class RuxModal {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        )
    }
}
