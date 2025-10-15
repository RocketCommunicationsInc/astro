import './appMeta/appMeta'

// LitElement imports
import { LitElement, css, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import style from './rux-global-status-bar.scss?inline'

/**
 * @slot (default) - Used for any additional center content (RuxClock, RuxTabs, etc.)
 * @slot left-side - Used to prepend a RuxIcon or similar element
 * @slot app-meta - Used to display the Application's metadata (Domain, Name, State, Version, etc.)
 * @slot right-side - Used to append optional content
 *
 * @part app-state - The container for the applications state
 * @part middle - The container for the middle of the global-status-bar
 * @part container - The container for global-status-bar
 * @part username - The container for the username
 * @part app-meta - The container for the Application's metadata
 * @part center - The container for the default slot content
 */
@customElement('rux-global-status-bar')
export class RuxGlobalStatusBar extends LitElement {
    static styles = css`
        ${unsafeCSS(style)}
    `

    /**
     * Declares whether the menu-icon will be shown in the left-side slot
     */
    @property({
        attribute: 'include-icon',
        type: Boolean, // Explicitly declare type for clarity
    })
    includeIcon: boolean = false

    /**
     * Declares what text will render and whether the app-state component will be shown in the app-meta slot
     */
    @property({
        attribute: 'app-state',
        type: String,
    })
    appState?: string = ''

    /**
     * Declares the color of the the app-state component background
     */
    @property({
        attribute: 'app-state-color',
        type: String, // Lit automatically handles string to enum type
    })
    appStateColor?: 'tag1' | 'tag2' | 'tag3' | 'tag4' = 'tag1'

    /**
     * Declares what text will render and whether the username component will be shown in the app-meta slot
     */
    @property({
        type: String, // Attribute name defaults to `username` (kebab-case)
    })
    username?: string = ''

    /**
     * Sets the domain of the application to be displayed in the app-meta element
     */
    @property({
        attribute: 'app-domain',
        type: String,
    })
    appDomain?: string

    /**
     * Sets the name of the application to be displayed in the app-meta element
     */
    @property({
        attribute: 'app-name',
        type: String,
    })
    appName?: string

    /**
     * Sets the version of the application to be displayed in the app-meta element
     */
    @property({
        attribute: 'app-version',
        type: String,
    })
    appVersion?: string

    /**
     * Sets the icon to be displayed in the default rux-icon component
     */
    @property({ attribute: 'menu-icon', reflect: true, type: String })
    menuIcon: string = 'apps'

    /**
     * Reduces the height of the global status bar
     */
    @property({ attribute: 'compact', reflect: true, type: Boolean })
    compact: boolean = false

    render() {
        // Stencil's `h` function is replaced by Lit's `html` tagged template literal.
        // The `Host` element is not needed, as the template directly renders into the component's shadow DOM.
        return html`
            <header part="container">
                <slot name="left-side">
                    ${this.includeIcon
                        ? html` <rux-icon icon="${this.menuIcon}" size="small" class="${this.appState || this.username ? 'shifted-up' : ''}" exportparts="icon"></rux-icon> `
                        : ''}
                </slot>
                <slot name="app-meta">
                    ${this.appDomain || this.appName || this.appVersion
                        ? html`
                              <app-meta .domain="${this.appDomain}" .name="${this.appName}" .version="${this.appVersion}" part="app-meta">
                                  <div class="app-state-wrapper">
                                      ${this.appState ? html` <div class="app-state ${this.appStateColor}" part="app-state">${this.appState}</div> ` : ''}
                                      ${this.username ? html` <div class="username" part="username">${this.username}</div> ` : ''}
                                  </div>
                              </app-meta>
                          `
                        : ''}
                </slot>
                <div class="slotted-content" part="middle">
                    <!-- The default slot is for center content -->
                    <slot part="center"></slot>
                </div>
                <slot name="right-side"></slot>
            </header>
        `
    }
}
