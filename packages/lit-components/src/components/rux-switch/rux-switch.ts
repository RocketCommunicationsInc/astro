import { LitElement, css, html, unsafeCSS } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

import { classMap } from 'lit/directives/class-map.js'
import { ifDefined } from 'lit/directives/if-defined.js' // For conditionally defining attributes
import style from './rux-switch.scss?inline'

let id = 0

/**
 * @slot label - The switch label
 * @part switch - the track (::before) and the button (::after) on rux-switch
 * @part label - the label of switch
 */
@customElement('rux-switch')
export class RuxSwitch extends LitElement {
    constructor() {
        super()
        this.classList.add('rux-form-field')
        this.setAttribute('role', 'switch')
    }

    private switchId = `rux-switch-${++id}`

    @state()
    private _hasLabelSlot = false

    /**
     * The switch name
     */
    @property({ type: String })
    name = ''

    /**
     * The switch value
     */
    @property({ type: String, reflect: true })
    value: string = ''

    /**
     * Toggles checked state of a switch
     */
    @property({ type: Boolean, reflect: true })
    checked: boolean = false

    /**
     * Disables the switch via HTML disabled attribute. Switch takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored.
     */
    @property({ type: Boolean, reflect: true })
    disabled: boolean = false

    /**
     * The switch label. For HTML content, use the `label` slot instead.
     */
    @property({ type: String })
    label?: string

    // LitElement's lifecycle method, similar to Stencil's componentWillLoad/componentDidLoad for initial setup.
    firstUpdated() {
        // Perform an initial check for slotted content.
        // This is necessary because slotchange might not fire immediately if content is static.
        const labelSlot = this.renderRoot?.querySelector('slot[name="label"]') as HTMLSlotElement | null
        if (labelSlot) {
            this._hasLabelSlot = this._checkSlotContent(labelSlot)
        }
    }

    static styles = css`
        ${unsafeCSS(style)}
    `

    /**
     * Determines if a label should be displayed.
     * A label exists if the `label` prop is set and not empty, OR if there's content in the `label` slot.
     */
    get hasLabel(): boolean {
        return (this.label !== undefined && this.label.trim() !== '') || this._hasLabelSlot
    }

    /**
     * Utility to check if a slot has meaningful content (not just empty text nodes or comments).
     * @param slot The HTMLSlotElement to check.
     * @returns True if the slot has content, false otherwise.
     */
    private _checkSlotContent(slot: HTMLSlotElement): boolean {
        return slot.assignedNodes({ flatten: true }).some((node) => node.nodeType === Node.ELEMENT_NODE || (node.nodeType === Node.TEXT_NODE && node.textContent?.trim() !== ''))
    }

    /**
     * Handler for the `slotchange` event on the label slot.
     * Updates the `_hasLabelSlot` state based on whether the slot contains content.
     */
    private _handleSlotChange(e: Event) {
        const slot = e.target as HTMLSlotElement
        this._hasLabelSlot = this._checkSlotContent(slot)
    }

    /**
     * Handles the `change` event from the native input.
     * Updates the `checked` property and dispatches the `ruxchange` event.
     */
    private _onChange(e: Event): void {
        const target = e.target as HTMLInputElement
        this.checked = target.checked // Update the component's checked property, triggering re-render

        /**
         * Fired when the value of the input changes and emits that value on the event.detail.
         * @event ruxchange
         * @detail {boolean} checkedState - The checked state of the switch.
         */
        this.dispatchEvent(
            new CustomEvent('ruxchange', {
                detail: this.checked,
                bubbles: true,
                composed: true,
            })
        )
    }

    /**
     * Handles the `input` event from the native input.
     * Updates the `value` property and dispatches the `ruxinput` event.
     */
    private _onInput(e: Event) {
        console.log(e)
        const target = e.target as HTMLInputElement
        this.value = target.value // Update the component's value property, triggering re-render

        /**
         * Fired when an alteration to the input's value is committed by the user
         * @event ruxinput
         */
        this.dispatchEvent(
            new CustomEvent('ruxinput', {
                bubbles: true,
                composed: true,
            })
        )
    }

    /**
     * Handles the `blur` event from the native input.
     * Dispatches the `ruxblur` event.
     */
    private _onBlur = () => {
        /**
         * Fired when an element has lost focus
         * @event ruxblur
         */
        this.dispatchEvent(
            new CustomEvent('ruxblur', {
                bubbles: true,
                composed: true,
            })
        )
    }

    render() {
        const { switchId, checked, disabled, name, value } = this

        // Determine the effective value for the input. If `value` prop is not set, default to 'on'.
        const inputValue = value || 'on'

        this.ariaChecked = `${checked}`
        this.ariaHidden = disabled ? 'true' : null

        return html`
            <div class="rux-switch">
                <input
                    type="checkbox"
                    class="rux-switch__input"
                    name="${name}"
                    id="${switchId}"
                    ?disabled="${disabled}"
                    ?checked="${checked}"
                    value="${inputValue}"
                    aria-checked="${checked}"
                    @change="${this._onChange}"
                    @input="${this._onInput}"
                    @blur="${this._onBlur}"
                />
                <label class="rux-switch__button" for="${switchId}" part="switch">
                    <span
                        class=${classMap({
                            'rux-switch__label': true,
                            hidden: !this.hasLabel,
                        })}
                        part="label"
                    >
                        <slot name="label" @slotchange="${this._handleSlotChange}"> ${this.label} </slot>
                    </span>
                </label>
            </div>
            ${name ? html` <input type="hidden" name="${name}" value="${inputValue}" ?disabled="${disabled}" /> ` : ''}
        `
    }
}
