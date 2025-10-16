import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Radio', () => {
    test.beforeEach(async ({ page }) => {
        const template = `
            <rux-radio>hello</rux-radio>
            <rux-radio id="disabled" disabled></rux-radio>
            <rux-radio id="prechecked" checked></rux-radio>
        `
        await page.setContent(template)
    })
    test('it checks when clicked', async ({ page }) => {
        const radio = page.locator('rux-radio').nth(0)
        const innerRadio = radio.locator('input')
        await expect(innerRadio).not.toBeChecked()
        await radio.click()
        await expect(innerRadio).toBeChecked()
    })
    test('it does not check when disabled', async ({ page }) => {
        const radio = page.locator('#disabled')
        const innerRadio = radio.locator('input')
        await expect(innerRadio).not.toBeChecked()
        await radio.click()
        await expect(innerRadio).not.toBeChecked()
    })
    test('it remains checked when checked and clicked again', async ({
        page,
    }) => {
        const radio = page.locator('#prechecked')
        const innerRadio = radio.locator('input')
        await expect(innerRadio).toBeChecked()
        await radio.click()
        await expect(innerRadio).toBeChecked()
    })
    test('it emits ruxblur event', async ({ page }) => {
        const radio = page.locator('rux-radio').nth(0)
        const otherRadio = page.locator('#prechecked')
        const blurEvent = await page.spyOnEvent('ruxblur')
        await radio.click()
        await otherRadio.click()
        await expect(blurEvent).toHaveReceivedEventTimes(1)
    })
})
