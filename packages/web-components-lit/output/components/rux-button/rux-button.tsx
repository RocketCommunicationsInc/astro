To convert your Stencil.js component to LitElement, we'll need to make the following changes:

1.  **Imports**: Replace Stencil imports with Lit's `LitElement`, `html`, `css`, `customElement`, `property`, and `classMap`.
2.  **Component Definition**: Extend `LitElement` instead of using `@Component`.
3.  **Styles**: Convert `styleUrl` to a static `styles` property using Lit's `css` tagged template literal. You'll need to embed the CSS content from `rux-button.scss` directly or import its compiled CSS. I'll provide placeholder styles.
4.  **Properties**: Convert `@Prop` to `@property`. `reflect: true` and `attribute` options map directly. Default values are set in the property declaration.
5.  **Shadow DOM Options**: `shadow: { delegatesFocus: true }` in Stencil becomes overriding `createRenderRoot` in Lit to pass `delegatesFocus: true` to `attachShadow`.
6.  **Element Reference**: `this.el` (the host element reference) in Stencil becomes `this` in LitElement as `this` already refers to the component instance (which is the host element).
7.  **`h` (Hyperscript) to `html`**: Stencil's `h` function for JSX syntax is replaced with Lit's `html` tagged template literal.
8.  **Class Binding**: Stencil's object-based class binding `{ 'class-name': boolean }` is replaced with Lit's `classMap` directive.
9.  **Attribute Binding**: Lit uses `?` prefix for boolean attributes (`?disabled=${disabled}`) and direct string interpolation for others.
10. **Event Handling**: `onClick` becomes `@click`.
11. **Host**: The concept of `<Host>` in Stencil is implicit in Lit's `render()` method, as the template is rendered directly into the component's shadow DOM.
12. **`hasShadowDom` utility**: The utility needs to be ported or re-evaluated for Lit. For LitElement components, `this.shadowRoot` will always exist after the component is connected, so `hasShadowDom(this)` will effectively always be true if the component uses shadow DOM (which Lit does by default).

Here's the converted LitElement code:

