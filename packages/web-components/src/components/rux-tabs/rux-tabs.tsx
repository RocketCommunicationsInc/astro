import {
    Component,
    Host,
    h,
    State,
    Prop,
    Element,
    Listen,
    Event,
    EventEmitter,
} from '@stencil/core'

/**
 * @slot (default) - Used for instances of rux-tab
 */
@Component({
    tag: 'rux-tabs',
    styleUrl: 'rux-tabs.scss',
    shadow: true,
})
export class RuxTabs {
    @Element() el!: HTMLElement
    /**
     *  Holds all `<rux-tab-panel>` components based on the event emitted from the `<rux-tab-panels>` component.
     */
    @State() _panels: Array<HTMLRuxTabPanelElement> = []
    /**
     *  Holds all `<rux-tab>` components that are children of `<rux-tabs>`.
     */
    @State() _tabs: Array<HTMLRuxTabElement> = []

    /**
     * If passed or set to true, displays the tabs in a smaller style, suitable for limited-space uses.
     */
    @Prop() small?: boolean

    @Listen('ruxregisterpanels', { target: 'window' })
    handleListen(e: CustomEvent) {
        this._registerPanels(e)
    }

    /**
     * Fires whenever a new tab is selected, and emits the selected tab.
     */
    @Event({ eventName: 'ruxselected' }) ruxSelected!: EventEmitter

    componentWillLoad() {
        this._addTabs()
    }

    _addTabs() {
        this._tabs = Array.from(this.el.querySelectorAll('rux-tab'))
    }

    _registerPanels(e: CustomEvent) {
        e.detail.forEach((panel: HTMLRuxTabPanelElement) => {
            this._panels.push(panel)
        })
        // Default to first tab if none are selected
        const selectedTab =
            this._tabs.find((tab) => tab.selected) || this._tabs[0]
        this._setTab(selectedTab)
    }

    _onClick(e: MouseEvent) {
        const tab = e.target as HTMLRuxTabElement
        this.ruxSelected.emit(tab)
        if (
            tab.getAttribute('role') === 'tab' &&
            tab.getAttribute('disabled') === null
        ) {
            this._setTab(tab)
        }
    }

    _reset() {
        // hide everything
        this._tabs.forEach((tab) => (tab.selected = false))
        //* classLIst on rux-tab-panel is an array of strings.
        this._panels.forEach((panel) => panel.classList.add('hidden'))
    }

    _setTab(selectedTab: HTMLRuxTabElement) {
        this._reset()

        // find the panel whose aria-labeldby attribute matches the tab’s id
        const selectedPanel = this._panels.find(
            (panel) =>
                panel.getAttribute('aria-labelledby') ===
                selectedTab.getAttribute('id')
        )

        if (selectedTab) selectedTab.selected = true
        if (selectedPanel) selectedPanel.classList.remove('hidden')
    }

    render() {
        return (
            <Host onClick={(e: MouseEvent) => this._onClick(e)}>
                <slot></slot>
            </Host>
        )
    }
}
