/* eslint-disable react/jsx-no-bind */
import {
    Component,
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
    initialParts,
    setDisplay,
    setIsoPart,
    setMaxLength,
    setPart,
} from './utils'

@Component({
    tag: 'rux-datetime-picker',
    styleUrl: 'rux-datetime-picker.scss',
    shadow: true,
})
export class RuxDatetimePicker {
    // private wrapperRef?: HTMLDivElement
    // private popUpRef?: HTMLRuxPopUpElement
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
    @Prop() isChanged: boolean = false
    @Prop({ attribute: 'min-year' }) minYear: number = 1900
    @Prop({ attribute: 'max-year' }) maxYear: number = 2100

    @State() iso: string = ''
    @State() parts: Part[] = []
    @State() previousValue: string = ''
    @State() isCalendarOpen: boolean = false

    //Need to @Listen for ruxpopupclose event to close calendar
    @Listen('ruxpopupclosed')
    handlePopupClose() {
        this.isCalendarOpen = false
    }

    /**
     *
     * @param event the event emitted from the calendar. Contains {iso: string}
     */
    @Listen('ruxcalendardatetimeupdated')
    handleDaySelected(event: CustomEvent) {
        this.value = event.detail.iso
        //? Need to decide wether or not to close the calendar on a date selection.
        // this.toggleCalendar()
    }

    connectedCallback() {
        console.log('CC on Datepicker')
        this.handleChange = this.handleChange.bind(this)
        this.toggleCalendar = this.toggleCalendar.bind(this)
    }

    componentWillLoad() {
        this.handleInitialValue(this.value)
    }

    @Watch('parts')
    handlePartsChange() {
        // console.log('parts changed. Curr value: ', this.parts)
    }

    @Watch('precision')
    handlePrecisionChange() {
        this.handleInitialValue(this.value)
    }

    @Watch('value')
    handleValueChange() {
        this.handleInitialValue(this.value)
    }

    handleInitialValue(value?: string) {
        const initial = initialParts()
        if (value) {
            try {
                const d = new Date(value)
                const iso = d.toISOString()
                for (const part of initial) {
                    if (part.type === 'mask') continue
                    part.value = setIsoPart[part.type](iso)
                }

                this.iso = iso
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
        const updatedParts = setPart[type](sanitized, this.parts, inputRefs)
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
        const parsedIso = `${date}T${time}${z}`
        try {
            const d = new Date(parsedIso)
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
        } finally {
            /**
             * Set isChanged to true when the first change made
             */
            if (!this.isChanged) {
                this.isChanged = true
            }
        }
    }

    toggleCalendar() {
        this.isCalendarOpen = !this.isCalendarOpen
    }

    determineMinMax(type: PartKey) {
        switch (type) {
            case 'year':
                return [1000, 3000]
            case 'month':
                return [1, 12]
            case 'day':
                return [1, 31]
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
    }

    handleCopy = (e: ClipboardEvent) => {
        e.preventDefault()
        // This overrides the default copy behavior and returns the iso value instead
        e.clipboardData!.setData('text/plain', this.iso)
    }

    handleInitTime = (timeType: 'hour' | 'min' | 'sec' | 'ms') => {
        //based on the timeType, return the value of the timeType from the iso string
        if (!this.iso) return ''
        const time = new Date(this.iso).getUTCHours().toString()
        switch (timeType) {
            case 'hour':
                return new Date(this.iso).getUTCHours().toString() === '0'
                    ? ''
                    : new Date(this.iso).getUTCHours().toString()
            case 'min':
                return new Date(this.iso).getUTCMinutes().toString() === '0'
                    ? ''
                    : new Date(this.iso).getUTCMinutes().toString()
            case 'sec':
                return new Date(this.iso).getUTCSeconds().toString() === '0'
                    ? ''
                    : new Date(this.iso).getUTCSeconds().toString()
            case 'ms':
                return new Date(this.iso).getUTCMilliseconds().toString() ===
                    '0'
                    ? ''
                    : new Date(this.iso).getUTCMilliseconds().toString()
            default:
                return time
        }
    }

    render() {
        const {
            disabled,
            label,
            name,
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
            handleInitTime,
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
                        <input
                            tabIndex={-1}
                            readOnly
                            name={name}
                            disabled={disabled}
                            class="hidden-input"
                        ></input>
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
                                            maxLength={setMaxLength[type]}
                                            max={determineMinMax(type)[1]}
                                            min={determineMinMax(type)[0]}
                                            value={value}
                                        />
                                        <span
                                            class={{
                                                display: true,
                                                year: type === 'year',
                                                month: type === 'month',
                                                day: type === 'day',
                                                hour: type === 'hour',
                                                min: type === 'min',
                                                sec: type === 'sec',
                                                ms: type === 'ms',
                                            }}
                                        >
                                            {setDisplay[type](value)}
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
                                    iso={iso}
                                    //? Update min max years as needed- defaulting to +- 50 years here
                                    minYear={minYear}
                                    maxYear={maxYear}
                                    precision={precision}
                                    initHoursValue={handleInitTime('hour')}
                                    initMinutesValue={handleInitTime('min')}
                                    initSecondsValue={handleInitTime('sec')}
                                    initMillisecondsValue={handleInitTime('ms')}
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
