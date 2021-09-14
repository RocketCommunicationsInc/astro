describe('Select', () => {
    beforeEach(() => {
        cy.visitStory('components-select-menu--select-menu')
    })

    it('renders', () => {
        cy.get('rux-select').should('have.class', 'hydrated')
    })

    it('syncs value to select element', () => {
        cy.get('rux-select').invoke('prop', 'value', '1.1')
        cy.get('select').should('have.value', '1.1')
    })

    it('syncs value from select element', () => {
        cy.get('select').select('2.4')
        cy.get('rux-select').should('have.value', '2.4')
    })
})
