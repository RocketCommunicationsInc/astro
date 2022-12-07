import {
    Component,
    h,
    Prop,
    Element,
    Event,
    EventEmitter,
    State,
    Watch,
    Host,
} from '@stencil/core'

import { hasSlot } from '../../utils/utils'

/**
 * @slot (default) - The radio label
 * @part field - the field of the radio
 * @part control - the control of the radio
 * @part label - the label of the radio
 */

@Component({
    tag: 'rux-radio',
    styleUrl: 'rux-radio.scss',
    shadow: true,
})
export class RuxRadio {
    //private radioId = `rux-radio-${++id}`
    private radioGroup: HTMLRuxRadioGroupElement | null = null

    @Element() el!: HTMLRuxRadioElement

    @State() hasLabelSlot = false

    /**
     * The radio name
     */
    @Prop() name = ''
    /**
     * The radio value
     */
    @Prop() value: string = ''

    /**
     * Toggles checked state of a radio
     */
    @Prop({ mutable: true }) checked: boolean = false

    @Watch('checked') handleCheckedChange() {
        this.el.setAttribute('aria-checked', this.checked ? 'true' : 'false')
    }

    /**
     * Disables the radio via HTML disabled attribute. Radio takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored.
     */
    @Prop({ reflect: true }) disabled: boolean = false

    /**
     * The radio label text. For HTML content, use the default slot instead.
     */
    @Prop() label?: string

    @Watch('label')
    handleLabelChange() {
        this._handleSlotChange()
    }

    /**
     * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
     */
    @Event({ eventName: 'ruxblur' }) ruxBlur!: EventEmitter

    connectedCallback() {
        //this._onChange = this._onChange.bind(this)
        this._handleSlotChange = this._handleSlotChange.bind(this)
        this.radioGroup = this.el.closest('rux-radio-group')
        this._syncFromGroup = this._syncFromGroup.bind(this)
        if (this.radioGroup) {
            this._syncFromGroup()
            this.radioGroup.addEventListener('ruxchange', this._syncFromGroup)
        }
    }

    componentWillLoad() {
        this._handleSlotChange()
    }

    disconnectedCallback() {
        if (this.radioGroup) {
            this.radioGroup.removeEventListener(
                'ruxchange',
                this._syncFromGroup
            )
        }
    }

    private _handleSlotChange() {
        this.hasLabelSlot = hasSlot(this.el)
    }

    /**
     * Sets checked property when the parent Radio Group value changes.
     */
    private _syncFromGroup() {
        if (this.radioGroup && this.radioGroup.value) {
            this.checked = this.radioGroup.value === this.value
        }
    }

    get hasLabel() {
        return this.label ? true : this.hasLabelSlot
    }

    render() {
        const { label, hasLabel } = this

        return (
            <Host
                role="radio"
                aria-checked={String(this.checked)}
                tabindex="-1"
            >
                <span part="field">
                    <span part="control">
                        <span part="tick"></span>
                    </span>
                    <span
                        part="label"
                        class={{
                            'rux-radio--no-label': !hasLabel,
                        }}
                    >
                        <slot>{label}</slot>
                    </span>
                </span>
            </Host>
        )
    }
}
