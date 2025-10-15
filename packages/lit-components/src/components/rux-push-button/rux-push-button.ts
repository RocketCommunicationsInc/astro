// Import necessary modules from Lit
import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { classMap } from 'lit/directives/class-map.js'; // For dynamic class binding
import { ifDefined } from 'lit/directives/if-defined.js'; // For conditionally setting attributes
import style from './rux-push-button.scss?inline'

// Global counter for unique IDs, similar to the original Stencil approach
let id = 0;

// Utility function to render a hidden input for form submission.
// This is a common pattern for custom elements to participate in forms.
// Assuming its original behavior was to manage a hidden input child of the host.
function renderHiddenInput(
    _is: boolean, // This parameter seems unused in the original context, keeping for signature compatibility
    container: HTMLElement, // The LitElement instance (`this`) will be passed here
    name: string,
    value: string,
    disabled: boolean,
    checked: boolean
) {
    let input = container.querySelector('input[type="hidden"]');
    if (!input) {
        input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        container.appendChild(input);
    }
    const hiddenInput = input as HTMLInputElement;
    hiddenInput.name = name;
    hiddenInput.disabled = disabled;
    // For a checkbox-like component, the value is typically only submitted if checked.
    // If unchecked, setting value to empty string means it won't be part of form data.
    hiddenInput.value = checked ? value : '';
}

/**
 * @part container - the label of rux-push-button
 * @part icon - the optional rux-icon
 */
@customElement('rux-push-button')
export class RuxPushButton extends LitElement {
    // Unique ID for the internal input element to link with the label
    private pushButtonId = `rux-push-button-${id++}`;

    /**
     * For a [button style guide, see the Button section in Astro UXDS Guidelines](https://astrouxds.com/components/button)
     * Displays an Astro icon matching this string. For a [full list of available icons,
     * see the Icons section in Astro UXDS Guidelines](https://astrouxds.com/ui-components/icons-and-symbols)
     */
    @property({ type: String, reflect: true }) icon?: string;

    /**
     * Hides slotted text from the button by setting rux-button--icon-only class
     */
    @property({
        type: Boolean,
        attribute: 'icon-only',
        reflect: true,
    })
    iconOnly: boolean = false;

    /**
     * Disables the push button via HTML `disabled` attribute.
     * Button takes on a distinct disabled visual state.
     * Cursor uses the `not-allowed` system replacement and all keyboard and mouse events are ignored.
     */
    @property({ type: Boolean, reflect: true }) disabled: boolean = false;

    /**
     * Checks the push button via HTML `checked` attribute.
     * Push button takes on a distinct "enabled" or "selected" visual state.
     */
    @property({ type: Boolean, reflect: true }) checked: boolean = false;

    /**
     * The label of the push button.
     */
    @property({ type: String }) label: string = '';

    /**
     * The name of the push button.
     */
    @property({ type: String }) name: string = '';

    /**
     * The value of the push button.
     */
    @property({ type: String, reflect: true }) value: string = '';

    /**
     * Changes size of a push button from medium to small or large by setting sizing classes
     * rux-button--small
     * rux-button--large
     */
    @property({ type: String, reflect: true }) size?: 'small' | 'medium' | 'large';

    // In LitElement, events are dispatched directly via CustomEvent.
    // No need for @Event decorator or EventEmitter properties.

    // Using an arrow function for methods that handle events ensures `this` context is correctly bound.
    private _onChange = (e: Event) => {
        const target = e.target as HTMLInputElement;
        this.checked = target.checked; // Update the property, which triggers a re-render

        /**
         * Fired when an alteration to the input's value is committed by the user and emits the value on the event.detail
         * @event ruxchange
         */
        this.dispatchEvent(new CustomEvent('ruxchange', {
            detail: this.checked, // Emit the checked state as detail
            bubbles: true, // Allow event to bubble up through the DOM
            composed: true, // Allow event to cross shadow DOM boundaries
        }));
    };

    private _onBlur = () => {
        /**
         * Fired when an element has lost focus
         * @event ruxblur
         */
        this.dispatchEvent(new CustomEvent('ruxblur', {
            bubbles: true,
            composed: true,
        }));
    };

    // Styles are defined as a static property using the `css` tagged template literal.
    // These styles are applied to the component's Shadow DOM.
    static styles = css`${unsafeCSS(style)}`;

    render() {
        // Destructure properties for easier access in the template
        const {
            disabled,
            checked,
            label,
            size,
            value,
            icon,
            iconOnly,
            name,
        } = this;

        // Call the utility function to manage the hidden input for form submission.
        // `this` refers to the LitElement instance (the host element).
        renderHiddenInput(
            true, // Retain parameter from original signature, even if unused in this implementation
            this, // Pass the host element
            name,
            value || 'on', // Use 'on' as default value if 'value' prop is empty, common for checkboxes
            disabled,
            checked
        );

        // Define dynamic classes using Lit's `classMap` directive
        const buttonClasses = {
            'rux-push-button__button': true,
            'rux-push-button__button--small': size === 'small',
            'rux-push-button__button--large': size === 'large',
            'rux-push-button__button--icon-only': iconOnly,
        };

        return html`
            <!-- The host element's attributes (role, aria-checked, aria-hidden) are applied to an internal div -->
            <div
                role="switch"
                aria-checked="${checked}"
                aria-hidden="${ifDefined(disabled ? 'true' : undefined)}"
            >
                <input
                    class="rux-push-button__input"
                    id="${this.pushButtonId}"
                    type="checkbox"
                    ?disabled="${disabled}"
                    ?checked="${checked}"
                    @change="${this._onChange}"
                    @blur="${this._onBlur}"
                    value="${value}"
                />
                <label
                    part="container"
                    class="${classMap(buttonClasses)}"
                    for="${this.pushButtonId}"
                >
                    <!-- Conditionally render rux-icon if 'icon' property is provided -->
                    ${icon
                        ? html`<rux-icon
                              size="auto"
                              exportparts="icon"
                              icon="${icon}"
                          ></rux-icon>`
                        : null}
                    ${label}
                </label>
                <slot></slot>
            </div>
        `;
    }
}
