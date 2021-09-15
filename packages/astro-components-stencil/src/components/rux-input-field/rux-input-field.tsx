import {
    Prop,
    Component,
    Event,
    EventEmitter,
    Host,
    h,
    Element,
} from '@stencil/core'
import { renderHiddenInput } from '../../utils/utils'

let id = 0

@Component({
    tag: 'rux-input-field',
    styleUrl: 'rux-input-field.scss',
    shadow: true,
})
export class RuxInputField {
    @Element() el!: HTMLRuxCheckboxElement
    inputId = `rux-input-${++id}`

    /**
     * The input label text
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
     * Marks the input as invalid
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

    connectedCallback() {
        this._onChange = this._onChange.bind(this)
        this._onInput = this._onInput.bind(this)
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
            placeholder,
            required,
            small,
            step,
            type,
            value,
        } = this

        renderHiddenInput(true, el, name, value, disabled)
        return (
            <Host>
                <div
                    class={{
                        'rux-form-field': true,
                        'rux-form-field--small': small,
                    }}
                >
                    {label && (
                        <label class="rux-input-label" htmlFor={inputId}>
                            {label}
                            {this.required && (
                                <span class="rux-input-label__asterisk">
                                    &#42;
                                </span>
                            )}
                        </label>
                    )}
                    <input
                        name={name}
                        disabled={disabled}
                        type={type}
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
                </div>

                {helpText && !errorText && (
                    <div class="rux-help-text">{helpText}</div>
                )}

                {errorText && <div class="rux-error-text">{errorText}</div>}
            </Host>
        )
    }
}
