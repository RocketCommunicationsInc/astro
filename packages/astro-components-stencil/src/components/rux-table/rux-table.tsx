import { Component, Host, h } from '@stencil/core'

@Component({
    tag: 'rux-table',
    styleUrl: 'rux-table.scss',
    shadow: true,
})
export class RuxTable {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        )
    }
}
