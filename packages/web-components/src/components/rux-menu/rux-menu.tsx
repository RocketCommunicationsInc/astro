import { Component, Host, h, Event, Element, EventEmitter } from '@stencil/core'

@Component({
    tag: 'rux-menu',
    styleUrl: 'rux-menu.scss',
    shadow: true,
})
export class RuxMenu {
    @Element() el!: HTMLRuxMenuElement

    /**
     * Emit's when a rux-menu-item is selected. Emits a detail of the rux-menu-item that was selected.
     */
    @Event({ eventName: 'ruxmenuselected' })
    ruxMenuSelected!: EventEmitter

    connectedCallback() {
        this.el.addEventListener('click', (e) => {
            this._handleSelected(e.target as HTMLRuxMenuItemElement)
        })
    }

    private _handleSelected(item: HTMLRuxMenuItemElement) {
        const menuItems = Array.from(this.el.querySelectorAll('rux-menu-item'))
        menuItems.forEach((el) => {
            el.selected = false
            if (el === item && !el.disabled) {
                item.selected = true
                this.ruxMenuSelected.emit(item)
            }
        })
    }

    render() {
        return (
            <Host>
                <div class="rux-menu">
                    <slot></slot>
                </div>
            </Host>
        )
    }
}
