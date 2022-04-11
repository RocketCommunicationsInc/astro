describe('Pop up', () => {
    beforeEach(() => {
        cy.visitComponent('rux-pop-up-menu')
    })
    it('renders', () => {
        cy.get('#top').should('have.class', 'hydrated')
    })
    it('opens on trigger click', () => {
        cy.get('#top').find('rux-button').click()
        cy.get('#top').should('have.attr', 'aria-hidden', 'false')
    })
    it('closes on an off click', () => {
        cy.get('#top').find('rux-button').click()
        cy.get('#top').should('have.attr', 'aria-hidden', 'false')
        cy.get('#results').click()
        cy.get('#top').should('have.attr', 'aria-hidden', 'true')
    })
    it('emits values of selected rux-menu-items', () => {
        cy.get('#top').find('rux-button').click()
        cy.get('#top').find('rux-menu rux-menu-item').last().click()
        cy.get('#results').should('have.text', '3')
    })
})
