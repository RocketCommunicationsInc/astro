export type PartType =
    | 'year'
    | 'month'
    | 'day'
    | 'hour'
    | 'min'
    | 'sec'
    | 'ms'
    | 'mask'

export type Part = {
    type: PartType
    value: string
}

export type Precision = 'min' | 'sec' | 'ms'

export type PartKey = 'year' | 'month' | 'day' | 'hour' | 'min' | 'sec' | 'ms'

export type InputRefs = Record<PartKey, HTMLInputElement | undefined>
