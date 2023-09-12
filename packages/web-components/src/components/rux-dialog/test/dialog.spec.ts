import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Dialog', () => {
    test('it renders with slots', async ({ page }) => {
        const template = `
            <rux-dialog open>
                <span slot="header">Header</span>
                <div>Message</div>
                <div slot="footer">Footer</div>
            </rux-dialog>
        `
        await page.setContent(template)
        const ruxDialog = page.locator('rux-dialog')
        const header = ruxDialog.locator('.rux-dialog__header')
        const content = ruxDialog.locator('.rux-dialog__content')
        const footer = ruxDialog.locator('.rux-dialog__footer')

        await expect(ruxDialog).toHaveClass('hydrated')
        await expect(header).toHaveClass('rux-dialog__header')
        await expect(content).toHaveClass('rux-dialog__content')
        await expect(footer).toHaveClass('rux-dialog__footer')
    })
    test('it renders with a mix of slots and props', async ({ page }) => {
        const template = `
            <rux-dialog open header="Title">
                <div>Message</div>
                <div slot="footer">Footer</div>
            </rux-dialog>
        `
        await page.setContent(template)
        const ruxDialog = page.locator('rux-dialog')
        const header = ruxDialog.locator('.rux-dialog__header')
        const content = ruxDialog.locator('.rux-dialog__content')
        const footer = ruxDialog.locator('.rux-dialog__footer')

        await expect(ruxDialog).toHaveClass('hydrated')
        await expect(header).toHaveClass('rux-dialog__header')
        await expect(content).toHaveClass('rux-dialog__content')
        await expect(footer).toHaveClass('rux-dialog__footer')
    })
    test('it handles attributes', async ({ page }) => {
        const template = `
            <rux-dialog header="Title" message="Message"></rux-dialog>
        `
        await page.setContent(template)
        const el = page.locator('rux-dialog')
        await expect(el).toHaveAttribute('message', 'Message')
        await expect(el).toHaveAttribute('header', 'Title')
    })
    test('it opens and closes', async ({ page }) => {
        const template = `
        <rux-dialog header="Title" message="Message" click-to-close></rux-dialog>
        <rux-button id="toggle">Open/Close</rux-button>
    `
        await page.setContent(template)
        page.addScriptTag({
            content: `
                const toggleBtn = document.getElementById('toggle')
                const testDialog = document.querySelector('rux-dialog')

                toggleBtn.addEventListener('click', () => {
                    testDialog.open = !testDialog.open
                })
            `,
        })
        const el = await page.locator('rux-dialog')
        const btn = await page.locator('#toggle')
        await btn.click()
        await expect(el).toHaveAttribute('open', '')
        await page.mouse.click(10, 10)
        await expect(el).not.toHaveAttribute('open', '')
    })
    test('it closes the modal on deny click', async ({ page }) => {
        const template = `
            <rux-dialog open header="Title" message="Message"></rux-dialog>
            <rux-button id="toggle">Open/Close</rux-button>
        `
        await page.setContent(template)
        const el = await page.locator('rux-dialog')
        const denyBtn = await el.locator('rux-button').first()
        await expect(el).toHaveAttribute('open', '')
        await denyBtn.click()
        await expect(el).not.toHaveAttribute('open', '')
    })
    test('it closes the modal on confirm click', async ({ page }) => {
        const template = `
                <rux-dialog open header="Title" message="Message"></rux-dialog>
                <rux-button id="toggle">Open/Close</rux-button>
            `
        await page.setContent(template)
        const el = await page.locator('rux-dialog')
        const confirmBtn = await el.locator('rux-button').last()
        await expect(el).toHaveAttribute('open', '')
        await confirmBtn.click()
        await expect(el).not.toHaveAttribute('open', '')
    })
    test('it emits ruxdialogclosed event with detail of false when deny button is clicked', async ({
        page,
    }) => {
        const template = `
                <rux-dialog open header="Title" message="Message"></rux-dialog>
                <rux-button id="toggle">Open/Close</rux-button>
            `
        await page.setContent(template)

        const el = await page.locator('rux-dialog')
        const denyBtn = await el.locator('rux-button').first()
        const closeEvent = await page.spyOnEvent('ruxdialogclosed')

        await denyBtn.click()
        expect(closeEvent).toHaveReceivedEventDetail(false)
    })
    test('it emits ruxdialogclosed event with detail of true when confrim button is clicked', async ({
        page,
    }) => {
        const template = `
                <rux-dialog open header="Title" message="Message"></rux-dialog>
                <rux-button id="toggle">Open/Close</rux-button>
            `
        await page.setContent(template)

        const el = await page.locator('rux-dialog')
        const confirmBtn = await el.locator('rux-button').last()
        const closeEvent = await page.spyOnEvent('ruxdialogclosed')

        await confirmBtn.click()

        expect(closeEvent).toHaveReceivedEventDetail(true)
    })
    test('it should trigger confirm button when enter is clicked', async ({
        page,
    }) => {
        const template = `
                <rux-dialog open header="Title" message="Message"></rux-dialog>
            `
        await page.setContent(template)

        const closeEvent = await page.spyOnEvent('ruxdialogclosed')

        await page.keyboard.press('Enter')
        await page.waitForChanges()
        expect(closeEvent).toHaveReceivedEventDetail(true)
    })
    test('it should trigger deny button when escape is pressed and emit false', async ({
        page,
    }) => {
        const template = `
        <rux-dialog open header="Title" message="Message"></rux-dialog>
    `
        await page.setContent(template)
        const closeEvent = await page.spyOnEvent('ruxdialogclosed')

        await page.keyboard.press('Escape')
        await page.waitForChanges()

        expect(closeEvent).toHaveReceivedEventDetail(false)
    })
})
test.describe(
    'Dialog does not close on an off click unless click-to-close is true',
    () => {
        test.beforeEach(async ({ page }) => {
            const template = `   <rux-dialog id="ctc-false" header="Click to close = False" message="world"></rux-dialog>
                <rux-dialog id="ctc-true" header="Click to close = True" message="world" click-to-close></rux-dialog>
                <rux-button id="true">Open click-to-close true</rux-button>
                <rux-button id="false">Open click-to-close false</rux-button>
            `
            await page.setContent(template)
            await page.addScriptTag({
                content: `
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
            //* The _useInput of rux-dialog.tsx would not be reset to default value after a choice was
            //* made that closed the dialog. Therefore, if the same dialog opened again and was clicked off of to close,
            //* it would emit the previous value in e.detail rather than null, the default value.

            const closeEvent = await page.spyOnEvent('ruxdialogclosed')
            //open dialog
            await page.locator('#true').click()
            const ctcTrueModal = page.locator('#ctc-true')
            //make a choice to close dialog
            await ctcTrueModal.locator('rux-button').first().click()
            //open same dialog, click off to close. Event detail should be null
            await page.locator('#true').click()
            await page.locator('body').click({ position: { x: 10, y: 10 } })

            //using NthReceivedEventDetail here because the spy should have fired twice
            expect(closeEvent).toHaveNthReceivedEventDetail(1, null)
        })
        test('it renders the message prop text when used with slots', async ({
            page,
        }) => {
            const template = `
                <rux-dialog open message="Message Prop">
                    <span slot="header">Slot Header</span>
                </rux-dialog>
            `
            await page.setContent(template)
            const messageContainer = await page.locator('.rux-dialog__message')
            await expect(messageContainer).toContainText('Message Prop')
        })
    }
)
test.describe('toggleOpen method', () => {
    test('toggleOpen method opens a closed dialog', async ({ page }) => {
        const template = `
          <rux-button>Toggle Open</rux-button>
          <rux-dialog>
            <div slot="header">Header</div>
            Body Content
            <div slot="footer">Footer</div>
          </rux-dialog>`
        await page.setContent(template)
        await page.addScriptTag({
            content: `
            const dialog = document.querySelector('rux-dialog')
            const btn = document.querySelector('rux-button')
            btn.addEventListener('click', () => {
              dialog.toggleOpen()
            })
            `,
        })
        const dialog = page.locator('rux-dialog')
        const btn = page.locator('rux-button')
        await expect(dialog).not.toHaveAttribute('open', '')
        await btn.click()
        await expect(dialog).toHaveAttribute('open', '')
    })
    test('toggleOpen method closes an open dialog', async ({ page }) => {
        const template = `
          <rux-dialog open>
            <div slot="header">Header</div>
            Body Content
            <div slot="footer">
              <rux-button>Close</rux-button>
            </div>
          </rux-dialog>`
        await page.setContent(template)
        await page.addScriptTag({
            content: `
            const dialog = document.querySelector('rux-dialog')
            const btn = document.querySelector('rux-button')
            btn.addEventListener('click', () => {
              dialog.toggleOpen()
            })
            `,
        })
        const dialog = page.locator('rux-dialog')
        const btn = page.locator('rux-button')
        await expect(dialog).toHaveAttribute('open', '')
        await btn.click()
        await expect(dialog).not.toHaveAttribute('open', '')
    })
})
