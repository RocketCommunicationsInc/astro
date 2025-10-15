import { LitElement, css, html, unsafeCSS } from 'lit'

import { customElement } from 'lit/decorators.js'
import style from './rux-menu.scss?inline'

// Define the expected interface for rux-menu-item,
// assuming it's another custom element with these properties.
interface HTMLRuxMenuItemElement extends HTMLElement {
    disabled: boolean
    selected: boolean
}

@customElement('rux-menu')
export class RuxMenu extends LitElement {
    static styles = css`
        ${unsafeCSS(style)}
    `

    connectedCallback() {
        super.connectedCallback() // Always call super for lifecycle hooks

        // Attach a click listener to the host element.
        // `this` refers to the HTMLRuxMenuElement instance itself.
        this.addEventListener('click', (e) => {
            // Ensure the clicked element is actually a rux-menu-item
            const target = e.target as HTMLElement
            if (target && target.matches('rux-menu-item')) {
                this._handleSelected(target as HTMLRuxMenuItemElement)
            }
        })
    }

    private _handleSelected(item: HTMLRuxMenuItemElement) {
        // Prevent code from running if the clicked element was disabled
        if (item.disabled) {
            return
        }

        // Get all rux-menu-item children inside the slot.
        // `this.querySelectorAll` correctly queries the light DOM children of the component.
        const menuItems = Array.from(this.querySelectorAll('rux-menu-item')) as HTMLRuxMenuItemElement[]

        // Deselect all other items
        menuItems.forEach((el) => {
            el.selected = false
        })

        // Select the clicked item if it's not disabled
        // (The `if (item.disabled)` check above already handles this, but good to be explicit)
        if (!item.disabled) {
            item.selected = true

            // Emit the custom event 'ruxmenuselected'.
            // In Lit, you dispatch a standard CustomEvent.
            // `bubbles: true` allows the event to bubble up the DOM tree.
            // `composed: true` allows the event to cross the Shadow DOM boundary.
            this.dispatchEvent(
                new CustomEvent('ruxmenuselected', {
                    detail: item, // The selected rux-menu-item itself
                    bubbles: true,
                    composed: true,
                })
            )
        }
    }

    render() {
        // Lit uses `html` tagged template literals instead of JSX `h` function.
        // The content returned here is rendered inside the component's Shadow DOM.
        // No `<Host>` wrapper is needed, as the template implicitly renders within the host's shadow root.
        return html`
            <div class="rux-menu">
                <slot></slot>
            </div>
        `
    }
}
