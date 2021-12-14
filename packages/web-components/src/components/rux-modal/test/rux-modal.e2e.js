describe('Modal', () => {
    beforeEach(() => {
        cy.visitComponent('rux-modal')
    })
    it('renders', () => {
        cy.get('rux-modal').should('have.class', 'hydrated')
    })
    it('should close and open the modal', () => {
        cy.get('rux-modal').then(($modal) => {
            $modal[0].setAttribute('open', false)
        })
        cy.get('rux-modal').then(($modal) => {
            $modal[0].setAttribute('open', true)
        })
        cy.get('rux-modal').shadow().find('.rux-modal__wrapper').should('exist')
    })
    it('should not close on off click if click-to-close if false', () => {
        cy.get('rux-modal')
            .shadow()
            .find('.rux-modal__wrapper')
            .click('topLeft')
        cy.get('rux-modal').shadow().find('.rux-modal__wrapper').should('exist')
    })
    it('should close on off click if click-to-close is true', () => {
        cy.get('rux-modal').then(($modal) => {
            $modal[0].setAttribute('click-to-close', true)
        })
        cy.get('rux-modal')
            .shadow()
            .find('.rux-modal__wrapper')
            .click('topLeft')
        cy.get('rux-modal')
            .shadow()
            .find('.rux-modal__wrapper')
            .should('not.exist')
    })
    it('should fire ruxmodalclosed once if clicked to close', () => {
        let count = 0

        cy.get('rux-modal').then(($modal) => {
            $modal[0].setAttribute('click-to-close', true)
            $modal[0].setAttribute('open', true)
        })
        cy.document().then(($doc) => {
            $doc.addEventListener('ruxmodalclosed', () => {
                count++
            })
        })
        cy.get('rux-modal')
            .shadow()
            .find('.rux-modal__wrapper')
            .click('topLeft')
            .then(() => expect(count).to.equal(1))
    })
    it('should have a footer el if footer slot is used', () => {
        cy.get('rux-modal').then(($modal) => {
            $modal[0].setAttribute('open', false)
            $modal[1].setAttribute('open', true)
        })
        cy.get('#test').shadow().find('footer').should('exist')
    })
})
