import { EventEmitter } from '@stencil/core'
import { InputRefs, Part, Precision } from './utils/types'

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

export interface DatetimePickerEvents {
    ruxDatetimePickerChange: EventEmitter<string>
    ruxChange: EventEmitter
    ruxInput: EventEmitter
    ruxBlur: EventEmitter
}

export interface DatetimePickerState {
    iso: string
    parts: Part[]
    isCalendarOpen: boolean
    refs: InputRefs
}

export interface DatetimePickerRefs {
    yearRef?: HTMLInputElement
    monthRef?: HTMLInputElement
    dayRef?: HTMLInputElement
    hourRef?: HTMLInputElement
    minRef?: HTMLInputElement
    secRef?: HTMLInputElement
    msRef?: HTMLInputElement
}
