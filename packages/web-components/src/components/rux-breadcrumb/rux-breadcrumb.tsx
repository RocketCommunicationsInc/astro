import {
    Component,
    h,
    Host,
    Prop,
    Listen,
    Element,
    State,
    Fragment,
} from '@stencil/core'

@Component({
    tag: 'rux-breadcrumb',
    styleUrl: 'rux-breadcrumb.scss',
    shadow: true,
})
export class RuxBreadcrumb {
    @Element() el!: HTMLRuxBreadcrumbElement
    @State() crumbs: HTMLElement[] = []

    componentWillLoad() {
        this._getAllCrumbs()
    }

    private _getAllCrumbs() {
        this.crumbs = Array.from(
            this.el.querySelectorAll('rux-breadcrumb-item')
        )
    }

    render() {
        return (
            <Host>
                <nav>
                    <ol>
                        <slot onSlotchange={this._handleSlotChange}></slot>
                    </ol>
                </nav>
            </Host>
        )
    }
}
