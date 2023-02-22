import {
    Event,
    Watch,
    EventEmitter,
    Prop,
    Element,
    Component,
    h,
    Host,
} from '@stencil/core'

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

    @Watch('open')
    handleOpen() {
        console.log('open changed!')
    }

    connectedCallback() {
        this._handleClick = this._handleClick.bind(this)
    }

    private _handleClick() {
        this.open = !this.open
    }

    render() {
        return (
            <Host>
                <div class="rux-datepicker">
                    <div class="input-wrapper">
                        <div class="editable-input" contentEditable></div>
                        <rux-pop-up placement="bottom-end">
                            <rux-icon
                                icon="calendar-today"
                                size="22px"
                                slot="trigger"
                            ></rux-icon>
                            <rux-menu>
                                <p>Probably use a CSS grid here</p>
                                <p>Probably use a CSS grid here</p>
                                <p>Probably use a CSS grid here</p>
                                <p>Probably use a CSS grid here</p>
                                <p>Probably use a CSS grid here</p>
                            </rux-menu>
                        </rux-pop-up>
                    </div>
                </div>
            </Host>
        )
    }
}
