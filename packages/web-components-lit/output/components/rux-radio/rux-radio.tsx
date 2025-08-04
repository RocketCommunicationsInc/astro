To convert the Stencil.js component `RuxRadio` to LitElement, we need to map Stencil's decorators and concepts to Lit's equivalents, adjust the rendering logic to Lit's `html` template syntax, and handle lifecycle methods.

Here's the converted LitElement code:

```typescript
// rux-radio.ts

import { LitElement, html, css } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

// Define a minimal interface for HTMLRuxRadioGroupElement if it's not globally available
// This is necessary for TypeScript to understand the `radioGroup.value` and event listeners.
declare global {
  interface HTMLRuxRadioGroupElement extends HTMLElement {
    value: string;
    addEventListener(type: 'ruxchange', listener: (event: Event) => any, options?: boolean | AddEventListenerOptions): void;
    removeEventListener(type: 'ruxchange', listener: (event: Event) => any, options?: boolean | AddEventListenerOptions): void;
  }
  interface HTMLElementTagNameMap {
    'rux-radio-group': HTMLRuxRadioGroupElement;
  }
}

let id = 0;

/**
 * @slot (default) - The radio label
 * @part form-field - the form field of the radio
 * @part label - the label of the radio
 */
@customElement('rux-radio')
export class RuxRadio extends LitElement {
    // Stencil's `styleUrl` becomes `static styles` in LitElement.
    // In a real project, this SCSS would be compiled to CSS during the build process.
    static styles = css`
        :host {
            display: block; /* Ensures the component takes up its own space */
        }

        .rux-form-field {
            display: inline-flex; /* Use flex to align radio and label */
            align-items: center;
            vertical-align: middle;
            cursor: pointer;
            box-sizing: border-box;
            line-height: var(--line-height-body-default, 1.25);
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
        }

        .rux-radio {
            display: inline-flex;
            align-items: center;
        }

        .rux-radio input[type='radio'] {
            /* Basic styling for the radio input */
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            width: 1rem;
            height: 1rem;
            border: 1px solid var(--radio-border-color, #6a767e);
            border-radius: 50%;
            display: inline-block;
            position: relative;
            margin: 0;
            cursor: inherit; /* Inherit cursor from parent .rux-form-field */
            flex-shrink: 0; /* Prevent shrinking when space is tight */
            vertical-align: middle;
            outline: none;
            background-color: var(--radio-background-color, #fff);
            transition: border-color 0.15s ease-in-out, background-color 0.15s ease-in-out;
        }

        .rux-radio input[type='radio']:checked {
            border-color: var(--radio-checked-border-color, #005a96);
            background-color: var(--radio-checked-background-color, #005a96);
        }

        .rux-radio input[type='radio']:checked::before {
            content: '';
            display: block;
            width: 0.5rem;
            height: 0.5rem;
            background-color: var(--radio-dot-color, #fff);
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .rux-radio input[type='radio']:focus-visible {
            box-shadow: 0 0 0 2px var(--focus-ring-color, rgba(0, 122, 204, 0.4));
        }

        .rux-radio label {
            margin-left: 0.5rem; /* Space between radio and label */
            display: inline-block;
            vertical-align: middle;
            cursor: inherit; /* Inherit cursor from parent .rux-form-field */
        }

        .rux-radio--no-label {
            margin-left: 0; /* No margin if there's no visible label */
        }

        /* Disabled state */
        :host([disabled]) .rux-form-field {
            cursor: not-allowed;
            opacity: 0.6;
        }

        :host([disabled]) .rux-radio input[type='radio'] {
            pointer-events: none; /* Disables interaction */
            border-color: var(--radio-disabled-border-color, #a8a8a8);
            background-color: var(--radio-disabled-background-color, #e0e0e0);
        }

        :host([disabled]) .rux-radio input[type='radio']:checked {
            border-color: var(--radio-disabled-checked-border-color, #a8a8a8);
            background-color: var(--radio-disabled-checked-background-color, #e0e0e0);
        }

        :host([disabled]) .rux-radio input[type='radio']:checked::before {
            background-color: var(--radio-disabled-dot-color, #a8a8a8);
        }
    `;

    private radioId = `rux-radio-${++id}`;
    private radioGroup: HTMLRuxRadioGroupElement | null = null;

    // @query decorator is Lit's equivalent to get a reference to an element in the shadow DOM
    @query('input[type="radio"]')
    private inputEl?: HTMLInputElement;

    // @state decorator marks a property whose changes should trigger a re-render
    @state()
    hasLabelSlot = false;

    /**
     * The tabindex of the radio button.
     * @internal
     */
    @state()
    buttonTabindex = -1;

    /**
     * The radio name
     */
    @property({ type: String })
    name = '';

    /**
     * The radio value
     */
    @property({ type: String })
    value: string = '';

    /**
     * Toggles checked state of a radio
     */
    // `reflect: true` keeps the host attribute in sync with the property.
    // `mutable: true` from Stencil is implicit in Lit as properties are mutable by default.
    @property({ type: Boolean, reflect: true })
    checked: boolean = false;

    /**
     * Disables the radio via HTML disabled attribute. Radio takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored.
     */
    @property({ type: Boolean, reflect: true })
    disabled: boolean = false;

    /**
     * The radio label text. For HTML content, use the default slot instead.
     */
    @property({ type: String })
    label?: string;

    // Stencil's `@Watch` decorator is replaced by Lit's `updated` lifecycle method
    // or a custom setter for the property. `updated` is generally more flexible.

    /**
     * @internal
     * Method to programmatically set focus on the internal input element.
     */
    async setFocus(ev: Event) {
        ev.stopPropagation();
        ev.preventDefault();
        this.inputEl?.focus();
    }

    /**
     * @internal
     * Method to programmatically set the tabindex of the button.
     */
    async setButtonTabindex(value: number) {
        this.buttonTabindex = value;
    }

    // Lit's `connectedCallback` is similar to Stencil's. Call `super.connectedCallback()`.
    connectedCallback() {
        super.connectedCallback();
        // Use `closest` on `this` (the component instance itself) to find the parent.
        this.radioGroup = this.closest('rux-radio-group') as HTMLRuxRadioGroupElement;

        // Bind `_syncFromGroup` if it's used as an event listener (as `this` context changes).
        this._syncFromGroup = this._syncFromGroup.bind(this);
        if (this.radioGroup) {
            this._syncFromGroup();
            this.radioGroup.addEventListener('ruxchange', this._syncFromGroup);
        }
    }

    // Lit's `firstUpdated` runs once after the component's first render, when the DOM is ready.
    firstUpdated(changedProperties: Map<string | number | symbol, unknown>) {
        super.firstUpdated(changedProperties);
        // Initial check for label slot content after first render.
        this._handleSlotChange();
        // Listen for `slotchange` event on the default slot for dynamic label content.
        this.shadowRoot?.querySelector('slot')?.addEventListener('slotchange', this._handleSlotChange);
    }

    // Lit's `updated` lifecycle method is used to react to property changes, similar to Stencil's `@Watch`.
    updated(changedProperties: Map<string | number | symbol, unknown>) {
        super.updated(changedProperties);
        // If the `label` property changes, re-evaluate if there's a label.
        if (changedProperties.has('label')) {
            this._handleSlotChange();
        }
    }

    // Lit's `disconnectedCallback` is similar to Stencil's. Call `super.disconnectedCallback()`.
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.radioGroup) {
            this.radioGroup.removeEventListener('ruxchange', this._syncFromGroup);
        }
        // Clean up event listener for `slotchange`.
        this.shadowRoot?.querySelector('slot')?.removeEventListener('slotchange', this._handleSlotChange);
    }

    /**
     * Determines if the default slot has content (not just whitespace/comments).
     * Set `hasLabelSlot` state property.
     */
    private _handleSlotChange = () => {
        const slot = this.shadowRoot?.querySelector('slot');
        // Check if the slot has assigned nodes that are actual elements or non-empty text nodes.
        this.hasLabelSlot = slot
            ? slot
                  .assignedNodes({ flatten: true })
                  .some(
                      (node) =>
                          node.nodeType === Node.ELEMENT_NODE ||
                          (node.nodeType === Node.TEXT_NODE && node.textContent?.trim().length > 0)
                  )
            : false;
    };

    /**
     * Sets `checked` property when the parent `RuxRadioGroup` value changes.
     */
    private _syncFromGroup() {
        if (this.radioGroup && this.radioGroup.value) {
            this.checked = this.radioGroup.value === this.value;
        }
    }

    /**
     * Handles the `change` event from the internal radio input.
     * Arrow function automatically binds `this`.
     */
    private _onChange = (e: Event): void => {
        const target = e.target as HTMLInputElement;
        this.checked = target.checked;
        // Lit uses `dispatchEvent` for custom events. `bubbles` and `composed`
        // ensure the event can cross the shadow DOM boundary and be heard by parent elements.
        // Stencil's `EventEmitter` is replaced by this direct dispatch.
        // If `rux-radio` should also emit a change event on its own, you can add it here.
        // Example: this.dispatchEvent(new CustomEvent('change', { detail: { value: this.value, checked: this.checked }, bubbles: true, composed: true }));
    };

    /**
     * Handles the `blur` event from the internal radio input.
     * Arrow function automatically binds `this`.
     */
    private _onBlur = () => {
        // Emit the `ruxblur` event.
        this.dispatchEvent(new CustomEvent('ruxblur', { bubbles: true, composed: true }));
    };

    /**
     * Getter to determine if any label content is present (either `label` prop or slot).
     */
    get hasLabel() {
        return this.label ? true : this.hasLabelSlot;
    }

    // Lit's `render` method returns an `html` template literal.
    render() {
        const {
            label,
            radioId,
            checked,
            disabled,
            name,
            value,
            _onChange,
            _onBlur,
            hasLabel,
            buttonTabindex,
        } = this; // Destructuring `this` for cleaner access to properties

        return html`
            <div class="rux-form-field" part="form-field">
                <div class="rux-radio">
                    <input
                        type="radio"
                        name=${name}
                        id=${radioId}
                        ?disabled=${disabled}     <!-- Boolean attribute binding -->
                        ?checked=${checked}       <!-- Boolean attribute binding -->
                        value=${value}
                        tabindex=${buttonTabindex}
                        @change=${_onChange}      <!-- Event listener binding -->
                        @blur=${_onBlur}          <!-- Event listener binding -->
                    />
                    <label
                        htmlFor=${radioId}
                        part="label"
                        class=${classMap({        <!-- `classMap` directive for conditional classes -->
                            'rux-radio--no-label': !hasLabel,
                        })}
                    >
                        <slot>${label}</slot>     <!-- Default slot for label content. `label` prop is fallback. -->
                    </label>
                </div>
            </div>
        `;
    }
}
```