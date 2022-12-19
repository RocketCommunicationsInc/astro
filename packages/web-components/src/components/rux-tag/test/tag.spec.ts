import { test, expect } from '../../../../tests/utils/_astro-fixtures'
test.describe('Tag', () => {
    test('renders is-undefined class when invalid status is used', async ({
        page,
    }) => {
        const template = `<rux-tag status="standby" id="invalid-status"></rux-tag>`
        await page.setContent(template)
        const el = await page.locator('rux-tag')
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('is-undefined hydrated')
    })
    test('renders pass status', async ({ page }) => {
        const template = `<rux-tag status="pass"></rux-tag>`
        await page.setContent(template)
        const el = await page.locator('rux-tag')
        const status = el.locator('div')
        await expect(el).toBeVisible()
        await expect(status).toContainText('PASS')
    })
    test('renders fail status', async ({ page }) => {
        const template = `<rux-tag status="fail"></rux-tag>`
        await page.setContent(template)
        const el = await page.locator('rux-tag')
        const status = el.locator('div')
        await expect(el).toBeVisible()
        await expect(status).toContainText('FAIL')
    })

    test('renders unknown status', async ({ page }) => {
        const template = `<rux-tag status="unknown"></rux-tag>`
        await page.setContent(template)
        const el = await page.locator('rux-tag')
        const status = el.locator('div')
        await expect(el).toBeVisible()
        await expect(status).toContainText('UNK')
    })

    test('renders default unk status if status is invalid', async ({
        page,
    }) => {
        const template = `<rux-tag status="bad"></rux-tag>`
        await page.setContent(template)
        const el = await page.locator('rux-tag')
        const status = el.locator('div')
        await expect(el).toBeVisible()
        await expect(status).toContainText('UNK')
    })

    test('renders slot', async ({ page }) => {
        const template = `<rux-tag>CUSTOM TEXT</rux-tag>`
        await page.setContent(template)
        const el = await page.locator('rux-tag')
        await expect(el).toBeVisible()
        await expect(el).toContainText('CUSTOM TEXT')
    })
})

/*
        Need to test: 
        - with slot
        - status=pass/fail/unknown
    */
