import { Prop, Component, Host, h } from '@stencil/core'
import { AppMeta } from './appMeta/appMeta'

@Component({
    tag: 'rux-global-status-bar',
    styleUrl: 'rux-global-status-bar.scss',
    shadow: true,
})
export class RuxGlobalStatusBar {
    /**
     * Declares whether a rux-icon will be shown in the left-side slot
     */
    @Prop() includeIcon?: boolean = false
    /**
     * Declares whether the app-state component will be shown in the app-meta slot
     */
    @Prop() includeAppState?: boolean = false
    /**
     * Declares whether the username component will be shown in the app-meta slot
     */
    @Prop() includeUsername?: boolean = false
    /**
     * Sets the domain of the application to be displayed in the app-meta element
     */
    @Prop() appDomain?: string
    /**
     * Sets the name of the application to be displayed in the app-meta element
     */
    @Prop() appName?: string
    /**
     * Sets the version of the application to be displayed in the app-meta element
     */
    @Prop() appVersion?: string
    /**
     * Sets the icon to be displayed in the default rux-icon component
     */
    @Prop({ mutable: true, reflect: true }) menuIcon?: string = 'apps'

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
