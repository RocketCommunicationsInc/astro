import { Component, Host, h } from '@stencil/core'

@Component({
    tag: 'rux-track',
    styleUrl: 'rux-track.scss',
    shadow: true,
})
export class RuxTrack {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        )
    }
}
