import {
    Watch,
    Element,
    Prop,
    Event,
    EventEmitter,
    Component,
    State,
    Host,
    h,
} from '@stencil/core'
import { FormFieldInterface } from '../../common/interfaces.module'
import { hasSlot, renderHiddenInput } from '../../utils/utils'

/**
 * @slot label - The radio group label
 * @part form-field - The form-field wrapper container
 * @part label - The input label when `label` prop is set
 * @part radiogroup - The container of radios
 */
@Component({
    tag: 'rux-radio-group',
    styleUrl: 'rux-radio-group.scss',
    shadow: true,
})
export class RuxRadioGroup implements FormFieldInterface {
    @Element() el!: HTMLRuxRadioGroupElement
    @State() hasLabelSlot = false

    /**
     * The label of the radio group. For HTML content, use the `label` slot instead.
     */
    @Prop() label?: string

    /**
     * Presentational only. Renders the Radio Group as invalid.
     */
    @Prop() invalid: boolean = false

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
     * Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     */
    @Event({ eventName: 'rux-change' }) ruxChange!: EventEmitter<any>

    @Watch('value')
    emitChange() {
        this.ruxChange.emit(this.value)
    }

    @Watch('label')
    handleLabelChange() {
        this._handleSlotChange()
    }

    connectedCallback() {
        this.handleClick = this.handleClick.bind(this)
        this._handleSlotChange = this._handleSlotChange.bind(this)
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

    handleClick(e: MouseEvent) {
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

    selectedRadioIsDisabled(): boolean {
        const radio = this.el.querySelector(
            `rux-radio[value="${this.value}"]`
        ) as HTMLRuxRadioElement
        return radio && radio.disabled
    }

    private _handleSlotChange() {
        this.hasLabelSlot = hasSlot(this.el, 'label')
    }

    render() {
        if (this.value) {
            renderHiddenInput(
                true,
                this.el,
                this.name,
                this.value,
                this.selectedRadioIsDisabled()
            )
        }
        return (
            <Host onClick={this.handleClick}>
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
                    {this.helpText && !this.errorText && (
                        <div class="rux-help-text">{this.helpText}</div>
                    )}

                    {this.errorText && (
                        <div class="rux-error-text">{this.errorText}</div>
                    )}
                </div>
            </Host>
        )
    }
}
