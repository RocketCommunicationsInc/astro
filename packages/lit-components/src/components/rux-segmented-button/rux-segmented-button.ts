
import { LitElement, html, css, type PropertyValues, unsafeCSS } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

import style from './rux-segmented-button.scss?inline'

// Define SegmentedButton interface, assuming it's not globally available.
export interface SegmentedButton {
    label: string
    selected?: boolean
    // Add other potential properties if they exist in the model
}

// Used to give each segmented button element a unique name, which allows for proper tabbing.
let name = 0

/**
 * @part ul - The unordered list element of the rux-segmented-button
 * @part li - The list item element of the rux-segmented-button
 * @part label - The label of rux-segmented-button
 */
@customElement('rux-segmented-button')
export class RuxSegmentedButton extends LitElement {
    // Replace Stencil's styleUrl with static styles.
    // You will need to copy the compiled CSS content from rux-segmented-button.scss here.
    static styles = css`
        ${unsafeCSS(style)}
    `

    // Private member for unique name
    private segBtnName = `rux-segmented-button-${++name}`

    /**
     * Items in this Array are the individual button segments.
     */
    @property({ type: Array }) data: SegmentedButton[] = []

    /**
     * When passed in on load, this selects the first button segment with a matching label. When the selected segment changes, this property updates with the currently selected value, which reflects back to the component attribute. If no button segment label matches this string, then no segment is selected. This value takes priority over setting selected boolean property on the items in the data array.
     */
    @property({ type: String, reflect: true }) selected: string = ''

    /**
     * Changes size of segmented button from small to medium or large.
     */
    @property({ type: String, reflect: true }) size?: 'small' | 'medium' | 'large'

    /**
     * Sets the disabled attribute.
     */
    @property({ type: Boolean, reflect: true }) disabled: boolean = false

    /**
     * Fires when the value property has changed and emits that value on the event.detail.
     */
    // No direct decorator equivalent for EventEmitter; we'll dispatch CustomEvent manually.

    // Lit's equivalent of Stencil's @Watch
    // `updated` is called after the component has updated its DOM.
    // changedProperties is a Map of property names to their old values.
    updated(changedProperties: PropertyValues) {
        if (changedProperties.has('selected')) {
            const oldSelected = changedProperties.get('selected') as string
            // Check if selected actually changed and isn't just initial render setup
            if (this.selected !== oldSelected) {
                this._setSelected(this.selected)
            }
        }

        if (changedProperties.has('data')) {
            const oldData = changedProperties.get('data') as SegmentedButton[]
            // Only react if data has actually changed (by reference)
            if (this.data !== oldData && this.data.length > 0) {
                const initialSelection = this.data.find(
                    (segment) => segment.selected
                )
                if (initialSelection) {
                    this._setSelected(initialSelection.label)
                } else {
                    // If no initial selection in data, and no `selected` prop set, select the first
                    if (!this.selected) {
                        this._setSelected(this.data[0].label)
                    } else {
                        // Ensure existing `selected` prop is respected even if data changed
                        this._setSelected(this.selected);
                    }
                }
            }
        }
    }

    connectedCallback() {
        super.connectedCallback() // Always call super.connectedCallback()

        // Initial selection logic (from original connectedCallback)
        // This runs only on initial connection.
        if (this.data.length > 0) {
            const initialSelection =
                this.data.find((segment) => segment.selected) || this.data[0]
            if (initialSelection && !this.selected) { // Only set if `selected` prop isn't already driving it
                this._setSelected(initialSelection.label)
            } else if (this.selected) { // Ensure `selected` prop takes priority
                this._setSelected(this.selected);
            }
        }
    }

    private _handleChange = (e: Event) => {
        const el = e.target as HTMLInputElement
        this._setSelected(el.value)
        // Dispatch CustomEvent manually
        this.dispatchEvent(
            new CustomEvent('ruxchange', {
                detail: el.value,
                bubbles: true, // Allows the event to bubble up through the DOM tree
                composed: true, // Allows the event to cross the shadow DOM boundary
            })
        )
    }

    private _setSelected(label: string) {
        // To ensure reactivity if `data` itself needs to be updated and trigger re-render
        // when its internal item `selected` property changes, we must create a new array.
        // However, since `this.selected` property is the primary source of truth for rendering,
        // and it's a reactive property, updating `this.selected` is sufficient.
        // The `data.map` part updates the original `data` array items in place,
        // which might not trigger a re-render if `data` is a Property.
        // If data changes visually based on `item.selected` directly, uncomment the next line.
        // this.data = this.data.map((item) => ({ ...item, selected: item.label === label }))

        // The current rendering logic (_isSelected) primarily relies on this.selected.
        // So, just setting this.selected is enough to trigger a re-render.
        this.selected = label
    }

    private _slugify(label: string) {
        label = label.replace(/^\s+|\s+$/g, '') // trim
        label = label.toLowerCase()

        label = label
            .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-') // collapse dashes

        return label
    }

    private _isSelected(label: string) {
        // The `selected` property is the source of truth for rendering.
        return this.selected === label
    }

    private _handleFocus = (e: FocusEvent) => {
        const target = e.currentTarget as HTMLInputElement
        // Check for :focus-visible support and apply class if element is truly focused visually
        if (target.matches(':focus-visible')) {
            target.closest('li')?.classList.add('--focused')
        }
    }

    private _handleBlur = (e: FocusEvent) => {
        const target = e.currentTarget as HTMLInputElement
        target.closest('li')?.classList.remove('--focused')
    }

    render() {
        return html`
            <ul
                class="rux-segmented-button
                    ${this.size === 'small' ? 'rux-segmented-button--small' : ''}
                    ${this.size === 'large' ? 'rux-segmented-button--large' : ''}"
                part="ul"
            >
                ${this.data.map(
                    (item) => html`
                        <li class="rux-segmented-button__segment" part="li">
                            <input
                                type="radio"
                                name=${this.segBtnName}
                                id=${this._slugify(item.label)}
                                value=${item.label}
                                ?checked=${this._isSelected(item.label)}
                                data-label=${item.label}
                                @change=${this._handleChange}
                                ?disabled=${this.disabled}
                                @focus=${this._handleFocus}
                                @blur=${this._handleBlur}
                            />
                            <label
                                for=${this._slugify(item.label)}
                                part="label"
                                class="rux-segmented-button-label
                                    ${this.size === 'small' ? 'rux-segmented-button-label--small' : ''}
                                    ${this.size === 'large' ? 'rux-segmented-button-label--large' : ''}"
                            >
                                ${item.label}
                            </label>
                        </li>
                    `
                )}
            </ul>
        `
    }
}
