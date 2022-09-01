import { test, expect } from '@playwright/test'
import { startTestEnv } from './utils/_startTestEnv'

test.describe('Slider', () => {
    startTestEnv()
    test('it renders', async ({ page }) => {
        await page.setContent(`
            <rux-slider></rux-slider>
        `)
        const el = page.locator('rux-slider')
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
    test('should render the datalist when axis-labels is provided', async ({
        page,
    }) => {
        await page.setContent(`
        <rux-slider id="ticks"></rux-slider>
        <script>
            document.getElementById('ticks').axisLabels = ['0', '25', '50', '75', '100']
        </script>
        `)
        const el = page.locator('#ticks')
        const stepDivs = el.locator('#steplist').locator('.tick-label')
        await expect(stepDivs).toHaveCount(5)
    })
    test('should hear the ruxchange event', async ({ page }) => {
        await page.setContent(`
            <rux-slider></rux-slider>
            <script>
                document.addEventListener('ruxchange', (e) => {
                    console.log(e.type)
                })
            </script>
        `)
        page.on('console', (msg) => {
            expect(msg.text()).toBe('ruxchange')
        })
        const el = page.locator('rux-slider')

        await Promise.all([
            page.waitForEvent('console', { timeout: 5000 }),
            await el.click({ position: { x: 10, y: 0 } }),
        ])
    })
})
test.describe('Slider in a form', () => {})
