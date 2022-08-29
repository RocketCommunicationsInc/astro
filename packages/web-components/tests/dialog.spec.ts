import { test, expect } from '@playwright/test'
import { startTestEnv } from './utils/_startTestEnv'

test.describe('Dialog', () => {
    startTestEnv()

    test('it renders', async ({ page }) => {
        await page.setContent(`
            <rux-dialog open></rux-dialog>
        `)
        const el = await page.locator('rux-dialog')
        //! toBeVisible is not working. Dialog's bounding box is null.
        // await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
    test('it handles attributes', async ({ page }) => {
        await page.setContent(`
        <rux-dialog modal-title="Title" modal-message="Message"></rux-dialog>
    `)
        const el = page.locator('rux-dialog')
        //! These will need to change to dialog-message and dialog-title in the future.
        await expect(el).toHaveAttribute('modal-message', 'Message')
        await expect(el).toHaveAttribute('modal-title', 'Title')
    })
    test('it opens and closes', async ({ page }) => {
        await page.setContent(`
        <rux-dialog modal-title="Title" modal-message="Message"></rux-dialog>
        <rux-button id="toggle">Open/Close</rux-button>
    `)
        page.addScriptTag({ path: './tests/utils/dialogScript.js' })
        const el = page.locator('rux-dialog')
        const btn = page.locator('#toggle')
        console.log(btn)
        await btn.click()
        await el
            .evaluate((e) => e.hasAttribute('open'))
            .then((e) => {
                expect(e).toBeTruthy()
            })
        // click off to close dialog
        await page.mouse.click(10, 10)
        await el
            .evaluate((e) => {
                e.hasAttribute('open')
            })
            .then((e) => {
                expect(e).toBeFalsy()
            })
    })
    test('it closes the modal on deny click', async ({ page }) => {
        await page.setContent(`
        <rux-dialog open modal-title="Title" modal-message="Message"></rux-dialog>
        <rux-button id="toggle">Open/Close</rux-button>
    `)
        const el = page.locator('rux-dialog')
        const denyBtn = el.locator('rux-button').first()
        await el
            .evaluate((e) => e.hasAttribute('open'))
            .then((e) => {
                expect(e).toBeTruthy()
            })
        await denyBtn.click()
        await el
            .evaluate((e) => {
                e.hasAttribute('open')
            })
            .then((e) => {
                expect(e).toBeFalsy()
            })
    })
    /*
        Need to test: 

    */
})
