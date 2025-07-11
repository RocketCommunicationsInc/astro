export type CalendarDateTimeUpdatedEvent = CustomEvent<{
    iso: string
    source:
        | 'monthChange'
        | 'yearChange'
        | 'timeChange'
        | 'daySelected'
        | undefined
}>

export interface DatetimePickerProps {
    disabled: boolean
    errorText?: string
    helpText?: string
    invalid: boolean
    label?: string
    name: string
    required: boolean
    size: 'small' | 'medium' | 'large'
    value: string
    precision: Precision
    minYear: number
    maxYear: number
    julianFormat: boolean
}

