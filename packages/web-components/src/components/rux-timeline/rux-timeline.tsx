import { Element, Component, Host, h } from '@stencil/core'

@Component({
    tag: 'rux-timeline',
    styleUrl: 'rux-timeline.scss',
    shadow: true,
})
export class RuxTimeline {
    private slotContainer?: HTMLElement
    public slots?: any = 'empty'
    @Element() el!: HTMLRuxTimelineElement

    connectedCallback() {
        this._handleSlotChange = this._handleSlotChange.bind(this)
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
                <div
                    class="rux-timeline"
                    ref={(el) => (this.slotContainer = el)}
                >
                    <slot onSlotchange={this._handleSlotChange}></slot>
                </div>
            </Host>
        )
    }
}
