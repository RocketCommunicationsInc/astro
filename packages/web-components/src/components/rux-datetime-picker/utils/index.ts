import { InputRefs, Part, PartKey } from './types'

export const initialParts = (): Part[] => [
    { type: 'year', value: '' },
    { type: 'mask', value: '-' },
    { type: 'month', value: '' },
    { type: 'mask', value: '-' },
    { type: 'day', value: '' },
    { type: 'mask', value: 'T' },
    { type: 'hour', value: '' },
    { type: 'mask', value: ':' },
    { type: 'min', value: '' },
    { type: 'mask', value: ':' },
    { type: 'sec', value: '' },
    { type: 'mask', value: '.' },
    { type: 'ms', value: '' },
    { type: 'mask', value: 'Z' },
]

//For Julian date mode - YYYY-DDDThh:mm:ss.sss
export const initialOrdinalParts = (): Part[] => [
    { type: 'year', value: '' },
    { type: 'mask', value: '-' },
    { type: 'day', value: '' },
    { type: 'mask', value: 'T' },
    { type: 'hour', value: '' },
    { type: 'mask', value: ':' },
    { type: 'min', value: '' },
    { type: 'mask', value: ':' },
    { type: 'sec', value: '' },
    { type: 'mask', value: '.' },
    { type: 'ms', value: '' },
    { type: 'mask', value: 'Z' },
]

export const setIsoPart: Record<
    PartKey,
    (iso: string, usingMicro: boolean) => string
> = {
    year: (iso) => iso.substring(0, 4),
    month: (iso) => iso.substring(5, 7),
    day: (iso) => iso.substring(8, 10),
    hour: (iso) => iso.substring(11, 13),
    min: (iso) => iso.substring(14, 16),
    sec: (iso) => iso.substring(17, 19),
    ms: (iso, usingMicro) =>
        usingMicro ? iso.substring(20, 26) : iso.substring(20, 23),
}

export const setJulianIsoPart: Record<
    PartKey,
    (iso: string, usingMicro: boolean) => string
> = {
    year: (iso) => iso.substring(0, 4),
    month: () => '', // Julian date does not have a month part
    day: (iso) => iso.substring(5, 8),
    hour: (iso) => iso.substring(9, 11),
    min: (iso) => iso.substring(12, 14),
    sec: (iso) => iso.substring(15, 17),
    ms: (iso, usingMicro) =>
        usingMicro ? iso.substring(18, 24) : iso.substring(18, 21),
}

export const setPart: Record<
    PartKey,
    (
        value: string,
        prev: Part[],
        inputRefs: InputRefs,
        isOrdinal: boolean
    ) => Part[]
> = {
    year: (value, prev, inputRefs, isOrdinal) => {
        if (!isOrdinal) {
            const month = inputRefs['month']
            if (month && value.length === setMaxLength()['year']) {
                month.focus()
            }

            return prev.map((part) => {
                if (part.type !== 'year') return part
                return { ...part, value }
            })
        } else {
            const day = inputRefs['day']
            if (day && value.length === setMaxLengthOrdinal()['year']) {
                day.focus()
            }

            return prev.map((part) => {
                if (part.type !== 'year') return part
                return { ...part, value }
            })
        }
    },
    month: (value, prev, inputRefs) => {
        const day = inputRefs['day']
        if (day && value.length === setMaxLength()['month']) {
            day.focus()
        }

        return prev.map((part) => {
            if (part.type !== 'month') return part
            return { ...part, value }
        })
    },
    day: (value, prev, inputRefs, isOrdinal) => {
        const hour = inputRefs['hour']

        if (
            hour &&
            value.length ===
                (!isOrdinal
                    ? setMaxLength()['day']
                    : setMaxLengthOrdinal()['day'])
        ) {
            hour.focus()
        }

        return prev.map((part) => {
            if (part.type !== 'day') return part
            return { ...part, value }
        })
    },
    hour: (value, prev, inputRefs) => {
        const min = inputRefs['min']
        if (min && value.length === setMaxLength()['hour']) {
            min.focus()
        }

        return prev.map((part) => {
            if (part.type !== 'hour') return part
            return { ...part, value }
        })
    },
    min: (value, prev, inputRefs) => {
        const sec = inputRefs['sec']
        if (sec && value.length === setMaxLength()['min']) {
            sec.focus()
        }

        return prev.map((part) => {
            if (part.type !== 'min') return part
            return { ...part, value }
        })
    },
    sec: (value, prev, inputRefs) => {
        const ms = inputRefs['ms']
        if (ms && value.length === setMaxLength()['sec']) {
            ms.focus()
        }

        return prev.map((part) => {
            if (part.type !== 'sec') return part
            return { ...part, value }
        })
    },
    ms: (value, prev) => {
        return prev.map((part) => {
            if (part.type !== 'ms') return part
            return { ...part, value }
        })
    },
}

