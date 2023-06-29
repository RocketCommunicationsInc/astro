import { test, expect } from '../../../../../tests/utils/_astro-fixtures'

test.describe('Accordion Item reflection', () => {
    test.beforeEach(async ({ page }) => {
        const template = `
			<rux-accordion-item></rux-accordion-item>
		`
        await page.setContent(template)
    })

    test('the disabled property reflects to an attribute', async ({ page }) => {
        const el = page.locator('rux-accordion-item')
        await el.evaluate((accordionItemEl) => {
            ;(accordionItemEl as HTMLRuxAccordionItemElement).disabled = true
        })

        await page.waitForChanges()

        const attr = await el.evaluate((accordionItemEl) => {
            return accordionItemEl.getAttribute('disabled')
        })
        expect(attr).not.toBeNull()
    })

    test('the expanded property reflects to an attribute', async ({ page }) => {
        const el = page.locator('rux-accordion-item')
        await el.evaluate((accordionItemEl) => {
            ;(accordionItemEl as HTMLRuxAccordionItemElement).expanded = true
        })

        await page.waitForChanges()

        const attr = await el.evaluate((accordionItemEl) => {
            return accordionItemEl.getAttribute('expanded')
        })
        expect(attr).not.toBeNull()
    })
})
