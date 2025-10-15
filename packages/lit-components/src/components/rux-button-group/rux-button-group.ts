import { LitElement, css, html, unsafeCSS } from 'lit'

import { classMap } from 'lit/directives/class-map.js' // For dynamic classes
import { property } from 'lit/decorators.js'
import style from './rux-button-group.scss?inline'

/**
 * @deprecated Button Group is deprecated and will be removed in a next major release.
 * Instead, you should use `flex` or `grid` in combination with our spacing design tokens.
 * @slot (default) - Two or more RuxButton components to render in the group
 * @part container - the components container
 */
export class RuxButtonGroup extends LitElement {
    // Define styles directly within the component.
    // You would place the compiled CSS from rux-button-group.scss here.
    // For a real project, you might use a build tool (e.g., Vite, Webpack) to
    // import and process your SCSS into this `static styles` block.
    static styles = css`
        ${unsafeCSS(style)}
    `

    /**
     * The horizontal alignment of buttons within the group
     */
    @property({
        attribute: 'h-align', // Specifies the attribute name for the property
        type: String, // Declares the expected type for better handling
    })
    hAlign: 'left' | 'center' | 'right' = 'left'

    render() {
        // Create an object for classMap to manage dynamic classes
        const classes = {
            'rux-button-group': true,
            'rux-button-group--left': this.hAlign === 'left',
            'rux-button-group--right': this.hAlign === 'right',
            'rux-button-group--center': this.hAlign === 'center',
        }

        return html`
            <div class=${classMap(classes)} part="container">
                <slot></slot>
            </div>
        `
    }
}

// Register the custom element with the browser
// This is typically done once per component file.
if (!customElements.get('rux-button-group')) {
    customElements.define('rux-button-group', RuxButtonGroup)
}
