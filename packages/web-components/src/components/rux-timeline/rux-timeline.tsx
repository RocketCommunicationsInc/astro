import { Component, Host, h } from '@stencil/core'

@Component({
    tag: 'rux-timeline',
    styleUrl: 'rux-timeline.scss',
    shadow: true,
})
export class RuxTimeline {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        )
    }
}
