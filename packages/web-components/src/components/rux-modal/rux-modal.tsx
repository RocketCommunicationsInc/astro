import {
    Component,
    h,
    Prop,
    Event,
    EventEmitter,
    Element,
    Listen,
    Host,
} from '@stencil/core'

/**
 * @part wrapper - the modal wrapper overlay
 * @part header - The header container of modal
 * @part message - The message container of modal
 * @part footer - The footer container of modal
 *
 * @slot header - the header of the modal
 * @slot (default) - the content of the modal
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

    @Element() element!: HTMLRuxModalElement

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

    connectedCallback() {
        setTimeout(() => {
            const button = this._getDefaultButton()
            button && button.focus()
        })
        this._handleModalChoice = this._handleModalChoice.bind(this)
    }

    // componentDidLoad() {
    //     setTimeout(() => {
    //         const button = this._getDefaultButton()
    //         button && button.focus()
    //     })
    // }

    render() {
        return (
            this.open && (
                <Host>
                    <div part="wrapper" class="rux-modal__wrapper">
                        <dialog class="rux-modal__dialog" role="dialog">
                            <header part="header" class="rux-modal__titlebar">
                                <slot name="header"></slot>
                            </header>
                            <div class="rux-modal__content">
                                <div part="message" class="rux-modal__message">
                                    <slot></slot>
                                </div>
                                <footer part="footer" class="rux-modal__footer">
                                    <slot name="footer"></slot>
                                </footer>
                            </div>
                        </dialog>
                    </div>
                </Host>
            )
        )
    }
}

/*
{modalTitle && (
     <header class="rux-modal__titlebar">
        <div>{modalTitle}</div>
    </header>
)}
<div class="rux-modal__message">
                                    {modalMessage}
                                </div>
<rux-button-group h-align="right">
                                    <rux-button
                                        secondary={confirmText.length > 0}
                                        onClick={_handleModalChoice}
                                        data-value="false"
                                        hidden={!denyText}
                                        tabindex="-1"
                                    >
                                        {denyText}
                                    </rux-button>
                                    <rux-button
                                        onClick={_handleModalChoice}
                                        data-value="true"
                                        hidden={!confirmText}
                                        tabindex="0"
                                    >
                                        {confirmText}
                                    </rux-button>
                                </rux-button-group>
*/
