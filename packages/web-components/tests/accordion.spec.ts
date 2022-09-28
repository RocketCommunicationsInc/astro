import { test, expect } from '@playwright/test'
import { startTestInBefore, setBodyContent } from './utils/_startTestEnv'

test.describe('Accordion', () => {
    test.beforeEach(async ({ page }) => {
        await startTestInBefore(page)

        await setBodyContent(
            page,
            `
            <div style="width: 300px;">
            <rux-accordion id="accordion-collapsed">
            <rux-accordion-item>
                <div slot="label">Test1</div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque porro odio recusandae aut cupiditate id,
                    voluptatibus illo distinctio, asperiores quas nulla,
                    maiores modi at? Harum quas voluptatem eius illo ex!
                </p>
            </rux-accordion-item>
            <rux-accordion-item>
                <rux-icon slot="prefix" size="auto" icon="apps"></rux-icon>
                <div slot="label">Test2</div>
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
            <rux-accordion-item disabled>
                <rux-icon slot="prefix" size="auto" icon="apps"></rux-icon>
                <div slot="label">
                    this is a really really long title that we're doing over
                    here where it might wrap and stuff this is a really
                    really long title that we're doing over here where it
                    might wrap and stuff
                </div>
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
            <rux-accordion id="accordion1">
            <rux-accordion-item>
                <div slot="label">Test1</div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque porro odio recusandae aut cupiditate id,
                    voluptatibus illo distinctio, asperiores quas nulla,
                    maiores modi at? Harum quas voluptatem eius illo ex!
                </p>
            </rux-accordion-item>
            <rux-accordion-item expanded>
                <rux-icon slot="prefix" size="auto" icon="apps"></rux-icon>
                <div slot="label">Test2</div>
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
            <rux-accordion-item disabled>
                <rux-icon slot="prefix" size="auto" icon="apps"></rux-icon>
                <div slot="label">
                    this is a really really long title that we're doing over
                    here where it might wrap and stuff this is a really
                    really long title that we're doing over here where it
                    might wrap and stuff
                </div>
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
            <rux-accordion-item expanded>
                <div slot="label">
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. A eos impedit tempora labore magnam magni maiores
                    esse unde, praesentium sed eaque ducimus in odit
                </div>
                content in here
            </rux-accordion-item>
            <rux-accordion-item expanded>
                <div slot="label">second one</div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
                eos impedit tempora labore magnam magni maiores esse unde,
                praesentium sed eaque ducimus in odit,</rux-accordion-item
            >
            <rux-accordion-item>
                <div slot="label">third one</div>
                stuff in here
            </rux-accordion-item>
            <rux-accordion-item>
                <div slot="label">
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. A eos impedit tempora labore magnam magni maiores
                    esse unde, praesentium sed eaque ducimus in odit
                </div>
                stuff in here
            </rux-accordion-item>
        </rux-accordion>
        <rux-accordion id="accordion3" disabled>
                <rux-accordion-item>
                    <rux-icon icon="star" size="auto" slot="prefix"></rux-icon>
                    <span slot="label">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. A eos impedit tempora labore magnam magni maiores
                        esse unde, praesentium sed eaque ducimus in odit
                    </span>
                    content in here
                </rux-accordion-item>
                <rux-accordion-item>
                    <rux-status slot="prefix" status="critical"></rux-status>
                    <span slot="label">second one</span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
                    eos impedit tempora labore magnam magni maiores esse unde,
                    praesentium sed eaque ducimus in odit,</rux-accordion-item
                >
                <rux-accordion-item>
                    <h1 slot="label">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. A eos impedit tempora labore magnam magni maiores
                        esse unde, praesentium sed eaque ducimus in odit
                    </h1>
                    stuff in here
                </rux-accordion-item>
                <rux-accordion-item>
                    <div
                        slot="prefix"
                        style="
                            display: flex;
                            justify-content: space-between;
                            width: 40px;
                            align-items: center;
                        "
                    >
                        <rux-icon size="auto" icon="star"></rux-icon
                        ><rux-status status="normal"></rux-status>
                    </div>
                    <div slot="label">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. A eos impedit tempora labore magnam magni maiores
                        esse unde, praesentium sed eaque ducimus in odit
                    </div>
                    stuff in here
                </rux-accordion-item>
            </rux-accordion>
             </div>
             `
        )
    })

    test('it renders', async ({ page }) => {
        const el = page.locator('rux-accordion').first()
        await expect(el).toBeVisible()
        await expect(el).toHaveClass('hydrated')
    })

    //none of them are expanded, none have attribute expanded or open
    test('all are initially collapsed', async ({ page }) => {
        //Arrange
        const accordion1 = page.locator('#accordion-collapsed')
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
        const accordionParagraph = accordionDetails
            .locator('.rux-accordion-item--content')
            .first()

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

    //when expanded, indicator has class of open, when collapsed, does not have class of open'

    test('indicator toggles class open on expand/collapse', async ({
        page,
    }) => {
        //arrange
        const accordionItem = page.locator('rux-accordion-item').first()
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

    //Testing for presence of prefix slot content
    test('when prefix slot has content, wrapping span element loses prefix--hidden class', async ({
        page,
    }) => {
        //Arrange
        const accordion = page.locator('#accordion1')
        const accordionItem1 = accordion.locator('rux-accordion-item').first()
        const accordionItem1SlotWrapper = accordionItem1.locator('span').first()
        const accordionItem2 = accordion.locator('rux-accordion-item').nth(1)
        const accordionItem2SlotWrapper = accordionItem2.locator('span').first()

        //assert
        await expect(accordionItem1SlotWrapper).toHaveClass('prefix--hidden')
        await expect(accordionItem2SlotWrapper).toHaveClass('prefix')
    })

    //If attribute disabled is on rux-accordion-item then that item cannot be interacted with
    test('if rux-accordion-item is disabled it cannot be interacted with', async ({
        page,
    }) => {
        //Arrange
        const accordion = page.locator('#accordion1')
        const accordionChild = accordion.locator('rux-accordion-item').nth(2)

        //Assert
        await expect(accordionChild).toHaveAttribute('disabled', '')

        //Act
        await accordionChild.click({ force: true })

        //Assert
        await accordionChild
            .evaluate((e) => {
                return e.hasAttribute('expanded')
            })
            .then((e) => {
                expect(e).toBeFalsy()
            })
    })

    //If attribute disabled is on rux-accordion then child items cannot be interacted with
    test('if rux-accordion is disabled, all rux-accordion-items are also disabled', async ({
        page,
    }) => {
        //Arrange
        const accordion = page.locator('#accordion3')
        const accordionChild1 = accordion.locator('rux-accordion-item').first()
        const accordionChild2 = accordion.locator('rux-accordion-item').nth(1)

        //Assert
        await expect(accordion).toHaveAttribute('disabled', '')

        //Act
        await accordionChild1.click({ force: true })
        await accordionChild2.click({ force: true })

        //Assert
        await accordionChild1
            .evaluate((e) => {
                return e.hasAttribute('expanded')
            })
            .then((e) => {
                expect(e).toBeFalsy()
            })

        await expect(accordionChild2).toHaveAttribute('expanded', '')
    })

    //If rux-accordion has attribute disallow-multiple, only one child can open at a time. Child will receive expanded, all other children will lose expanded.
    test('if disallow-mutiple on parent, only one child item open at a time', async ({
        page,
    }) => {
        //Arrange
        const accordion = page.locator('#accordion2')
        const accordionChild1 = accordion.locator('rux-accordion-item').first()
        const accordionChild2 = accordion.locator('rux-accordion-item').nth(1)
        const accordionChild2Summary = accordionChild1.locator('summary')

        //Assert
        await expect(accordion).toHaveAttribute('disallow-multiple', '')
        await expect(accordionChild1).toHaveAttribute('expanded', '') //two child items expanded by default
        await expect(accordionChild2).toHaveAttribute('expanded', '')

        //Act
        await accordionChild2Summary.click({ force: true })

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
})
