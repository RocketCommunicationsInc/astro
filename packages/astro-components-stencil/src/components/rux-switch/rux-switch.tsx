import { Component, Event, EventEmitter, Prop, h, Element } from '@stencil/core'
import { renderHiddenInput } from '../../utils/utils'

let id = 0

@Component({
    tag: 'rux-switch',
    styleUrl: 'rux-switch.scss',
    shadow: true,
})
export class RuxSwitch {
    switchId = `rux-switch-${++id}`
    @Element() el!: HTMLRuxSwitchElement

    /**
     * The help or explanation text
     */
    @Prop({ attribute: 'help-text' }) helpText?: string

    /**
     * The validation error text
     */
    @Prop({ attribute: 'error-text' }) errorText?: string

    /**
     * The switch name
     */
    @Prop() name = ''

    /**
     * The switch value
     */
    @Prop({ reflect: true, mutable: true }) value: string = ''

    /**
     * Toggles checked state of a switch
     */
    @Prop({ reflect: true, mutable: true }) checked: boolean = false

    /**
     * Disables the switch via HTML disabled attribute. Switch takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored.
     */
    @Prop({ reflect: true }) disabled: boolean = false

    /**
     * Sets the switch as required
     */
    @Prop() required: boolean = false

    /**
     * Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     */
    @Event({ eventName: 'rux-change' }) ruxChange!: EventEmitter

    /**
     * Fired when an alteration to the input's value is committed by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     */
    @Event({ eventName: 'rux-input' }) ruxInput!: EventEmitter

    componentWillLoad() {
        this.onChange = this.onChange.bind(this)
        this.onInput = this.onInput.bind(this)
    }

    private onChange(e: Event): void {
        const target = e.target as HTMLInputElement
        this.checked = target.checked
        this.ruxChange.emit(this.checked)
    }

    private onInput(e: Event) {
        const target = e.target as HTMLInputElement
        this.value = target.value
        this.ruxInput.emit()
    }

    render() {
        const {
            switchId,
            checked,
            disabled,
            errorText,
            helpText,
            name,
            required,
            value,
        } = this

        renderHiddenInput(
            true,
            this.el,
            this.name,
            this.value ? this.value : 'on',
            this.disabled,
            this.checked
        )

        return (
            <div
                class="rux-form-field"
                aria-checked={`${checked}`}
                aria-hidden={disabled ? 'true' : null}
                role="switch"
            >
                <div
                    class={{
                        'rux-switch': true,
                        'rux-switch--has-error': required,
                        'rux-switch--has-text':
                            errorText !== undefined || helpText !== undefined,
                    }}
                >
                    <input
                        role="switch"
                        type="checkbox"
                        class="rux-switch__input"
                        name={name}
                        id={switchId}
                        disabled={disabled}
                        required={required}
                        checked={checked}
                        value={value}
                        aria-checked={`${checked}`}
                        onChange={this.onChange}
                        onInput={this.onInput}
                    />
                    <label
                        class="rux-switch__button"
                        htmlFor={switchId}
                    ></label>
                </div>
                {this.helpText && !this.errorText && (
                    <div class="rux-help-text">{helpText}</div>
                )}

                {this.errorText && (
                    <div class="rux-error-text">{errorText}</div>
                )}
            </div>
        )
    }
}
