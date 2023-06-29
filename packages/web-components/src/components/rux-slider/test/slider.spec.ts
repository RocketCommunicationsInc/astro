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
            <rux-slider id="dual" max="100" value="80" min-val="40"></rux-slider>
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
    test('it submits the correct default values for a dual range slider without interaction', async ({
        page,
    }) => {
        const dual = page.locator('#dual')
        const log = await page.locator('#log')
        const submit = await page.locator('button')
        await expect(dual.locator('input').first()).toHaveValue('40')
        await expect(dual.locator('input').last()).toHaveValue('80')
        await submit.click()
        await expect(log).toContainText('dual')
    })
})

test.describe('Dual Range Slider', () => {
    test.beforeEach(async ({ page }) => {
        const template = `
        <div style="display: flex; flex-direction: column; width: 400px; row-gap: 2rem;">
        <h2>Dual Range</h2>
        <rux-slider id="dual-1" value="30" min-val="20" min="0" max="100"></rux-slider>
        <rux-slider id="dual-2" value="50" min-val="50" min="0" max="100"></rux-slider>
        <rux-slider id="dual-with-label" label="Dual With Label" value="80" min-val="20" min="0" max="100"></rux-slider>
        <rux-slider id="dual-help-text" value="80" min-val="20" min="0" max="100" help-text="Help Text Here"></rux-slider>
        <rux-slider id="dual-error-text" value="80" min-val="20" min="0" max="100"
          error-text="Error text here"></rux-slider>
        <rux-slider id="dual-axis-labels" value="80" min-val="20" min="0" max="100"></rux-slider>
        <rux-slider id="dual-disabled" disabled value="80" min-val="20" min="0" max="100"></rux-slider>
        <rux-slider id="dual-axis-labels-disabled" disabled value="80" min-val="20" min="0" max="100"
          label="Dual, Disabled, Axis Labels"></rux-slider>
        <rux-slider id="strict" value=
        </div>

        `
        await page.setContent(template)
    })
    test('Using min-val renders a dual range slider', async ({ page }) => {
        const dual = page.locator('#dual-1')
        const inputs = await dual.locator('.rux-range--dual').all()
        expect(inputs).toHaveLength(2)
    })
    test('Min-val thumb is moveable in a dual range', async ({ page }) => {
        const dual = page.locator('#dual-1')
        await expect(dual).toHaveAttribute('min-val', '20')
        //need better way to simulate the mouse clicking and dragging the thumb.
        await dual.click({ position: { x: 10, y: 10 } })
        await expect(dual).toHaveAttribute('min-val', '3')

        // await page.mouse.move(10, 10)
        // await page.hover('#dual-1')
        // await page.mouse.down()
        // await page.mouse.move(10, 20)
        // await page.mouse.up()
    })
    test('Value (rightmost) thumb is moveable in dual range', async ({
        page,
    }) => {
        //This also tests clicking the track.
        const dual = page.locator('#dual-1')
        await expect(dual).toHaveAttribute('value', '30')
        await dual.click({ position: { x: 200, y: 10 } })
        await expect(dual).toHaveAttribute('value', '50')
    })
    test('Left track click moves min-val thumb when thumb values are equal', async ({
        page,
    }) => {
        const equalDual = page.locator('#dual-2')
        await expect(equalDual).toHaveAttribute('value', '50')
        await expect(equalDual).toHaveAttribute('min-val', '50')
        await equalDual.click({ position: { x: 20, y: 10 } })
        await expect(equalDual).toHaveAttribute('min-val', '5')
        await expect(equalDual).toHaveAttribute('value', '50')
    })
    // test('Right track click moves value thumb when thumb values are equal', async ({
    //     page,
    // }) => {
    //     const equalDual = page.locator('#dual-2')
    //     await expect(equalDual).toHaveAttribute('value', '50')
    //     await expect(equalDual).toHaveAttribute('min-val', '50')
    //     //click doesnt' work
    //     await equalDual.click({ position: { x: 0, y: 25 } })
    //     await expect(equalDual).toHaveAttribute('min-val', '50')
    //     await expect(equalDual).toHaveAttribute('value', '70')
    // })
    test('Clicks not accepted when disabled', async ({ page }) => {
        const disabled = page.locator('#dual-disabled')
        await expect(disabled).toHaveAttribute('min-val', '20')
        await expect(disabled).toHaveAttribute('value', '80')
        await disabled.click({ position: { x: 10, y: 10 } })
        await expect(disabled).toHaveAttribute('min-val', '20')
        await expect(disabled).toHaveAttribute('value', '80')
    })
    //TODO: Test that thumbs do not swap when strict = true
})
