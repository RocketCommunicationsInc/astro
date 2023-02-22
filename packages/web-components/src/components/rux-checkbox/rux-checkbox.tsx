import {
    Component,
    h,
    Prop,
    Event,
    EventEmitter,
    Element,
    Watch,
    Host,
    State,
} from '@stencil/core'

import { FormFieldInterface } from '../../common/interfaces.module'
import { renderHiddenInput, hasSlot } from '../../utils/utils'

let id = 0

/**
 * @slot (default) - the label of the checkbox.
 * @slot help-text -  the help text
 * @part form-field - the form field wrapper container
 * @part help-text - the help text element
 * @part label - the label of rux-checkbox
 */
@Component({
    tag: 'rux-checkbox',
    styleUrl: 'rux-checkbox.scss',
    shadow: true,
})
export class RuxCheckbox implements FormFieldInterface {
    private checkboxId = `rux-checkbox-${++id}`
    private _inputEl?: HTMLInputElement

    @Element() el!: HTMLRuxCheckboxElement

    @State() hasLabelSlot = false
    @State() hasHelpSlot = false
    @State() isFocused = false

    /**
     * The help or explanation text
     */
    @Prop({ attribute: 'help-text' }) helpText?: string

    /**
     * The checkbox name
     */
    @Prop() name = ''
    /**
     * The checkbox value
     */
    @Prop({ reflect: true, mutable: true }) value: string = ''

    /**
     * The checkbox label text. For HTML content, use the default slot instead.
     */
    @Prop() label?: string

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
     * Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     */
    @Event({ eventName: 'ruxchange' }) ruxChange!: EventEmitter

    /**
     * Fired when an alteration to the input's value is committed by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     */
    @Event({ eventName: 'ruxinput' }) ruxInput!: EventEmitter

    /**
     * Fired when an element has gained focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event)
     */
    @Event({ eventName: 'ruxfocus' }) ruxFocus!: EventEmitter

    /**
     * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
     */
    @Event({ eventName: 'ruxblur' }) ruxBlur!: EventEmitter

    connectedCallback() {
        this._onClick = this._onClick.bind(this)
        this._onInput = this._onInput.bind(this)
        this._handleSlotChange = this._handleSlotChange.bind(this)
    }

    componentWillLoad() {
        this._handleSlotChange()
    }

    componentDidLoad() {
        if (this._inputEl && this.indeterminate) {
            // indeterminate property does not exist in HTML but is accessible via js
            this._inputEl.indeterminate = true
        }
    }

    get hasLabel() {
        return this.label ? true : this.hasLabelSlot
    }

    private _handleSlotChange() {
        this.hasLabelSlot = hasSlot(this.el)
        this.hasHelpSlot = hasSlot(this.el, 'help-text')
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
        this.isFocused = false
        this.ruxBlur.emit()
    }

    private _onFocus = () => {
        this.isFocused = this._inputEl?.matches(':focus-visible') ? true : false
        this.ruxFocus.emit()
    }

    render() {
        const {
            _handleSlotChange,
            _onBlur,
            _onFocus,
            _onClick,
            _onInput,
            checkboxId,
            checked,
            disabled,
            el,
            helpText,
            hasHelpSlot,
            name,
            value,
            indeterminate,
            label,
            isFocused,
            hasLabel,
            hasLabelSlot,
        } = this

        if (!indeterminate) {
            renderHiddenInput(true, el, name, value || 'on', disabled, checked)
        }

        return (
            <Host>
                <div class="rux-form-field" part="form-field">
                    <label
                        class={{
                            'rux-checkbox': true,
                            'rux-checkbox--disabled': disabled,
                            'rux-checkbox--focused': isFocused,
                        }}
                        htmlFor={checkboxId}
                    >
                        <input
                            type="checkbox"
                            class={{
                                'rux-checkbox__input': true,
                                'rux-checkbox__input--no-label': !hasLabel,
                            }}
                            name={name}
                            id={checkboxId}
                            disabled={disabled}
                            checked={checked}
                            //Allows storybook's indetermiante control to take effect.
                            indeterminate={indeterminate}
                            value={value}
                            onChange={_onClick}
                            onInput={_onInput}
                            onBlur={_onBlur}
                            onFocus={_onFocus}
                            ref={(el) => (this._inputEl = el)}
                        />
                        <div class="rux-checkbox__control">
                            {indeterminate ? (
                                <svg
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 18 18"
                                >
                                    <rect
                                        x=".5"
                                        y=".5"
                                        width="17"
                                        height="17"
                                        rx="1.5"
                                        fill="var(--_checkbox-color-background)"
                                    />
                                    <path
                                        fill="var(--_checkbox-checkmark-color-fill)"
                                        d="M4 8h10v2H4z"
                                    />
                                    <rect
                                        x=".5"
                                        y=".5"
                                        width="17"
                                        height="17"
                                        rx="1.5"
                                        stroke="var(--_checkbox-color-border)"
                                    />
                                </svg>
                            ) : checked ? (
                                <svg
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 18 18"
                                >
                                    <rect
                                        x=".5"
                                        y=".5"
                                        width="17"
                                        height="17"
                                        rx="1.5"
                                        fill="var(--_checkbox-color-background)"
                                    />
                                    <path
                                        fill="var(--_checkbox-checkmark-color-fill)"
                                        d="m14.899 4.806-6.883 9.83-1.639-1.147 6.883-9.83z"
                                    />
                                    <path
                                        fill="var(--_checkbox-checkmark-color-fill)"
                                        d="m9.163 12.997-1.147 1.638L3.1 11.194l1.147-1.638z"
                                    />
                                    <rect
                                        x=".5"
                                        y=".5"
                                        width="17"
                                        height="17"
                                        rx="1.5"
                                        stroke="var(--_checkbox-color-border)"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 18 18"
                                >
                                    <rect
                                        x=".5"
                                        y=".5"
                                        width="17"
                                        height="17"
                                        rx="1.5"
                                        fill="var(--_checkbox-color-background)"
                                    />
                                    <rect
                                        x=".5"
                                        y=".5"
                                        width="17"
                                        height="17"
                                        rx="1.5"
                                        stroke="var(--_checkbox-color-border)"
                                    />
                                </svg>
                            )}
                        </div>
                        <div
                            part="label"
                            class={{
                                'rux-checkbox__label': true,
                                hidden: !hasLabel,
                            }}
                        >
                            {hasLabelSlot ? null : label}
                            <slot onSlotchange={_handleSlotChange} />
                        </div>
                    </label>
                </div>
                <div
                    class={{
                        'rux-help-text': !!helpText || hasHelpSlot,
                        hidden: !helpText && !hasHelpSlot,
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
