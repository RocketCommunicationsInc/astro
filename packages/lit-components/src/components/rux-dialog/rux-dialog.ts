import { LitElement, css, html, unsafeCSS } from 'lit'
import { customElement, property, query, queryAll, state } from 'lit/decorators.js'

import { classMap } from 'lit/directives/class-map.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import style from './rux-dialog.scss?inline'

// Custom utility function for hasSlot, similar to Stencil's one,
// but checking the light DOM of the LitElement instance.
function hasSlot(element: HTMLElement, name?: string): boolean {
    if (name) {
        // Check for named slot content directly in the light DOM
        return element.querySelector(`:scope > [slot="${name}"]`) !== null
    } else {
        // Check for default slot content (elements without a slot attribute)
        // Iterate through children to find any that aren't assigned to a named slot
        const children = element.children
        for (let i = 0; i < children.length; i++) {
            if (!children[i].hasAttribute('slot')) {
                return true
            }
        }
        return false
    }
}

/**
 * @part container - the dialog container
 * @part dialog - the native dialog element
 * @part header - the header of the dialog
 * @part message - the message of the dialog
 * @part confirm-button - the dialog's confirm button
 * @part deny-button - the dialog's deny button
 * @part footer - the footer of the dialog
 *
 * @slot header - the header of the dialog
 * @slot (default) - the dialog's message or content
 * @slot footer - the footer of the dialog
 */
@customElement('rux-dialog')
export class RuxDialog extends LitElement {
    // Styles (converted from rux-dialog.scss)
    // You would typically compile your SCSS to CSS and import/paste it here.
    static styles = css`
        ${unsafeCSS(style)}
    `

    /**
     * Shows and hides dialog
     */
    @property({ type: Boolean, reflect: true }) open: boolean = false

    /**
     * Dialog body message
     */
    @property({ type: String }) message?: string

    /**
     * Dialog header title
     */
    @property({ type: String }) header?: string

    /**
     * Text for confirmation button
     */
    @property({ type: String }) confirmText: string = 'Confirm'

    /**
     * Text for close button
     */
    @property({ type: String }) denyText: string = 'Cancel'

    /**
     * Allows dialog to close when clicking off it
     */
    @property({ type: Boolean, attribute: 'click-to-close' }) clickToClose: boolean = false

    // Internal state properties to track slot presence
    @state() private _hasFooter = false
    @state() private _hasHeader = false
    @state() private _hasMessage = false // For default slot

    private _userInput: boolean | null = null

    // Query for elements in the shadow DOM
    @query('.rux-dialog__wrapper') private _wrapper!: HTMLElement
    @queryAll('rux-button') private _buttons!: NodeListOf<HTMLElement>

    // Lifecycle: Equivalent of connectedCallback
    connectedCallback() {
        super.connectedCallback()
        window.addEventListener('keydown', this._handleKeyDown)
        window.addEventListener('click', this._handleClick)
        this._updateSlotStates() // Initial check for slots
    }

    // Lifecycle: Equivalent of disconnectedCallback
    disconnectedCallback() {
        super.disconnectedCallback()
        window.removeEventListener('keydown', this._handleKeyDown)
        window.removeEventListener('click', this._handleClick)
    }

    // Lifecycle: Equivalent of @Watch('open') and componentDidRender for focus
    updated(changedProperties: Map<string | number | symbol, unknown>) {
        if (changedProperties.has('open')) {
            if (this.open) {
                // When dialog opens
                if (!this._hasFooter) {
                    // Give the browser a chance to render the buttons before trying to focus them
                    requestAnimationFrame(() => {
                        const button = this._getDefaultButton()
                        if (button) {
                            button.focus()
                        }
                    })
                }
                this.dispatchEvent(new CustomEvent('ruxdialogopened', { composed: true, bubbles: true }))
            } else {
                // When dialog closes
                this.dispatchEvent(
                    new CustomEvent('ruxdialogclosed', {
                        detail: this._userInput,
                        composed: true,
                        bubbles: true,
                    })
                )
            }
            // Reset userInput after the dialog closes and event is dispatched
            this._userInput = null
        }
    }

    /**
     * Toggles the dialog's open prop.
     */
    async toggle() {
        this.open = !this.open
    }

    /**
     * Opens the dialog
     */
    async show() {
        this.open = true
    }

    /**
     * Closes the dialog
     */
    async hide() {
        this.open = false
    }

