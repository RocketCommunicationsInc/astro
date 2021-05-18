import { setMode } from '@stencil/core'

setMode(elm => {
    // If mode is already set on the element
    if (elm.getAttribute('mode')) return
    
    const body = document.body
    if (!body.classList.contains('light-theme')){
        return 'dark'
    } else {
        return 'light'
    }
})