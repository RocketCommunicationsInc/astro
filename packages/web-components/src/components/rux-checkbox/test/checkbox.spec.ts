import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Checkbox', () => {
    test('it renders', async ({ astroPage }) => {
        const template = `
            <rux-checkbox></rux-checkbox>
        `
        const el = await astroPage.load(template)
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })

    test('it displays label', async ({ astroPage }) => {
        const template = `
            <rux-checkbox label="label"></rux-checkbox>
        `
        const el = await astroPage.load(template)
        await expect(el).toHaveText('label')
    })
})
test.describe('Checkbox in a form', () => {
    test.beforeEach(async ({ astroPage }) => {
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
        await astroPage.load(template, './tests/utils/formScript.js')
    })
    test('submits the correct value when using a form', async ({
        astroPage,
    }) => {
        // Arrange
        const el = await astroPage.firstChild.locator('rux-checkbox').first()
        const submitBtnEl = await astroPage.firstChild.locator('button').first()

        const log = await astroPage.firstChild.locator('#log')

        // Act
        await el.click()
        await submitBtnEl.click()

        // Assert
        await expect(log).toContainText('ruxCheckbox:foo')
    })

    test('it defaults to unchecked', async ({ astroPage }) => {
        // Arrange
        const el = await astroPage.firstChild.locator('rux-checkbox').first()
        const shadowInputEl = el.locator('input')

        // Assert
        await expect(shadowInputEl).not.toBeChecked()
    })

    test('does not submit any value if not checked', async ({ astroPage }) => {
        // Arrange
        const submitButtonEl = await astroPage.firstChild
            .locator('button')
            .first()
        const log = await astroPage.firstChild.locator('#log')

        // Act
        await submitButtonEl.click()

        // Assert
        await expect(log).not.toContainText('ruxCheckbox:foo')
    })

    test('submits a value of "on" if no value is provided', async ({
        astroPage,
    }) => {
        // Arrange
        const el = astroPage.firstChild.locator('#ruxCheckbox2')
        const submitBtnEl = await astroPage.firstChild.locator('button').nth(1)
        const log = await astroPage.firstChild.locator('#log')

        // Act
        await el.click()
        await submitBtnEl.click()

        // Assert
        await expect(log).toContainText('ruxCheckbox:on')
    })

    test('it does not allow input if disabled', async ({ astroPage }) => {
        // Arrange
        const el = await astroPage.firstChild.locator('#ruxCheckboxDisabled')
        const submitBtnEl = await astroPage.firstChild.locator('button').first()
        const log = await astroPage.firstChild.locator('#log')

        // Act
        await el.click()
        await submitBtnEl.click()

        // Assert
        await expect(
            astroPage.firstChild.locator('#ruxCheckboxDisabled input')
        ).toBeDisabled()
        await expect(
            astroPage.firstChild.locator('#ruxCheckboxDisabled input')
        ).not.toBeChecked()
        await expect(log).not.toContainText('ruxCheckboxDisabled')
    })

    test('does not submit a value if checked and then unchecked', async ({
        astroPage,
    }) => {
        // Arrange
        const el = await astroPage.firstChild.locator('rux-checkbox').first()
        const log = await astroPage.firstChild.locator('#log')

        // Act
        await el.click()
        await el.click()

        // Assert
        await expect(log).not.toContainText('ruxCheckbox')
    })

    test('does not submit any value if indeterminate', async ({
        astroPage,
    }) => {
        // Arrange
        const el = await astroPage.firstChild.locator('#ruxCheckbox')
        const submitBtnEl = await astroPage.firstChild.locator('button').first()
        const log = await astroPage.firstChild.locator('#log')

        // Act
        await el.evaluate((e) => ((e as HTMLInputElement).checked = true))
        await el.evaluate((e) => ((e as HTMLInputElement).indeterminate = true))
        await submitBtnEl.click()

        // Assert
        const text = await log.evaluate((e) => e.textContent)
        await expect(text).not.toEqual('ruxCheckbox')
    })

    test('should be checked when clicking an unchecked indeterminate checkbox', async ({
        astroPage,
    }) => {
        // Arrange
        const el = await astroPage.firstChild.locator('#ruxCheckbox')

        // Act
        await el.evaluate((e) => ((e as HTMLInputElement).indeterminate = true))
        await el.click()

        // Assert
        const checkedAttribute = await el.getAttribute('checked')
        await expect(checkedAttribute).not.toBeNull
        await expect(el).not.toHaveAttribute('indeterminate', 'true')
    })
})
