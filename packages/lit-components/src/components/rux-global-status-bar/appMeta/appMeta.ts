import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

// The interface for props is helpful for TypeScript, but the properties themselves
// are defined via @property decorators in the class.
// interface AppMetaProps { // This interface is no longer directly used to define props,
//     domain?: string      // but it still serves as documentation for expected types.
//     name?: string
//     version?: string
// }

@customElement('app-meta') // Define the custom element tag name
export class AppMeta extends LitElement {
    // Define properties that correspond to AppMetaProps
    @property({ type: String })
    domain?: string

    @property({ type: String })
    name?: string

    @property({ type: String })
    version?: string

    render() {
        return html`
            <div class="app-meta" part="app-meta">
                <div class="app-info-wrapper">
                    ${this.domain ? html`<h1 class="app-domain">${this.domain}</h1>` : ''} ${this.name ? html`<h1 class="app-name">${this.name}</h1>` : ''}
                    ${this.version ? html`<span class="app-version">${this.version}</span>` : ''}
                </div>
                <slot></slot>
            </div>
        `
    }
}
