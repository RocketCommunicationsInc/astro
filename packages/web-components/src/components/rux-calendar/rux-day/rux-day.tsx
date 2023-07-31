import {
    Component,
    Host,
    h,
    Prop,
    Event,
    EventEmitter,
    Element,
    // Watch,
} from '@stencil/core'

/**
 * @part button - The encapsulating button on rux-day.
 *
 * @slot today-dot - the blue dot that denotes the current day
 */
@Component({
    tag: 'rux-day',
    styleUrl: 'rux-day.scss',
    shadow: true,
})
export class RuxDay {
    /**
     * Determines if a day is selected or not.
     */
    @Prop({ reflect: true, mutable: true }) selected: boolean = false

    /**
     * @internal used to tell rux-day if it's in julian & gregorian mode
     * so that we can align the today-dot if needed
     */
    @Prop() _julian: boolean = false
    @Prop() _greg: boolean = false

    @Element() el!: HTMLRuxDayElement

    /**
     * Emitted when a rux-day becomes selected.
     */
    @Event({ eventName: 'ruxdayselected' })
    ruxDaySelected!: EventEmitter<HTMLRuxDayElement>

    connectedCallback() {
        this._toggleSelected = this._toggleSelected.bind(this)
    }

    private _toggleSelected() {
        this.selected = !this.selected
        this.ruxDaySelected.emit(this.el)
    }

    render() {
        return (
            <Host>
                <button
                    class={{
                        'rux-day': true,
                        'day-selected': this.selected,
                    }}
                    part="button"
                    onClick={this._toggleSelected}
                >
                    <slot></slot>
                    <div
                        class={{
                            'julian-dot': true,
                            'left-align-dot': this._julian && this._greg,
                        }}
                    >
                        <slot name="today-dot"></slot>
                        <slot name="julian"></slot>
                    </div>
                </button>
            </Host>
        )
    }
}
