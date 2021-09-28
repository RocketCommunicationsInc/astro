describe('Monitoring Progress Icon', () => {
    beforeEach(() => {
        cy.visitComponent('rux-monitoring-progress-icon')
    })
    it('renders', () => {
        cy.get('rux-monitoring-progress-icon').should('have.class', 'hydrated')
    })
})
