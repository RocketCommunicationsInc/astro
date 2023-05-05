import { test, expect } from '../../../../tests/utils/_astro-fixtures'
test.describe('Checkbox in a form', () => {
    test.beforeEach(async ({ page }) => {
        const template = `
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
        await page.setContent(template)
        await page.addScriptTag({ path: './tests/utils/formScript.js' })
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
        const el = await page.locator('#ruxCheckbox2')
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
test.describe('Checkbox events', () => {
    test.beforeEach(async ({ page }) => {
        const template = `
            <rux-checkbox id="checkbox"></rux-checkbox>
            <div id="blur-trigger" style="width: 100px; height: 100px;">Something else to click!</div>
        `
        await page.setContent(template)
    })
    test('Should emit ruxchange event once when clicked', async ({ page }) => {
        const changeEvent = await page.spyOnEvent('ruxchange')

        await page.click('#checkbox')

        expect(changeEvent).toHaveReceivedEventTimes(1)
    })
    test('Should emit ruxinput event once when clicked', async ({ page }) => {
        const inputEvent = await page.spyOnEvent('ruxinput')

        await page.click('#checkbox')

        expect(inputEvent).toHaveReceivedEventTimes(1)
    })
    test('Should emit ruxblur event once when un-focused', async ({ page }) => {
        const blurEvent = await page.spyOnEvent('ruxblur')

        await page.click('#checkbox')
        await page.click('#blur-trigger')

        expect(blurEvent).toHaveReceivedEventTimes(1)
    })
    test('Should emit ruxfocus event once when focused', async ({ page }) => {
        const focusEvent = await page.spyOnEvent('ruxfocus')

        await page.click('#blur-trigger')
        await page.click('#checkbox')

        expect(focusEvent).toHaveReceivedEventTimes(1)
    })
})
