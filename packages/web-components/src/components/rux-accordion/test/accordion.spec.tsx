import { test, expect } from '@playwright/test'
import { startTestInBefore, setBodyContent } from './utils/_startTestEnv'

test.describe('Accordion', () => {
    test.beforeEach(async ({ page }) => {
        await startTestInBefore(page)

        await setBodyContent(
            page,
            `<div style="width: 300px;">
                <rux-accordion label="myAccordion" truncated id="accordion1">
                    <rux-accordion-item label="Test1" icon-left="apps">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Atque porro odio recusandae aut cupiditate id,
                            voluptatibus illo distinctio, asperiores quas nulla,
                            maiores modi at? Harum quas voluptatem eius illo ex!
                        </p>
                    </rux-accordion-item>
                    <rux-accordion-item label="Test2" icon-left="star">
                        <form id="form">
                            <rux-input
                                id="ruxInput"
                                name="ruxInput"
                                label="Input Field"
                            ></rux-input>
                            <p>Add all the things!</p>
                            <rux-checkbox-group>
                                <rux-checkbox>one</rux-checkbox>
                                <rux-checkbox>two</rux-checkbox>
                                <rux-checkbox>three</rux-checkbox>
                            </rux-checkbox-group>
                        </form>
                    </rux-accordion-item>
                    <rux-accordion-item
                        label="this is a really really long title that we're doing over here where it might wrap and stuff this is a really really long title that we're doing over here where it might wrap and stuff"
                        icon="apps"
                        disabled
                    >
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Repellendus assumenda adipisci error quas dolore nulla
                            reiciendis soluta praesentium excepturi pariatur ipsum,
                            eos provident sed, quisquam doloremque labore tenetur
                            consequuntur numquam!
                        </p>
                        <img
                            src="https://www.rd.com/wp-content/uploads/2021/04/GettyImages-138468381-scaled-e1619028416767.jpg"
                            alt="KITTIES!"
                            style="width: 80%; margin: 10px auto"
                        />
                    </rux-accordion-item>
                </rux-accordion>

                <rux-accordion disallow-multiple id="accordion2">
                    <rux-accordion-item
                        label="Lorem, ipsum dolor sit amet consectetur adipisicing elit. A eos impedit tempora labore magnam magni maiores esse unde, praesentium sed eaque ducimus in odit,"
                        expanded
                        >content in here
                    </rux-accordion-item>
                    <rux-accordion-item expanded label="second one"
                        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
                        eos impedit tempora labore magnam magni maiores esse unde,
                        praesentium sed eaque ducimus in odit,</rux-accordion-item
                    >
                    <rux-accordion-item label="third one"
                        >stuff in here</rux-accordion-item
                    >
                    <rux-accordion-item
                        icon-left="star"
                        truncated
                        label="Lorem, ipsum dolor sit amet consectetur adipisicing elit. A eos impedit tempora labore magnam magni maiores esse unde, praesentium sed eaque ducimus in odit,
                    "
                        >stuff in here</rux-accordion-item
                    >
                </rux-accordion>
                <rux-accordion disabled id="accordion3">
                    <rux-accordion-item
                        label="Lorem, ipsum dolor sit amet consectetur adipisicing elit. A eos impedit tempora labore magnam magni maiores esse unde, praesentium sed eaque ducimus in odit,"
                        >content in here
                    </rux-accordion-item>
                    <rux-accordion-item expanded label="second one"
                        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
                        eos impedit tempora labore magnam magni maiores esse unde,
                        praesentium sed eaque ducimus in odit,</rux-accordion-item
                    >
                </rux-accordion>
             </div>`
        )
    })
})

test('it renders', async ({ page }) => {
    const el = page.locator('rux-accordion').first()
    await expect(el).toBeVisible()
    await expect(el).toHaveClass('hydrated')
})

