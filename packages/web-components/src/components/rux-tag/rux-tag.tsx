import { Component, Host, h, Prop, Element, State } from '@stencil/core'
import { StatusTags } from '../../common/commonTypes.module'
import { hasSlot } from '../../utils/utils'

const statusMap = {
    unknown: 'UNK',
    pass: 'PASS',
    fail: 'FAIL',
}

/**
 * @slot (default) - The text for the rux-tag
 * @part container - The container of the rux-tag's text
 */

@Component({
    tag: 'rux-tag',
    styleUrl: 'rux-tag.scss',
    shadow: true,
})
export class RuxTag {
    /**
     *  Used to display a status of pass, fail, or unknown. If no status is provided or the provided status is not an accepted status type, the default is unknown.
     */
    @Prop({ reflect: true }) status?: StatusTags = 'unknown'

    @Element() el!: HTMLRuxTagElement

    @State() hasSlot: boolean = false

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
        this.hasSlot = hasSlot(this.el)
    }

    private _handleSlotChange() {
        this.hasSlot = hasSlot(this.el)
    }

    private _getValidStatus() {
        if (this.status) {
            //if it is a valid status, return it
            if (statusMap[this.status]) {
                return statusMap[this.status]
            }
            //if it's not, return the default status
            else {
                return statusMap['unknown']
            }
        }
    }

    render() {
        return (
            <Host
                class={{
                    'is-undefined': statusMap[this.status!] === undefined,
                }}
            >
                <div part="container">
                    <slot onSlotchange={this._handleSlotChange}></slot>
                    {!this.hasSlot ? this._getValidStatus() : null}
                </div>
            </Host>
        )
    }
}
