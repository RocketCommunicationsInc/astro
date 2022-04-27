import {
    Component,
    h,
    Prop,
    Element,
    Host,
    Event,
    EventEmitter,
    Watch,
    State,
} from '@stencil/core'
import FormFieldMessage from '../../common/functional-components/FormFieldMessage/FormFieldMessage'
import { FormFieldInterface } from '../../common/interfaces.module'
import { hasSlot, renderHiddenInput } from '../../utils/utils'

let id = 0

/**
 * @slot label - The slider label
 * @part error-text - The error text element
 * @part form-field - The form-field wrapper container
 * @part help-text - The help text element
 * @part input - The input element
 * @part label - The input label when `label` prop is set
 * @part tick-container - The container of the tick mark and axis-label
 * @part tick - the tick mark
 * @part axis-label - the axis label
 */
@Component({
    tag: 'rux-slider',
    styleUrl: 'rux-slider.scss',
    shadow: true,
})
export class RuxSlider implements FormFieldInterface {
    private sliderId = `rux-slider-${++id}`
    @Element() el!: HTMLRuxSliderElement
    @State() hasLabelSlot = false
    /**
     * Min value of the slider.
     */

    @Prop() min: number = 0
    /**
     * Max value of slider.
     */

    @Prop() max: number = 100
    /**
     * Step amount of slider value.
     */

    @Prop() step: number = 1
    /**
     * Current value of the slider. The default value is halfway between the specified minimum and maximum. - [HTMLElement/input_type_range>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range)
     */

    @Prop({ mutable: true }) value: number =
        (this.max! - this.min!) / 2 + this.min!

    /**
     *  Shows tick marks and labels in the order provided and aligns evenly based on the length.
     */
    @Prop({ attribute: 'axis-labels' }) axisLabels: string[] = []

    /**
     * Hides labels and only shows tick marks if axis-labels is provided.
     */
    @Prop({ attribute: 'ticks-only' }) ticksOnly: boolean = false

    /**
     * Determines if the slider is disabled.
     */
    @Prop({ reflect: true }) disabled: boolean = false
    /**
     * Name of the Input Field for Form Submission
     */
    @Prop() name: string = ''

    /**
     * The slider label text. For HTML content, use the `label` slot instead.
     */
    @Prop() label?: string

    /**
     * The help or explanation text
     */
    @Prop({ attribute: 'help-text' }) helpText?: string

    /**
     * The validation error text
     */
    @Prop({ attribute: 'error-text' }) errorText?: string

    /**
     * Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     */
    @Event({ eventName: 'ruxinput' }) ruxInput!: EventEmitter
    /**
     * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
     */
    @Event({ eventName: 'ruxblur' }) ruxBlur!: EventEmitter

    componentWillLoad() {
        this._updateValue()
        this._getBrowser(navigator.userAgent.toLowerCase())
        this._handleSlotChange()
    }

    connectedCallback() {
        this._onInput = this._onInput.bind(this)
        this._onBlur = this._onBlur.bind(this)
        this._handleSlotChange = this._handleSlotChange.bind(this)
    }

    disconnectedCallback() {
        this.el!.shadowRoot!.removeEventListener(
            'slotchange',
            this._handleSlotChange
        )
    }

    @Watch('label')
    handleLabelChange() {
        this._handleSlotChange()
    }

    @Watch('value')
    @Watch('min')
    @Watch('max')
    handleChange() {
        this._updateValue()
    }

    @Watch('step')
    handleStep() {
        // Value needs to be a multiple of step, otherwise slider begins to look wrong
        this.value = this._closestMultiple(this.value, this.step)
    }

    get hasLabel() {
        return this.label ? true : this.hasLabelSlot
    }
    //Returns the closest multiple of two given numbers.
    private _closestMultiple(n: number, x: number) {
        if (x > n) return x
        n = n + x / 2
        n = n - (n % x)
        return n
    }

