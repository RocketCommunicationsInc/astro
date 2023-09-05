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
        console.log('ruxDaySelected emit')
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
                    <div class="oridnal">
                        <slot name="ordinal"></slot>
                    </div>
                    <slot></slot>

                    <slot name="today-dot"></slot>
                </button>
            </Host>
        )
    }
}
