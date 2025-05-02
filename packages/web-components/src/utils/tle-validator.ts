/**
 * TLE Validator - A utility for validating Two-Line Element sets (TLEs)
 * This module contains functionality to validate, parse, and analyze TLE data
 */

export interface TLEValidationResult {
    valid: boolean
    strictValid?: boolean
    message: string
    fields?: Record<string, string>
    lines?: string[]
    issues?: TLEIssue[]
    orbitalPeriod?: number | null
}

export interface TLEIssue {
    type: 'warning' | 'error' | 'info'
    message: string
    field: string
    explanation?: string
}

export class TLEValidator {
    // Standard TLE pattern with named capture groups for parsing
    private static standardPattern = /^1\s(?<satnum1>\d{5})(?<classification>[A-Z])\s(?<intl_desig_year>\d{2})(?<intl_desig_launch>\d{3})(?<intl_desig_piece>[A-Z0-9 ]{1,3})\s+(?<epoch_year>\d{2})(?<epoch_day>\d{3}\.\d{8})\s+(?<first_deriv>[-+. \d]{10})\s+(?<sec_deriv>[-+ ]\d{5}[-+]\d)\s+(?<bstar>[-+ ]\d{5}[-+]\d)\s+(?<ephem_type>\d)\s+(?<elem_set>[ \d]{4})(?<checksum1>\d)\r?\n2\s(?<satnum2>\d{5})\s+(?<inclination>[ \d]{3}\.\d{4})\s+(?<raan>[ \d]{3}\.\d{4})\s+(?<eccentricity>\d{7})\s+(?<arg_perigee>[ \d]{3}\.\d{4})\s+(?<mean_anomaly>[ \d]{3}\.\d{4})\s+(?<mean_motion>[ \d]{2}\.\d{8,13}) *(?<rev_num>\d{1,5})(?<checksum2>\d)$/

    // More flexible pattern allowing blank international designators and other variations
    private static flexiblePattern = /^1\s(?<satnum1>\d{5})(?<classification>[A-Z])\s(?<intl_desig>[ ]{8}|(?<intl_desig_year>\d{2})(?<intl_desig_launch>\d{3})(?<intl_desig_piece>[A-Z0-9 ]{1,3}))\s+(?<epoch_year>\d{2})(?<epoch_day>\d{3}\.\d{8})\s+(?<first_deriv>[-+. \d]{10})\s+(?<sec_deriv>[-+ ]\d{5}[-+]\d)\s+(?<bstar>[-+ ]\d{5}[-+]\d)\s+(?<ephem_type>\d)\s+(?<elem_set>[ \d]{4})(?<checksum1>\d)\r?\n2\s(?<satnum2>\d{5})\s+(?<inclination>[ \d]{3}\.\d{4})\s+(?<raan>[ \d]{3}\.\d{4})\s+(?<eccentricity>\d{7})\s+(?<arg_perigee>[ \d]{3}\.\d{4})\s+(?<mean_anomaly>[ \d]{3}\.\d{4})\s+(?<mean_motion>[ \d]{1,2}\.\d{8,13}) *(?<rev_num>\d{1,5})(?<checksum2>\d)$/

    /**
     * Verify the checksum of a TLE line
     * @param {string} line - A single line from a TLE
     * @return {boolean} Whether the checksum is valid
     */
    public static verifyChecksum(line: string): boolean {
        if (!line || line.length < 1) return false

        // Extract the expected checksum (last character)
        const expectedChecksum = parseInt(line.charAt(line.length - 1), 10)

        // Calculate the actual checksum
        let sum = 0
        for (let i = 0; i < line.length - 1; i++) {
            const char = line.charAt(i)
            if (char >= '0' && char <= '9') {
                // Digits count as their value
                sum += parseInt(char, 10)
            } else if (char === '-') {
                // Minus signs count as 1
                sum += 1
            }
            // Letters, blanks, periods, plus signs count as 0 (no action needed)
        }

        const calculatedChecksum = sum % 10
        return calculatedChecksum === expectedChecksum
    }

    /**
     * Simple validation check against standard TLE pattern
     * @param {string} tleString - The TLE string to validate
     * @return {boolean} Whether the TLE matches the standard pattern
     */
    public static isValid(tleString: string): boolean {
        return this.standardPattern.test(tleString)
    }

    /**
     * Check if valid with flexible pattern that allows some variations
     * @param {string} tleString - The TLE string to validate
     * @return {boolean} Whether the TLE matches the flexible pattern
     */
    public static isFlexibleValid(tleString: string): boolean {
        return this.flexiblePattern.test(tleString)
    }

    /**
     * Parse a TLE into its component fields
     * @param {string} tleString - The TLE string to parse
     * @return {Object|null} Parsed fields or null if invalid
     */
    public static parse(
        tleString: string
    ): { standardFormat: boolean; fields: Record<string, string> } | null {
        // Try with standard pattern first
        const match = tleString.match(this.standardPattern)
        if (match && match.groups)
            return { standardFormat: true, fields: match.groups }

        // If standard fails, try with flexible pattern
        const flexMatch = tleString.match(this.flexiblePattern)
        if (flexMatch && flexMatch.groups)
            return { standardFormat: false, fields: flexMatch.groups }

        return null
    }

