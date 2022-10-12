import { test, expect } from '@playwright/test'
import {
    startTestEnv,
    setBodyContent,
    startTestInBefore,
} from './utils/_startTestEnv'

test.describe('Dialog', () => {
    startTestEnv()

    test('it renders', async ({ page }) => {
        await setBodyContent(
            page,
            `
            <rux-dialog open></rux-dialog>
        `
        )
        const el = page.locator('rux-dialog')
        await expect(el).toHaveClass('hydrated')
    })
    test('it handles attributes', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-dialog header="Title" message="Message"></rux-dialog>
    `
        )
        const el = page.locator('rux-dialog')
        await expect(el).toHaveAttribute('message', 'Message')
        await expect(el).toHaveAttribute('header', 'Title')
    })
    test('it opens and closes', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-dialog header="Title" message="Message" click-to-close></rux-dialog>
        <rux-button id="toggle">Open/Close</rux-button>
    `
        )
        page.addScriptTag({
            content: `
        const toggleBtn = document.getElementById('toggle')
        const testDialog = document.querySelector('rux-dialog')

        toggleBtn.addEventListener('click', () => {
            testDialog.open = !testDialog.open
        })
        `,
        })
        const el = page.locator('rux-dialog')
        const btn = page.locator('#toggle')
        await btn.click()
        await expect(el).toHaveAttribute('open', '')
        await page.mouse.click(10, 10)
        await expect(el).not.toHaveAttribute('open', '')
    })
    test('it closes the modal on deny click', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-dialog open header="Title" message="Message"></rux-dialog>
        <rux-button id="toggle">Open/Close</rux-button>
    `
        )
        const el = page.locator('rux-dialog')
        const denyBtn = el.locator('rux-button').first()
        await expect(el).toHaveAttribute('open', '')
        await denyBtn.click()
        await expect(el).not.toHaveAttribute('open', '')
    })
    test('it closes the modal on confirm click', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-dialog open header="Title" message="Message"></rux-dialog>
        <rux-button id="toggle">Open/Close</rux-button>
    `
        )
        const el = page.locator('rux-dialog')
        const confirmBtn = el.locator('rux-button').last()
        await expect(el).toHaveAttribute('open', '')
        await confirmBtn.click()
        await expect(el).not.toHaveAttribute('open', '')
    })
    test('it emits ruxdialogclosed event with detail of false when deny button is clicked', async ({
        page,
    }) => {
        await setBodyContent(
            page,
            `
        <rux-dialog open header="Title" message="Message"></rux-dialog>
        <rux-button id="toggle">Open/Close</rux-button>
    `
        )
        page.addScriptTag({
            content: `
            document.addEventListener('ruxdialogclosed', (e) => {
            console.log(e.detail)
        })`,
        })
        const el = page.locator('rux-dialog')
        const denyBtn = el.locator('rux-button').first()
        page.on('console', (msg) => {
            expect(msg.text()).toBe('false')
        })
        await Promise.all([page.waitForEvent('console'), denyBtn.click()])
    })
    test('it emits ruxdialogclosed event with detail of true when confrim button is clicked', async ({
        page,
    }) => {
        await setBodyContent(
            page,
            `
        <rux-dialog open header="Title" message="Message"></rux-dialog>
        <rux-button id="toggle">Open/Close</rux-button>
    `
        )
        page.addScriptTag({
            content: `
            document.addEventListener('ruxdialogclosed', (e) => {
            console.log(e.detail)
        })`,
        })
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
        await setBodyContent(
            page,
            `
        <rux-dialog open header="Title" message="Message"></rux-dialog>
    `
        )
        page.addScriptTag({
            content: `
            document.addEventListener('ruxdialogclosed', (e) => {
            console.log(e.detail)
        })`,
        })
        page.on('console', (msg) => {
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
        await setBodyContent(
            page,
            `
        <rux-dialog open header="Title" message="Message"></rux-dialog>
    `
        )
        page.addScriptTag({
            content: `
            document.addEventListener('ruxdialogclosed', (e) => {
            console.log(e.detail)
        })`,
        })
        page.on('console', (msg) => {
            expect(msg.text()).toBe('false')
        })
        await Promise.all([
            page.waitForEvent('console', { timeout: 5000 }),
            page.waitForTimeout(1000).then(() => page.keyboard.press('Escape')),
        ])
    })
})
test.describe(
    'Dialog does not close on an off click unless click-to-close is true',
    () => {
        test.beforeEach(async ({ page }) => {
            await startTestInBefore(page)
            await setBodyContent(
                page,
                `   <rux-dialog id="ctc-false" header="Click to close = False" message="world"></rux-dialog>
                <rux-dialog id="ctc-true" header="Click to close = True" message="world" click-to-close></rux-dialog>
                <rux-button id="true">Open click-to-close true</rux-button>
                <rux-button id="false">Open click-to-close false</rux-button>
            `
            )
            await page.addScriptTag({
                content: `
            document.addEventListener('ruxdialogclosed', (e) => console.log(e.detail))
            const openTrue = document.getElementById('true');
            const openFalse = document.getElementById('false');
            const ctcTrueModal = document.getElementById('ctc-true')
            const ctcFalseModal = document.getElementById('ctc-false')
    
            openTrue.addEventListener('click', () => {
                ctcTrueModal.open = true
            })
            openFalse.addEventListener('click', () => {
                ctcFalseModal.open = true
            })
        `,
            })
        })
        test('it reamins open when click-to-close is false', async ({
            page,
        }) => {
            await page.locator('#false').click()
            const ctcFalseModal = page.locator('#ctc-false')
            await expect(ctcFalseModal).toHaveAttribute('open', '')
            //click off, it should remain open.
            await page.locator('body').click({ position: { x: 10, y: 10 } })
            //ctcFalseModal should still be open
            await expect(ctcFalseModal).toHaveAttribute('open', '')
        })
        test('it closes on an off click when click-to-close is true', async ({
            page,
        }) => {
            await page.locator('#true').click()
            const ctcTrueModal = page.locator('#ctc-true')
            await expect(ctcTrueModal).toHaveAttribute('open', '')
            //click off, it should remain open.
            await page.locator('body').click({ position: { x: 10, y: 10 } })
            //ctcFalseModal should still be open
            await expect(ctcTrueModal).not.toHaveAttribute('open', '')
        })
        test('it resets detail.value after event is emitted', async ({
            page,
        }) => {
            //* The _useInput of rux-dialog.tsx would not be resetted to default value after a choice was
            //* made that closed the dialog. Therefore, if the same dialog opened again and was clicked off of to close,
            //* it would emit the previous value in e.detail rather than null, the default value.
            await page.addScriptTag({
                content: `
            document.addEventListener('ruxdialogclosed', (e) => {
                console.log(e.detail)
            `,
            })
            // Using a counter here to get around the first console log of 'false' when dialog is closed the first time.
            let counter = 1
            page.on('console', async (msg) => {
                if (counter === 2) {
                    expect(msg.text()).toBe('null')
                }
                counter++
            })
            await page.locator('#true').click()
            const ctcTrueModal = page.locator('#ctc-true')

            await ctcTrueModal.locator('rux-button').first().click()

            // open it again, close it by click off
            await page.locator('#true').click()

            await Promise.all([
                page.waitForEvent('console', { timeout: 5000 }),
                await page
                    .locator('body')
                    .click({ position: { x: 10, y: 10 } }),
            ])
        })
        /*
        Need to test: 
        - With slots? Not sure if that's acutally beneficial. 
        - Better way to test events rather than console? 
        - current e2e has tests for dialog props changing - I don't think these are helpful. Thoughts? 
    */
    }
)