    private _updateValue() {
        // If min is not a number, change it to 0
        if (!this.min && this.min != 0) {
            this.min = 0
        }
        //If max is not a number, change it to 100
        if (!this.max && this.max != 0) {
            this.max = 100
        }
        // If value is not a number, change it to default.
        if (!this.value && this.value != 0) {
            this.value = (this.max - this.min) / 2 + this.min
        }
        //If step is not a number, change it to 1
        if (!this.step) {
            this.step = 1
        }
        //Min can't be >= max
        if (this.min >= this.max) {
            this.min = this.max - this.step
        }
        // If min is given and is greater than value, then set value to the min.
        if (this.value < this.min) {
            this.value = this.min
        }
        //If max is given and is less than value, set value to max
        if (this.max < this.value) {
            this.value = this.max
        }

        this._setValuePercent()
    }
    //Sets the --slider-value-percent CSS var
    private _setValuePercent() {
        const dif = ((this.value! - this.min!) / (this.max! - this.min!)) * 100
        this.el.style.setProperty('--slider-value-percent', `${dif}%`)
    }

    private _onInput(e: Event) {
        const target = e.target as HTMLInputElement
        this.value = parseFloat(target.value)
        this._setValuePercent()
        this.ruxInput.emit()
    }

    private _onBlur = () => {
        this.ruxBlur.emit()
    }

    private _getBrowser(ua: string) {
        //Safari needs 0px top for the thumb to look normal.
        //Safari needs differnet padding on ticks.
        if (ua.indexOf('safari') > -1 && ua.indexOf('chrome') == -1) {
            this.el.style.setProperty('--slider-top', '0px')
            this.el.style.setProperty('--slider-tick-padding-top', '7px')
        }
        //firefox - thumb too large, tick padding not enough
        if (ua.indexOf('firefox') > -1) {
            this.el.style.setProperty('--slider-tick-padding-top', '3px')
            //? Better to set this here, or in the css with a calc(--slider-thumb-size - 4px)?
            // this.el.style.setProperty('--slider-thumb-size', '15px')
        }
    }

    private _handleSlotChange() {
        this.hasLabelSlot = hasSlot(this.el, 'label')
    }

    private _getTickWidths() {
        const width = 100 / (this.axisLabels.length - 1)
        return width
    }

    render() {
        const {
            el,
            sliderId,
            label,
            hasLabel,
            min,
            max,
            value,
            step,
            disabled,
            name,
            _onInput,
            _onBlur,
        } = this

        renderHiddenInput(true, el, name, JSON.stringify(this.value), disabled)
        return (
            <Host>
                <div class="rux-form-field" part="form-field">
                    {hasLabel ? (
                        <label
                            class={{
                                'rux-input-label': true,
                                hidden: !this.hasLabel,
                            }}
                            aria-hidden={this.hasLabel ? 'false' : 'true'}
                            htmlFor={sliderId}
                            part="label"
                        >
                            <slot name="label">{label}</slot>
                        </label>
                    ) : null}

                    <div
                        class={{
                            'rux-slider': true,
                            'with-axis-labels': this.axisLabels.length > 0,
                        }}
                    >
                        <input
                            id={sliderId}
                            onInput={_onInput}
                            type="range"
                            class="rux-range"
                            min={min}
                            max={max}
                            value={value}
                            step={step}
                            disabled={disabled}
                            aria-label="slider"
                            aria-disabled={disabled ? 'true' : 'false'}
                            onBlur={_onBlur}
                            part="input"
                            list="steplist"
                        ></input>
                        {this.axisLabels.length > 0 ? (
                            <datalist
                                id="steplist"
                                style={{
                                    gridTemplateColumns: `[tick] repeat(${
                                        this.axisLabels.length - 1
                                    }, ${this._getTickWidths()}%)`,
                                }}
                            >
                                {this.axisLabels.map((label) => {
                                    return (
                                        <div
                                            class="tick-label"
                                            part="tick-container"
                                        >
                                            <div class="tick" part="tick"></div>
                                            {this.ticksOnly ? null : (
                                                <div
                                                    class="axis-label"
                                                    part="axis-label"
                                                >
                                                    {label}
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}
                            </datalist>
                        ) : null}
                    </div>
                </div>
                <FormFieldMessage
                    helpText={this.helpText}
                    errorText={this.errorText}
                ></FormFieldMessage>
            </Host>
        )
    }
}