```typescript
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

// --- Start of `hasShadowDom` utility (copied from your Stencil project context) ---
// Note: For LitElement, `this.shadowRoot` will generally exist if the component is using shadow DOM.
// This utility's main purpose here is to correctly replicate the original Stencil logic
// regarding form submission workaround when the button is inside a shadow DOM.
const hasShadowDom = (element: Element): boolean => {
    return !!element.shadowRoot;
};
// --- End of `hasShadowDom` utility ---

/**
 * @part container - the components native button element.
 * @part icon - the optional rux-icon
 */
@customElement('rux-button')
export class RuxButton extends LitElement {
    // Styles: Paste the content of your `rux-button.scss` here,
    // ensuring it's valid CSS. If it's SCSS, it needs to be compiled to CSS first.
    static styles = css`
        :host {
            display: inline-block; /* Adjust as per your component's natural display */
        }

        .rux-button {
            /* Basic styles from your rux-button.scss */
            padding: 0.5rem 1rem;
            border: 1px solid var(--button-border-color, #6a7684);
            border-radius: 4px;
            background-color: var(--button-bg-color, #1e3650);
            color: var(--button-text-color, #fff);
            font-family: var(--font-family, 'Arial', sans-serif);
            font-size: var(--font-size-base, 1rem);
            font-weight: var(--font-weight-medium, 500);
            line-height: var(--line-height-heading, 1.5);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem; /* Space between icon and text */
            box-sizing: border-box;
            text-decoration: none; /* In case it's used with an anchor */
            transition: all 0.2s ease-in-out;
            white-space: nowrap; /* Prevent text wrapping */
        }

        .rux-button--secondary {
            background-color: var(--button-secondary-bg-color, transparent);
            border-color: var(--button-secondary-border-color, #6a7684);
            color: var(--button-secondary-text-color, #6a7684);
        }

        .rux-button--borderless {
            border: none;
            background-color: transparent;
            padding: 0; /* Adjust as needed */
        }

        .rux-button--icon-only {
            padding: 0.5rem; /* Square button for icon only */
            min-width: 32px; /* Example size for icon-only */
            min-height: 32px; /* Example size for icon-only */
        }

        .rux-button--small {
            padding: 0.25rem 0.5rem;
            font-size: 0.875rem;
        }

        .rux-button--large {
            padding: 0.75rem 1.5rem;
            font-size: 1.125rem;
        }

        .rux-button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        /* Basic styling for the rux-icon if it's used within the button */
        rux-icon {
            display: inline-flex; /* Ensures icon alignment */
            align-items: center;
            justify-content: center;
        }
    `;

    /**
     * For a [button style guide, see the Button section in Astro UXDS Guidelines](https://astrouxds.com/components/button)
     * Displays an Astro icon matching this string. For a [full list of available icons,
     * see the Icons section in Astro UXDS Guidelines](https://astrouxds.com/ui-components/icons-and-symbols)
     */
    @property({ type: String, reflect: true }) icon?: string;

    /**
     * Hides slotted text from the button by setting rux-button--icon-only class
     */
    @property({ type: Boolean, attribute: 'icon-only', reflect: true })
    iconOnly: boolean = false;

    /**
     * Changes button style from solid to secondary by setting the rux-button--secondary class
     */
    @property({ type: Boolean }) secondary: boolean = false;

    /**
     * Toggles disabled attribute on the button
     */
    @property({ type: Boolean, reflect: true }) disabled = false;

    /**
     * Changes button style from solid to borderless by setting the rux-button--borderless class
     */
    @property({ type: Boolean }) borderless: boolean = false;

    /**
     * Changes size of a button from medium to small or large by setting sizing classes
     * rux-button--small
     * rux-button--large
     */
    @property({ type: String, reflect: true })
    size?: 'small' | 'medium' | 'large';

    /**
     * The button type. Use 'submit' to submit native form data.
     */
    @property({ type: String }) type: 'submit' | 'button' = 'button';

    // Stencil's shadow: { delegatesFocus: true } mapping
    // This method is called by LitElement to create its ShadowRoot.
    // By default, it calls `this.attachShadow({ mode: 'open' })`.
    // We override it to add `delegatesFocus: true`.
    protected createRenderRoot(): Element | ShadowRoot {
        return this.attachShadow({ mode: 'open', delegatesFocus: true });
    }

    /**
     * Creates and appends a native <button> if used within a form
     * so that it can trigger the submit event.
     *
     * Shadow DOM limitation prevents <form> from working correctly.
     * https://github.com/ionic-team/ionic-framework/blob/main/core/src/components/button/button.tsx
     * @param ev
     */
    private handleClick = (ev: Event) => {
        // In LitElement, `this.shadowRoot` will be true if the component is using Shadow DOM.
        // This check ensures the workaround only applies when necessary (button in shadow DOM).
        if (hasShadowDom(this)) { // `this` refers to the LitElement instance
            const form = this.closest('form');
            if (form) {
                ev.preventDefault();

                const fakeButton = document.createElement('button');
                fakeButton.type = this.type; // Use the component's 'type' prop for the fake button
                fakeButton.style.display = 'none';
                form.appendChild(fakeButton);
                fakeButton.click();
                fakeButton.remove();
            }
        }
    };

    render() {
        const { size, iconOnly, secondary, disabled, icon, borderless } = this;

        // Use classMap directive for dynamic classes
        const buttonClasses = {
            'rux-button': true,
            'rux-button--secondary': secondary,
            'rux-button--default': !secondary, // Added explicitly for default styling if not secondary
            'rux-button--small': size === 'small',
            'rux-button--large': size === 'large',
            'rux-button--icon-only': iconOnly,
            'rux-button--borderless': borderless,
        };

        return html`
            <button
                type="button" <!-- Inner button is always 'button' type, 'submit' handled by workaround -->
                @click=${this.handleClick}
                class=${classMap(buttonClasses)}
                ?disabled=${disabled} <!-- Lit's boolean attribute binding -->
                aria-disabled=${disabled ? 'true' : 'false'} <!-- ARIA attribute requires string 'true'/'false' -->
                part="container"
            >
                ${icon
                    ? html`
                          <rux-icon
                              size="auto"
                              icon=${icon}
                              exportparts="icon"
                              color=${secondary ? 'primary' : 'dark'}
                          ></rux-icon>
                      `
                    : null}

                <slot></slot>
            </button>
        `;
    }
}
```