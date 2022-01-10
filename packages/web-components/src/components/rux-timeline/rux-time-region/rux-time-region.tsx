import { Component, Host, h } from '@stencil/core'

@Component({
    tag: 'rux-time-region',
    styleUrl: 'rux-time-region.scss',
    shadow: true,
})
export class RuxTimeRegion {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        )
    }
}
