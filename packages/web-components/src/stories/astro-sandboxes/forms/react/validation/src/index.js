import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import '@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css'

import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    rootElement
)
