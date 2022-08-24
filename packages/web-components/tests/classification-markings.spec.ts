import { test, expect } from '@playwright/test'
import { startTestEnv } from './utils/_startTestEnv'

test.describe('Classification marking banners', () => {
    startTestEnv()

    test('it renders', async ({ page }) => {
        await page.setContent(`
            <rux-classification-marking></rux-classification-marking>
        `)

        const el = page.locator('rux-classification-marking')
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
    test('it sets attributes', async ({ page }) => {
        await page.setContent(`
        <rux-classification-marking classification="secret" label="Label"></rux-classification-marking>
    `)

        const el = page.locator('rux-classification-marking')
        await expect(el).toHaveAttribute('classification', 'secret')
        await expect(el).toHaveAttribute('label', 'Label')
    })
    test('it renders the correct default of unclassified if incorrect classification is provided', async ({
        page,
    }) => {
        await page.setContent(`
        <rux-classification-marking classification="not real"></rux-classification-marking>
    `)

        const el = page.locator('rux-classification-marking')
        await expect(el).toHaveAttribute('classification', 'unclassified')
    })
    test('it renders a footer banner when supplied', async ({ page }) => {
        await page.setContent(`
        <rux-classification-marking classification="secret">
            <h1>Test title for footer banner</h1>
        </rux-classification-marking>
        `)

        const topBanner = page.locator('.rux-classification--banner').first()
        const footerBanner = page.locator('.rux-classification--banner__footer')
        await topBanner.evaluate((e) => console.log(e, 'here'))
        expect(topBanner).toBeDefined()
        expect(footerBanner).toBeDefined()
        await expect(topBanner).toBeVisible()
        await expect(footerBanner).toBeVisible()
    })
})
