import {
    Prop,
    Component,
    Host,
    h,
    Event,
    EventEmitter,
    Listen,
    Element,
} from '@stencil/core'

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
     * the value returned when item is selected. If no value is given, the text content will be used.
     */
    @Prop() value: any

    /**
     *  When a rux-menu item is selected, emits the value of that item on the event.detail.
     */
    @Event({ eventName: 'ruxmenuitemselected', bubbles: true, composed: true })
    ruxMenuItemSelected!: EventEmitter<object>

    @Listen('click', { passive: true })
    handleClick() {
        if (!this.disabled) {
            const emittedValue = this.value ? this.value : this.el.textContent
            this.ruxMenuItemSelected.emit({ value: emittedValue })
        }
    }

    render() {
        return (
            <Host>
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
