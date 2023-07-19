import {
    Component,
    Host,
    h,
    Prop,
    Event,
    EventEmitter,
    Element,
    // Watch,
} from '@stencil/core'
@Component({
    tag: 'rux-day',
    styleUrl: 'rux-day.scss',
    shadow: true,
})
export class RuxDay {
    @Prop({ reflect: true, mutable: true }) selected: boolean = false

    // @Watch('selected')
    // handleSelected(prev: boolean, next: boolean) {
    //     console.log('heard selected change')
    //     console.log(`Prev value: ${prev}, new value: ${next}`)
    //     // this._toggleSelected()
    // }

    @Element() el!: HTMLRuxDayElement

    @Event({ eventName: 'ruxdayselected' })
    ruxDaySelected!: EventEmitter<HTMLRuxDayElement>

    connectedCallback() {
        this._toggleSelected = this._toggleSelected.bind(this)
    }

    private _toggleSelected() {
        this.selected = !this.selected
        this.ruxDaySelected.emit(this.el)
    }

    render() {
        return (
            <Host>
                <button
                    class={{
                        'rux-day': true,
                        'day-selected': this.selected,
                    }}
                    part="button"
                    onClick={this._toggleSelected}
                >
                    <div class="oridnal">
                        <slot name="ordinal"></slot>
                    </div>
                    <slot></slot>

                    <slot name="today-dot"></slot>
                </button>
            </Host>
        )
    }
}
