import { Component, Host, h, Prop, Element } from '@stencil/core'

/**
 *
 * @part container - individual tabs
 *
 */

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

    /**
     * If passed or set to true, displays the tabs in a smaller style, suitable for limited-space uses.
     */
    @Prop() small: boolean = false

    @Element() el!: HTMLRuxTabElement

    connectedCallback() {
        this.el.setAttribute('role', 'tab')

        //handle small on init
        if (this.el?.parentElement?.getAttributeNode('small')) {
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
                    part="container"
                    class={{
                        'rux-tab': true,
                        'rux-tab--selected': this.selected,
                        'rux-tab--small': this.small,
                        'rux-tab--large': !this.small,
                        'rux-tab--disabled': this.disabled,
                    }}
                    tabindex={this.disabled || !this.selected ? '-1' : '0'}
                >
                    <slot></slot>
                </div>
            </Host>
        )
    }
}
