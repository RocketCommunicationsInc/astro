import { expect, test } from '../../../../tests/utils/_astro-fixtures'

test.describe('Input with form', () => {
    const testString = 'Hello World'

    test.beforeEach(async ({ page }) => {
        const template = `
        <body class="dark-theme">
            <div style="padding: 10%; display: flex; justify-content: center">
                <form id="form">
                    <div>
                        <rux-input
                            label="Input Field"
                            id="ruxInput"
                            name="ruxInput"
                        >
                        </rux-input>
                        <input type="text" id="nativeInput" name="nativeInput" />
                    </div>

                    <div>
                        <rux-input
                            label="Disabled with value"
                            id="ruxInput2"
                            name="ruxInput2"
                            value="Hello World"
                            disabled
                        >
                        </rux-input>
                        <input
                            type="text"
                            id="nativeInput2"
                            name="nativeInput2"
                            value="Hello World"
                            disabled
                        />
                    </div>

                    <div>
                        <rux-input
                            label="Required"
                            id="ruxInput3"
                            name="ruxInput3"
                            required
                            help-text="Test Help Text"
                        >
                        </rux-input>
                        <input type="text" id="nativeInput3" name="nativeInput3" />
                    </div>

                    <div>
                        <rux-input
                            label="Password"
                            id="ruxInput4"
                            name="ruxInput4"
                            type="password"
                        >
                        </rux-input>
                    </div>
                    <div>
                        <rux-input
                            label="Read Only"
                            id="readonly"
                            name="readonly"
                            value="Should remain the same"
                            readonly
                        >
                        </rux-input>
                    </div>
                    <div>
                        <rux-input
                            label="Spellcheck"
                            id="spellcheck"
                            name="spellcheck"
                            spellcheck
                        >
                        </rux-input>
                    </div>
                    <div>
                        <rux-input
                            label="Autocomplete"
                            id="autocomplete"
                            name="autocomplete"
                            autocomplete="on"
                        >
                        </rux-input>
                    </div>
                    <div>
                        <rux-input
                            label="Autocomplete to off"
                            id="autocomplete-to-off"
                            name="autocomplete-to-off"
                            autocomplete="on"
                            type="password"
                        >
                        </rux-input>
                    </div>
                    <div>
                        <rux-input
                            label="Date type"
                            id="date-type"
                            name="date-type"
                            type="date"
                        >
                        </rux-input>
                        <input
                            type="date"
                            id="native-date"
                            value="2022-10-05"
                            name="native-date"
                        />
                    </div>
                    <div>
                        <rux-input
                            label="Datetime-local type"
                            id="datetime-local"
                            name="datetime-local"
                            type="datetime-local"
                        >
                        </rux-input>
                        <input
                            type="datetime-local"
                            id="native-datetime-local"
                            value="2022-10-05T13:25"
                            name="native-datetime-local"
                        />
                    </div>
                    <div>
                        <rux-input
                            label="Time type"
                            id="time"
                            name="time"
                            type="time"
                        >
                        </rux-input>
                        <input
                            type="time"
                            id="native-time"
                            value="01:25:00"
                            name="native-time"
                        />
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
    test('submits the correct value when using a form', async ({ page }) => {
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
    test('does not submit disabled even with value', async ({ page }) => {
        //Arrange
        const ruxInputComponent = page.locator('#ruxInput2').first()
        const ruxInputChild = ruxInputComponent.locator('input').nth(1)
        const nativeInput = page.locator('#nativeInput2').first()
        const formSubmitButton = page.locator('#formSubmitBtn')
        const log = page.locator('#log')

        //Assert
        await expect(ruxInputChild).toHaveValue(testString)
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
    test('adds rux-icon if type is password', async ({ page }) => {
        //Arrange
        const ruxInputComponent = page.locator('#ruxInput4').first()
        const ruxInputIcon = ruxInputComponent.locator('rux-icon')

        //Assert
        await expect(ruxInputIcon).toBeVisible()
    })
    test('removes rux-icon if type is no longer password', async ({ page }) => {
        //Arrange
        const ruxInputComponent = page.locator('#ruxInput4').first()
        const ruxInputIcon = ruxInputComponent.locator('rux-icon')

        //Assert
        await expect(ruxInputIcon).toBeVisible()

        await ruxInputComponent.evaluate(
            (e) => ((e as HTMLRuxInputElement).type = 'text')
        )
        await expect(ruxInputIcon).not.toBeVisible()
    })
    test('changes icon when icon is clicked', async ({ page }) => {
        //Arrange
        const ruxInputComponent = page.locator('#ruxInput4').first()
        const ruxInputIcon = ruxInputComponent.locator('rux-icon')

        //Act
        await ruxInputIcon.click()

        //Arrange
        const ruxInputIconVisibilityOff = ruxInputIcon.locator(
            'rux-icon-visibility-off'
        )

        //Assert
        await expect(ruxInputIconVisibilityOff).toBeVisible()
    })
    test('cannot have its value changed if readonly is true', async ({
        page,
    }) => {
        //Arrange
        const readOnly = page.locator('#readonly')
        const readOnlyInput = readOnly.locator('input').nth(1)

        //Assert
        await expect(readOnlyInput).toHaveAttribute('readonly', '')
    })
    test('applies spellcheck prop to shadow input', async ({ page }) => {
        //Arrange
        const spellCheck = page.locator('#spellcheck')
        const spellCheckInput = spellCheck.locator('input').nth(1)

        //Assert
        await expect(spellCheckInput).toHaveAttribute('spellcheck', 'true')
    })
    //! Uncomment autocomplete tests when the attribute is added back in and working.
    test('applies autocomplete prop to shadow input', async ({ page }) => {
        //Arrange
        const autocomplete = page.locator('#autocomplete')
        const autocompleteInput = autocomplete.locator('input').nth(1)

        //Assert
        await expect(autocompleteInput).toHaveAttribute('autocomplete', 'on')
    })
    test('changes autocomplete to off if type is password', async ({
        page,
    }) => {
        //Arrange
        const autocomplete = page.locator('#autocomplete-to-off')
        const autocompleteInput = autocomplete.locator('input').nth(1)

        //Assert
        await expect(autocompleteInput).toHaveAttribute('autocomplete', 'off')
    })
    test('submits the correct value in type date', async ({ page }) => {
        //Arrange
        const dateType = page.locator('#date-type')
        const dateTypeInput = dateType.locator('input').nth(1)
        const formSubmitButton = page.locator('#formSubmitBtn')
        const log = page.locator('#log')

        //Act
        await dateTypeInput.fill('2022-10-05')
        await formSubmitButton.click()

        //Assert
        await expect(log).toContainText('date-type:2022-10-05')
    })
    test('submits the correct value in type datetime-local', async ({
        page,
    }) => {
        //Arrange
        const dateType = page.locator('#datetime-local')
        const dateTypeInput = dateType.locator('input').nth(1)
        const formSubmitButton = page.locator('#formSubmitBtn')
        const log = page.locator('#log')

        //Act
        await dateTypeInput.fill('2022-10-05T13:25')
        await formSubmitButton.click()

        //Assert
        await expect(log).toContainText('datetime-local:2022-10-05T13:25')
    })
    test('sumbits the correct value in type time', async ({ page }) => {
        //Arrange
        const time = page.locator('#time')
        const timeInput = time.locator('input').nth(1)
        const formSubmitButton = page.locator('#formSubmitBtn')
        const log = page.locator('#log')

        //Act
        await timeInput.fill('01:25:00')
        await formSubmitButton.click()

        //Assert
        await expect(log).toContainText('time:01:25:00')
    })
})
test.describe('Input emits correct events', () => {
    test.beforeEach(async ({ page }) => {
        const template = `
            <rux-input type="text"></rux-input>
            <div id="blur-me" style="width: 100px; height: 100px; margin-top: 5rem;">Click to blur</div>
        `
        await page.setContent(template)
    })
    test('it emits ruxfocus event', async ({ page }) => {
        const focusEvent = await page.spyOnEvent('ruxfocus')
        await page.locator('rux-input').click()
        expect(focusEvent).toHaveReceivedEventTimes(1)
    })
    test('it emits ruxblur event', async ({ page }) => {
        const blurEvent = await page.spyOnEvent('ruxblur')
        await page.locator('rux-input').click()
        await page.locator('#blur-me').click()
        expect(blurEvent).toHaveReceivedEventTimes(1)
    })
    test('it emits ruxinput event on each key press', async ({ page }) => {
        const inputEvent = await page.spyOnEvent('ruxinput')
        //delay types it slower, like a user. This should fire the input event 5 times.
        await page
            .locator('rux-input')
            .locator('input')
            .nth(1)
            .type('Hello', { delay: 100 })
        expect(inputEvent).toHaveReceivedEventTimes(5)
    })
    test('it emits ruxchange event when input is committed', async ({
        page,
    }) => {
        const changeEvent = await page.spyOnEvent('ruxchange')
        await page.locator('rux-input').locator('input').nth(1).type('Tonjiro')
        await page.locator('#blur-me').click()
        expect(changeEvent).toHaveReceivedEventTimes(1)
    })
})
test('getInput method returns the internal input', async ({ page }) => {
    const template = `<rux-input></rux-input>`
    await page.setContent(template)
    const ruxInput = page.locator('rux-input')
    let test = await ruxInput.evaluate(
        async (el: HTMLRuxInputElement) => (await el.getInput()).classList
    )
    expect(test).toHaveProperty('0', 'native-input')
})
test.describe('Input', () => {
    test('it can be focused programatically', async ({ page }) => {
        const template = `<rux-input type="text"></rux-input>`
        await page.setContent(template)

        const el = page.locator('rux-input')

        let isFocused = await el.evaluate((el) => el === document.activeElement)
        expect(isFocused).toBeFalsy()

        await el.evaluate(async (e) => {
            await (e as HTMLRuxInputElement).setFocus()
        })

        isFocused = await el.evaluate((el) => el === document.activeElement)
        expect(isFocused).toBeTruthy()
    })
})

test.describe('Min and max length', () => {
    test('minlength works', async ({ page }) => {
        const template = `
          <div style="margin: auto; width: 300px;">
            <rux-input id="minmaxlength" minlength="1" maxlength="3"></rux-input>
          </div>`
        await page.setContent(template)

        // Access the shadow DOM input inside the <rux-input> component
        const input = page.locator('#minmaxlength').locator('#rux-input-1')

        // Type into the input
        await input.type('12')

        // Check validity
        await input.evaluate((el: HTMLInputElement) => el.reportValidity())
        const validityState = await input.evaluate(
            (el: HTMLInputElement) => el.validity.tooShort
        )

        // Assert the validity
        expect(validityState).toBe(false)
    })
    test('maxlength works', async ({ page }) => {
        const template = `
        <div style="margin: auto; width: 300px;">
          <rux-input id="minmaxlength" minlength="1" maxlength="3"></rux-input>
        </div>`
        await page.setContent(template)

        // Access the shadow DOM input inside the <rux-input> component
        const input = page.locator('#minmaxlength').locator('#rux-input-1')

        // Type into the input
        await input.type('1234')

        //test that only 123 were typed, since the maxlength is 3
        const inputValue = await input.evaluate(
            (el: HTMLInputElement) => el.value
        )
        expect(inputValue.length).toBe(3) // Input should only contain '123'
    })
})

test.describe('Browser added input types', () => {
    test('changes icon styles when light theme is applied', async ({
        page,
    }) => {
        const template = `
        <div class="light-theme">
            <rux-input type="date" id="date-input"></rux-input>
            <rux-input type="time" id="time-input"></rux-input>
            <rux-input type="search" id="search-input"></rux-input>
        </div>
    `
        await page.setContent(template)

        // Wait for styles to be applied
        await page.waitForTimeout(100)

        // Verify the components have the light theme class applied
        const dateIconStyle = await page.evaluate(() => {
            // Check the CSS variable values
            const style = getComputedStyle(
                document.querySelector('#date-input') as HTMLElement
            )
            const calendarIcon = style
                .getPropertyValue('--calendar-icon')
                .trim()
            return calendarIcon
        })

        console.log('Date input --calendar-icon value:', dateIconStyle)

        expect(dateIconStyle).toContain("fill='%23005a8f")
    })
})
