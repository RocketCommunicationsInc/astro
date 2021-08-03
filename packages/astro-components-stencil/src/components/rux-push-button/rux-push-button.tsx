import {
    Prop,
    Component,
    Host,
    h,
    Event,
    EventEmitter,
    Watch,
} from '@stencil/core'
import { PushButtonChangeEvent } from './rux-push-button.model'
@Component({
    tag: 'rux-push-button',
    styleUrl: 'rux-push-button.scss',
    shadow: true,
})
export class RuxPushButton {
    private pushButtonId = `rux-push-button-${id++}`
    /**
     * Disables the push button via HTML `disabled` attribute.
     * Button takes on a distinct disabled visual state.
     * Cursor uses the `not-allowed` system replacement and all keyboard and mouse events are ignored.
     */
    @Prop({ reflect: true }) disabled: boolean = false
    /**
     * Checks the push button via HTML `checked` attribute.
     * Push button takes on a distinct "enabled" or "selected" visual state.
     */
    @Prop({ reflect: true, mutable: true }) checked: boolean = false
    /**
     * The label of the push button.
     * Can be overridden by placing content in the default slot of the rusx-push-button component.
     */
    @Prop() label: string = 'Push Button'

    /**
     * Emitted when the checked property has changed.
     */
    @Event({ eventName: 'rux-change' })
    ruxChange!: EventEmitter<PushButtonChangeEvent>

    handleClick(event: MouseEvent) {
        event.preventDefault()
        this.checked = !this.checked
    }

    @Watch('checked')
    checkedChanged(checked: boolean) {
        this.ruxChange.emit({ checked })
    }

    render() {
        const { disabled, checked, label } = this
        return (
            <Host
                onClick={this.handleClick}
                aria-checked={`${checked}`}
                aria-hidden={disabled ? 'true' : null}
                role="switch"
            >
                <input
                    class="rux-push-button__input"
                    id={this.pushButtonId}
                    type="checkbox"
                    disabled={disabled}
                    checked={checked}
                    onClick={(e) => this.handleClick(e)}
                />
                <label
                    class="rux-push-button__button"
                    htmlFor={this.pushButtonId}
                >
                    <slot>{label}</slot>
                </label>
            </Host>
        )
    }
}

let id = 0
