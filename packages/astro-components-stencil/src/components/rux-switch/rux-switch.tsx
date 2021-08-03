import {
    Component,
    Event,
    Watch,
    EventEmitter,
    Prop,
    Host,
    h,
} from '@stencil/core'
import { SwitchChangeEvent } from './rux-switch.model'

@Component({
    tag: 'rux-switch',
    styleUrl: 'rux-switch.scss',
    shadow: true,
})
export class RuxSwitch {
    private inputId = `rux-switch-${id++}`
    /**
     * The name of the form input element
     */
    @Prop() name?: string
    /**
     * Disables the button via HTML `disabled` attribute.
     * Button takes on a distinct visual state.
     * Cursor uses the `not-allowed` system replacement and all keyboard and mouse events are ignored.
     */
    @Prop({ reflect: true }) disabled: boolean = false

    /**
     * Checks the button via HTML `checked` attribute. Button takes on a distinct "enabled" or "selected" visual state.
     */
    @Prop({ mutable: true }) checked: boolean = false

    /**
     * Emitted when the value property has changed.
     */
    @Event({ eventName: 'rux-change' })
    ruxChange!: EventEmitter<SwitchChangeEvent>

    @Watch('checked')
    checkedChanged(checked: boolean) {
        this.ruxChange.emit({
            checked: checked,
        })
    }

    handleClick(event: MouseEvent) {
        event.preventDefault()
        this.checked = !this.checked
    }

    render() {
        const { inputId, name, disabled, checked } = this
        return (
            <Host
                aria-checked={`${checked}`}
                aria-hidden={disabled ? 'true' : null}
                role="switch"
            >
                <div class="rux-switch">
                    <input
                        aria-checked={`${checked}`}
                        id={inputId}
                        class="rux-switch__input"
                        type="checkbox"
                        name={name}
                        role="switch"
                        disabled={disabled}
                        checked={checked}
                        onClick={(e) => this.handleClick(e)}
                    />
                    <label class="rux-switch__button" htmlFor={inputId}></label>
                </div>
            </Host>
        )
    }
}

let id = 0
