import { Component, Host, h } from '@stencil/core'

@Component({
    tag: 'rux-table-header-row',
    styleUrl: 'rux-table-header-row.scss',
    shadow: true,
})
export class RuxTableHeaderRow {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        )
    }
}
