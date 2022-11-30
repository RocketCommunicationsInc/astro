import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Slider', () => {
    test('it renders label prop', async ({ page }) => {
        const template = `
            <rux-slider label="hello"></rux-slider>
        `
        await page.setContent(template)
        const el = await page.locator('rux-slider')
        const label = el.locator('label')

        await expect(label).toHaveClass('rux-input-label')
    })
    test('it renders label slot', async ({ page }) => {
        const template = `
            <rux-slider><div slot="label">hello</div></rux-slider>
        `
        await page.setContent(template)
        const el = await page.locator('rux-slider')
        const label = el.locator('label')

        await expect(label).toHaveClass('rux-input-label')
    })
    test('should render the datalist when axis-labels is provided', async ({
        page,
    }) => {
        const template = `
        <rux-slider id="ticks"></rux-slider>
        `
        await page.setContent(template)
        page.addScriptTag({
            content: `
        document.getElementById('ticks').axisLabels = ['0', '25', '50', '75', '100']
        `,
        })
        const el = await page.locator('#ticks')
        const stepDivs = el.locator('#steplist').locator('.tick-label')
        await expect(stepDivs).toHaveCount(5)
    })
    test('should hear the ruxchange event', async ({ page }) => {
        const template = `
            <rux-slider></rux-slider>
        `
        await page.setContent(template)
        const el = await page.locator('rux-slider')
        const changeEvent = await page.spyOnEvent('ruxchange')
        await el.click({ position: { x: 10, y: 10 } })
        await expect(changeEvent).toHaveReceivedEventTimes(1)
    })
    test('should hear the ruxinput event', async ({ page }) => {
        const template = `
            <rux-slider></rux-slider>
        `
        await page.setContent(template)

        const el = await page.locator('rux-slider')
        const inputEvent = await page.spyOnEvent('ruxinput')

        await el.click({ position: { x: 10, y: 10 } })
        await expect(inputEvent).toHaveReceivedEventTimes(1)
    })
    test('should hear the ruxblur event', async ({ page }) => {
        const template = `
            <rux-slider></rux-slider>
            <br />
            <rux-button>Click to blur!</rux-button>
        `
        await page.setContent(template)

        const el = await page.locator('rux-slider')
        const btn = await page.locator('rux-button')
        const blurEvent = await page.spyOnEvent('ruxblur')

        await el.click()
        await btn.click()
        expect(blurEvent).toHaveReceivedEventTimes(1)
    })
})
test.describe('Slider in a form', () => {
    test.beforeEach(async ({ page }) => {
        const template = `
        <form id="form">
            <rux-slider name="ruxSlider" id="ruxSlider"></rux-slider>
            <rux-slider name="disabled" id="slider-dis" disabled></rux-slider>
            <rux-slider name="ruxSliderTicks" id="ticks"></rux-slider>
            <rux-slider id="change-test" max="100" value="50"></rux-slider>
            <button type="submit">submit</button>
        </form>
        <ul id="log"></ul>
        `
        await page.setContent(template)
        await page.addScriptTag({
            path: './tests/utils/formScript.js',
        })
    })
    test('it submits correct value in a form', async ({ page }) => {
        const el = await page.locator('#ruxSlider')
        const log = await page.locator('#log')
        const submit = await page.locator('button')
        await page.waitForTimeout(100)
        //Clicks it at the very left, value = 1
        await el.click({ position: { x: 20, y: 10 } })
        await expect(el.locator('input').first()).toHaveValue('1')
        await submit.click()
        await expect(log).toContainText('ruxSlider:1')
    })
    test('it submits the default value without interaction', async ({
        page,
    }) => {
        const log = await page.locator('#log')
        const submit = await page.locator('button')
        await submit.click()
        await expect(log).toContainText('ruxSlider:50')
    })
    test('it does not allow input if disabled', async ({ page }) => {
        const el = await page.locator('#slider-dis')
        const log = await page.locator('#log')
        const submit = await page.locator('button')
        await expect(el.locator('input').first()).toHaveValue('50')
        await el.click({ position: { x: 20, y: 10 } })
        await expect(el.locator('input').first()).toHaveValue('50')
        await submit.click()
        await expect(log).not.toContainText('disabled:1')
    })
})
