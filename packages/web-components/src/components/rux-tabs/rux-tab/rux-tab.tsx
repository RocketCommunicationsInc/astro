import { Component, Host, h, Prop, State, Element } from '@stencil/core'

@Component({
    tag: 'rux-tab',
    styleUrl: 'rux-tab.scss',
    shadow: true,
})
export class RuxTab {
    /**
     *  If present, overrides which tab is selected on load / mount. By default, the first <rux-tab> item is selected.
     */
    @Prop({ reflect: true }) selected: boolean = false
    /**
     * If present, sets a disabled state on this tab item, indicating it cannot be selected by user action.
     */
    @Prop({ reflect: true }) disabled: boolean = false
    @State() small = false

    @Element() el!: HTMLRuxTabElement

    connectedCallback() {
        this.el.setAttribute('role', 'tab')
        this.el.addEventListener('click', this._clickHandler)

        if (this.el?.parentElement?.getAttributeNode('small')) {
            this.small = true
            this.el.setAttribute('small', '')
        }
    }

    private _clickHandler(e: MouseEvent) {
        if (this.disabled) {
            e.stopImmediatePropagation()
        }
    }

    render() {
        return (
            <Host onClick={this._clickHandler}>
                <div
                    class={{
                        'rux-tab': true,
                        'rux-tab--selected': this.selected,
                        'rux-tab--disabled': this.disabled,
                        'rux-tab--small': this.small,
                    }}
                >
                    <slot></slot>
                </div>
            </Host>
        )
    }
}
