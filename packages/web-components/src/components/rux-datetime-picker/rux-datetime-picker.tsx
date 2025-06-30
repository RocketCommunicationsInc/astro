/* eslint-disable react/jsx-no-bind */
import {
    Component,
    Element,
    Event,
    EventEmitter,
    Fragment,
    Host,
    Listen,
    Prop,
    State,
    Watch,
    h,
} from '@stencil/core'
import { InputRefs, Part, PartKey, Precision } from './utils/types'
import {
    buildMicroOrdinalIsoString,
    combineToISO,
    formatOrdinalToIso,
    getMonthFromDayOfYear,
    getMonthValueByName,
    initialOrdinalParts,
    initialParts,
    isIsoString,
    isLeapYear,
    julianToGregorianDay,
    setDisplay,
    setIsoPart,
    setJulianIsoPart,
    setMaxLength,
    setMaxLengthOrdinal,
    setOrdinalDisplay,
    setPart,
    toOrdinalIsoString,
    toPartialOrdinalIsoString,
    toPartialRegularIsoString,
} from './utils'

import { buildMicroIsoString } from './utils/index'
import { getDaysInMonth } from 'date-fns'
import { renderHiddenInput } from '../../utils/utils'

type CalendarDateTimeUpdatedEvent = CustomEvent<{
    iso: string
    source:
        | 'monthChange'
        | 'yearChange'
        | 'timeChange'
        | 'daySelected'
        | undefined
}>

