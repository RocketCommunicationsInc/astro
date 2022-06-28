import { createApp } from 'vue'
import App from './App.vue'

import '@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css'

// import './index.css'
import { defineCustomElements } from '@astrouxds/astro-web-components/loader'
defineCustomElements()

createApp(App).mount('#app')
