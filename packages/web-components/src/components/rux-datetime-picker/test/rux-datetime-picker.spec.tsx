import { expect, test } from '../../../../tests/utils/_astro-fixtures'

import { RuxDatetimePicker } from '../rux-datetime-picker'

test.describe('Datepicker', () => {
    test.beforeEach(async ({ page }) => {
        const template = `
  })
     <div style="
                width: 350px;
                margin: 1rem auto;
                display: flex;
                gap: 1rem;
                flex-direction: column;
            ">
    <h4>Copy/Paste Test</h4>
    <span>2025-01-25T17:25:24.211Z</span>
    <span>2025-02-25T17:25:24.211Z</span>
    <span>2024-02-25T17:25:24.211Z</span>
    <span>2025-056T17:25:24.211Z</span>
    <rux-textarea></rux-textarea>

    <rux-datetime-picker label="Default" help-text="Help Text" precision="ms" min-year="2000" max-year="2040"
      value="j"></rux-datetime-picker>
    <rux-datetime-picker label="Julian" help-text="Help Text" precision="ms" min-year="2000" max-year="2040"
      value="2024-10-05T17:25:24.211Z" julian-format></rux-datetime-picker>
    <rux-datetime-picker label="Default" help-text="Help Text" precision="ms" min-year="2000"
      max-year="2040"></rux-datetime-picker>
    <rux-datetime-picker label="Julian" help-text="Help Text" precision="ms" min-year="2000" max-year="2040"
      julian-format></rux-datetime-picker>
    <rux-datetime-picker label="Default With Given Value" help-text="Help Text" precision="ms" min-year="2000"
      max-year="2040" value="2025-01-25T17:25:24.211Z"></rux-datetime-picker>
    <rux-datetime-picker label="Julian With Given Value" help-text="Help Text" precision="ms" min-year="2000"
      max-year="2040" julian-format value="2024-02-25T17:25:24.211Z"></rux-datetime-picker>
    <div>
      <h4>Change Precision</h4>
      <rux-radio-group label="Precision" name="precision" value="MS">
        <rux-radio value="sec" name="precision">Seconds</rux-radio>
        <rux-radio value="ms" name="precision">Milliseconds</rux-radio>
        <rux-radio value="min" name="precision">Minutes</rux-radio>
      </rux-radio-group>
    </div>
    <h4>Precision Examples</h4>
    <rux-datetime-picker label="Minutes" value="2025-01-25T17:25:24.211Z"></rux-datetime-picker>
    <rux-datetime-picker label="Seconds" value="2024-10-05T17:25:24.211Z" precision="sec"></rux-datetime-picker>
  <rux-datetime-picker label="Milliseconds" value="2024-02-10T17:25:24.211Z" precision="ms"></rux-datetime-picker>
</div>
`
        await page.setContent(template)
    })
    test('should render the component', async ({ page }) => {
        const datepicker = page.locator('rux-datetime-picker')
        await expect(datepicker).toBeVisible()
    })
})
test.describe('Datepicker methods', () => {
    test('isValidIso', async ({ page }) => {
        let component: RuxDatetimePicker
        beforeEach(() => {
            component = new RuxDatetimePicker()
        })
        it('should return true for valid ISO 8601 strings', () => {
            const validIsoStrings = [
                '2025',
                '2025-01',
                '2025-01-01',
                '2025-01-01T12Z',
                '2025-01-01T12:34Z',
                '2025-01-01T12:34:56Z',
                '2025-01-01T12:34:56.789Z',
                '2025-056T17:25:24.211Z',
                '2025-056T17:25:24Z',
                '2025-056T17:25Z',
                '2025-056T17Z',
                '2025-056',
                '2025',
            ]

            validIsoStrings.forEach((isoString) => {
                expect(component.isValidIso8601(isoString)).toBe(true)
            })
        })
        test('should return false for invalid ISO strings', () => {
            const invalidIsoStrings = [
                'invalid-date',
                '1',
                '13',
                '133',
                'x',
                'Mon Apr 07 2025 11:59:24 GMT-0600 (Mountain Daylight Time)',
                'YYYY-MM-DD',
                'YYYY-MM-DDTHH:mm:ss.SSSZ',
            ]

            invalidIsoStrings.forEach((isoString) => {
                const result = component.isValidIso8601(isoString)
                expect(result).toBe(false)
            })
        })
    })
})
