import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Tooltip', async () => {
    test('it emits ruxtooltipopened event when open is true', async ({
        page,
    }) => {
        const template = `
                <rux-tooltip message="This is the tooltip">
                  <rux-button id="trigger">Trigger</rux-button>
                </rux-tooltip>
                `
        await page.setContent(template)

        //arrange
        const ruxtooltip = page.locator('rux-tooltip')
        const eventSpy = await page.spyOnEvent('ruxtooltipopened')

        //act
        await ruxtooltip.evaluate((el) => {
            el.setAttribute('open', '')
        })

        //assert
        await expect(ruxtooltip).toHaveAttribute('open', '')
        expect(eventSpy).toHaveReceivedEventTimes(1)
    })
    test('it emits ruxtooltipclosed event when open is removed', async ({
        page,
    }) => {
        const template = `
                <rux-tooltip open message="This is the tooltip">
                  <rux-button id="trigger">Trigger</rux-button>
                </rux-tooltip>`
        await page.setContent(template)

        //arrange
        const ruxtooltip = page.locator('rux-tooltip')
        const eventSpy = await page.spyOnEvent('ruxtooltipclosed')

        //act
        await ruxtooltip.evaluate((el) => {
            el.removeAttribute('open')
        })

        //assert
        await expect(ruxtooltip).not.toHaveAttribute('open', '')
        expect(eventSpy).toHaveReceivedEventTimes(1)
    })
    test('on hover in, open is true', async ({ page }) => {
        const template = `
                <rux-tooltip message="This is the tooltip">
                  <rux-button id="trigger">Trigger</rux-button>
                </rux-tooltip>
                `
        await page.setContent(template)

        //arrange
        const trigger = page.locator('#trigger')
        const ruxtooltip = page.locator('rux-tooltip')

        //act
        await trigger.hover()

        //assert
        await expect(ruxtooltip).toHaveAttribute('open', '')
    })
    test('on hover out, open is false (removed)', async ({ page }) => {
        const template = `
                <rux-tooltip message="This is the tooltip">
                  <rux-button id="trigger">Trigger</rux-button>
                </rux-tooltip>
                `
        await page.setContent(template)

        //arrange
        const trigger = page.locator('#trigger')
        const ruxtooltip = page.locator('rux-tooltip')

        //act
        await trigger.hover()

        //assert
        await expect(ruxtooltip).toHaveAttribute('open', '')

        //act
        await page.mouse.move(0, 100)

        //assert
        await expect(ruxtooltip).not.toHaveAttribute('open', '')
    })
    test('on focus in, open is true', async ({ page }) => {
        const template = `
                <rux-tooltip message="This is the tooltip">
                  <rux-button id="trigger">Trigger</rux-button>
                </rux-tooltip>
                `
        await page.setContent(template)

        //arrange
        const trigger = page.locator('#trigger')
        const ruxtooltip = page.locator('rux-tooltip')

        //act
        await trigger.focus()

        //assert
        await expect(ruxtooltip).toHaveAttribute('open', '')
    })
    test('on focus out, open is false', async ({ page }) => {
        const template = `
                <rux-tooltip message="This is the tooltip">
                  <rux-button id="trigger">Trigger</rux-button>
                </rux-tooltip>
                `
        await page.setContent(template)

        //arrange
        const trigger = page.locator('#trigger')
        const ruxtooltip = page.locator('rux-tooltip')

        //act
        await trigger.focus()

        //assert
        await expect(ruxtooltip).toHaveAttribute('open', '')
        //trigger.blur() <--this was added last month to playwright

        //act
        await trigger.evaluate((e) => e.blur())

        //assert
        await expect(ruxtooltip).not.toHaveAttribute('open', '')
    })
    test('it shows the tooltip if open is true by default', async ({
        page,
    }) => {
        const template = `
              <rux-tooltip open message="This is the tooltip">
                <rux-button id="trigger">Trigger</rux-button>
              </rux-tooltip>`
        await page.setContent(template)

        //arrange
        const ruxTooltip = page.locator('rux-tooltip')
        const tooltipMessage = ruxTooltip.locator('.tooltip')

        //Assert
        await expect(ruxTooltip).toHaveAttribute('open', '')
        await expect(ruxTooltip).not.toHaveClass('hidden')
        await expect(tooltipMessage).toBeVisible()
    })
    test('tooltip is hidden if open is removed', async ({ page }) => {
        const template = `
            <rux-tooltip open message="This is the tooltip">
              <rux-button id="trigger">Trigger</rux-button>
            </rux-tooltip>`
        await page.setContent(template)

        //arrange
        const ruxTooltip = page.locator('rux-tooltip')
        const tooltipMessage = ruxTooltip.locator('.tooltip')

        //assert
        await expect(ruxTooltip).toHaveAttribute('open', '')
        await expect(tooltipMessage).toBeVisible()

        //act
        await ruxTooltip.evaluate((el) => {
            el.removeAttribute('open')
        })

        //assert
        await expect(ruxTooltip).not.toHaveAttribute('open', '')
        await expect(tooltipMessage).not.toBeVisible()
    })
    test('when using method show(), open is set to true', async ({ page }) => {
        const template = `
            <rux-tooltip message="This is the tooltip">
              <rux-button id="trigger">Trigger</rux-button>
            </rux-tooltip>`
        await page.setContent(template)

        //arrange
        const ruxTooltip = page.locator('rux-tooltip')

        //assert
        await expect(ruxTooltip).not.toHaveAttribute('open', '')

        //act
        await ruxTooltip.evaluate((el) => {
            el.show()
        })

        //assert
        await expect(ruxTooltip).toHaveAttribute('open', '')
    })
    test('when using method hide(), open is set to false', async ({ page }) => {
        const template = `
            <rux-tooltip open message="This is the tooltip">
              <rux-button id="trigger">Trigger</rux-button>
            </rux-tooltip>`
        await page.setContent(template)

        //arrange
        const ruxTooltip = page.locator('rux-tooltip')

        //assert
        await expect(ruxTooltip).toHaveAttribute('open', '')

        //act
        await ruxTooltip.evaluate((el) => {
            el.hide()
        })

        //assert
        await expect(ruxTooltip).not.toHaveAttribute('open', '')
    })
    test('it has a set delay on showing tooltip of 2000ms', async ({
        page,
    }) => {
        const template = `
              <rux-tooltip message="This is the tooltip" delay="2000">
                <rux-button id="trigger">Trigger</rux-button>
              </rux-tooltip>
              `
        await page.setContent(template)

        //arrange
        const trigger = page.locator('#trigger')
        const ruxTooltip = page.locator('rux-tooltip')

        //act
        await trigger.hover()

        //assert
        await expect(ruxTooltip).toHaveAttribute('delay', '2000')
        await expect(ruxTooltip).toHaveAttribute('style', '--delay:2000ms;')
    })
    test('it responds to a change in delay after render', async ({ page }) => {
        const template = `
            <rux-tooltip message="This is the tooltip" delay="2000">
              <rux-button id="trigger">Trigger</rux-button>
            </rux-tooltip>
            `
        await page.setContent(template)

        //arrange
        const ruxTooltip = page.locator('rux-tooltip')

        //act
        await ruxTooltip.evaluate((el) => {
            el.setAttribute('delay', '5000')
        })

        //assert
        await expect(ruxTooltip).toHaveAttribute('delay', '5000')
        await expect(ruxTooltip).toHaveAttribute('style', '--delay:5000ms;')
    })
    test('it has a placement attribute', async ({ page }) => {
        const template = `
              <rux-tooltip message="This is the tooltip" placement="top">
                <rux-button id="trigger">Trigger</rux-button>
              </rux-tooltip>
              `
        await page.setContent(template)

        //arrange
        const ruxTooltip = page.locator('rux-tooltip')

        //assert
        await expect(ruxTooltip).toHaveAttribute('placement', 'top')
    })

    test('open attribute reflects', async ({ page }) => {
        const template = `
        <rux-tooltip message="This is the tooltip">
          <rux-button id="trigger">Trigger</rux-button>
        </rux-tooltip>
        `
        await page.setContent(template)

        //arrange
        const ruxTooltip = page.locator('rux-tooltip')
        await ruxTooltip.evaluate(async (el) => {
            //@ts-ignore
            el.open = true
        })

        //assert
        await expect(ruxTooltip).toHaveAttribute('open', '')
    })
})
