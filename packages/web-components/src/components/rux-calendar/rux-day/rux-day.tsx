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
import { hasSlot } from '../../../utils/utils'

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

    private _hasTodaySlot = hasSlot(this.el, 'today-dot')

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
                            'with-today': this._hasTodaySlot,
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
