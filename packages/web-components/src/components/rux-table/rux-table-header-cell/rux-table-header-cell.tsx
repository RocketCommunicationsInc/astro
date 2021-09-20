import { Component, Host, h } from '@stencil/core'

@Component({
    tag: 'rux-table-header-cell',
    styleUrl: 'rux-table-header-cell.scss',
    shadow: true,
})
export class RuxTableHeaderCell {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        )
    }
}