export const setDisplay: Record<
    PartKey,
    (value: string, isMicro: boolean) => string
> = {
    year: (value) => value.padEnd(4, 'Y'),
    month: (value) => value.padEnd(2, 'M'),
    day: (value) => value.padEnd(2, 'D'),
    hour: (value) => value.padEnd(2, 'h'),
    min: (value) => value.padEnd(2, 'm'),
    sec: (value) => value.padEnd(2, 's'),
    ms: (value, isMicro) =>
        isMicro ? value.padEnd(6, 'S') : value.padEnd(3, 'S'),
}

export const setOrdinalDisplay: Record<
    PartKey,
    (value: string, isMicro: boolean) => string
> = {
    year: (value) => value.padEnd(4, 'Y'),
    month: () => '', // Julian date does not have a month part
    day: (value) => value.padEnd(3, 'D'),
    hour: (value) => value.padEnd(2, 'h'),
    min: (value) => value.padEnd(2, 'm'),
    sec: (value) => value.padEnd(2, 's'),
    ms: (value, isMicro) =>
        isMicro ? value.padEnd(6, 'S') : value.padEnd(3, 'S'),
}

export const setMaxLength = (
    isMicro: boolean = false
): Record<PartKey, number> => ({
    year: 4,
    month: 2,
    day: 2,
    hour: 2,
    min: 2,
    sec: 2,
    ms: isMicro ? 6 : 3,
})

export const setMaxLengthOrdinal = (
    isMicro: boolean = false
): Record<PartKey, number> => ({
    year: 4,
    month: 2,
    day: 3,
    hour: 2,
    min: 2,
    sec: 2,
    ms: isMicro ? 6 : 3,
})
export const months = [
    { label: 'January', value: '01' },
    { label: 'February', value: '02' },
    { label: 'March', value: '03' },
    { label: 'April', value: '04' },
    { label: 'May', value: '05' },
    { label: 'June', value: '06' },
    { label: 'July', value: '07' },
    { label: 'August', value: '08' },
    { label: 'September', value: '09' },
    { label: 'October', value: '10' },
    { label: 'November', value: '11' },
    { label: 'December', value: '12' },
]

/**
 *
 * @param monthName
 * @returns The month value (01-12) for the given month name. Ie, getMonthValueByName('January') returns '01'
 */
export const getMonthValueByName = (monthName: string): string | undefined => {
    const month = months.find((m) => m.label === monthName)
    return month ? month.value : undefined
}

/**
 *
 * @param monthNum
 * @returns The month's name based on it's number value. Ie, getMonthValueByNumber('01') returns 'January'
 */
export const getMonthNameByNumber = (monthNum: string): string | undefined => {
    if (monthNum.length === 1) {
        monthNum = monthNum.padStart(2, '0')
    }
    const month = months.find((m) => m.value === monthNum)
    return month ? month.label : undefined
}

export const getUTCYear = () => {
    const d = new Date()
    return d.getUTCFullYear().toString()
}

export const getUTCMonth = () => {
    const d = new Date()
    // Month is zero indexed
    const month = d.getUTCMonth() + 1
    return month.toString().padStart(2, '0')
}

export const getUTCDay = () => {
    const d = new Date()
    return d.getUTCDate().toString().padStart(2, '0')
}

export const getUTCHour = () => {
    const d = new Date()
    return d.getUTCHours().toString()
}

