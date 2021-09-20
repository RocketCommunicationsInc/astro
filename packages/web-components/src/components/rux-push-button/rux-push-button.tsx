import {
    Prop,
    Component,
    Host,
    h,
    Event,
    EventEmitter,
    Element,
} from '@stencil/core'
import { renderHiddenInput } from '../../utils/utils'

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
     */
    @Prop() label: string = 'Push Button'
    /**
     * The name of the push button.
     */
    @Prop() name: string = ''
    /**
     * The value of the push button.
     */
    @Prop({ reflect: true, mutable: true }) value: string = ''
    /**
     * Fired when an alteration to the input's value is committed by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     */
    @Event({ eventName: 'rux-change' }) ruxChange!: EventEmitter
    /**
     * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
     */
    @Event({ eventName: 'rux-blur' }) ruxBlur!: EventEmitter

    componentWillLoad() {
        this._onChange = this._onChange.bind(this)
    }

    @Element() el!: HTMLRuxPushButtonElement

    private _onChange(e: Event) {
        const target = e.target as HTMLInputElement
        this.checked = target.checked
        this.ruxChange.emit(this.checked)
    }

    private _onBlur = () => {
        this.ruxBlur.emit()
    }

    render() {
        const { disabled, checked, label, _onChange, value, _onBlur } = this

        renderHiddenInput(
            true,
            this.el,
            this.name,
            this.value ? this.value : 'on',
            this.disabled,
            this.checked
        )

        return (
            <Host
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
                    onChange={_onChange}
                    onBlur={() => _onBlur()}
                    value={value}
                />
                <label
                    class="rux-push-button__button"
                    htmlFor={this.pushButtonId}
                >
                    {label}
                </label>
                <slot></slot>
            </Host>
        )
    }
}

let id = 0
