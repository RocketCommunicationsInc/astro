
import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import type { StatusTags } from '../../common/commonTypes.module';
import style from './rux-tag.scss?inline';

const statusMap = {
    unknown: 'UNK',
    pass: 'PASS',
    fail: 'FAIL',
};

/**
 * @slot (default) - The text for the rux-tag
 * @part container - The container of the rux-tag's text
 */
@customElement('rux-tag')
export class RuxTag extends LitElement {
    /**
     *  Used to display a status of pass, fail, or unknown. If no status is provided or the provided status is not an accepted status type, the default is unknown.
     */
    @property({ type: String, reflect: true }) status: StatusTags = 'unknown';

    @state() private _hasSlot: boolean = false;

    // Place the content of your rux-tag.scss here
    // Or if your build process supports it, you can import it like:
    // import ruxTagStyles from './rux-tag.scss?inline';
    // static styles = css`${ruxTagStyles}`;
    static styles = css`
        ${unsafeCSS(style)}
    `;

    // Called after the component's first update and rendering.
    override firstUpdated() {
        this._checkSlotContent();
    }

    // Arrow function to maintain 'this' context, good for event handlers
    private _handleSlotChange = () => {
        this._checkSlotContent();
    };

    /**
     * Checks if the default slot has any assigned nodes (i.e., if content has been placed inside the tag).
     */
    private _checkSlotContent() {
        const slot = this.shadowRoot?.querySelector('slot');
        if (slot) {
            // assignedNodes({ flatten: true }) gets all nodes, including text nodes, from nested slots
            const assignedNodes = slot.assignedNodes({ flatten: true });
            this._hasSlot = assignedNodes.length > 0;
        } else {
            this._hasSlot = false;
        }
    }

    private _getValidStatus(): string | undefined {
        if (this.status) {
            // If it is a valid status, return its mapped value
            if (statusMap[this.status]) {
                return statusMap[this.status];
            }
            // If it's not a valid status, return the default unknown status value
            else {
                return statusMap['unknown'];
            }
        }
        // If status prop itself is not provided (e.g., undefined or null)
        return statusMap['unknown']; // Or undefined if you prefer no text for truly undefined
    }

    render() {
        return html`
            <div
                part="container"
                class=${classMap({
                    // The 'is-undefined' class is applied if the 'status' prop's value
                    // does NOT have a corresponding entry in the 'statusMap'.
                    'is-undefined': !statusMap[this.status!],
                })}
            >
                <slot @slotchange=${this._handleSlotChange}></slot>
                ${!this._hasSlot ? this._getValidStatus() : null}
            </div>
        `;
    }
}
