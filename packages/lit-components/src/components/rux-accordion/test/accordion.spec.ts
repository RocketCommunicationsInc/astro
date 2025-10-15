import { test, expect } from '../../../../tests/utils/_astro-fixtures'

test.describe('Accordion', () => {
    test('items are collapsed by default', async ({ page }) => {
        const template = `
            <rux-accordion-item>
                <div slot="label">Label</div>
                Content
            </rux-accordion-item>
        `

        await page.setContent(template)
        const el = await page.locator('rux-accordion-item')
        await expect(el).not.toHaveAttribute('expanded', '')

        const details = el.locator('details')
        await expect(details).not.toHaveAttribute('open', '')
    })

    test('expands on click', async ({ page }) => {
        const template = `
            <rux-accordion-item>
                <div slot="label">Label</div>
                <p>Content</p>
            </rux-accordion-item>
        `

        await page.setContent(template)
        const accordionItem = await page.locator('rux-accordion-item')

        await accordionItem.click()

        //assert - once clicked, the item gains expanded which causes details to gain open and the content to be visible
        const accordionDetails = await accordionItem.locator('details')
        const accordionParagraph = await accordionItem.locator('p')
        await expect(accordionItem).toHaveAttribute('expanded', '')
        await expect(accordionDetails).toHaveAttribute('open', '')
        await expect(accordionParagraph).toBeVisible()
    })

    test('indicator toggles class open on expand/collapse', async ({
        page,
    }) => {
        const template = `
                <rux-accordion-item>
                    <div slot="label">Label</div>
                    <p>Content</p>
                </rux-accordion-item>
            `
        await page.setContent(template)
        const accordionItem = await page.locator('rux-accordion-item')
        //arrange
        // const accordionItem = page.firstChild.locator('rux-accordion-item').first()
        const accordionSummary = await accordionItem.locator('summary')
        const accordionIndicator = await accordionItem.locator(
            '.indicator--icon'
        )

        //assert
        await expect(accordionIndicator).toHaveClass('indicator--icon')

        //act
        await accordionItem.click()

        //assert - once clicked the icon adds the class of open
        await expect(accordionIndicator).toHaveClass('indicator--icon open')

        //act
        await accordionSummary.click({ force: true })

        //assert - once clicked the icon removes open class
        await expect(accordionIndicator).toHaveClass('indicator--icon')
    })

    test('expanded item loses expanded and open attribute on click', async ({
        page,
    }) => {
        const template = `
            <rux-accordion-item expanded>
                <div slot="label">Label</div>
                <p>Content</p>
            </rux-accordion-item>
        `

        await page.setContent(template)
        const accordionItem = await page.locator('rux-accordion-item')
        //assert
        await expect(accordionItem).toHaveAttribute('expanded', '')

        //act
        /**
         * Need to target the shadow dom summary since that's where
         * the click handler is. I thought force: true would work,
         * but it doesn't seem to.
         */

        await accordionItem.locator('summary').click({ force: true })

        //assert
        await expect(accordionItem).not.toHaveAttribute('expanded', '')
    })

    test('when there is no content provided, the prefix slot is hidden', async ({
        page,
    }) => {
        const template = `
                <rux-accordion-item>
                    <div slot="label">Label</div>
                    <p>Content</p>
                </rux-accordion-item>
            `
        await page.setContent(template)
        const el = await page.locator('rux-accordion-item')
        await expect(el.locator('span').first()).toHaveClass('prefix--hidden')
    })

    test('when there content is provided, the prefix slot is shown', async ({
        page,
    }) => {
        const template = `
                <rux-accordion-item>
                    <div slot="prefix">Prefix</div>
                    <div slot="label">Label</div>
                    <p>Content</p>
                </rux-accordion-item>
            `
        await page.setContent(template)
        const el = await page.locator('rux-accordion-item')
        await expect(el.locator('span').first()).not.toHaveClass(
            'prefix--hidden'
        )
    })

    test('if rux-accordion-item is disabled it cannot be interacted with', async ({
        page,
    }) => {
        const template = `
                <rux-accordion-item disabled>
                    <div slot="label">Label</div>
                    <p>Content</p>
                </rux-accordion-item>
            `

        await page.setContent(template)
        const el = await page.locator('rux-accordion-item')
        //Act
        await el.click({ force: true })

        //Assert
        await expect(el).not.toHaveAttribute('expanded', '')
    })

    test('if rux-accordion is disabled, all rux-accordion-items are also disabled', async ({
        page,
    }) => {
        const template = `
                <rux-accordion disabled>
                    <rux-accordion-item>
                        <div slot="label">Label</div>
                        <p>Content</p>
                    </rux-accordion-item>
                </rux-accordion>
            `

        await page.setContent(template)
        const accordionEl = await page.locator('rux-accordion')
        const accordionItemEl = await accordionEl.locator('rux-accordion-item')
        await accordionItemEl.click({ force: true })
        await expect(accordionItemEl).not.toHaveAttribute('expanded', '')
    })

    test('if disallow-mutiple on parent, only one child item open at a time', async ({
        page,
    }) => {
        const template = `
                <rux-accordion disallow-multiple>
                    <rux-accordion-item data-id="first">
                        <div slot="label">Label</div>
                        <p>Content</p>
                    </rux-accordion-item>

                    <rux-accordion-item expanded data-id="second">
                        <div slot="label">Label</div>
                        <p>Content</p>
                    </rux-accordion-item>

                </rux-accordion>
            `
        await page.setContent(template)
        const accordionEl = await page.locator('rux-accordion')
        const firstAccordionItem = accordionEl.locator(
            "rux-accordion-item[data-id='first']"
        )
        const secondAccordionItem = accordionEl.locator(
            "rux-accordion-item[data-id='second']"
        )

        await firstAccordionItem.locator('summary').click({ force: true })
        await expect(firstAccordionItem).toHaveAttribute('expanded', '')
        await expect(secondAccordionItem).not.toHaveAttribute('expanded', '')
    })
})
test.describe('Accordion Events', () => {
    test.beforeEach(async ({ page }) => {
        const template = `
    <rux-accordion>
      <rux-accordion-item id="first-item">
        <div slot="label" id="label">Title 1</div>
        <p>Content 1</p>
      </rux-accordion-item>
      <rux-accordion-item>
        <div slot="label">Title 2</div>
        <p>Content 2</p>
      </rux-accordion-item>
      <rux-accordion-item>
        <div slot="label">Title 3</div>
        <p>Content 3</p>
      </rux-accordion-item>
  </rux-accordion>
  `
        await page.setContent(template)
    })
    test('Should emit ruxexpanded event once when accordion-item is opened', async ({
        page,
    }) => {
        const expandedEvent = await page.spyOnEvent('ruxexpanded')
        await page.click('#first-item')
        expect(expandedEvent).toHaveReceivedEventTimes(1)
    })
    test('Should emit ruxcollapsed event once when accordion-item is closed', async ({
        page,
    }) => {
        const collapsedEvent = await page.spyOnEvent('ruxcollapsed')
        await page.click('#first-item')
        await page.click('#label')

        expect(collapsedEvent).toHaveReceivedEventTimes(1)
    })
})

test.describe('Accordion reflection', () => {
    test.beforeEach(async ({ page }) => {
        const template = `
			<rux-accordion></rux-accordion>
		`
        await page.setContent(template)
    })

    test('the disabled property reflects to an attribute', async ({ page }) => {
        const el = page.locator('rux-accordion')
        await el.evaluate((accordionEl) => {
            ;(accordionEl as HTMLRuxAccordionElement).disabled = true
        })

        await page.waitForChanges()

        const attr = await el.evaluate((accordionEl) => {
            return accordionEl.getAttribute('disabled')
        })
        expect(attr).not.toBeNull()
    })

    test('the disallowMultiple property reflects to an attribute', async ({
        page,
    }) => {
        const el = page.locator('rux-accordion')
        await el.evaluate((accordionEl) => {
            ;(accordionEl as HTMLRuxAccordionElement).disallowMultiple = true
        })

        await page.waitForChanges()

        const attr = await el.evaluate((accordionEl) => {
            return accordionEl.getAttribute('disallow-multiple')
        })
        expect(attr).not.toBeNull()
    })
})
