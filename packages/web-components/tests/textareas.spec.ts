import { test, expect } from '@playwright/test'
import {
    startTestEnv,
    startTestInBefore,
    setBodyContent,
} from './utils/_startTestEnv'

test.describe('Textarea', () => {
    startTestEnv()
    test('it renders', async ({ page }) => {
        await setBodyContent(
            page,
            `
            <rux-textarea></rux-textarea>
        `
        )
        const el = page.locator('rux-textarea')
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
    test('it renders error text', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-textarea error-text="Error Text"></rux-textarea>
    `
        )
        const el = page.locator('rux-textarea')
        await expect(el).toHaveAttribute('error-text', 'Error Text')
    })
    test('it renders help text', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <rux-textarea help-text="Help Text"></rux-textarea>
    `
        )
        const el = page.locator('rux-textarea')
        await expect(el).toHaveAttribute('help-text', 'Help Text')
    })
    test('it renders error text over help text if both are provided', async ({
        page,
    }) => {
        await setBodyContent(
            page,
            `
        <rux-textarea help-text="Help Text" error-text="Error Text"></rux-textarea>
    `
        )
        const el = page.locator('rux-textarea')
        await expect(el.locator('.rux-error-text')).toHaveText('Error Text')
        await expect(el.locator('div').last()).toHaveClass('rux-error-text')
        await expect(el).not.toHaveClass('rux-help-text')
    })
})
test.describe('Textarea in a form', () => {
    test.beforeEach(async ({ page }) => {
        await startTestInBefore(page)
        await setBodyContent(
            page,
            `
        <div style="padding: 10%; display: flex; justify-content: center">
        <form id="form">
            <rux-textarea
                id="textarea1"
                name="test1"
                value=""
            ></rux-textarea>
            <br />
            <rux-textarea
                id="disTextArea"
                name="disTextArea"
                value="Disabled"
                disabled
            ></rux-textarea>
            <button id="formSubmitBtn" type="submit">submit</button>
        </form>
        <ul id="log"></ul>
        `
        )
        await page.addScriptTag({
            path: './tests/utils/formScript.js',
        })
    })
    test('it submits the correct value', async ({ page }) => {
        const el = page.locator('form > #textarea1')
        const submit = page.locator('form > #formSubmitBtn')
        const log = page.locator('#log')
        await el
            .locator('textarea')
            .type('TextArea Testing Time', { delay: 50 })
        await submit.click()

        await expect(log).toContainText('test1:TextArea Testing Time')
    })
    test('it does not submit a value if disabled', async ({ page }) => {
        const submit = page.locator('form > #formSubmitBtn')
        const log = page.locator('#log')
        await submit.click()
        await expect(log).not.toContainText('Disabled')
    })
    test('it renders label prop', async ({ page }) => {
        await setBodyContent(
            page,
            `
            <rux-textarea label="hello"></rux-textarea>
        `
        )
        const el = page.locator('rux-textarea')
        const label = el.locator('label')

        await expect(label).toHaveClass('rux-textarea-label')
    })
    test('it renders label slot', async ({ page }) => {
        await setBodyContent(
            page,
            `
            <rux-textarea><div slot="label">hello</div></rux-textarea>
        `
        )
        const el = page.locator('rux-textarea')
        const label = el.locator('label')

        await expect(label).toHaveClass('rux-textarea-label')
    })
})

/**
 * Need to test:
 *  - Invalid changes border color to critical
 *  - Resizing?
 *  - Attr like max, rows, min/max-length?
 */