export const getUTCMin = () => {
    const d = new Date()
    return d.getUTCMinutes().toString().padStart(2, '0')
}

export const getUTCSec = () => {
    const d = new Date()
    return d.getUTCSeconds().toString().padStart(2, '0')
}

export const getUTCMs = () => {
    const d = new Date()
    return d.getUTCMilliseconds().toString().padStart(3, '0')
}

export const setPartUTC: Record<PartKey, string> = {
    year: getUTCYear(),
    month: getUTCMonth(),
    day: getUTCDay(),
    hour: getUTCHour(),
    min: getUTCMin(),
    sec: getUTCSec(),
    ms: getUTCMs(),
}

export const formatOrdinalToIso = (ordinalISO: string) => {
    const match = ordinalISO.match(/(\d{4})-(\d{3})T(.*)/)
    if (!match) {
        //If it doesn't match, it's already in ISO format.
        return ordinalISO
    }

    const [, year, dayOfYear, time] = match
    const date = new Date(`${year}-01-01T00:00:00.000Z`)
    date.setUTCDate(parseInt(dayOfYear))

    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0')
    const day = date.getUTCDate().toString().padStart(2, '0')

    return `${year}-${month}-${day}T${time}`
}

export const ordinalDayToDate = (ordinalDay: string, year: string) => {
    const dayOfYear = parseInt(ordinalDay)
    const yearInt = parseInt(year)
    // Create a date object for the start of the year
    const startOfYear = new Date(Date.UTC(yearInt, 0, 0))

    // Add the ordinal day to the start of the year
    const date = new Date(
        startOfYear.getTime() + dayOfYear * 24 * 60 * 60 * 1000
    )

    // Extract the month and day from the date object
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0') // Months are zero-based
    const day = date.getUTCDate().toString().padStart(2, '0')

    return `${year}-${month}-${day}`
}

export const julianToGregorianDay = (julianDay: string, year: string) => {
    // Parse the Julian day and year as integers
    const dayOfYear = parseInt(julianDay, 10)
    const yearInt = parseInt(year, 10)

    // Create a Date object starting from January 1st of the given year
    const date = new Date(Date.UTC(yearInt, 0, dayOfYear))

    // Extract the Gregorian day
    const gregorianDay = date.getUTCDate().toString()

    return gregorianDay
}

export const removeLeadingZero = (value: string): string => {
    // Use a regular expression to remove only the first leading zero
    return value.replace(/^0+/, '')
}

export const getDayOfYearFromIso = (isoString: string): string => {
    // Parse the ISO string into a Date object
    const date = new Date(isoString)

    // Ensure the date is valid
    if (isNaN(date.getTime())) {
        throw new Error('Invalid ISO string')
    }

    // Get the start of the year for the given date
    const startOfYear = new Date(Date.UTC(date.getUTCFullYear(), 0, 1))

    // Calculate the difference in milliseconds between the date and the start of the year
    const diffInMs = date.getTime() - startOfYear.getTime()

    // Convert the difference to days and add 1 (since Jan 1 is day 1)
    const dayOfYear = Math.floor(diffInMs / (24 * 60 * 60 * 1000)) + 1

    // Return the day of the year as a zero-padded string
    return dayOfYear.toString().padStart(3, '0')
}

export const getTimeFromIso = (isoString: string) => {
    // Regular expressions to extract hours, minutes, seconds, and milliseconds
    const hourRegex = /T(\d{2}):/ // Matches hours after 'T' and before ':'
    const minuteRegex = /:(\d{2}):/ // Matches minutes between two colons
    const secondRegex = /:(\d{2})\./ // Matches seconds between ':' and '.'
    const millisecondRegex = /\.(\d{3})/ // Matches milliseconds after '.'

    // Extract matches
    const hours = isoString.match(hourRegex)?.[1] || '00'
    const minutes = isoString.match(minuteRegex)?.[1] || '00'
    const seconds = isoString.match(secondRegex)?.[1] || '00'
    const milliseconds = isoString.match(millisecondRegex)?.[1] || '000'

    return {
        hours,
        minutes,
        seconds,
        milliseconds,
    }
}

