import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Pop up', async () => {
    test('it emits ruxpopupopened event', async ({ page }) => {
        const template = `    
                <rux-pop-up placement="top-start" id="top">
                <rux-button slot="trigger" id="toggle-btn">Top</rux-button>
                <rux-menu>
                    <rux-menu-item value="1" selected>Pop up menu option test</rux-menu-item>
                    <rux-menu-item-divider></rux-menu-item-divider>
                    <rux-menu-item value="2">Pop up menu option test</rux-menu-item>
                    <rux-menu-item value="3">Pop up menu option test</rux-menu-item>
                </rux-menu>
            </rux-pop-up>`
        await page.setContent(template)

        const toggleBtn = await page.locator('#toggle-btn')
        const openedEvent = await page.spyOnEvent('ruxpopupopened')
        await toggleBtn.click()
        expect(openedEvent).toHaveReceivedEventTimes(1)
    })
    test('it emits ruxpopupclosed event', async ({ page }) => {
        const template = `    
        <rux-pop-up placement="top-start" id="top" open>
        <rux-button slot="trigger" id="toggle-btn">Top</rux-button>
        <rux-menu>
            <rux-menu-item value="1" selected>Pop up menu option test</rux-menu-item>
            <rux-menu-item-divider></rux-menu-item-divider>
            <rux-menu-item value="2">Pop up menu option test</rux-menu-item>
            <rux-menu-item value="3">Pop up menu option test</rux-menu-item>
        </rux-menu>
        </rux-pop-up>`
        await page.setContent(template)
        const toggleBtn = await page.locator('#toggle-btn')
        const closedEvent = await page.spyOnEvent('ruxpopupclosed')
        await toggleBtn.click()
        expect(closedEvent).toHaveReceivedEventTimes(1)
    })
    test('it opens', async ({ page }) => {
        const template = `    
        <rux-pop-up placement="top-start" id="top">
        <rux-button slot="trigger" id="toggle-btn">Top</rux-button>
        <rux-menu>
            <rux-menu-item value="1" selected>Pop up menu option test</rux-menu-item>
            <rux-menu-item-divider></rux-menu-item-divider>
            <rux-menu-item value="2">Pop up menu option test</rux-menu-item>
            <rux-menu-item value="3">Pop up menu option test</rux-menu-item>
        </rux-menu>
        </rux-pop-up>`
        await page.setContent(template)
        const toggleBtn = await page.locator('#toggle-btn')
        const popup = await page.locator('rux-pop-up')
        await expect(popup).not.toHaveAttribute('open', '')
        await toggleBtn.click()
        await expect(popup).toHaveAttribute('open', '')
    })
    test('it closes', async ({ page }) => {
        const template = `    
        <rux-pop-up placement="top-start" id="top" open>
        <rux-button slot="trigger" id="toggle-btn">Top</rux-button>
        <rux-menu>
            <rux-menu-item value="1" selected>Pop up menu option test</rux-menu-item>
            <rux-menu-item-divider></rux-menu-item-divider>
            <rux-menu-item value="2">Pop up menu option test</rux-menu-item>
            <rux-menu-item value="3">Pop up menu option test</rux-menu-item>
        </rux-menu>
        </rux-pop-up>`
        await page.setContent(template)
        const toggleBtn = await page.locator('#toggle-btn')
        const popup = await page.locator('rux-pop-up')
        await expect(popup).toHaveAttribute('open', '')
        await toggleBtn.click()
        await expect(popup).not.toHaveAttribute('open', '')
    })
    test('it close on an off click', async ({ page }) => {
        const template = `    
        <rux-pop-up placement="top-start" id="top">
        <rux-button slot="trigger" id="toggle-btn">Top</rux-button>
        <rux-menu>
            <rux-menu-item value="1" selected>Pop up menu option test</rux-menu-item>
            <rux-menu-item-divider></rux-menu-item-divider>
            <rux-menu-item value="2">Pop up menu option test</rux-menu-item>
            <rux-menu-item value="3">Pop up menu option test</rux-menu-item>
        </rux-menu>
        </rux-pop-up>
        <div id="click-me" style="width: 100px; height: 100px; margin-left: 300px;">Click me to close</div>
        `
        await page.setContent(template)
        const toggleBtn = await page.locator('#toggle-btn')
        const div = page.locator('#click-me')
        const popup = page.locator('rux-pop-up')
        await toggleBtn.click()
        await expect(popup).toHaveAttribute('open', '')
        await div.click()
        await expect(popup).not.toHaveAttribute('open', '')
    })
    test('when close-on-select is provided, pop-up closes when a selection is made', async ({
        page,
    }) => {
        const template = `    
        <rux-pop-up placement="top-start" id="top" open close-on-select>
        <rux-button slot="trigger" id="toggle-btn">Top</rux-button>
        <rux-menu>
            <rux-menu-item value="1" selected>Pop up menu option test</rux-menu-item>
            <rux-menu-item-divider></rux-menu-item-divider>
            <rux-menu-item value="2">Pop up menu option test</rux-menu-item>
            <rux-menu-item value="3">Pop up menu option test</rux-menu-item>
        </rux-menu>
        </rux-pop-up>
        `
        await page.setContent(template)
        const popup = page.locator('rux-pop-up')
        const item = popup.locator('rux-menu-item').first()
        await expect(popup).toHaveAttribute('open', '')
        await item.click()
        await expect(popup).not.toHaveAttribute('open', '')
    })
    //keyboard tests
    test('it opens/closes on Enter', async ({ page }) => {
        const template = `    
        <rux-pop-up placement="top-start" id="top">
        <rux-button slot="trigger" id="toggle-btn">Top</rux-button>
        <rux-menu>
            <rux-menu-item value="1" selected>Pop up menu option test</rux-menu-item>
            <rux-menu-item-divider></rux-menu-item-divider>
            <rux-menu-item value="2">Pop up menu option test</rux-menu-item>
            <rux-menu-item value="3">Pop up menu option test</rux-menu-item>
        </rux-menu>
        </rux-pop-up>`
        await page.setContent(template)
        const toggleBtn = await page.locator('#toggle-btn')
        const popUp = await page.locator('rux-pop-up')

        //Assert
        await expect(popUp).not.toHaveAttribute('open', '')

        //Act
        await toggleBtn.focus()
        await page.keyboard.press('Enter')

        //Assert
        await expect(popUp).toHaveAttribute('open', '')

        //Act
        await toggleBtn.focus()
        await page.keyboard.press('Enter')

        //Assert
        await expect(popUp).not.toHaveAttribute('open', '')
    })
    test('icon trigger can have focus', async ({ page }) => {
        const template = `    
        <rux-pop-up placement="top-start" id="top">
        <rux-icon slot="trigger" icon="star" id="toggle-btn"></rux-icon>
        <rux-menu>
            <rux-menu-item value="1" selected>Pop up menu option test</rux-menu-item>
            <rux-menu-item-divider></rux-menu-item-divider>
            <rux-menu-item value="2">Pop up menu option test</rux-menu-item>
            <rux-menu-item value="3">Pop up menu option test</rux-menu-item>
        </rux-menu>
        </rux-pop-up>`
        await page.setContent(template)
        const toggleBtn = await page.locator('#toggle-btn')
        const popUp = await page.locator('rux-pop-up')

        //Assert
        await expect(popUp).not.toHaveAttribute('open', '')

        //Act
        await page.keyboard.press('Tab')
        await expect(toggleBtn).toBeFocused()
    })
    /**
     * Need to test:
     *  - should be able to contain a form
     */
})
