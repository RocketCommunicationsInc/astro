import { Component, h, Prop, Element, Event, EventEmitter } from '@stencil/core'

let id = 0

@Component({
    tag: 'rux-radio',
    styleUrl: 'rux-radio.scss',
    shadow: true,
})
export class RuxRadio {
    radioId = `rux-radio-${++id}`
    private radioGroup: HTMLRuxRadioGroupElement | null = null

    @Element() el!: HTMLRuxRadioElement

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
    @Prop({ reflect: true, mutable: true }) checked: boolean = false

    /**
     * Disables the radio via HTML disabled attribute. Radio takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored.
     */
    @Prop({ reflect: true }) disabled: boolean = false

    /**
     * Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     */
    @Event({ eventName: 'rux-change' }) ruxChange!: EventEmitter

    connectedCallback() {
        this.onChange = this.onChange.bind(this)
        this.radioGroup = this.el.closest('rux-radio-group')
        this.syncFromGroup = this.syncFromGroup.bind(this)
        if (this.radioGroup) {
            this.syncFromGroup()
            this.radioGroup.addEventListener('rux-change', this.syncFromGroup)
        }
    }

    disconnectedCallback() {
        if (this.radioGroup) {
            this.radioGroup.removeEventListener(
                'rux-change',
                this.syncFromGroup
            )
        }
    }

    /**
     * Sets checked property when the parent Radio Group value changes.
     */
    syncFromGroup() {
        if (this.radioGroup && this.radioGroup.value) {
            this.checked = this.radioGroup.value === this.value
        }
    }

    private onChange(e: Event): void {
        const target = e.target as HTMLInputElement
        this.checked = target.checked
        this.ruxChange.emit(this.checked)
    }

    render() {
        const { radioId, checked, disabled, name, value } = this

        return (
            <div class="rux-form-field">
                <div class="rux-radio">
                    <input
                        type="radio"
                        name={name}
                        id={radioId}
                        disabled={disabled}
                        checked={checked}
                        value={value}
                        onChange={this.onChange}
                    />
                    <label htmlFor={radioId}>
                        <slot></slot>
                    </label>
                </div>
            </div>
        )
    }
}
