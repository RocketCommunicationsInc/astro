import { test, expect } from '@playwright/test'
import { startTestEnv, setBodyContent } from './utils/_startTestEnv'

test.describe('Tag', () => {
    startTestEnv()

    test('it renders', async ({ page }) => {
        await setBodyContent(
            page,
            `
            <rux-tag></rux-tag>
        `
        )
        const el = page.locator('rux-tag').first()
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
    test('renders is-undefined class when invalid status is used', async ({
        page,
    }) => {
        await setBodyContent(
            page,
            `
            <rux-tag status="standby" id="invalid-status"></rux-tag>
        `
        )
        const el = page.locator('#invalid-status')
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('is-undefined hydrated')
    })
    test('renders pass status', async ({ page }) => {
        await setBodyContent(
            page,
            `
            <rux-tag status="pass"></rux-tag>
        `
        )
        const el = page.locator('rux-tag')
        const status = el.locator('div')
        await expect(el).toBeVisible()
        await expect(status).toContainText('PASS')
    })
    test('renders fail status', async ({ page }) => {
        await setBodyContent(
            page,
            `
            <rux-tag status="fail"></rux-tag>
        `
        )
        const el = page.locator('rux-tag')
        const status = el.locator('div')
        await expect(el).toBeVisible()
        await expect(status).toContainText('FAIL')
    })
    test('renders unknown status', async ({ page }) => {
        await setBodyContent(
            page,
            `
            <rux-tag status="unknown"></rux-tag>
        `
        )
        const el = page.locator('rux-tag')
        const status = el.locator('div')
        await expect(el).toBeVisible()
        await expect(status).toContainText('UNK')
    })
    test('renders default unk status if status is invalid', async ({
        page,
    }) => {
        await setBodyContent(
            page,
            `
            <rux-tag status="bad"></rux-tag>
        `
        )
        const el = page.locator('rux-tag')
        const status = el.locator('div')
        await expect(el).toBeVisible()
        await expect(status).toContainText('UNK')
    })
    test('renders slot', async ({ page }) => {
        await setBodyContent(
            page,
            `
            <rux-tag>CUSTOM TEXT</rux-tag>
        `
        )
        const el = page.locator('rux-tag')
        await expect(el).toBeVisible()
        await expect(el).toContainText('CUSTOM TEXT')
    })
})

/*
        Need to test: 
        - with slot
        - status=pass/fail/unknown
    */
