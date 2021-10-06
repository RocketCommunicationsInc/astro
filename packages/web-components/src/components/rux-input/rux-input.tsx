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
} from '@stencil/core'
import FormFieldMessage from '../../common/functional-components/FormFieldMessage/FormFieldMessage'
import { FormFieldInterface } from '../../common/interfaces.module'
import { hasSlot, renderHiddenInput } from '../../utils/utils'

let id = 0

/**
 * @slot label - The input label
 * @part form-field - The form-field wrapper container
 * @part label - The input label when `label` prop is set
 * @part icon - The icon displayed when toggle-password prop is set
 */
@Component({
    tag: 'rux-input',
    styleUrl: 'rux-input.scss',
    shadow: true,
})
export class RuxInput implements FormFieldInterface {
    @Element() el!: HTMLRuxInputElement
    inputId = `rux-input-${++id}`

    @State() hasLabelSlot = false

    @State() togglePassword = false

    @State() isPasswordVisible = false

    @State() iconName = 'visibility'

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
     * Sets the input as disabled
     */
    @Prop() required: boolean = false

    /**
     * Styles the input element and label smaller for space-limited situations.
     */
    @Prop() small: boolean = false

    /**
     * The input step attribute
     */
    @Prop() step?: string

    /**
     * Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     */
    @Event({ eventName: 'rux-change' }) ruxChange!: EventEmitter

    /**
     * Fired when an alteration to the input's value is committed by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     */
    @Event({ eventName: 'rux-input' }) ruxInput!: EventEmitter

    /**
     * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
     */
    @Event({ eventName: 'rux-blur' }) ruxBlur!: EventEmitter

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
        this._handleSlotChange = this._handleSlotChange.bind(this)
        this._handleType = this._handleType.bind(this)
        this._handleTogglePassword = this._handleTogglePassword.bind(this)
    }

    disconnectedCallback() {
        this.el!.shadowRoot!.removeEventListener(
            'slotchange',
            this._handleSlotChange
        )
        //If being used as a pw field, don't want to submit as text field
        if (this.togglePassword) {
            this.isPasswordVisible = false
        }
    }

    componentWillLoad() {
        this._handleSlotChange()
        this._setTogglePassword()
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
    }

    private _handleSlotChange() {
        this.hasLabelSlot = hasSlot(this.el, 'label')
    }

    private _setTogglePassword() {
        if (this.type === 'password') {
            this.togglePassword = true
        }
    }

    private _handleTogglePassword() {
        this.isPasswordVisible = !this.isPasswordVisible
        if (this.isPasswordVisible) {
            this.iconName = 'visibility-off'
        } else {
            this.iconName = 'visibility'
        }
    }

    private _handleType() {
        let realType = ''
        !this.togglePassword
            ? (realType = this.type)
            : this.togglePassword && this.isPasswordVisible
            ? (realType = 'text')
            : (realType = this.type)

        return realType
    }

    render() {
        const {
            disabled,
            el,
            errorText,
            helpText,
            inputId,
            invalid,
            label,
            max,
            min,
            name,
            _onChange,
            _onInput,
            _onBlur,
            _handleType,
            _handleSlotChange,
            _handleTogglePassword,
            placeholder,
            required,
            small,
            step,
            type,
            value,
            hasLabel,
            iconName,
        } = this

        renderHiddenInput(true, el, name, value, disabled)
        return (
            <Host>
                <div
                    class={{
                        'rux-form-field': true,
                        'rux-form-field--small': small,
                    }}
                    part="form-field"
                >
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
                            <slot name="label" onSlotchange={_handleSlotChange}>
                                {label}
                                {required && (
                                    <span class="rux-input-label__asterisk">
                                        &#42;
                                    </span>
                                )}
                            </slot>
                        </span>
                    </label>
                    <input
                        name={name}
                        disabled={disabled}
                        type={_handleType()}
                        aria-invalid={invalid ? 'true' : 'false'}
                        placeholder={placeholder}
                        required={required}
                        step={step}
                        min={min}
                        max={max}
                        value={value}
                        class={{
                            'rux-input': true,
                            'rux-input--disabled': disabled,
                            'rux-input--invalid': invalid,
                            'rux-input--search': type === 'search',
                        }}
                        id={this.inputId}
                        onChange={_onChange}
                        onInput={_onInput}
                        onBlur={() => _onBlur()}
                    ></input>
                    {this.togglePassword && (
                        <div
                            class={{
                                'icon-container': true,
                                'show-password': true,
                                'with-label': hasLabel,
                            }}
                        >
                            <rux-icon
                                part="icon"
                                onClick={() => _handleTogglePassword()}
                                icon={iconName}
                            />
                        </div>
                    )}
                </div>
                <FormFieldMessage
                    errorText={errorText}
                    helpText={helpText}
                ></FormFieldMessage>
            </Host>
        )
    }
}
