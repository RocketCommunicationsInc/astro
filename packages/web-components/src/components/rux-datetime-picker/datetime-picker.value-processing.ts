/**
 * Value processing helpers for the datetime picker component.
 *
 * This module contains functions for parsing and processing initial values,
 * handling different formats (Julian/Gregorian), and setting up parts arrays.
 */

import { Part, Precision } from './utils/types'
import {
    buildMicroOrdinalIsoString,
    buildMicroIsoString,
    formatOrdinalToIso,
    getMonthFromDayOfYear,
    getMonthValueByName,
    initialOrdinalParts,
    initialParts,
    isLeapYear,
    julianToGregorianDay,
    setIsoPart,
    setJulianIsoPart,
    toOrdinalIsoString,
    toPartialOrdinalIsoString,
    toPartialRegularIsoString,
} from './utils'

/**
 * Handles initial value parsing and sets up the parts array
 * @param value The initial value to process
 * @param julianFormat Whether using Julian format
 * @param precision The precision setting
 * @returns Object containing the processed ISO string, parts array, and final value
 */
export function handleInitialValue(
    value: string | undefined,
    julianFormat: boolean,
    precision: Precision
): { iso: string; parts: Part[]; finalValue: string } {
    const initial = julianFormat ? initialOrdinalParts() : initialParts()
    const isMicro = precision === 'us'
    let iso = ''

    if (value) {
        try {
            if (julianFormat && value.length === 3) {
                const currentYear = new Date().getUTCFullYear()
                value = `${currentYear}-${value}`
            }

            // --- MICROSECOND HANDLING ---
            if (isMicro && !julianFormat) {
                //check if incoming value is in an Oridnal ISO format. If so, convert it to gregorian since we're not in julianFormat.
                const ordinalFormatMatch = value.match(
                    /^([0-9]{4})(?:-([0-9]{1,3}))?(?:T([0-9]{2})(?::([0-9]{2}))?(?::([0-9]{2})(?:\.([0-9]{1,6}))?)?Z?)?$/
                )
                if (ordinalFormatMatch) {
                    // Extract year, ordinal day, hour, min, sec, micro
                    const year = ordinalFormatMatch[1] || '0000'
                    const ordinal = ordinalFormatMatch[2] || '001'
                    const hour = ordinalFormatMatch[3] || '00'
                    const min = ordinalFormatMatch[4] || '00'
                    const sec = ordinalFormatMatch[5] || '00'
                    const micro = ordinalFormatMatch[6] || '000000'

                    // Convert ordinal day to month and day
                    const date = new Date(Date.UTC(Number(year), 0, 1))
                    date.setUTCDate(Number(ordinal))
                    const month = (date.getUTCMonth() + 1)
                        .toString()
                        .padStart(2, '0')
                    const day = date.getUTCDate().toString().padStart(2, '0')

                    value = buildMicroIsoString({
                        year,
                        month,
                        day,
                        hour,
                        min,
                        sec,
                        micro,
                    })
                }
                // Try to extract all parts from the value (ISO or partial ISO)
                // Accepts both YYYY-MM-DDTHH:mm:ss.SSSSSSZ and partials

                const regex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{1,6})Z?$/
                const match = value.match(regex)
                let isoTemp = ''
                if (match) {
                    const [, year, month, day, hour, min, sec, micro] = match
                    isoTemp = buildMicroIsoString({
                        year,
                        month,
                        day,
                        hour,
                        min,
                        sec,
                        micro,
                    })
                } else {
                    // Fallback: try to parse as much as possible
                    const partial = value.match(
                        new RegExp(
                            `^(\\d{4})-(\\d{2})-(\\d{2})(?:T(\\d{2}))?(?::(\\d{2}))?(?::(\\d{2}))?(?:\\.(\\d{1,6}))?Z?$`
                        )
                    )
                    const [
                        ,
                        year = '0000',
                        month = '01',
                        day = '01',
                        hour = '00',
                        min = '00',
                        sec = '00',
                        micro = '000000',
                    ] = partial || []
                    isoTemp = buildMicroIsoString({
                        year,
                        month,
                        day,
                        hour,
                        min,
                        sec,
                        micro,
                    })
                }
                // Set initial part values from ISO string
                for (const part of initial) {
                    if (part.type === 'mask') continue
                    part.value = setIsoPart[part.type](isoTemp, true)
                }
                iso = isoTemp

                // Adjust parts array length based on precision
                adjustPartsForPrecision(initial, precision, julianFormat)

                const finalValue = julianFormat
                    ? toPartialOrdinalIsoString(iso, isMicro)
                    : iso

                return { iso, parts: initial, finalValue }
            }

            if (julianFormat && isMicro) {
                const match = value.match(
                    /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{1,6})Z$/
                )
                if (match) {
                    const [, year, month, day, hour, min, sec, micro] = match
                    // Calculate ordinal day
                    const date = new Date(`${year}-${month}-${day}T00:00:00Z`)
                    const start = new Date(Date.UTC(Number(year), 0, 0))
                    const ordinalDay = String(
                        Math.floor(
                            (date.getTime() - start.getTime()) /
                                (1000 * 60 * 60 * 24)
                        )
                    ).padStart(3, '0')
                    value = buildMicroOrdinalIsoString({
                        year,
                        jday: ordinalDay,
                        hour,
                        min,
                        sec,
                        micro,
                    })
                }
            }
            // --- END MICROSECOND HANDLING ---

            const ordinalFormatMatch = value.match(
                /^([0-9]{4})(?:-([0-9]{1,3}))?(?:T([0-9]{2})(?::([0-9]{2}))?(?::([0-9]{2})(?:\.([0-9]{1,6}))?)?Z?)?$/
            )

            let d: Date | undefined | string = undefined

            if (ordinalFormatMatch && julianFormat) {
                // Parse year and day-of-year
                const year =
                    ordinalFormatMatch[1] ||
                    new Date().getUTCFullYear().toString()
                let jdayNum = parseInt(ordinalFormatMatch[2] || '1', 10)
                if (isNaN(jdayNum) || jdayNum < 1) jdayNum = 1

                const yearNum = parseInt(year, 10)
                const maxDay = isLeapYear(yearNum) ? 366 : 365
                if (jdayNum > maxDay) jdayNum = maxDay
                const jday = jdayNum.toString().padStart(3, '0')
                const hour = ordinalFormatMatch[3] || '00'
                const minute = ordinalFormatMatch[4] || '00'
                const sec = ordinalFormatMatch[5] || '00'
                const ms = ordinalFormatMatch[6]
                    ? ordinalFormatMatch[6]
                    : isMicro
                    ? '000000'
                    : '000'
                const gregDay = julianToGregorianDay(jday, year).padStart(
                    2,
                    '0'
                )
                const month = getMonthValueByName(
                    getMonthFromDayOfYear(jday, yearNum)!
                )
                if (!isMicro) {
                    d = new Date(
                        `${year}-${month}-${gregDay}T${hour}:${minute}:${sec}.${ms}Z`
                    )
                } else {
                    d = buildMicroOrdinalIsoString({
                        year,
                        jday,
                        hour,
                        min: minute,
                        sec,
                        micro: ms,
                    })
                }
            } else {
                // Special case: 2-digit value as month (01-12)
                if (
                    value.length === 2 &&
                    /^\\d{2}$/.test(value) &&
                    parseInt(value, 10) >= 1 &&
                    parseInt(value, 10) <= 12
                ) {
                    // Treat as month, default year to current year
                    const currentYear = new Date().getUTCFullYear()
                    d = new Date(`${currentYear}-${value}`)
                } else {
                    // Try to parse as a direct date first
                    d = new Date(value)
                    if (isNaN(d.getTime())) {
                        // Fallback: try to parse as partial ISO
                        const isoTemp = toPartialRegularIsoString(value)
                        d = new Date(isoTemp)
                    }
                }
            }

            // Always get ISO string (Gregorian)
            if (d instanceof Date) {
                iso = d.toISOString()
                if (julianFormat) {
                    iso = toOrdinalIsoString(iso)
                }
            } else {
                iso = d || ''
            }

            // Set initial part values from ISO string
            for (const part of initial) {
                if (part.type === 'mask') continue
                part.value = julianFormat
                    ? setJulianIsoPart[part.type](iso, isMicro)
                    : setIsoPart[part.type](iso, isMicro)
            }

            // Always pass down Gregorian ISO to calendar
            iso = formatOrdinalToIso(iso)
        } catch (error: any) {
            iso = error.message || 'Invalid date'
        }
    }

    // Adjust parts array length based on precision
    adjustPartsForPrecision(initial, precision, julianFormat)

    const finalValue = julianFormat
        ? toPartialOrdinalIsoString(iso, isMicro)
        : iso

    return { iso, parts: initial, finalValue }
}

/**
 * Adjusts the parts array length based on precision setting
 * @param parts The parts array to adjust
 * @param precision The precision setting
 * @param julianFormat Whether using Julian format
 */
function adjustPartsForPrecision(
    parts: Part[],
    precision: Precision,
    julianFormat: boolean
) {
    switch (precision) {
        case 'day':
            // Remove all time parts for day precision
            !julianFormat ? parts.splice(5, 9) : parts.splice(3, 9)
            break
        case 'hour':
            // Keep only up to hour
            !julianFormat ? parts.splice(7, 6) : parts.splice(5, 6)
            break
        case 'min':
            !julianFormat ? parts.splice(9, 4) : parts.splice(7, 4)
            break
        case 'sec':
            !julianFormat ? parts.splice(11, 2) : parts.splice(9, 2)
            break
        case 'ms':
            break
        case 'us':
            break
        default:
            parts.splice(9, 4)
            break
    }
}