/**
 *
 * @param yearValue
 * @param monthValue
 * @param dayValue
 * @param hourValue
 * @param minValue
 * @param secondValue
 * @param msValue
 * @param isOrdinal
 * @returns The concatanated value of the parameters if said parameter has a non empty value.
 * Also adds in correct symbols (-, T, Z) for constructing an ISO string if those symbols are needed
 */
export const combineToISO = (
    yearValue?: string,
    monthValue?: string,
    dayValue?: string,
    hourValue?: string,
    minValue?: string,
    secondValue?: string,
    msValue?: string,
    isOrdinal: boolean = false
): string => {
    const dateParts: string[] = []

    if (yearValue) dateParts.push(yearValue)

    if (isOrdinal) {
        if (dayValue) dateParts.push(dayValue) // YYYY-DDD
    } else {
        if (monthValue) dateParts.push(monthValue) // YYYY-MM-DD
        if (dayValue) dateParts.push(dayValue)
    }

    let time = ''
    if (hourValue || minValue || secondValue || msValue) {
        const timeParts: string[] = []
        if (hourValue) timeParts.push(hourValue)
        if (minValue) timeParts.push(minValue)
        if (secondValue) {
            let seconds = secondValue
            if (msValue) seconds += `.${msValue}`
            timeParts.push(seconds)
        }
        time = `T${timeParts.join(':')}Z`
    }

    return dateParts.join('-') + time
}

/**
 *
 * @param isoString An ISO string to convert to ordinal format
 * @returns An ISO string converted to an ordinal format string such as YYYY-DDDTHH:mm:ss.sssZ
 */
export const toOrdinalIsoString = (isoString: string) => {
    const date = new Date(isoString)
    const year = date.getUTCFullYear()
    const startOfYear = new Date(Date.UTC(year, 0, 0))
    const diff = date.getTime() - startOfYear.getTime()
    const oneDay = 1000 * 60 * 60 * 24
    const dayOfYear = Math.floor(diff / oneDay)

    // Format the day of the year as a three-digit number
    const ordinalDay = String(dayOfYear).padStart(3, '0')

    // Extract the time part of the ISO string
    const timePart = isoString.substring(isoString.indexOf('T'))

    // Construct the Ordinal ISO string
    return `${year}-${ordinalDay}${timePart}`
}

