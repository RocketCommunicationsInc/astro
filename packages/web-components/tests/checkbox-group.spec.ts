import { test, expect } from '@playwright/test'
import { startTestEnv } from './utils/_startTestEnv'

test.describe('Checkbox-group', () => {
    startTestEnv()

    test('it renders', async ({ page }) => {
        await page.setContent(`
        <rux-checkbox-group>
            <rux-checkbox>one</rux-checkbox>
            <rux-checkbox>two</rux-checkbox>
            <rux-checkbox>three</rux-checkbox>
        </rux-checkbox-group>
    `)
        const el = page.locator('rux-checkbox-group').first()
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
    test('it sets label', async ({ page }) => {
        await page.setContent(`
        <rux-checkbox-group label="hello"></rux-checkbox-group>
       `)
        const el = await page.locator('rux-checkbox-group').first()

        await expect(el).toBeVisible()
        await expect(el).toHaveAttribute('label', 'hello')
    })
    test('it renders help text', async ({ page }) => {
        await page.setContent(`
        <rux-checkbox-group help-text="Help text!">
            <rux-checkbox>one</rux-checkbox>
            <rux-checkbox>two</rux-checkbox>
            <rux-checkbox>three</rux-checkbox>
        </rux-checkbox-group>
        `)
        const el = await page.locator('rux-checkbox-group').first()
        await expect(el).toBeVisible()
        await expect(el).toHaveAttribute('help-text', 'Help text!')
        const text = await page.locator('.rux-help-text')
        // const myLog = await text.evaluate((e) => e)
        // console.log(myLog)

        await expect(text).toContainText('Help text!')
    })
})
