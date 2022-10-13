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
            this._handleSelected(e.target as HTMLElement)
        })
    }

    private _handleSelected(item: HTMLElement) {
        //prevent code from running if the clicked element was disabled
        if (item.hasAttribute('disabled')) return
        //prevent items that are nested in a disabled rux-menu-item from emitting
        if (item.closest('rux-menu-item')?.hasAttribute('disabled')) return
        const menuItems = Array.from(this.el.children)
        if (menuItems.length > 1) {
            menuItems.forEach((el) => {
                el.removeAttribute('selected')
            })
            item.closest('rux-menu-item')?.setAttribute('selected', '')
        }
        if (item.closest('rux-menu-item')) {
            this.ruxMenuSelected.emit(item)
        }
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
