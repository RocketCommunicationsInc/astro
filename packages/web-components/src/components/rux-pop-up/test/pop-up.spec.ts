import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Pop up', async () => {
    test('it renders', async ({ page }) => {
        const template = `
        <rux-pop-up id="popup-1" open>
        <rux-menu-item>Item 1</rux-menu-item>
        <rux-menu-item-divider></rux-menu-item-divider>
        <rux-menu-item value="2"
            >Item 2 with an exceedingly long title that overruns
            the width</rux-menu-item
        >
        <rux-menu-item disabled
            >Item 3 is disabled</rux-menu-item
        >
        <rux-menu-item value="Item 4"
            >Item 4 has a string value</rux-menu-item
        >
        <rux-menu-item href="https://www.astrouxds.com"
            >Item 5 is an anchor</rux-menu-item
        >
    </rux-pop-up>
        `
        await page.setContent(template)
        const el = await page.locator('rux-pop-up')
        await expect(el).toHaveClass('hydrated')
    })
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
        page.addScriptTag({
            content: `
        document.addEventListener('ruxpopupopened', () => {
            console.log('opened');
        })
        document.addEventListener('ruxpopupclosed', () => {
            console.log('closed');
        })`,
        })
        const toggleBtn = await page.locator('#toggle-btn')
        page.on('console', (msg) => {
            expect(msg.text()).toBe('opened')
        })
        await Promise.all([
            page.waitForEvent('console', { timeout: 5000 }),
            toggleBtn.click(),
        ])
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
        page.addScriptTag({
            content: `
        document.addEventListener('ruxpopupopened', () => {
            console.log('opened');
        })
        document.addEventListener('ruxpopupclosed', () => {
            console.log('closed');
        })`,
        })
        const toggleBtn = await page.locator('#toggle-btn')
        page.on('console', (msg) => {
            expect(msg.text()).toBe('closed')
        })
        await Promise.all([
            page.waitForEvent('console', { timeout: 5000 }),
            toggleBtn.click(),
        ])
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
     *  - Open and close?
     *  - Closes on an off click
     *  - should be able to contain a form
     */
})