@Component({
    tag: 'rux-datetime-picker',
    styleUrl: 'rux-datetime-picker.scss',
    shadow: true,
})
export class RuxDatetimePicker {
    private yearRef?: HTMLInputElement
    private monthRef?: HTMLInputElement
    private dayRef?: HTMLInputElement
    private hourRef?: HTMLInputElement
    private minRef?: HTMLInputElement
    private secRef?: HTMLInputElement
    private msRef?: HTMLInputElement
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
        this.isCalendarOpen = false
    }

    /**
     * @param event the event emitted from the calendar. Contains {iso: string, source: string}
     */
    @Listen('ruxcalendardatetimeupdated')
    handleDaySelected(event: CalendarDateTimeUpdatedEvent) {
        if (this.julianFormat) {
            this.value = toOrdinalIsoString(event.detail.iso)
        } else this.value = event.detail.iso
        //Based on the event's source, emit the relevant event
        if (event.detail.source !== 'timeChange') {
            this.ruxChange.emit()
        } else {
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
        if (this.value && !this.isValidIso8601(this.value)) {
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
        this.handleInitialValue(this.value)
    }

    @Watch('value')
    handleValueChange() {
        if (this.julianFormat) {
            this._julianValue = this.value
            this._gregorianValue = toPartialRegularIsoString(
                this.value,
                this.precision === 'us'
            )
        } else {
            this._julianValue = toPartialOrdinalIsoString(
                this.value,
                this.precision === 'us'
            )
            console.log('this._julianValue === ', this._julianValue)
            this._gregorianValue = this.value
        }
        this.el.setAttribute('julian-value', this._julianValue)
        this.el.setAttribute('gregorian-value', this._gregorianValue)
    }

    /**
     * Validates if a string is in ISO 8601 format. Valid formats include:
     * - YYYY
     * - YYYY-MM
     * - YYYY-MM-DD
     * - YYYY-MM-DDTHHZ (hour only)
     * - YYYY-MM-DDTHH:mmZ (hour and minute)
     * - YYYY-MM-DDTHH:mm:ssZ (hour, minute, and second)
     * - YYYY-MM-DDTHH:mm:ss.sssZ (hour, minute, second, and milliseconds)
     * Oridnal Formats:
     * - YYYY
     * - YYYY-DDD
     * - YYYY-DDDTHH:mmZ
     * - YYYY-DDDTHH:mm:ssZ
     * - YYYY-DDDTHHZ:mm:ss.SSSZ
     * -
     */
    isValidIso8601(value: string): boolean {
        const iso8601Regex = /^(\d{4})((-\d{2}){0,2}|-\d{3})(T\d{2}(:\d{2}(:\d{2}(\.\d{1,6})?)?)?Z)?$/
        return iso8601Regex.test(value)
    }

    handleInitialValue(value?: string) {
        const initial = this.julianFormat
            ? initialOrdinalParts()
            : initialParts()
        const isMicro = this.precision === 'us'
        if (value) {
            try {
                if (this.julianFormat && value.length === 3) {
                    const currentYear = new Date().getUTCFullYear()
                    value = `${currentYear}-${value}`
                }

                // --- MICROSECOND HANDLING ---
                if (isMicro && !this.julianFormat) {
                    //check if incoming value is in an Oridnal ISO format. If so, convert it to gregorian since we're not in julianFormat.
                    const ordinalFormatMatch = value.match(
                        /^([0-9]{4})(?:-([0-9]{1,3}))?(?:T([0-9]{2})(?::([0-9]{2}))?(?::([0-9]{2})(?:\.([0-9]{1,6}))?)?Z?)?$/
                    )
                    if (ordinalFormatMatch) {
                        // Extract year, ordinal day, hour, min, sec, micro
                        const year = ordinalFormatMatch[1] || '0000'
                        const ordinal = ordinalFormatMatch[2] || '001'
                        const hour = ordinalFormatMatch[3] || '00'
                        const min = ordinalFormatMatch[4] || '00'
                        const sec = ordinalFormatMatch[5] || '00'
                        const micro = ordinalFormatMatch[6] || '000000'

                        // Convert ordinal day to month and day
                        const date = new Date(Date.UTC(Number(year), 0, 1))
                        date.setUTCDate(Number(ordinal))
                        const month = (date.getUTCMonth() + 1)
                            .toString()
                            .padStart(2, '0')
                        const day = date
                            .getUTCDate()
                            .toString()
                            .padStart(2, '0')

                        value = buildMicroIsoString({
                            year,
                            month,
                            day,
                            hour,
                            min,
                            sec,
                            micro,
                        })
                    }
                    // Try to extract all parts from the value (ISO or partial ISO)
                    // Accepts both YYYY-MM-DDTHH:mm:ss.SSSSSSZ and partials

                    const regex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{1,6})Z?$/
                    const match = value.match(regex)
                    let iso = ''
                    if (match) {
                        const [
                            ,
                            year,
                            month,
                            day,
                            hour,
                            min,
                            sec,
                            micro,
                        ] = match
                        iso = buildMicroIsoString({
                            year,
                            month,
                            day,
                            hour,
                            min,
                            sec,
                            micro,
                        })
                    } else {
                        // Fallback: try to parse as much as possible
                        const partial = value.match(
                            new RegExp(
                                `^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(?:\.(\d{1,6}))?Z?$`
                            )
                        )
                        const [
                            ,
                            year = '0000',
                            month = '01',
                            day = '01',
                            hour = '00',
                            min = '00',
                            sec = '00',
                            micro = '000000',
                        ] = partial || []
                        iso = buildMicroIsoString({
                            year,
                            month,
                            day,
                            hour,
                            min,
                            sec,
                            micro,
                        })
                    }
                    // Set initial part values from ISO string
                    for (const part of initial) {
                        if (part.type === 'mask') continue
                        part.value = setIsoPart[part.type](iso, true)
                    }
                    this.iso = iso
                    this.value = iso
                    this.parts = initial
                    return
                }
                if (this.julianFormat && isMicro) {
                    const match = value.match(
                        /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{1,6})Z$/
                    )
                    if (match) {
                        const [
                            ,
                            year,
                            month,
                            day,
                            hour,
                            min,
                            sec,
                            micro,
                        ] = match
                        // Calculate ordinal day
                        const date = new Date(
                            `${year}-${month}-${day}T00:00:00Z`
                        )
                        const start = new Date(Date.UTC(Number(year), 0, 0))
                        const ordinalDay = String(
                            Math.floor(
                                (date.getTime() - start.getTime()) /
                                    (1000 * 60 * 60 * 24)
                            )
                        ).padStart(3, '0')
                        value = buildMicroOrdinalIsoString({
                            year,
                            jday: ordinalDay,
                            hour,
                            min,
                            sec,
                            micro,
                        })
                    }
                }
                // --- END MICROSECOND HANDLING ---

                const ordinalFormatMatch = value.match(
                    /^([0-9]{4})(?:-([0-9]{1,3}))?(?:T([0-9]{2})(?::([0-9]{2}))?(?::([0-9]{2})(?:\.([0-9]{1,6}))?)?Z?)?$/
                )

                let d: Date | undefined | string = undefined

                if (ordinalFormatMatch && this.julianFormat) {
                    // Parse year and day-of-year
                    const year =
                        ordinalFormatMatch[1] ||
                        new Date().getUTCFullYear().toString()
                    let jdayNum = parseInt(ordinalFormatMatch[2] || '1', 10)
                    if (isNaN(jdayNum) || jdayNum < 1) jdayNum = 1

                    const yearNum = parseInt(year, 10)
                    const maxDay = isLeapYear(yearNum) ? 366 : 365
                    if (jdayNum > maxDay) jdayNum = maxDay
                    const jday = jdayNum.toString().padStart(3, '0')
                    const hour = ordinalFormatMatch[3] || '00'
                    const minute = ordinalFormatMatch[4] || '00'
                    const sec = ordinalFormatMatch[5] || '00'
                    const ms = ordinalFormatMatch[6]
                        ? ordinalFormatMatch[6]
                        : isMicro
                        ? '000000'
                        : '000'
                    const gregDay = julianToGregorianDay(jday, year).padStart(
                        2,
                        '0'
                    )
                    const month = getMonthValueByName(
                        getMonthFromDayOfYear(jday, yearNum)!
                    )
                    if (!isMicro) {
                        d = new Date(
                            `${year}-${month}-${gregDay}T${hour}:${minute}:${sec}.${ms}Z`
                        )
                    } else {
                        d = buildMicroOrdinalIsoString({
                            year,
                            jday,
                            hour,
                            min: minute,
                            sec,
                            micro: ms,
                        })
                    }
                } else {
                    // Special case: 2-digit value as month (01-12)
                    if (
                        value.length === 2 &&
                        /^\d{2}$/.test(value) &&
                        parseInt(value, 10) >= 1 &&
                        parseInt(value, 10) <= 12
                    ) {
                        // Treat as month, default year to current year
                        const currentYear = new Date().getUTCFullYear()
                        d = new Date(`${currentYear}-${value}`)
                    } else {
                        // Try to parse as a direct date first
                        d = new Date(value)
                        if (isNaN(d.getTime())) {
                            // Fallback: try to parse as partial ISO
                            const iso = toPartialRegularIsoString(value)
                            d = new Date(iso)
                        }
                    }
                }

                // if (!d || isNaN(d.getTime())) throw new Error('Invalid date')

                // Always get ISO string (Gregorian)
                let iso
                if (d instanceof Date) {
                    iso = d.toISOString()
                    if (this.julianFormat) {
                        iso = toOrdinalIsoString(iso)
                    }
                } else {
                    iso = d
                }

                // Set initial part values from ISO string
                for (const part of initial) {
                    if (part.type === 'mask') continue
                    part.value = this.julianFormat
                        ? setJulianIsoPart[part.type](iso, isMicro)
                        : setIsoPart[part.type](iso, isMicro)
                }

                // Always pass down Gregorian ISO to calendar
                this.iso = formatOrdinalToIso(iso)
            } catch (error: any) {
                this.iso = error.message || 'Invalid date'
            }
        }

        // Adjust parts array length based on precision
        switch (this.precision) {
            case 'day':
                // Remove all time parts for day precision
                !this.julianFormat ? initial.splice(5, 9) : initial.splice(3, 9)
                break
            case 'hour':
                // Keep only up to hour
                !this.julianFormat ? initial.splice(7, 6) : initial.splice(5, 6)
                break
            case 'min':
                !this.julianFormat ? initial.splice(9, 4) : initial.splice(7, 4)
                break
            case 'sec':
                !this.julianFormat
                    ? initial.splice(11, 2)
                    : initial.splice(9, 2)
                break
            case 'ms':
                break
            case 'us':
                break
            default:
                initial.splice(9, 4)
                break
        }

        this.parts = initial
        console.log('this.iso Before this.value assignment: ', this.iso)
        this.value = this.julianFormat
            ? toPartialOrdinalIsoString(this.iso, isMicro)
            : this.iso
        console.log('End of HIV value: ', this.value)
    }

    /**
     * Takes in an input value and validates it based on the type of input, adhering it to the min and max of that type
     * @param value
     * @param type
     * @param inputRefs
     * @returns Input value validated based on type
     */
    validateInput(value: string, type: PartKey, inputRefs: InputRefs): string {
        const [min, max] = this.determineMinMax(type, this.precision === 'us')
        const dayPart = this.parts.find((part) => part.type == 'day')
        const monthPart = this.parts.find((part) => part.type === 'month')
        const yearPart = this.parts.find((part) => part.type === 'year')

        // If type is month, only allow values of 1-12. If the first digit is between 2-9, pad the digit with a 0 and move to the next input.
        if (type === 'month' && value.length === 1 && parseInt(value) > 1) {
            value = `0${value}`
            inputRefs['day']?.focus()
        }
        //Month can't be 00
        if (type === 'month' && value === '00') {
            value = '01'
        }

        // If entered month is higher than max of 12, revert value to be 12
        if (type === 'month' && parseInt(value) > max) {
            value = `${max}`
        }

        if (type === 'month' && dayPart?.value) {
            //need year to accuractley determine how many days are in the month
            const year = yearPart?.value || new Date().getFullYear()
            //get the month from the input
            // get the days in the month. Months in this context is 0-indexed, hence the -1
            const daysInMonth = getDaysInMonth(
                new Date(Number(year), Number(value) - 1)
            )
            //check day input to see if it's value needs updated to be the highest day in the month
            if (Number(dayPart.value) > daysInMonth) {
                dayPart.value = daysInMonth.toString()
            }
        }

        // Based on the month, the day should be limited to the number of days in that month
        if (!this.julianFormat) {
            if (type === 'day') {
                const month = monthPart?.value || ''
                if (month) {
                    const year = yearPart?.value || new Date().getFullYear()
                    //get the month from the input
                    // get the days in the month. Months in this context is 0-indexed, hence the -1
                    const daysInMonth = getDaysInMonth(
                        new Date(Number(year), Number(month) - 1)
                    )
                    if (parseInt(value) > daysInMonth) {
                        value = `${daysInMonth}`

                        if (dayPart) dayPart.value = value
                    }
                } else {
                    if (parseInt(value) > 31) {
                        value = '31'
                        if (dayPart) dayPart.value = value
                    }
                }
                // If the day is 0, set it to 1
                if (parseInt(value) === 0 && value.length === 2) {
                    value = '01'
                }
            }
        } else {
            // If the day is 0, set it to 1
            if (type === 'day' && parseInt(value) === 0 && value.length === 3) {
                value = '001'
            }
            // if the year isn't a leapyear, the max day is 365
            if (
                type === 'day' &&
                parseInt(yearPart?.value || '') % 4 !== 0 &&
                parseInt(value) > 365
            ) {
                value = '365'
            }
            // if the year is a leapyear, the max day is 366
            if (
                type === 'day' &&
                parseInt(yearPart?.value || '') % 4 === 0 &&
                parseInt(value) > 366
            ) {
                value = '366'
            }
        }

        // If year value is greater than max, revert value to be max
        if (type === 'year' && parseInt(value) > max) {
            value = `${max}`
        }

        // If year value is less than min, revert value to be min but only after the entire year has been entered
        if (type === 'year' && parseInt(value) < min && value.length === 4) {
            value = `${min}`
        }

        // If the year is not a leap year, ensure that the max day for Feb is 28.
        // This solves the edge case of typing into the datepicker a leap year date like 2024-02-29,
        // and then changing the year in the input to a non-leap year.
        if (type === 'year' && monthPart && dayPart && value.length === 4) {
            if (
                parseInt(value) % 4 !== 0 &&
                monthPart.value === '02' &&
                dayPart.value > '28'
            ) {
                // we are not in a leap year, so the max day for feb is 28.
                dayPart.value = '28'
            }
        }

        // If hour value is greater than max, revert value to be max
        if (type === 'hour' && parseInt(value) > max) {
            value = `${max}`
        }
        // if minute value is greater than max, revert value to be max
        if (type === 'min' && parseInt(value) > max) {
            value = `${max}`
        }
        // if second value is greater than max, revert value to be max
        if (type === 'sec' && parseInt(value) > max) {
            value = `${max}`
        }
        // if millisecond value is greater than max, revert value to be max
        if (type === 'ms' && parseInt(value) > max) {
            value = `${max}`
        }

        return value
    }

    /**
     * Handles value change on the inputs. Updates this.parts and this.iso.
     * @param event The InputEvent
     * @param type The PartKey of the input (ie year, month, day, ect)
     * @param inputRefs The references to each input
     */
    handleChange(event: InputEvent, type: PartKey, inputRefs: InputRefs) {
        const target = event.target as HTMLInputElement
        let value = target.value
        const isValid = /^(\s*|\d+)$/.test(value)
        if (!isValid) {
            target.value = this.previousValue // Set the input value back to the previous valid value
            return
        }
        value = this.validateInput(value, type, inputRefs)
        const sanitized = value.replace(/ /g, '')
        const updatedParts = setPart[type](
            sanitized,
            this.parts,
            inputRefs,
            this.julianFormat
        )
        this.parts = updatedParts
        this.previousValue = value // Update the previous valid value
        const hasNoValue = updatedParts.every(({ type, value }) => {
            if (type === 'mask') return true
            return value === ''
        })
        if (hasNoValue) {
            this.iso = ''
            return
        }

        const [date, time, z] = updatedParts
            .map((part) => part.value)
            .join('')
            .split('~')
        let parsedIso = !this.julianFormat
            ? `${date}T${time}${z}`
            : `${date}${time}${z}`

        if (this.julianFormat) {
            parsedIso = formatOrdinalToIso(parsedIso)
        }

        try {
            if (!this.isValidIso8601(parsedIso)) {
                this.value = combineToISO(
                    this.parts.find((part) => part.type === 'year')?.value,
                    this.parts.find((part) => part.type === 'month')?.value,
                    this.parts.find((part) => part.type === 'day')?.value,
                    this.parts.find((part) => part.type === 'hour')?.value,
                    this.parts.find((part) => part.type === 'min')?.value,
                    this.parts.find((part) => part.type === 'sec')?.value,
                    this.parts.find((part) => part.type === 'ms')?.value,
                    this.julianFormat
                )
                this.ruxInput.emit()
                this.ruxDatetimePickerChange.emit(
                    this.parts.find((part) => part.type === 'day')?.value
                )
                // if the iso isn't valid, we don't want to send gibberish to the calendar. Instead, send
                // the result of the combineToISO method.
                this.iso = this.value
                return
            }

            const d = new Date(parsedIso)
            if (isNaN(d.getTime())) {
                this.iso = parsedIso
                return
            }

            const iso = d.toISOString()
            this.iso = iso
            this.value = combineToISO(
                this.parts.find((part) => part.type === 'year')?.value,
                this.parts.find((part) => part.type === 'month')?.value,
                this.parts.find((part) => part.type === 'day')?.value,
                this.parts.find((part) => part.type === 'hour')?.value,
                this.parts.find((part) => part.type === 'min')?.value,
                this.parts.find((part) => part.type === 'sec')?.value,
                this.parts.find((part) => part.type === 'ms')?.value,
                this.julianFormat
            )
            this.ruxInput.emit()
        } catch (error: any) {
            const message = error.message || 'Invalid date'
            this.iso = message
        }
        this.ruxDatetimePickerChange.emit(
            this.parts.find((part) => part.type === 'day')?.value
        )
    }

    toggleCalendar() {
        this.isCalendarOpen = !this.isCalendarOpen
    }

    determineMinMax(type: PartKey, isMicro: boolean, isJulian?: boolean) {
        switch (type) {
            case 'year':
                return [this.minYear, this.maxYear]
            case 'month':
                return [1, 12]
            case 'day':
                return !isJulian ? [1, 31] : [1, 366]
            case 'hour':
                return [0, 23]
            case 'min':
                return [0, 59]
            case 'sec':
                return [0, 59]
            case 'ms':
                return isMicro ? [0, 999999] : [0, 999]
        }
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
        const target = e.target as HTMLInputElement
        target.select()
    }

    render() {
        const {
            disabled,
            label,
            size,
            refs,
            handleChange,
            errorText,
            helpText,
            toggleCalendar,
            isCalendarOpen,
            handleCopy,
            handlePaste,
            iso,
            precision,
        } = this
        renderHiddenInput(true, this.el, this.name, this.value, this.disabled)
        return (
            <Host>
                <div>
                    <div
                        class={{ control: true }}
                        onPaste={handlePaste}
                        onCopy={handleCopy}
                    >
                        {label && (
                            <label>
                                {label}
                                {this.required && (
                                    <span
                                        part="required"
                                        class="rux-datetime-picker-label__asterisk"
                                    >
                                        &#42;
                                    </span>
                                )}
                            </label>
                        )}

                        <div
                            class={{
                                input: true,
                                'rux-body-1': true,
                                small: size === 'small',
                                medium: size === 'medium',
                                large: size === 'large',
                                disabled: this.disabled,
                                invalid: this.invalid,
                            }}
                        >
                            {this.parts.map(({ type, value }, i) =>
                                type === 'mask' ? (
                                    <span
                                        class={{
                                            mask: true,
                                            space: value === '~',
                                            tz: value === 'T' || value === 'Z',
                                        }}
                                        key={i}
                                    >
                                        {value}
                                    </span>
                                ) : (
                                    <Fragment>
                                        <input
                                            key={i}
                                            class={{
                                                part: true,
                                                year: type === 'year',
                                                month: type === 'month',
                                                day: type === 'day',
                                                hour: type === 'hour',
                                                min: type === 'min',
                                                sec: type === 'sec',
                                                ms: type === 'ms',
                                                us: this.precision === 'us',
                                                ordinalDay:
                                                    type === 'day' &&
                                                    this.julianFormat,
                                            }}
                                            disabled={disabled}
                                            ref={(el) => (this.refs[type] = el)}
                                            onInput={(e: InputEvent) =>
                                                handleChange(e, type, refs)
                                            }
                                            maxLength={
                                                !this.julianFormat
                                                    ? setMaxLength(
                                                          this.precision ===
                                                              'us'
                                                      )[type]
                                                    : setMaxLengthOrdinal(
                                                          this.precision ===
                                                              'us'
                                                      )[type]
                                            }
                                            max={
                                                this.determineMinMax(
                                                    type,
                                                    this.precision === 'us',
                                                    this.julianFormat
                                                )[1]
                                            }
                                            min={
                                                this.determineMinMax(
                                                    type,
                                                    this.precision === 'us',
                                                    this.julianFormat
                                                )[0]
                                            }
                                            value={value}
                                            onFocus={(e: FocusEvent) =>
                                                this._highlightInput(e)
                                            }
                                        />
                                        <span
                                            class={{
                                                display: true,
                                                isOrdinal: this.julianFormat,
                                                year: type === 'year',
                                                month: type === 'month',
                                                day: type === 'day',
                                                hour: type === 'hour',
                                                min: type === 'min',
                                                sec: type === 'sec',
                                                ms: type === 'ms',
                                            }}
                                        >
                                            {!this.julianFormat
                                                ? setDisplay[type](
                                                      value,
                                                      this.precision === 'us'
                                                  )
                                                : setOrdinalDisplay[type](
                                                      value,
                                                      this.precision === 'us'
                                                  )}
                                        </span>
                                    </Fragment>
                                )
                            )}
                            <rux-pop-up
                                open={isCalendarOpen}
                                placement="bottom"
                                class="calendar-btn"
                            >
                                <button
                                    type="button"
                                    disabled={disabled}
                                    class="calendar-btn calendar-icon"
                                    onClick={toggleCalendar}
                                    slot="trigger"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 3h1c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h1V2c0-.55.45-1 1-1s1 .45 1 1v1h10V2c0-.55.45-1 1-1s1 .45 1 1v1ZM5 21h14c.55 0 1-.45 1-1V8H4v12c0 .55.45 1 1 1Z" />
                                    </svg>
                                </button>
                                <rux-calendar
                                    //* ISO controls the displayed date in the calendar and should only ever be in ISO format, not ordinal
                                    iso={iso}
                                    minYear={this.minYear}
                                    maxYear={this.maxYear}
                                    precision={precision}
                                    isJulian={this.julianFormat}
                                ></rux-calendar>
                            </rux-pop-up>
                        </div>

                        {helpText && !errorText && (
                            <small class="rux-help-text">{helpText}</small>
                        )}

                        {errorText && (
                            <small class="rux-error-text">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M19.53 21c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3h15.06ZM12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1Zm-1 2v2h2v-2h-2Z"
                                    />
                                </svg>

                                {errorText}
                            </small>
                        )}
                    </div>
                </div>
            </Host>
        )
    }
}
