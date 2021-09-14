import { Component, Host, h } from '@stencil/core'

@Component({
    tag: 'rux-table-cell',
    styleUrl: 'rux-table-cell.scss',
    shadow: true,
})
export class RuxTableCell {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        )
    }
}
