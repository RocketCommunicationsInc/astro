import { test, expect } from '@playwright/test'
import { startTestEnv, setBodyContent } from './utils/_startTestEnv'

test.describe('Progress', () => {
    test('has no visual regression @vrt', async ({page}) => {
        await page.goto('/components/rux-progress/test/basic')
        await expect(page).toHaveScreenshot()
    })
    startTestEnv()

    test('it renders', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <body>
            <rux-progress></rux-progress>
            <div style="margin: 3rem auto; padding: 2rem; text-align: center">
                <rux-progress value="100" max="100"></rux-progress>
            </div>
        </body>
    `
        )
        const el = page.locator('rux-progress').first()
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
    test('it returns progress as string', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <body>
            <div style="margin: 3rem auto; padding: 2rem; text-align: center">
                <rux-progress value="10" max="100"></rux-progress>
            </div>
        </body>
    `
        )
        const el = page.locator('rux-progress').first()
        const progressString = el.locator('output')

        await expect(progressString).toContainText('10%')
    })
    test('it returns zero percent if no value is given', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <body>
            <div style="margin: 3rem auto; padding: 2rem; text-align: center">
                <rux-progress max="100"></rux-progress>
            </div>
        </body>
    `
        )
        const el = page.locator('rux-progress').first()
        const progressString = el.locator('output')

        await expect(progressString).toContainText('0%')
    })
    test('it changes max to equal value if given value is greater than given max', async ({
        page,
    }) => {
        await setBodyContent(
            page,
            `
        <body>
            <div style="margin: 3rem auto; padding: 2rem; text-align: center">
                <rux-progress value="150" max="100"></rux-progress>
            </div>
        </body>
    `
        )
        const progress = page.locator('.rux-progress').first()

        await expect(progress).toHaveAttribute('max', '150')
    })
    test('it does not modify max if max is greater than given value', async ({
        page,
    }) => {
        await setBodyContent(
            page,
            `
        <body>
            <div style="margin: 3rem auto; padding: 2rem; text-align: center">
                <rux-progress value="50" max="100"></rux-progress>
            </div>
        </body>
    `
        )
        const progress = page.locator('.rux-progress').first()

        await expect(progress).toHaveAttribute('max', '100')
    })
    test('it has correct default values for max and value if none are given', async ({
        page,
    }) => {
        await setBodyContent(
            page,
            `
        <body>
            <div style="margin: 3rem auto; padding: 2rem; text-align: center">
                <rux-progress></rux-progress>
            </div>
        </body>
    `
        )
        const progress = page.locator('.rux-progress').first()

        await expect(progress).toHaveAttribute('max', '100')
        await expect(progress).toHaveAttribute('value', '0')
    })
    test('it renders a progress bar of 0/100 if value provided is 0', async ({
        page,
    }) => {
        await setBodyContent(
            page,
            `
        <body>
            <div style="margin: 3rem auto; padding: 2rem; text-align: center">
                <rux-progress value="0"></rux-progress>
            </div>
        </body>
    `
        )
        const progress = page.locator('.rux-progress').first()

        await expect(progress).toHaveAttribute('max', '100')
        await expect(progress).toHaveAttribute('value', '0')
    })
    test('it only renders the value if max is set to ""', async ({ page }) => {
        await setBodyContent(
            page,
            `
        <body>
            <div style="margin: 3rem auto; padding: 2rem; text-align: center">
                <rux-progress value="20" max=""></rux-progress>
            </div>
        </body>
    `
        )
        const progress = page.locator('rux-progress').first()

        await expect(progress).toHaveAttribute('max', "")
        await expect(progress).toHaveAttribute('value', '20')
    })
})
/*
    Need to test: 
    -has props value, hide-label
*/
