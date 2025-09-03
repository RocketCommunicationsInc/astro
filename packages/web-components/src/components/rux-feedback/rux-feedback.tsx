import { Component, Element, Host, State, h } from '@stencil/core'

import { hasSlot } from '../../utils/utils'
/**
 * @slot (default) - The feedback widget's content
 * @slot header - The feedback widget's header
 * @slot footer - The feedback widget's footer
 * @part container - The feedback widget's outtermost container
 * @part header - The feedback widget's outside header element
 * @part body - The feedback widget's outside body element
 * @part footer - The feedback widget's outside footer element
 *
 */

@Component({
    tag: 'rux-feedback',
    styleUrl: 'rux-feedback.scss',
    shadow: true,
})
export class RuxFeedback {
    @Element() el!: HTMLRuxFeedbackElement

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
                <div class="rux-feedback" part="container">
                    <div
                        class={{
                            'rux-feedback__header': true,
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

                    <div class="rux-feedback__body" part="body">
                        <slot></slot>
                    </div>
                    <div
                        class={{
                            'rux-feedback__footer': true,
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
