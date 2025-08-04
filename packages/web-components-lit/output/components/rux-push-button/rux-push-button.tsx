To convert the Stencil.js `rux-push-button` component to LitElement, we need to:

1.  Replace Stencil's decorators and rendering logic with LitElement's `@customElement`, `@property`, `html` template literals, and event dispatching.
2.  Translate Stencil's JSX `h` function into Lit's `html` tagged template literals.
3.  Handle lifecycle methods and event emitters appropriately for Lit.
4.  Convert `styleUrl` to a static `styles` property using Lit's `css` tagged template literal. (Since the SCSS content wasn't provided, I'll create a plausible CSS equivalent based on typical button styling and the class names used).
5.  Adapt the `renderHiddenInput` utility function or include its logic, as it's an external dependency.

Here's the converted LitElement code:

```typescript
// Import necessary modules from Lit
import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js'; // For dynamic class binding
import { ifDefined } from 'lit/directives/if-defined.js'; // For conditionally setting attributes

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
    static styles = css`
        :host {
            display: inline-block;
            box-sizing: border-box;
            line-height: 1; /* Ensure consistent line height */
        }

        /* Visually hide the native checkbox input but keep it accessible */
        .rux-push-button__input {
            position: absolute;
            opacity: 0;
            width: 0;
            height: 0;
            margin: 0;
            padding: 0;
            border: 0;
            overflow: hidden;
            clip: rect(0 0 0 0);
            white-space: nowrap;
        }

        /* Styling for the visible button element */
        .rux-push-button__button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem; /* Space between icon and label */
            padding: 0.5rem 1rem; /* Default medium size padding */
            font-size: 1rem; /* Default medium size font */
            font-family: var(--rux-font-body-text, "Noto Sans", sans-serif); /* Example: Use CSS variable for font */
            border: 1px solid var(--rux-button-border-color, #ccc); /* Example: CSS variables for theming */
            background-color: var(--rux-button-background-color, #f5f5f5);
            color: var(--rux-button-text-color, #333);
            border-radius: var(--rux-border-radius-pill, 4px); /* Example: CSS variable for border radius */
            cursor: pointer;
            text-decoration: none;
            transition: background-color 0.15s ease-in-out,
                        border-color 0.15s ease-in-out,
                        color 0.15s ease-in-out;
            user-select: none; /* Prevent text selection */
            -webkit-appearance: none; /* Remove default button styles */
            -moz-appearance: none;
            appearance: none;
            box-sizing: border-box;
            text-align: center;
            white-space: nowrap;
        }

        /* Hover, Focus, Active states for button */
        .rux-push-button__button:hover {
            background-color: var(--rux-button-hover-background-color, #e0e0e0);
            border-color: var(--rux-button-hover-border-color, #bbb);
        }

        .rux-push-button__button:focus {
            outline: 2px solid var(--rux-focus-color, #007bff); /* Example focus ring */
            outline-offset: 2px;
            border-color: var(--rux-focus-color, #007bff);
        }

        .rux-push-button__button:active {
            background-color: var(--rux-button-active-background-color, #d0d0d0);
            border-color: var(--rux-button-active-border-color, #aaa);
        }

        /* Disabled state */
        .rux-push-button__input:disabled + .rux-push-button__button {
            cursor: not-allowed;
            opacity: 0.6;
            background-color: var(--rux-button-disabled-background-color, #f0f0f0);
            color: var(--rux-button-disabled-text-color, #999);
            border-color: var(--rux-button-disabled-border-color, #ddd);
        }
        /* No hover/focus/active for disabled */
        .rux-push-button__input:disabled + .rux-push-button__button:hover,
        .rux-push-button__input:disabled + .rux-push-button__button:focus,
        .rux-push-button__input:disabled + .rux-push-button__button:active {
            background-color: var(--rux-button-disabled-background-color, #f0f0f0);
            border-color: var(--rux-button-disabled-border-color, #ddd);
            color: var(--rux-button-disabled-text-color, #999);
            outline: none;
        }


        /* Checked (selected) state */
        .rux-push-button__input:checked + .rux-push-button__button {
            background-color: var(--rux-button-checked-background-color, #0056b3); /* Darker blue */
            color: var(--rux-button-checked-text-color, white);
            border-color: var(--rux-button-checked-border-color, #0056b3);
        }

        /* Checked & Hover/Focus/Active states */
        .rux-push-button__input:checked + .rux-push-button__button:hover {
            background-color: var(--rux-button-checked-hover-background-color, #004085);
            border-color: var(--rux-button-checked-hover-border-color, #004085);
        }
        .rux-push-button__input:checked + .rux-push-button__button:focus {
            outline: 2px solid var(--rux-focus-color, #007bff);
            outline-offset: 2px;
            border-color: var(--rux-focus-color, #007bff);
        }
        .rux-push-button__input:checked + .rux-push-button__button:active {
            background-color: var(--rux-button-checked-active-background-color, #002752);
            border-color: var(--rux-button-checked-active-border-color, #002752);
        }

        /* Size variants */
        .rux-push-button__button--small {
            padding: 0.25rem 0.75rem;
            font-size: 0.875rem;
        }

        .rux-push-button__button--large {
            padding: 0.75rem 1.25rem;
            font-size: 1.125rem;
        }

        /* Icon Only variant */
        .rux-push-button__button--icon-only {
            padding: 0.5rem; /* Square padding for icon-only */
            gap: 0; /* No gap if only icon */
        }
        .rux-push-button__button--icon-only.rux-push-button__button--small {
            padding: 0.25rem;
        }
        .rux-push-button__button--icon-only.rux-push-button__button--large {
            padding: 0.75rem;
        }

        /* Styling for the rux-icon itself within the button */
        rux-icon {
            display: block; /* Ensures icon plays well with flexbox sizing */
            --rux-icon-size: var(--rux-icon-size-button, 1.25rem); /* Default icon size */
        }
        /* Override icon size for specific button sizes */
        .rux-push-button__button--small rux-icon {
            --rux-icon-size: var(--rux-icon-size-button-small, 1rem);
        }
        .rux-push-button__button--large rux-icon {
            --rux-icon-size: var(--rux-icon-size-button-large, 1.5rem);
        }
    `;

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
```