//none of them are expanded, none have attribute expanded or open
test('all are initially collapsed', async ({ page }) => {
    //Arrange
    const accordion1 = page.locator('#accordion1')
    const child1 = accordion1.locator('rux-accordion-item').nth(0)
    const child2 = accordion1.locator('rux-accordion-item').nth(1)
    const child3 = accordion1.locator('rux-accordion-item').nth(2)
    const details1 = child1.locator('details').first()

    //Assert
    await child1
        .evaluate((e) => {
            return e.hasAttribute('expanded')
        })
        .then((e) => {
            expect(e).toBeFalsy()
        })

    await details1
        .evaluate((e) => {
            return e.hasAttribute('open')
        })
        .then((e) => {
            expect(e).toBeFalsy()
        })

    await child2
        .evaluate((e) => {
            return e.hasAttribute('expanded')
        })
        .then((e) => {
            expect(e).toBeFalsy()
        })

    await child3
        .evaluate((e) => {
            return e.hasAttribute('expanded')
        })
        .then((e) => {
            expect(e).toBeFalsy()
        })
})

//when you click one, it expands, it gets the attribute open and expanded, if there is content, the content is visible
test('expands on click', async ({ page }) => {
    //arrange
    const accordionItem = page.locator('rux-accordion-item').first()
    const accordionDetails = accordionItem.locator('details')
    const accordionParagraph = accordionDetails.locator('p').first()

    //assert - in the beginning the item should not have expanded attribut
    await accordionItem
        .evaluate((e) => {
            return e.hasAttribute('expanded')
        })
        .then((e) => {
            expect(e).toBeFalsy()
        })

    //act
    await accordionItem.click()

    //assert - once clicked, the item gains expanded which causes details to gain open and the content to be visible
    await expect(accordionItem).toHaveAttribute('expanded', '')
    await expect(accordionDetails).toHaveAttribute('open', '')
    await expect(accordionParagraph).toBeVisible()
})

//when expanded, indicator = 'keyboard-arrow-up', when collapsed indicator = 'keyboard-arrow-down'

test('indicator changes on open/close', async ({ page }) => {
    //arrange
    const accordionItem = page.locator('rux-accordion-item').first()
    const accordionIndicator = accordionItem.locator('.indicator')

    //assert - initial state is keyboard arrow down
    await expect(accordionIndicator).toHaveAttribute(
        'icon',
        'keyboard-arrow-down'
    )

    //act
    await accordionItem.click()

    //assert - once clicked the icon prop becomes keyboard-arrow-up
    await expect(accordionIndicator).toHaveAttribute(
        'icon',
        'keyboard-arrow-up'
    )
})

//when it is expanded, and it is clicked it should lose the attributes open and expanded, and close, the expanded content should not be visible

test('expanded item loses expanded and open attribute on click', async ({
    page,
}) => {
    //arrange
    const accordion = page.locator('#accordion2')
    const accordionItem = accordion.locator('rux-accordion-item').first()
    const accordionDetails = accordionItem.locator('details')

    //assert
    await expect(accordionItem).toHaveAttribute('expanded', '')
    await expect(accordionDetails).toHaveAttribute('open', '')

    //act
    await accordionItem.click()

    //assert
    await accordionItem
        .evaluate((e) => {
            return e.hasAttribute('expanded')
        })
        .then((e) => {
            expect(e).toBeFalsy()
        })

    await accordionDetails
        .evaluate((e) => {
            return e.hasAttribute('open')
        })
        .then((e) => {
            expect(e).toBeFalsy()
        })
})

//When a sub-item has the attribute 'truncated' the summary title has ellipsis.

test('ellipsis when child is truncated', async ({ page }) => {
    const accordion = page.locator('#accordion1')
    const accordionTruncatedItem = accordion
        .locator('rux-accordion-item')
        .nth(2)
    const accordionTruncatedTitle = accordionTruncatedItem
        .locator('div')
        .first()

    //assert
    await expect(accordionTruncatedItem).toHaveAttribute('truncated', '')
    await expect(accordionTruncatedTitle).toHaveClass(
        'rux-accordion-item--title--truncated'
    )
})

//When a parent item has the attribute truncated the child items all have ellipsis in summary title, unless truncated=false OR title is not long enough

