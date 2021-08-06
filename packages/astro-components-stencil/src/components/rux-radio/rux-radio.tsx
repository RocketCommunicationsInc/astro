import {
    Component,
    h,
    Prop,
    Event,
    EventEmitter,
    Element,
    Listen,
    Watch,
} from '@stencil/core'

let id = 0

@Component({
    tag: 'rux-radio',
    styleUrl: 'rux-radio.scss',
    shadow: true,
})
export class RuxRadio {
    radioId = `rux-radio-${++id}`
    @Element() el!: HTMLRuxRadioElement

    /**
     * The help or explanation text
     */
    @Prop({ attribute: 'help-text' }) helpText?: string

    /**
     * The validation error text
     */
    @Prop({ attribute: 'error-text' }) errorText?: string

    /**
     * The radio name
     */
    @Prop() name = ''
    /**
     * The radio value
     */
    @Prop({ reflect: true, mutable: true }) value: string = ''

    /**
     * Toggles checked state of a radio
     */
    @Prop({ reflect: true, mutable: true }) checked: boolean = false

    /**
     * Disables the radio via HTML disabled attribute. Radio takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored.
     */
    @Prop({ reflect: true }) disabled: boolean = false

    /**
     * Sets the radio as required
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

    @Listen('click')
    handleClick(ev: MouseEvent) {
        // element being clicked on
        const el: HTMLElement = ev.composedPath()[0] as HTMLElement
        if (el.tagName === 'INPUT') {
            const value = el.getAttribute('value')

            const radioSiblings = document.querySelectorAll(
                `rux-radio[name='${el.getAttribute('name')}']`
            )

            if (radioSiblings && radioSiblings.length) {
                radioSiblings.forEach((ele) => {
                    if (ele.getAttribute('value') !== value) {
                        ele.removeAttribute('checked')
                    }
                })
            }
        }
    }

    @Watch('checked')
    handleWatch() {
        this.checkMultipleChecks()
    }

    checkMultipleChecks() {
        const radioSiblings = document.querySelectorAll(
            `rux-radio[name='${this.el.getAttribute('name')}']`
        )
        if (this.checked) {
            radioSiblings.forEach((sib) => {
                if (sib.getAttribute('value') != this.value) {
                    sib.removeAttribute('checked')
                }
            })
        }
    }
    componentWillLoad() {
        this.onChange = this.onChange.bind(this)
        this.onInput = this.onInput.bind(this)
        this.checkMultipleChecks()
    }

    private onChange(e: Event): void {
        const target = e.target as HTMLInputElement
        this.checked = target.checked
        this.ruxChange.emit(target.value)
    }

    private onInput(e: Event) {
        const target = e.target as HTMLInputElement
        this.value = target.value
        this.ruxInput.emit(target.value)
    }

    render() {
        const {
            radioId,
            checked,
            disabled,
            errorText,
            helpText,
            name,
            required,
            value,
            onChange,
            onInput,
        } = this

        return (
            <div class="rux-form-field">
                <div
                    class={{
                        'rux-radio': true,
                        'rux-radio--has-error': required,
                        'rux-radio--has-text':
                            errorText !== undefined || helpText !== undefined,
                    }}
                >
                    <input
                        type="radio"
                        name={name}
                        id={radioId}
                        disabled={disabled}
                        required={required}
                        checked={checked}
                        value={value}
                        onChange={onChange}
                        onInput={onInput}
                    />
                    <label htmlFor={radioId}>
                        <slot></slot>
                    </label>
                </div>
                {helpText && !errorText && (
                    <div class="rux-help-text">{helpText}</div>
                )}

                {errorText && <div class="rux-error-text">{errorText}</div>}
            </div>
        )
    }
}
