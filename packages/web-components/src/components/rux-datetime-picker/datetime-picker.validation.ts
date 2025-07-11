import { getDaysInMonth } from 'date-fns'
import { InputRefs, Part, PartKey } from './utils/types'
import { determineMinMax } from './datetime-picker.helpers'

/**
 * Takes in an input value and validates it based on the type of input, adhering it to the min and max of that type
 * @param value The input value to validate
 * @param type The type of input (year, month, day, hour, min, sec, ms, us)
 * @param inputRefs References to all input elements
 * @param parts The current parts array
 * @param precision The precision setting (affects microsecond validation)
 * @param julianFormat Whether using Julian format
 * @param minYear Minimum allowed year
 * @param maxYear Maximum allowed year
 * @returns Input value validated based on type
 */
export function validateInput(
    value: string,
    type: PartKey,
    inputRefs: InputRefs,
    parts: Part[],
    precision: string,
    julianFormat: boolean,
    minYear: number,
    maxYear: number
): string {
    const [min, max] = determineMinMax(
        type,
        precision === 'us',
        julianFormat,
        minYear,
        maxYear
    )
    const dayPart = parts.find((part) => part.type == 'day')
    const monthPart = parts.find((part) => part.type === 'month')
    const yearPart = parts.find((part) => part.type === 'year')

    // If type is month, only allow values of 1-12. If the first digit is between 2-9, pad the digit with a 0 and move to the next input.
    if (type === 'month' && value.length === 1 && parseInt(value) > 1) {
        value = `0${value}`
        inputRefs['day']?.focus()
    }
    //Month can't be 00
    if (type === 'month' && value === '00') {
        value = '01'
    }

    // If entered month is higher than max of 12, revert value to be 12
    if (type === 'month' && parseInt(value) > max) {
        value = `${max}`
    }

    if (type === 'month' && dayPart?.value) {
        //need year to accuractley determine how many days are in the month
        const year = yearPart?.value || new Date().getFullYear()
        //get the month from the input
        // get the days in the month. Months in this context is 0-indexed, hence the -1
        const daysInMonth = getDaysInMonth(
            new Date(Number(year), Number(value) - 1)
        )
        //check day input to see if it's value needs updated to be the highest day in the month
        if (Number(dayPart.value) > daysInMonth) {
            dayPart.value = daysInMonth.toString()
        }
    }

    // Based on the month, the day should be limited to the number of days in that month
    if (!julianFormat) {
        if (type === 'day') {
            const month = monthPart?.value || ''
            if (month) {
                const year = yearPart?.value || new Date().getFullYear()
                //get the month from the input
                // get the days in the month. Months in this context is 0-indexed, hence the -1
                const daysInMonth = getDaysInMonth(
                    new Date(Number(year), Number(month) - 1)
                )
                if (parseInt(value) > daysInMonth) {
                    value = `${daysInMonth}`

                    if (dayPart) dayPart.value = value
                }
            } else {
                if (parseInt(value) > 31) {
                    value = '31'
                    if (dayPart) dayPart.value = value
                }
            }
            // If the day is 0, set it to 1
            if (parseInt(value) === 0 && value.length === 2) {
                value = '01'
            }
        }
    } else {
        // If the day is 0, set it to 1
        if (type === 'day' && parseInt(value) === 0 && value.length === 3) {
            value = '001'
        }
        // if the year isn't a leapyear, the max day is 365
        if (
            type === 'day' &&
            parseInt(yearPart?.value || '') % 4 !== 0 &&
            parseInt(value) > 365
        ) {
            value = '365'
        }
        // if the year is a leapyear, the max day is 366
        if (
            type === 'day' &&
            parseInt(yearPart?.value || '') % 4 === 0 &&
            parseInt(value) > 366
        ) {
            value = '366'
        }
    }

    // If year value is greater than max, revert value to be max
    if (type === 'year' && parseInt(value) > max) {
        value = `${max}`
    }

    // If year value is less than min, revert value to be min but only after the entire year has been entered
    if (type === 'year' && parseInt(value) < min && value.length === 4) {
        value = `${min}`
    }

    // If the year is not a leap year, ensure that the max day for Feb is 28.
    // This solves the edge case of typing into the datepicker a leap year date like 2024-02-29,
    // and then changing the year in the input to a non-leap year.
    if (type === 'year' && monthPart && dayPart && value.length === 4) {
        if (
            parseInt(value) % 4 !== 0 &&
            monthPart.value === '02' &&
            dayPart.value > '28'
        ) {
            // we are not in a leap year, so the max day for feb is 28.
            dayPart.value = '28'
        }
    }

    // If hour value is greater than max, revert value to be max
    if (type === 'hour' && parseInt(value) > max) {
        value = `${max}`
    }
    // if minute value is greater than max, revert value to be max
    if (type === 'min' && parseInt(value) > max) {
        value = `${max}`
    }
    // if second value is greater than max, revert value to be max
    if (type === 'sec' && parseInt(value) > max) {
        value = `${max}`
    }
    // if millisecond value is greater than max, revert value to be max
    if (type === 'ms' && parseInt(value) > max) {
        value = `${max}`
    }

    return value
}
