import { Component, Element, Host, State, h } from '@stencil/core'

import { hasSlot } from '../../utils/utils'
/**
 * @slot (default) - The card's content
 * @slot header - The card's header
 * @slot footer - The cards footer
 * @part container - The card's outtermost container
 * @part header - The card's outside header element
 * @part body - The card's outside body element
 * @part footer - The card's outside footer element
 *
 */

@Component({
    tag: 'rux-card',
    styleUrl: 'rux-card.scss',
    shadow: true,
})
export class RuxCard {
    @Element() el!: HTMLRuxCardElement

    @State() activeSlots = {
        header: false,
        footer: false,
    }

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
    }

    private _handleSlotChange(slotName: 'header' | 'footer') {
        const show = hasSlot(this.el, slotName)
        this.activeSlots = { ...this.activeSlots, [slotName]: show }
    }

    render() {
        return (
            <Host>
                <div class="rux-card" part="container">
                    <div
                        class={{
                            'rux-card__header': true,
                            hidden: !this.activeSlots.header,
                        }}
                        part="header"
                    >
                        <slot
                            name="header"
                            onSlotchange={() =>
                                this._handleSlotChange('header')
                            }
                        ></slot>
                    </div>

                    <div class="rux-card__body" part="body">
                        <slot></slot>
                    </div>
                    <div
                        class={{
                            'rux-card__footer': true,
                            hidden: !this.activeSlots.footer,
                        }}
                        part="footer"
                    >
                        <slot
                            name="footer"
                            onSlotchange={() =>
                                this._handleSlotChange('footer')
                            }
                        ></slot>
                    </div>
                </div>
            </Host>
        )
    }
}
