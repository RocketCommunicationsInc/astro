import { Component, Host, h, Event, Element, EventEmitter } from '@stencil/core'

@Component({
    tag: 'rux-menu',
    styleUrl: 'rux-menu.scss',
    shadow: true,
})
export class RuxMenu {
    @Element() el!: HTMLRuxMenuElement

    /**
     * Emits when a rux-menu-item is selected. Emits the rux-menu-item selected in the event detail.
     */
    @Event({ eventName: 'ruxmenuselected' })
    ruxMenuSelected!: EventEmitter

    connectedCallback() {
        this.el.addEventListener('click', (e) => {
            this._handleSelected(e.target as HTMLRuxMenuItemElement)
        })
    }

    private _handleSelected(item: HTMLRuxMenuItemElement) {
        //prevent code from running if the clicked element was disabled
        if (item.disabled) return
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
