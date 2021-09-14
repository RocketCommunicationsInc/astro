import { Component, Prop, Host, h } from '@stencil/core'

@Component({
    tag: 'rux-table-row',
    styleUrl: 'rux-table-row.scss',
    shadow: true,
})
export class RuxTableRow {
    /**
     * Changes the background color of the row. Can be applied to multiple rows at once.
     */
    @Prop({ attribute: 'selected' }) selected = false

    render() {
        return (
            <Host
                class={{
                    'is-selected': this.selected,
                }}
            >
                <slot></slot>
            </Host>
        )
    }
}
