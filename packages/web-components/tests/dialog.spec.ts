import { test, expect } from '@playwright/test'
import { startTestEnv } from './utils/_startTestEnv'

test.describe('Dialog', () => {
    startTestEnv()

    test('it renders', async ({ page }) => {
        await page.setContent(`
            <rux-dialog open></rux-dialog>
        `)
        const el = page.locator('rux-dialog')
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
        <script>
        const toggleBtn = document.getElementById('toggle')
        const testDialog = document.querySelector('rux-dialog')

        toggleBtn.addEventListener('click', () => {
            testDialog.open = !testDialog.open
        })
        </script>
    `)
        // page.addScriptTag({ path: './tests/utils/dialogScript.js' })
        const el = page.locator('rux-dialog')
        const btn = page.locator('#toggle')
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
    test('it closes the modal on confirm click', async ({ page }) => {
        await page.setContent(`
        <rux-dialog open modal-title="Title" modal-message="Message"></rux-dialog>
        <rux-button id="toggle">Open/Close</rux-button>
    `)
        const el = page.locator('rux-dialog')
        const confirmBtn = el.locator('rux-button').last()
        await el
            .evaluate((e) => e.hasAttribute('open'))
            .then((e) => {
                expect(e).toBeTruthy()
            })
        await confirmBtn.click()
        await el
            .evaluate((e) => {
                e.hasAttribute('open')
            })
            .then((e) => {
                expect(e).toBeFalsy()
            })
    })
    test('it emits ruxdialogclosed event with detail of false when deny button is clicked', async ({
        page,
    }) => {
        await page.setContent(`
        <script>
            document.addEventListener('ruxdialogclosed', (e) => {
                console.log(e.detail)
            })
        </script>
        <rux-dialog open modal-title="Title" modal-message="Message"></rux-dialog>
        <rux-button id="toggle">Open/Close</rux-button>
    `)
        const el = page.locator('rux-dialog')
        const denyBtn = el.locator('rux-button').first()
        page.on('console', (msg) => {
            console.log('in page on!')
            expect(msg.text()).toBe('false')
        })
        await Promise.all([page.waitForEvent('console'), denyBtn.click()])
    })
    test('it emits ruxdialogclosed event with detail of true when confrim button is clicked', async ({
        page,
    }) => {
        await page.setContent(`
        <script>
            document.addEventListener('ruxdialogclosed', (e) => {
                console.log(e.detail)
            })
        </script>
        <rux-dialog open modal-title="Title" modal-message="Message"></rux-dialog>
        <rux-button id="toggle">Open/Close</rux-button>
    `)
        const el = page.locator('rux-dialog')
        const confirmBtn = el.locator('rux-button').last()
        page.on('console', (msg) => {
            expect(msg.text()).toBe('true')
        })
        await Promise.all([page.waitForEvent('console'), confirmBtn.click()])
    })
    test('it should trigger confirm button when enter is clicked', async ({
        page,
    }) => {
        await page.setContent(
            `
        <script>
            document.addEventListener('ruxdialogclosed', (e) => {
                console.log(e.detail)
            })
        </script>
        <rux-dialog open modal-title="Title" modal-message="Message"></rux-dialog>
    `
        )

        page.on('console', (msg) => {
            console.log('inside the on')
            expect(msg.text()).toBe('true')
        })
        await Promise.all([
            page.waitForEvent('console', { timeout: 5000 }),
            page.waitForTimeout(1000).then(() => page.keyboard.press('Enter')),
        ])
    })
    test('it should trigger deny button when escape is pressed and emit false', async ({
        page,
    }) => {
        await page.setContent(
            `
        <script>
            document.addEventListener('ruxdialogclosed', (e) => {
                console.log(e.detail)
            })
        </script>
        <rux-dialog open modal-title="Title" modal-message="Message"></rux-dialog>
    `
        )
        page.on('console', (msg) => {
            console.log('inside the on')
            expect(msg.text()).toBe('false')
        })
        await Promise.all([
            page.waitForEvent('console', { timeout: 5000 }),
            page.waitForTimeout(1000).then(() => page.keyboard.press('Escape')),
        ])
    })
    /*
        Need to test: 
        - With slots? Not sure if that's acutally beneficial. 
    */
})
