import App from "./App.svelte";

// Import Astro's base styles
import "../node_modules/@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css";

// Define the Astro Components
import {
  applyPolyfills,
  defineCustomElements,
} from "@astrouxds/astro-web-components/loader";

applyPolyfills().then(() => {
  defineCustomElements();
});

const app = new App({
  target: document.body,
});

export default app;
