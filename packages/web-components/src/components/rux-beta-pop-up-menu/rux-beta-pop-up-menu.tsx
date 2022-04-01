import { Prop, Watch, Element, Component, Host, h } from '@stencil/core'
import {
    Placement,
    computePosition,
    arrow,
    offset,
    shift,
    flip,
} from '@floating-ui/dom'

@Component({
    tag: 'rux-beta-pop-up-menu',
    styleUrl: 'rux-beta-pop-up-menu.scss',
    shadow: true,
})
export class RuxBetaPopUpMenu {
    private trigger!: HTMLElement
    private content!: HTMLElement
    private arrowEl?: HTMLElement

    @Prop({ mutable: true }) open = false
    @Prop() placement: Placement = 'bottom'

    @Watch('open')
    handleOpen() {
        console.log(this.hasMenu)

        this.position()
    }

    connectedCallback() {
        this.handleTriggerClick = this.handleTriggerClick.bind(this)
    }

    handleTriggerClick() {
        this.open = !this.open
        console.log('hello world')
    }

    componentDidLoad() {
        console.log(this.contentSlot)
    }

    private position() {
        //@ts-ignore
        computePosition(this.triggerSlot, this.content, {
            placement: this.placement,
            middleware: [
                offset(6),
                flip(),
                // shift({padding: 5}),
                //@ts-ignore
                arrow({ element: this.arrowEl }),
            ],
            //@ts-ignore
            // middleware: [flip()]
        }).then(({ x, y, placement, middlewareData }) => {
            Object.assign(this.content.style, {
                left: `${x}px`,
                top: `${y}px`,
            })

            //@ts-ignore
            const { x: arrowX, y: arrowY } = middlewareData.arrow

            const staticSide = {
                top: 'bottom',
                right: 'left',
                bottom: 'top',
                left: 'right',
            }[placement.split('-')[0]]

            //@ts-ignore
            Object.assign(this.arrowEl.style, {
                left: arrowX != null ? `${arrowX}px` : '',
                top: arrowY != null ? `${arrowY}px` : '',
                right: '',
                bottom: '',
                //@ts-ignore
                [staticSide]: '-4px',
            })
        })
    }

    get contentSlot() {
        //@ts-ignore
        return this.content
            ?.querySelector('slot')
            .assignedElements({ flatten: true })[0]
        // .filter(el => el.tagName.toLowerCase() === 'sl-menu')[0] as HTMLSlMenuElement;
    }

    get triggerSlot() {
        //@ts-ignore
        return this.trigger
            ?.querySelector('slot')
            .assignedElements({ flatten: true })[0]
        // .filter(el => el.tagName.toLowerCase() === 'sl-menu')[0] as HTMLSlMenuElement;
    }

    get hasMenu(): boolean {
        //@ts-ignore
        return !!this.content
            ?.querySelector('slot')
            .assignedElements({ flatten: true })
            .filter(
                (el) => el.tagName.toLowerCase() === 'rux-beta-menu'
            )[0] as HTMLRuxBetaMenuElement
    }

    render() {
        console.log(this.hasMenu)

        return (
            <Host>
                <div class="rux-popup">
                    <div
                        onClick={this.handleTriggerClick}
                        //@ts-ignore
                        ref={(el) => (this.trigger = el)}
                    >
                        <slot name="trigger"></slot>
                    </div>

                    <div
                        class={{
                            hidden: !this.open,
                            'rux-popup__content': true,
                            'rux-popup__content--menu': this.hasMenu,
                        }}
                        part="popup-content"
                        //@ts-ignore
                        ref={(el) => (this.content = el)}
                    >
                        <div
                            class="rux-popup-arrow"
                            ref={(el) => (this.arrowEl = el)}
                        ></div>

                        <slot></slot>
                    </div>
                </div>
            </Host>
        )
    }
}
