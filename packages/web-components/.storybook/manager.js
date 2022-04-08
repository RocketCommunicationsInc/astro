import themes from './theme'
import { addons } from '@storybook/addons'

addons.setConfig({
    panelPosition: 'right',
    selectedPanel: 'REACT_STORYBOOK/readme/panel',
    theme: themes.dark,
})
window.STORYBOOK_GA_ID = 'UA-114182957-1'
window.STORYBOOK_REACT_GA_OPTIONS = {}
