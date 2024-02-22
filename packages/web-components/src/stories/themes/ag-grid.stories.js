import { html, render } from 'lit-html'

const AGGrid = () => {
    return html`
        <div style="padding: 2rem;">
            <iframe
                src="https://codesandbox.io/embed/github/RocketCommunicationsInc/astro/tree/main/packages/web-components/src/stories/astro-sandboxes/themes/ag-grid"
                class="sandbox"
                style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
                title="Astro AG-Grid Theme Example"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
        </div>
    `
}

export default {
    title: 'Themes/ag-Grid',
    component: 'ag-Grid',
}

export const AgGrid = {
    render: AGGrid.bind(),
    name: 'ag-Grid',
}
