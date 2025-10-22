import themes from './theme'
import { addons } from '@storybook/addons'
import './manager.css'
// Register the manager-side logout addon (renders a React button into the manager)
import './manager-addon-logout'

addons.setConfig({
    panelPosition: 'right',
    selectedPanel: 'REACT_STORYBOOK/readme/panel',
    theme: themes.dark,
    sidebar: {
        // showRoots: false,
    },
})
