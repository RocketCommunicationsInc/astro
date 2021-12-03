import {
    Component,
    h,
    Prop,
    Event,
    EventEmitter,
    Element,
    Listen,
    Host,
    Watch,
    State,
} from '@stencil/core'
import { hasSlot } from '../../utils/utils'

/**
 * @part modal-wrapper - the modal wrapper overlay
 * @part modal-header - The header container of modal
 * @part modal-content - The message container of modal
 * @part modal-footer - The footer container of modal
 *
 * @slot header - the header of the modal
 * @slot message - the message of the modal
 * @slot footer - the footer of the modal
 */
@Component({
    tag: 'rux-modal',
    styleUrl: 'rux-modal.scss',
    shadow: { delegatesFocus: true },
})
export class RuxModal {
    /**
     * Shows and hides modal
     */
    @Prop({ reflect: true, mutable: true }) open: boolean = false
    /**
     * Allows modal to close by clicking off of it
     */
    @Prop() clickToClose: boolean = false

    /**
     * Event that is fired when modal closes
     */
    @Event({
        eventName: 'ruxmodalclosed',
        composed: true,
        bubbles: true,
    })
    ruxModalClosed!: EventEmitter<boolean>

    /**
     * Event that is fired when modal opens
     */
    @Event({
        eventName: 'ruxmodalopened',
        composed: true,
        bubbles: true,
    })
    ruxModalOpened!: EventEmitter<boolean>

    @Element() element!: HTMLRuxModalElement

    @State()
    hasHeader = hasSlot(this.element, 'header')
    hasMessage = hasSlot(this.element, 'message')
    hasFooter = hasSlot(this.element, 'footer')

    @Watch('open')
    async handleOpenChange() {
        if (this.open) {
            this.ruxModalOpened.emit(true)
        } else {
            this.ruxModalClosed.emit(true)
        }
    }

    // close modal if click happens outside of dialog
    @Listen('click', { target: 'window' })
    handleClick(ev: MouseEvent) {
        if (this.clickToClose) {
            const wrapper = this._getWrapper()
            if (ev.composedPath()[0] === wrapper) {
                this.ruxModalClosed.emit(false)
                this.open = false
            }
        }
    }

    private _getWrapper(): HTMLElement | null {
        const wrapper = this.element?.shadowRoot?.querySelector(
            '.rux-modal__wrapper'
        ) as HTMLElement

        if (wrapper) {
            return wrapper
        }
        return null
    }

    render() {
        return (
            this.open && (
                <Host>
                    <div part="modal-wrapper" class="rux-modal__wrapper">
                        <dialog class="rux-modal__dialog" role="dialog">
                            <header
                                class={{
                                    'rux-modal__titlebar': true,
                                    invisible: !this.hasHeader,
                                }}
                                part="modal-header"
                            >
                                <slot
                                    name="header"
                                    onSlotchange={() =>
                                        (this.hasHeader = hasSlot(
                                            this.element,
                                            'header'
                                        ))
                                    }
                                ></slot>
                            </header>

                            <div
                                class={{
                                    'rux-modal__content': true,
                                    invisible: !this.hasMessage,
                                }}
                                part="modal-content"
                            >
                                <div class="rux-modal__message">
                                    <slot
                                        name="message"
                                        onSlotchange={() =>
                                            (this.hasMessage = hasSlot(
                                                this.element,
                                                'message'
                                            ))
                                        }
                                    ></slot>
                                </div>
                            </div>

                            <footer
                                part="modal-footer"
                                class={{
                                    'rux-modal__footer': true,
                                    invisible: !this.hasFooter,
                                }}
                            >
                                <slot
                                    name="footer"
                                    onSlotchange={() =>
                                        (this.hasFooter = hasSlot(
                                            this.element,
                                            'footer'
                                        ))
                                    }
                                ></slot>
                            </footer>
                        </dialog>
                    </div>
                </Host>
            )
        )
    }
}
