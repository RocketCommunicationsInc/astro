import { test, expect } from './utils/_astro-fixtures'


test.describe('Accordion', () => {

    test('items are collapsed by default', async ({ astroPage }) => {
        const template = `
            <rux-accordion-item>
                <div slot="label">Label</div>
                Content
            </rux-accordion-item>
        `

        const el = await astroPage.load(template)
        await expect(el).not.toHaveAttribute('expanded', '')

        const details = el.locator('details')
        await expect(details).not.toHaveAttribute('open', '')

    })

    test('expands on click', async ({ astroPage }) => {
        const template = `
            <rux-accordion-item>
                <div slot="label">Label</div>
                <p>Content</p>
            </rux-accordion-item>
        `

        const accordionItem = await astroPage.load(template)

        await accordionItem.click()

        //assert - once clicked, the item gains expanded which causes details to gain open and the content to be visible
        const accordionDetails = accordionItem.locator('details')
        const accordionParagraph = accordionItem.locator('p')
        await expect(accordionItem).toHaveAttribute('expanded', '')
        await expect(accordionDetails).toHaveAttribute('open', '')
        await expect(accordionParagraph).toBeVisible()
    })

    test('indicator toggles class open on expand/collapse', async ({ astroPage }) => {
        const template = `
                <rux-accordion-item>
                    <div slot="label">Label</div>
                    <p>Content</p>
                </rux-accordion-item>
            `
        const accordionItem = await astroPage.load(template)
        //arrange
        // const accordionItem = astroPage.firstChild.locator('rux-accordion-item').first()
        const accordionSummary = accordionItem.locator('summary')
        const accordionIndicator = accordionItem.locator('.indicator--icon')

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

    
 
    test('expanded item loses expanded and open attribute on click', async ({ astroPage }) => {
        const template = `
            <rux-accordion-item expanded>
                <div slot="label">Label</div>
                <p>Content</p>
            </rux-accordion-item>
        `

        const accordionItem = await astroPage.load(template)
                //assert
            await expect(accordionItem).toHaveAttribute('expanded', '')
    
            //act
            /**
             * Need to target the shadow dom summary since that's where 
             * the click handler is. I thought force: true would work,
             * but it doesn't seem to.
             */
            
            await accordionItem.locator('summary').click({ force: true})
    
            //assert
            await expect(accordionItem).not.toHaveAttribute('expanded', '')
        
        })
            
    
        test('when there is no content provided, the prefix slot is hidden', async ({astroPage}) => {
            const template = `
                <rux-accordion-item>
                    <div slot="label">Label</div>
                    <p>Content</p>
                </rux-accordion-item>
            `
            const el = await astroPage.load(template)
            await expect(el.locator('span').first()).toHaveClass('prefix--hidden')

        })

        test('when there content is provided, the prefix slot is shown', async ({astroPage}) => {
            const template = `
                <rux-accordion-item>
                    <div slot="prefix">Prefix</div>
                    <div slot="label">Label</div>
                    <p>Content</p>
                </rux-accordion-item>
            `
            const el = await astroPage.load(template)
            await expect(el.locator('span').first()).not.toHaveClass('prefix--hidden')

        })

        test('if rux-accordion-item is disabled it cannot be interacted with', async ({ astroPage }) => {
            const template = `
                <rux-accordion-item disabled>
                    <div slot="label">Label</div>
                    <p>Content</p>
                </rux-accordion-item>
            `

            const el = await astroPage.load(template)
    
            //Act
            await el.click({ force: true })
    
            //Assert
            await expect(el).not.toHaveAttribute('expanded', '')
        })

        test('if rux-accordion is disabled, all rux-accordion-items are also disabled', async ({ astroPage }) => {
            const template = `
                <rux-accordion disabled>
                    <rux-accordion-item>
                        <div slot="label">Label</div>
                        <p>Content</p>
                    </rux-accordion-item>
                </rux-accordion>
            `

            const accordionEl = await astroPage.load(template)
            await accordionEl.evaluate( async (el) => {
                //@ts-ignore
                await el.componentOnReady()
            })
            const accordionItemEl = accordionEl.locator('rux-accordion-item');
            await accordionItemEl.click({force: true})
            await expect(accordionItemEl).not.toHaveAttribute('expanded', '')

        })

        test('if disallow-mutiple on parent, only one child item open at a time', async ({ astroPage }) => {
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
            const accordionEl = await astroPage.load(template)
            const firstAccordionItem = accordionEl.locator("rux-accordion-item[data-id='first']")
            const secondAccordionItem = accordionEl.locator("rux-accordion-item[data-id='second']")
    
            await firstAccordionItem.locator('summary').click({ force: true })
            await expect(firstAccordionItem).toHaveAttribute('expanded','')
            await expect(secondAccordionItem).not.toHaveAttribute('expanded','')
    
        })
})