Okay, let's convert your Stencil.js `rux-card` component to LitElement.

The key changes involve:
1.  **Imports**: Switching from Stencil's core and decorators to Lit's.
2.  **Decorators**:
    *   `@Component` becomes `@customElement` and `static styles`.
    *   `@Element` is no longer needed as `this` refers to the element in Lit.
    *   `@State` becomes `@state`.
3.  **Rendering**: `h` (JSX) becomes Lit's `html` tagged template literal. Conditional classes use `classMap` from `lit/directives/class-map.js`.
4.  **Lifecycle**: `connectedCallback` is available, but for initial slot checks, `firstUpdated` is often more appropriate as it runs after the first render when the shadow DOM is available.
5.  **Slot Handling**: Instead of a separate `hasSlot` utility, we leverage the `slotchange` event directly on the `<slot>` element and then use `slot.assignedNodes()` (or `assignedElements()`) to check if any content is actually projected.

I'll also include a basic CSS setup to match your `styleUrl: 'rux-card.scss'`, assuming some common styles for a card.

**1. `rux-card.ts` (LitElement Version)**

```typescript
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

/**
 * @slot (default) - The card's content
 * @slot header - The card's header
 * @slot footer - The cards footer
 * @part container - The card's outermost container
 * @part header - The card's outside header element
 * @part body - The card's outside body element
 * @part footer - The card's outside footer element
 *
 */
@customElement('rux-card')
export class RuxCard extends LitElement {
    // Styles for the component. Replace with your actual rux-card.scss content.
    static styles = css`
        :host {
            display: block; /* Ensures the custom element takes up space */
        }
        .rux-card {
            border: 1px solid var(--rux-card-border-color, #e0e0e0);
            border-radius: 4px;
            overflow: hidden; /* Ensures border-radius applies to children */
            background-color: var(--rux-card-bg-color, #ffffff);
            box-shadow: var(--rux-card-box-shadow, 0 2px 4px rgba(0, 0, 0, 0.1));
            display: flex;
            flex-direction: column;
        }

        .rux-card__header {
            padding: var(--rux-card-padding, 1rem);
            border-bottom: 1px solid var(--rux-card-header-border-color, #f0f0f0);
            font-weight: bold;
            color: var(--rux-card-header-color, #333);
        }

        .rux-card__body {
            flex-grow: 1; /* Allows body to take available space */
            padding: var(--rux-card-padding, 1rem);
            color: var(--rux-card-body-color, #555);
        }

        .rux-card__footer {
            padding: var(--rux-card-padding, 1rem);
            border-top: 1px solid var(--rux-card-footer-border-color, #f0f0f0);
            text-align: right; /* Common for footers (e.g., action buttons) */
            color: var(--rux-card-footer-color, #777);
        }

        .hidden {
            display: none;
        }
    `;

    @state()
    private _activeSlots = {
        header: false,
        footer: false,
    };

    /**
     * Called after the component's first update, and before the update cycle finishes.
     * This is the perfect place to do initial setup that depends on the shadow DOM being ready.
     */
    firstUpdated() {
        // Check initial slot content once the component has rendered
        this._checkSlotContent('header');
        this._checkSlotContent('footer');
    }

    /**
     * Checks if a slot has content assigned to it.
     * This method is called by the `slotchange` event listener on the <slot> elements.
     * @param slotName The name of the slot to check ('header' or 'footer').
     */
    private _checkSlotContent(slotName: 'header' | 'footer') {
        // Get a reference to the slot element within the shadow DOM
        const slotElement = this.shadowRoot?.querySelector(`slot[name="${slotName}"]`) as HTMLSlotElement | null;

        if (slotElement) {
            // assignedNodes({ flatten: true }) gets all assigned nodes, including text nodes,
            // and flattens them if there are nested slots.
            const assignedNodes = slotElement.assignedNodes({ flatten: true });

            // A slot is considered "active" or "having content" if it has any assigned
            // nodes that are not just empty text nodes (whitespace).
            const show = assignedNodes.some(node =>
                !(node.nodeType === Node.TEXT_NODE && node.textContent?.trim() === '')
            );

            // Update the state, which will trigger a re-render if the value changes.
            this._activeSlots = { ...this._activeSlots, [slotName]: show };
        }
    }

    render() {
        // Use classMap directive for conditional classes
        const headerClasses = classMap({
            'rux-card__header': true,
            hidden: !this._activeSlots.header,
        });

        const footerClasses = classMap({
            'rux-card__footer': true,
            hidden: !this._activeSlots.footer,
        });

        return html`
            <div class="rux-card" part="container">
                <div class=${headerClasses} part="header">
                    <slot name="header" @slotchange=${() => this._checkSlotContent('header')}></slot>
                </div>

                <div class="rux-card__body" part="body">
                    <slot></slot>
                </div>

                <div class=${footerClasses} part="footer">
                    <slot name="footer" @slotchange=${() => this._checkSlotContent('footer')}></slot>
                </div>
            </div>
        `;
    }
}
```

**How to Use (Example `index.html`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LitElement Rux Card</title>
    <script type="module" src="./rux-card.js"></script>
    <style>
        body {
            font-family: sans-serif;
            padding: 20px;
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            background-color: #f4f4f4;
        }

        rux-card {
            width: 300px;
            margin-bottom: 20px;
        }

        h2 {
            margin: 0;
            font-size: 1.2em;
        }

        p {
            margin: 0;
        }

        .card-content {
            color: #333;
        }

        .card-footer-buttons button {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 8px 12px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.9em;
        }
        .card-footer-buttons button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>

    <rux-card>
        <div slot="header"><h2>Card with Header and Footer</h2></div>
        <div class="card-content">
            <p>This is the main content of the card. It demonstrates how all three slots can be used.</p>
            <p>The card will dynamically show/hide the header and footer sections based on whether content is assigned to their respective slots.</p>
        </div>
        <div slot="footer" class="card-footer-buttons">
            <button>Learn More</button>
        </div>
    </rux-card>

    <rux-card>
        <div slot="header"><h2>Card with Header Only</h2></div>
        <div class="card-content">
            <p>This card only has content in the header slot and the default slot. The footer section should be hidden.</p>
        </div>
    </rux-card>

    <rux-card>
        <div class="card-content">
            <p>This card only has content in the default slot. Both the header and footer sections should be hidden.</p>
            <p>This illustrates the dynamic hiding of empty slots based on the `slotchange` event.</p>
        </div>
    </rux-card>

    <rux-card>
        <div slot="footer" class="card-footer-buttons">
            <button>Action</button>
        </div>
        <div class="card-content">
            <p>This card only has content in the footer slot and the default slot. The header section should be hidden.</p>
        </div>
    </rux-card>

</body>
</html>
```

To run this:
1.  Save the LitElement code as `rux-card.ts`.
2.  Save the HTML as `index.html`.
3.  You'll need a way to compile TypeScript to JavaScript and serve the files. A simple `npm init -y`, `npm install lit`, and a build step (like `tsc --init` and then `tsc -w` for watching, or using a bundler like Vite/Webpack/Rollup) is usually how this is done.

    *Self-serving simple project with `tsc`*:
    ```bash
    npm init -y
    npm install lit typescript
    npx tsc --init
    ```
    In `tsconfig.json`, ensure:
    ```json
    {
      "compilerOptions": {
        "target": "ES2020",         // Or higher
        "module": "ESNext",
        "moduleResolution": "node",
        "outDir": "./",             // Output in the same directory for simple example
        "lib": ["ES2020", "dom"],
        "experimentalDecorators": true, // Required for Lit's decorators
        "useDefineForClassFields": false // Important for Lit decorators
      }
    }
    ```
    Then, run `npx tsc rux-card.ts` to compile.
    Finally, use a simple HTTP server (e.g., `npx serve .`) to serve `index.html`.