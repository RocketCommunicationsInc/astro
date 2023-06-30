import {
    Component,
    Host,
    h,
    Prop,
    Element,
    Event,
    EventEmitter,
    Watch,
} from '@stencil/core'

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
     * If passed or set to true, displays the tabs in a smaller style, suitable for limited-space uses.(Deprecated: use `size` prop instead)
     */
    @Prop() small: boolean = false

    /**
     * Sets the tab element size `small` or `large. The default styling is large. Use `small` when space is limited.
     */
    @Prop({ reflect: true }) size?: 'small' | 'large'

    @Element() el!: HTMLRuxTabElement

    /**
     * Fires when a tab is selected
     */
    @Event({ eventName: 'ruxtabselected' }) ruxTabSelected!: EventEmitter

    connectedCallback() {
        //handle small on init
        if (this.el?.parentElement?.getAttributeNode('small')) {
            this.el.setAttribute('small', '')
        }

        //handle size on init
        if (this.el?.parentElement?.getAttributeNode('size')) {
            const size = this.el?.parentElement?.getAttribute('size')
            this.el.setAttribute('size', `${size}`)
        }
    }

    @Watch('selected')
    handleSelected() {
        if (this.selected) this.ruxTabSelected.emit(this.el)
    }

    private _clickHandler(e: MouseEvent) {
        if (this.disabled) {
            e.stopImmediatePropagation()
        }
    }

    render() {
        return (
            <Host onClick={this._clickHandler} selected={this.selected}>
                <div
                    part="container"
                    class={{
                        'rux-tab': true,
                        'rux-tab--selected': this.selected,
                        'rux-tab--small': this.small || this.size === 'small',
                        'rux-tab--large': !this.small || this.size !== 'small',
                        'rux-tab--disabled': this.disabled,
                    }}
                    role="tab"
                    tabindex={this.disabled || !this.selected ? '-1' : '0'}
                >
                    <slot></slot>
                </div>
            </Host>
        )
    }
}
