/* eslint-disable react/jsx-no-bind */
import {
    Component,
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
    formatOrdinalToIso,
    initialOrdinalParts,
    initialParts,
    setDisplay,
    setIsoPart,
    setJulianIsoPart,
    setMaxLength,
    setMaxLengthOrdinal,
    setOrdinalDisplay,
    setPart,
} from './utils'

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
    private refs: InputRefs = {
        year: this.yearRef,
        month: this.monthRef,
        day: this.dayRef,
        hour: this.hourRef,
        min: this.minRef,
        sec: this.secRef,
        ms: this.msRef,
    }
    private previousValue: string = ''

    @Prop() disabled: boolean = false
    @Prop({ attribute: 'error-text' }) errorText?: string
    @Prop({ attribute: 'help-text' }) helpText?: string
    @Prop() invalid: boolean = false
    @Prop() label?: string
    @Prop() name?: string
    @Prop() required: boolean = false
    @Prop() size: 'small' | 'medium' | 'large' = 'medium'
    @Prop({ reflect: true, mutable: true }) value?: string
    @Prop() precision: Precision = 'min'
    @Prop({ attribute: 'min-year' }) minYear: number = 1900
    @Prop({ attribute: 'max-year' }) maxYear: number = 2100
    @Prop({ attribute: 'julian-format' }) julianFormat: boolean = false

    @Event({ eventName: 'ruxdatepickerchange' })
    ruxDatetimePickerChange!: EventEmitter<string>

    @State() iso: string = ''
    @State() parts: Part[] = []
    @State() isCalendarOpen: boolean = false
    @State() inputtedDay: string = ''
    @State() inputtedMonth: string = ''
    @State() inputtedYear: string = ''

    @Listen('ruxpopupclosed')
    handlePopupClose() {
        this.isCalendarOpen = false
    }

    /**
     * @param event the event emitted from the calendar. Contains {iso: string}
     */
    @Listen('ruxcalendardatetimeupdated')
    handleDaySelected(event: CustomEvent) {
        this.value = event.detail.iso
    }

    connectedCallback() {
        this.handleChange = this.handleChange.bind(this)
        this.toggleCalendar = this.toggleCalendar.bind(this)
        if (this.value && !this.isValidIso8601(this.value)) {
            console.warn(
                `rux-datetime-picker: Invalid value prop format: "${this.value}". Allowed: YYYY, YYYY-MM, YYYY-MM-DD, or with UTC time: YYYY-MM-DDTHHZ to YYYY-MM-DDTHH:mm:ss.sssZ or in Ordinal ISO format: YYYY-DDD to YYYY-DDDTHH:mm:ss.sssZ`
            )
            this.iso = ''
            this.value = undefined
        }
    }

    componentWillLoad() {
        this.handleInitialValue(this.value)
    }

    @Watch('precision')
    handlePrecisionChange() {
        this.handleInitialValue(this.value)
    }

    @Watch('value')
    handleValueChange(newValue: string) {
        if (newValue) {
            if (!this.isValidIso8601(newValue)) {
                console.warn(
                    `rux-datetime-picker: Invalid value prop format: "${this.value}". Allowed: YYYY, YYYY-MM, YYYY-MM-DD, or with UTC time: YYYY-MM-DDTHHZ to YYYY-MM-DDTHH:mm:ss.sssZ or in Ordinal ISO format: YYYY-DDD to YYYY-DDDTHH:mm:ss.sssZ`
                )
                return
            }
        }
        this.handleInitialValue(this.value)
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
        const iso8601Regex = /^(\d{4})((-\d{2}){0,2}|-\d{3})(T\d{2}(:\d{2}(:\d{2}(\.\d{1,3})?)?)?Z)?$/
        return iso8601Regex.test(value)
    }

    /**
     *
     * @param isoString An ISO string to convert to ordinal format
     * @returns An ISO string converted to an ordinal format string such as YYYY-DDDTHH:mm:ss.sssZ
     */
    private toOrdinalIsoString(isoString: string): string {
        const date = new Date(isoString)
        const year = date.getUTCFullYear()
        const startOfYear = new Date(Date.UTC(year, 0, 0))
        const diff = date.getTime() - startOfYear.getTime()
        const oneDay = 1000 * 60 * 60 * 24
        const dayOfYear = Math.floor(diff / oneDay)

        // Format the day of the year as a three-digit number
        const ordinalDay = String(dayOfYear).padStart(3, '0')

        // Extract the time part of the ISO string
        const timePart = isoString.substring(isoString.indexOf('T'))

        // Construct the Ordinal ISO string
        return `${year}-${ordinalDay}${timePart}`
    }

    handleInitialValue(value?: string) {
        const initial = this.julianFormat
            ? initialOrdinalParts()
            : initialParts()
        if (value) {
            try {
                //We need to turn an ordinal formatted string into an equivalent ISO string
                // in order to store the date. After the date is stored, we need to translate it
                // back to ordinal format for display
                const isInOrdinalFormat = value.match(/(\d{4})-(\d{3})T(.*)/)
                if (isInOrdinalFormat) {
                    value = formatOrdinalToIso(value)
                }
                const d = new Date(value)
                let iso = d.toISOString()
                if (this.julianFormat) {
                    iso = this.toOrdinalIsoString(iso)
                }
                for (const part of initial) {
                    if (part.type === 'mask') continue
                    if (this.julianFormat) {
                        part.value = setJulianIsoPart[part.type](iso)
                    } else {
                        part.value = setIsoPart[part.type](iso)
                    }
                }
                // always want the ISO string passed down the component tree to be actual ISO time, not ordinal
                this.iso = formatOrdinalToIso(iso)
            } catch (error: any) {
                const message = error.message || 'Invalid date'
                this.iso = message
            }
        }
        /**
         * Handles the length of initial parts based on precision
         */
        switch (this.precision) {
            case 'min':
                initial.splice(9, 4)
                break

            case 'sec':
                initial.splice(11, 2)
                break

            case 'ms':
                break

            default:
                initial.splice(9, 4)
                break
        }
        /**
         * Sets the initial parts
         */
        this.parts = initial
    }

    /**
     * Takes in an input value and validates it based on the type of input, adhering it to the min and max of that type
     * @param value
     * @param type
     * @param inputRefs
     * @returns Input value validated based on type
     */
    validateInput(value: string, type: PartKey, inputRefs: InputRefs): string {
        const [min, max] = this.determineMinMax(type)

        // If type is month, only allow values of 1-12. If the first digit is between 2-9, pad the digit with a 0 and move to the next input.
        if (type === 'month' && value.length === 1 && parseInt(value) > 1) {
            value = `0${value}`
            inputRefs['day']?.focus()
        }

        // If entered month is higher than max of 12, revert value to be 12
        if (type === 'month' && parseInt(value) > max) {
            value = `${max}`
        }

        // Based on the month, the day should be limited to the number of days in that month
        if (!this.julianFormat) {
            if (type === 'day') {
                const month = parseInt(inputRefs['month']?.value || '')
                const daysInMonth = new Date(
                    parseInt(inputRefs['year']?.value || ''),
                    month,
                    0
                ).getDate()
                if (parseInt(value) > daysInMonth) {
                    value = `${daysInMonth}`
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
                parseInt(inputRefs['year']?.value || '') % 4 !== 0 &&
                parseInt(value) > 365
            ) {
                value = '365'
            }
            // if the year is a leapyear, the max day is 366
            if (
                type === 'day' &&
                parseInt(inputRefs['year']?.value || '') % 4 === 0 &&
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

    handleChange(event: InputEvent, type: PartKey, inputRefs: InputRefs) {
        const target = event.target as HTMLInputElement
        let value = target.value
        const isValid = /^(\s*|\d+)$/.test(value)
        if (!isValid) {
            target.value = this.previousValue // Set the input value back to the previous valid value
            //? Maybe emit a custom event here with the error message? That way the dev can receive an error and display error text if they need to
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
        //have to do this to avoid adding an extra "T". Should probably just add T in to display as well.
        let parsedIso = !this.julianFormat
            ? `${date}T${time}${z}`
            : `${date}${time}${z}`
        if (this.julianFormat) {
            parsedIso = formatOrdinalToIso(parsedIso)
        }

        try {
            if (!this.isValidIso8601(parsedIso)) {
                //this.iso doesn't need to be a valid date. we will do calcs on the calendar side.
                this.iso = parsedIso
                return
            }
            const d = new Date(parsedIso)
            // console.log('date from parsed ISO: ', d)
            if (isNaN(d.getTime())) {
                //this.iso doesn't need to be a valid date. we will do calcs on the calendar side.
                this.iso = parsedIso
                return
            }
            /**
             * If d.toISOString() throws an error, will end up in catch block
             */
            const iso = d.toISOString()
            /**
             * If parsedIso is valid iso string, set updated iso
             */
            this.iso = iso
        } catch (error: any) {
            const message = error.message || 'Invalid date'
            /**
             * If error, set iso to message from error
             */
            this.iso = message
        }
    }

    toggleCalendar() {
        this.isCalendarOpen = !this.isCalendarOpen
    }

    determineMinMax(type: PartKey, isJulian?: boolean) {
        switch (type) {
            case 'year':
                return [1000, 3000]
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
                return [0, 999]
        }
    }

    handlePaste = (e: ClipboardEvent) => {
        e.preventDefault()
        const pastedValue = e.clipboardData!.getData('text/plain')
        this.handleInitialValue(pastedValue.trim())
        const date = new Date(this.iso)
        const year = date.getUTCFullYear()
        const month = (date.getUTCMonth() + 1).toString().padStart(2, '0') // Months are zero-based, so add 1
        const day = date.getUTCDate().toString().padStart(2, '0')
        this.inputtedDay = day
        this.inputtedMonth = month
        this.inputtedYear = year.toString()
    }

    handleCopy = (e: ClipboardEvent) => {
        e.preventDefault()
        // This overrides the default copy behavior and returns the iso value instead
        e.clipboardData!.setData('text/plain', this.iso)
        //TODO: figure out if we need to preserve the iso as a JulianISO if in julian mode.
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
            determineMinMax,
            handleCopy,
            handlePaste,
            iso,
            minYear,
            maxYear,
            precision,
        } = this
        return (
            <Host>
                <div>
                    <div
                        class={{ control: true }}
                        onPaste={handlePaste}
                        onCopy={handleCopy}
                    >
                        {label && <label>{label}</label>}

                        <div
                            class={{
                                input: true,
                                'rux-body-1': true,
                                small: size === 'small',
                                medium: size === 'medium',
                                large: size === 'large',
                            }}
                        >
                            {this.parts.map(({ type, value }, i) =>
                                type === 'mask' ? (
                                    <span
                                        class={{
                                            mask: true,
                                            space: value === '~',
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
                                            }}
                                            disabled={disabled}
                                            ref={(el) => (this.refs[type] = el)}
                                            onInput={(e: InputEvent) =>
                                                handleChange(e, type, refs)
                                            }
                                            maxLength={
                                                !this.julianFormat
                                                    ? setMaxLength[type]
                                                    : setMaxLengthOrdinal[type]
                                            }
                                            max={
                                                determineMinMax(
                                                    type,
                                                    this.julianFormat
                                                )[1]
                                            }
                                            min={
                                                determineMinMax(
                                                    type,
                                                    this.julianFormat
                                                )[0]
                                            }
                                            value={value}
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
                                                ? setDisplay[type](value)
                                                : setOrdinalDisplay[type](
                                                      value
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
                                    class="calendar-btn"
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
                                    //? Update min max years as needed- defaulting to +- 50 years here
                                    minYear={minYear}
                                    maxYear={maxYear}
                                    precision={precision}
                                    isJulian={this.julianFormat}
                                ></rux-calendar>
                            </rux-pop-up>
                        </div>

                        {helpText && (
                            <small class="rux-body-2">{helpText}</small>
                        )}

                        {errorText && (
                            <small class="rux-body-2 error">
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
