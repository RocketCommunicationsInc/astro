import {
    Component,
    h,
    Prop,
    Event,
    EventEmitter,
    Element,
    Watch,
} from '@stencil/core'
import { renderHiddenInput } from '../../utils/utils'

let id = 0

/**
 * @slot (default) - the label of the checkbox.
 */
@Component({
    tag: 'rux-checkbox',
    styleUrl: 'rux-checkbox.scss',
    shadow: true,
})
export class RuxCheckbox {
    private checkboxId = `rux-checkbox-${++id}`
    private _inputEl?: HTMLInputElement

    @Element() el!: HTMLRuxCheckboxElement

    /**
     * The help or explanation text
     */
    @Prop({ attribute: 'help-text' }) helpText?: string

    /**
     * The validation error text
     */
    @Prop({ attribute: 'error-text' }) errorText?: string

    /**
     * The checkbox name
     */
    @Prop() name = ''
    /**
     * The checkbox value
     */
    @Prop({ reflect: true, mutable: true }) value: string = ''

    /**
     * Toggles checked state of a checkbox
     */
    @Prop({ reflect: true, mutable: true }) checked: boolean = false
    @Watch('checked')
    updateChecked() {
        if (this._inputEl) {
            this._inputEl.checked = this.checked
        }
    }

    /**
     * Toggles indeterminate state of a checkbox. The indeterminate property does not exist in HTML, but can be set in JS. [HTML Checkbox & Indeterminate State](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate)
     */
    @Prop({ reflect: true, mutable: true }) indeterminate: boolean = false
    @Watch('indeterminate')
    updateIndeterminate() {
        if (this._inputEl) {
            this._inputEl.indeterminate = this.indeterminate
        }
    }

    /**
     * Disables the checkbox via HTML disabled attribute. Checkbox takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored.
     */
    @Prop({ reflect: true }) disabled: boolean = false

    /**
     * Sets the input as required
     */
    @Prop() required: boolean = false

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

    constructor() {}

    connectedCallback() {
        this._onClick = this._onClick.bind(this)
        this._onInput = this._onInput.bind(this)
    }

    componentDidLoad() {
        if (this._inputEl && this.indeterminate) {
            // indeterminate property does not exist in HTML but is accessible via js
            this._inputEl.indeterminate = true
        }
    }

    private _onClick(e: Event): void {
        const target = e.target as HTMLInputElement
        if (this.indeterminate) {
            this.indeterminate = false
        }
        this.checked = target.checked
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
            checkboxId,
            checked,
            disabled,
            errorText,
            helpText,
            name,
            required,
            value,
            indeterminate,
        } = this

        if (!this.indeterminate) {
            renderHiddenInput(
                true,
                this.el,
                this.name,
                this.value ? this.value : 'on',
                this.disabled,
                this.checked
            )
        }

        return (
            <div class="rux-form-field">
                <div
                    class={{
                        'rux-checkbox': true,
                        'rux-checkbox--has-error': required,
                        'rux-checkbox--has-text':
                            errorText !== undefined || helpText !== undefined,
                    }}
                >
                    <input
                        type="checkbox"
                        name={name}
                        id={checkboxId}
                        disabled={disabled}
                        required={required}
                        checked={checked}
                        //Allows storybook's indetermiante control to take effect.
                        indeterminate={indeterminate}
                        value={value}
                        onChange={this._onClick}
                        onInput={this._onInput}
                        onBlur={() => this._onBlur()}
                        ref={(el) => (this._inputEl = el)}
                    />
                    <label htmlFor={checkboxId}>
                        <slot></slot>
                    </label>
                </div>
                {this.helpText && !this.errorText && (
                    <div class="rux-help-text">{helpText}</div>
                )}

                {this.errorText && (
                    <div class="rux-error-text">{errorText}</div>
                )}
            </div>
        )
    }
}
