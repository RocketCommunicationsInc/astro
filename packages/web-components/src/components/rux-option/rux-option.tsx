import {
    Prop,
    Element,
    Event,
    EventEmitter,
    Component,
    Host,
    h,
    Watch,
} from '@stencil/core'

/**
 * This component should be used exclusively with RuxSelect.
 * It's main function is to broadcast to RuxSelect when the value property changes.
 * RuxSelect can only listen for slot change, which won't fire in the scenario where there
 * might be 2 options and only their values change. Because the nodes themselves aren't added or removed,
 * onSlotchange doesn't fire.
 */
@Component({
    tag: 'rux-option',
    styleUrl: 'rux-option.css',
    shadow: true,
})
export class RuxOption {
    @Element() el!: HTMLRuxOptionElement

    /**
     * The option value
     */
    @Prop({ reflect: true }) value!: string

    /** The option label */
    @Prop({ reflect: true }) label!: string

    /** Sets the option as disabled */
    @Prop() disabled: boolean = false

    /** @internal **/
    @Event({ eventName: 'rux-option-changed', composed: true })
    optionChanged!: EventEmitter<void>

    @Watch('value')
    @Watch('label')
    @Watch('disabled')
    handleValueChange() {
        this.optionChanged.emit()
    }

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
    }

    private _handleSlotChange() {
        this.optionChanged.emit()
    }

    render() {
        return (
            <Host class="rux-option" disabled={this.disabled}>
                {this.label ? this.label : ''}
            </Host>
        )
    }
}
