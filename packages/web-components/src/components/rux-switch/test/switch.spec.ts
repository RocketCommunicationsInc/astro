import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Switch', () => {
    test.beforeEach(async ({ page }) => {
        const template = `
        <div style="padding: 10%; display: flex; justify-content: center">
            <div>
                <form id="form" style="width: 100%">
                    <rux-switch id="ruxSwitch" name="ruxSwitch" value="foo" style="width: fit-content">
                        Checkbox
                    </rux-switch>

                    <rux-switch
                        id="ruxSwitchDisabled"
                        name="ruxSwitchDisabled"
                        disabled
                    >
                        Disabled
                    </rux-switch>

                    <input
                        id="nativeCheckbox"
                        type="checkbox"
                        name="nativeCheckbox"
                        value="foo"
                    />
                    <button id="submit" type="submit">submit</button>
                </form>

                <form id="form-no-value" style="margin-top: 1rem; width: 100%">
                    <rux-switch id="ruxSwitch2" name="ruxSwitch">
                        Checkbox
                    </rux-switch>

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
        </div>
        <div class="second-test">
            <rux-switch class="first" label="hello"></rux-switch>
            <rux-switch class="second"><div slot="label">hello</div></rux-switch>
        </div>
        `
        await page.setContent(template)

        page.addScriptTag({
            path: './tests/utils/formScript.js',
        })
    })
    test('it renders label prop', async ({ page }) => {
        const el = await page.locator('.second-test rux-switch').first()
        const label = el.locator('label')

        await expect(label).toHaveClass('rux-switch__button')
    })
    test('it renders label slot', async ({ page }) => {
        const el = await page.locator('.second-test rux-switch').nth(1)
        const label = el.locator('label')

        await expect(label).toHaveClass('rux-switch__button')
    })
    test('switches have unique ids', async ({ page }) => {
        const switch1 = await page
            .locator('.second-test rux-switch input')
            .first()
        const switch2 = await page
            .locator('.second-test rux-switch input')
            .nth(1)

        await switch1.evaluate((e) => {
            const switch1Id = e.id
            const idStorage = document.createElement('div')
            idStorage.classList.add(switch1Id)
            e.appendChild(idStorage)
        })

        await switch2.evaluate((e) => {
            const switch2Id = e.id
            const idStorage = document.createElement('div')
            idStorage.classList.add(switch2Id)
            e.appendChild(idStorage)
        })
        const switch1IdClass = switch1.locator('div')
        const switch2IdClass = switch2.locator('div')

        await expect(switch1IdClass).not.toBe(switch2IdClass)
    })
    test('submits the correct value when using a form', async ({ page }) => {
        //Arrange
        const ruxSwitch = await page.locator('#ruxSwitch').first()
        const nativeCheckbox = await page.locator('#nativeCheckbox').first()
        const submitButton = await page.locator('button[type="submit"]').first()
        const log = await page.locator('#log')

        //Act
        //Specific positioning is required for the switch click due to the nature of the element
        await ruxSwitch.click({ position: { x: 5, y: 5 } })
        await nativeCheckbox.check()
        await submitButton.click()

        // Assert
        await expect(log).toContainText('nativeCheckbox:foo')
        await expect(log).toContainText('ruxSwitch:foo')
    })
    test('defaults to unchecked', async ({ page }) => {
        //Arrange
        const ruxSwitch = await page.locator('#ruxSwitch').first()
        const ruxSwitchInput = ruxSwitch.locator('input')
        const nativeCheckbox = await page.locator('#nativeCheckbox').first()

        //Assert
        await expect(ruxSwitchInput).not.toHaveAttribute('checked', '')
        await expect(nativeCheckbox).not.toHaveAttribute('checked', '')
    })
    test('does not submit any value if not checked', async ({ page }) => {
        //Arrange
        const submitButton = await page.locator('button[type="submit"]').first()
        const log = await page.locator('#log')

        //Act
        await submitButton.click()

        //Assert
        await expect(log).not.toContainText('ruxSwitch')
        await expect(log).not.toContainText('nativeCheckbox')
    })
    test('submits a value of "on" if no value is provided', async ({
        page,
    }) => {
        //Arrange
        const ruxSwitch2 = await page.locator('#ruxSwitch2').first()
        const nativeCheckbox2 = await page.locator('#nativeCheckbox2').first()
        const submitButton2 = await page.locator('button[type="submit"]').nth(1)
        const log = await page.locator('#log')

        //Act
        //Specific positioning is required for the switch click due to the nature of the element
        await ruxSwitch2.click({ position: { x: 5, y: 5 } })
        await nativeCheckbox2.check()
        await submitButton2.click()

        //Assert
        await expect(log).toContainText('nativeCheckbox:on')
        await expect(log).toContainText('ruxSwitch:on')
    })
    test('does not allow input if disabled', async ({ page }) => {
        //Arrange
        const ruxSwitchDisabled = await page
            .locator('#ruxSwitchDisabled')
            .first()
        const ruxSwitchInputDisabled = ruxSwitchDisabled.locator('input')
        const nativeCheckbox2 = await page.locator('#nativeCheckbox2').first()
        const submitButton2 = await page.locator('button[type="submit"]').nth(1)
        const log = await page.locator('#log')

        //Assert
        await expect(ruxSwitchDisabled).toHaveAttribute('disabled', '')

        //Act
        //Specific positioning is required for the switch click due to the nature of the element
        await ruxSwitchDisabled.click({ position: { x: 5, y: 5 } })

        //Assert
        await expect(ruxSwitchInputDisabled).not.toHaveAttribute('checked', '')

        //Act
        await nativeCheckbox2.check()
        await submitButton2.click()

        //Assert
        await expect(log).not.toContainText('ruxSwitchDisabled')
    })
    test('does not submit a value if checked and then unchecked', async ({
        page,
    }) => {
        //Arrange
        const ruxSwitch = await page.locator('#ruxSwitch').first()
        const submitButton = await page.locator('button[type="submit"]').first()
        const log = await page.locator('#log')

        //Act
        //Specific positioning is required for the switch click due to the nature of the element
        await ruxSwitch.click({ position: { x: 5, y: 5 } })
        await ruxSwitch.click({ position: { x: 5, y: 5 } })
        await submitButton.click()

        //Assert
        await expect(log).not.toContainText('ruxSwitch')
    })
    test('it emits ruxinput event', async ({ page }) => {
        const ruxSwitch = await page.locator('#ruxSwitch').first()
        const inputEvent = await page.spyOnEvent('ruxinput')
        await ruxSwitch.click()
        expect(inputEvent).toHaveReceivedEventTimes(1)
    })
    test('it emits ruxchange event', async ({ page }) => {
        const ruxSwitch = await page.locator('#ruxSwitch').first()
        const changeEvent = await page.spyOnEvent('ruxchange')
        await ruxSwitch.click()
        expect(changeEvent).toHaveReceivedEventTimes(1)
    })
    test('it emits ruxblur event', async ({ page }) => {
        const ruxSwitch = await page.locator('#ruxSwitch').first()
        const secondSwitch = await page.locator('rux-switch').nth(1)
        const blurEvent = await page.spyOnEvent('ruxblur')
        await ruxSwitch.click()
        await secondSwitch.click()
        expect(blurEvent).toHaveReceivedEventTimes(1)
    })
})
