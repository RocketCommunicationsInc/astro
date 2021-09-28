describe('Button with Form', () => {
    beforeEach(() => {
        cy.visitComponent('rux-button')
    })

    it('renders', () => {
        cy.get('rux-button').should('have.class', 'hydrated')
    })
    it('submits the correct select value when using a form', () => {
        cy.get('rux-button').shadow().find('button').click({ force: true })
        cy.get('#log').contains('myname:mark')
    })
})
