import { test, expect } from '@playwright/test'
import { startTestInBefore, setBodyContent } from './utils/_startTestEnv'

test.describe('Radio-group-with-form', () => {
    test.beforeEach(async ({ page }) => {
        await startTestInBefore(page)

        await setBodyContent(
            page,
            `
            <div style="padding: 10%; display: flex; justify-content: center">
                <div style="width: 60%">
                    <form id="form-default">
                        <rux-radio-group name="ruxColor">
                            <rux-radio
                                id="ruxRadioDefaultOne"
                                name="ruxColorDefault"
                                value="green"
                            ></rux-radio>
                            <rux-radio
                                id="ruxRadioDefaultTwo"
                                name="ruxColorDefault"
                                value="purple"
                            ></rux-radio>
                        </rux-radio-group>
                        <button type="submit">submit</button>
                    </form>
                    <form id="form">
                        <rux-radio-group name="ruxColor">
                            <rux-radio
                                id="ruxRadioGreen"
                                name="ruxColor"
                                value="green"
                            ></rux-radio>
                            <rux-radio
                                disabled
                                id="ruxRadioPurpleDisabled"
                                name="ruxColor"
                                checked
                                value="purple"
                            ></rux-radio>
                            <rux-radio
                                id="ruxRadioBlue"
                                name="ruxColor"
                                value="blue"
                            ></rux-radio>
                            <rux-radio
                                id="ruxRadioRed"
                                name="ruxColor"
                                value="red"
                            ></rux-radio>
                        </rux-radio-group>
                        <input
                            id="nativeRadioGreen"
                            type="radio"
                            name="nativeColor"
                            value="green"
                        />

                        <input
                            id="nativeRadioBlue"
                            type="radio"
                            name="nativeColor"
                            value="blue"
                        />
                        <input
                            id="nativeRadioRed"
                            type="radio"
                            name="nativeColor"
                            value="red"
                        />

                        <button type="submit">submit</button>
                    </form>

                    <form id="form-checked-disabled">
                        <rux-radio-group value="red" name="ruxColor">
                            <rux-radio
                                id="ruxRadioGreen2"
                                name="ruxColor2"
                                value="green"
                            ></rux-radio>
                            <rux-radio
                                id="ruxRadioBlue2"
                                name="ruxColor2"
                                value="blue"
                            ></rux-radio>
                            <rux-radio
                                id="ruxRadioRed2"
                                name="ruxColor2"
                                disabled
                                value="red"
                            ></rux-radio>
                        </rux-radio-group>
                        <input
                            id="nativeRadioGreen2"
                            type="radio"
                            name="nativeColor"
                            value="green"
                        />
                        <input
                            id="nativeRadioBlue2"
                            type="radio"
                            name="nativeColor"
                            value="blue"
                        />
                        <input
                            id="nativeRadioRed2"
                            type="radio"
                            name="nativeColor"
                            checked
                            disabled
                            value="red"
                        />

                        <button type="submit">submit</button>
                    </form>
                </div>
                <div style="width: 30%">
                    <ul id="log"></ul>
                </div>
            </div>
        `
        )
        page.addScriptTag({
            path: './tests/utils/formScript.js',
        })
    })

    test('it renders', async ({ page }) => {
        const el = page.locator('rux-radio-group').first()
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
    test('first radio is slected by default', async ({ page }) => {
        //Arrange
        const ruxRadio = page.locator('#ruxRadioDefaultOne').first()
        const ruxRadioInput = ruxRadio.locator('input')

        //Assert
        await expect(ruxRadioInput).toBeChecked()
    })
    test('submits the correct value when using a form', async ({ page }) => {
        //Arrange
        const ruxRadio = page.locator('#ruxRadioBlue').first()
        const ruxRadioInput = ruxRadio.locator('input')
        const nativeRadio = page.locator('#nativeRadioBlue')
        const form = page.locator('#form')
        const formButton = form.locator('button[type="submit"]')
        const log = page.locator('#log')

        //Act
        await ruxRadio.click({
            position: { x: 5, y: 5 },
        })
        await nativeRadio.click()
        await formButton.click()

        //Arrange
        //const logChildren = log.locator

        //Assert
        //await expect(log).toBeLessThanOrEqual(2)
        await expect(log).toContainText('ruxColor:blue')
        await expect(log).toContainText('nativeColor:blue')
    })
    test('does not allow input if disabled', async ({ page }) => {
        //Arrange
        const ruxRadio = page.locator('#ruxRadioPurpleDisabled').first()
        const ruxRadioInput = ruxRadio.locator('input')
        const form = page.locator('#form')
        const formButton = form.locator('button[type="submit"]')
        const log = page.locator('#log')

        //Assert
        await expect(ruxRadioInput).toBeDisabled()

        //Act
        await ruxRadio.click({
            position: { x: 5, y: 5 },
        })

        //Assert
        await expect(ruxRadioInput).not.toBeChecked()

        //Act
        await ruxRadioInput.setChecked(false)
        await formButton.click()

        //Assert
        await expect(log).not.toContainText('ruxColor:purple')
    })
    test('does not submit value if disabled', async ({ page }) => {
        //Arrange
        const ruxRadio = page.locator('#ruxRadioRed2').first()
        const ruxRadioInput = ruxRadio.locator('input')
        const form = page.locator('#form-checked-disabled')
        const formButton = form.locator('button[type="submit"]')
        const log = page.locator('#log')

        //Assert
        await expect(ruxRadioInput).toBeDisabled()
        await expect(ruxRadioInput).toBeChecked()

        //Act
        await formButton.click()

        //Assert
        await expect(log).not.toContainText('ruxColor:red')
    })
})
/*
    Need to test: 
    
*/
