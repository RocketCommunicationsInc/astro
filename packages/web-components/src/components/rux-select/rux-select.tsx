/* eslint react/jsx-no-bind: 0 */ // --> OFF
import {
    Component,
    Element,
    Host,
    h,
    Prop,
    Event,
    EventEmitter,
    Watch,
    Listen,
    State,
} from '@stencil/core'
import FormFieldMessage from '../../common/functional-components/FormFieldMessage/FormFieldMessage'
import { FormFieldInterface } from '../../common/interfaces.module'
import { hasSlot, renderHiddenInput } from '../../utils/utils'

/**
 * @slot (default) - The select options
 * @slot label - The select label
 */
@Component({
    tag: 'rux-select',
    styleUrl: 'rux-select.scss',
    shadow: true,
})
export class RuxSelect implements FormFieldInterface {
    private slotContainer?: HTMLElement
    private selectEl!: HTMLSelectElement

    @Element() el!: HTMLRuxSelectElement
    @State() hasLabelSlot = false

    /**
     * Disables the select menu via HTML disabled attribute. Select menu takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored.
     */
    @Prop({ reflect: true }) disabled: boolean = false

    /**
     * Sets the field as required
     */
    @Prop({ reflect: true }) required: boolean = false

    /**
     * The select label text. For HTML content, use the `label` slot instead.
     */
    @Prop() label?: string

    /**
     * Id for the Select Input
     */
    @Prop({ attribute: 'input-id' }) inputId?: string

    /**
     * Id for the Label
     */
    @Prop({ attribute: 'label-id' }) labelId?: string

    /**
     * Presentational only. Renders the Select Menu as invalid.
     */
    @Prop({ reflect: true }) invalid: boolean = false

    /**
     * Sets the Name of the Input Element
     */
    @Prop({ reflect: true }) name = ''

    /**
     * The value of the selected option
     */
    @Prop({ mutable: true, reflect: true }) value?: string

    /**
     * The help or explanation text
     */
    @Prop({ attribute: 'help-text' }) helpText?: string

    /**
     * The validation error text
     */
    @Prop({ attribute: 'error-text' }) errorText?: string

    /**
     * Event Emitted when the Value of the Select is Changed
     */
    @Event({ eventName: 'ruxchange' })
    ruxSelectChanged!: EventEmitter<void>

    /**
     * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
     */
    @Event({ eventName: 'ruxblur' }) ruxBlur!: EventEmitter

    @Watch('value')
    onValueChange() {
        this._syncOptionsFromValue()
    }

    @Watch('label')
    handleLabelChange() {
        this._handleLabelSlotChange()
    }

    @Listen('rux-option-group-changed')
    handleGroupChange() {
        this._syncOptionsToNativeSelect()
    }

    @Listen('rux-option-changed')
    handleOptionChange() {
        this._syncOptionsToNativeSelect()
    }

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
        this._handleLabelSlotChange = this._handleLabelSlotChange.bind(this)
    }

    componentWillLoad() {
        this._handleLabelSlotChange()
        if (this.value) {
            this._handleSlotChange()
        }
    }

    get hasLabel() {
        return this.label ? true : this.hasLabelSlot
    }

    private _onBlur = () => {
        this.ruxBlur.emit()
    }

    private _handleLabelSlotChange() {
        this.hasLabelSlot = hasSlot(this.el, 'label')
    }

    private async _handleSlotChange() {
        await this._syncOptionsToNativeSelect()
        await this._syncOptionsFromValue()
    }

    /**
     * The native select element doesn't play nicely with slots. If an <option> isn't a direct child element, it won't render properly.
     * As a solution, we expose a slot outside the shadow-DOMed <select> and then manually copy the contents inside the shadow DOM.
     *
     * A RuxOptionGroup component is required because onSlotchange won't fire if we use the native <optgroup> and we change just its options.
     * RuxOptionGroup exists only to fire a change event that we can listen to.
     */
    private _syncOptionsToNativeSelect() {
        const slot = this.slotContainer?.querySelector(
            'slot'
        ) as HTMLSlotElement

        if (slot) {
            this.selectEl.innerHTML = ''

            const assignedElements = slot.assignedElements({
                flatten: true,
            }) as HTMLElement[]

            assignedElements.map((item: any) => {
                const option = item
                if (option.tagName.toLowerCase() === 'rux-option') {
                    this._appendOptionToNativeSelect(
                        option.label,
                        option.value,
                        this.selectEl
                    )
                }

                if (option.tagName.toLowerCase() === 'rux-option-group') {
                    const children = [
                        ...Array.from(option.querySelectorAll('rux-option')),
                    ] as HTMLRuxOptionElement[]
                    this._appendOptGroupToNativeSelect(
                        option.label ? option.label : 'Group',
                        children
                    )
                }
            })
        }
        return Promise.resolve()
    }

    private _appendOptGroupToNativeSelect(
        groupName: string,
        children: HTMLRuxOptionElement[]
    ) {
        const group = Object.assign(document.createElement('optgroup'), {
            label: groupName,
        })

        children.map((option: any) => {
            this._appendOptionToNativeSelect(option.label, option.value, group)
            this.selectEl.appendChild(group)
        })

        this.selectEl.appendChild(group)
    }

    private _appendOptionToNativeSelect(
        label: string,
        value: string,
        target: HTMLSelectElement | HTMLOptGroupElement
    ) {
        const item = Object.assign(document.createElement('option'), {
            innerHTML: label ? label : '',
            value: value,
        })
        target.appendChild(item)
    }

    private _syncOptionsFromValue() {
        if (this.selectEl) {
            const options = [
                ...Array.from(this.selectEl.querySelectorAll('option')),
            ]
            options.map((option: HTMLOptionElement) => {
                option.selected = option.value === this.value
            })
        }
        return Promise.resolve()
    }

    private _onChange(e: Event) {
        const target = e.target as HTMLOptionElement
        this.value = target.value
        this.ruxSelectChanged.emit()
    }

    render() {
        const {
            disabled,
            required,
            label,
            inputId,
            labelId,
            invalid,
            name,
        } = this

        renderHiddenInput(true, this.el, this.name, this.value, this.disabled)
        return (
            <Host>
                <label
                    id={labelId}
                    htmlFor={inputId}
                    aria-hidden={this.hasLabel ? 'false' : 'true'}
                >
                    <span class={{ hidden: !this.hasLabel }}>
                        <slot
                            onSlotchange={this._handleLabelSlotChange}
                            name="label"
                        >
                            {label}
                        </slot>
                    </span>
                </label>
                <select
                    class={
                        'rux-select ' + (invalid ? 'rux-select-invalid' : '')
                    }
                    ref={(el) => (this.selectEl = el as HTMLSelectElement)}
                    id={inputId}
                    disabled={disabled}
                    required={required}
                    name={name}
                    onChange={(e) => this._onChange(e)}
                    onBlur={this._onBlur}
                ></select>
                <div
                    aria-hidden="true"
                    class="hidden"
                    ref={(el) => (this.slotContainer = el)}
                >
                    <slot onSlotchange={this._handleSlotChange}></slot>
                </div>
                <FormFieldMessage
                    errorText={this.errorText}
                    helpText={this.helpText}
                ></FormFieldMessage>
            </Host>
        )
    }
}
