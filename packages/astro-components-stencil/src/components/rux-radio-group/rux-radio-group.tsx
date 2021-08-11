import {
    Watch,
    Element,
    Prop,
    Event,
    EventEmitter,
    Component,
    Host,
    h,
} from '@stencil/core'
import { renderHiddenInput } from '../../utils/utils'

@Component({
    tag: 'rux-radio-group',
    styleUrl: 'rux-radio-group.scss',
    shadow: true,
})
export class RuxRadioGroup {
    @Element() el!: HTMLElement

    /**
     * The label of the radio group
     */
    @Prop() label?: string

    /**
     * Marks the radio group as invalid
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

    @Event({ eventName: 'rux-change' }) ruxChange!: EventEmitter<any>

    @Watch('value')
    emitChange() {
        this.ruxChange.emit(this.value)
    }

    connectedCallback() {
        this.handleClick = this.handleClick.bind(this)
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
                {this.label && <div class="rux-label">{this.label}</div>}
                <div
                    class={{
                        'rux-radio-group': true,
                        'rux-radio-group--invalid': this.invalid,
                    }}
                    role="radiogroup"
                >
                    <slot></slot>
                </div>
                {this.helpText && !this.errorText && (
                    <div class="rux-help-text">{this.helpText}</div>
                )}

                {this.errorText && (
                    <div class="rux-error-text">{this.errorText}</div>
                )}
            </Host>
        )
    }
}
