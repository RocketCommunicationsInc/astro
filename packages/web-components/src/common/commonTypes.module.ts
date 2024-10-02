import { Placement } from '@floating-ui/dom'

export type Status =
    | 'off'
    | 'standby'
    | 'normal'
    | 'caution'
    | 'serious'
    | 'critical'

export type Classification =
    | 'cui'
    | 'controlled'
    | 'confidential'
    | 'secret'
    | 'top-secret'
    | 'top-secret-sci'
    | 'unclassified'

export type StatusTypes = {
    [id: string]: boolean
}

export type StatusTags = 'pass' | 'fail' | 'unknown'

export enum StatusSymbol {
    CRITICAL = 'critical',
    SERIOUS = 'serious',
    CAUTION = 'caution',
    NORMAL = 'normal',
    STANDBY = 'standby',
    OFF = 'off',
}

export declare type ExtendedPlacement = Placement | 'auto'

export type AxisLabelObj = {
    label: string // The text to display next to the tick mark
    value: number // The position of the tick mark, representing its value on the slider scale
}
