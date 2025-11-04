import { LitElement, css, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { classMap } from 'lit/directives/class-map.js'
import style from './rux-button.scss?inline'

/**
 * @part container - the components native button element.
 * @part icon - the optional rux-icon
 */
@customElement('rux-button')
export class RuxButton extends LitElement {
    static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true }
    static styles = css`
        ${unsafeCSS(style)}
    `

    /**
     * For a [button style guide, see the Button section in Astro UXDS Guidelines](https://astrouxds.com/components/button)
     * Displays an Astro icon matching this string. For a [full list of available icons,
     * see the Icons section in Astro UXDS Guidelines](https://astrouxds.com/ui-components/icons-and-symbols)
     */
    @property({ type: String, reflect: true }) icon?: string

    /**
     * Hides slotted text from the button by setting rux-button--icon-only class
     */
    @property({ type: Boolean, attribute: 'icon-only', reflect: true })
    iconOnly: boolean = false

    /**
     * Changes button style from solid to secondary by setting the rux-button--secondary class
     */
    @property({ type: Boolean }) secondary: boolean = false

    /**
     * Toggles disabled attribute on the button
     */
    @property({ type: Boolean, reflect: true }) disabled = false

    /**
     * Changes button style from solid to borderless by setting the rux-button--borderless class
     */
    @property({ type: Boolean }) borderless: boolean = false

    /**
     * Changes size of a button from medium to small or large by setting sizing classes
     * rux-button--small
     * rux-button--large
     */
    @property({ type: String, reflect: true })
    size?: 'small' | 'medium' | 'large'

    /**
     * The button type. Use 'submit' to submit native form data.
     */
    @property({ type: String }) type: 'submit' | 'button' = 'button'

    /**
     * Creates and appends a native <button> if used within a form
     * so that it can trigger the submit event.
     *
     * Shadow DOM limitation prevents <form> from working correctly.
     * https://github.com/ionic-team/ionic-framework/blob/main/core/src/components/button/button.tsx
     * @param ev
     */
    private handleClick = (ev: Event) => {
        if (this.shadowRoot) {
            const form = this.closest('form')
            if (form) {
                ev.preventDefault()

                const fakeButton = document.createElement('button')
                fakeButton.type = this.type // Use the component's 'type' prop for the fake button
                fakeButton.style.display = 'none'
                form.appendChild(fakeButton)
                fakeButton.click()
                fakeButton.remove()
            }
        }
    }

    render() {
        const { size, iconOnly, secondary, disabled, icon, borderless } = this

        const buttonClasses = {
            'rux-button': true,
            'rux-button--secondary': secondary,
            'rux-button--default': !secondary, // Added explicitly for default styling if not secondary
            'rux-button--small': size === 'small',
            'rux-button--large': size === 'large',
            'rux-button--icon-only': iconOnly,
            'rux-button--borderless': borderless,
        }

        return html`
            <button type="button" @click=${this.handleClick} class=${classMap(buttonClasses)} ?disabled=${disabled} aria-disabled=${disabled ? 'true' : 'false'} part="container">
                ${icon ? html`<span class="icon-placeholder">[${icon}]</span>` : null}
                <slot></slot>
            </button>
        `
    }
}
