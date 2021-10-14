import { ValueAccessorConfig } from '@stencil/angular-output-target'

export const angularValueAccessorBindings: ValueAccessorConfig[] = [
    {
        elementSelectors: ['rux-input', 'rux-textarea', 'rux-slider'],
        event: 'ruxinput',
        targetAttr: 'value',
        type: 'text',
    },
    {
        elementSelectors: ['rux-checkbox', 'rux-switch'],
        event: 'ruxchange',
        targetAttr: 'checked',
        type: 'boolean',
    },
    {
        elementSelectors: ['rux-radio-group', 'rux-select'],
        event: 'ruxchange',
        targetAttr: 'value',
        type: 'text',
    },
]
