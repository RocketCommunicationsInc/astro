import {
    Component,
    Host,
    h,
    Prop,
    Event,
    EventEmitter,
    Element,
} from '@stencil/core'

/**
 * @part button - The encapsulating button on rux-day.
 *
 * @slot julian - displays the Julian (oridnal) day
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
     * @internal used to tell rux-day if calendar has the julian prop.
     */
    @Prop() _julian: boolean = false

    /**
     * @internal used to tell rux-day if calendar has the gregorian prop.
     */
    @Prop() _greg: boolean = false

    /**
     * @internal used to tell rux-day if calendar identies a day as the current day.
     */
    @Prop() _currentDay: boolean = false

    @Element() el!: HTMLRuxDayElement

    /**
     * Emitted when a rux-day becomes selected. Emits the rux-day element.
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
                            'julian-greg': this._julian && this._greg,
                            'current-day': this._currentDay,
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
