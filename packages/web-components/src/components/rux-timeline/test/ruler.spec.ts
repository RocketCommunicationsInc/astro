import { test, expect } from '../../../../tests/utils/_astro-fixtures'
import {
    startTestInBefore,
    setBodyContent,
} from '../../../../tests/utils/_startTestEnv'

test.describe('Ruler', () => {
    test.beforeEach(async ({ page }) => {
        await startTestInBefore(page)

        await setBodyContent(
            page,
            `
            <rux-ruler></rux-ruler>
        `
        )
    })
    test('it renders', async ({ page }) => {
        const el = page.locator('rux-ruler').first()
        await expect(el).toHaveClass('hydrated')
    })
})
