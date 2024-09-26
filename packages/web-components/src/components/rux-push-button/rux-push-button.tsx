import {
    Component,
    Element,
    Event,
    EventEmitter,
    Host,
    Prop,
    h,
} from '@stencil/core'

import { renderHiddenInput } from '../../utils/utils'

/**
 * @part container - the label of rux-push-button
 * @part icon - the optional rux-icon

 */
@Component({
    tag: 'rux-push-button',
    styleUrl: 'rux-push-button.scss',
    shadow: true,
})
export class RuxPushButton {
    private pushButtonId = `rux-push-button-${id++}`
    /**
     * For a [button style guide, see the Button section in Astro UXDS Guidelines](https://astrouxds.com/components/button)
     * Displays an Astro icon matching this string. For a [full list of available icons,
     * see the Icons section in Astro UXDS Guidelines](https://astrouxds.com/ui-components/icons-and-symbols)
     */
    @Prop({ reflect: true }) icon?: string
    /**
     * Hides slotted text from the button by setting rux-button--icon-only class
     */
    @Prop({
        attribute: 'icon-only',
        reflect: true,
    })
    iconOnly: boolean = false

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
    @Prop() label: string = ''
    /**
     * The name of the push button.
     */
    @Prop() name: string = ''
    /**
     * The value of the push button.
     */
    @Prop({ reflect: true }) value: string = ''
    /**
     * Changes size of a push button from medium to small or large by setting sizing classes
     * rux-button--small
     * rux-button--large
     */
    @Prop({ reflect: true }) size?: 'small' | 'medium' | 'large'
    /**
     * Specifies the label text to use if the push button is pushed.
     */
    @Prop({ attribute: 'active-label' }) activeLabel?: string
    /**
     * Specifies the label text to use if the push button is not pushed.
     */
    @Prop({ attribute: 'inactive-label' }) inactiveLabel?: string
    /**
     * Fired when an alteration to the input's value is committed by the user and emits the value on the event.detail - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     */
    @Event({ eventName: 'ruxchange' }) ruxChange!: EventEmitter
    /**
     * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
     */
    @Event({ eventName: 'ruxblur' }) ruxBlur!: EventEmitter

    componentWillLoad() {
        this._onChange = this._onChange.bind(this)
    }

    @Element() el!: HTMLRuxPushButtonElement

    private _onChange(e: Event) {
        const target = e.target as HTMLInputElement
        console.log('changing checked value')
        this.checked = target.checked
        this.ruxChange.emit(this.checked)
    }

    private _onBlur = () => {
        this.ruxBlur.emit()
    }

    private _determineLabelText(): string {
        console.log(`checked: ${this.checked}`)
        if (this.checked && this.activeLabel) {
            return this.activeLabel
        } else if (!this.checked && this.inactiveLabel) {
            return this.inactiveLabel
        } else {
            return this.label
        }
    }

    render() {
        const {
            disabled,
            checked,
            size,
            _onChange,
            value,
            _onBlur,
            icon,
            iconOnly,
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
                    onBlur={_onBlur}
                    value={value}
                />
                <label
                    part="container"
                    class={{
                        'rux-push-button__button': true,
                        'rux-push-button__button--small': size === 'small',
                        'rux-push-button__button--large': size === 'large',
                        'rux-push-button__button--icon-only': iconOnly,
                    }}
                    htmlFor={this.pushButtonId}
                >
                    {icon ? (
                        <rux-icon
                            size="auto"
                            exportparts="icon"
                            icon={icon}
                        ></rux-icon>
                    ) : null}

                    {this._determineLabelText()}
                </label>
                <slot></slot>
            </Host>
        )
    }
}

let id = 0
