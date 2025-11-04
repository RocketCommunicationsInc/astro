import themes from './theme'
import { addons } from '@storybook/addons'
import './manager.css'

addons.setConfig({
    panelPosition: 'right',
    theme: themes.dark,
    sidebar: {
        // showRoots: false,
    },
})
