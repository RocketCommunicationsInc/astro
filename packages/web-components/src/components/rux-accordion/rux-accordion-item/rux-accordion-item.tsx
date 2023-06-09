import {
    Component,
    h,
    Host,
    Prop,
    Element,
    Watch,
    Event,
    EventEmitter,
    State,
} from '@stencil/core'

import { hasSlot } from '../../../utils/utils'

/**
 * @slot (default) - The expanded content
 * @slot label - Summary title
 * @slot prefix - Area to the left of label
 * @part container - The accordion item
 * @part label-wrapper - The element wrapping prefix, indicator and the label
 * @part label - The label
 * @part prefix - The wrapper for the prefix slot
 * @part indicator - The opened/closed indicator
 * @part content - The element wrapping the expanded content
 */

@Component({
    tag: 'rux-accordion-item',
    styleUrl: 'rux-accordion-item.scss',
    shadow: true,
})
export class RuxAccordionItem {
    @Element() el!: HTMLRuxAccordionItemElement
    @State() hasPrefix: boolean = false

    /**
     * If present, sets the initial state on this accordion item to open, displaying the accordion content.
     */
    @Prop({ mutable: true, reflect: true }) expanded: boolean = false

    @Watch('expanded')
    updateExpanded() {
        this.expanded ? this.ruxExpanded.emit() : this.ruxCollapsed.emit()
    }

    /**
     * If present, sets a disabled state on this accordion item, indicating it cannot be selected by user action.
     */
    @Prop({ reflect: true }) disabled: boolean = false

    /**
     * Fired when an accordion-item has expanded
     */
    @Event({ eventName: 'ruxexpanded' }) ruxExpanded!: EventEmitter

    /**
     * Fired when an accordion-item has collapsed
     */
    @Event({ eventName: 'ruxcollapsed' }) ruxCollapsed!: EventEmitter

    private _clickHandler(e: MouseEvent) {
        //if the rux-accordion-item has the disabled attribute, it cannot be manipulated
        if (this.disabled) {
            e.preventDefault()
            return
        }
        this.expanded = !this.expanded
    }

    private _handleSlotChange() {
        this.hasPrefix = hasSlot(this.el, 'prefix')
    }

    connectedCallback() {
        this._clickHandler = this._clickHandler.bind(this)
        this._handleSlotChange = this._handleSlotChange.bind(this)
    }

    render() {
        const {
            _handleSlotChange,
            _clickHandler,
            hasPrefix,
            expanded,
            disabled,
        } = this

        return (
            <Host>
                <details
                    part="container"
                    open={expanded}
                    class={{
                        'rux-accordion-item': true,
                        'rux-accordion-item--disabled': disabled,
                    }}
                >
                    <summary
                        part="label-wrapper"
                        tabindex={disabled ? '-1' : undefined}
                        onClick={_clickHandler}
                    >
                        <span
                            part="prefix"
                            class={hasPrefix ? 'prefix' : 'prefix--hidden'}
                        >
                            <slot
                                name="prefix"
                                onSlotchange={_handleSlotChange}
                            ></slot>
                        </span>
                        <div part="label" class="rux-accordion-item--title">
                            <slot name="label"></slot>
                        </div>
                        <span class="indicator" part="indicator">
                            <svg
                                class={{
                                    'indicator--icon': true,
                                    open: expanded,
                                }}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </span>
                    </summary>
                    <span part="content" class="rux-accordion-item--content">
                        <slot></slot>
                    </span>
                </details>
            </Host>
        )
    }
}
