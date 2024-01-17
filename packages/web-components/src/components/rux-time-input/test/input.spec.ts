import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Input with form', () => {
    const testString = '18:30'
    const testString12 = '06:30PM'

    test.beforeEach(async ({ page }) => {
        const template = `
        <body class="dark-theme">
            <div style="padding: 10%; display: flex; justify-content: center">
                <form id="form">
                    <div>
                        <rux-time-input
                            label="Input Field"
                            id="ruxInput"
                            name="ruxInput"
                            timeformat="24h"
                        >
                        </rux-time-input>
                        <input type="time" id="nativeInput" name="nativeInput" />
                    </div>
                    <div>
                    <rux-time-input
                        label="Input Field"
                        id="ruxInput12"
                        name="ruxInput12"
                    >
                    </rux-time-input>
                    <input type="time" id="nativeInput12" name="nativeInput12" />
                </div>

                    <div>
                        <rux-time-input
                            label="Disabled with value"
                            id="ruxInput2"
                            name="ruxInput2"
                            value="18:30"
                            disabled
                        >
                        </rux-time-input>
                        <input
                            type="time"
                            id="nativeInput2"
                            name="nativeInput2"
                            value="18:30"
                            disabled
                        />
                    </div>

                    <div>
                        <rux-time-input
                            label="Required"
                            id="ruxInput3"
                            name="ruxInput3"
                            required
                            help-text="Test Help Text"
                        >
                        </rux-time-input>
                        <input type="time" id="nativeInput3" name="nativeInput3" />
                    </div>
                    <div>
                    <rux-time-input
                        readonly
                        label="Input Field"
                        id="readOnly"
                        name="ruxInput"
                        timeformat="24h"
                    >
                    </rux-time-input>
                    <input type="time" readonly id="nativeInput" name="nativeInput" />
                </div>
                <div>
                <rux-time-input
                    label="Input Field"
                    id="seconds"
                    name="ruxInputSeconds"
                    include-seconds
                >
                </rux-time-input>
                <input type="time" id="nativeInput" name="nativeInput" />
            </div>

                    <button id="formSubmitBtn" type="submit">submit</button>
                </form>
                <ul id="log"></ul>
            </div>
        </body>
        `

        await page.setContent(template)
        page.addScriptTag({
            path: './tests/utils/formScript.js',
        })
    })
    test('submits the correct value when using a form (24h)', async ({
        page,
    }) => {
        //Arrange
        const ruxInputComponent = page.locator('#ruxInput').first()
        const ruxInputChild = ruxInputComponent.locator('input').nth(1)
        const nativeInput = page.locator('#nativeInput').first()
        const formSubmitButton = page.locator('#formSubmitBtn')
        const log = page.locator('#log')

        //Act
        await ruxInputChild.type(testString)
        await nativeInput.type(testString)
        await formSubmitButton.click()

        //Assert
        await expect(log).toContainText(`ruxInput:${testString}`)
        await expect(log).toContainText(`nativeInput:${testString}`)
    })
    test('submits the correct value when using a form (12h)', async ({
        page,
    }) => {
        //Arrange
        const ruxInputComponent = page.locator('#ruxInput12').first()
        const ruxInputChild = ruxInputComponent.locator('input').nth(1)
        const nativeInput = page.locator('#nativeInput12').first()
        const formSubmitButton = page.locator('#formSubmitBtn')
        const log = page.locator('#log')

        //Act
        await ruxInputChild.type(testString12)
        await nativeInput.type(testString12)
        await formSubmitButton.click()

        //Assert - should convert to military time
        await expect(log).toContainText(`ruxInput12:${testString}`)
        await expect(log).toContainText(`nativeInput12:${testString}`)
    })
    test('does not submit disabled even with value', async ({ page }) => {
        //Arrange
        const ruxInputComponent = page.locator('#ruxInput2').first()
        const ruxInputChild = ruxInputComponent.locator('input').nth(1)
        const nativeInput = page.locator('#nativeInput2').first()
        const formSubmitButton = page.locator('#formSubmitBtn')
        const log = page.locator('#log')

        //Assert
        await expect(ruxInputChild).toHaveValue('06:30 PM')
        await expect(nativeInput).toHaveValue(testString)
        await expect(ruxInputComponent).toHaveAttribute('disabled', '')
        await expect(ruxInputChild).toBeDisabled()
        await expect(nativeInput).toBeDisabled()

        //Act
        await formSubmitButton.click()

        //Assert
        await expect(log).not.toContainText(`ruxInput2:${testString}`)
        await expect(log).not.toContainText(`nativeInput2:${testString}`)
    })
    test('does not submit a value if input is cleared', async ({ page }) => {
        //Arrange
        const ruxInputComponent = page.locator('#ruxInput').first()
        const ruxInputChild = ruxInputComponent.locator('input').nth(1)
        const nativeInput = page.locator('#nativeInput').first()
        const formSubmitButton = page.locator('#formSubmitBtn')
        const log = page.locator('#log')

        //Act
        await ruxInputChild.type(testString)
        await nativeInput.type(testString)

        //Assert
        await expect(ruxInputChild).toHaveValue(testString)
        await expect(nativeInput).toHaveValue(testString)

        //Act
        await ruxInputChild.fill('')
        await nativeInput.fill('')
        await formSubmitButton.click()

        //Assert
        await expect(log).not.toContainText(`ruxInput:${testString}`)
        await expect(log).not.toContainText(`nativeInput:${testString}`)
    })
    test('passes correct label', async ({ page }) => {
        //Arrange
        const ruxInputComponent = page.locator('#ruxInput').first()
        const ruxInputLabel = ruxInputComponent.locator('.rux-input-label')

        //Assert
        await expect(ruxInputLabel).toContainText('Input Field')
    })
    test('prepends aesthetics to label if required', async ({ page }) => {
        //Arrange
        const ruxInputComponent = page.locator('#ruxInput3').first()
        const ruxInputAesthetics = ruxInputComponent.locator(
            '.rux-input-label .rux-input-label__asterisk'
        )

        //Assert
        await expect(ruxInputAesthetics).toContainText('*')
    })
    test('prepends help text if attribute set', async ({ page }) => {
        //Arrange
        const ruxInputComponent = page.locator('#ruxInput3').first()
        const ruxInputHelpText = ruxInputComponent.locator('.rux-help-text')

        //Assert
        await expect(ruxInputHelpText).toContainText('Test Help Text')
    })
    test('cannot have its value changed if readonly is true', async ({
        page,
    }) => {
        //Arrange
        const readOnly = page.locator('#readOnly')
        const readOnlyInput = readOnly.locator('input').nth(1)

        //Assert
        await expect(readOnlyInput).toHaveAttribute('readonly', '')
    })
    test('sumbits the correct value when seconds are entered', async ({
        page,
    }) => {
        //Arrange
        const time = page.locator('#seconds')
        const timeInput = time.locator('input').nth(1)
        const formSubmitButton = page.locator('#formSubmitBtn')
        const log = page.locator('#log')

        //Act
        await timeInput.type('01:25:30PM')
        await formSubmitButton.click()

        //Assert
        await expect(log).toContainText('ruxInputSeconds:13:25:30')
    })
})
test.describe('Input emits correct events', () => {
    test.beforeEach(async ({ page }) => {
        const template = `
            <rux-time-input></rux-time-input>
            <div id="blur-me" style="width: 100px; height: 100px; margin-top: 5rem;">Click to blur</div>
        `
        await page.setContent(template)
    })
    test('it emits ruxfocus event', async ({ page }) => {
        const focusEvent = await page.spyOnEvent('ruxfocus')
        await page.locator('rux-time-input').click()
        expect(focusEvent).toHaveReceivedEventTimes(1)
    })
    test('it emits ruxblur event', async ({ page }) => {
        const blurEvent = await page.spyOnEvent('ruxblur')
        await page.locator('rux-time-input').click()
        await page.locator('#blur-me').click()
        expect(blurEvent).toHaveReceivedEventTimes(1)
    })
    test('it emits ruxinput event on each key press', async ({ page }) => {
        const inputEvent = await page.spyOnEvent('ruxinput')
        //delay types it slower, like a user. This should fire the input event 5 times.
        await page
            .locator('rux-time-input')
            .locator('input')
            .nth(1)
            .type('Hello', { delay: 100 })
        expect(inputEvent).toHaveReceivedEventTimes(5)
    })
    test('it emits ruxchange event when input is committed', async ({
        page,
    }) => {
        const changeEvent = await page.spyOnEvent('ruxchange')
        await page.locator('rux-time-input').locator('input').nth(1).type('12')
        await page.locator('#blur-me').click()
        expect(changeEvent).toHaveReceivedEventTimes(1)
    })
})
test('getInput method returns the internal input', async ({ page }) => {
    const template = `<rux-time-input></rux-time-input>`
    await page.setContent(template)
    const ruxInput = page.locator('rux-time-input')
    let test = await ruxInput.evaluate(
        async (el: HTMLRuxInputElement) => (await el.getInput()).classList
    )
    expect(test).toHaveProperty('0', 'native-input')
})
test.describe('Input', () => {
    test('it can be focused programatically', async ({ page }) => {
        const template = `<rux-time-input></rux-time-input>`
        await page.setContent(template)

        const el = page.locator('rux-time-input')

        let isFocused = await el.evaluate((el) => el === document.activeElement)
        expect(isFocused).toBeFalsy()

        await el.evaluate(async (e) => {
            await (e as HTMLRuxInputElement).setFocus()
        })

        isFocused = await el.evaluate((el) => el === document.activeElement)
        expect(isFocused).toBeTruthy()
    })
})
