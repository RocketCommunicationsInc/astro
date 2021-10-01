import { ValueAccessorConfig } from '@stencil/angular-output-target'

export const angularValueAccessorBindings: ValueAccessorConfig[] = [
    {
        elementSelectors: ['rux-input', 'rux-textarea'],
        event: 'ruxInput',
        targetAttr: 'value',
        type: 'text',
    },
    {
        elementSelectors: ['rux-checkbox', 'rux-switch'],
        event: 'ruxInput',
        targetAttr: 'checked',
        type: 'boolean',
    },
    {
        elementSelectors: ['rux-radio', 'rux-radio-group'],
        event: 'ruxChange',
        targetAttr: 'value',
        type: 'text',
    },
]
