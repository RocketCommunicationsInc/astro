describe('Global Status Bar', () => {
    beforeEach(() => {
        cy.visitComponent('rux-global-status-bar')
    })
    it('renders', () => {
        cy.get('rux-global-status-bar').should('have.class', 'hydrated')
    })
})
