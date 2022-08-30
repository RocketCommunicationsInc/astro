import {
    addHours,
    differenceInHours,
    addDays,
    differenceInDays,
} from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'

export async function validateTimezone(timezone: string) {
    return new Promise((resolve, reject) => {
        try {
            formatInTimeZone(new Date(), timezone, 'MM/dd')
            resolve(true)
        } catch (e) {
            reject(false)
        }
    })
}
export function dateRange(
    start: any,
    end: any,
    interval: any,
    intervalValue: any = 1,
    timezone: any = 'UTC'
) {
    const startDate = new Date(start)
    const endDate = new Date(end)

    // Prevents unnecessary error when setting range to the future
    if (startDate > endDate) {
        return []
    }

    if (interval === 'day') {
        const days = differenceInDays(endDate, startDate)

        const output = [...Array(days).keys()].map((i) => {
            const time = addDays(startDate, i)
            const formattedTime = formatInTimeZone(time, timezone, 'MM/dd')

            return formattedTime
        })

        return output
    }

    if (interval === 'hour') {
        let days = differenceInHours(endDate, startDate)
        days = days / intervalValue

        const output = [...Array(days).keys()].map((i) => {
            const time = addHours(startDate, i)

            const formattedTime = formatInTimeZone(time, timezone, 'HH:mm')
            return formattedTime
        })

        return output
    }

    return []
}
