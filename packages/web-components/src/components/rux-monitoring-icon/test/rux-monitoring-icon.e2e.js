describe('Monitoring Icon', () => {
    beforeEach(() => {
        cy.visitComponent('rux-monitoring-icon')
    })
    it('renders', () => {
        cy.get('rux-monitoring-icon').should('have.class', 'hydrated')
    })
})
