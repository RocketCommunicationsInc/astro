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
    // @Listen('ruxchange')
    // handleRuxChange() {
    //? Possibly out of scope for current MVP
    //TODO: when someone uses the input rather than interacting with the calendar,
    //TODO: it should still select that day in the calendar if they open it.
    //! rux change fires as soon as the user hits the years - so it fires kind of often.
    // }

    @Watch('open')
    handleOpen() {
        this.open ? this.ruxExpanded.emit() : this.ruxCollapsed.emit()
    }

    @State() _inputVal: string = ''

    render() {
        return (
            <Host>
                <rux-input type="date" value={this._inputVal}>
                    {/* <div slot="suffix"> */}
                    <rux-pop-up
                        placement="bottom-end"
                        strategy="fixed"
                        slot="suffix"
                    >
                        <rux-icon
                            icon="calendar-today"
                            slot="trigger"
                            size="22px"
                        ></rux-icon>
                        <rux-calendar></rux-calendar>
                    </rux-pop-up>
                    {/* </div> */}
                </rux-input>
            </Host>
        )
    }
}
