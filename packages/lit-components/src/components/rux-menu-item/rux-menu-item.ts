import { LitElement, css, html, unsafeCSS } from 'lit'

import { classMap } from 'lit/directives/class-map.js'
import { property } from 'lit/decorators.js'
import style from './rux-menu-item.scss?inline'

export class RuxMenuItem extends LitElement {
    static styles = css`
        ${unsafeCSS(style)}
    `

    /**
     * sets the menu item as selected
     */
    @property({ type: Boolean, reflect: true })
    selected = false

    /**
     * sets the menu item as disabled
     */
    @property({ type: Boolean, reflect: true })
    disabled = false

    /**
     * the value returned when item is selected.
     * `mutable: true` in Stencil just means the property can be changed
     * internally without automatically triggering a re-render from external
     * attribute changes. In Lit, properties are inherently mutable, and
     * `reflect: true` will update the attribute when the property is changed.
     */
    @property({ type: String, reflect: true })
    value?: string

    /**
     * Contains a URL or a URL fragment that the hyperlink points to.
     * If this property is set, an anchor tag will be rendered.
     */
    @property({ type: String })
    href: string | undefined

    /**
     * Specifies where to display the linked URL.
     * Only applies when an `href` is provided.
     * Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
     */
    @property({ type: String })
    target: string | undefined

    /**
     * Specifies the relationship of the target object to the link object.
     * The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
     */
    @property({ type: String })
    rel: string | undefined

    /**
     * This attribute instructs browsers to download a URL instead of navigating to
     * it, so the user will be prompted to save it as a local file. If the attribute
     * has a value, it is used as the pre-filled file name in the Save prompt
     * (the user can still change the file name if they want).
     */
    @property({ type: String })
    download: string | undefined

    render() {
        const { disabled, selected, href, rel, download, target } = this

        const classes = {
            'rux-menu-item': true,
            'rux-menu-item--selected': selected,
            'rux-menu-item--disabled': disabled,
        }

        // Lit's html doesn't support dynamic tag names directly like JSX/Stencil.
        // We use conditional rendering to choose between 'a' and 'div'.
        if (href) {
            return html`
                <a href=${href} target=${target || ''} rel=${rel || ''} download=${download || ''} class=${classMap(classes)}>
                    <slot></slot>
                </a>
            `
        } else {
            return html`
                <div class=${classMap(classes)}>
                    <slot></slot>
                </div>
            `
        }
    }
}

// Register the custom element
customElements.define('rux-menu-item', RuxMenuItem)
