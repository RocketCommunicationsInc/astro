import { LitElement, css, html, unsafeCSS } from 'lit'
import { customElement, state } from 'lit/decorators.js'

import { classMap } from 'lit/directives/class-map.js'
import style from './rux-card.scss?inline'

/**
 * @slot (default) - The card's content
 * @slot header - The card's header
 * @slot footer - The cards footer
 * @part container - The card's outermost container
 * @part header - The card's outside header element
 * @part body - The card's outside body element
 * @part footer - The card's outside footer element
 *
 */
@customElement('rux-card')
export class RuxCard extends LitElement {
    // Styles for the component. Replace with your actual rux-card.scss content.
    static styles = css`
        ${unsafeCSS(style)}
    `

    @state()
    private _activeSlots = {
        header: false,
        footer: false,
    }

    /**
     * Called after the component's first update, and before the update cycle finishes.
     * This is the perfect place to do initial setup that depends on the shadow DOM being ready.
     */
    firstUpdated() {
        // Check initial slot content once the component has rendered
        this._checkSlotContent('header')
        this._checkSlotContent('footer')
    }

    /**
     * Checks if a slot has content assigned to it.
     * This method is called by the `slotchange` event listener on the <slot> elements.
     * @param slotName The name of the slot to check ('header' or 'footer').
     */
    private _checkSlotContent(slotName: 'header' | 'footer') {
        // Get a reference to the slot element within the shadow DOM
        const slotElement = this.shadowRoot?.querySelector(`slot[name="${slotName}"]`) as HTMLSlotElement | null

        if (slotElement) {
            // assignedNodes({ flatten: true }) gets all assigned nodes, including text nodes,
            // and flattens them if there are nested slots.
            const assignedNodes = slotElement.assignedNodes({ flatten: true })

            // A slot is considered "active" or "having content" if it has any assigned
            // nodes that are not just empty text nodes (whitespace).
            const show = assignedNodes.some((node) => !(node.nodeType === Node.TEXT_NODE && node.textContent?.trim() === ''))

            // Update the state, which will trigger a re-render if the value changes.
            this._activeSlots = { ...this._activeSlots, [slotName]: show }
        }
    }

    render() {
        // Use classMap directive for conditional classes
        const headerClasses = classMap({
            'rux-card__header': true,
            hidden: !this._activeSlots.header,
        })

        const footerClasses = classMap({
            'rux-card__footer': true,
            hidden: !this._activeSlots.footer,
        })

        return html`
            <div class="rux-card" part="container">
                <div class=${headerClasses} part="header">
                    <slot name="header" @slotchange=${() => this._checkSlotContent('header')}></slot>
                </div>

                <div class="rux-card__body" part="body">
                    <slot></slot>
                </div>

                <div class=${footerClasses} part="footer">
                    <slot name="footer" @slotchange=${() => this._checkSlotContent('footer')}></slot>
                </div>
            </div>
        `
    }
}
