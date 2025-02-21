/* eslint-disable react/jsx-no-bind */
import { Component, Fragment, Host, Prop, State, Watch, h } from '@stencil/core'
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
    private wrapperRef?: HTMLDivElement
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
    @Prop() value?: string
    @Prop() precision: Precision = 'min'
    @Prop() isChanged: boolean = false

    @State() iso: string = ''
    @State() parts: Part[] = []
    @State() previousValue: string = ''

    connectedCallback() {
        this.handleChange = this.handleChange.bind(this)
    }

    componentWillLoad() {
        this.handleInitialValue(this.value)
    }

    @Watch('parts')
    handlePartsChange() {
        console.log('parts changed. Curr value: ', this.parts)
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

    handleChange(event: InputEvent, type: PartKey, inputRefs: InputRefs) {
        const target = event.target as HTMLInputElement
        const value = target.value
        console.log('value: ', value)
        const isValid = /^(\s*|\d+)$/.test(value)
        if (!isValid) {
            console.log(`Value is not valid: ${value}. Should return.`)
            target.value = this.previousValue // Set the input value back to the previous valid value
            console.log(
                'setting value: ',
                value,
                ' back to : ',
                this.previousValue
            )
            return
        }
        console.log('isValid: ', isValid)
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
        console.log('Need to implement toggleCalendar still')
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
        } = this
        return (
            <Host>
                <div ref={(el) => (this.wrapperRef = el)}>
                    <div class={{ control: true }}>
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
                                            value={value}
                                            disabled={disabled}
                                            ref={(el) => (this.refs[type] = el)}
                                            onInput={(e: InputEvent) =>
                                                handleChange(e, type, refs)
                                            }
                                            maxLength={setMaxLength[type]}
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
                            <button
                                type="button"
                                disabled={disabled}
                                class="calendar-btn"
                                onClick={toggleCalendar}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 3h1c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h1V2c0-.55.45-1 1-1s1 .45 1 1v1h10V2c0-.55.45-1 1-1s1 .45 1 1v1ZM5 21h14c.55 0 1-.45 1-1V8H4v12c0 .55.45 1 1 1Z" />
                                </svg>
                            </button>
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
