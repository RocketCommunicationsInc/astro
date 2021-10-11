import Vue from 'vue'
import App from './App.vue'
import '@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css'
import {
    applyPolyfills,
    defineCustomElements,
} from '@astrouxds/astro-web-components/loader'

Vue.config.productionTip = false
Vue.config.ignoredElements = [/rux-\w*/]

// // Bind the custom elements to the window object
applyPolyfills().then(() => {
    defineCustomElements()
})

new Vue({
    render: (h) => h(App),
}).$mount('#app')
