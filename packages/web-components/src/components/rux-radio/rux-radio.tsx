import {
    Component,
    h,
    Method,
    Prop,
    Element,
    Event,
    EventEmitter,
    State,
    Watch,
} from '@stencil/core'
import { hasSlot } from '../../utils/utils'

let id = 0

/**
 * @slot (default) - The radio label
 * @part form-field - the form field of the radio
 * @part label - the label of the radio
 */

@Component({
    tag: 'rux-radio',
    styleUrl: 'rux-radio.scss',
    shadow: true,
})
export class RuxRadio {
    private radioId = `rux-radio-${++id}`
    private radioGroup: HTMLRuxRadioGroupElement | null = null
    private inputEl?: HTMLElement

    @Element() el!: HTMLRuxRadioElement

    @State() hasLabelSlot = false

    /**
     * The tabindex of the radio button.
     * @internal
     */
    @State() buttonTabindex = -1

    /**
     * The radio name
     */
    @Prop() name = ''
    /**
     * The radio value
     */
    @Prop() value: string = ''

    /**
     * Toggles checked state of a radio
     */
    @Prop({ reflect: true, mutable: true }) checked: boolean = false

    /**
     * Disables the radio via HTML disabled attribute. Radio takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored.
     */
    @Prop({ reflect: true }) disabled: boolean = false

    /**
     * The radio label text. For HTML content, use the default slot instead.
     */
    @Prop() label?: string
    @Watch('label')
    handleLabelChange() {
        this._handleSlotChange()
    }
    /**
     * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
     */
    @Event({ eventName: 'ruxblur' }) ruxBlur!: EventEmitter

    /** @internal */
    @Method()
    async setFocus(ev: any) {
        ev.stopPropagation()
        ev.preventDefault()

        this.inputEl?.focus()
    }

    /** @internal */
    @Method()
    async setButtonTabindex(value: number) {
        this.buttonTabindex = value
    }

    connectedCallback() {
        this._onChange = this._onChange.bind(this)
        this._handleSlotChange = this._handleSlotChange.bind(this)
        this.radioGroup = this.el.closest('rux-radio-group')
        this._syncFromGroup = this._syncFromGroup.bind(this)
        if (this.radioGroup) {
            this._syncFromGroup()
            this.radioGroup.addEventListener('ruxchange', this._syncFromGroup)
        }
    }

    componentWillLoad() {
        this._handleSlotChange()
    }

    disconnectedCallback() {
        if (this.radioGroup) {
            this.radioGroup.removeEventListener(
                'ruxchange',
                this._syncFromGroup
            )
        }
    }

    private _handleSlotChange() {
        this.hasLabelSlot = hasSlot(this.el)
    }

    /**
     * Sets checked property when the parent Radio Group value changes.
     */
    private _syncFromGroup() {
        if (this.radioGroup && this.radioGroup.value) {
            this.checked = this.radioGroup.value === this.value
        }
    }

    private _onChange(e: Event): void {
        const target = e.target as HTMLInputElement
        this.checked = target.checked
    }

    private _onBlur = () => {
        this.ruxBlur.emit()
    }

    get hasLabel() {
        return this.label ? true : this.hasLabelSlot
    }

    render() {
        const {
            label,
            radioId,
            checked,
            disabled,
            name,
            value,
            _onChange,
            _onBlur,
            hasLabel,
            buttonTabindex,
        } = this

        return (
            <div class="rux-form-field" part="form-field">
                <div class="rux-radio">
                    <input
                        type="radio"
                        name={name}
                        id={radioId}
                        disabled={disabled}
                        checked={checked}
                        value={value}
                        tabindex={buttonTabindex}
                        onChange={_onChange}
                        onBlur={_onBlur}
                        ref={(el) => (this.inputEl = el)}
                    />
                    <label
                        htmlFor={radioId}
                        part="label"
                        class={{
                            'rux-radio--no-label': !hasLabel,
                        }}
                    >
                        <slot>{label}</slot>
                    </label>
                </div>
            </div>
        )
    }
}
