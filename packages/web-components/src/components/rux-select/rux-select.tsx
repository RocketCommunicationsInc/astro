import {
    Component,
    Element,
    Host,
    h,
    Prop,
    Event,
    EventEmitter,
    Watch,
} from '@stencil/core'

@Component({
    tag: 'rux-select',
    styleUrl: 'rux-select.scss',
    scoped: true,
})
export class RuxSelect {
    @Element() el!: HTMLRuxSelectElement
    /**
     * Disables the select menu via HTML disabled attribute. Select menu takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored.
     */
    @Prop({ reflect: true }) disabled: boolean = false

    /**
     * Sets the field as required
     */
    @Prop({ reflect: true }) required: boolean = false

    /**
     * Sets the Label for the Select
     */
    @Prop() label?: string

    /**
     * Id for the Select Input
     */
    @Prop({ attribute: 'input-id' }) inputId?: string

    /**
     * Id for the Label
     */
    @Prop({ attribute: 'label-id' }) labelId?: string

    /**
     * Sets the Select as Invalid for Custom Validation Usage
     */
    @Prop({ reflect: true }) invalid: boolean = false

    /**
     * Sets the Name of the Input Element
     */
    @Prop({ reflect: true }) name?: string

    /**
     * The value of the selected option
     */
    @Prop({ mutable: true, reflect: true }) value?: string

    /**
     * Event Emitted when the Value of the Select is Changed
     */
    @Event({ eventName: 'rux-change' })
    ruxSelectChanged!: EventEmitter<void>

    /**
     * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
     */
    @Event({ eventName: 'rux-blur' }) ruxBlur!: EventEmitter

    @Watch('value')
    onValueChange() {
        this._syncOptionsFromValue()
    }

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
    }
    componentWillLoad() {
        if (this.value) {
            this._handleSlotChange()
        }
    }

    private _onBlur = () => {
        this.ruxBlur.emit()
    }

    private _handleSlotChange() {
        this._syncOptionsFromValue()
    }

    private _syncOptionsFromValue() {
        const options = [...Array.from(this.el.querySelectorAll('option'))]
        options.map((option) => {
            option.selected = option.value === this.value
        })
    }

    private _onChange(e: Event) {
        const target = e.target as HTMLOptionElement
        this.value = target.value
        this.ruxSelectChanged.emit()
    }

    render() {
        const {
            disabled,
            required,
            label,
            inputId,
            labelId,
            invalid,
            name,
        } = this

        return (
            <Host>
                {label && (
                    <label id={labelId} htmlFor={inputId}>
                        {label}
                    </label>
                )}
                <select
                    class={
                        'rux-select ' + (invalid ? 'rux-select-invalid' : '')
                    }
                    id={inputId}
                    disabled={disabled}
                    required={required}
                    name={name}
                    onChange={(e) => this._onChange(e)}
                    onBlur={() => this._onBlur()}
                >
                    <slot onSlotchange={this._handleSlotChange}></slot>
                </select>
            </Host>
        )
    }
}
