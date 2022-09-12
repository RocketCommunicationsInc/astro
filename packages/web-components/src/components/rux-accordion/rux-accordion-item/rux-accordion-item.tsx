import {
    Component,
    h,
    Host,
    Prop,
    Element,
    Watch,
    Event,
    EventEmitter,
} from '@stencil/core'

/**
 * @slot (default) - content
 * @slot label - summary title
 * @slot prefix - summary title
 * @part container - the accordion item
 * @part label-wrapper - the element wrapping rux-icons and the label
 * @part label - the label
 * @part icon - the optional rux-icon
 * @part indicator - the opened/closed indicator
 */

@Component({
    tag: 'rux-accordion-item',
    styleUrl: 'rux-accordion-item.scss',
    shadow: true,
})
export class RuxAccordionItem {
    @Element() el!: HTMLRuxAccordionItemElement

    /**
     * Takes a string label set by  the user and places it in summary as the title
     */
    @Prop({ reflect: true }) label: string = ''

    /**
     * If present, sets the initial state on this accordion icon to open, displaying the accordion content.
     */

    @Prop({ mutable: true, reflect: true }) expanded: boolean = false
    @Watch('expanded')
    updateExpanded() {
        this.ruxExpanded.emit()
    }

    /**
     * If present, sets a disabled state on this accordion item, indicating it cannot be selected by user action.
     */

    @Prop({ reflect: true }) disabled: boolean = false

    /**
     * When set, places a rux-icon of the string type to the left of the label
     */

    @Prop({ reflect: true }) iconLeft: string = ''

    /**
     * Fired when an element has expanded
     */
    @Event({ eventName: 'ruxexpanded' }) ruxExpanded!: EventEmitter

    private _clickHandler(e: MouseEvent) {
        //if the rux-accordion-item has the disabled attribute, it cannot be manipulated
        if (this.disabled) {
            e.preventDefault()
            return
        }
        this.expanded = !this.expanded
    }

    connectedCallback() {
        this._clickHandler = this._clickHandler.bind(this)
    }

    render() {
        return (
            <Host>
                <details
                    part="container"
                    open={this.expanded}
                    class={{
                        'rux-accordion-item': true,
                        'rux-accordion-item--disabled': this.disabled,
                    }}
                >
                    <summary
                        part="label-wrapper"
                        tabindex={this.disabled ? '-1' : undefined}
                        onClick={this._clickHandler}
                    >
                        {/* {this.iconLeft && (
                            <rux-icon
                                exportparts="icon"
                                icon={this.iconLeft}
                                size="20px"
                            ></rux-icon>
                        )} */}

                        <slot name="prefix"></slot>
                        <div part="label" class="rux-accordion-item--title">
                            <slot name="label"></slot>
                        </div>
                        <span class="indicator" part="indicator">
                            <rux-icon
                                icon={
                                    this.expanded
                                        ? 'keyboard-arrow-up'
                                        : 'keyboard-arrow-down'
                                }
                                size="20px"
                            ></rux-icon>
                        </span>
                    </summary>
                    <span class="rux-accordion-item--content">
                        <slot></slot>
                    </span>
                </details>
            </Host>
        )
    }
}
