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
import { utcToZonedTime } from 'date-fns-tz'

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
     * Holds the value of rux-datepicker's input.
     */
    @Prop({ reflect: true, mutable: true }) value?: string = ''

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
            this._inputVal = this._inputEl.value
        }
    }

    @Listen('ruxpopupopened')
    handlePopUpOpen() {
        this.open = true
        if (this._inputVal) {
            this._preSelectedDay = utcToZonedTime(
                new Date(this._inputVal),
                'UTC'
            )
        }
    }

    @Listen('ruxpopupclosed')
    handlePopUpClose() {
        this.open = false
    }

    @Watch('open')
    handleOpen() {
        this.open ? this.ruxExpanded.emit() : this.ruxCollapsed.emit()
    }

    @State() _inputVal: string = ''
    @Watch('_inputVal')
    handleInputValueChange() {
        this.value = this._inputVal
    }

    private _inputEl?: HTMLRuxInputElement
    private _preSelectedDay?: Date

    componentDidLoad() {
        if (this._inputEl) {
            this._inputVal = this._inputEl.value
        }
    }

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
                            preSelectedDay={this._preSelectedDay}
                        ></rux-calendar>
                    </rux-pop-up>
                </rux-input>
            </Host>
        )
    }
}
