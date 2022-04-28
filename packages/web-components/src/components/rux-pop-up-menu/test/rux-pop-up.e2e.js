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
    it('should be able to contain a form', () => {
        cy.get('#form-pop').find('rux-icon').click()
        cy.get('#form-pop').should('have.attr', 'open')
        cy.get('#1').shadow().find('input').type('Warrior')
        cy.get('#2').shadow().find('input').type('Of Light')
        cy.get('#submit').click()
        cy.get('#form-test').should('have.text', 'Warrior Of Light')
    })
    it('opens on a show method call', () => {
        cy.get('#toggle').should('not.have.attr', 'open')
        cy.get('#show').click()
        cy.get('#toggle').should('have.attr', 'open')
    })
    it('closes on a hide method call', () => {
        cy.get('#open-def').should('have.attr', 'open')
        cy.get('#hide').click()
        cy.get('#open-def').should('not.have.attr', 'open')
    })
})
