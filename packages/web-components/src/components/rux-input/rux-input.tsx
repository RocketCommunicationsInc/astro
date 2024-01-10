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
import { Maskito } from '@maskito/core'
import { maskitoTimeOptionsGenerator } from '@maskito/kit'

let id = 0
//this is so we can destroy the maskito masking when the element is removed from dom.
let maskedElement: any = null

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
    tag: 'rux-input',
    styleUrl: 'rux-input.scss',
    shadow: true,
})
export class RuxInput implements FormFieldInterface {
    private inputId = `rux-input-${++id}`
    private inputEl!: HTMLInputElement
    private inputEl2?: HTMLInputElement

    @Element() el!: HTMLRuxInputElement

    @State() hasLabelSlot = false
    @State() hasHelpSlot = false
    @State() hasErrorSlot = false

    @State() togglePassword = false

    @State() isPasswordVisible = false

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
     * The input type
     */
    @Prop() type:
        | 'text'
        | 'number'
        | 'email'
        | 'url'
        | 'search'
        | 'password'
        | 'date'
        | 'datetime-local'
        | 'time'
        | 'tel' = 'text'

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
     * The input's spellcheck attribute
     */
    @Prop() spellcheck = false

    /**
     * The inputs readonly attribute
     */
    @Prop() readonly = false

    /**
     * Sets time or datetime types to 12hr/24hr
     */
    @Prop() timeformat: '12h' | '24h' = '12h'

    /**
     * The inputs autocomplete attribute. In password inputs, this attribute gets set to 'off'.
     */
    @Prop() autocomplete = 'off'

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

    @Watch('type')
    handleTypeChange() {
        this._setTogglePassword()
    }

    connectedCallback() {
        this._onChange = this._onChange.bind(this)
        this._onInput = this._onInput.bind(this)
        this._onMod = this._onMod.bind(this)
        this._handleSlotChange = this._handleSlotChange.bind(this)
        this._handleTogglePassword = this._handleTogglePassword.bind(this)
    }

    disconnectedCallback() {
        this.el!.shadowRoot!.removeEventListener(
            'slotchange',
            this._handleSlotChange
        )
        //remove Maskito when the element is removed from dom
        if (maskedElement) {
            maskedElement.destroy
        }
    }

    componentWillLoad() {
        this._handleSlotChange()
        this._setTogglePassword()
    }

    componentDidLoad() {
        //add maskito once the input for it is loaded into the dom
        if (
            this.timeformat === '24h' &&
            (this.type === 'time' || this.type === 'datetime-local') &&
            this.inputEl
        ) {
            //masking options
            const inputMaskOptions = maskitoTimeOptionsGenerator({
                mode: 'HH:MM:SS',
            })
            //assign it to a variable so we can remove the mask on disconnected callback
            maskedElement = new Maskito(this.inputEl, inputMaskOptions)
        }
    }

    get hasLabel() {
        return this.label ? true : this.hasLabelSlot
    }

    private _onChange(e: Event) {
        const target = e.target as HTMLInputElement
        this.value = target.value
        this.ruxChange.emit()
    }

    private _onInput(e: Event) {
        const target = e.target as HTMLInputElement
        this.value = target.value
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

    private _setTogglePassword() {
        this.type === 'password'
            ? (this.togglePassword = true)
            : (this.togglePassword = false)
        if (this.type === 'password') this.autocomplete = 'off'
    }

    private _handleTogglePassword() {
        this.isPasswordVisible = !this.isPasswordVisible
    }

    private _onMod(e: Event) {
        console.log('hello?', this.inputEl, this.inputEl2, e)
        if (this.type === 'datetime-local') {
            console.log('yo?')
            //we only set the rux-input value if this is actually a date
            if (Date.parse(this.inputEl2!.value + 'T' + this.inputEl.value))
                this.value = this.inputEl2!.value + 'T' + this.inputEl.value
        } else {
            this.value = this.inputEl.value
        }
        //emit the right kind of change
        e.type === 'input' ? this.ruxInput.emit() : this.ruxChange.emit
    }

    private _getProperHTML() {
        const timeInput = (
            <input
                name={this.name}
                disabled={this.disabled}
                ref={(el) => (this.inputEl = el!)}
                type="text"
                aria-invalid={this.invalid ? 'true' : 'false'}
                placeholder={this.placeholder || '--:--'}
                required={this.required}
                step={this.step}
                min={this.min}
                max={this.max}
                class="native-input"
                id={this.inputId}
                onChange={this._onMod}
                onInput={this._onMod}
                spellcheck={this.spellcheck}
                readonly={this.readonly}
                onBlur={this._onBlur}
                onFocus={this._onFocus}
                part="input"
                autocomplete={this.autocomplete}
            ></input>
        )

        if (this.type === 'datetime-local') {
            return [
                <input
                    name={this.name}
                    disabled={this.disabled}
                    ref={(el) => (this.inputEl2 = el!)}
                    type="date"
                    aria-invalid={this.invalid ? 'true' : 'false'}
                    required={this.required}
                    step={this.step}
                    min={this.min}
                    max={this.max}
                    class="native-input"
                    id={this.inputId}
                    spellcheck={this.spellcheck}
                    readonly={this.readonly}
                    onChange={this._onMod}
                    onInput={this._onMod}
                    onBlur={this._onBlur}
                    onFocus={this._onFocus}
                    part="input"
                    autocomplete={this.autocomplete}
                ></input>,
                timeInput,
            ]
        }
        return timeInput
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
            max,
            min,
            name,
            _onChange,
            _onInput,
            _onBlur,
            _onFocus,
            _handleSlotChange,
            _handleTogglePassword,
            placeholder,
            required,
            step,
            type,
            value,
            hasLabel,
            size,
            spellcheck,
            readonly,
            togglePassword,
            isPasswordVisible,
            autocomplete,
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
                            'rux-input--search': type === 'search',
                            'rux-input--small': size === 'small',
                            'rux-input--medium': size === 'medium',
                            'rux-input--large': size === 'large',
                        }}
                    >
                        <span part="prefix" class="rux-input-prefix">
                            <slot name="prefix"></slot>
                        </span>
                        {this.timeformat === '24h' &&
                        (this.type === 'time' ||
                            this.type === 'datetime-local') ? (
                            this._getProperHTML()
                        ) : (
                            <input
                                name={name}
                                disabled={disabled}
                                ref={(el) => (this.inputEl = el!)}
                                type={
                                    type === 'password' &&
                                    this.isPasswordVisible
                                        ? 'text'
                                        : this.timeformat === '24h'
                                        ? 'text'
                                        : type
                                }
                                aria-invalid={invalid ? 'true' : 'false'}
                                placeholder={placeholder}
                                required={required}
                                step={step}
                                min={min}
                                max={max}
                                value={value}
                                class="native-input"
                                id={inputId}
                                spellcheck={spellcheck}
                                readonly={readonly}
                                onChange={_onChange}
                                onInput={_onInput}
                                onBlur={_onBlur}
                                onFocus={_onFocus}
                                part="input"
                                autocomplete={autocomplete}
                            ></input>
                        )}
                        {togglePassword ? (
                            <button
                                onClick={_handleTogglePassword}
                                class="pw-button"
                            >
                                <rux-icon
                                    exportparts="icon"
                                    icon={
                                        isPasswordVisible
                                            ? 'visibility-off'
                                            : 'visibility'
                                    }
                                    size="22px"
                                />
                            </button>
                        ) : null}
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
