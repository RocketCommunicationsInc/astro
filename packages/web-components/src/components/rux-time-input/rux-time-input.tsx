import {
    Prop,
    Host,
    Component,
    Event,
    EventEmitter,
    h,
    Element,
    State,
    Watch,
    Method,
} from '@stencil/core'
import { FormFieldInterface } from '../../common/interfaces.module'
import { hasSlot, renderHiddenInput } from '../../utils/utils'
import IMask, { MaskedRange, MaskedEnum } from 'imask'

let id = 0

/**
 * @slot label - The input label
 * @slot prefix - Left side input icon
 * @slot suffix - Right side input icon
 * @slot help-text -  the help text
 * @slot error-text -  the error text
 * @part error-text - The error text element
 * @part form-field - The form-field wrapper container
 * @part help-text - The help text element
 * @part icon - The icon displayed when toggle-password prop is set
 * @part input-field - the styled wrapper around the input element
 * @part input - The input element
 * @part label - The input label when `label` prop is set
 * @part required - The asterisk when required is true
 * @part prefix - The container of the prefix slot
 * @part suffix - The container of the suffix slot
 *
 */
@Component({
    tag: 'rux-time-input',
    styleUrl: 'rux-time-input.scss',
    shadow: true,
})
export class RuxTimeInput implements FormFieldInterface {
    private inputId = `rux-input-${++id}`
    private inputEl!: HTMLInputElement
    private iMaskRef: any | null = null

    @Element() el!: HTMLRuxInputElement

    @State() hasLabelSlot = false
    @State() hasHelpSlot = false
    @State() hasErrorSlot = false
    @State() hasFocus = false

    /**
     * The input label text. For HTML content, use the `label` slot instead.
     */
    @Prop() label?: string
    /**
     * The input placeholder text
     */
    @Prop() placeholder?: string

    /**
     * The help or explanation text
     */
    @Prop({ attribute: 'help-text' }) helpText?: string

    /**
     * The validation error text
     */
    @Prop({ attribute: 'error-text' }) errorText?: string

    /**
     * Presentational only. Renders the Input Field as invalid.
     */
    @Prop() invalid = false

    /**
     * The input value
     */
    @Prop({ mutable: true, reflect: true }) value: string = ''

    /**
     * The input name
     */
    @Prop() name = ''

    /**
     * The input min attribute
     */
    @Prop() min?: string

    /**
     * The input max attribute
     */
    @Prop() max?: string

    /**
     * Disables the button via HTML disabled attribute. Button takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored.
     */
    @Prop({ reflect: true }) disabled = false

    /**
     * Sets the input as required
     */
    @Prop() required: boolean = false

    /**
     * Control the padding around the input field
     */
    @Prop() size: 'small' | 'medium' | 'large' = 'medium'

    /**
     * The input step attribute
     */
    @Prop() step?: string

    /**
     * The inputs readonly attribute
     */
    @Prop() readonly = false

    /**
     * Sets time or datetime types to 12hr/24hr
     */
    @Prop() timeformat: '12h' | '24h' = '12h'

    /**
     * Includes seconds as part of the time field
     */
    @Prop() includeSeconds: boolean = false

    /**
     * Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     */
    @Event({ eventName: 'ruxchange' }) ruxChange!: EventEmitter

    /**
     * Fired when an alteration to the input's value is committed by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     */
    @Event({ eventName: 'ruxinput' }) ruxInput!: EventEmitter

    /**
     * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
     */
    @Event({ eventName: 'ruxblur' }) ruxBlur!: EventEmitter

    /**
     * Fired when an element has gained focus - [HTMLElement/focus_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event)
     */
    @Event({ eventName: 'ruxfocus' }) ruxFocus!: EventEmitter

    /**
     * Sets element as focused
     */
    @Method()
    async setFocus(options?: FocusOptions) {
        this.inputEl.focus(options)
    }

    /**
     * Returns the native input element used in the shadow dom.
     */
    @Method()
    async getInput() {
        return this.inputEl
    }

    @Watch('label')
    handleLabelChange() {
        this._handleSlotChange()
    }

    @Watch('value')
    handleValueChange() {
        this._setMaskValue()
    }

    connectedCallback() {
        this._onInput = this._onInput.bind(this)
        this._checkValue = this._checkValue.bind(this)
        this._setMaskValue = this._setMaskValue.bind(this)
        this._handleSlotChange = this._handleSlotChange.bind(this)
        this._onAccept = this._onAccept.bind(this)
    }

