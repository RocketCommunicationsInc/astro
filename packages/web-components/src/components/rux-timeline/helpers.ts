import {
    addDays,
    addHours,
    addMinutes,
    differenceInDays,
    differenceInHours,
    differenceInMinutes,
    differenceInMonths,
    subMinutes,
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

// Fixes bug in date-fn's subDays() function when crossing a DST transition:
// https://github.com/date-fns/date-fns/issues/571

function agnosticAddDays(date: Date, amount: number) {
    const originalTZO = date.getTimezoneOffset()
    const endDate = addDays(date, amount)
    const endTZO = endDate.getTimezoneOffset()

    const dstDiff = originalTZO - endTZO

    return dstDiff >= 0
        ? addMinutes(endDate, dstDiff)
        : subMinutes(endDate, Math.abs(dstDiff))
}

// When dealing with months, the start is always the first
// day of the month at 0
export function getBeginningOfMonth(date: Date, amount: number) {
    const theDate = new Date(date.getFullYear(), date.getMonth())
    theDate.setMonth(date.getMonth() + amount)
    return theDate
}

// When dealing with weeks, the start is always the beginning of the day
export function getBeginningOfDay(date: Date, amount: number) {
    const theDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
    )
    theDate.setDate(date.getDate() + amount)
    return theDate
}

// This allows us to calculate the portion of the actual month being displayed
export function daysInMonth(theDate: Date) {
    return new Date(theDate.getFullYear(), theDate.getMonth() + 1, 0).getDate()
}

export function getStartEndDateForInterval(
    startDate: string,
    endDate: string,
    interval: string
) {
    let timelineStart = new Date(startDate)
    let timelineEnd = new Date(endDate)
    if (interval === 'month') {
        timelineEnd = new Date(
            getBeginningOfMonth(timelineEnd, 1).getTime() - 1
        )
        timelineStart = new Date(getBeginningOfMonth(timelineStart, 0))
    }
    if (interval === 'week') {
        timelineEnd = new Date(getBeginningOfDay(timelineEnd, 1).getTime() - 1)
        timelineStart = new Date(getBeginningOfDay(timelineStart, 0))
    }
    return { timelineStart, timelineEnd }
}

/**
 * Returns a new array with the time values for each tick
 *
 * @param start
 * @param end
 * @param interval
 * @param intervalValue
 * @param timezone
 * @returns
 */
export function dateRange(
    start: any,
    end: any,
    interval: any,
    intervalValue: any = 1,
    timezone: any = 'UTC'
) {
    let startDate = new Date(start)
    let endDate = new Date(end)

    // Prevents unnecessary error when setting range to the future
    if (startDate > endDate) {
        return []
    }

    if (interval === 'month') {
        //differenceInHours used here to avoid DST issues
        //https://github.com/date-fns/date-fns/blob/main/src/differenceInDays/index.ts#L17C2-L17C2
        startDate = getBeginningOfMonth(startDate, 0)
        endDate = new Date(getBeginningOfMonth(endDate, 1).getTime() - 1)
        const numIntervals = (differenceInMonths(endDate, startDate) + 1) | 0

        const output = [...Array(numIntervals).keys()].map((i) => {
            const time = getBeginningOfMonth(startDate, i)

            const formattedTime =
                i === 0 || time.getMonth() === 0
                    ? formatInTimeZone(time, timezone, 'MM/dd/yy')
                    : formatInTimeZone(time, timezone, 'MM/dd')
            return [formattedTime, time]
        })

        return output
    }

    if (interval === 'week') {
        startDate = getBeginningOfDay(startDate, 0)
        endDate = new Date(getBeginningOfDay(endDate, 1).getTime() - 1)
        const days = Math.ceil(differenceInDays(endDate, startDate) / 7) | 0
        let previousYear = -1
        const output = [...Array(days).keys()].map((i) => {
            const time = agnosticAddDays(startDate, i * 7)

            let showYear = false
            if (previousYear !== time.getFullYear()) {
                showYear = true
                previousYear = time.getFullYear()
            }
            const formattedTime =
                i === 0 || showYear
                    ? formatInTimeZone(time, timezone, 'MM/dd/yy')
                    : formatInTimeZone(time, timezone, 'MM/dd')
            return [formattedTime, time]
        })

        return output
    }

    if (interval === 'day') {
        //differenceInHours used here to avoid DST issues
        //https://github.com/date-fns/date-fns/blob/main/src/differenceInDays/index.ts#L17C2-L17C2
        const days = Math.floor(differenceInHours(endDate, startDate) / 24) | 0

        const output = [...Array(days).keys()].map((i) => {
            const time = agnosticAddDays(startDate, i)

            const formattedTime = formatInTimeZone(time, timezone, 'MM/dd')
            return [formattedTime, time]
        })

        return output
    }

    if (interval === 'hour') {
        let days = differenceInHours(endDate, startDate)

        days = days / intervalValue

        const output = [...Array(days).keys()].map((i) => {
            const time = addHours(startDate, i)

            const formattedTime = formatInTimeZone(time, timezone, 'HH:mm')
            const dayFormattedTime = formatInTimeZone(time, timezone, 'MM/dd')
            return [formattedTime, dayFormattedTime]
        })

        return output
    }

    if (interval === 'minute') {
        let days = differenceInMinutes(endDate, startDate)

        days = days / intervalValue

        const output = [...Array(days).keys()].map((i) => {
            const time = addMinutes(startDate, i)

            const formattedTime = formatInTimeZone(time, timezone, 'HH:mm')
            const dayFormattedTime = formatInTimeZone(time, timezone, 'MM/dd')
            return [formattedTime, dayFormattedTime]
        })

        return output
    }

    return []
}
