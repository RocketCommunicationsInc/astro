import { test, expect } from '@playwright/test'
import {
    startTestEnv,
    startTestInBefore,
    setBodyContent,
} from './utils/_startTestEnv'

test.describe('Checkbox', () => {
    startTestEnv()

    test('it renders', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-checkbox></rux-checkbox>
    `
        )
        const el = page.locator('rux-checkbox').first()
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
    test('it sets attributes', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-checkbox error-text="Error" checked></rux-checkbox>
       `
        )
        const el = await page.locator('rux-checkbox').first()

        await expect(el).toBeVisible()
        await expect(el).toHaveAttribute('error-text', 'Error')

        await expect(el).toHaveAttribute('checked', '')
    })
})
test.describe('Checkbox in a form', () => {
    test.beforeEach(async ({ page }) => {
        await startTestInBefore(page)

        await setBodyContent(
            page,
            `
        <div style="padding: 10%; display: flex; justify-content: center">
        <div style="width: 60%">
            <form id="form" style="width: 100%">
                <rux-checkbox
                    id="ruxCheckbox"
                    name="ruxCheckbox"
                    value="foo"
                >
                    Checkbox
                </rux-checkbox>

                <rux-checkbox
                    id="ruxCheckboxDisabled"
                    name="ruxCheckboxDisabled"
                    disabled
                >
                    Disabled
                </rux-checkbox>

                <input
                    id="nativeCheckbox"
                    type="checkbox"
                    name="nativeCheckbox"
                    value="foo"
                />
                <button id="submit" type="submit">submit</button>
            </form>

            <form id="form-no-value" style="margin-top: 1rem; width: 100%">
                <rux-checkbox id="ruxCheckbox2" name="ruxCheckbox">
                    Checkbox
                </rux-checkbox>

                <input
                    id="nativeCheckbox2"
                    type="checkbox"
                    name="nativeCheckbox"
                />
                <button type="submit">submit</button>
            </form>
        </div>
        <div style="width: 30%">
            <ul id="log"></ul>
        </div>
    `
        )
        page.addScriptTag({
            path: './tests/utils/formScript.js',
        })
    })
    test('submits the correct value when using a form', async ({ page }) => {
        // Arrange
        const el = await page.locator('rux-checkbox').first()
        const submitBtnEl = await page.locator('button').first()

        const log = await page.locator('#log')

        // Act
        await el.click()
        await submitBtnEl.click()

        // Assert
        await expect(log).toContainText('ruxCheckbox:foo')
    })

    test('it defaults to unchecked', async ({ page }) => {
        // Arrange
        const el = await page.locator('rux-checkbox').first()
        const shadowInputEl = el.locator('input')

        // Assert
        await expect(shadowInputEl).not.toBeChecked()
    })

    test('does not submit any value if not checked', async ({ page }) => {
        // Arrange
        const submitButtonEl = await page.locator('button').first()
        const log = await page.locator('#log')

        // Act
        await submitButtonEl.click()

        // Assert
        await expect(log).not.toContainText('ruxCheckbox:foo')
    })

    test('submits a value of "on" if no value is provided', async ({
        page,
    }) => {
        // Arrange
        const el = page.locator('#ruxCheckbox2')
        const submitBtnEl = await page.locator('button').nth(1)
        const log = await page.locator('#log')

        // Act
        await el.click()
        await submitBtnEl.click()

        // Assert
        await expect(log).toContainText('ruxCheckbox:on')
    })

    test('it does not allow input if disabled', async ({ page }) => {
        // Arrange
        const el = await page.locator('#ruxCheckboxDisabled')
        const submitBtnEl = await page.locator('button').first()
        const log = await page.locator('#log')

        // Act
        await el.click()
        await submitBtnEl.click()

        // Assert
        await expect(page.locator('#ruxCheckboxDisabled input')).toBeDisabled()
        await expect(
            page.locator('#ruxCheckboxDisabled input')
        ).not.toBeChecked()
        await expect(log).not.toContainText('ruxCheckboxDisabled')
    })

    test('does not submit a value if checked and then unchecked', async ({
        page,
    }) => {
        // Arrange
        const el = await page.locator('rux-checkbox').first()
        const log = await page.locator('#log')

        // Act
        await el.click()
        await el.click()

        // Assert
        await expect(log).not.toContainText('ruxCheckbox')
    })

    test('does not submit any value if indeterminate', async ({ page }) => {
        // Arrange
        const el = await page.locator('#ruxCheckbox')
        const submitBtnEl = await page.locator('button').first()
        const log = await page.locator('#log')

        // Act
        await el.evaluate((e) => ((e as HTMLInputElement).checked = true))
        await el.evaluate((e) => ((e as HTMLInputElement).indeterminate = true))
        await submitBtnEl.click()

        // Assert
        const text = await log.evaluate((e) => e.textContent)
        await expect(text).not.toEqual('ruxCheckbox')
    })

    test('should be checked when clicking an unchecked indeterminate checkbox', async ({
        page,
    }) => {
        // Arrange
        const el = await page.locator('#ruxCheckbox')

        // Act
        await el.evaluate((e) => ((e as HTMLInputElement).indeterminate = true))
        await el.click()

        // Assert
        const checkedAttribute = await el.getAttribute('checked')
        await expect(checkedAttribute).not.toBeNull
        await expect(el).not.toHaveAttribute('indeterminate', 'true')
    })
})
