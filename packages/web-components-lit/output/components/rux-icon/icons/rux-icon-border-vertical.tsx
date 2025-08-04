To convert the Stencil.js component to LitElement, we'll replace Stencil's decorators and rendering logic with Lit's `customElement`, `property`, `html`, `css`, and `render` methods. We'll also leverage Lit's best practices for styling, using CSS custom properties for dynamic sizing.

Here's the converted LitElement component:

```typescript
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js'; // Used for injecting the raw SVG string
import svgIcon from '../../../icons/border-vertical.svg';

/**
 * RuxIconBorderVertical component for displaying a border vertical icon.
 * This component dynamically sizes the SVG based on the 'size' property.
 */
@customElement('rux-icon-border-vertical')
export class RuxIconBorderVertical extends LitElement {
    /**
     * The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto'
     * or any custom CSS value ('30px', '1rem', '3.321em').
     */
    @property({ type: String })
    size:
        | 'extra-small'
        | 'small'
        | 'normal'
        | 'large'
        | 'auto'
        | string = 'auto';

    static styles = css`
        :host {
            display: inline-block; /* Aligns with text flow like an icon */
            vertical-align: middle; /* Ensures proper vertical alignment with text */
            /* Apply the computed size using a CSS custom property */
            width: var(--rux-icon-size, auto);
            height: var(--rux-icon-size, auto);
        }

        .icon-container {
            width: 100%;
            height: 100%;
            display: flex; /* Centers the SVG within the container if it doesn't perfectly fill */
            align-items: center;
            justify-content: center;
        }

        .icon-container svg {
            /* Ensure the SVG itself scales to fill its container */
            display: block;
            width: 100%;
            height: 100%;
        }
    `;

    /**
     * Computes the actual CSS size value based on the 'size' property.
     * Maps predefined keywords to specific rem values or uses the raw string.
     */
    private get _iconSizeValue(): string {
        const sizes: { [key: string]: string } = {
            'extra-small': '1rem',
            small: '2rem',
            normal: '3rem',
            large: '4rem',
        };
        // Return the mapped size or the raw string if not a predefined keyword
        return sizes[this.size] || this.size;
    }

    /**
     * LitElement's render method, responsible for rendering the component's HTML.
     */
    render() {
        // Set the CSS custom property on the host element.
        // This will cause the styles defined in static styles to apply the calculated size.
        this.style.setProperty('--rux-icon-size', this._iconSizeValue);

        // Render the SVG icon by injecting the raw SVG string using unsafeHTML.
        // A div wrapper provides a consistent container for the SVG.
        return html`<div class="icon-container">${unsafeHTML(svgIcon)}</div>`;
    }
}
```