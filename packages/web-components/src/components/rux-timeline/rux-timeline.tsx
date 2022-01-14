import { Element, State, Component, Host, h } from '@stencil/core'

@Component({
    tag: 'rux-timeline',
    styleUrl: 'rux-timeline.scss',
    shadow: true,
})
export class RuxTimeline {
    private slotContainer?: HTMLElement
    public slots?: any = 'empty'
    @State() margin = 20
    @State() time = '00:00'
    @Element() el!: HTMLRuxTimelineElement

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
        this.handleMouse = this.handleMouse.bind(this)
    }
    componentWillLoad() {
        console.log('timelinechildnodes', this.el.childNodes)
        const childNodes = this.el.childNodes
        const children = Array.prototype.filter.call(
            childNodes,
            (node) => node.nodeType == Node.ELEMENT_NODE
        )

        children.forEach((el, index) => {
            //@ts-ignore
            el.track = ++index
        })
        // this._handleSlotChange()

        window.setInterval(() => {
            this.margin = this.margin + 2
            //   console.log(this.margin);
        }, 1000)

        const { width } = this.el.getBoundingClientRect()
        console.log('current width', width)
    }

    handleMouse(e: any) {
        const rect = this.el.getBoundingClientRect()
        console.log('scrollleft', this.slotContainer?.scrollLeft)
        const scrollOffset = this.slotContainer
            ? this.slotContainer?.scrollLeft
            : 0

        const position = e.clientX - rect.left + scrollOffset

        this.margin = position
        const time = position - 200

        const min = time / 2

        const hours = Math.floor(min / 60)
        const minutes = Math.floor(min % 60)

        // const hour = Math.floor(min / 60)
        console.log(`${hours}:${minutes}`)
        this.time = `${hours}:${minutes}`
    }
    get theSlots() {
        return this.slots
    }

    private _handleSlotChange() {
        const slot = this.slotContainer?.querySelector(
            'slot'
        ) as HTMLSlotElement

        const assignedElements = slot.assignedElements({
            flatten: true,
        }) as HTMLElement[]
        this.slots = assignedElements
        //@ts-ignore
        assignedElements.map((el, index) => {
            //@ts-ignore
            // el.trackId = ++index
            // el.setAttribute('track-id', 10)
        })
    }
    render() {
        return (
            <Host>
                <div class="border">
                    <div
                        class="rux-timeline"
                        ref={(el) => (this.slotContainer = el)}
                        onMouseMove={(ev) => this.handleMouse(ev)}
                    >
                        <div
                            class="rux-playhead"
                            style={{ left: `${this.margin}px` }}
                        ></div>
                        <slot onSlotchange={this._handleSlotChange}></slot>
                    </div>
                    <div>The current time is {this.time}</div>
                </div>
            </Host>
        )
    }
}
