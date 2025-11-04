import { html } from 'lit-html'

const SimpleTest = () => {
    return html`<div>Hello World</div>`
}

export default {
    title: 'Test/Simple',
}

export const Test = {
    render: SimpleTest.bind(),
    name: 'Simple Test',
}
