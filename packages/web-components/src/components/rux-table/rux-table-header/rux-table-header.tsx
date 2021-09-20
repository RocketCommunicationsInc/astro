import { Component, Host, h } from '@stencil/core'

@Component({
    tag: 'rux-table-header',
    styleUrl: 'rux-table-header.scss',
    shadow: true,
})
export class RuxTableHeader {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        )
    }
}
