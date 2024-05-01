import { expect, test } from '../../../../tests/utils/_astro-fixtures'

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
    test('it can be focused programatically', async ({ page }) => {
        const template = `
            <rux-select label="Best Thing?" name="bestThing">
                <rux-option label="Select an option" value=""></rux-option>
                <rux-option label="Red" value="red"></rux-option>
                <rux-option value="blue" label="Blue"></rux-option>
            </rux-select>
        `
        await page.setContent(template)
        const el = await page.locator('rux-select')

        let isFocused = await el.evaluate((el) => el === document.activeElement)
        expect(isFocused).toBeFalsy()

        await el.evaluate(async (e) => {
            await (e as HTMLRuxSelectElement).setFocus()
        })

        isFocused = await el.evaluate((el) => el === document.activeElement)
        expect(isFocused).toBeTruthy()
    })
    test('Options that are dynamically added can be synced to select', async ({
        page,
    }) => {
        const template = `
            <rux-select value="flash">
                <rux-option value="" label="Select"></rux-option>
                <rux-option-group label="Group">
                    <rux-option value="flash" label="Flash"></rux-option>
                </rux-option-group>
            </rux-select>
        `
        await page.setContent(template)

        const select = await page.locator('rux-select select')
        await expect(select).toHaveValue('flash')

        // Add Batman to Option Group
        const optionGroupEl = await page.locator('rux-option-group')
        await optionGroupEl.evaluate((el) => {
            const newOption = document.createElement('rux-option')
            newOption.label = 'batman'
            newOption.value = 'batman'
            el.appendChild(newOption)
        })

        await page.waitForChanges()
        await expect(select).toHaveValue('flash')
    })
    test('Options that are dynamically removed can be synced to select', async ({
        page,
    }) => {
        const template = `
        <rux-select value="flash">
        <rux-option value="" label="Select"></rux-option>
        <rux-option-group label="Group">
            <rux-option value="flash" label="Flash"></rux-option>
            <rux-option value="batman" label="Batman"></rux-option>
            <rux-option value="wonder woman" label="Wonder Woman"></rux-option>
        </rux-option-group>
      </rux-select>
      <rux-button>Remove from options</rux-button>
      `
        await page.setContent(template)
        await page.addScriptTag({
            content: `
            const sel = document.querySelector('rux-select')
            const optGroup = document.querySelector('rux-option-group')
            const btn = document.querySelector('rux-button')
            btn.addEventListener('click', () => {
              let options = optGroup.querySelectorAll('rux-option')
              options[options.length - 1].remove()
            })
      `,
        })
        //selected value should be flash
        const sel = page.locator('rux-select select')
        await expect(sel).toHaveValue('flash')
        const btn = page.locator('rux-button')
        //click btn to add more options inside opt group
        await btn.click()
        await page.waitForChanges()
        //selected value should still be flash
        await expect(sel).toHaveValue('flash')
    })
})
/**
 * Select in a form
 */
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
    /**
     * Multi Select
     */
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
            <rux-option label="Red" value="red" id="red"></rux-option>
            <rux-option value="blue" label="Blue" id="blue"></rux-option>
            <rux-option value="green" label="Green" id="green"></rux-option>
        </rux-select>
        <rux-button id="dis-green">Disabled Green Option</rux-button>
        <rux-button id="change-label">Change Label</rux-button>
        <rux-button id="change-value">Change Value</rux-button>
        <script>
          const green = document.getElementById('green')
          const blue = document.getElementById('blue')
          const red = document.getElementById('red')

          const disGreen = document.getElementById('dis-green')
          const changeLabel = document.getElementById('change-label')
          const changeValue = document.getElementById('change-value')

          disGreen.addEventListener('click', () => {
              green.disabled = !green.disabled
          })
          changeLabel.addEventListener('click', () => {
            blue.label = "new label"
          })
          changeValue.addEventListener('click', () => {
            red.value = "new value"
          })
        </script>
      `
        await page.setContent(template)
    })
    test('it should be abel to dynamically disable an option', async ({
        page,
    }) => {
        const disGreen = page.locator('#dis-green')
        const shadowSelect = page.locator('#ruxSelect').locator('select')
        const greenOption = shadowSelect.locator('option').last()

        await page.click('#ruxSelect')
        await shadowSelect.selectOption('green')
        await expect(shadowSelect).toHaveValue('green')
        await disGreen.click()
        await expect(greenOption).toBeDisabled()
    })
    test('it should be able to dynamically change option label', async ({
        page,
    }) => {
        const changeLabel = page.locator('#change-label')
        const shadowSelect = page.locator('#ruxSelect').locator('select')
        const blueOption = shadowSelect.locator('option').nth(2)

        await expect(blueOption).toHaveText('Blue')
        await changeLabel.click()
        await expect(blueOption).toHaveText('new label')
    })
    test('it should be able to dynamically change option value', async ({
        page,
    }) => {
        const changeValue = page.locator('#change-value')
        const shadowSelect = page.locator('#ruxSelect').locator('select')
        const redOption = shadowSelect.locator('option').nth(1)

        await expect(redOption).toHaveAttribute('value', 'red')
        await changeValue.click()
        await expect(redOption).toHaveAttribute('value', 'new value')
    })
})
test.describe(
    'Value changes between a stirng and an array depending on multiple',
    () => {
        test.beforeEach(async ({ page }) => {
            const template = `
    <rux-select multiple label="mult test" id="mult">
      <rux-option value="1" label="1"></rux-option>
      <rux-option value="2" label="2"></rux-option>
    </rux-select>
    <rux-select label="reg" id="reg">
      <rux-option value="1" label="1"></rux-option>
      <rux-option value="2" label="2"></rux-option>
    </rux-select>
    `
            await page.setContent(template)
        })
        test('value is a string in non-multi select', async ({ page }) => {
            const reg = page.locator('#reg')
            const shadowReg = reg.locator('select')
            await page.click('#reg')
            await shadowReg.selectOption('2')
            const val = await reg.evaluate(
                (el: HTMLRuxSelectElement) => el.value
            )
            expect(val).toBe('2')
            expect(typeof val).toBe('string')
        })
        test('value is an array when multiple is true', async ({ page }) => {
            const mult = page.locator('#mult')
            const shadowMult = mult.locator('select')
            await page.click('#mult')
            await shadowMult.selectOption('2')
            const val = await mult.evaluate(
                (el: HTMLRuxSelectElement) => el.value
            )
            expect(typeof val).not.toBe('string')
            expect(val).toHaveLength(1)
        })
    }
)
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