    disconnectedCallback() {
        this.el!.shadowRoot!.removeEventListener(
            'slotchange',
            this._handleSlotChange
        )
        this.iMaskRef?.destroy()
    }

    componentWillLoad() {
        this._handleSlotChange()
    }

    private maskVals = {
        overwrite: true,
        eager: true,
        mask:
            this.timeformat === '24h'
                ? '`HH{:}`mm' + `${this.includeSeconds ? '{:}`ss' : ''}`
                : '`hh{:}`mm' + `${this.includeSeconds ? '{:}`ss' : ''} A`,
        lazy: false,
        autofix: true,
        blocks: {
            HH: {
                mask: MaskedRange,
                from: 0,
                to: 23,
                maxLength: 2,
                placeholderChar: 'H',
                autofix: 'pad',
            },
            hh: {
                mask: MaskedRange,
                from: 1,
                to: 12,
                maxLength: 2,
                placeholderChar: 'h',
                autofix: 'pad',
            },
            mm: {
                mask: MaskedRange,
                from: 0,
                to: 59,
                maxLength: 2,
                placeholderChar: 'm',
                autofix: 'pad',
            },
            ss: {
                mask: MaskedRange,
                from: 0,
                to: 59,
                maxLength: 2,
                placeholderChar: 's',
                autofix: 'pad',
            },
            A: {
                mask: MaskedEnum,
                placeholderChar: 'a',
                prepareChar: (char: string) => char.toUpperCase(),
                enum: ['AM', 'PM'],
            },
        },
    }

    componentDidLoad() {
        if (this.inputEl) {
            //@ts-ignore - it thinks autofix isnt assignable to masked Range and it is wrong.
            this.iMaskRef = IMask(this.inputEl, this.maskVals)
            this.iMaskRef.on('accept', this._onAccept)
            this._setMaskValue()
        }
    }

    get hasLabel() {
        return this.label ? true : this.hasLabelSlot
    }

    private _onInput() {
        this.ruxInput.emit()
    }

    private _onBlur = () => {
        this.ruxBlur.emit()
        this.hasFocus = false
    }

    private _onFocus = () => {
        this.ruxFocus.emit()
        this.hasFocus = true
    }

    private _handleSlotChange() {
        this.hasLabelSlot = hasSlot(this.el, 'label')
        this.hasErrorSlot = hasSlot(this.el, 'error-text')
        this.hasHelpSlot = hasSlot(this.el, 'help-text')
    }

    private _setMaskValue() {
        //Validate that the value is military time
        const isValid = this._validate(this.value)
        if (!isValid) return

        if (
            this.timeformat === '24h' &&
            !(this.iMaskRef.unmaskedValue === this.value)
        )
            this.iMaskRef.unmaskedValue = this.value
        else if (
            this.timeformat === '12h' &&
            !(
                this._convertToMilitary(this.iMaskRef.unmaskedValue) ===
                this.value
            )
        ) {
            this.iMaskRef.unmaskedValue = this._convertToAMPM(this.value)
        }
    }

    private _convertToAMPM(time: string) {
        let ampmString
        const hours = time.slice(0, 2)
        if (Number(hours) === 0) {
            ampmString = `12${time.slice(2)}` + 'AM'
        }
        if (Number(hours) < 12 && Number(hours) > 0) {
            ampmString = `${time}` + 'AM'
        }
        if (Number(hours) === 12) {
            ampmString = `${time}` + 'PM'
        }
        if (Number(hours) > 12) {
            const newHours = Number(hours) - 12
            ampmString = `${newHours}${time.slice(2)}` + 'PM'
        }
        return ampmString
    }

    private _convertToMilitary(time: string) {
        let convertedTime
        const hoursPlace = time.slice(0, 2)
        //this is for AM
        if (time.includes('A')) {
            const timeArray = time.split('A')
            convertedTime =
                hoursPlace === '12'
                    ? '00' + timeArray[0].slice(2)
                    : timeArray[0]
        }
        //this is for PM
        if (time.includes('P')) {
            const militaryHours =
                hoursPlace === '12' ? hoursPlace : Number(hoursPlace) + 12
            const timeArray = time.split('P')
            convertedTime = `${militaryHours}` + timeArray[0].slice(2)
        }
        return convertedTime
    }

