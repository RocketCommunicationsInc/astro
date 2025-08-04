To convert the Stencil.js `rux-radio-group` component to LitElement, we need to:

1.  Replace Stencil decorators (`@Component`, `@Prop`, `@State`, `@Event`, `@Watch`, `@Listen`, `@Element`, `h`) with LitElement equivalents (`@customElement`, `@property`, `@state`, `html`, `css`).
2.  Implement lifecycle methods (`connectedCallback`, `disconnectedCallback`, `firstUpdated`, `willUpdate`) to mirror Stencil's behavior (`componentWillLoad`, `componentDidLoad`, `@Watch`).
3.  Handle event emission using `CustomEvent` instead of `EventEmitter`.
4.  Manage global event listeners (`@Listen({ target: 'document' })`) manually using `addEventListener` and `removeEventListener`.
5.  Reimplement utility functions like `hasSlot` and `renderHiddenInput` in a Lit-friendly, declarative way.
6.  Translate Stencil's `h()` JSX to Lit's `html` template literal syntax.
7.  Include the SCSS content directly within Lit's `static styles` using `css` template literal.

Here's the converted LitElement code:

**`rux-radio-group.ts`**

```typescript
import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

// Assuming this interface is external and can be used directly or converted to a type if needed
import { FormFieldInterface } from '../../common/interfaces.module';

// Reimplementing hasSlot for Lit context
// Checks if a named slot or the default slot has assigned content.
function hasSlot(element: LitElement, slotName: string = ''): boolean {
    if (!element.shadowRoot) {
        return false;
    }
    const slot = element.shadowRoot.querySelector(slotName ? `slot[name="${slotName}"]` : 'slot:not([name])') as HTMLSlotElement | null;
    if (!slot) {
        return false;
    }
    // Check if there are any light DOM nodes assigned to the slot
    return slot.assignedNodes({ flatten: true }).length > 0;
}

// Interface for rux-radio elements. This assumes 'rux-radio' will also be a Lit component
// with these specific methods/properties for interaction.
interface HTMLRuxRadioElement extends HTMLElement {
    value: string;
    checked: boolean;
    disabled: boolean;
    setButtonTabindex(tabindex: number): void; // Method to control tabindex
    setFocus(ev: Event): void; // Method to programmatically focus the radio
}

// --- SCSS Content from rux-radio-group.scss ---
// You would paste the actual content of your rux-radio-group.scss file here.
// For demonstration, a basic set of styles is provided.
const styles = css`
    :host {
        display: block;
        contain: content; /* Improves rendering performance */
    }

    .rux-form-field {
        display: flex;
        flex-direction: column;
    }

    .rux-label {
        font-weight: var(--font-weight-semi-bold, 600);
        margin-bottom: var(--spacing-1, 0.25rem);
        color: var(--color-text-primary, #ffffff);
        font-size: var(--font-size-base, 1rem);
        line-height: var(--line-height-heading-sm, 1.25rem);
    }

    .rux-label.hidden {
        display: none;
    }

    .rux-label__asterisk {
        color: var(--color-status-critical, #f00); /* Example color, adapt to actual design tokens */
        margin-left: var(--spacing-0-5, 0.125rem);
    }

    .rux-radio-group {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-2, 0.5rem); /* Space between radios */
    }

    .rux-radio-group--invalid {
        /* Add specific invalid styling if needed */
    }

    .rux-error-text,
    .rux-help-text {
        display: flex;
        align-items: flex-start; /* Align text to top if multiple lines */
        margin-top: var(--spacing-1, 0.25rem);
        font-size: var(--font-size-sm, 0.875rem);
        line-height: var(--line-height-body-sm, 1rem);
    }

    .rux-error-text.hidden,
    .rux-help-text.hidden {
        display: none;
    }

    .rux-error-text {
        color: var(--color-status-critical, #f00);
    }

    .rux-error-text svg {
        flex-shrink: 0;
        margin-right: var(--spacing-0-5, 0.125rem);
        margin-top: 2px; /* Slight adjustment for alignment with text */
    }

    .rux-help-text {
        color: var(--color-text-secondary, #ccc); /* Example color */
    }
`;

/**
 * @slot label - The radio group label
 * @slot help-text -  the help text
 * @slot error-text -  the error text
 * @part error-text - The error text element
 * @part form-field - The form-field wrapper container
 * @part help-text - The help text element
 * @part label - The input label when `label` prop is set
 * @part radiogroup - The container of radios
 * @part required - The asterisk when required is true
 */
@customElement('rux-radio-group')
export class RuxRadioGroup extends LitElement implements FormFieldInterface {
    static styles = styles;

    @state() private hasLabelSlot = false;
    @state() private hasHelpSlot = false;
    @state() private hasErrorSlot = false;

    /**
     * The label of the radio group. For HTML content, use the `label` slot instead.
     */
    @property({ type: String }) label?: string;

    /**
     * Presentational only. Renders the Radio Group as invalid.
     */
    @property({ type: Boolean }) invalid: boolean = false;

    /**
     * Marks that a selection from the radio-group is requried.
     */
    @property({ type: Boolean }) required: boolean = false;

    /**
     * The name of the radio group - submitted with form data. Must match the name of the radios in the group.
     */
    @property({ type: String }) name: string = '';

    /**
     * The value of the current selected radio in the group. Changing this will also mark that radio as checked in the UI.
     */
    @property({ type: String, reflect: true }) value?: string | null;

    /**
     * The help or explanation text
     */
    @property({ type: String, attribute: 'help-text' }) helpText?: string;

    /**
     * The validation error text
     */
    @property({ type: String, attribute: 'error-text' }) errorText?: string;

    // Stencil's @Listen('keydown', { target: 'document' }) is handled manually
    private _documentKeydownListener: (ev: KeyboardEvent) => void;

    constructor() {
        super();
        // Bind methods to 'this' to maintain context when used as event listeners
        this._handleClick = this._handleClick.bind(this);
        this._handleSlotChange = this._handleSlotChange.bind(this);
        this._documentKeydownListener = this.onKeydown.bind(this);
    }

    // Lit's equivalent of Stencil's @Watch decorators and componentWillLoad
    willUpdate(changedProperties: Map<string | number | symbol, unknown>): void {
        if (changedProperties.has('value')) {
            const oldValue = changedProperties.get('value');
            if (this.value !== oldValue) {
                // Equivalent to Stencil's @Watch('value') emitChange
                this._setRadioTabindex(this.value);
                // Dispatch a custom event manually, equivalent to Stencil's EventEmitter
                this.dispatchEvent(new CustomEvent('ruxchange', {
                    detail: this.value,
                    bubbles: true, // Allow event to bubble up through the DOM
                    composed: true // Allow event to cross the shadow DOM boundary
                }));
            }
        }
        if (changedProperties.has('label')) {
            // Equivalent to Stencil's @Watch('label') handleLabelChange
            this._handleSlotChange();
        }
    }

    // Lit's equivalent of Stencil's connectedCallback
    connectedCallback(): void {
        super.connectedCallback();
        // Add event listener to the shadow root for slot changes.
        // This ensures _handleSlotChange is called when slot content is added/removed.
        this.shadowRoot?.addEventListener('slotchange', this._handleSlotChange);
        // Add global keydown listener for accessibility, handled by the component.
        document.addEventListener('keydown', this._documentKeydownListener);
    }

    // Lit's equivalent of Stencil's componentDidLoad (runs after the first render)
    firstUpdated(): void {
        // These calls were originally in Stencil's componentWillLoad and componentDidLoad.
        // It's crucial for initial setup once the light DOM children are available.
        const radios = this._getRadios();

        if (radios.length > 1 && !this.value) {
            // Set initial value if not already set and there's more than one radio
            this.value = radios[0].getAttribute('value') || null;
        }

        this._setRadioValueIfNone(); // Ensure all radios have a value
        this._handleSlotChange(); // Initial check for slot content
        this._setRadioTabindex(this.value); // Initial tabindex setup
    }

    // Lit's equivalent of Stencil's disconnectedCallback
    disconnectedCallback(): void {
        super.disconnectedCallback();
        this.shadowRoot?.removeEventListener('slotchange', this._handleSlotChange);
        document.removeEventListener('keydown', this._documentKeydownListener);
    }

    // Computed property based on label prop and slot presence
    get hasLabel(): boolean {
        return !!this.label || this.hasLabelSlot;
    }

    private _handleClick(e: MouseEvent): void {
        // Find the closest 'rux-radio' element that was clicked
        const selectedRadio =
            (e.target as HTMLElement).closest('rux-radio') as HTMLRuxRadioElement | null;

        if (selectedRadio && !selectedRadio.disabled) {
            const oldValue = this.value;
            const newValue = selectedRadio.value;
            if (newValue !== oldValue) {
                this.value = newValue; // Update the group's value
                // 'value' property change will trigger 'willUpdate' which in turn dispatches 'ruxchange'
            }
        }
    }

    private _selectedRadioIsDisabled(): boolean {
        // Query within the light DOM children of this component for the checked radio
        const radio = this.querySelector(
            `rux-radio[value="${this.value}"]`
        ) as HTMLRuxRadioElement;
        return !!radio && radio.disabled;
    }

    private _handleSlotChange(): void {
        // Update state properties based on whether specific slots have content
        this.hasLabelSlot = hasSlot(this, 'label');
        this.hasErrorSlot = hasSlot(this, 'error-text');
        this.hasHelpSlot = hasSlot(this, 'help-text');
        // Request an update to re-render the component if slot content changes visibility
        this.requestUpdate();
    }

    private _getRadios(): HTMLRuxRadioElement[] {
        // Get all 'rux-radio' elements that are direct children of this component in the light DOM
        return Array.from(this.querySelectorAll('rux-radio')) as HTMLRuxRadioElement[];
    }

    private _setRadioValueIfNone(): void {
        const radios = this._getRadios();
        radios.forEach((radio, index) => {
            // If a radio does not have a value, assign it one based on its index
            if (!radio.value) {
                radio.value = (index + 1).toString();
            }
        });
    }

    private _setRadioTabindex(value: string | null | undefined): void {
        const radios = this._getRadios();

        // Determine the first enabled radio and the currently checked enabled radio
        const firstEnabled = radios.find((radio) => !radio.disabled);
        const checkedEnabled = radios.find(
            (radio) => radio.value === value && !radio.disabled
        );

        // The radio that should be focusable (checked one, or the first enabled)
        const focusableRadio = checkedEnabled || firstEnabled;

        for (const radio of radios) {
            // Set tabindex: 0 for the focusable radio, -1 for others (for keyboard navigation)
            const tabindex = radio === focusableRadio ? 0 : -1;
            radio.setButtonTabindex(tabindex);
            // Also update the 'checked' property on the child radio component for UI consistency
            radio.checked = (radio.value === this.value);
        }
    }

    // Handles keyboard navigation (arrow keys) within the radio group
    onKeydown(ev: KeyboardEvent): void {
        // Ensure the event target is within this custom element (light DOM children)
        if (!this.contains(ev.target as Node)) {
            return;
        }

        const radios = this._getRadios().filter((radio) => !radio.disabled);

        // Only proceed if the currently focused element is one of our radios
        if (ev.target && radios.includes(ev.target as HTMLRuxRadioElement)) {
            const index = radios.findIndex((radio) => radio === ev.target);
            let nextRadio: HTMLRuxRadioElement | undefined;

            if (['ArrowDown', 'ArrowRight'].includes(ev.code)) {
                ev.preventDefault(); // Prevent default browser scroll behavior
                nextRadio =
                    index === radios.length - 1 ? radios[0] : radios[index + 1];
            } else if (['ArrowUp', 'ArrowLeft'].includes(ev.code)) {
                ev.preventDefault(); // Prevent default browser scroll behavior
                nextRadio =
                    index === 0 ? radios[radios.length - 1] : radios[index - 1];
            }

            if (nextRadio) {
                this.value = nextRadio.value; // Update the group's value (triggers re-render and checked state update)
                nextRadio.setFocus(ev); // Programmatically focus the next radio button
            }
        }
    }

    render() {
        // Conditionally render a hidden input for form submission purposes.
        // This replaces Stencil's imperative `renderHiddenInput` utility.
        const shouldRenderHiddenInput = !!this.name && !!this.value;

        return html`
            <div class="rux-form-field" part="form-field">
                <div
                    class=${`rux-label ${!this.hasLabel ? 'hidden' : ''}`}
                    part="label"
                >
                    <slot
                        name="label"
                        @slotchange=${this._handleSlotChange}
                    >
                        ${this.label}
                        ${this.required
                            ? html`<span part="required" class="rux-label__asterisk">&#42;</span>`
                            : ''}
                    </slot>
                </div>
                <div
                    class=${`rux-radio-group ${this.invalid ? 'rux-radio-group--invalid' : ''}`}
                    role="radiogroup"
                    part="radiogroup"
                    @click=${this._handleClick}
                >
                    <slot></slot>
                </div>
                <!-- Hidden input for form submission, renders only if name and value are present -->
                ${shouldRenderHiddenInput
                    ? html`
                          <input
                              type="hidden"
                              name=${this.name}
                              value=${this.value ?? ''}
                              ?disabled=${this._selectedRadioIsDisabled()}
                          />
                      `
                    : ''}
            </div>
            <div
                class=${`rux-error-text ${((this.errorText || this.hasErrorSlot)) ? '' : 'hidden'}`}
                part="error-text"
            >
                <svg
                    fill="none"
                    width="14"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.393 12.25c.898 0 1.458-.974 1.009-1.75L8.009 2.91a1.166 1.166 0 0 0-2.018 0L1.598 10.5c-.449.776.111 1.75 1.01 1.75h8.784ZM7 8.167a.585.585 0 0 1-.583-.584V6.417c0-.321.262-.584.583-.584.32 0 .583.263.583.584v1.166c0 .321-.262.584-.583.584Zm-.583 1.166V10.5h1.166V9.333H6.417Z"
                        fill="currentColor"
                    />
                </svg>
                <slot name="error-text" @slotchange=${this._handleSlotChange}>
                    ${this.errorText}
                </slot>
            </div>
            <div
                class=${`rux-help-text ${((this.helpText || this.hasHelpSlot) && (!this.errorText && !this.hasErrorSlot)) ? '' : 'hidden'}`}
                part="help-text"
            >
                <slot name="help-text" @slotchange=${this._handleSlotChange}>
                    ${this.helpText}
                </slot>
            </div>
        `;
    }
}
```