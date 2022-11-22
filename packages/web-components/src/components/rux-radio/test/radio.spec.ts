import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Radio', () => {
    test.beforeEach(async ({ page }) => {
        const template = `
            <rux-radio>hello</rux-radio>
        `
        await page.setContent(template)
    })

    test('it renders', async ({ page }) => {
        const el = await page.locator('rux-radio').first()
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
})
/*
    Need to test: 
    -Gets checked state on click/click-off
    -Does not check when disabled
    -Does not uncheck when disabled and checked
    -Form tests?
*/
