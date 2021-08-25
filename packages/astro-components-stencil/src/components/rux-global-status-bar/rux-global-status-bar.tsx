import { Prop, Component, Host, h } from '@stencil/core'
import { AppMeta } from './appMeta/appMeta'

/**
 * @slot (default) - Used for any additional center content (RuxClock, RuxTabs, etc.)
 * @slot left-side - Used to prepend a RuxIcon or similar element
 * @slot app-meta - Used to display the Application's metadata (Domain, Name, State, Version, etc.)
 * @slot right-side - Used to append optional content
 */
@Component({
    tag: 'rux-global-status-bar',
    styleUrl: 'rux-global-status-bar.scss',
    shadow: true,
})
export class RuxGlobalStatusBar {
    /**
     * Declares whether the menu-icon will be shown in the left-side slot
     */
    @Prop({
        attribute: 'include-icon',
    })
    includeIcon: boolean = false
    /**
     * Declares whether the app-state component will be shown in the app-meta slot
     */
    @Prop({
        attribute: 'include-app-state',
    })
    includeAppState: boolean = false
    /**
     * Declares whether the username component will be shown in the app-meta slot
     */
    @Prop({
        attribute: 'include-username',
    })
    includeUsername: boolean = false
    /**
     * Sets the domain of the application to be displayed in the app-meta element
     */
    @Prop({
        attribute: 'app-domain',
    })
    appDomain?: string
    /**
     * Sets the name of the application to be displayed in the app-meta element
     */
    @Prop({
        attribute: 'app-name',
    })
    appName?: string
    /**
     * Sets the version of the application to be displayed in the app-meta element
     */
    @Prop({
        attribute: 'app-version',
    })
    appVersion?: string
    /**
     * Sets the icon to be displayed in the default rux-icon component
     */
    @Prop({ attribute: 'menu-icon', mutable: true, reflect: true })
    menuIcon: string = 'apps'

    render() {
        return (
            <Host>
                <header>
                    <slot name="left-side">
                        {this.includeIcon && (
                            <rux-icon
                                icon={`${this.menuIcon}`}
                                size="small"
                                class={
                                    this.includeAppState || this.includeUsername
                                        ? 'shifted-up'
                                        : ''
                                }
                            />
                        )}
                    </slot>

                    <slot name="app-meta">
                        {(this.appDomain ||
                            this.appName ||
                            this.appVersion) && (
                            <AppMeta
                                domain={this.appDomain?.toUpperCase()}
                                name={this.appName?.toUpperCase()}
                                version={this.appVersion}
                            >
                                <div class="app-state-wrapper">
                                    {this.includeAppState && (
                                        <div class="app-state">App state</div>
                                    )}
                                    {this.includeUsername && (
                                        <div class="username">Username</div>
                                    )}
                                </div>
                            </AppMeta>
                        )}
                    </slot>

                    <div class="slotted-content">
                        <slot></slot>
                    </div>

                    <slot name="right-side"></slot>
                </header>
            </Host>
        )
    }
}
