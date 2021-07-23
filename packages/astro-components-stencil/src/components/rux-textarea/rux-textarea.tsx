import { Component, Host, h, Event, EventEmitter, Prop } from '@stencil/core'

let id = 0

@Component({
    tag: 'rux-textarea',
    styleUrl: 'rux-textarea.scss',
    shadow: true,
})
export class RuxTextarea {
    inputId = `input-${++id}`

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
    @Event({ eventName: 'rux-change' }) ruxChange!: EventEmitter

    /**
     * Fired when an alteration to the input's value is committed by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     */
    @Event({ eventName: 'rux-input' }) ruxInput!: EventEmitter

    connectedCallback() {
        this.onChange = this.onChange.bind(this)
        this.onInput = this.onInput.bind(this)
    }

    onChange(e: Event) {
        const target = e.target as HTMLInputElement
        this.value = target.value
        this.ruxChange.emit()
    }

    onInput(e: Event) {
        const target = e.target as HTMLInputElement
        this.value = target.value
        this.ruxInput.emit()
    }

    render() {
        return (
            <Host>
                <div
                    class={{
                        'rux-textarea-field': true,
                        'rux-textarea-field--small': this.small,
                    }}
                >
                    <label class="rux-textarea-label" htmlFor={this.inputId}>
                        {this.label}
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
                        onChange={this.onChange}
                        onInput={this.onInput}
                    ></textarea>
                </div>

                {this.helpText && (
                    <div class="rux-help-text">{this.helpText}</div>
                )}

                {this.errorText && (
                    <div class="rux-error-text">{this.errorText}</div>
                )}
            </Host>
        )
    }
}