export const toPartialRegularIsoString = (input: string): string => {
    // Regex to match partial ordinal ISO: YYYY, YYYY-DDD, YYYY-DDDTHH, etc.
    const regex = /^(\d{1,4})(?:-(\d{1,3}))?(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(?:\.(\d{1,3}))?(Z)?$/
    const match = input.match(regex)
    if (!match) return ''

    const [
        ,
        year = '',
        ordinal = '',
        hour = '',
        min = '',
        sec = '',
        ms = '',
    ] = match

    // Convert ordinal to month and day if present
    let month = ''
    let day = ''
    if (year && ordinal) {
        const date = new Date(Date.UTC(Number(year), 0, 1))
        date.setUTCDate(Number(ordinal))
        month = (date.getUTCMonth() + 1).toString().padStart(2, '0')
        day = date.getUTCDate().toString().padStart(2, '0')
    }

    // Pad time parts
    const paddedHour = hour ? hour.padStart(2, '0') : ''
    const paddedMin = min ? min.padStart(2, '0') : ''
    const paddedSec = sec ? sec.padStart(2, '0') : ''
    const paddedMs = ms ? ms.padEnd(3, '0') : ''

    // Build result
    let result = year
    if (month && day) result += `-${month}-${day}`
    else if (month) result += `-${month}`
    // else just year

    // Always output full time if any time part is present
    if (hour || min || sec || ms) {
        result += `T${paddedHour || '00'}`
        result += `:${paddedMin || '00'}`
        result += `:${paddedSec || '00'}`
        if (ms) result += `.${paddedMs}`
        result += 'Z'
    }

    return result
}

export const toPartialOrdinalIsoString = (input: string): string => {
    // Regex to match partial ISO: YYYY, YYYY-MM, YYYY-MM-DD, YYYY-MM-DDTHH, etc.
    const regex = /^(\d{1,4})(?:-(\d{1,2}))?(?:-(\d{2}))?(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(?:\.(\d{1,3}))?(Z)?$/
    const match = input.match(regex)
    if (!match) return ''

    const [
        ,
        year = '',
        month = '',
        day = '',
        hour = '',
        min = '',
        sec = '',
        ms = '',
    ] = match

    // If we have a day, convert YYYY-MM-DD to YYYY-DDD
    let ordinal = ''
    if (year && month && day) {
        // Calculate day of year
        const date = new Date(
            Date.UTC(Number(year), Number(month) - 1, Number(day))
        )
        const start = new Date(Date.UTC(Number(year), 0, 0))
        const diff = date.getTime() - start.getTime()
        ordinal = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(
            3,
            '0'
        )
    } else if (year && month && !day) {
        // Only year and month, treat as first day of month
        const date = new Date(Date.UTC(Number(year), Number(month) - 1, 1))
        const start = new Date(Date.UTC(Number(year), 0, 0))
        const diff = date.getTime() - start.getTime()
        ordinal = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(
            3,
            '0'
        )
    } else if (year && !month && !day) {
        // Only year
        ordinal = ''
    }

    // If input is already in ordinal format (YYYY-DDD...), extract ordinal
    if (!ordinal && year && month && month.length === 3) {
        ordinal = month
    }

    // Pad time parts
    const paddedHour = hour ? hour.padStart(2, '0') : ''
    const paddedMin = min ? min.padStart(2, '0') : ''
    const paddedSec = sec ? sec.padStart(2, '0') : ''
    const paddedMs = ms ? ms.padEnd(3, '0') : ''

    // Build result
    let result = year
    if (ordinal) result += `-${ordinal}`
    if (hour || min || sec || ms) {
        result += `T${paddedHour || '00'}`
        if (min || sec || ms) result += `:${paddedMin || '00'}`
        if (sec || ms) result += `:${paddedSec || '00'}`
        if (ms) result += `.${paddedMs}`
        result += 'Z'
    }

    return result
}

export const isLeapYear = (year: number) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

export const getMonthFromDayOfYear = (dayOfYear: string, year: number) => {
    // Convert the zero-padded day-of-year string to a number
    const dayOfYearNumber = parseInt(dayOfYear, 10)

    // Array of days in each month for a non-leap year
    const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    // Check if the year is a leap year and adjust February's days
    const isLeap = isLeapYear(year)
    if (isLeap) {
        daysInMonths[1] = 29 // February has 29 days in a leap year
    }

    // Iterate through the months to find where the day-of-year falls
    let cumulativeDays = 0
    for (let i = 0; i < daysInMonths.length; i++) {
        cumulativeDays += daysInMonths[i]
        if (dayOfYearNumber <= cumulativeDays) {
            // Return the month name
            return getMonthNameByIndex(i)
        }
    }

    // throw new Error('Invalid day-of-year or year provided.')
}

// Helper function to get the month name by its index (0 = January, 11 = December)
function getMonthNameByIndex(index: number): string {
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]
    return monthNames[index]
}

export function isIsoString(value: string): boolean {
    const isoRegex = /^\d{4}(-\d{2}){0,2}(T\d{2}:\d{2}(:\d{2}(\.\d{1,3})?)?Z?)?$/
    return isoRegex.test(value)
}

/**
 * Constructs an ISO string with 6-digit microseconds, e.g. 2025-06-11T12:34:56.123456Z
 * Pads all parts as needed. Does not validate ranges.
 */
export function buildMicroIsoString({
    year,
    month,
    day,
    hour = '00',
    min = '00',
    sec = '00',
    micro = '000000',
}: {
    year: string
    month: string
    day: string
    hour?: string
    min?: string
    sec?: string
    micro?: string
}): string {
    const YYYY = year.padStart(4, '0')
    const MM = month.padStart(2, '0')
    const DD = day.padStart(2, '0')
    const HH = hour.padStart(2, '0')
    const mm = min.padStart(2, '0')
    const ss = sec.padStart(2, '0')
    const us = micro.padEnd(6, '0').slice(0, 6)
    return `${YYYY}-${MM}-${DD}T${HH}:${mm}:${ss}.${us}Z`
}
