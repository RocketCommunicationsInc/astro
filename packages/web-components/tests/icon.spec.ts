import { test, expect } from '@playwright/test'
import { startTestEnv } from './utils/_startTestEnv'

test.describe('Icon', () => {
    startTestEnv()

    test('it renders', async ({ page }) => {
        await page.setContent(`
<<<<<<< HEAD
        <rux-icon icon="apps"></rux-icon>
=======
        <rux-icon icon="altitude"></rux-icon>
>>>>>>> c53028640aee78e0ebae52a7279b3f6e0c0313f1
    `)
        const el = page.locator('rux-icon').first()
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
})
/*
    Need to test: 
    -has attribute icon (necessary for the right SVG to render)
*/
