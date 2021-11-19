describe('Notification', () => {
    beforeEach(() => {
        cy.visitComponent('rux-notification')
    })
    it('renders', () => {
        cy.get('rux-notification').should('have.class', 'hydrated')
    })

    it('closes when close icon is clicked', () => {
        const notification = cy.get('rux-notification[data-test-id="default"]')
        notification.should('have.attr', 'open')
        const icon = cy
            .get('rux-notification')
            .first()
            .shadow()
            .find('rux-icon')
        icon.click()
        notification.should('not.have.attr', 'open')
    })
})
