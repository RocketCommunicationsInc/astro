describe('Notification', () => {
    beforeEach(() => {
        cy.visitStory('components-notification--default-story')
    })
    it('renders', () => {
        cy.get('rux-notification').should('have.class', 'hydrated')
    })

    //   it('closes after time is up', async () => {
    //     const page = await newE2EPage()
    //     await page.setContent(
    //         '<rux-notification open close-after="3000" status="caution" message="testing time"></rux-notification>'
    //     )
    //     const el = await page.find('rux-notification')
    //     //Wait for notification time limit to be up before checking open attr
    //     setTimeout(() => expect(el).not.toHaveAttribute('open'), 3001)
    // })
    // it('does not close before time is up', async () => {
    //     const page = await newE2EPage()
    //     await page.setContent(
    //         '<rux-notification open close-after="3000" status="caution" message="testing time"></rux-notification>'
    //     )
    //     const el = await page.find('rux-notification')
    //     //Checking open attr right before time is up to make sure it doesn't close a ms too early
    //     setTimeout(() => expect(el).toHaveAttribute('open'), 2999)
    // })
})
