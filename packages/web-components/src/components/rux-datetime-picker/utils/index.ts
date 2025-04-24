import { InputRefs, Part, PartKey } from './types'

export const initialParts = (): Part[] => [
    { type: 'year', value: '' },
    { type: 'mask', value: '-' },
    { type: 'month', value: '' },
    { type: 'mask', value: '-' },
    { type: 'day', value: '' },
    { type: 'mask', value: '~' },
    { type: 'hour', value: '' },
    { type: 'mask', value: ':' },
    { type: 'min', value: '' },
    { type: 'mask', value: ':' },
    { type: 'sec', value: '' },
    { type: 'mask', value: '.' },
    { type: 'ms', value: '' },
    { type: 'mask', value: '~' },
    { type: 'mask', value: 'Z' },
]

//For Julian date mode - YYYY-DDDThh:mm:ss.sss
export const initialOrdinalParts = (): Part[] => [
    { type: 'year', value: '' },
    { type: 'mask', value: '-' },
    { type: 'day', value: '' },
    { type: 'mask', value: '~' },
    { type: 'mask', value: 'T' },
    { type: 'hour', value: '' },
    { type: 'mask', value: ':' },
    { type: 'min', value: '' },
    { type: 'mask', value: ':' },
    { type: 'sec', value: '' },
    { type: 'mask', value: '.' },
    { type: 'ms', value: '' },
    { type: 'mask', value: '~' },
    { type: 'mask', value: 'Z' },
]

export const setIsoPart: Record<PartKey, (iso: string) => string> = {
    year: (iso) => iso.substring(0, 4),
    month: (iso) => iso.substring(5, 7),
    day: (iso) => iso.substring(8, 10),
    hour: (iso) => iso.substring(11, 13),
    min: (iso) => iso.substring(14, 16),
    sec: (iso) => iso.substring(17, 19),
    ms: (iso) => iso.substring(20, 23),
}

export const setJulianIsoPart: Record<PartKey, (iso: string) => string> = {
    year: (iso) => iso.substring(0, 4),
    month: () => '', // Julian date does not have a month part
    day: (iso) => iso.substring(5, 8),
    hour: (iso) => iso.substring(9, 11),
    min: (iso) => iso.substring(12, 14),
    sec: (iso) => iso.substring(15, 17),
    ms: (iso) => iso.substring(18, 21),
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
            if (month && value.length === setMaxLength['year']) {
                month.focus()
            }

            return prev.map((part) => {
                if (part.type !== 'year') return part
                return { ...part, value }
            })
        } else {
            const day = inputRefs['day']
            if (day && value.length === setMaxLengthOrdinal['year']) {
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
        if (day && value.length === setMaxLength['month']) {
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
                (!isOrdinal ? setMaxLength['day'] : setMaxLengthOrdinal['day'])
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
        if (min && value.length === setMaxLength['hour']) {
            min.focus()
        }

        return prev.map((part) => {
            if (part.type !== 'hour') return part
            return { ...part, value }
        })
    },
    min: (value, prev, inputRefs) => {
        const sec = inputRefs['sec']
        if (sec && value.length === setMaxLength['min']) {
            sec.focus()
        }

        return prev.map((part) => {
            if (part.type !== 'min') return part
            return { ...part, value }
        })
    },
    sec: (value, prev, inputRefs) => {
        const ms = inputRefs['ms']
        if (ms && value.length === setMaxLength['sec']) {
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

export const setDisplay: Record<PartKey, (value: string) => string> = {
    year: (value) => value.padEnd(4, 'Y'),
    month: (value) => value.padEnd(2, 'M'),
    day: (value) => value.padEnd(2, 'D'),
    hour: (value) => value.padEnd(2, 'h'),
    min: (value) => value.padEnd(2, 'm'),
    sec: (value) => value.padEnd(2, 's'),
    ms: (value) => value.padEnd(3, 'S'),
}

export const setOrdinalDisplay: Record<PartKey, (value: string) => string> = {
    year: (value) => value.padEnd(4, 'Y'),
    month: () => '', // Julian date does not have a month part
    day: (value) => value.padEnd(3, 'D'),
    hour: (value) => value.padEnd(2, 'h'),
    min: (value) => value.padEnd(2, 'm'),
    sec: (value) => value.padEnd(2, 's'),
    ms: (value) => value.padEnd(3, 'S'),
}

export const setMaxLength: Record<PartKey, number> = {
    year: 4,
    month: 2,
    day: 2,
    hour: 2,
    min: 2,
    sec: 2,
    ms: 3,
}

export const setMaxLengthOrdinal: Record<PartKey, number> = {
    year: 4,
    month: 2,
    day: 3,
    hour: 2,
    min: 2,
    sec: 2,
    ms: 3,
}

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
