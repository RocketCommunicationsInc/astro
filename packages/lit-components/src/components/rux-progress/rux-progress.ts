
import { LitElement, html, css, type PropertyValues, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import style from './rux-progress.scss?inline'

/**
 * @part progress - the native progress element
 * @part output - the native output element
 */
export class RuxProgress extends LitElement {
    static styles = css`${unsafeCSS(style)}`;

    // Internal private field for the value to allow for custom setter logic
    private _value: number = 0;

    /**
     * Current progress value between 0 and 100 (or the max, if defined below).
     */
    @property({ type: Number })
    set value(val: number | undefined) {
        const oldValue = this._value;
        // Ensure value is a number, default to 0 if undefined/NaN
        let newValue = val === undefined || isNaN(val) ? 0 : val;

        // Apply max constraint: value should not exceed max
        if (this.max !== undefined && this.max !== null && newValue > this.max) {
            newValue = this.max;
        }

        if (newValue !== oldValue) {
            this._value = newValue;
            // Request an update to trigger a re-render
            this.requestUpdate('value', oldValue);
        }
    }

    get value(): number {
        return this._value;
    }

    /**
     * For progress bars where progress bars have a maximum value greater or less than 100
     */
    @property({ type: Number })
    max: number = 100;

    /**
     * Hides the progress label
     */
    @property({ type: Boolean, attribute: 'hide-label' })
    hideLabel: boolean = false;

    // Use updated lifecycle to react to changes in 'max'
    // If 'max' changes, we need to re-evaluate the 'value' against the new max.
    protected updated(changedProperties: PropertyValues) {
        super.updated(changedProperties);
        if (changedProperties.has('max')) {
            // Re-run the value setter logic to ensure it respects the new max
            // By setting value to itself, it will go through the setter again
            // and apply the max constraint if needed.
            this.value = this._value;
        }
    }

    private _getProgressAsString(): string | number {
        // If max is not defined or is an empty string, just return the raw value.
        // The original code checked for !this.max, which would consider 0 as falsy.
        // Assuming 'max' will always be a number due to @property({type: Number}).
        if (this.max === undefined || this.max === null) {
            return this.value;
        }

        if (this.value === undefined || isNaN(this.value)) {
            return '0%';
        } else {
            return this.max === 100
                ? `${this.value}%`
                : `${this.value}/${this.max}`;
        }
    }

    render() {
        return html`
            <progress
                class="rux-progress"
                .value=${this.value}
                .max=${this.max}
                part="progress"
            ></progress>
            <output
                class="rux-progress__value"
                ?hidden=${this.hideLabel}
                part="output"
            >
                ${this._getProgressAsString()}
            </output>
            <slot></slot>
        `;
    }
}

// Define the custom element
declare global {
    interface HTMLElementTagNameMap {
        'rux-progress': RuxProgress;
    }
}

customElements.define('rux-progress', RuxProgress);
