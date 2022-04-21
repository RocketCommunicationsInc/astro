import { State, Component, Host, h, Element } from '@stencil/core'
import { hasSlot } from '../../utils/utils'

/**
 * @slot (default) - The container's content
 * @slot header - The container's header
 * @slot tab-bar - The container's tab bar
 * @slot toolbar - The container's toolbar
 * @slot footer - The container's footer
 * @part header - The container's outside header element
 * @part tab-bar - The container's outside tab bar element
 * @part toolbar - The container's outside toolbar element
 * @part body - The container's outside body element
 * @part footer - The container's outside footer element
 *
 */
@Component({
    tag: 'rux-container',
    styleUrl: 'rux-container.scss',
    shadow: true,
})
export class RuxContainer {
    @Element() el!: HTMLRuxContainerElement

    @State() activeSlots = {
        header: false,
        'tab-bar': false,
        toolbar: false,
        footer: false,
    }

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
    }

    private _handleSlotChange(
        slotName: 'header' | 'tab-bar' | 'toolbar' | 'footer'
    ) {
        const show = hasSlot(this.el, slotName)
        this.activeSlots = { ...this.activeSlots, [slotName]: show }
    }
    render() {
        return (
            <Host>
                <div class="rux-container">
                    <div
                        class={{
                            'rux-container__header': true,
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
                    <div
                        class={{
                            'rux-container__tab-bar': true,
                            hidden: !this.activeSlots['tab-bar'],
                        }}
                        part="tab-bar"
                    >
                        <slot
                            name="tab-bar"
                            onSlotchange={() =>
                                this._handleSlotChange('tab-bar')
                            }
                        ></slot>
                    </div>
                    <div
                        class={{
                            'rux-container__toolbar': true,
                            hidden: !this.activeSlots.toolbar,
                        }}
                        part="toolbar"
                    >
                        <slot
                            name="toolbar"
                            onSlotchange={() =>
                                this._handleSlotChange('toolbar')
                            }
                        ></slot>
                    </div>
                    <div class="rux-container__body" part="body">
                        <slot></slot>
                    </div>
                    <div
                        class={{
                            'rux-container__footer': true,
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
