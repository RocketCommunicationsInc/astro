import {
    Event,
    Watch,
    EventEmitter,
    Prop,
    Element,
    Component,
    h,
} from '@stencil/core'
import { SegmentedButton } from './rux-segmented-button.model'

@Component({
    tag: 'rux-segmented-button',
    styleUrl: 'rux-segmented-button.scss',
    shadow: true,
})
export class RuxSegmentedButton {
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
     * Emitted when the value property has changed.
     */
    @Event({ eventName: 'ruxchange' })
    ruxChange!: EventEmitter

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

    render() {
        return (
            <ul class="rux-segmented-button">
                {this.data.map((item) => (
                    <li class="rux-segmented-button__segment">
                        <input
                            type="radio"
                            name="rux-group"
                            id={this._slugify(item.label)}
                            value={item.label}
                            checked={this._isSelected(item.label)}
                            data-label={item.label}
                            onChange={this._handleChange}
                        />
                        <label htmlFor={this._slugify(item.label)}>
                            {item.label}
                        </label>
                    </li>
                ))}
            </ul>
        )
    }
}
