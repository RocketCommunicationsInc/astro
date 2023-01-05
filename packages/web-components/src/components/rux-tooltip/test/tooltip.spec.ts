import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Tooltip', async () => {
    // emits opened event on hover in
    // emits closed event on hover out
    // emits opened event on focus in
    // emits closed event on focus out

    // --> emits open event when open attr is true
    // --> emits closed event when closed attr is false
    // --> on hover in, open = true
    // --> on hover out, open = false
    // --> on focus in, open = true
    // --> on focus out, open = false

    // visually places correct placement

    // responds to open default
    // responds to open attr changed after render

    // reponds to method
    // responds to delay
    // offset

    // open attribute reflects

    test('it emits ruxtooltipopened event when open attribute is true', async ({
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
        const trigger = page.locator('#trigger')
        const eventSpy = await page.spyOnEvent('ruxtooltipopened')

        //act
        await trigger.hover()

        //assert
        expect(ruxtooltip).toHaveAttribute('open', '')
        expect(eventSpy).toHaveReceivedEventTimes(1)
    })
    test('it emits ruxtooltipclosed event when open attribute is removed', async ({
        page,
    }) => {
        const template = `
                <rux-tooltip message="This is the tooltip">
                  <rux-button id="trigger">Trigger</rux-button>
                </rux-tooltip>`
        await page.setContent(template)

        //arrange
        const ruxtooltip = page.locator('rux-tooltip')
        const trigger = page.locator('#trigger')
        const eventSpy = await page.spyOnEvent('ruxtooltipclosed')

        //act
        await trigger.hover()

        //assert
        expect(ruxtooltip).toHaveAttribute('open', '')

        //act
        await page.mouse.move(0, 100)

        //assert
        expect(ruxtooltip).not.toHaveAttribute('open', '')
        expect(eventSpy).toHaveReceivedEventTimes(1)
    })
    test('it opens on hover in', async ({ page }) => {
        const template = `
                <rux-tooltip message="This is the tooltip">
                  <rux-button id="trigger">Trigger</rux-button>
                </rux-tooltip>
                `
        await page.setContent(template)
        page.addScriptTag({
            content: `
        document.addEventListener('ruxtooltipopened', () => {
            console.log('opened');
        })`,
        })

        //arrange
        const trigger = page.locator('#trigger')
        const ruxtooltip = page.locator('rux-tooltip')
        const tooltipContainer = ruxtooltip.locator('.tooltip')

        //act
        await trigger.hover()

        //assert
        page.on('console', (msg) => {
            expect(msg.text()).toBe('opened')
            expect(ruxtooltip).toHaveAttribute('open', '')
            expect(tooltipContainer).not.toHaveClass('hidden')
        })
    })
    test('it closes on hover out', async ({ page }) => {
        const template = `
                <rux-tooltip message="This is the tooltip">
                  <rux-button id="trigger">Trigger</rux-button>
                </rux-tooltip>
                `
        await page.setContent(template)
        page.addScriptTag({
            content: `
        document.addEventListener('ruxtooltipopened', () => {
            console.log('opened');
        })`,
        })

        //arrange
        const trigger = page.locator('#trigger')
        const ruxtooltip = page.locator('rux-tooltip')
        const tooltipContainer = ruxtooltip.locator('.tooltip')

        //act
        await trigger.hover()
        await page.mouse.move(0, 100)

        //assert
        page.on('console', (msg) => {
            expect(msg.text()).toBe('closed')
            expect(ruxtooltip).not.toHaveAttribute('open', '')
            expect(tooltipContainer).toHaveClass('hidden')
        })
    })
    test('it opens on focus in', async ({ page }) => {
        const template = `
                <rux-tooltip message="This is the tooltip">
                  <rux-button id="trigger">Trigger</rux-button>
                </rux-tooltip>
                `
        await page.setContent(template)

        //arrange
        const trigger = page.locator('#trigger')
        const ruxtooltip = page.locator('rux-tooltip')
        const tooltipContainer = ruxtooltip.locator('.tooltip')

        //assert
        await expect(tooltipContainer).toHaveClass('tooltip hidden')

        //act
        await trigger.focus()

        //assert
        await expect(ruxtooltip).toHaveAttribute('open', '')
        await expect(tooltipContainer).not.toHaveClass('hidden')
    })
    test('close on focus out', async ({ page }) => {
        const template = `
                <rux-tooltip message="This is the tooltip">
                  <rux-button id="trigger">Trigger</rux-button>
                </rux-tooltip>
                `
        await page.setContent(template)

        //arrange
        const trigger = page.locator('#trigger')
        const ruxtooltip = page.locator('rux-tooltip')
        const tooltipContainer = ruxtooltip.locator('.tooltip')

        //act
        await trigger.focus()

        //assert
        await expect(ruxtooltip).toHaveAttribute('open', '')
        await expect(tooltipContainer).not.toHaveClass('hidden')
        //trigger.blur() <--this was added last month to playwright

        //act
        await trigger.evaluate((e) => e.blur())

        //assert
        await expect(ruxtooltip).not.toHaveAttribute('open', '')
        await expect(tooltipContainer).toHaveClass('tooltip hidden')
    })
    test('it shows the tooltip if open by default', async ({ page }) => {
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
    test('it has a set delay on showing tooltip of 2000ms', async ({
        page,
    }) => {
        const template = `
              <rux-tooltip message="This is the tooltip" delay="2000">
                <rux-button id="trigger">Trigger</rux-button>
              </rux-tooltip>
              `
        await page.setContent(template)
        page.addScriptTag({
            content: `
        document.addEventListener('ruxtooltipopened', () => {
            console.log('opened');
        })
        document.addEventListener('ruxtooltipclosed', () => {
            console.log('closed');
        })`,
        })

        //arrange
        const trigger = page.locator('#trigger')
        const ruxTooltip = page.locator('rux-tooltip')

        //act
        await trigger.hover()

        //assert
        await expect(ruxTooltip).toHaveAttribute('delay', '2000')
        await expect(ruxTooltip).toHaveAttribute(
            'style',
            '--tooltip-delay:2000ms;'
        )
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
})
