import {
    Event,
    Watch,
    EventEmitter,
    Prop,
    Element,
    Component,
    h,
    Host,
    Listen,
    State,
} from '@stencil/core'
import { RuxCalendarCustomEvent } from '../../components'

@Component({
    tag: 'rux-datepicker',
    styleUrl: 'rux-datepicker.scss',
    shadow: true,
})
export class RuxDatepicker {
    @Element() el!: HTMLRuxDatepickerElement

    /**
     * Determines wether or not the datepicker's calendar is open.
     */
    @Prop({ reflect: true, mutable: true }) open: boolean = false

    /**
     * Emitted when the datepickers calendar is opened.
     */
    @Event({ eventName: 'ruxexpanded' }) ruxExpanded!: EventEmitter

    /**
     * Emitted when the datepicker's calendar is closed.
     */
    @Event({ eventName: 'ruxcollapsed' }) ruxCollapsed!: EventEmitter

    @Listen('ruxdateselected')
    handleRuxDaySelected(e: RuxCalendarCustomEvent<Date>) {
        const eventDate = new Date(e.detail)
        console.log(eventDate, 'event in rux-day')
        const year = eventDate.getUTCFullYear()
        const month =
            eventDate.getUTCMonth() + 1 > 9
                ? eventDate.getUTCMonth() + 1
                : `0${eventDate.getUTCMonth() + 1}`
        const day =
            eventDate.getUTCDate() > 9
                ? eventDate.getUTCDate()
                : `0${eventDate.getUTCDate()}`
        this._inputVal = `${year}-${month}-${day}`
    }
    // @Listen('ruxchange')
    // handleRuxChange() {
    //? Possibly out of scope for current MVP
    //TODO: when someone uses the input rather than interacting with the calendar,
    //TODO: it should still select that day in the calendar if they open it.
    //! rux change fires as soon as the user hits the years - so when you start typing 2023, it'll fire 4 times, one for each digit.
    // }

    @Listen('ruxblur')
    handleBlur() {
        if (this._inputEl) {
            console.log('listen blur, in if')
            this._inputVal = this._inputEl.value
            console.log(this._inputVal)
        }
    }

    @Watch('open')
    handleOpen() {
        this.open ? this.ruxExpanded.emit() : this.ruxCollapsed.emit()
    }

    @State() _inputVal: string = ''
    private _inputEl?: HTMLRuxInputElement

    componentDidLoad() {
        // this works, but calendar is breaking. date-in gets updated,
        // the year value changes, but the calendar is stuck at august,
        // and its year is 2013 (10 from 2023)
        if (this._inputEl) {
            this._inputVal = this._inputEl.value
        }
    }
    // private _setDateIn: string | undefined = undefined

    render() {
        return (
            <Host>
                <rux-input
                    type="date"
                    value={this._inputVal}
                    ref={(el) => (this._inputEl = el)}
                >
                    <rux-pop-up
                        placement="bottom-end"
                        strategy="fixed"
                        slot="suffix"
                    >
                        <rux-icon
                            icon="calendar-today"
                            slot="trigger"
                            size="22px"
                        ></rux-icon>
                        <rux-calendar
                            dateIn={this._inputVal ? this._inputVal : undefined}
                        ></rux-calendar>
                    </rux-pop-up>
                </rux-input>
            </Host>
        )
    }
}
