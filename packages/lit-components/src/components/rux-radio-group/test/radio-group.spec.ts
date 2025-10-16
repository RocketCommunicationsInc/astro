import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Radio-group-with-form', () => {
    test.beforeEach(async ({ page }) => {
        const template = `
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
        await page.setContent(template)
        await page.addScriptTag({
            path: './tests/utils/formScript.js',
        })
    })
    test('first radio is selected by default', async ({ page }) => {
        //Arrange
        const ruxRadio = await page.locator('#ruxRadioDefaultOne').first()
        const ruxRadioInput = ruxRadio.locator('input')

        //Assert
        await expect(ruxRadioInput).toBeChecked()
    })
    test('submits the correct value when using a form', async ({ page }) => {
        //Arrange
        const ruxRadio = await page.locator('#ruxRadioBlue').first()
        const nativeRadio = await page.locator('#nativeRadioBlue')
        const form = await page.locator('#form')
        const formButton = form.locator('button[type="submit"]')
        const log = await page.locator('#log')

        await ruxRadio.click({
            position: { x: 5, y: 5 },
        })
        await nativeRadio.click()
        await formButton.click()
        await expect(log).toContainText('ruxColor:blue')
        await expect(log).toContainText('nativeColor:blue')
    })
    test('does not allow input if disabled', async ({ page }) => {
        //Arrange
        const ruxRadio = await page.locator('#ruxRadioPurpleDisabled').first()
        const ruxRadioInput = ruxRadio.locator('input')
        const form = await page.locator('#form')
        const formButton = form.locator('button[type="submit"]')
        const log = await page.locator('#log')

        //Assert
        await expect(ruxRadioInput).toBeDisabled()

        //Act
        await ruxRadio.click()

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
        const ruxRadio = await page.locator('#ruxRadioRed2').first()
        const ruxRadioInput = ruxRadio.locator('input')
        const form = await page.locator('#form-checked-disabled')
        const formButton = form.locator('button[type="submit"]')
        const log = await page.locator('#log')

        //Assert
        await expect(ruxRadioInput).toBeDisabled()
        await expect(ruxRadioInput).toBeChecked()

        //Act
        await formButton.click()

        //Assert
        await expect(log).not.toContainText('ruxColor:red')
    })
})
test.describe('Radio-group', () => {
    test('renders label prop and slot', async ({ page }) => {
        const template = `
            <rux-radio-group name="radios" label="Prop Label">
              <rux-radio>One</rux-radio>
              <rux-radio>Two</rux-radio>
              <rux-radio>Three</rux-radio>
            </rux-radio-group>

            <rux-radio-group name="radios">
              <div slot="label">Label Slot</div>
              <rux-radio>One</rux-radio>
              <rux-radio>Two</rux-radio>
              <rux-radio>Three</rux-radio>
            </rux-radio-group>
        `
        await page.setContent(template)

        //Arrange
        const ruxRadioProp = page.locator('rux-radio-group').first()
        const labelProp = ruxRadioProp.locator('.rux-label')
        const ruxRadioSlot = page.locator('rux-radio-group').nth(1)
        const labelSlot = ruxRadioSlot.locator('.rux-label')

        //Assert
        await expect(labelSlot).toHaveClass('rux-label')
        await expect(labelProp).toHaveClass('rux-label')
    })
    test('sets own value if none given', async ({ page }) => {
        const template = `
            <rux-radio-group name="radios" id="no-value">
              <rux-radio>One</rux-radio>
              <rux-radio>Two</rux-radio>
              <rux-radio>Three</rux-radio>
            </rux-radio-group>
            <rux-radio-group name="radios-check-one">
              <rux-radio value="one">One</rux-radio>
              <rux-radio value="two">Two</rux-radio>
              <rux-radio value="three" disabled id="disabled-radio">Three</rux-radio>
            </rux-radio-group>
            <rux-radio-group name="radios-check-two">
              <rux-radio value="one" id="group2-radio1">One</rux-radio>
              <rux-radio value="two">Two</rux-radio>
              <rux-radio value="three">Three</rux-radio>
            </rux-radio-group>
        `
        await page.setContent(template)
        //Arrange
        const ruxRadioGroup = page.locator('#no-value').first()
        const radio1 = ruxRadioGroup.locator('rux-radio').first()
        const radio1Input = radio1.locator('input').first()
        const radio2 = ruxRadioGroup.locator('rux-radio').nth(1)
        const radio2Input = radio2.locator('input').first()
        const radio3 = ruxRadioGroup.locator('rux-radio').nth(2)
        const radio3Input = radio3.locator('input').first()

        //Assert
        await expect(radio1Input).toHaveAttribute('value', '1')
        await expect(radio2Input).toHaveAttribute('value', '2')
        await expect(radio3Input).toHaveAttribute('value', '3')
    })
    test('Tab swaps focus between radio groups (not radios)', async ({
        page,
    }) => {
        const template = `
            <h2 id="focus-title">Focus Testing</h2>
            <rux-radio-group name="radios-check-one" id="focus-check-one">
              <rux-radio value="one">One</rux-radio>
              <rux-radio value="two">Two</rux-radio>
              <rux-radio value="three" disabled id="disabled-radio">Three</rux-radio>
            </rux-radio-group>
            <rux-radio-group name="radios-check-two" id="focus-check-two">
              <rux-radio value="one" id="group2-radio1">One</rux-radio>
              <rux-radio value="two">Two</rux-radio>
              <rux-radio value="three">Three</rux-radio>
            </rux-radio-group>
        `
        await page.setContent(template)

        //Arrange
        const title = page.locator('#focus-title')
        const ruxRadioGroupOne = page.locator('#focus-check-one').first()
        const firstRadio = ruxRadioGroupOne.locator('rux-radio').first()
        const secondRadio = page.locator('#group2-radio1')

        //Act
        await title.click({ force: true })
        await page.keyboard.press('Tab')

        //Assert
        await expect(firstRadio).toBeFocused()

        //Act
        await page.keyboard.press('Tab')

        //Assert

        await expect(secondRadio).toBeFocused()
    })
    test('Arrow keys change focus and checked state', async ({ page }) => {
        const template = `
            <rux-radio-group name="radios" id="no-value">
              <rux-radio>One</rux-radio>
              <rux-radio>Two</rux-radio>
              <rux-radio>Three</rux-radio>
            </rux-radio-group>

            <h2 id="focus-title">Focus Testing</h2>
            <rux-radio-group name="radios-check-one" id="focus-check-one">
              <rux-radio value="one">One</rux-radio>
              <rux-radio value="two">Two</rux-radio>
              <rux-radio value="three" disabled id="disabled-radio">Three</rux-radio>
            </rux-radio-group>
            <rux-radio-group name="radios-check-two" id="focus-check-two">
              <rux-radio value="one" id="group2-radio1">One</rux-radio>
              <rux-radio value="two">Two</rux-radio>
              <rux-radio value="three">Three</rux-radio>
            </rux-radio-group>
            <rux-radio-group id="first-test" label="hello">
              <rux-radio value="first"></rux-radio>
              <rux-radio value="second"></rux-radio>
            </rux-radio-group>
            <rux-radio-group><div slot="label">hello</div></rux-radio-group>
        `
        await page.setContent(template)

        //Arrange
        const title = page.locator('#focus-title')
        const ruxRadioGroupOne = page.locator('#focus-check-one').first()
        const secondRadio = ruxRadioGroupOne.locator('rux-radio').nth(1)

        //Act
        await title.click({ force: true })
        await page.keyboard.press('Tab')
        await page.keyboard.press('ArrowDown')

        //Assert
        await expect(secondRadio).toBeFocused()
        await expect(secondRadio).toHaveAttribute('checked', '')
    })
    test('Arrow keys do not focus disabled radio', async ({ page }) => {
        const template = `
            <rux-radio-group name="radios" id="no-value">
              <rux-radio>One</rux-radio>
              <rux-radio>Two</rux-radio>
              <rux-radio>Three</rux-radio>
            </rux-radio-group>

            <h2 id="focus-title">Focus Testing</h2>
            <rux-radio-group name="radios-check-one" id="focus-check-one">
              <rux-radio value="one">One</rux-radio>
              <rux-radio value="two">Two</rux-radio>
              <rux-radio value="three" disabled id="disabled-radio">Three</rux-radio>
            </rux-radio-group>
            <rux-radio-group name="radios-check-two" id="focus-check-two">
              <rux-radio value="one" id="group2-radio1">One</rux-radio>
              <rux-radio value="two">Two</rux-radio>
              <rux-radio value="three">Three</rux-radio>
            </rux-radio-group>
            <rux-radio-group id="first-test" label="hello">
              <rux-radio value="first"></rux-radio>
              <rux-radio value="second"></rux-radio>
            </rux-radio-group>
            <rux-radio-group><div slot="label">hello</div></rux-radio-group>
        `
        await page.setContent(template)

        //Arrange
        const title = page.locator('#focus-title')
        const disabledRadio = page.locator('#disabled-radio')

        //Assert
        await expect(disabledRadio).toHaveAttribute('disabled', '')

        //Act
        await title.click({ force: true })
        await page.keyboard.press('Tab')
        await page.keyboard.press('ArrowDown')
        await page.keyboard.press('ArrowDown')
        await page.keyboard.press('ArrowDown')

        //Assert
        await expect(disabledRadio).not.toBeFocused()
    })
    test('When focused, first radio of radio group with no default value receives checked state on Space keypress', async ({
        page,
    }) => {
        const template = `
            <rux-radio-group name="radios" id="no-value">
              <rux-radio>One</rux-radio>
              <rux-radio>Two</rux-radio>
              <rux-radio>Three</rux-radio>
            </rux-radio-group>

            <h2 id="focus-title">Focus Testing</h2>
            <rux-radio-group name="radios-check-one" id="focus-check-one">
              <rux-radio value="one">One</rux-radio>
              <rux-radio value="two">Two</rux-radio>
              <rux-radio value="three" disabled id="disabled-radio">Three</rux-radio>
            </rux-radio-group>
            <rux-radio-group name="radios-check-two" id="focus-check-two">
              <rux-radio value="one" id="group2-radio1">One</rux-radio>
              <rux-radio value="two">Two</rux-radio>
              <rux-radio value="three">Three</rux-radio>
            </rux-radio-group>
            <rux-radio-group id="first-test" label="hello">
              <rux-radio value="first"></rux-radio>
              <rux-radio value="second"></rux-radio>
            </rux-radio-group>
            <rux-radio-group><div slot="label">hello</div></rux-radio-group>
        `
        await page.setContent(template)

        //Arrange
        const ruxRadioGroupNoValue = page.locator('#no-value')
        const radio = ruxRadioGroupNoValue.locator('rux-radio').first()

        //Act
        await page.keyboard.press('Tab')
        await page.keyboard.press('Space')

        //Assert
        await expect(radio).toBeFocused()
        await expect(radio).toHaveAttribute('checked', '')
    })
    test('Shift Tab puts focus on checked radio of previous group', async ({
        page,
    }) => {
        const template = `
            <rux-radio-group name="radios" id="no-value">
              <rux-radio>One</rux-radio>
              <rux-radio>Two</rux-radio>
              <rux-radio>Three</rux-radio>
            </rux-radio-group>

            <h2 id="focus-title">Focus Testing</h2>
            <rux-radio-group name="radios-check-one" id="focus-check-one">
              <rux-radio value="one">One</rux-radio>
              <rux-radio value="two">Two</rux-radio>
              <rux-radio value="three" disabled id="disabled-radio">Three</rux-radio>
            </rux-radio-group>
            <rux-radio-group name="radios-check-two" id="focus-check-two">
              <rux-radio value="one" id="group2-radio1">One</rux-radio>
              <rux-radio value="two">Two</rux-radio>
              <rux-radio value="three">Three</rux-radio>
            </rux-radio-group>
            <rux-radio-group id="first-test" label="hello">
              <rux-radio value="first"></rux-radio>
              <rux-radio value="second"></rux-radio>
            </rux-radio-group>
            <rux-radio-group><div slot="label">hello</div></rux-radio-group>
        `
        await page.setContent(template)

        //Arrange
        const title = page.locator('#focus-title')
        const ruxRadioGroupOne = page.locator('#focus-check-one').first()
        const secondRadio = ruxRadioGroupOne.locator('rux-radio').nth(1)
        const firstRadio = page.locator('#group2-radio1')

        //Act
        await title.click({ force: true })
        await page.keyboard.press('Tab')
        await page.keyboard.press('ArrowDown')

        //Assert
        await expect(secondRadio).toBeFocused()
        await expect(secondRadio).toHaveAttribute('checked', '')

        //Act
        await page.keyboard.press('Tab')

        //Assert

        await expect(firstRadio).toBeFocused()
        await expect(firstRadio).toHaveAttribute('checked', '')

        //Act
        await page.keyboard.down('Shift')
        await page.keyboard.press('Tab')
        await page.keyboard.up('Shift')

        //Assert
        await expect(secondRadio).toBeFocused()
        await expect(secondRadio).toHaveAttribute('checked', '')
    })
    test('it emits ruxchange event', async ({ page }) => {
        const template = `
            <rux-radio-group name="radios" id="no-value">
              <rux-radio>One</rux-radio>
              <rux-radio>Two</rux-radio>
              <rux-radio>Three</rux-radio>
            </rux-radio-group>

            <h2 id="focus-title">Focus Testing</h2>
            <rux-radio-group name="radios-check-one" id="focus-check-one">
              <rux-radio value="one">One</rux-radio>
              <rux-radio value="two">Two</rux-radio>
              <rux-radio value="three" disabled id="disabled-radio">Three</rux-radio>
            </rux-radio-group>
            <rux-radio-group name="radios-check-two" id="focus-check-two">
              <rux-radio value="one" id="group2-radio1">One</rux-radio>
              <rux-radio value="two">Two</rux-radio>
              <rux-radio value="three">Three</rux-radio>
            </rux-radio-group>
            <rux-radio-group id="first-test" label="hello">
              <rux-radio value="first"></rux-radio>
              <rux-radio value="second"></rux-radio>
            </rux-radio-group>
            <rux-radio-group><div slot="label">hello</div></rux-radio-group>
        `
        await page.setContent(template)

        const secondRadio = page
            .locator('#first-test')
            .locator('rux-radio')
            .nth(1)
        const changeEvent = await page.spyOnEvent('ruxchange')
        await secondRadio.click()
        await expect(changeEvent).toHaveReceivedEventTimes(1)
        await expect(changeEvent).toHaveReceivedEventDetail('second')
    })
})
/*
    Need to test:

*/
