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
import { FormFieldInterface } from '../../common/interfaces.module'
import { hasSlot, renderHiddenInput } from '../../utils/utils'

let id = 0

/**
 * @slot label - The slider label
 * @slot help-text - the help text
 * @slot error-text - the error text
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
    @State() hasHelpSlot = false
    @State() hasErrorSlot = false
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
     * Enables a dual-range slider
     */
    @Prop() range?: boolean = false

    /**
     * The value of the second thumb if using a dual-range slider
     */
    @Prop({ attribute: 'dual-value', mutable: true }) dualValue?: number

    /**
     * Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     */
    @Event({ eventName: 'ruxinput' }) ruxInput!: EventEmitter
    /**
     * Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
     */
    @Event({ eventName: 'ruxblur' }) ruxBlur!: EventEmitter
    /**
     * Fired when the element's value is altered by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     */
    @Event({ eventName: 'ruxchange' }) ruxChange!: EventEmitter

    componentWillLoad() {
        this._updateValue()
        this._updateDualValue()
        this._getBrowser(navigator.userAgent.toLowerCase())
        this._handleSlotChange()
    }

    connectedCallback() {
        this._onInput = this._onInput.bind(this)
        this._onDualInput = this._onDualInput.bind(this)
        this._onBlur = this._onBlur.bind(this)
        this._handleSlotChange = this._handleSlotChange.bind(this)
        this._onChange = this._onChange.bind(this)
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

    @Watch('dualValue')
    handleDualValue() {
        this._updateDualValue()
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
        console.log('update value run')

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
    private _updateDualValue() {
        console.log('update dual value run')
        // If min is not a number, change it to 0
        if (!this.min && this.min != 0) {
            this.min = 0
        }
        //If max is not a number, change it to 100
        if (!this.max && this.max != 0) {
            this.max = 100
        }
        // If value is not a number, change it to default.
        if (!this.dualValue && this.dualValue != 0) {
            this.dualValue = (this.max - this.min) / 2 + this.min
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
        if (this.dualValue < this.min) {
            this.dualValue = this.min
        }
        //If max is given and is less than value, set value to max
        if (this.max < this.dualValue) {
            this.dualValue = this.max
        }

        this._setDualValuePercent()
    }
    //Sets the --slider-value-percent CSS var
    private _setValuePercent() {
        const dif = ((this.value! - this.min!) / (this.max! - this.min!)) * 100

        this.el.style.setProperty('--_slider-value-percent', `${dif}%`)
    }
    //Sets the --slider-value-percent CSS var
    private _setDualValuePercent() {
        const dif2 =
            ((this.dualValue! - this.min!) / (this.max! - this.min!)) * 100

        this.el.style.setProperty('--_dual-value-percent', `${dif2}%`)
    }

    private _onInput(e: Event) {
        const target = e.target as HTMLInputElement
        this.value = parseFloat(target.value)
        this._setValuePercent()
        this.ruxInput.emit()
    }

    private _onDualInput(e: Event) {
        const target = e.target as HTMLInputElement
        this.dualValue = parseFloat(target.value)
        this._setDualValuePercent()
        this.ruxInput.emit()
    }

    private _onChange() {
        this.ruxChange.emit()
    }

    private _onBlur = () => {
        this.ruxBlur.emit()
    }

    private _getBrowser(ua: string) {
        //Safari needs 0px top for the thumb to look normal.
        //Safari needs differnet padding on ticks.
        if (ua.indexOf('safari') > -1 && ua.indexOf('chrome') == -1) {
            this.el.style.setProperty('--_slider-top', '0px')
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
        this.hasErrorSlot = hasSlot(this.el, 'error-text')
        this.hasHelpSlot = hasSlot(this.el, 'help-text')
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
            errorText,
            helpText,
            hasLabel,
            hasErrorSlot,
            hasHelpSlot,
            _handleSlotChange,
            min,
            max,
            value,
            step,
            disabled,
            name,
            _onInput,
            _onBlur,
            _onChange,
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
                            'rux-slider--range': this.range ? true : false,
                            'with-axis-labels': this.axisLabels.length > 0,
                        }}
                    >
                        <input
                            id={sliderId}
                            onInput={_onInput}
                            type="range"
                            class={{
                                'rux-range': true,
                                'rux-range--dual': this.range ? true : false,
                            }}
                            min={min}
                            max={max}
                            step={step}
                            value={value}
                            disabled={disabled}
                            aria-label="slider"
                            aria-disabled={disabled ? 'true' : 'false'}
                            onBlur={_onBlur}
                            part="input"
                            list="steplist"
                        ></input>
                        {this.range ? (
                            <input
                                type="range"
                                class="rux-range rux-range--dual"
                                onInput={this._onDualInput}
                                disabled={disabled}
                                min={min}
                                max={max}
                                value={this.dualValue}
                                aria-disabled={disabled ? 'true' : 'false'}
                            ></input>
                        ) : null}
                        {this.range ? (
                            <div class="rux-range-overlay"></div>
                        ) : null}
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
                <div
                    class={{
                        'rux-error-text': !!errorText || hasErrorSlot,
                        hidden: !errorText && !hasErrorSlot,
                    }}
                    part="error-text"
                >
                    <svg
                        fill="none"
                        width="14"
                        height="14"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 14 14"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.393 12.25c.898 0 1.458-.974 1.009-1.75L8.009 2.91a1.166 1.166 0 0 0-2.018 0L1.598 10.5c-.449.776.111 1.75 1.01 1.75h8.784ZM7 8.167a.585.585 0 0 1-.583-.584V6.417c0-.321.262-.584.583-.584.32 0 .583.263.583.584v1.166c0 .321-.262.584-.583.584Zm-.583 1.166V10.5h1.166V9.333H6.417Z"
                            fill="currentColor"
                        />
                    </svg>
                    <slot name="error-text" onSlotchange={_handleSlotChange}>
                        {errorText}
                    </slot>
                </div>
                <div
                    class={{
                        'rux-help-text':
                            (!!helpText || hasHelpSlot) &&
                            (!errorText || !hasErrorSlot),
                        hidden:
                            (!helpText && !hasHelpSlot) ||
                            !!errorText ||
                            hasErrorSlot,
                    }}
                    part="help-text"
                >
                    <slot name="help-text" onSlotchange={_handleSlotChange}>
                        {helpText}
                    </slot>
                </div>
            </Host>
        )
    }
}

/*
                                return (
                                    <div class="tick-label">
                                        <div class="tick"></div>
                                        <option>{label}</option>
                                    </div>
                                )

*/
