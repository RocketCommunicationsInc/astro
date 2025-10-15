import { LitElement, css, html, unsafeCSS } from 'lit';

import { customElement } from 'lit/decorators.js';
import style from './rux-tab-panel.scss?inline';

/**
 * @slot (default) - Used to render any additional content inside a rux-tab-panel.
 *
 * A rux-tab-panel represents the content of a single tab within a tabbed interface.
 * It typically works in conjunction with a `rux-tabs` component and is managed
 * by a parent component (or JavaScript) that controls its visibility based on
 * the active tab.
 */
@customElement('rux-tab-panel')
export class RuxTabPanel extends LitElement {
    // Styles from your rux-tab-panel.scss would go here.
    // In Lit, you typically inline the CSS as a tagged template literal.
    // If you have a complex SCSS file, your build system would compile it
    // to CSS and then you'd paste the resulting CSS string here.
    static styles = css`
        ${unsafeCSS(style)}
    `;

    /**
     * LitElement's connectedCallback is called when the element is inserted into the DOM.
     * This is where you'd set initial attributes or perform other setup.
     */
    connectedCallback() {
        super.connectedCallback(); // Always call super.connectedCallback()

        // In Stencil, you used @Element() el! and then el.setAttribute.
        // In Lit, `this` inside the class *is* the host element, so you can
        // directly call setAttribute on `this`.
        this.setAttribute('role', 'tabpanel');
    }

    /**
     * LitElement's render method defines the component's internal Shadow DOM structure.
     * Stencil's <Host> is implicit in Lit; the content returned by `render()` is
     * automatically placed inside the component's shadow root.
     */
    render() {
        return html`<slot></slot>`;
    }
}
