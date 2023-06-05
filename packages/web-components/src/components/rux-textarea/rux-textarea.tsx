import {
    Component,
    h,
    Event,
    EventEmitter,
    Host,
    Prop,
    Element,
    Watch,
    State,
    Method,
} from '@stencil/core'
import { FormFieldInterface } from '../../common/interfaces.module'
import { hasSlot, renderHiddenInput } from '../../utils/utils'

let id = 0

/**
 * @slot label - The textarea label
 * @slot help-text -  the help text
 * @slot error-text -  the error text
 * @part error-text - The error text element
 * @part form-field - The form-field wrapper container
 * @part help-text - The help text element
 * @part label - The input label when `label` prop is set
 * @part textarea - The textarea element
 * @part required - The asterisk when required is true
 */
@Component({
    tag: 'rux-textarea',
    styleUrl: 'rux-textarea.scss',
    shadow: true,
})
export class RuxTextarea implements FormFieldInterface {
    private inputId = `rux-textarea-${++id}`
    private textareaEl!: HTMLTextAreaElement
    @State() hasLabelSlot = false
    @State() hasHelpSlot = false
    @State() hasErrorSlot = false

    /**
     * The textarea label text. For HTML content, use the `label` slot instead.
     */
    @Prop() label?: string
    /**
     * The textarea placeholder text
     */
    @Prop() placeholder?: string

    /**
     * The  or explanation text
     */
    @Prop({ attribute: 'help-text' }) helpText?: string

    /**
     * The validation error text
     */
    @Prop({ attribute: 'error-text' }) errorText?: string

    /**
     * Presentational only. Renders the Textarea as invalid.
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
     * The input minLength attribute
     */
    @Prop({ attribute: 'min-length' }) minLength?: string

    /**
     * The input maxLength attribute
     */
    @Prop({ attribute: 'max-length' }) maxLength?: string

    /**
     * The input rows attribute
     */
    @Prop() rows?: number

    /**
     * Disables the button via HTML disabled attribute. Button takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored.
     */
    @Prop({ reflect: true }) disabled = false

    /**
     * Sets the input as disabled
     */
    @Prop() required: boolean = false

    /**
     * Styles the input element size between small, medium and large. The default styling is medium.
     */
    @Prop({ reflect: true }) size?: 'small' | 'medium' | 'large'

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

    @Element() el!: HTMLRuxTextareaElement

    /**
     * Sets element as focused
     */
    @Method()
    async setFocus(options?: FocusOptions) {
        this.textareaEl.focus(options)
    }

    @Watch('label')
    handleLabelChange() {
        this._handleSlotChange()
    }

    connectedCallback() {
        this._onChange = this._onChange.bind(this)
        this._onInput = this._onInput.bind(this)
        this._handleSlotChange = this._handleSlotChange.bind(this)
    }

    disconnectedCallback() {
        this.el!.shadowRoot!.removeEventListener(
            'slotchange',
            this._handleSlotChange
        )
    }

    componentWillLoad() {
        this._handleSlotChange()
    }

    get hasLabel() {
        return this.label ? true : this.hasLabelSlot
    }

    private _handleSlotChange() {
        this.hasLabelSlot = hasSlot(this.el, 'label')
        this.hasErrorSlot = hasSlot(this.el, 'error-text')
        this.hasHelpSlot = hasSlot(this.el, 'help-text')
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
        renderHiddenInput(true, this.el, this.name, this.value, this.disabled)
        return (
            <Host>
                <div class="rux-textarea-field" part="form-field">
                    {this.hasLabel ? (
                        <label
                            class={{
                                'rux-textarea-label': true,
                            }}
                            aria-hidden={this.hasLabel ? 'false' : 'true'}
                            htmlFor={this.inputId}
                            part="label"
                        >
                            <span class={{ hidden: !this.hasLabel }}>
                                <slot
                                    onSlotchange={this._handleSlotChange}
                                    name="label"
                                >
                                    {this.label}
                                    {this.required && (
                                        <span
                                            part="required"
                                            class="rux-textarea-label__asterisk"
                                        >
                                            &#42;
                                        </span>
                                    )}
                                </slot>
                            </span>
                        </label>
                    ) : null}
                    <textarea
                        ref={(el) => (this.textareaEl = el!)}
                        name={this.name}
                        disabled={this.disabled}
                        aria-invalid={this.invalid ? 'true' : 'false'}
                        placeholder={this.placeholder}
                        required={this.required}
                        minlength={this.minLength}
                        maxlength={this.maxLength}
                        value={this.value}
                        class={{
                            'rux-textarea': true,
                            'rux-textarea--disabled': this.disabled,
                            'rux-textarea--invalid': this.invalid,
                            'rux-textarea--small': this.size === 'small',
                            'rux-textarea--large': this.size === 'large',
                        }}
                        id={this.inputId}
                        rows={this.rows}
                        onChange={this._onChange}
                        onInput={this._onInput}
                        onBlur={this._onBlur}
                        part="textarea"
                    ></textarea>
                </div>
                <div
                    class={{
                        'rux-error-text': !!this.errorText || this.hasErrorSlot,
                        hidden: !this.errorText && !this.hasErrorSlot,
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
                    <slot
                        name="error-text"
                        onSlotchange={this._handleSlotChange}
                    >
                        {this.errorText}
                    </slot>
                </div>
                <div
                    class={{
                        'rux-help-text':
                            (!!this.helpText || this.hasHelpSlot) &&
                            (!this.errorText || !this.hasErrorSlot),
                        hidden:
                            (!this.helpText && !this.hasHelpSlot) ||
                            !!this.errorText ||
                            this.hasErrorSlot,
                    }}
                    part="help-text"
                >
                    <slot
                        name="help-text"
                        onSlotchange={this._handleSlotChange}
                    >
                        {this.helpText}
                    </slot>
                </div>
            </Host>
        )
    }
}
