import { test, expect } from '@playwright/test'
import { startTestInBefore, setBodyContent } from './utils/_startTestEnv'

test.describe('Push-button', () => {
    test.beforeEach(async ({ page }) => {
        await startTestInBefore(page)

        await setBodyContent(
            page,
            `
                <div style="padding: 10%; display: flex; justify-content: center">
                    <form id="form">
                        <rux-push-button
                            name="ruxPushButton"
                            id="ruxPushButton"
                            value="true"
                            style="margin: 1rem 0;"
                        ></rux-push-button>
                        <input
                            type="checkbox"
                            id="nativeCheckbox"
                            name="nativeCheckbox"
                            value="true"
                            style="margin: 1rem 0;"
                        />
                        <rux-push-button
                            name="ruxPushButtonDisabled"
                            id="ruxPushButtonDisabled"
                            value="true"
                            disabled
                            style="margin: 1rem 0;"
                        >
                        </rux-push-button>
                        <rux-push-button
                            name="ruxPushButtonNoVal"
                            id="ruxPushButtonNoVal"
                            style="margin: 1rem 0;"
                        >
                        </rux-push-button>
                        <button type="submit">submit</button>
                    </form>
                </div>
                <div style="width: 30%">
                    <ul id="log"></ul>
                </div>
                <div class="auto-increment-id">
                    <rux-push-button></rux-push-button> 
                    <rux-push-button></rux-push-button>
                </div>
        `
        )

        page.addScriptTag({
            path: './tests/utils/formScript.js',
        })
    })

    test('it renders', async ({ page }) => {
        const el = page.locator('rux-push-button').first()
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
    test('submits the correct value when using a form', async ({ page }) => {
        //Arrange
        const pushButton = page.locator('#ruxPushButton').first()
        const nativeCheckbox = page.locator('#nativeCheckbox')
        const submitButton = page.locator('button[type="submit"]')
        const log = page.locator('#log')

        //Act
        await pushButton.click()
        await nativeCheckbox.check()
        await submitButton.click()

        // Assert
        await expect(log).toContainText('ruxPushButton:true')
        await expect(log).toContainText('nativeCheckbox:true')
    })
    test('does not submit any value if not checked', async ({ page }) => {
        //Arrange
        const submitButton = page.locator('button[type="submit"]')
        const log = page.locator('#log')

        //Act
        await submitButton.click()

        //Assert
        await expect(log).not.toContainText('ruxPushButton')
    })
    test('does not submit a value if checked and then unchecked', async ({
        page,
    }) => {
        //Arrange
        const pushButton = page.locator('#ruxPushButton').first()
        const nativeCheckbox = page.locator('#nativeCheckbox')
        const submitButton = page.locator('button[type="submit"]')
        const log = page.locator('#log')

        //Act
        await nativeCheckbox.check()
        await pushButton.click()
        await pushButton.click()
        await submitButton.click()

        //Assert
        await expect(log).not.toContainText('ruxPushButton')
    })
    test('does not allow input if disabled', async ({ page }) => {
        //Arrange
        const pushButton = page.locator('#ruxPushButton').first()
        const submitButton = page.locator('button[type="submit"]')
        const disabledButton = page.locator('#ruxPushButtonDisabled')
        const disabledInput = disabledButton.locator('input')
        const log = page.locator('#log')

        //Assert
        await expect(disabledButton).toHaveAttribute('disabled', '')

        //Act
        await disabledButton.click()

        //Assert
        await expect(disabledInput).not.toHaveAttribute('checked', '')
        //Act
        await pushButton.click()
        await submitButton.click()

        //Assert
        await expect(log).not.toContainText('ruxPushButtonDisabled')
    })
    test('submits a value of on if no value was given', async ({ page }) => {
        //Arrange
        const pushdButtonNoVal = page.locator('#ruxPushButtonNoVal')
        const submitButton = page.locator('button[type="submit"]')
        const log = page.locator('#log')

        //Act
        await pushdButtonNoVal.click()
        await submitButton.click()

        //Assert
        await expect(log).toContainText('ruxPushButtonNoVal:on')
    })
    test('should have unique ids', async ({ page }) => {
        //Arrange
        const section = page.locator('.auto-increment-id')
        const pushButton1 = section.locator('rux-push-button').first()
        const pushButtonInput1 = pushButton1.locator('input')
        const pushButton2 = section.locator('rux-push-button').nth(1)
        const pushButtonInput2 = pushButton2.locator('input')

        await pushButtonInput1.evaluate((e) => {
            const switch1Id = e.id
            const idStorage = document.createElement('div')
            idStorage.classList.add(switch1Id)
            e.appendChild(idStorage)
        })

        await pushButtonInput2.evaluate((e) => {
            const switch2Id = e.id
            const idStorage = document.createElement('div')
            idStorage.classList.add(switch2Id)
            e.appendChild(idStorage)
        })
        const button1IdClass = pushButtonInput1.locator('div')
        const button2IdClass = pushButtonInput2.locator('div')

        await expect(button1IdClass).not.toBe(button2IdClass)
    })
})
/*
    Need to test: 
    
*/