test('ellipsis when parent is truncated', async ({ page }) => {
    const accordion = page.locator('#accordion2')
    const accordionTruncatedItem = accordion
        .locator('rux-accordion-item')
        .nth(0)
    const accordionTruncatedItem2 = accordion
        .locator('rux-accordion-item')
        .nth(1)
    const accordionTruncatedTitle = accordionTruncatedItem.locator('div').nth(0)
    const accordionTruncatedTitle2 = accordionTruncatedItem2
        .locator('div')
        .nth(1)

    //assert
    await expect(accordionTruncatedTitle).toHaveClass(
        'rux-accordion-item--title--truncated'
    )
    await expect(accordionTruncatedTitle2).toHaveClass(
        'rux-accordion-item--title--truncated'
    )
})

//If rux-accordion-item has icon prop then that icon renders
test('when icon-left prop exists, an icon is rendered', async ({ page }) => {
    const accordion = page.locator('#accordion1')
    const accordionItem = accordion.locator('rux-accordion-item').first()
    const accordionItemIcon = accordionItem.locator('rux-icon').first()

    //assert
    await expect(accordionItem).toHaveAttribute('icon-left', 'apps')
    await expect(accordionItemIcon).toBeVisible()
    await expect(accordionItemIcon).toHaveAttribute('icon', 'apps')
})

//If attribute disabled is on rux-accordion-item then that item cannot be interacted with

//If attribute disabled is on rux-accordion then child items cannot be interacted with
test('if rux-accordion is disabled, all rux-accordion-items are also disabled', async ({
    page,
}) => {
    //Arrange
    const accordion = page.locator('#accordion3')
    const accordionChild1 = accordion.locator('rux-accordion-item').first()
    const accordionChild2 = accordion.locator('rux-accordion-item').nth(1)

    //Assert
    await expect(accordion).toBeDisabled()
    await expect(accordionChild1).toBeDisabled()
    await expect(accordionChild2).toBeDisabled()

    //Act
    await accordionChild1.click()
    await accordionChild2.click()

    //Assert
    await accordionChild1
        .evaluate((e) => {
            return e.hasAttribute('expanded')
        })
        .then((e) => {
            expect(e).toBeFalsy()
        })

    await accordionChild2
        .evaluate((e) => {
            return e.hasAttribute('expanded')
        })
        .then((e) => {
            expect(e).toBeFalsy()
        })
})

//If rux-accordion has attribute disallow-multiple, only one child can open at a time. Child will receive expanded, all other children will lose expanded.
test('if disallow-mutiple on parent, only one child item open at a time', async ({
    page,
}) => {
    //Arrange
    const accordion = page.locator('#accordion2')
    const accordionChild1 = accordion.locator('rux-accordion-item').first()
    const accordionChild2 = accordion.locator('rux-accordion-item').nth(1)

    //Assert
    await expect(accordion).toHaveAttribute('disallow-multiple', '')
    await expect(accordionChild1).toHaveAttribute('expanded', '') //two child items expanded by default
    await expect(accordionChild2).toHaveAttribute('expanded', '')

    //Act
    await accordionChild2.click()

    //Assert
    //When one child item is clicked, they should both close
    await accordionChild1
        .evaluate((e) => {
            return e.hasAttribute('expanded')
        })
        .then((e) => {
            expect(e).toBeFalsy()
        })

    await accordionChild2
        .evaluate((e) => {
            return e.hasAttribute('expanded')
        })
        .then((e) => {
            expect(e).toBeFalsy()
        })

    //Now all children should be closed

    //Act
    await accordionChild1.click()

    //Assert
    //Click on child one should open it
    await expect(accordionChild1).toHaveAttribute('expanded', '')

    //Act
    await accordionChild2.click()

    //Assert
    //clicking on child two should open child 2 and close child 1
    await expect(accordionChild2).toHaveAttribute('expanded', '')
    await accordionChild1
        .evaluate((e) => {
            return e.hasAttribute('expanded')
        })
        .then((e) => {
            expect(e).toBeFalsy()
        })
})
