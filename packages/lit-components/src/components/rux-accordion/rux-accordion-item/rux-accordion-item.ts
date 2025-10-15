import { LitElement, css, html, nothing, unsafeCSS } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

import { classMap } from 'lit/directives/class-map.js'
import style from './rux-accordion-item.scss?inline'

// Utility function to check if a slot has content (adapted for LitElement)
// This checks the light DOM children of the host element.
function hasSlot(element: Element, name?: string): boolean {
    if (name) {
        // For named slots, check if there's any element explicitly assigned to that slot
        return element.querySelector(`[slot="${name}"]`) !== null
    } else {
        // For the default slot, check if there are any direct children that are not
        // assigned to a named slot (i.e., they don't have a 'slot' attribute)
        return Array.from(element.childNodes).some((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
                return !(node as Element).hasAttribute('slot')
            }
            // Also consider non-empty text nodes as default slot content
            return node.nodeType === Node.TEXT_NODE && (node as Text).textContent?.trim() !== ''
        })
    }
}

/**
 * @slot (default) - The expanded content
 * @slot label - Summary title
 * @slot prefix - Area to the left of label
 * @part container - The accordion item
 * @part label-wrapper - The element wrapping prefix, indicator and the label
 * @part label - The label
 * @part prefix - The wrapper for the prefix slot
 * @part indicator - The opened/closed indicator
 * @part content - The element wrapping the expanded content
 */
@customElement('rux-accordion-item')
export class RuxAccordionItem extends LitElement {
    // Stencil's @Element() el is implicitly 'this' in LitElement for host-level operations.

    @state() private hasPrefix: boolean = false

    /**
     * If present, sets the initial state on this accordion item to open, displaying the accordion content.
     */
    @property({ type: Boolean, reflect: true }) expanded: boolean = false

    /**
     * If present, sets a disabled state on this accordion item, indicating it cannot be selected by user action.
     */
    @property({ type: Boolean, reflect: true }) disabled: boolean = false

    // Define component styles using Lit's `css` tag.
    // Replace the content below with the compiled CSS from your `rux-accordion-item.scss` file.
    static styles = css`
        ${unsafeCSS(style)}
    `

    /**
     * Lit's `willUpdate` lifecycle method is used to observe property changes,
     * similar to Stencil's `@Watch` decorator.
     */
    willUpdate(changedProperties: Map<string | number | symbol, unknown>) {
        if (changedProperties.has('expanded')) {
            // Only emit the event if the 'expanded' property's value actually changed,
            // not on the very first render if its default value is `false`.
            const oldValue = changedProperties.get('expanded')
            if (oldValue !== undefined && oldValue !== this.expanded) {
                this._emitExpandedChanged()
            }
        }
    }

    /**
     * `firstUpdated` is called once after the component's first render.
     * This is a good place to do initial setup that depends on the DOM being rendered.
     */
    firstUpdated() {
        // Perform initial slot check after the component is fully rendered and slots are projected.
        this._handleSlotChange()
    }

    private _emitExpandedChanged() {
        if (this.expanded) {
            /**
             * Fired when an accordion-item has expanded.
             * @event ruxexpanded
             */
            this.dispatchEvent(new CustomEvent('ruxexpanded', { bubbles: true, composed: true }))
        } else {
            /**
             * Fired when an accordion-item has collapsed.
             * @event ruxcollapsed
             */
            this.dispatchEvent(new CustomEvent('ruxcollapsed', { bubbles: true, composed: true }))
        }
    }

    private _clickHandler(e: MouseEvent) {
        // Prevent the default behavior of the <details> element,
        // so we can fully control the `expanded` state via our property.
        e.preventDefault()

        if (this.disabled) {
            return
        }
        // Toggle the `expanded` property. Lit's reactive system will re-render
        // and update the `?open` attribute on the <details> element accordingly.
        this.expanded = !this.expanded
    }

    private _handleSlotChange() {
        // In Lit, 'this' refers to the component instance (the host element).
        this.hasPrefix = hasSlot(this, 'prefix')
    }

    render() {
        // Use Lit's `html` template literal for rendering.
        // `Host` element from Stencil is implicit in Lit's render.
        return html`
            <details
                part="container"
                ?open=${this.expanded}
                class=${classMap({
                    'rux-accordion-item': true,
                    'rux-accordion-item--disabled': this.disabled,
                })}
            >
                <summary part="label-wrapper" tabindex=${this.disabled ? '-1' : nothing} @click=${this._clickHandler}>
                    <span
                        part="prefix"
                        class=${classMap({
                            prefix: this.hasPrefix,
                            'prefix--hidden': !this.hasPrefix,
                        })}
                    >
                        <slot name="prefix" @slotchange=${this._handleSlotChange}></slot>
                    </span>
                    <div part="label" class="rux-accordion-item--title">
                        <slot name="label"></slot>
                    </div>
                    <span class="indicator" part="indicator">
                        <svg
                            class=${classMap({
                                'indicator--icon': true,
                                open: this.expanded,
                            })}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </span>
                </summary>
                <span part="content" class="rux-accordion-item--content">
                    <slot></slot>
                </span>
            </details>
        `
    }
}
