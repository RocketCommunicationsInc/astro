import { html } from 'lit-html'
import '../components/rux-menu/rux-menu.ts'
import '../components/rux-menu-item/rux-menu-item.ts'
import '../components/rux-menu-item-divider/rux-menu-item-divider.ts'

const Base = () => {
    return html`
        <div style="display: flex; justify-content: center; padding: 5%;">
            <rux-menu>
                <rux-menu-item>Menu Item 1</rux-menu-item>
                <rux-menu-item>Menu Item 2</rux-menu-item>
                <rux-menu-item-divider></rux-menu-item-divider>
                <rux-menu-item>Menu Item 3</rux-menu-item>
                <rux-menu-item disabled>Menu Item 4 (disabled)</rux-menu-item>
            </rux-menu>
        </div>
    `
}

export default {
    title: 'Components/Menu',
    component: 'rux-menu',
    subcomponents: {
        RuxMenuItem: 'rux-menu-item',
        RuxMenuItemDivider: 'rux-menu-item-divider',
    },
}

export const Default = {
    render: Base.bind(),
    name: 'Default',
}
