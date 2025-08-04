Okay, let's convert this Stencil functional component to a LitElement class component.

Key changes:
1.  **Functional Component to Class Component**: Lit components are classes that extend `LitElement`.
2.  **Props (`AppMetaProps` to `@property` decorators)**: Instead of function arguments, Lit uses `@property` decorators on class fields.
3.  **`children` to `<slot>`**: Lit uses the `<slot>` element to project content passed into the component.
4.  **`h`/JSX to `html` tagged template literals**: Lit uses `html` from `lit` for its template syntax.
5.  **`@customElement` decorator**: To register the component with the browser.
6.  **`render()` method**: All rendering logic goes inside this method.

Here's the LitElement version:

```typescript
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

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
    domain?: string;

    @property({ type: String })
    name?: string;

    @property({ type: String })
    version?: string;

    // Optional: Add some basic styles for the component using Lit's static styles.
    // This makes the component more self-contained.
    static styles = css`
        :host {
            display: block; /* Web components are inline by default, make it block */
        }
        .app-meta {
            /* Example styling based on your original classes */
            padding: 15px;
            border: 1px solid #eee;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            background-color: #fff;
        }
        .app-info-wrapper {
            margin-bottom: 10px;
        }
        .app-domain, .app-name {
            font-size: 1.4em;
            margin: 0 0 5px 0;
            color: #333;
        }
        .app-version {
            font-size: 0.9em;
            color: #777;
            display: inline-block;
            margin-left: 10px;
            padding: 2px 8px;
            background-color: #f0f0f0;
            border-radius: 4px;
        }
    `;

    render() {
        return html`
            <div class="app-meta" part="app-meta">
                <div class="app-info-wrapper">
                    ${this.domain
                        ? html`<h1 class="app-domain">${this.domain}</h1>`
                        : ''}
                    ${this.name
                        ? html`<h1 class="app-name">${this.name}</h1>`
                        : ''}
                    ${this.version
                        ? html`<span class="app-version">${this.version}</span>`
                        : ''}
                </div>
                <slot></slot> <!-- This is where the children content will be rendered -->
            </div>
        `;
    }
}
```

**How to use it:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lit App Meta Example</title>
    <script type="module" src="./your-component-file.js"></script>
</head>
<body>

    <app-meta domain="example.com" name="My Awesome App" version="1.0.0">
        <p>This is some extra content passed as children.</p>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
    </app-meta>

    <br><br>

    <app-meta name="Simple App"></app-meta>

    <br><br>

    <app-meta domain="another.org" version="2.1.0">
        <button>Click Me</button>
    </app-meta>

</body>
</html>
```

Remember to compile your TypeScript (if you're using `tsc` or a bundler like Webpack/Rollup/Vite) and serve the HTML file.