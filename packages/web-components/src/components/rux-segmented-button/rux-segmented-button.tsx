import {
    Component,
    Element,
    Event,
    EventEmitter,
    Prop,
    Watch,
    h,
} from '@stencil/core'

import { SegmentedButton } from './rux-segmented-button.model'

// Used to give each segmented button element a unique name, which allows for proper tabbing.
let name = 0

/**
 * @part ul - The unordered list element of the rux-segmented-button
 * @part li - The list item element of the rux-segmented-button
 * @part label - The label of rux-segmented-button
 */
@Component({
    tag: 'rux-segmented-button',
    styleUrl: 'rux-segmented-button.scss',
    shadow: true,
})
export class RuxSegmentedButton {
    private segBtnName = `rux-segmented-button-${++name}`
    @Element() el!: HTMLRuxSegmentedButtonElement

    /**
     * Items in this Array are the individual button segments.
     */
    @Prop() data: SegmentedButton[] = []

    /**
     * When passed in on load, this selects the first button segment with a matching label. When the selected segment changes, this property updates with the currently selected value, which reflects back to the component attribute. If no button segment label matches this string, then no segment is selected. This value takes priority over setting selected boolean property on the items in the data array.
     */
    @Prop({ reflect: true, mutable: true }) selected: string = ''

    /**
     * Changes size of segmented button from small to medium or large.
     */
    @Prop({ reflect: true }) size?: 'small' | 'medium' | 'large'

    /**
     * Sets the disabled attribute.
     */
    @Prop({ reflect: true }) disabled: boolean = false

    /**
     * Fires when the value property has changed and emits that value on the event.detail.
     */
    @Event({ eventName: 'ruxchange' })
    ruxChange!: EventEmitter

    @Watch('selected')
    onSelectedChange(newValue: string) {
        //if 'selected' is changed programatically rather than on click, set new selected value
        this._setSelected(newValue)
    }

    @Watch('data')
    onDataChange(newValue: string) {
        if (newValue) {
            const initialSelection = this.data.find(
                (segment) => segment.selected
            )
            if (initialSelection) {
                this._setSelected(initialSelection.label)
            } else {
                if (!this.selected) {
                    this._setSelected(this.data[0].label)
                }
            }
        }
    }

    connectedCallback() {
        this._handleChange = this._handleChange.bind(this)
        const initialSelection =
            this.data.find((segment) => segment.selected) || this.data[0]
        if (initialSelection) {
            this._setSelected(initialSelection.label)
        }
    }

    private _handleChange(e: Event) {
        const el = e.target as HTMLInputElement
        this._setSelected(el.value)
        this.ruxChange.emit(el.value)
    }

    private _setSelected(label: string) {
        this.data.map((item) => {
            item.selected = item.label === label
        })
        this.selected = label
    }

    private _slugify(label: string) {
        label = label.replace(/^\s+|\s+$/g, '') // trim
        label = label.toLowerCase()

        label = label
            .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-') // collapse dashes

        return label
    }

    private _isSelected(label: string) {
        if (this.selected === label) {
            return true
        }

        const selectedData = this.data.find((item) => item.label === label)
        if (selectedData && selectedData.selected) {
            return true
        }

        return false
    }

    private _handleFocus(e: Event) {
        const target = e.currentTarget as HTMLInputElement
        target.matches(':focus-visible')
            ? target.closest('li')?.classList.add('--focused')
            : null
    }

    private _handleBlur(e: Event) {
        const target = e.currentTarget as HTMLInputElement
        target.closest('li')?.classList.remove('--focused')
    }

    render() {
        return (
            <ul
                class={{
                    'rux-segmented-button': true,
                    'rux-segmented-button--small': this.size === 'small',
                    'rux-segmented-button--large': this.size === 'large',
                }}
                part="ul"
            >
                {this.data.map((item) => (
                    <li class="rux-segmented-button__segment" part="li">
                        <input
                            type="radio"
                            name={this.segBtnName}
                            id={this._slugify(item.label)}
                            value={item.label}
                            checked={this._isSelected(item.label)}
                            data-label={item.label}
                            onChange={this._handleChange}
                            disabled={this.disabled}
                            onFocus={this._handleFocus}
                            onBlur={this._handleBlur}
                        />
                        <label
                            htmlFor={this._slugify(item.label)}
                            part="label"
                            class={{
                                'rux-segmented-button-label': true,
                                'rux-segmented-button-label--small':
                                    this.size === 'small',
                                'rux-segmented-button-label--large':
                                    this.size === 'large',
                            }}
                        >
                            {item.label}
                        </label>
                    </li>
                ))}
            </ul>
        )
    }
}