    /**
     * Validate TLE length requirements
     * @param {string} tleString - The TLE string to validate
     * @return {Object} Validation result with valid status and message
     */
    private static validateLength(
        tleString: string
    ): { valid: boolean; message: string } {
        const lines = tleString.split('\n').filter((line) => line.trim() !== '')

        if (lines.length !== 2) {
            return {
                valid: false,
                message: 'A TLE must consist of exactly 2 lines.',
            }
        }

        if (lines[0].length !== 69) {
            return {
                valid: false,
                message: 'Line 1 must be exactly 69 characters long.',
            }
        }

        if (lines[1].length < 69) {
            return {
                valid: false,
                message: 'Line 2 must be at least 69 characters long.',
            }
        }

        return { valid: true, message: '' }
    }

    /**
     * Check for specific format issues in the TLE
     * @param {string} tleString - The TLE string to check
     * @return {Array} List of issues found in the TLE
     */
    private static checkFormatIssues(tleString: string): TLEIssue[] {
        const lines = tleString.split('\n').filter((line) => line.trim() !== '')
        if (lines.length !== 2) return []

        const issues: TLEIssue[] = []

        // Check for missing international designator
        const intlDesignator = lines[0].substring(9, 17)
        if (intlDesignator.trim() === '') {
            issues.push({
                type: 'warning',
                message: 'Missing International Designator segment',
                field: 'International Designator',
                explanation:
                    'This might indicate a classified object, newly detected object, or pre-launch TLE.',
            })
        }

        return issues
    }

    /**
     * Complete validation with detailed error messages
     * @param {string} tleString - The TLE string to validate
     * @return {TLEValidationResult} Validation result with detailed information
     */
    public static validate(tleString: string): TLEValidationResult {
        // Check if string is empty
        if (!tleString || tleString.trim() === '') {
            return {
                valid: false,
                message: 'Please enter a TLE.',
            }
        }

        // Check length requirements
        const lengthValidation = this.validateLength(tleString)
        if (!lengthValidation.valid) {
            return lengthValidation
        }

        // Check for specific format issues
        const formatIssues = this.checkFormatIssues(tleString)

        // Parse using standard regex
        const parseResult = this.parse(tleString)

        if (!parseResult) {
            return {
                valid: false,
                message: 'Invalid TLE format. Please check your input.',
                issues: formatIssues,
            }
        }

        const { standardFormat, fields } = parseResult

        // Verify satellite numbers match
        if (fields.satnum1 !== fields.satnum2) {
            return {
                valid: false,
                message: 'Satellite numbers in line 1 and line 2 do not match.',
                issues: formatIssues,
            }
        }

        // Get the individual lines
        const lines = tleString.split('\n').filter((line) => line.trim() !== '')

        // Verify checksums
        if (!this.verifyChecksum(lines[0])) {
            return {
                valid: false,
                message:
                    'Invalid checksum in line 1. The TLE may be corrupted.',
                issues: [
                    ...formatIssues,
                    {
                        type: 'error',
                        message: 'Checksum verification failed for line 1',
                        field: 'Line 1 Checksum',
                        explanation:
                            'The calculated checksum does not match the provided checksum digit.',
                    },
                ],
            }
        }

        if (!this.verifyChecksum(lines[1])) {
            return {
                valid: false,
                message:
                    'Invalid checksum in line 2. The TLE may be corrupted.',
                issues: [
                    ...formatIssues,
                    {
                        type: 'error',
                        message: 'Checksum verification failed for line 2',
                        field: 'Line 2 Checksum',
                        explanation:
                            'The calculated checksum does not match the provided checksum digit.',
                    },
                ],
            }
        }

        // Calculate orbital parameters for additional context
        let orbitalPeriod = null
        if (fields.mean_motion) {
            const meanMotion = parseFloat(fields.mean_motion.trim())
            if (!isNaN(meanMotion) && meanMotion > 0) {
                orbitalPeriod = 24 / meanMotion
            }
        }

        // All validations passed
        return {
            valid: true,
            strictValid: standardFormat,
            message: standardFormat
                ? 'Valid TLE format!'
                : 'Valid TLE with non-standard format',
            fields: fields,
            lines: lines,
            issues: formatIssues,
            orbitalPeriod: orbitalPeriod,
        }
    }

    /**
     * Extract satellite title/name from TLE data if available
     * @param tle The TLE string
     * @returns Extracted title or null if not available
     */
    public static extractTitle(tle: string): string | null {
        if (!tle || tle.trim().length === 0) {
            return null
        }

        const parseResult = this.parse(tle)
        if (!parseResult || !parseResult.fields) {
            return null
        }

        const { fields } = parseResult

        // Extract satellite number and international designator as a basic identifier
        const satNum = fields.satnum1
        const intlYear = fields.intl_desig_year
        const intlLaunch = fields.intl_desig_launch
        const intlPiece = fields.intl_desig_piece?.trim()

        if (satNum) {
            let title = `Satellite #${satNum}`
            if (intlYear && intlLaunch && intlPiece) {
                title += ` (${intlYear}-${intlLaunch}${intlPiece})`
            }
            return title
        }

        return null
    }
}
