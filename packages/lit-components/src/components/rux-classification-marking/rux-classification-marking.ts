// --- LitElement Imports ---
import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

// --- Original Imports ---
import { type Classification } from '../../common/commonTypes.module';
import { classMap } from 'lit/directives/class-map.js';
import { hasSlot } from '../../utils/utils'; // Make sure this utility works with an HTMLElement
import style from './rux-classification-marking.scss?inline'

/**
 * @part footer - the footer banner
 * @part tag - the container for the tag
 * @part header - the container for the header banner
 *
 */
@customElement('rux-classification-marking')
export class RuxClassificationMarking extends LitElement {
    // --- Properties (@Prop equivalent) ---
    /**
     * Defines which classification marking will be displayed.
     */
    @property({ type: String, reflect: true }) classification: Classification = 'unclassified';

    /**
     * Allows additional text labels to be added to the marking
     */
    @property({ type: String }) label?: string;

    /**
     * Declares the marking as a `tag` rather than the default banner style
     */
    @property({ type: Boolean, reflect: true }) tag: boolean = false;

    // --- State (@State equivalent) ---
    @state() private isWrapper: boolean = false;

    // --- Lifecycle and Event Listeners (@Listen, connectedCallback, disconnectedCallback equivalent) ---

    // Initial check for slot content when the element connects to the DOM
    // and setting up the slotchange listener.
    connectedCallback() {
        super.connectedCallback();
        // Listen for slotchange events on the shadow root itself
        this.shadowRoot?.addEventListener('slotchange', this._handleSlotChange);
        // Perform an initial check for slots
        this.isWrapper = hasSlot(this);
    }

    // Clean up the event listener when the element is removed from the DOM
    disconnectedCallback() {
        super.disconnectedCallback();
        this.shadowRoot?.removeEventListener('slotchange', this._handleSlotChange);
    }

    // Use an arrow function to automatically bind 'this'
    private _handleSlotChange = () => {
        this.isWrapper = hasSlot(this);
    };

    // --- Getter (remains the same) ---
    get type(): 'tag' | 'banner' {
        return this.tag ? 'tag' : 'banner';
    }

    // --- Private Method (remains the same) ---
    private _getDisplayData(): string {
        const markings = {
            banner: {
                cui: 'cui',
                controlled: 'controlled',
                confidential: 'confidential',
                secret: 'secret',
                'top-secret': 'top secret',
                'top-secret-sci': 'top secret//sci',
                unclassified: 'unclassified',
            },
            tag: {
                cui: 'cui',
                controlled: 'cui', // Note: original source has 'cui' for controlled tag
                confidential: 'c',
                secret: 's',
                'top-secret': 'ts',
                'top-secret-sci': 'TS//SCI',
                unclassified: 'u',
            },
        };

        let text;

        this.type === 'tag'
            ? (text = markings[this.type][this.classification]
                  ? markings[this.type][this.classification]
                  : 'u')
            : (text = markings[this.type][this.classification]
                  ? markings[this.type][this.classification]
                  : 'unclassified');

        return text;
    }

    // --- Styles (@Component styleUrl equivalent) ---
    // In LitElement, you include compiled CSS directly using the `css` tagged template literal.
    // You'll need to compile `rux-classification-marking.scss` to CSS and paste its content here.
    static styles = css`
        ${unsafeCSS(style)}
    `;

    // --- Render Method (h function equivalent) ---
    render() {
        const { isWrapper, label, tag, type } = this;

        // Lit's html tagged template literal is used instead of Stencil's h function.
        // `Host` is implicit; the content directly returned by render is the shadow DOM.
        // `classMap` directive is used for dynamic classes.
        return html`
            <div
                class=${classMap({
                    'rux-classification': true,
                    'rux-classification--tag': type === 'tag',
                    'rux-classification--banner': type === 'banner',
                })}
                part="tag header"
            >
                ${this._getDisplayData()} ${label}
            </div>
            <slot></slot>
            ${isWrapper && !tag
                ? html`
                      <div
                          class=${classMap({
                              'rux-classification': true,
                              'rux-classification--banner': type === 'banner',
                              'rux-classification--banner__footer':
                                  isWrapper === true,
                          })}
                          part="footer"
                      >
                          ${this._getDisplayData()} ${label}
                      </div>
                  `
                : ''}
        `;
    }
}
