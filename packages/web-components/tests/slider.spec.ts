import { test, expect } from '@playwright/test'
import {
    startTestEnv,
    startTestInBefore,
    setBodyContent,
} from './utils/_startTestEnv'

test.describe('Slider', () => {
    startTestEnv()
    test('it renders', async ({ page }) => {
        await setBodyContent(
            page,
            `
            <rux-slider></rux-slider>
        `
        )
        const el = page.locator('rux-slider')
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
    test('should render the datalist when axis-labels is provided', async ({
        page,
    }) => {
        await setBodyContent(
            page,
            `
        <rux-slider id="ticks"></rux-slider>
        <script>
            document.getElementById('ticks').axisLabels = ['0', '25', '50', '75', '100']
        </script>
        `
        )
        const el = page.locator('#ticks')
        const stepDivs = el.locator('#steplist').locator('.tick-label')
        await expect(stepDivs).toHaveCount(5)
    })
    test('should hear the ruxchange event', async ({ page }) => {
        await setBodyContent(
            page,
            `
            <rux-slider></rux-slider>
            <script>
                document.addEventListener('ruxchange', (e) => {
                    console.log(e.type)
                })
            </script>
        `
        )
        page.on('console', (msg) => {
            expect(msg.text()).toBe('ruxchange')
        })
        const el = page.locator('rux-slider')

        await Promise.all([
            page.waitForEvent('console', { timeout: 5000 }),
            el.click({ position: { x: 10, y: 0 } }),
        ])
    })
    test('should hear the ruxinput event', async ({ page }) => {
        await setBodyContent(
            page,
            `
            <rux-slider></rux-slider>
            <script>
                document.addEventListener('ruxinput', (e) => {
                    console.log(e.type)
                })
            </script>
        `
        )
        page.on('console', (msg) => {
            expect(msg.text()).toBe('ruxinput')
        })
        const el = page.locator('rux-slider')

        await Promise.all([
            page.waitForEvent('console', { timeout: 5000 }),
            el.click({ position: { x: 10, y: 0 } }),
        ])
    })
    test('should hear the ruxblur event', async ({ page }) => {
        await setBodyContent(
            page,
            `
            <rux-slider></rux-slider>
            <br />
            <rux-button>Click to blur!</rux-button>
            <script>
                document.addEventListener('ruxblur', (e) => {
                    console.log(e.type)
                })
            </script>
        `
        )
        page.on('console', (msg) => {
            expect(msg.text()).toBe('ruxblur')
        })
        const el = page.locator('rux-slider')
        const btn = page.locator('rux-button')

        await Promise.all([
            page.waitForEvent('console', { timeout: 5000 }),
            await el
                .click({ position: { x: 10, y: 0 } })
                .then(() => btn.click()),
        ])
    })
})
test.describe('Slider in a form', () => {
    test.beforeEach(async ({ page }) => {
        await startTestInBefore(page)
        await setBodyContent(
            page,
            `
        <form id="form">
            <rux-slider name="ruxSlider" id="ruxSlider"></rux-slider>
            <rux-slider name="disabled" id="slider-dis" disabled></rux-slider>
            <rux-slider name="ruxSliderTicks" id="ticks"></rux-slider>
            <rux-slider id="change-test" max="100" value="50"></rux-slider>
            <button type="submit">submit</button>
        </form>
        <ul id="log"></ul>
        `
        )
        await page.addScriptTag({
            path: './tests/utils/formScript.js',
        })
    })
    test('it submits correct value in a form', async ({ page }) => {
        const el = page.locator('#ruxSlider')
        const log = page.locator('#log')
        const submit = page.locator('button')
        await el.click({ position: { x: 20, y: 0 } }) //Clicks it at the very left, value = 1
        await expect(el.locator('input').first()).toHaveValue('1')
        await submit.click()
        await expect(log).toContainText('ruxSlider:1')
    })
    test('it submits the default value without interaction', async ({
        page,
    }) => {
        const log = page.locator('#log')
        const submit = page.locator('button')
        await submit.click()
        await expect(log).toContainText('ruxSlider:50')
    })
    test('it does not allow input if disabled', async ({ page }) => {
        const el = page.locator('#slider-dis')
        const log = page.locator('#log')
        const submit = page.locator('button')
        await expect(el.locator('input').first()).toHaveValue('50')
        await el.click({ position: { x: 20, y: 0 } })
        await expect(el.locator('input').first()).toHaveValue('50')
        await submit.click()
        await expect(log).not.toContainText('disabled:1')
    })
})