    private _checkValue() {
        let time = this.iMaskRef.unmaskedValue

        //we need to check whether AM or PM have been selected and convert time to military for the value
        if (this.timeformat === '12h') {
            time = this._convertToMilitary(time)
        }
        this.value = this._validate(time) ? time : ''
    }

    private _validate(time: string) {
        //check time against a valid timestring and, if valid, assign it to rux-time-input value
        const timeRegex = /^([0-1][0-9]|2[0-3]):([0-5][0-9])(:[0-5][0-9])?$/
        return timeRegex.test(time)
    }

    //we have to run things through the mask now so a change is emitted on successful entry of a number
    private _onAccept() {
        this._checkValue()
        this.ruxChange.emit()
    }

    render() {
        const {
            disabled,
            el,
            errorText,
            helpText,
            hasHelpSlot,
            hasErrorSlot,
            inputId,
            invalid,
            label,
            name,
            _onInput,
            _onBlur,
            _onFocus,
            _handleSlotChange,
            placeholder,
            required,
            value,
            hasLabel,
            size,
            readonly,
        } = this

        renderHiddenInput(true, el, name, value, disabled)
        return (
            <Host>
                <div class="rux-form-field" part="form-field">
                    {hasLabel ? (
                        <label
                            class={{
                                'rux-input-label': true,
                            }}
                            part="label"
                            aria-hidden={hasLabel ? 'false' : 'true'}
                            htmlFor={inputId}
                        >
                            <span
                                class={{
                                    hidden: !hasLabel,
                                }}
                            >
                                <slot
                                    name="label"
                                    onSlotchange={_handleSlotChange}
                                >
                                    {label}
                                    {required && (
                                        <span
                                            part="required"
                                            class="rux-input-label__asterisk"
                                        >
                                            &#42;
                                        </span>
                                    )}
                                </slot>
                            </span>
                        </label>
                    ) : null}

                    <div
                        part="input-field"
                        class={{
                            'rux-input': true,
                            'rux-input--focused': this.hasFocus,
                            'rux-input--disabled': disabled,
                            'rux-input--invalid': invalid,
                            'rux-input--small': size === 'small',
                            'rux-input--medium': size === 'medium',
                            'rux-input--large': size === 'large',
                        }}
                    >
                        <span part="prefix" class="rux-input-prefix">
                            <slot name="prefix"></slot>
                        </span>

                        <input
                            name={name}
                            disabled={disabled}
                            ref={(el) => (this.inputEl = el!)}
                            type="text"
                            aria-invalid={invalid ? 'true' : 'false'}
                            placeholder={placeholder}
                            required={required}
                            class="native-input"
                            id={this.inputId}
                            onInput={_onInput}
                            readonly={readonly}
                            onBlur={_onBlur}
                            onFocus={_onFocus}
                            part="input"
                        ></input>
                        <span part="suffix" class="rux-input-suffix">
                            <slot name="suffix"></slot>
                        </span>
                    </div>
                </div>

                <div
                    class={{
                        'rux-error-text': !!errorText || hasErrorSlot,
                        hidden: !errorText && !hasErrorSlot,
                    }}
                    part="error-text"
                >
                    <svg
                        fill="none"
                        width="14"
                        height="14"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 14 14"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.393 12.25c.898 0 1.458-.974 1.009-1.75L8.009 2.91a1.166 1.166 0 0 0-2.018 0L1.598 10.5c-.449.776.111 1.75 1.01 1.75h8.784ZM7 8.167a.585.585 0 0 1-.583-.584V6.417c0-.321.262-.584.583-.584.32 0 .583.263.583.584v1.166c0 .321-.262.584-.583.584Zm-.583 1.166V10.5h1.166V9.333H6.417Z"
                            fill="currentColor"
                        />
                    </svg>
                    <slot name="error-text" onSlotchange={_handleSlotChange}>
                        {errorText}
                    </slot>
                </div>
                <div
                    class={{
                        'rux-help-text':
                            (!!helpText || hasHelpSlot) &&
                            (!errorText || !hasErrorSlot),
                        hidden:
                            (!helpText && !hasHelpSlot) ||
                            !!errorText ||
                            hasErrorSlot,
                    }}
                    part="help-text"
                >
                    <slot name="help-text" onSlotchange={_handleSlotChange}>
                        {helpText}
                    </slot>
                </div>
            </Host>
        )
    }
}
