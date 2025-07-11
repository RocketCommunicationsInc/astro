/**
 * Render helpers for the datetime picker.
 *
 * This file contains helper functions that generate CSS classes and other
 * render-related utilities for the datetime picker component.
 */

import { PartKey, Precision } from './utils/types'
import { setDisplay, setOrdinalDisplay } from './utils'

/**
 * Generates CSS classes for mask parts (separators)
 */
export function getMaskClasses(value: string) {
    return {
        mask: true,
        space: value === '~',
        tz: value === 'T' || value === 'Z',
        z: value === 'Z',
        dash: value === '-',
        colon: value === ':',
    }
}

/**
 * Generates CSS classes for input parts
 */
export function getInputClasses(
    type: PartKey,
    julianFormat: boolean,
    precision: Precision
) {
    return {
        input: true,
        [type]: true,
        julian: julianFormat && type === 'day',
        microsecond: precision === 'us' && type === 'ms',
    }
}

/**
 * Generates CSS classes for display spans
 */
export function getDisplayClasses(
    type: PartKey,
    julianFormat: boolean,
    precision: Precision
) {
    return {
        display: true,
        isOrdinal: julianFormat,
        year: type === 'year',
        month: type === 'month',
        day: type === 'day',
        hour: type === 'hour',
        min: type === 'min',
        sec: type === 'sec',
        ms: type === 'ms',
        us: precision === 'us',
    }
}

/**
 * Gets the display text for a part
 */
export function getDisplayText(
    type: PartKey,
    value: string,
    julianFormat: boolean,
    precision: Precision
) {
    return !julianFormat
        ? setDisplay[type](value, precision === 'us')
        : setOrdinalDisplay[type](value, precision === 'us')
}

/**
 * Generates CSS classes for the input container
 */
export function getInputContainerClasses(
    size: string,
    disabled: boolean,
    invalid: boolean
) {
    return {
        input: true,
        'rux-body-1': true,
        small: size === 'small',
        medium: size === 'medium',
        large: size === 'large',
        disabled: disabled,
        invalid: invalid,
    }
}
