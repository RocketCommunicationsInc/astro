export type CalendarDateTimeUpdatedEvent = CustomEvent<{
    iso: string
    source:
        | 'monthChange'
        | 'yearChange'
        | 'timeChange'
        | 'daySelected'
        | undefined
}>
