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
                        {this.crumbs.map((crumb, index) => {
                            if (index === this.crumbs.length - 1) {
                                return h(<li>{crumb}</li>)
                            }
                            return h(
                                <Fragment>
                                    <li>{crumb}</li>
                                    <li
                                        class="separator"
                                        aria-hidden="true"
                                    ></li>
                                </Fragment>
                            )
                        })}
                    </ol>
                </nav>
            </Host>
        )
    }
}
