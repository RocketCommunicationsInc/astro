/* eslint-disable react/jsx-no-bind */
import {
    Component,
    Element,
    Event,
    EventEmitter,
    Listen,
    Prop,
    State,
    Watch,
} from '@stencil/core'
import { InputRefs, Part, PartKey, Precision } from './utils/types'
import {
    CalendarDateTimeUpdatedEvent,
    DatetimePickerProps,
    DatetimePickerEvents,
    DatetimePickerState,
    DatetimePickerRefs,
} from './datetime-picker.types'
import { isValidIso8601 } from './datetime-picker.helpers'
import {
    handlePopupClose,
    toggleCalendar,
    highlightInput,
    handleDaySelected,
} from './datetime-picker.handlers'
import {
    handleInitialValue,
    handleChange,
    handlePrecisionChange,
    handleValueChange,
} from './datetime-picker.value-processing'

import { renderDatetimePicker } from './datetime-picker.render-jsx'
import {
    isIsoString,
    toPartialOrdinalIsoString,
    toPartialRegularIsoString,
} from './utils'

@Component({
    tag: 'rux-datetime-picker',
    styleUrl: 'rux-datetime-picker.scss',
    shadow: true,
})
export class RuxDatetimePicker
    implements
        DatetimePickerProps,
        DatetimePickerEvents,
        DatetimePickerState,
        DatetimePickerRefs {
    yearRef?: HTMLInputElement
    monthRef?: HTMLInputElement
    dayRef?: HTMLInputElement
    hourRef?: HTMLInputElement
    minRef?: HTMLInputElement
    secRef?: HTMLInputElement
    msRef?: HTMLInputElement
    private previousValue: string = ''
    /**
     *Holds the current value, but parsed to a julian ISO.
     */
    private _julianValue: string = ''
    /**
     * Holds the current value as a gregorian, ISO value.
     */
    private _gregorianValue: string = ''

    @Element() el!: HTMLRuxDatetimePickerElement

    /**
     * Disables the datetime-picker via HTML disabled attribute. Datetime-picker takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored.
     */
    @Prop() disabled: boolean = false
    /**
     * The validation error text
     */
    @Prop({ attribute: 'error-text' }) errorText?: string
    /**
     * The help or explanation text
     */
    @Prop({ attribute: 'help-text' }) helpText?: string
    /**
     * Presentational only. Renders the Input Field as invalid
     */
    @Prop() invalid: boolean = false
    /**
     * The datetime-picker label text
     */
    @Prop() label?: string
    /**
     * The datetime-picker name
     */
    @Prop() name: string = ''
    /**
     * Presentational only. Sets the datetime-picker as required
     */
    @Prop() required: boolean = false
    /**
     * Control the padding around the input field
     */
    @Prop() size: 'small' | 'medium' | 'large' = 'medium'
    /**
     * The value of the datetime-picker
     */
    @Prop({ reflect: true, mutable: true }) value: string = ''
    /**
     * Controls the precision to which the date-time is displayed on the datetime-picker. This ranges from day to microseconds (microseconds is represented by `us`).
     */
    @Prop() precision: Precision = 'ms'
    /**
     * Sets the minimum year the datetime-picker can use
     */
    @Prop({ attribute: 'min-year' }) minYear: number = 1900
    /**
     * Sets the maximum year the datetime-picker can use
     */
    @Prop({ attribute: 'max-year' }) maxYear: number = 2100
    /**
     * Controls whether the datetime-picker should be used in Julian format, ie YYYY-DDDThh:mm:ss.SSSZ
     */
    @Prop({ attribute: 'julian-format' }) julianFormat: boolean = false

    /**
     * @internal
     * Fired when the datetime-picker's input value updates. Calendar listens for this event in order to sync values.
     */
    @Event({ eventName: 'ruxdatepickerchange', bubbles: true, composed: true })
    ruxDatetimePickerChange!: EventEmitter<string>
    /**
     * Fired when the value of the datetime-picker changes and is committed by the user
     */
    @Event({ eventName: 'ruxchange' })
    ruxChange!: EventEmitter
    /**
     * Fired when the value of the datetime-picker changes
     */
    @Event({ eventName: 'ruxinput' })
    ruxInput!: EventEmitter
    /**
     * Fired when the datetime-picker loses focus
     */
    @Event({ eventName: 'ruxblur' })
    ruxBlur!: EventEmitter

    @State() iso: string = ''
    @State() parts: Part[] = []
    @State() isCalendarOpen: boolean = false
    @State() refs: InputRefs = {
        year: this.yearRef,
        month: this.monthRef,
        day: this.dayRef,
        hour: this.hourRef,
        min: this.minRef,
        sec: this.secRef,
        ms: this.msRef,
    }

    get julianValue(): string {
        return this._julianValue
    }

    get gregorianValue(): string {
        return this._gregorianValue
    }

    @Listen('ruxpopupclosed')
    handlePopupClose() {
        this.isCalendarOpen = handlePopupClose()
    }

    /**
     * @param event the event emitted from the calendar. Contains {iso: string, source: string}
     */
    @Listen('ruxcalendardatetimeupdated')
    handleDaySelected(event: CalendarDateTimeUpdatedEvent) {
        const result = handleDaySelected(event, this.julianFormat)
        this.value = result.value

        if (result.emitChange) {
            this.ruxChange.emit()
        }
        if (result.emitInput) {
            this.ruxInput.emit()
        }

        this.handleInitialValue(this.value)
    }

    connectedCallback() {
        this.handleChange = this.handleChange.bind(this)
        this.toggleCalendar = this.toggleCalendar.bind(this)
        //add Z if a dp is given a value without it
        if (
            this.value &&
            /T\d{2}/.test(this.value) &&
            !this.value.endsWith('Z')
        ) {
            this.value += 'Z'
        }

        //Emit a warning if the datepicker is rendered with the value prop filled but with an invalid value.
        if (this.value && !isValidIso8601(this.value)) {
            console.warn(
                `rux-datetime-picker: Invalid value prop format: "${this.value}". Allowed: YYYY, YYYY-MM, YYYY-MM-DD, or with UTC time: YYYY-MM-DDTHHZ to YYYY-MM-DDTHH:mm:ss.sssZ or in Ordinal ISO format: YYYY-DDD to YYYY-DDDTHH:mm:ss.sssZ`
            )
            this.iso = ''
            this.value = ''
        }
        //If value exists on init, need to set the julian-value and gregorian-value attributes accordingly
        if (this.value && this.julianFormat) {
            this._julianValue = this.value
            this._gregorianValue = toPartialRegularIsoString(
                this.value,
                this.precision === 'us'
            )
        }
        if (this.value && !this.julianFormat) {
            this._gregorianValue = this.value
            this._julianValue = toPartialOrdinalIsoString(
                this.value,
                this.precision === 'us'
            )
        }
        this.el.setAttribute('julian-value', this._julianValue)
        this.el.setAttribute('gregorian-value', this._gregorianValue)
    }

    componentWillLoad() {
        this.handleInitialValue(this.value)
    }

    componentDidLoad() {
        this.el.addEventListener('focusout', this._onFocusOut)
    }

    disconnectedCallback() {
        this.el.removeEventListener('focusout', this._onFocusOut)
    }

    @Watch('precision')
    handlePrecisionChange() {
        const result = handlePrecisionChange(
            this.value,
            this.julianFormat,
            this.precision
        )
        this.iso = result.iso
        this.parts = result.parts
        this.value = result.finalValue
    }

    @Watch('value')
    handleValueChange() {
        const result = handleValueChange(
            this.value,
            this.julianFormat,
            this.precision
        )
        this._julianValue = result.julianValue
        this._gregorianValue = result.gregorianValue
        this.el.setAttribute('julian-value', this._julianValue)
        this.el.setAttribute('gregorian-value', this._gregorianValue)
    }

    handleInitialValue(value?: string) {
        const result = handleInitialValue(
            value,
            this.julianFormat,
            this.precision
        )
        this.iso = result.iso
        this.parts = result.parts
        this.value = result.finalValue
        console.log('this.iso Before this.value assignment: ', this.iso)
        console.log('End of HIV value: ', this.value)
    }

    /**
     * Handles value change on the inputs. Updates this.parts and this.iso.
     * @param event The InputEvent
     * @param type The PartKey of the input (ie year, month, day, ect)
     * @param inputRefs The references to each input
     */
    handleChange(event: InputEvent, type: PartKey, inputRefs: InputRefs) {
        const result = handleChange(
            event,
            type,
            inputRefs,
            this.parts,
            this.previousValue,
            this.precision,
            this.julianFormat,
            this.minYear,
            this.maxYear
        )

        if (result.shouldReturn) {
            if (result.updatedParts) this.parts = result.updatedParts
            if (result.newPreviousValue !== undefined)
                this.previousValue = result.newPreviousValue
            if (result.iso !== undefined) this.iso = result.iso
            if (result.value !== undefined) this.value = result.value
            if (result.emitInput) this.ruxInput.emit()
            if (result.emitChange)
                this.ruxDatetimePickerChange.emit(result.dayValue)
            return
        }

        // Handle the successful case
        if (result.updatedParts) this.parts = result.updatedParts
        if (result.newPreviousValue !== undefined)
            this.previousValue = result.newPreviousValue
        if (result.iso !== undefined) this.iso = result.iso
        if (result.value !== undefined) this.value = result.value
        if (result.emitInput) this.ruxInput.emit()
        this.ruxDatetimePickerChange.emit(result.dayValue)
    }

    toggleCalendar() {
        this.isCalendarOpen = toggleCalendar(this.isCalendarOpen)
    }

    handlePaste = (e: ClipboardEvent) => {
        e.preventDefault()
        let pastedValue = e.clipboardData!.getData('text/plain')
        // If there's a time portion (T...), ensure it ends with Z
        if (/T\d{2}/.test(pastedValue) && !pastedValue.trim().endsWith('Z')) {
            pastedValue += 'Z'
        }
        console.log(`handleInitialValue(${pastedValue.trim()})`)
        this.handleInitialValue(pastedValue.trim())
        this.ruxDatetimePickerChange.emit(
            this.parts.find((part) => part.type === 'day')?.value
        )
        this.ruxInput.emit()
    }

    handleCopy = (e: ClipboardEvent) => {
        e.preventDefault()
        // This overrides the default copy behavior and returns the iso value instead
        //if we're in julianFormat, we want the julian ISO.
        let returnIso
        if (this.julianFormat) {
            //partialOrdinalIsoString func expects a valid ISO string to convert.
            if (isIsoString(this.iso)) {
                returnIso = toPartialOrdinalIsoString(this.iso)
            } else {
                //if it's not a valid iso string, we're getting back an ordinal value already.
                returnIso = this.iso
            }
        } else {
            returnIso = this.iso
        }

        e.clipboardData!.setData('text/plain', returnIso)
    }
    private _onFocusOut = () => {
        this.ruxBlur.emit()
        this.ruxChange.emit()
    }
    /**
     *
     * @param e A focus event
     * This makes it so when an input is clicked, the contents get selected so that typing into it
     * is a better experience.
     */
    private _highlightInput = (e: FocusEvent) => {
        highlightInput(e)
    }

    render() {
        return renderDatetimePicker({
            disabled: this.disabled,
            label: this.label,
            size: this.size,
            refs: this.refs,
            handleChange: this.handleChange,
            errorText: this.errorText,
            helpText: this.helpText,
            toggleCalendar: this.toggleCalendar,
            isCalendarOpen: this.isCalendarOpen,
            handleCopy: this.handleCopy,
            handlePaste: this.handlePaste,
            iso: this.iso,
            precision: this.precision,
            el: this.el,
            name: this.name,
            value: this.value,
            required: this.required,
            invalid: this.invalid,
            parts: this.parts,
            julianFormat: this.julianFormat,
            minYear: this.minYear,
            maxYear: this.maxYear,
            _highlightInput: this._highlightInput,
        })
    }
}
