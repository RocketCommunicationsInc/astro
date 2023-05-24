import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Progress', () => {
    test('it returns progress as string', async ({ page }) => {
        const template = `
        <body>
            <div style="margin: 3rem auto; padding: 2rem; text-align: center">
                <rux-progress value="10" max="100"></rux-progress>
            </div>
        </body>
    `
        await page.setContent(template)
        const el = await page.locator('rux-progress').first()
        const progressString = await el.locator('output')

        await expect(progressString).toContainText('10%')
    })
    test('it returns zero percent if no value is given', async ({ page }) => {
        const template = `
        <body>
            <div style="margin: 3rem auto; padding: 2rem; text-align: center">
                <rux-progress max="100"></rux-progress>
            </div>
        </body>
    `
        await page.setContent(template)
        const el = await page.locator('rux-progress').first()
        const progressString = await el.locator('output')

        await expect(progressString).toContainText('0%')
    })
    test('it changes value to equal max if given value is greater than given max', async ({
        page,
    }) => {
        const template = `
        <body>
            <div style="margin: 3rem auto; padding: 2rem; text-align: center">
                <rux-progress value="150" max="100"></rux-progress>
            </div>
        </body>
    `
        await page.setContent(template)
        const progress = await page.locator('.rux-progress').first()

        await expect(progress).toHaveAttribute('max', '100')
        await expect(progress).toHaveAttribute('value', '100')
    })
    test('it does not modify max if max is greater than given value', async ({
        page,
    }) => {
        const template = `
        <body>
            <div style="margin: 3rem auto; padding: 2rem; text-align: center">
                <rux-progress value="50" max="100"></rux-progress>
            </div>
        </body>
    `
        await page.setContent(template)
        const progress = await page.locator('.rux-progress').first()

        await expect(progress).toHaveAttribute('max', '100')
    })
    test('it has correct default values for max and value if none are given', async ({
        page,
    }) => {
        const template = `
        <body>
            <div style="margin: 3rem auto; padding: 2rem; text-align: center">
                <rux-progress></rux-progress>
            </div>
        </body>
    `
        await page.setContent(template)
        const progress = await page.locator('.rux-progress').first()

        await expect(progress).toHaveAttribute('max', '100')
        await expect(progress).toHaveAttribute('value', '0')
    })
    test('it renders a progress bar of 0/100 if value provided is 0', async ({
        page,
    }) => {
        const template = `
        <body>
            <div style="margin: 3rem auto; padding: 2rem; text-align: center">
                <rux-progress value="0"></rux-progress>
            </div>
        </body>
    `
        await page.setContent(template)
        const progress = await page.locator('.rux-progress').first()

        await expect(progress).toHaveAttribute('max', '100')
        await expect(progress).toHaveAttribute('value', '0')
    })
    test('it only renders the value if max is set to ""', async ({ page }) => {
        const template = `
        <body>
            <div style="margin: 3rem auto; padding: 2rem; text-align: center">
                <rux-progress value="20" max=""></rux-progress>
            </div>
        </body>
    `
        await page.setContent(template)
        const progress = await page.locator('rux-progress').first()

        await expect(progress).toHaveAttribute('max', '')
        await expect(progress).toHaveAttribute('value', '20')
    })
})
/*
    Need to test:
    -has props value, hide-label
*/
