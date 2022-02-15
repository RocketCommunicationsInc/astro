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
} from '@stencil/core'
import FormFieldMessage from '../../common/functional-components/FormFieldMessage/FormFieldMessage'
import { FormFieldInterface } from '../../common/interfaces.module'
import { hasSlot, renderHiddenInput } from '../../utils/utils'

let id = 0

/**
 * @slot label - The textarea label
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
    @State() hasLabelSlot = false

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
     * Styles the input element and label smaller for space-limited situations.
     */
    @Prop() small: boolean = false

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
                    <textarea
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
                        }}
                        id={this.inputId}
                        rows={this.rows}
                        onChange={this._onChange}
                        onInput={this._onInput}
                        onBlur={this._onBlur}
                        part="textarea"
                    ></textarea>
                </div>
                <FormFieldMessage
                    helpText={this.helpText}
                    errorText={this.errorText}
                ></FormFieldMessage>
            </Host>
        )
    }
}
