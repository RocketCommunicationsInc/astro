import { Element, Component, Prop, Host, h } from '@stencil/core'

let id = 1
@Component({
    tag: 'rux-track',
    styleUrl: 'rux-track.scss',
    shadow: true,
    // styles: `
    //   :host, rux-track {
    //     background: red;
    //   }
    //   ::slotted(rux-time-region) {
    //     grid-row: ${id};
    //   }
    // `
})
export class RuxTrack {
    @Element() el!: HTMLRuxTrackElement
    private slotContainer?: HTMLElement

    // private _trackId = `rux-track-${++id}`

    /**the id */
    @Prop({ reflect: true }) track?: number = 0

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
    }

    componentWillLoad() {
        // const timeline = this.el.closest('rux-timeline')
        this.initializeRows()
    }

    initializeRows() {
        const childNodes = this.el.childNodes
        const children = Array.prototype.filter.call(
            childNodes,
            (node) => node.nodeType == Node.ELEMENT_NODE
        )

        children.forEach((el) => {
            el.track = this.track
        })
    }

    private _handleSlotChange() {
        const slot = this.slotContainer?.querySelector(
            'slot'
        ) as HTMLSlotElement

        const assignedElements = slot.assignedElements({
            flatten: true,
        }) as HTMLElement[]

        //@ts-ignore
        assignedElements.map((el, index) => {
            //@ts-ignore
            // el.track = 5
            // el.trackId = ++index
            // el.setAttribute('track-id', 10)
        })
    }

    getCol(index: number) {
        if (index === 0) {
            return 2
        } else {
            return index + 2
        }
    }

    render() {
        return (
            <Host>
                <div class="rux-track" ref={(el) => (this.slotContainer = el)}>
                    <div
                        class="rux-track__header"
                        style={{
                            gridRow: `${this.track}`,
                        }}
                    >
                        <slot name="label"></slot>
                    </div>

                    <slot onSlotchange={this._handleSlotChange}></slot>
                </div>
                {[...Array(780)].map((x: any, i: any) => (
                    <div
                        style={{
                            gridRow: `${this.track}`,
                            gridColumn: `${i + 2} / ${++i + 2}`,
                        }}
                        class="cell"
                        part="cell"
                    ></div>
                ))}
            </Host>
        )
    }
}
