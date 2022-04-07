import { Prop, Component, Host, h } from '@stencil/core'

@Component({
    tag: 'rux-menu-item',
    styleUrl: 'rux-menu-item.scss',
    shadow: true,
})
export class RuxMenuItem {
    @Prop() selected = false

    render() {
        return (
            <Host>
                <div
                    class={{
                        'rux-menu-item': true,
                        'rux-menu-item--selected': this.selected,
                    }}
                >
                    <slot></slot>
                </div>
            </Host>
        )
    }
}
