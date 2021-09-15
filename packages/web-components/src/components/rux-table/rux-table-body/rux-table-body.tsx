import { Component, Host, h } from '@stencil/core'

@Component({
    tag: 'rux-table-body',
    styleUrl: 'rux-table-body.scss',
    shadow: true,
})
export class RuxTableBody {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        )
    }
}
