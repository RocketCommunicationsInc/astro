import { PartKey } from './utils/types'

/**
 * Validates if a string is in ISO 8601 format. Valid formats include:
 * - YYYY
 * - YYYY-MM
 * - YYYY-MM-DD
 * - YYYY-MM-DDTHHZ (hour only)
 * - YYYY-MM-DDTHH:mmZ (hour and minute)
 * - YYYY-MM-DDTHH:mm:ssZ (hour, minute, and second)
 * - YYYY-MM-DDTHH:mm:ss.sssZ (hour, minute, second, and milliseconds)
 * Ordinal Formats:
 * - YYYY
 * - YYYY-DDD
 * - YYYY-DDDTHH:mmZ
 * - YYYY-DDDTHH:mm:ssZ
 * - YYYY-DDDTHHZ:mm:ss.SSSZ
 */
export function isValidIso8601(value: string): boolean {
    const iso8601Regex = /^(\d{4})((-\d{2}){0,2}|-\d{3})(T\d{2}(:\d{2}(:\d{2}(\.\d{1,6})?)?)?Z)?$/
    return iso8601Regex.test(value)
}

/**
 * Determines the minimum and maximum values for different input types
 * @param type The input type (year, month, day, hour, min, sec, ms)
 * @param isMicro Whether microsecond precision is enabled
 * @param isJulian Whether Julian format is enabled
 * @param minYear Minimum year value (for year type)
 * @param maxYear Maximum year value (for year type)
 * @returns [min, max] tuple
 */
export function determineMinMax(
    type: PartKey,
    isMicro: boolean,
    isJulian?: boolean,
    minYear?: number,
    maxYear?: number
): [number, number] {
    switch (type) {
        case 'year':
            return [minYear || 1900, maxYear || 2100]
        case 'month':
            return [1, 12]
        case 'day':
            return !isJulian ? [1, 31] : [1, 366]
        case 'hour':
            return [0, 23]
        case 'min':
            return [0, 59]
        case 'sec':
            return [0, 59]
        case 'ms':
            return isMicro ? [0, 999999] : [0, 999]
        default:
            return [0, 0]
    }
}
