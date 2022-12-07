import {
    Watch,
    Element,
    Prop,
    Event,
    EventEmitter,
    Component,
    Listen,
    State,
    Host,
    h,
} from '@stencil/core'
import { FormFieldInterface } from '../../common/interfaces.module'
import { hasSlot, renderHiddenInput } from '../../utils/utils'

/**
 * @slot label - The radio group label
 * @slot help-text -  the help text
 * @slot error-text -  the error text
 * @part error-text - The error text element
 * @part form-field - The form-field wrapper container
 * @part help-text - The help text element
 * @part label - The input label when `label` prop is set
 * @part radiogroup - The container of radios
 * @part required - The asterisk when required is true
 */
@Component({
    tag: 'rux-radio-group',
    styleUrl: 'rux-radio-group.scss',
    shadow: true,
})
export class RuxRadioGroup implements FormFieldInterface {
    @Element() el!: HTMLRuxRadioGroupElement
    @State() hasLabelSlot = false
    @State() hasHelpSlot = false
    @State() hasErrorSlot = false

    /**
     * The label of the radio group. For HTML content, use the `label` slot instead.
     */
    @Prop() label?: string

    /**
     * Presentational only. Renders the Radio Group as invalid.
     */
    @Prop() invalid: boolean = false

    /**
     * Marks that a selection from the radio-group is requried.
     */
    @Prop() required: boolean = false

    /**
     * The name of the radio group - submitted with form data. Must match the name of the radios in the group.
     */
    @Prop() name: string = ''

    /**
     * The value of the current selected radio in the group. Changing this will also mark that radio as checked in the UI.
     */
    @Prop({ mutable: true, reflect: true }) value?: any | null

    /**
     * The help or explanation text
     */
    @Prop({ attribute: 'help-text' }) helpText?: string

    /**
     * The validation error text
     */
    @Prop({ attribute: 'error-text' }) errorText?: string

    /**
     * Fired when the value of the input changes and emits that value on the event.detail. - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     */
    @Event({ eventName: 'ruxchange' }) ruxChange!: EventEmitter<any>

    @Watch('value')
    emitChange(value: any) {
        this.setRadioTabindex(value)
        this.ruxChange.emit(this.value)
    }

    @Watch('label')
    handleLabelChange() {
        this._handleSlotChange()
    }

    connectedCallback() {
        this._handleClick = this._handleClick.bind(this)
        this._handleSlotChange = this._handleSlotChange.bind(this)
    }

    componentDidLoad() {
        this.setRadioTabindex(this.value)
    }

    disconnectedCallback() {
        this.el!.shadowRoot!.removeEventListener(
            'slotchange',
            this._handleSlotChange
        )
    }

    componentWillLoad() {
        const radios = Array.from(
            this.el.querySelectorAll('rux-radio')
        ) as HTMLRuxRadioElement[]

        if (radios.length > 1 && !this.value) {
            this.value = radios[0].getAttribute('value')
        }

        this._handleSlotChange()
    }

    get hasLabel() {
        return this.label ? true : this.hasLabelSlot
    }

    private _handleClick(e: MouseEvent) {
        const selectedRadio =
            e.target && (e.target as HTMLElement).closest('rux-radio')
        if (selectedRadio && !selectedRadio.disabled) {
            const oldValue = this.value
            const newValue = selectedRadio.value
            if (newValue !== oldValue) {
                this.value = newValue
            }
        }
    }

    private _selectedRadioIsDisabled(): boolean {
        const radio = this.el.querySelector(
            `rux-radio[value="${this.value}"]`
        ) as HTMLRuxRadioElement
        return radio && radio.disabled
    }

    private _handleSlotChange() {
        this.hasLabelSlot = hasSlot(this.el, 'label')
        this.hasErrorSlot = hasSlot(this.el, 'error-text')
        this.hasHelpSlot = hasSlot(this.el, 'help-text')
    }

    private getRadios(): HTMLRuxRadioElement[] {
        return Array.from(this.el.querySelectorAll('rux-radio'))
    }

    private setRadioTabindex = (value: any | undefined) => {
        const radios = this.getRadios()

        // Get the first radio that is not disabled and the checked one
        const first = radios.find((radio) => !radio.disabled)
        const checked = radios.find(
            (radio) => radio.value === value && !radio.disabled
        )

        if (!first && !checked) {
            return
        }

        // If an enabled checked radio exists, set it to be the focusable radio
        // otherwise we default to focus the first radio
        const focusable = checked || first

        for (const radio of radios) {
            const tabindex = radio === focusable ? 0 : -1
            radio.setButtonTabindex(tabindex)
        }
    }

    @Listen('keydown', { target: 'document' })
    onKeydown(ev: any) {
        if (ev.target && !this.el.contains(ev.target)) {
            return
        }

        // Get all radios inside of the radio group and then
        // filter out disabled radios since we need to skip those
        const radios = this.getRadios().filter((radio) => !radio.disabled)

        // Only move the radio if the current focus is in the radio group
        if (ev.target && radios.includes(ev.target)) {
            const index = radios.findIndex((radio) => radio === ev.target)

            let next

            // If hitting arrow down or arrow right, move to the next radio
            // If we're on the last radio, move to the first radio
            if (['ArrowDown', 'ArrowRight'].includes(ev.code)) {
                next =
                    index === radios.length - 1 ? radios[0] : radios[index + 1]
            }

            // If hitting arrow up or arrow left, move to the previous radio
            // If we're on the first radio, move to the last radio
            if (['ArrowUp', 'ArrowLeft'].includes(ev.code)) {
                next =
                    index === 0 ? radios[radios.length - 1] : radios[index - 1]
            }

            if (next && radios.includes(next)) {
                next.setFocus(ev)
                this.value = next.value
            }
        }
    }

    render() {
        const {
            errorText,
            helpText,
            hasHelpSlot,
            hasErrorSlot,
            _handleSlotChange,
        } = this
        if (this.value) {
            renderHiddenInput(
                true,
                this.el,
                this.name,
                this.value,
                this._selectedRadioIsDisabled()
            )
        }
        return (
            <Host onClick={this._handleClick}>
                <div class="rux-form-field" part="form-field">
                    <div
                        class={{
                            'rux-label': true,
                            hidden: !this.hasLabel,
                        }}
                        part="label"
                    >
                        <slot
                            onSlotchange={this._handleSlotChange}
                            name="label"
                        >
                            {this.label}
                            {this.required && (
                                <span
                                    part="required"
                                    class="rux-label__asterisk"
                                >
                                    &#42;
                                </span>
                            )}
                        </slot>
                    </div>
                    <div
                        class={{
                            'rux-radio-group': true,
                            'rux-radio-group--invalid': this.invalid,
                        }}
                        role="radiogroup"
                        part="radiogroup"
                    >
                        <slot></slot>
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