    // Event handlers defined as arrow functions to automatically bind 'this'
    private _handleKeyDown = (ev: KeyboardEvent) => {
        if (this.open && !this._hasFooter) {
            const btns = this._buttons
            if (ev.key === 'Enter') {
                const activeEl = this.shadowRoot?.activeElement
                // Check if the deny button is focused. Assumes rux-button[0] is deny.
                if (activeEl && activeEl === btns[0]) {
                    this._userInput = false
                    ;(btns[0] as HTMLElement).click()
                } else {
                    const button = this._getDefaultButton()
                    if (button) {
                        this._userInput = true
                        button.click()
                    }
                }
                ev.preventDefault() // Prevent default form submission or other Enter behaviors
            }
            if (ev.key === 'Escape') {
                this._userInput = false
                ;(btns[0] as HTMLElement).click() // Click deny/cancel button
                ev.preventDefault() // Prevent default Escape behavior
            }
        }
    }

    private _handleClick = (ev: MouseEvent) => {
        if (this.clickToClose && this.open) {
            // Check if the click target is the dialog wrapper itself, not its children.
            if (ev.composedPath()[0] === this._wrapper) {
                this.open = false
            }
        }
    }

    private _handleDialogChoice = (e: MouseEvent) => {
        const target = e.currentTarget as HTMLElement
        const choice = target.dataset.value === 'true'
        this._userInput = choice
        this.open = false
    }

    private _getDefaultButton(): HTMLElement | null {
        // _buttons is a NodeListOf<HTMLElement> populated by @queryAll
        const buttonSet = this._buttons

        if (buttonSet.length > 0) {
            const defaultButton = buttonSet[buttonSet.length - 1]
            // If 'rux-button' is a custom element (likely), calling focus() on its host should work.
            // If it internally has a <button> and does not delegate focus, we might need to drill down.
            // Original Stencil code tried to query the internal button.
            return defaultButton.shadowRoot?.querySelector('button') || defaultButton
        }
        return null
    }

    private _updateSlotStates() {
        // `this` refers to the host element, so `hasSlot` checks its light DOM.
        this._hasHeader = hasSlot(this, 'header')
        this._hasMessage = hasSlot(this) // Checks for default slot content
        this._hasFooter = hasSlot(this, 'footer')
    }

    private _handleSlotChange = () => {
        // This is called when content in a slot changes.
        // Re-evaluate slot presence and request an update.
        this._updateSlotStates()
        this.requestUpdate()
    }

    render() {
        const { open, message, header, confirmText, denyText } = this

        return open
            ? html`
                  <div part="container" class="rux-dialog__wrapper">
                      <dialog class="rux-dialog__dialog" role="dialog" part="dialog" tabindex="-1">
                          <header
                              class=${classMap({
                                  hidden: !this._hasHeader && header === undefined,
                                  'rux-dialog__header': true,
                              })}
                              part="header"
                          >
                              <slot name="header" @slotchange=${this._handleSlotChange}> ${ifDefined(header)} </slot>
                          </header>

                          <div class="rux-dialog__content">
                              <div
                                  class=${classMap({
                                      hidden: !this._hasMessage && message === undefined,
                                      'rux-dialog__message': true,
                                  })}
                                  part="message"
                              >
                                  <slot @slotchange=${this._handleSlotChange}>
                                      <!-- Render message prop as fallback if no default slot content -->
                                      ${!this._hasMessage && message !== undefined ? html`<div>${message}</div>` : null}
                                  </slot>
                              </div>
                          </div>
                          <footer
                              class=${classMap({
                                  'rux-dialog__footer': true,
                              })}
                              part="footer"
                          >
                              ${this._hasFooter
                                  ? html` <slot name="footer" @slotchange=${this._handleSlotChange}></slot> `
                                  : html`
                                        <div class="rux-button-group">
                                            <rux-button
                                                ?secondary=${confirmText.length > 0}
                                                @click=${this._handleDialogChoice}
                                                data-value="false"
                                                ?hidden=${!denyText}
                                                tabindex="0"
                                                exportparts="container:deny-button"
                                                id="rux-dialog-deny-button"
                                            >
                                                ${denyText}
                                            </rux-button>
                                            <rux-button
                                                @click=${this._handleDialogChoice}
                                                ?hidden=${!confirmText}
                                                data-value="true"
                                                tabindex="1"
                                                exportparts="container:confirm-button"
                                            >
                                                ${confirmText}
                                            </rux-button>
                                        </div>
                                    `}
                          </footer>
                      </dialog>
                  </div>
              `
            : null
    }
}
