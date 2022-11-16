import { Prop, Host, Component, h, State, Element } from '@stencil/core'
import { hasSlot } from '../../utils/utils'

/**
 * @slot (default) - The checkbox elements
 * @slot label - The checkbox group label
 * @slot help-text -  the help text
 * @slot error-text -  the error text
 * @part container - The container div of checkbox elements
 * @part error-text - The error text element
 * @part form-field - The form-field wrapper container
 * @part help-text - The help text element
 * @part label - The input label when `label` prop is set
 * @part required - The asterisk when required is true
 */
@Component({
    tag: 'rux-checkbox-group',
    styleUrl: 'rux-checkbox-group.scss',
    shadow: true,
})
export class RuxCheckboxGroup {
    @Element() el!: HTMLRuxCheckboxGroupElement

    @State() hasLabelSlot = false
    @State() hasHelpSlot = false
    @State() hasErrorSlot = false

    /**
     * The label of the checkbox group. For HTML content, use the `label` slot instead.
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
     * Presentational only. Renders the Checkbox Group as invalid.
     */
    @Prop() invalid: boolean = false

    /**
     * Marks that a selection from the checkbox group is requried.
     */
    @Prop() required: boolean = false

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
    }

    disconnectedCallback() {
        this.el!.shadowRoot!.removeEventListener(
            'slotchange',
            this._handleSlotChange
        )
    }
    componentWillLoad() {
        this._handleSlotChange()
    }

    get hasLabel() {
        return this.label ? true : this.hasLabelSlot
    }

    private _handleSlotChange() {
        this.hasLabelSlot = hasSlot(this.el, 'label')
        this.hasErrorSlot = hasSlot(this.el, 'error-text')
        this.hasHelpSlot = hasSlot(this.el, 'help-text')
    }

    render() {
        const {
            errorText,
            helpText,
            hasHelpSlot,
            hasErrorSlot,
            _handleSlotChange,
        } = this
        return (
            <Host>
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
                            'rux-checkbox-group': true,
                            'rux-checkbox-group--invalid': this.invalid,
                        }}
                        part="container"
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
