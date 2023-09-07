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
import { renderHiddenInput } from '../../utils/utils'

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
     * The datepickers name, used for form submissions.
     */
    @Prop({ reflect: true }) name: string = ''

    /**
     * Controls wether or not the datepicker's input is disabled.
     */
    @Prop({ reflect: true }) disabled: boolean = false

    /**
     * Emitted when the datepickers calendar is opened.
     */
    @Event({ eventName: 'ruxexpanded' }) ruxExpanded!: EventEmitter

    /**
     * Emitted when the datepicker's calendar is closed.
     */
    @Event({ eventName: 'ruxcollapsed' }) ruxCollapsed!: EventEmitter

    @Listen('ruxdateselected')
    handleRuxDateSelected(e: RuxCalendarCustomEvent<Date>) {
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
        this.open = false
    }

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
        renderHiddenInput(true, this.el, this.name, this.value, this.disabled)
        return (
            <Host>
                <rux-input
                    type="date"
                    value={this._inputVal}
                    ref={(el) => (this._inputEl = el)}
                    disabled={this.disabled}
                >
                    <rux-pop-up
                        placement="bottom-end"
                        strategy="fixed"
                        slot="suffix"
                        open={this.open}
                    >
                        <rux-icon
                            icon="calendar-today"
                            slot="trigger"
                            size="22px"
                            tabIndex={this.disabled ? -1 : 0}
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
