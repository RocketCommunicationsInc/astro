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
    @Prop({ mutable: true }) value: number = this.endVal
        ? this.endVal
        : (this.max! - this.min!) / 2 + this.min!

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
     * The value of the first thumb if using a dual-range slider
     */
    @Prop({ attribute: 'start-val', mutable: true }) startVal?: number

    /**
     * The value of the second thumb if using a dual-range slider
     */
    @Prop({ attribute: 'end-val', mutable: true }) endVal?: number

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
        this._getBrowser(navigator.userAgent.toLowerCase())
        this._handleSlotChange()
    }

    connectedCallback() {
        this._onInput = this._onInput.bind(this)
        this._onStartValInput = this._onStartValInput.bind(this)
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
    @Watch('endVal')
    @Watch('startVal')
    handleChange() {
        this._updateValue()
    }

    //TODO: update this to work with dual range
    @Watch('step')
    handleStep() {
        // Value needs to be a multiple of step, otherwise slider begins to look wrong
        this.value = this._closestMultiple(this.value, this.step)
    }

    get hasLabel() {
        return this.label ? true : this.hasLabelSlot
    }

    /**
     * Returns the closest multiple of two given numbers.
     */
    private _closestMultiple(n: number, x: number) {
        if (x > n) return x
        n = n + x / 2
        n = n - (n % x)
        return n
    }

    private _updateValue() {
        this._setValuePercent()
        // this._setStartValuePercent()
        //? Should we just make reg value equal endVal? That way there's not confusion when
        //? getting slider.value and that being the default of 50 all the time? idk idk idk
        // this.value = this.endVal
    }

    //Sets the --slider-value-percent CSS var. Also contor
    private _setValuePercent() {
        //if endVal is being used, we're in dual range mode. Use that instead of value.
        if (this.endVal !== undefined && this.startVal !== undefined) {
            // swap CSS custom prop values
            if (this.startVal > this.endVal) {
                this.el.style.setProperty(
                    '--_slider-value-percent',
                    `${this.startVal}%`
                )
                this.el.style.setProperty(
                    '--_start-value-percent',
                    `${this.endVal}%`
                )
                //If end < start, no need to swap
            } else {
                this.el.style.setProperty(
                    '--_start-value-percent',
                    `${this.startVal}%`
                )
                this.el.style.setProperty(
                    '--_slider-value-percent',
                    `${this.endVal}%`
                )
            }
            //if not in dual slider
        } else {
            const dif =
                ((this.value! - this.min!) / (this.max! - this.min!)) * 100
            this.el.style.setProperty('--_slider-value-percent', `${dif}%`)
        }
    }

    private _onInput(e: Event) {
        const target = e.target as HTMLInputElement
        if (this.endVal !== undefined) {
            this.endVal = parseFloat(target.value)
        } else {
            this.value = parseFloat(target.value)
        }
        this._setValuePercent()
        this.ruxInput.emit()
    }

    private _onStartValInput(e: Event) {
        const target = e.target as HTMLInputElement
        this.startVal = parseFloat(target.value)
        // this._setStartValuePercent()
        this._setValuePercent()
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
        //TODO: Update this to render (2?) hidden inputs when in dual range
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
                            'rux-slider--range':
                                this.startVal !== undefined &&
                                this.endVal !== undefined
                                    ? true
                                    : false,
                            'with-axis-labels': this.axisLabels.length > 0,
                        }}
                    >
                        <input
                            id={sliderId}
                            onInput={_onInput}
                            onChange={_onChange}
                            type="range"
                            class={{
                                'rux-range': true,
                                'rux-range--dual':
                                    this.startVal !== undefined &&
                                    this.endVal !== undefined
                                        ? true
                                        : false,
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
                        {this.startVal !== undefined &&
                        this.endVal !== undefined ? (
                            <input
                                type="range"
                                class="rux-range rux-range--dual"
                                onInput={this._onStartValInput}
                                onChange={_onChange}
                                disabled={disabled}
                                min={min}
                                max={max}
                                value={this.startVal}
                                aria-disabled={disabled ? 'true' : 'false'}
                            ></input>
                        ) : null}
                        {this.startVal !== undefined &&
                        this.endVal !== undefined ? (
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
