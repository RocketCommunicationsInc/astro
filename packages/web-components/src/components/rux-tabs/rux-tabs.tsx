/* eslint react/jsx-no-bind: 0 */ // --> OFF
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
    Watch,
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
    @Element() el!: HTMLRuxTabsElement
    /**
     *  Holds all `<rux-tab-panel>` components based on the event emitted from the `<rux-tab-panels>` component.
     */
    @State() _panels: Array<HTMLRuxTabPanelElement> = []
    /**
     *  Holds all `<rux-tab>` components that are children of `<rux-tabs>`.
     */
    @State() _tabs: Array<HTMLRuxTabElement> = []

    /**
     * If passed or set to true, displays the tabs in a smaller style, suitable for limited-space uses. (Deprecated: use `size` prop instead)
     */
    @Prop() small?: boolean

    /**
     * Sets the tab element size `small` or `large. The default styling is large. Use `small` when space is limited.
     */
    @Prop({ reflect: true }) size?: 'small' | 'large'

    // This allows us to hear the selected prop change on tab.
    // Once we hear it, we need to update the related panels visibilty accordingly.
    @Listen('ruxtabselected', { target: 'window' })
    handleTabselected(e: CustomEvent) {
        const target = e.target as HTMLRuxTabElement
        //* only change the classlist of panels assoiciated with this rux-tabs component
        const children = Array.from(this.el.children)
        if (target.selected && children.includes(target)) {
            //filter through tabs and set the corresponding panel to not be hidden
            const selectedPanel = this._panels.find(
                (panel) =>
                    panel.getAttribute('aria-labelledby') ===
                    target.getAttribute('id')
            )
            this._panels.forEach((panel) => panel.classList.add('hidden'))
            selectedPanel?.classList.remove('hidden')
        }
    }

    @Listen('ruxregisterpanels', { target: 'window' })
    handleListen(e: CustomEvent) {
        const sourcePanel = e.target as HTMLRuxTabPanelElement
        const sourcePanelLabelId = sourcePanel.getAttribute('aria-labelledby')

        /**
         * The registerPanel event will be emitted from any Tab Panel,
         * not just the Panels associated with this component.
         * In scenarios where there could be multiple tab panels,
         * we want to filter out and only add the panels that belong
         * to this specific Tab group.
         */

        if (sourcePanelLabelId === this.el.id) {
            this._registerPanels(e)
        }
    }

    @Watch('small')
    handleSmallChange() {
        //determine whether or not to pass small attr to child tabs
        if (this.small) {
            this._tabs.forEach((tab) => tab.setAttribute('small', ''))
        } else {
            this._tabs.forEach((tab) => {
                if (tab.hasAttribute('small')) {
                    tab.removeAttribute('small')
                }
            })
        }
    }

    @Watch('size')
    handleSizeChange() {
        //determine whether or not to pass size attr to child tabs
        if (this.size) {
            this._tabs.forEach((tab) =>
                tab.setAttribute('size', `${this.size}`)
            )
        } else {
            this._tabs.forEach((tab) => {
                if (tab.hasAttribute('size')) {
                    tab.removeAttribute('size')
                }
            })
        }
    }

    @Listen('keydown')
    onKeydown(e: any) {
        // Get all tabs inside of the tab group and then
        // filter out disabled tabs since we need to skip those
        const tabs = this._tabs.filter((tab) => !tab.disabled)

        // Only move the tab if the current focus is in the tab group
        if (e.target && tabs.includes(e.target)) {
            const index = tabs.findIndex((tab) => tab === e.target)

            let next

            // If hitting arrow down or arrow right, move to the next tab
            // If we're on the last tab, move to the first tab
            if (['ArrowDown', 'ArrowRight'].includes(e.code)) {
                next = index === tabs.length - 1 ? tabs[0] : tabs[index + 1]
            }

            // If hitting arrow up or arrow left, move to the previous tab
            // If we're on the first tab, move to the last tab
            if (['ArrowUp', 'ArrowLeft'].includes(e.code)) {
                next = index === 0 ? tabs[tabs.length - 1] : tabs[index - 1]
            }

            if (next && tabs.includes(next)) {
                const nextFocus = next.shadowRoot?.querySelector(
                    '.rux-tab'
                ) as HTMLElement
                nextFocus.focus()
            }
        }
    }

    /**
     * Fires whenever a new tab is selected, and emits the selected tab on the event.detail.
     */
    @Event({ eventName: 'ruxselected' }) ruxSelected!: EventEmitter

    connectedCallback() {
        this._addTabs()
    }

    private _addTabs() {
        this._tabs = Array.from(this.el.querySelectorAll('rux-tab'))
    }

    private _registerPanels(e: CustomEvent) {
        this._panels = []
        e.detail.forEach((panel: HTMLRuxTabPanelElement) => {
            this._panels.push(panel)
        })
        // run addTabs if this event was heard.
        this._addTabs()

        // Default to first tab if none are selected
        const selectedTab =
            this._tabs.find((tab) => tab.selected) || this._tabs[0]
        this._setTab(selectedTab)
    }

    private _onPress(e: KeyboardEvent) {
        e.key === 'Enter' ? this._onClick(e) : null
    }

    private _onClick(e: KeyboardEvent | MouseEvent) {
        const target = e.target as HTMLElement
        //get the tab in case complex html is nested inside rux-tab
        const tab = target.closest('rux-tab') as HTMLRuxTabElement
        this.ruxSelected.emit(tab)
        if (tab.getAttribute('disabled') === null) {
            this._setTab(tab)
        }
    }

    private _reset() {
        // hide everything
        // Only reset the tabs and panels that are part of this instance of rux-tabs

        this._tabs.forEach((tab) => {
            if (tab.parentElement === this.el) tab.selected = false
        })
        this._panels.forEach((panel) => {
            if (
                panel.parentElement?.getAttribute('aria-labelledby') ===
                this.el.id
            )
                panel.classList.add('hidden')
        })
    }

    private _setTab(selectedTab: HTMLRuxTabElement) {
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
            <Host
                onClick={(e: MouseEvent) => this._onClick(e)}
                onKeyPress={(e: KeyboardEvent) => this._onPress(e)}
                role="tablist"
            >
                <slot></slot>
            </Host>
        )
    }
}
