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
})

/*
        Need to test: 
        - with slot
        - status=pass/fail/unknown
    */
