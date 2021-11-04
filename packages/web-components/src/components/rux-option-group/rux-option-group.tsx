import {
    Prop,
    Element,
    Event,
    EventEmitter,
    Component,
    Host,
    h,
} from '@stencil/core'

@Component({
    tag: 'rux-option-group',
    styleUrl: 'rux-option-group.css',
    shadow: true,
})
export class RuxOptionGroup {
    @Element() el!: HTMLRuxOptionGroupElement

    /**
     * The option group label
     */
    @Prop() label?: string

    /** @internal **/
    @Event({ eventName: 'rux-option-group-changed', composed: true })
    groupChanged!: EventEmitter<void>

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
    }

    private _handleSlotChange() {
        this.groupChanged.emit()
    }

    render() {
        return (
            <Host>
                <slot onSlotchange={this._handleSlotChange}></slot>
            </Host>
        )
    }
}
