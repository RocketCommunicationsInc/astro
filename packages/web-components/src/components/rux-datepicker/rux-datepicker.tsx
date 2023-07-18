import {
    Event,
    Watch,
    EventEmitter,
    Prop,
    Element,
    Component,
    h,
    Host,
    Listen,
    State,
} from '@stencil/core'
import { RuxCalendarCustomEvent } from '../../components'

@Component({
    tag: 'rux-datepicker',
    styleUrl: 'rux-datepicker.scss',
    shadow: true,
})
export class RuxDatepicker {
    @Element() el!: HTMLRuxDatepickerElement

    @Prop() max?: number

    @Prop() min?: number

    @Prop() julian: boolean = false

    @Prop() standard: boolean = true

    @Prop({ reflect: true, mutable: true }) open: boolean = false

    //ruxCalendarExanded? ruxDatepickerExpanded? opened? closed?
    @Event({ eventName: 'ruxexpanded' }) ruxExpanded!: EventEmitter
    @Event({ eventName: 'ruxcollapsed' }) ruxCollapsed!: EventEmitter

    @Listen('ruxdateselected')
    handleRuxDaySelected(e: RuxCalendarCustomEvent<Date>) {
        const event = e.detail
        console.log(event, 'event?')
        const year = event.getUTCFullYear()
        const month =
            event.getUTCMonth() + 1 > 9
                ? event.getUTCMonth() + 1
                : `0${event.getUTCMonth() + 1}`
        const day =
            event.getUTCDate() > 9
                ? event.getUTCDate()
                : `0${event.getUTCDate()}`
        this._inputVal = `${year}-${month}-${day}`
    }
    @Listen('ruxchange')
    handleRuxChange() {
        console.log('heard')
    }

    @Watch('open')
    handleOpen() {
        this.open ? this.ruxExpanded.emit() : this.ruxCollapsed.emit()
    }

    @State() _inputVal: string = ''

    // connectedCallback() {
    //     this._handleClick = this._handleClick.bind(this)
    // }

    // private _handleClick() {
    //     this.open = !this.open
    // }

    render() {
        return (
            <Host>
                <rux-input type="date" value={this._inputVal}>
                    <rux-pop-up
                        slot="suffix"
                        placement="bottom-end"
                        strategy="fixed"
                    >
                        <rux-icon
                            icon="calendar-today"
                            slot="trigger"
                            size="22px"
                        ></rux-icon>
                        <rux-calendar></rux-calendar>
                    </rux-pop-up>
                </rux-input>
            </Host>
        )
    }
}
