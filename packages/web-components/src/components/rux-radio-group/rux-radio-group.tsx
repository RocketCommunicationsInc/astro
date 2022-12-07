import {
    Watch,
    Element,
    Prop,
    Event,
    EventEmitter,
    Component,
    State,
    Host,
    h,
} from '@stencil/core'
import { FormFieldInterface } from '../../common/interfaces.module'
import { hasSlot, renderHiddenInput } from '../../utils/utils'

/** Returns whether the current element is checked. */
const isChecked = (element: HTMLElement) =>
    element.matches('[aria-checked="true" i]')

/**
 * @slot label - The radio group label
 * @slot help-text -  the help text
 * @slot error-text -  the error text
 * @part error-text - The error text element
 * @part form-field - The form-field wrapper container
 * @part help-text - The help text element
 * @part label - The input label when `label` prop is set
 * @part radiogroup - The container of radios
 * @part required - The asterisk when required is true
 */
@Component({
    tag: 'rux-radio-group',
    styleUrl: 'rux-radio-group.scss',
    shadow: true,
})
export class RuxRadioGroup implements FormFieldInterface {
    @Element() el!: HTMLRuxRadioGroupElement
    @State() hasLabelSlot = false
    @State() hasHelpSlot = false
    @State() hasErrorSlot = false

    /**
     * The label of the radio group. For HTML content, use the `label` slot instead.
     */
    @Prop() label?: string

    /**
     * Presentational only. Renders the Radio Group as invalid.
     */
    @Prop() invalid: boolean = false

    /**
     * Marks that a selection from the radio-group is requried.
     */
    @Prop() required: boolean = false

    /**
     * The name of the radio group - submitted with form data. Must match the name of the radios in the group.
     */
    @Prop() name: string = ''

    /**
     * The value of the current selected radio in the group. Changing this will also mark that radio as checked in the UI.
     */
    @Prop({ mutable: true, reflect: true }) value?: any | null

    @Watch('value') valueWatchHandler() {
        this.ruxChange.emit(this.value)
    }

    /**
     * The <rux-radio> elements contained by the <rux-radio-group> element.
     */
    @Prop({ mutable: true }) options: HTMLRuxRadioElement[] = [
        ...this.el.querySelectorAll<HTMLRuxRadioElement>('rux-radio-input'),
    ]

    /**
     * The selected <rux-radio> element contained by the <rux-radio-group> element.
     */
    @Prop({ mutable: true }) selectedOption?: HTMLRuxRadioElement | null = null

    @Watch('selectedOption') selectedOptionWatchHandler(
        newSelectedOption: HTMLRuxRadioElement | null = null,
        oldSelectedOption: HTMLRuxRadioElement | null = null
    ) {
        // uncheck the old option (if it exists)
        if (oldSelectedOption) {
            oldSelectedOption.checked = false
        }

        // check the new option (if it exists) and use its value
        if (newSelectedOption) {
            newSelectedOption.checked = true

            this.value = newSelectedOption.value
        } else {
            this.value = ''
        }
    }

    /**
     * The help or explanation text
     */
    @Prop({ attribute: 'help-text' }) helpText?: string

    /**
     * The validation error text
     */
    @Prop({ attribute: 'error-text' }) errorText?: string

    /**
     * Fired when the value of the input changes and emits that value on the event.detail. - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     */
    @Event({ eventName: 'ruxchange' }) ruxChange!: EventEmitter<any>

    @Watch('label')
    handleLabelChange() {
        this._handleSlotChange()
    }

    connectedCallback() {
        this._handleClick = this._handleClick.bind(this)
        this._handleSlotChange = this._handleSlotChange.bind(this)
    }

    disconnectedCallback() {
        this.el!.shadowRoot!.removeEventListener(
            'slotchange',
            this._handleSlotChange
        )
    }

    componentWillLoad() {
        this._handleFocus = this._handleFocus.bind(this)
        this._handleFocusOut = this._handleFocusOut.bind(this)
        this._handleKeyDown = this._handleKeyDown.bind(this)

        const target = this.el

        /** Listen to clicks on `<rux-radio>` to handle selection changes. */
        const onClick = (event: PointerEvent) => {
            const currentOption = this.selectedOption
            const nomineeOption = event.currentTarget as HTMLRuxRadioElement

            // do not continue if the current option is nominated
            if (currentOption === nomineeOption) return

            // set the selected option to be the candidate
            this.selectedOption = nomineeOption
        }

        const onMutation = () => {
            this.options = [...target.querySelectorAll('rux-radio')]

            this.selectedOption = this.options.find(isChecked) || null

            for (let option of this.options) {
                option.addEventListener('click', onClick as any)
            }
        }

        new MutationObserver(onMutation).observe(target, {
            childList: true,
            subtree: true,
        })

        onMutation()

        target.addEventListener('keydown', this._handleKeyDown as any)

        this._handleSlotChange()

        target.addEventListener('focus', this._handleFocus as any)
        target.addEventListener('focusout', this._handleFocusOut as any)
    }

    get hasLabel() {
        return this.label ? true : this.hasLabelSlot
    }

