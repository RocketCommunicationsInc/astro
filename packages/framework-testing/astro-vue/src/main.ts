import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import "@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css";

import { defineCustomElements } from "@astrouxds/astro-web-components/loader";

defineCustomElements();

createApp(App).mount("#app");
