
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// Optional: Type definition for global HTMLElementTagNameMap for improved TypeScript support
declare global {
    interface HTMLElementTagNameMap {
        'rux-option': RuxOption;
    }
}

/**
 * This component should be used exclusively with RuxSelect.
 * It's main function is to broadcast to RuxSelect when the value property changes.
 * RuxSelect can only listen for slot change, which won't fire in the scenario where there
 * might be 2 options and only their values change. Because the nodes themselves aren't added or removed,
 * onSlotchange doesn't fire.
 */
@customElement('rux-option') // Stencil's @Component({ tag: 'rux-option', ... }) becomes @customElement('rux-option')
export class RuxOption extends LitElement {
    // Stencil's @Element() el!: HTMLRuxOptionElement is not directly needed in Lit.
    // `this` inside the class refers to the element instance itself.

    /**
     * The option value
     */
    @property({ type: String, reflect: true }) // Stencil's @Prop({ reflect: true }) becomes @property({ type: String, reflect: true })
    value!: string;

    /** The option label */
    @property({ type: String, reflect: true }) // Stencil's @Prop({ reflect: true }) becomes @property({ type: String, reflect: true })
    label!: string;

    /**
     * Sets the option as disabled.
     * Stencil's @Prop() disabled: boolean = false; does not reflect by default.
     * However, the Stencil `render()` method explicitly applies `disabled={this.disabled}` to the `<Host>`.
     * To achieve the same effect (an attribute being present on the host element for CSS selection),
     * we add `reflect: true` to the Lit `@property` for `disabled`.
     */
    @property({ type: Boolean, reflect: true }) // Stencil's @Prop() becomes @property({ type: Boolean, reflect: true })
    disabled: boolean = false;

    // Stencil's @Event({ eventName: 'rux-option-changed', composed: true }) optionChanged!: EventEmitter<void>
    // is replaced by a custom method that dispatches a CustomEvent.
    /** @internal **/
    private _dispatchOptionChanged(): void {
        this.dispatchEvent(
            new CustomEvent('rux-option-changed', {
                bubbles: true,   // Events typically bubble up to parent components
                composed: true,  // `composed: true` allows the event to pass through shadow DOM boundaries
                detail: undefined, // No specific data passed in the original Stencil event (EventEmitter<void>)
            })
        );
    }

    // Stencil's @Watch('value')/@Watch('label')/@Watch('disabled') handleValueChange() { this.optionChanged.emit() }
    // is replaced by Lit's `updated` lifecycle method.
    override updated(changedProperties: Map<string | number | symbol, unknown>): void {
        super.updated(changedProperties); // Always call super.updated()

        // Check if any of the properties that were watched in Stencil have changed
        if (
            changedProperties.has('value') ||
            changedProperties.has('label') ||
            changedProperties.has('disabled')
        ) {
            this._dispatchOptionChanged(); // Emit the event if relevant properties have changed
        }
    }

    // The original `connectedCallback` binding `_handleSlotChange` and the `_handleSlotChange` method itself
    // appear to be unused/vestigial in the provided Stencil code, as there's no `<slot>` element
    // within `rux-option`'s template to listen to, and the method isn't otherwise invoked.
    // The core logic for notifying `RuxSelect` of changes is handled by the property watchers (now `updated`).

    // Stencil's `styleUrl: 'rux-option.css'` becomes `static styles = css``...``.
    // The content of `rux-option.css` should be inlined here.
    // Assuming typical host-level styling from Stencil components.
    static override styles = css`
        :host {
            display: block;
        }
    `;

    // Stencil's `render() { return (<Host ...>{this.label ? this.label : ''}</Host>) }`
    // becomes Lit's `render()` method returning an `html` tagged template literal.
    override render() {
        // The content directly within the <Host> tag in Stencil is rendered directly inside the shadow DOM.
        // The `class="rux-option"` attribute from `<Host>` would typically be handled by CSS `:host` selector.
        // The `disabled={this.disabled}` attribute is handled by `reflect: true` on the `disabled` property.
        return html`${this.label ? this.label : ''}`;
    }
}
