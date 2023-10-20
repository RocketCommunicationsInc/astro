import {
    addHours,
    differenceInHours,
    eachHourOfInterval,
    addDays,
    addMinutes,
    subMinutes,
    differenceInDays,
    differenceInMonths,
    eachDayOfInterval,
    parseISO,
} from 'date-fns'
import { formatInTimeZone, utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz'

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
            const time = agnosticAddDays(startDate, i)

            const formattedTime = formatInTimeZone(time, timezone, 'MM/dd')

            return formattedTime
        })

        return output
    }

    if (interval === 'hour') {
        // intervalValue = 2
        let days = differenceInHours(endDate, startDate)
        console.log('days', days)
        console.log('intervaldays', days / intervalValue)
        days = days / intervalValue

        // const newout = [...Array(days).keys()].reduce((a: any, b: any) => {

        //     let offset = 0
        //     if (a.length === 0 ) {

        //     }
        //     if (a.length > 1) {
        //         const last = a[a.length-1]
        //         // if (last) {
        //         //     const hour = parseInt(last.slice(0,2))
        //         //     offset = hour
        //         //     console.log('off', last);
        //         // }
        //         offset = last
        //     }

        //     // this might break bc new date not wrapped in timezone
        //     const time = addHours(offset, 2)

        //     const formattedTime = formatInTimeZone(time, timezone, 'HH:mm')
        //     a.push(formattedTime)
        //     return a

        //     // console.log('a',a);
        //     // console.log('b',b);

        // }, ['00:00'])
        // console.log('new', newout);

        console.log('start', start)

        const eachDay = eachHourOfInterval(
            {
                start: new Date(start),
                end: new Date(end),
            },
            {
                step: 2,
            }
        )
        const test = eachDay.map((day) => {
            return formatInTimeZone(day, timezone, 'HH:mm')
        })
        return test

        // const output = [...Array(days).keys()].map((i) => {

        //     const time = addHours(startDate, i + intervalValue)

        //     const formattedTime = formatInTimeZone(time, timezone, 'HH:mm')
        //     return formattedTime
        // })
        // console.log('out', output);

        // return output
    }

    return []
}

export function dateRangeInMonths(
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
            const time = agnosticAddDays(startDate, i)

            const formattedTime = formatInTimeZone(time, timezone, 'MM/dd')

            return formattedTime
        })

        return output
    }

    if (interval === 'hour') {
        let days = differenceInHours(endDate, startDate)
        let months = differenceInDays(endDate, startDate)

        // days = days / intervalValue

        // const output = [...Array(days).keys()].map((i) => {
        //     const time = addHours(startDate, i)

        //     const formattedTime = formatInTimeZone(time, timezone, 'HH:mm')
        //     return formattedTime
        // })

        const output = [...Array(months).keys()].map((i) => {
            const time = agnosticAddDays(startDate, i)

            const formattedTime = formatInTimeZone(time, timezone, 'MM/dd')

            return formattedTime
        })
        console.log('out', output)

        return output
    }

    return []
}
