import { LitElement, css, html, unsafeCSS } from 'lit'

import { customElement } from 'lit/decorators.js'
import style from './rux-indeterminate-progress.scss?inline'

/**
 * @part container - The outermost div encasing rux-indeterminate-progress which is responsible for the overall size and the outermost border.
 * @part animated-spinner - The second div in the heirarchy which is responsible for the spinning conic-gradient and the gap between the spinner and the containers's border.
 * @part inner-spinner-gap - The third div in the heirarchy which controls the gap between the animated-spinner and the inner-circle's border.
 * @part inner-circle - The fourth div in the heirarchy which controls the inner-most circle.
 */
@customElement('rux-indeterminate-progress')
export class RuxIndeterminateProgress extends LitElement {
    // LitElement automatically uses Shadow DOM by default, so `shadow: true` is not needed.

    // Styles are defined using the `static styles` property and the `css` tagged template literal.
    // You will need to paste the content of your `rux-indeterminate-progress.scss` file here.
    static styles = css`
        ${unsafeCSS(style)}
    `

    render() {
        // Stencil's `h` (Hyperscript) syntax is replaced with Lit's `html` tagged template literal.
        // The `Host` wrapper is not needed as the template is rendered directly within the custom element.
        return html`
            <div class="rux-indeterminate-container" part="container">
                <div class="rux-indeterminate-animated-spinner" part="animated-spinner">
                    <div class="rux-indeterminate-inner-spinner-gap" part="inner-spinner-gap">
                        <div class="rux-indeterminate-inner-circle" part="inner-circle"></div>
                    </div>
                </div>
            </div>
        `
    }
}
