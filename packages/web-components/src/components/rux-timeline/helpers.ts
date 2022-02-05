import {
    format,
    addHours,
    differenceInHours,
    addDays,
    addMonths,
    differenceInDays,
    differenceInMonths,
} from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz/esm'

export function dateRange(
    start: any,
    end: any,
    interval: any,
    intervalValue: any = 1
) {
    const startDate = new Date(start)
    const endDate = new Date(end)

    if (interval === 'day') {
        const days = differenceInDays(endDate, startDate)

        return [...Array(days).keys()].map((i) => {
            const time = addDays(startDate, i)
            const utcTime = utcToZonedTime(time, 'UTC')
            const formattedTime = format(time, 'MM/dd')

            return formattedTime
        })
    }

    if (interval === 'hour') {
        let days = differenceInHours(endDate, startDate)
        days = days / intervalValue

        const output = [...Array(days).keys()].map((i) => {
            const time = addHours(startDate, i)
            const utcTime = utcToZonedTime(time, 'UTC')
            const formattedTime = format(time, 'HH:mm')
            return formattedTime
        })

        return output
    }

    if (interval === 'month') {
        const months = differenceInMonths(endDate, startDate)

        return [...Array(months).keys()].map((i) => addMonths(startDate, i))
    }
    return ['foo']
}
