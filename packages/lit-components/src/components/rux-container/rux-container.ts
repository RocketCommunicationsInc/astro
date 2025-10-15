// Import LitElement and necessary directives
import { LitElement, css, html, unsafeCSS } from 'lit'

import { classMap } from 'lit/directives/class-map.js'
import { state } from 'lit/decorators.js'
import style from './rux-container.scss?inline'

// Utility function to check if a slot has content assigned in the light DOM.
// This mirrors how Stencil's hasSlot utility typically works, by checking for
// elements in the light DOM that are designated for a slot.
const hasSlot = (el: HTMLElement, slotName: string = ''): boolean => {
    if (slotName) {
        // For named slots, check if an element with that slot attribute exists in the light DOM
        return !!el.querySelector(`[slot="${slotName}"]`)
    } else {
        // For the default slot, check if there are any child elements that are not explicitly slotted.
        // This specifically looks for elements, not just text nodes, mirroring a common Stencil implementation.
        return !!el.querySelector(':scope > *:not([slot])')
    }
}

/**
 * @slot (default) - The container's content
 * @slot header - The container's header
 * @slot tab-bar - The container's tab bar
 * @slot toolbar - The container's toolbar
 * @slot footer - The container's footer
 * @part container - The container's outermost element
 * @part header - The container's outside header element
 * @part tab-bar - The container's outside tab bar element
 * @part toolbar - The container's outside toolbar element
 * @part body - The container's outside body element
 * @part footer - The container's outside footer element
 */
export class RuxContainer extends LitElement {
    static styles = css`
        ${unsafeCSS(style)}
    `

    // Use Lit's @state decorator for reactive properties that trigger re-renders
    @state() private hasCompactTabs: boolean = false

    @state() private activeSlots = {
        header: false,
        'tab-bar': false,
        toolbar: false,
        footer: false,
    }

    /**
     * Called after the component's first update (render)
     * This is a good place to perform initial checks after the DOM is ready.
     */
    firstUpdated(): void {
        this._updateSlotVisibility()
    }

    /**
     * Updates the visibility state for all named slots and checks for compact tabs.
     * This method is called initially and on `slotchange` events.
     */
    private _updateSlotVisibility() {
        const slotNames: Array<'header' | 'tab-bar' | 'toolbar' | 'footer'> = ['header', 'tab-bar', 'toolbar', 'footer']

        let newActiveSlots = { ...this.activeSlots }
        let newHasCompactTabs = this.hasCompactTabs // Start with current value

        for (const slotName of slotNames) {
            // 'this' refers to the RuxContainer element itself
            const show = hasSlot(this, slotName)
            if (newActiveSlots[slotName] !== show) {
                newActiveSlots = { ...newActiveSlots, [slotName]: show }
            }

            if (slotName === 'tab-bar' && show) {
                // Query the light DOM for a rux-tabs element within the tab-bar slot
                const tabs = this.querySelector('[slot="tab-bar"] rux-tabs') as HTMLElement | null
                if (!!tabs?.hasAttribute('compact') !== newHasCompactTabs) {
                    newHasCompactTabs = !!tabs?.hasAttribute('compact')
                }
            } else if (slotName === 'tab-bar' && !show) {
                // If tab-bar slot is no longer active, reset compact tabs state
                if (newHasCompactTabs !== false) {
                    newHasCompactTabs = false
                }
            }
        }

        // Only update state if there's a change to avoid unnecessary re-renders
        if (JSON.stringify(newActiveSlots) !== JSON.stringify(this.activeSlots)) {
            this.activeSlots = newActiveSlots
        }
        if (newHasCompactTabs !== this.hasCompactTabs) {
            this.hasCompactTabs = newHasCompactTabs
        }
    }

    render() {
        // Lit's html tagged template for rendering
        return html`
            <div class="rux-container" part="container">
                <div
                    class=${classMap({
                        'rux-container__header': true,
                        hidden: !this.activeSlots.header,
                    })}
                    part="header"
                >
                    <!-- @slotchange event listener to react when slotted content changes -->
                    <slot name="header" @slotchange=${this._updateSlotVisibility}></slot>
                </div>
                <div
                    class=${classMap({
                        'rux-container__tab-bar': true,
                        hidden: !this.activeSlots['tab-bar'],
                        'rux-container__tab-bar-compact': this.hasCompactTabs,
                    })}
                    part="tab-bar"
                >
                    <slot name="tab-bar" @slotchange=${this._updateSlotVisibility}></slot>
                </div>
                <div
                    class=${classMap({
                        'rux-container__toolbar': true,
                        hidden: !this.activeSlots.toolbar,
                    })}
                    part="toolbar"
                >
                    <slot name="toolbar" @slotchange=${this._updateSlotVisibility}></slot>
                </div>
                <div class="rux-container__body" part="body">
                    <slot></slot>
                </div>
                <div
                    class=${classMap({
                        'rux-container__footer': true,
                        hidden: !this.activeSlots.footer,
                    })}
                    part="footer"
                >
                    <slot name="footer" @slotchange=${this._updateSlotVisibility}></slot>
                </div>
            </div>
        `
    }
}

// Define the custom element
declare global {
    interface HTMLElementTagNameMap {
        'rux-container': RuxContainer
    }
}
customElements.define('rux-container', RuxContainer)
