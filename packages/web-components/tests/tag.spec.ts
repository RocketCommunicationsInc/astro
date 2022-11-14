import { test, expect } from './utils/_astro-fixtures'
test.describe('Tag', () => {

    test('it renders', async ({ astroPage }) => {
        const template = `<rux-tag></rux-tag>`
        const el = await astroPage.load(template)
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
    test('renders is-undefined class when invalid status is used', async ({ astroPage }) => {
        const template = `<rux-tag status="standby" id="invalid-status"></rux-tag>`
        const el = await astroPage.load(template)
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('is-undefined hydrated')
    })
    test('renders pass status', async ({ astroPage }) => {
        const template = `<rux-tag status="pass"></rux-tag>`
        const el = await astroPage.load(template)
        const status = el.locator('div')
        await expect(el).toBeVisible()
        await expect(status).toContainText('PASS')
    })
    test('renders fail status', async ({ astroPage }) => {
        const template = `<rux-tag status="fail"></rux-tag>`
        const el = await astroPage.load(template)
        const status = el.locator('div')
        await expect(el).toBeVisible()
        await expect(status).toContainText('FAIL')
    })

    test('renders unknown status', async ({ astroPage }) => {
        const template = `<rux-tag status="unknown"></rux-tag>`
        const el = await astroPage.load(template)
        const status = el.locator('div')
        await expect(el).toBeVisible()
        await expect(status).toContainText('UNK')
    })

    test('renders default unk status if status is invalid', async ({ astroPage }) => {
        const template = `<rux-tag status="bad"></rux-tag>`
        const el = await astroPage.load(template)
        const status = el.locator('div')
        await expect(el).toBeVisible()
        await expect(status).toContainText('UNK')
    })

    test('renders slot', async ({ astroPage }) => {
        const template = `<rux-tag>CUSTOM TEXT</rux-tag>`
        const el = await astroPage.load(template)
        await expect(el).toBeVisible()
        await expect(el).toContainText('CUSTOM TEXT')
    })
})

/*
        Need to test: 
        - with slot
        - status=pass/fail/unknown
    */