    private _handleClick(e: MouseEvent) {
        const radios = Array.from(
            this.el.querySelectorAll('rux-radio')
        ) as HTMLRuxRadioElement[]
        const selectedRadio =
            e.target && (e.target as HTMLElement).closest('rux-radio')
        if (selectedRadio?.getAttribute('aria-checked') === 'true') return

        radios.forEach((radio) => {
            radio.setAttribute('aria-checked', 'false')
        })

        if (selectedRadio && !selectedRadio.disabled) {
            selectedRadio.setAttribute('aria-checked', 'true')
            const oldValue = this.value
            const newValue = selectedRadio.value
            if (newValue !== oldValue) {
                this.value = newValue
            }
        }
    }

    private _selectedRadioIsDisabled(): boolean {
        const radio = this.el.querySelector(
            `rux-radio[value="${this.value}"]`
        ) as HTMLRuxRadioElement
        return radio && radio.disabled
    }

    private _handleSlotChange() {
        this.hasLabelSlot = hasSlot(this.el, 'label')
        this.hasErrorSlot = hasSlot(this.el, 'error-text')
        this.hasHelpSlot = hasSlot(this.el, 'help-text')
    }

    private _handleFocus(event: FocusEvent & { relatedTarget: Node }) {
        if (this.selectedOption) {
            this.selectedOption.focus()
        } else if (this.options.length) {
            const related =
                event.relatedTarget ||
                getSelection()!.getRangeAt(0).commonAncestorContainer
            const position = this.options[0].compareDocumentPosition(related)
            const shouldFocusFirstRadio =
                position <= Node.DOCUMENT_POSITION_PRECEDING ||
                position >= Node.DOCUMENT_POSITION_CONTAINS
            const optionIndex = shouldFocusFirstRadio
                ? 0
                : this.options.length - 1

            this.options[optionIndex].focus({ focusVisible: true } as any)
        }

        // remove focusability on focus of the radio group
        this.el.removeAttribute('tabindex')
    }

    private _handleFocusOut(
        event: FocusEvent & { relatedTarget: HTMLElement | null }
    ) {
        // do nothing if the focus is still within the element
        if (event.relatedTarget && this.el.contains(event.relatedTarget)) return

        // remove focusability on focusout from the radio group
        this.el.setAttribute('tabindex', '0')
    }

    private _handleKeyDown(event: KeyboardEvent & { target: HTMLElement }) {
        // do nothing if any modifier keys are pressed
        if (event.altKey || event.ctrlKey || event.metaKey) return

        // do nothing if the key is not an arrow
        if (!event.key.startsWith('Arrow')) return

        const currentRadio = event.target.closest('rux-radio')

        // do nothing if the target is not a radio
        if (!currentRadio) return

        event.preventDefault()

        const focusPreviousRadio =
            event.key === 'ArrowLeft' || event.key === 'ArrowUp'

        const barrierIndex = this.options.length - 1
        const currentIndex = this.options.indexOf(currentRadio)
        const nomineeIndex = focusPreviousRadio
            ? currentIndex === 0
                ? barrierIndex
                : currentIndex - 1
            : currentIndex === barrierIndex
            ? 0
            : currentIndex + 1

        const nomineeRadio = this.options[nomineeIndex]

        nomineeRadio.focus()

        // set the selected option to be the nominated radio
        this.selectedOption = nomineeRadio

        // if (
        //     !['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(
        //         event.key
        //     )
        // ) {
        //     return
        // }

        // //const radios = this.getAllRadios().filter(radio => !radio.disabled);
        // const radios = Array.from(
        //     this.el.querySelectorAll('rux-radio')
        // ) as HTMLRuxRadioElement[]
        // const checkedRadio = radios.find((radio) => radio.checked) ?? radios[0]
        // const incr =
        //     event.key === ' '
        //         ? 0
        //         : ['ArrowUp', 'ArrowLeft'].includes(event.key)
        //         ? -1
        //         : 1
        // let index = radios.indexOf(checkedRadio) + incr
        // if (index < 0) {
        //     index = radios.length - 1
        // }
        // if (index > radios.length - 1) {
        //     index = 0
        // }

        // radios.forEach((radio) => {
        //     radio.checked = false
        //     radio.tabIndex = -1
        // })

        // this.value = radios[index].value
        // radios[index].checked = true
        // radios[index].tabIndex = 0
        // radios[index].focus()

        // event.preventDefault()
    }

    render() {
        const {
            errorText,
            helpText,
            hasHelpSlot,
            hasErrorSlot,
            _handleSlotChange,
        } = this
        if (this.value) {
            renderHiddenInput(
                true,
                this.el,
                this.name,
                this.value,
                this._selectedRadioIsDisabled()
            )
        }
        return (
            <Host tabindex="0">
                <div class="rux-form-field" part="form-field">
                    <div
                        class={{
                            'rux-label': true,
                            hidden: !this.hasLabel,
                        }}
                        part="label"
                    >
                        <slot
                            onSlotchange={this._handleSlotChange}
                            name="label"
                        >
                            {this.label}
                            {this.required && (
                                <span
                                    part="required"
                                    class="rux-label__asterisk"
                                >
                                    &#42;
                                </span>
                            )}
                        </slot>
                    </div>
                    <div
                        class={{
                            'rux-radio-group': true,
                            'rux-radio-group--invalid': this.invalid,
                        }}
                        role="radiogroup"
                        part="radiogroup"
                    >
                        <slot></slot>
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
