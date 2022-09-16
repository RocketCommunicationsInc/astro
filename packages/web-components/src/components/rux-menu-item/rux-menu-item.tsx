import { Prop, Component, Host, h, Element } from '@stencil/core'

@Component({
    tag: 'rux-menu-item',
    styleUrl: 'rux-menu-item.scss',
    shadow: true,
})
export class RuxMenuItem {
    @Element() el!: HTMLRuxMenuItemElement
    /**
     * sets the menu item as selected
     */
    @Prop({ reflect: true }) selected = false
    /**
     * sets the menu item as disabled
     */
    @Prop({ reflect: true }) disabled = false
    /**
     * the value returned when item is selected.
     */
    @Prop({ mutable: true }) value?: string

    render() {
        return (
            <Host value={this.value}>
                <div
                    class={{
                        'rux-menu-item': true,
                        'rux-menu-item--selected': this.selected,
                        'rux-menu-item--disabled': this.disabled,
                    }}
                >
                    <slot></slot>
                </div>
            </Host>
        )
    }
}
