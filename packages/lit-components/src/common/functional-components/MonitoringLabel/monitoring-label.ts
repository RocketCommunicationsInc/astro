import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

// Define the component as a custom element.
// Choose a descriptive tag name, often prefixed (e.g., 'rux-monitoring-label')
// to avoid conflicts with standard HTML elements.
@customElement('monitoring-label')
export class MonitoringLabel extends LitElement {
    /**
     * The main label text.
     */
    @property({ type: String })
    label?: string

    /**
     * The sub-label text, which can be hidden if not provided.
     */
    @property({ type: String })
    sublabel?: string

    // Optional: If the styles for 'rux-advanced-status__hidden' or other classes
    // are meant to be scoped directly to this component, you would define them here:
    // static styles = css`
    //   .rux-advanced-status__hidden {
    //     display: none;
    //   }
    //   /* Add other component-specific styles here if needed */
    // `;

    /**
     * Renders the component's HTML template.
     */
    render() {
        return html`
            <div class="rux-advanced-status__label" part="monitoring-label">
                <span>${this.label}</span>
                <span class="rux-advanced-status__sublabel ${!this.sublabel ? 'rux-advanced-status__hidden' : ''}" part="monitoring-sublabel"> ${this.sublabel} </span>
            </div>
        `
    }
}
