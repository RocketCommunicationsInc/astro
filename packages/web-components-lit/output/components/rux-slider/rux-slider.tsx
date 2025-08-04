To convert the Stencil.js component to LitElement, we need to:
1.  Replace Stencil decorators (`@Component`, `@Prop`, `@State`, `@Element`, `@Event`, `@Watch`) with Lit equivalents (`@customElement`, `@property`, `@state`, `@query`).
2.  Translate Stencil's `h` (Hyperscript) `render()` method to Lit's `html` tagged template literals.
3.  Manage lifecycle methods (`componentWillLoad`, `connectedCallback`, `disconnectedCallback`, `updated`) according to Lit's lifecycle.
4.  Adapt event emitters (`EventEmitter`) to standard `CustomEvent` dispatching.
5.  Reimplement or adapt utility functions (`hasSlot`, `renderHiddenInput`) to work within Lit's paradigm, especially concerning DOM manipulation for form association.
6.  Convert SCSS to plain CSS for the `static styles` property.

Here's the converted code:

**1. `rux-slider.ts` (LitElement Component)**

```typescript
import { LitElement, html, css } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { styleMap } from 'lit/directives/style-map.js'

// --- Utility functions adapted for LitElement ---

// A simple interface definition if it's purely for type-checking and doesn't define behavior
interface FormFieldInterface {
    value: any // Assuming value can be any type based on context, but here it's number
    name: string
    disabled: boolean
    // Add other properties/methods from FormFieldInterface if they were actual implementations
}

/**
 * Checks if a slot has content (either an element with the slot attribute or direct text/elements for default slot).
 * @param el The host element to check for slotted content in its light DOM.
 * @param name The name of the slot. If undefined, checks for the default slot.
 */
const hasSlot = (el: HTMLElement, name?: string): boolean => {
    if (name) {
        // For named slots, check if any child element has the slot attribute
        return !!el.querySelector(`[slot="${name}"]`)
    } else {
        // For the default slot (unnamed), check if there are any child nodes
        // that are not elements with a 'slot' attribute (assigned to other slots)
        // and are not just whitespace text nodes.
        return Array.from(el.childNodes).some((node) => {
            if (node.nodeType === Node.TEXT_NODE) {
                return (node.textContent || '').trim().length > 0
            }
            if (node.nodeType === Node.ELEMENT_NODE) {
                return !(node as HTMLElement).hasAttribute('slot')
            }
            return false
        })
    }
}

// Map to keep track of hidden inputs for each component instance, preventing conflicts and aiding cleanup
const hiddenInputMap = new WeakMap<
    HTMLElement,
    Map<string, HTMLInputElement>
>()

/**
 * Renders or removes a hidden input in the light DOM of the host element.
 * This is crucial for custom elements to participate in native HTML forms.
 * @param shouldRender True to render/update, false to remove.
 * @param hostEl The custom element instance to which the hidden input should be attached.
 * @param name The 'name' attribute for the hidden input.
 * @param value The 'value' attribute for the hidden input.
 * @param disabled The 'disabled' attribute for the hidden input.
 */
const renderHiddenInput = (
    shouldRender: boolean,
    hostEl: HTMLElement,
    name: string,
    value: string,
    disabled: boolean
) => {
    if (!name) return // Name is required for form submission

    let hostInputs = hiddenInputMap.get(hostEl)
    if (!hostInputs) {
        hostInputs = new Map<string, HTMLInputElement>()
        hiddenInputMap.set(hostEl, hostInputs)
    }

    let hiddenInput = hostInputs.get(name)

    if (shouldRender) {
        if (!hiddenInput) {
            hiddenInput = document.createElement('input')
            hiddenInput.type = 'hidden'
            // Append to the host element's light DOM so it's discoverable by native forms
            hostEl.appendChild(hiddenInput)
            hostInputs.set(name, hiddenInput)
        }
        hiddenInput.name = name
        hiddenInput.value = value
        hiddenInput.disabled = disabled
    } else {
        if (hiddenInput) {
            hiddenInput.remove()
            hostInputs.delete(name)
        }
    }
}

const renderHiddenSliderInput = renderHiddenInput // Alias, as functionality is identical

let id = 0

/**
 * @slot label - The slider label
 * @slot help-text - the help text
 * @slot error-text - the error text
 * @part error-text - The error text element
 * @part form-field - The form-field wrapper container
 * @part help-text - The help text element
 * @part input - The input element
 * @part label - The input label when `label` prop is set
 * @part tick-container - The container of the tick mark and axis-label
 * @part tick - the tick mark
 * @part axis-label - the axis label
 */
@customElement('rux-slider')
export class RuxSlider extends LitElement implements FormFieldInterface {
    // Unique ID for internal input elements
    private sliderId = `rux-slider-${++id}`

    // Internal state properties that trigger re-renders
    @state() private hasLabelSlot = false
    @state() private hasHelpSlot = false
    @state() private hasErrorSlot = false

    /**
     * Min value of the slider.
     */
    @property({ type: Number }) min: number = 0

    /**
     * Max value of slider.
     */
    @property({ type: Number }) max: number = 100

    /**
     * Step amount of slider value.
     */
    @property({ type: Number }) step: number = 1

    /**
     * Current value of the slider. The default value is halfway between the specified minimum and maximum.
     * In dual-range, this value should be higher than the min-val.
     */
    @property({ type: Number, reflect: true }) value: number =
        (this.max - this.min) / 2 + this.min // Initial value computation

    /**
     * Shows tick marks and labels in the order provided and aligns evenly based on the length.
     */
    @property({ type: Array, attribute: 'axis-labels' })
    axisLabels: string[] = []

    /**
     * Hides labels and only shows tick marks if axis-labels is provided.
     */
    @property({ type: Boolean, attribute: 'ticks-only' })
    ticksOnly: boolean = false

    /**
     * Determines if the slider is disabled.
     */
    @property({ type: Boolean, reflect: true }) disabled: boolean = false

    /**
     * Name of the Input Field for Form Submission
     */
    @property({ type: String }) name: string = ''

    /**
     * The slider label text. For HTML content, use the `label` slot instead.
     */
    @property({ type: String }) label?: string

    /**
     * The help or explanation text
     */
    @property({ type: String, attribute: 'help-text' }) helpText?: string

    /**
     * The validation error text
     */
    @property({ type: String, attribute: 'error-text' }) errorText?: string

    /**
     * If present, creates a dual-range slider by adding a second thumb.
     */
    @property({ type: Number, attribute: 'min-val', reflect: true })
    minVal?: number

    /**
     * In a dual-range slider, disables thumb swapping.
     */
    @property({ type: Boolean, reflect: true }) strict: boolean = false

    // Lit's `static styles` replaces Stencil's `styleUrl`.
    // The SCSS content needs to be converted to plain CSS and placed here.
    static styles = css`
        :host {
            --_slider-value-percent: 0%; /* Represents the 'value' thumb's position for single slider or higher thumb for dual */
            --_start-value-percent: 0%; /* Represents the 'minVal' thumb's position for dual slider */
            display: block;
            contain: content; /* Helps with layout and rendering performance */
            --_slider-top: auto; /* Default, adjusted by browser detection */
            --slider-tick-padding-top: 5px; /* Default tick padding */
            --slider-thumb-size: 16px; /* Default thumb size */

            /* Design Tokens (Examples - replace with actual tokens if available) */
            --label-color: #fff;
            --track-color: #555;
            --thumb-color: #007bff;
            --active-track-color: #007bff;
            --disabled-thumb-color: #999;
            --disabled-active-track-color: #777;
            --disabled-track-color: #444;
            --tick-color: #aaa;
            --axis-label-color: #aaa;
            --error-color: #ff4d4f;
            --help-text-color: #aaa;
        }

        .rux-form-field {
            display: flex;
            flex-direction: column;
            gap: 8px; /* Spacing between label, slider, and help/error text */
        }

        .rux-input-label {
            font-size: 14px;
            color: var(--label-color);
            cursor: default;
        }

        .rux-slider {
            position: relative;
            height: var(--slider-thumb-size); /* Height accommodates thumb */
            display: flex;
            align-items: center; /* Vertically center the track and thumbs */
            margin-top: var(--_slider-top); /* Browser specific top adjustment */
        }

        .rux-range {
            -webkit-appearance: none; /* Hide default browser styling */
            appearance: none;
            width: 100%;
            height: 4px; /* Track thickness */
            background: var(--track-color);
            border-radius: 2px;
            outline: none;
            position: absolute; /* Allows stacking for dual-range */
            pointer-events: all; /* Allows click events on the track */
            margin: 0; /* Remove default margin */
            padding: 0; /* Remove default padding */
            z-index: 2; /* Thumbs are typically z-index 3, overlay z-index 1 */
        }

        /* Thumb styling for Webkit (Chrome, Safari, Edge) */
        .rux-range::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: var(--slider-thumb-size);
            height: var(--slider-thumb-size);
            border-radius: 50%;
            background: var(--thumb-color);
            cursor: grab;
            position: relative;
            z-index: 3; /* Ensure thumb is above track and overlay */
            box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2); /* Subtle outline */
        }

        /* Thumb styling for Firefox */
        .rux-range::-moz-range-thumb {
            width: var(--slider-thumb-size);
            height: var(--slider-thumb-size);
            border-radius: 50%;
            background: var(--thumb-color);
            cursor: grab;
            position: relative;
            z-index: 3;
            box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
        }

        /* Thumb styling for Internet Explorer (if still supported/needed) */
        .rux-range::-ms-thumb {
            width: var(--slider-thumb-size);
            height: var(--slider-thumb-size);
            border-radius: 50%;
            background: var(--thumb-color);
            cursor: grab;
            position: relative;
            z-index: 3;
            box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
        }

        /* Dual-range specific styles */
        .rux-slider--range .rux-range--dual {
            background: transparent; /* Hide default track for dual ranges */
        }

        .rux-slider--range .rux-range-overlay {
            position: absolute;
            height: 4px; /* Matches track thickness */
            border-radius: 2px;
            background: var(--active-track-color);
            left: var(--_start-value-percent); /* Position from left thumb */
            width: calc(
                var(--_slider-value-percent) - var(--_start-value-percent)
            ); /* Width between thumbs */
            z-index: 1; /* Below thumbs */
            pointer-events: none; /* Make overlay non-interactive to allow clicking track behind */
        }

        /* Disabled state */
        :host([disabled]) {
            opacity: 0.7;
            cursor: not-allowed;
        }
        :host([disabled]) .rux-range {
            cursor: not-allowed;
            background: var(--disabled-track-color);
        }
        :host([disabled]) .rux-range::-webkit-slider-thumb,
        :host([disabled]) .rux-range::-moz-range-thumb,
        :host([disabled]) .rux-range::-ms-thumb {
            background: var(--disabled-thumb-color);
            cursor: not-allowed;
            box-shadow: none;
        }
        :host([disabled]) .rux-slider--range .rux-range-overlay {
            background: var(--disabled-active-track-color);
        }

        /* Tick marks and labels */
        datalist {
            display: grid;
            width: 100%;
            margin-top: calc(
                var(--slider-thumb-size) / 2 + 8px
            ); /* Space below slider thumb */
            position: relative;
            /* gridTemplateColumns set dynamically via JS styleMap */
        }
        .tick-label {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
        }
        .tick {
            width: 2px;
            height: 8px;
            background: var(--tick-color);
            margin-bottom: var(
                --slider-tick-padding-top
            ); /* Padding above label */
            position: absolute;
            top: -12px; /* Adjust vertical position of ticks */
        }
        .axis-label {
            font-size: 12px;
            color: var(--axis-label-color);
            text-align: center;
            position: absolute;
            top: 0px; /* Position relative to tick-label container */
            transform: translateX(-50%); /* Center label under tick */
            white-space: nowrap; /* Prevent label wrapping */
            left: 50%;
        }

        /* Browser specific adjustments */
        /* Safari needs 0px top for the thumb to look normal and different tick padding */
        :host(.safari) {
            --_slider-top: 0px;
            --slider-tick-padding-top: 7px;
        }
        /* Firefox thumb is sometimes too large, tick padding not enough */
        :host(.firefox) {
            --slider-tick-padding-top: 3px;
        }

        /* Error and Help Text */
        .rux-error-text,
        .rux-help-text {
            display: flex;
            align-items: center;
            gap: 4px;
            font-size: 12px;
        }
        .rux-error-text {
            color: var(--error-color);
        }
        .rux-help-text {
            color: var(--help-text-color);
        }
        .hidden {
            display: none !important;
        }
    `

    constructor() {
        super()
        // Ensure initial value is within min/max bounds
        this.value = Math.max(this.min, Math.min(this.value, this.max))
        if (this.minVal !== undefined) {
            this.minVal = Math.max(
                this.min,
                Math.min(this.minVal, this.max)
            )
        }
    }

    // Lit's connectedCallback and firstUpdated replace Stencil's componentWillLoad
    connectedCallback(): void {
        super.connectedCallback()
        // Add class to host element for browser-specific CSS adjustments
        this._getBrowser(navigator.userAgent.toLowerCase())
        // Listen for slot changes to update state
        this.addEventListener('slotchange', this._handleSlotChange)
    }

    firstUpdated(
        changedProperties: Map<string | number | symbol, unknown>
    ): void {
        // Initial setup for value percentage and slot content check
        this._setValuePercent()
        this._handleSlotChange()
        // Ensure hidden inputs are rendered on first update
        this._renderHiddenInputs()
    }

    // Lit's disconnectedCallback
    disconnectedCallback(): void {
        super.disconnectedCallback()
        // Remove slotchange listener to prevent memory leaks
        this.removeEventListener('slotchange', this._handleSlotChange)
        // Cleanup hidden inputs when the component is removed from the DOM
        renderHiddenInput(false, this, this.name, '', true)
        renderHiddenSliderInput(false, this, `${this.name}-min-val`, '', true)
    }

    // Lit's `updated` lifecycle method replaces Stencil's `@Watch` decorators.
    // It is called after the component's properties have changed and the component has re-rendered.
    updated(changedProperties: Map<string | number | symbol, unknown>): void {
        super.updated(changedProperties)

        // Equivalent to Stencil's @Watch('label')
        if (changedProperties.has('label')) {
            this._handleSlotChange()
        }

        // Equivalent to Stencil's @Watch('value') @Watch('min') @Watch('max') @Watch('minVal')
        if (
            changedProperties.has('value') ||
            changedProperties.has('min') ||
            changedProperties.has('max') ||
            changedProperties.has('minVal')
        ) {
            this._setValuePercent()
        }

        // Equivalent to Stencil's @Watch('step')
        if (changedProperties.has('step')) {
            // Value needs to be a multiple of step, otherwise slider begins to look wrong
            this.value = this._closestMultiple(this.value)
            if (this.minVal !== undefined)
                this.minVal = this._closestMultiple(this.minVal)
        }

        // Re-render hidden inputs if relevant properties change
        if (
            changedProperties.has('value') ||
            changedProperties.has('minVal') ||
            changedProperties.has('name') ||
            changedProperties.has('disabled')
        ) {
            this._renderHiddenInputs()
        }
    }

    get hasLabel() {
        return this.label ? true : this.hasLabelSlot
    }

    /**
     * Returns the closest multiple of two given numbers.
     */
    private _closestMultiple(x: number): number {
        return Math.round(x / this.step) * this.step
    }

    /**
     * Calculates the percentage position of a given value within the slider's min/max range.
     * @param val The value to convert to a percentage.
     */
    private _calculatePercentage(val: number): number {
        return ((val - this.min) / (this.max - this.min)) * 100
    }

    /**
     * Sets the --_slider-value-percent and --_start-value-percent CSS variables
     * to visually represent the slider's current value(s).
     */
    private _setValuePercent() {
        // If minVal is defined, we're in dual-range mode.
        if (this.minVal !== undefined) {
            const valPercent = this._calculatePercentage(this.value)
            const minValPercent = this._calculatePercentage(this.minVal)

            // Ensure correct start/end for the filled track regardless of thumb positions
            const startPercent = Math.min(valPercent, minValPercent)
            const endPercent = Math.max(valPercent, minValPercent)

            this.style.setProperty('--_start-value-percent', `${startPercent}%`)
            this.style.setProperty('--_slider-value-percent', `${endPercent}%`)
        } else {
            // Single-range mode
            const dif = this._calculatePercentage(this.value)
            this.style.setProperty('--_slider-value-percent', `${dif}%`)
        }
    }

    // Event handlers for input elements. Using arrow functions automatically binds `this`.
    private _onInput = (e: Event) => {
        const target = e.target as HTMLInputElement
        const newValue = parseFloat(target.value)

        if (this.minVal !== undefined && newValue <= this.minVal && this.strict) {
            // If strict mode and value attempts to pass minVal, cap it at minVal
            this.value = this.minVal
            target.value = this.value.toString() // Update input element's visual position
        } else {
            this.value = newValue
        }
        // Emit custom event
        this.dispatchEvent(
            new CustomEvent('ruxinput', { bubbles: true, composed: true })
        )
    }

    private _onMinValInput = (e: Event) => {
        const target = e.target as HTMLInputElement
        const newMinVal = parseFloat(target.value)

        if (this.value !== undefined && newMinVal >= this.value && this.strict) {
            // If strict mode and minVal attempts to pass value, cap it at value
            this.minVal = this.value
            target.value = this.minVal.toString() // Update input element's visual position
        } else {
            this.minVal = newMinVal
        }
        // Emit custom event
        this.dispatchEvent(
            new CustomEvent('ruxinput', { bubbles: true, composed: true })
        )
    }

    private _onChange = () => {
        // Emit custom event
        this.dispatchEvent(
            new CustomEvent('ruxchange', { bubbles: true, composed: true })
        )
    }

    private _onBlur = () => {
        // Emit custom event
        this.dispatchEvent(
            new CustomEvent('ruxblur', { bubbles: true, composed: true })
        )
    }

    /**
     * Adds browser-specific classes to the host element for CSS adjustments.
     * @param ua The user agent string.
     */
    private _getBrowser(ua: string) {
        if (ua.includes('safari') && !ua.includes('chrome')) {
            this.classList.add('safari')
        }
        if (ua.includes('firefox')) {
            this.classList.add('firefox')
        }
    }

    /**
     * Updates the `hasLabelSlot`, `hasHelpSlot`, and `hasErrorSlot` state variables
     * based on whether content is slotted into the respective slots.
     */
    private _handleSlotChange = () => {
        // `this` refers to the host element, which is where the light DOM slots reside
        this.hasLabelSlot = hasSlot(this, 'label')
        this.hasErrorSlot = hasSlot(this, 'error-text')
        this.hasHelpSlot = hasSlot(this, 'help-text')
        // Request update to re-render if slot content state changes
        this.requestUpdate()
    }

    /**
     * Calculates the width for each tick mark section in the datalist grid.
     */
    private _getTickWidths(): number {
        if (this.axisLabels && this.axisLabels.length > 1) {
            return 100 / (this.axisLabels.length - 1)
        }
        return 0 // No ticks if less than 2 labels
    }

    /**
     * Handles clicks on the slider track (for dual-range mode).
     * Moves the closest thumb to the click position.
     * @param e The mouse event from the click on the track container.
     */
    private _handleTrackClick = (e: MouseEvent) => {
        // Do nothing if not in dual-range mode or if disabled.
        if (this.minVal === undefined || this.disabled) return

        const target = e.target as HTMLElement
        // If a thumb or the overlay bar was clicked directly, let the input's default behavior handle it.
        // The overlay bar has `pointer-events: none` but it's good to be explicit.
        if (
            target.nodeName === 'INPUT' ||
            target.classList.contains('rux-range-overlay')
        ) {
            return
        }

        const currentTarget = e.currentTarget as HTMLElement
        const sliderWidth = currentTarget.offsetWidth
        const sliderBounds = currentTarget.getBoundingClientRect()

        // Calculate click position relative to the slider's left edge
        const clickPosition = e.clientX - sliderBounds.left

        // Convert pixel position to a value within the slider's min/max range
        let newValue = this.min + (clickPosition / sliderWidth) * (this.max - this.min)
        newValue = this._closestMultiple(newValue) // Snap to the nearest step increment

        // Ensure newValue stays within the min/max bounds
        newValue = Math.max(this.min, Math.min(newValue, this.max))

        // Get current effective thumb values
        const currentMinVal = this.minVal
        const currentMaxVal = this.value

        // Calculate distances to both thumbs from the clicked position
        const diffToMinVal = Math.abs(newValue - currentMinVal)
        const diffToMaxVal = Math.abs(newValue - currentMaxVal)

        // Determine which thumb is closer and move it
        if (diffToMinVal < diffToMaxVal) {
            // Move the minVal thumb
            if (this.strict && newValue > currentMaxVal) {
                // In strict mode, prevent minVal from passing currentMaxVal
                this.minVal = currentMaxVal
            } else {
                this.minVal = newValue
            }
        } else {
            // Move the value thumb
            if (this.strict && newValue < currentMinVal) {
                // In strict mode, prevent value from passing currentMinVal
                this.value = currentMinVal
            } else {
                this.value = newValue
            }
        }
        // Emit input event after changing value
        this.dispatchEvent(
            new CustomEvent('ruxinput', { bubbles: true, composed: true })
        )
    }

    /**
     * Manages the hidden input elements in the light DOM for form submission.
     * Called in `updated` to ensure hidden inputs reflect current component state.
     */
    private _renderHiddenInputs() {
        renderHiddenInput(
            true,
            this,
            this.name,
            JSON.stringify(this.value),
            this.disabled
        )
        if (this.minVal !== undefined) {
            renderHiddenSliderInput(
                true,
                this,
                this.name ? `${this.name}-min-val` : '',
                JSON.stringify(this.minVal),
                this.disabled
            )
        } else {
            // If minVal becomes undefined, ensure the corresponding hidden input is removed
            renderHiddenSliderInput(
                false,
                this,
                this.name ? `${this.name}-min-val` : '',
                '', // Value doesn't matter for removal
                true // Disabled state doesn't matter for removal
            )
        }
    }

    render() {
        // Dynamic styles for datalist grid, based on axisLabels length
        const datalistStyles = styleMap({
            gridTemplateColumns: `[tick] repeat(${
                this.axisLabels.length > 1 ? this.axisLabels.length - 1 : 0
            }, ${this._getTickWidths()}%)`,
        })

        return html`
            <div class="rux-form-field" part="form-field">
                ${this.hasLabel
                    ? html`
                          <label
                              class=${classMap({
                                  'rux-input-label': true,
                                  hidden: !this.hasLabel,
                              })}
                              aria-hidden=${this.hasLabel ? 'false' : 'true'}
                              for=${this.sliderId}
                              part="label"
                          >
                              <slot name="label">${this.label}</slot>
                          </label>
                      `
                    : null}

                <div
                    class=${classMap({
                        'rux-slider': true,
                        'rux-slider--range': this.minVal !== undefined,
                    })}
                    @click=${this._handleTrackClick}
                >
                    ${this.minVal !== undefined
                        ? html`
                              <input
                                  type="range"
                                  class="rux-range rux-range--dual"
                                  @input=${this._onMinValInput}
                                  @change=${this._onChange}
                                  ?disabled=${this.disabled}
                                  min=${this.min}
                                  max=${this.max}
                                  step=${this.step}
                                  .value=${this.minVal.toString()}
                                  @blur=${this._onBlur}
                              />
                          `
                        : null}
                    <input
                        id=${this.sliderId}
                        @input=${this._onInput}
                        @change=${this._onChange}
                        type="range"
                        class=${classMap({
                            'rux-range': true,
                            'rux-range--dual': this.minVal !== undefined,
                        })}
                        min=${this.min}
                        max=${this.max}
                        step=${this.step}
                        .value=${this.value.toString()}
                        ?disabled=${this.disabled}
                        aria-label="slider"
                        aria-disabled=${this.disabled ? 'true' : 'false'}
                        @blur=${this._onBlur}
                        part="input"
                    />
                    ${this.minVal !== undefined
                        ? html`<div class="rux-range-overlay"></div>`
                        : null}
                </div>

                ${this.axisLabels.length > 0
                    ? html`
                          <datalist id="steplist" style=${datalistStyles}>
                              ${this.axisLabels.map(
                                  (label) => html`
                                      <div
                                          class="tick-label"
                                          part="tick-container"
                                      >
                                          <div class="tick" part="tick"></div>
                                          ${this.ticksOnly
                                              ? null
                                              : html`
                                                    <div
                                                        class="axis-label"
                                                        part="axis-label"
                                                    >
                                                        ${label}
                                                    </div>
                                                `}
                                      </div>
                                  `
                              )}
                          </datalist>
                      `
                    : null}
            </div>

            <div
                class=${classMap({
                    'rux-error-text': !!this.errorText || this.hasErrorSlot,
                    hidden: !this.errorText && !this.hasErrorSlot,
                })}
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
                class=${classMap({
                    'rux-help-text':
                        (!!this.helpText || this.hasHelpSlot) &&
                        (!this.errorText || !this.hasErrorSlot),
                    hidden:
                        (!this.helpText && !this.hasHelpSlot) ||
                        !!this.errorText ||
                        this.hasErrorSlot,
                })}
                part="help-text"
            >
                <slot name="help-text" @slotchange=${this._handleSlotChange}>
                    ${this.helpText}
                </slot>
            </div>
        `
    }
}
```