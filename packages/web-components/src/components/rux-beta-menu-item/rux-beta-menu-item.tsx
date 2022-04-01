import { Prop, Component, Host, h } from '@stencil/core'

@Component({
    tag: 'rux-beta-menu-item',
    styleUrl: 'rux-beta-menu-item.scss',
    shadow: true,
})
export class RuxBetaMenuItem {
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
