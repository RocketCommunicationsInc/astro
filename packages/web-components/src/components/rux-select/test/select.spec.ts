import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Select', () => {
    test('it renders', async ({ page }) => {
        const template = `
            <rux-select></rux-select>
        `
        await page.setContent(template)
        const el = await page.locator('rux-select')
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })
    test('it renders option group', async ({ page }) => {
        const template = `
            <rux-select>
              <rux-option label="outside option"></rux-option>
              <rux-option-group label="Group one">
                <rux-option label="inside option"></rux-option>
              </rux-option-group>
              <rux-option label="outside option"></rux-option>
            </rux-select>
        `
        await page.setContent(template)
        const el = await page.locator('rux-select')
        const optionGroup = el.locator('rux-option-group')
        await expect(optionGroup).toHaveClass('hydrated')
    })
    test('it syncs value to select element', async ({ page }) => {
        const template = `
        <rux-select id="ruxSelect" label="Best Thing?" name="bestThing">
            <rux-option label="Select an option" value=""></rux-option>
            <rux-option label="Red" value="red"></rux-option>
            <rux-option value="blue" label="Blue"></rux-option>
            <rux-option value="green" label="Green"></rux-option>
        </rux-select>
        `
        await page.setContent(template)
        const el = await page.locator('rux-select')
        await el.evaluate((e) => e.setAttribute('value', 'blue'))
        await expect(el.locator('select')).toHaveValue('blue')
    })
    test('it syncs value from select element', async ({ page }) => {
        const template = `
        <rux-select id="ruxSelect" label="Best Thing?" name="bestThing">
            <rux-option label="Select an option" value=""></rux-option>
            <rux-option label="Red" value="red"></rux-option>
            <rux-option value="blue" label="Blue"></rux-option>
            <rux-option value="green" label="Green"></rux-option>
        </rux-select>
        `
        await page.setContent(template)
        const el = await page.locator('rux-select')
        await el.locator('select').selectOption('green')
        await expect(el.locator('select')).toHaveValue('green')
    })
})
test.describe('Select in a form', () => {
    test.beforeEach(async ({ page }) => {
        const template = `
        <form id="form" method="POST" action="/form">
            <rux-select id="ruxSelect" label="Best Thing?" name="bestThing">
                <rux-option label="Select an option" value=""></rux-option>
                <rux-option label="Red" value="red"></rux-option>
                <rux-option value="blue" label="Blue"></rux-option>
                <rux-option value="green" label="Green"></rux-option>
            </rux-select>
            <rux-select disabled id="disabledSelect" label="Best Thing?" name="disabled" value="red">
                <rux-option label="Select an option" value=""></rux-option>
                <rux-option label="Red" value="red"></rux-option>
                <rux-option value="blue" label="Blue"></rux-option>
                <rux-option value="green" label="Green"></rux-option>
            </rux-select>
            <!--- Multi Select --->
            <rux-select
                id="ruxMultiSelect"
                label="Best Thing?"
                name="multBestThing"
                multiple
            >
                <rux-option value="red" label="Red"></rux-option>
                <rux-option value="blue" label="Blue"></rux-option>
                <rux-option value="green" label="Green"></rux-option>
                <rux-option value="purple" label="Purple"></rux-option>
                <rux-option value="yellow" label="Yellow"></rux-option>
            </rux-select>
            <button id="formSubmitBtn" type="submit">submit</button>
        </form>
        <ul id="log"></ul>
        `
        await page.setContent(template)
        await page.addScriptTag({
            path: './tests/utils/formScript.js',
        })
    })
    test('it should not submit a value if disabled', async ({ page }) => {
        const log = await page.locator('#log')
        const submit = await page.locator('button')
        await submit.click()
        await expect(log).not.toContainText('disabled')
    })
    test('it should defalut to the option with no value', async ({ page }) => {
        const el = await page.locator('#ruxSelect')
        await expect(el.locator('select')).toHaveValue('')
    })
    // Single Select in a form
    test('it should submit the correct value in a form', async ({ page }) => {
        const el = await page.locator('#ruxSelect')
        const log = await page.locator('#log')
        const submit = await page.locator('button')
        await el.locator('select').selectOption('red')
        await submit.click()
        await expect(log).toContainText('bestThing:red')
    })
    test('it should submit correct value when typing an option after focus', async ({
        page,
    }) => {
        const el = await page.locator('#ruxSelect')
        const log = await page.locator('#log')
        const submit = await page.locator('button')
        await el.locator('select').press('Tab')
        await el.locator('select').type('r')
        await submit.click()
        await expect(log).toContainText('bestThing:red')
    })
    test('it should submit the correct value when selecting by arrow keys after focus', async ({
        page,
    }) => {
        const el = await page.locator('#ruxSelect')
        const log = await page.locator('#log')
        const submit = await page.locator('button')
        await el.locator('select').press('Tab')
        await el.locator('select').press('ArrowDown', { delay: 200 })
        await el.locator('select').type('b')
        await submit.click()
        await expect(log).toContainText('bestThing:blue')
    })
    // Multi Select
    test('it syncs multiple values from select element', async ({ page }) => {
        const multi = await page.locator('#ruxMultiSelect')
        await multi.locator('select').selectOption(['red', 'green'])
        await expect(multi.locator('select')).toHaveValues(['red', 'green'])
    })
    test('it syncs multiple values to select element', async ({ page }) => {
        const multi = await page.locator('#ruxMultiSelect')
        await multi.locator('select').selectOption(['red', 'blue'])
        await expect(multi.locator('select')).toHaveValues(['red', 'blue'])
    })
    test('it should submit correct values when selecting multiple options', async ({
        page,
    }) => {
        const multi = await page.locator('#ruxMultiSelect')
        const submit = await page.locator('button')
        const log = await page.locator('#log')

        await multi.locator('select').selectOption(['red', 'blue'])
        await submit.click()
        await expect(log).toContainText('multBestThing:redmultBestThing:blue')
    })
})
test.describe('Options can dynamically add/remove props', () => {
    test.beforeEach(async ({ page }) => {
        const template = `
        <rux-select id="ruxSelect" label="Best Thing?" name="bestThing">
            <rux-option label="Select an option" value=""></rux-option>
            <rux-option label="Red" value="red"></rux-option>
            <rux-option value="blue" label="Blue"></rux-option>
            <rux-option value="green" label="Green" id="green"></rux-option>
        </rux-select>
        <rux-button id="dis-green">Disabled Green Option</rux-button>
      `
        await page.setContent(template)
    })
    test('it should dynamically disable an option', async ({ page }) => {
        const disGreen = await page.locator('#dis-green')
        const select = await page.locator('#ruxSelect')
        const greenOption = await page.locator('#green')

        // await page.click(greenOption)
    })
})
// test.describe('Emits events', () => {
//     test.beforeEach(async ({ page }) => {
//         const template = `
//         <rux-select id="ruxSelect" label="Best Thing?" name="bestThing">
//             <rux-option label="Select an option" value=""></rux-option>
//             <rux-option label="Red" value="red"></rux-option>
//             <rux-option value="blue" label="Blue"></rux-option>
//             <rux-option value="green" label="Green"></rux-option>
//         </rux-select>
//         `
//         await page.setContent(template)
//     })
//TODO: Get this working
// test('it emits change event', async ({ page }) => {
//     const select = page.locator('rux-select')
//     const option = select.locator('rux-option').nth(1)
//     const changeEvent = await page.spyOnEvent('ruxchange')
//     await select.click()
//     await option.click({ force: true })
//     await expect(changeEvent).toHaveReceivedEventTimes(1)
// })
// })
