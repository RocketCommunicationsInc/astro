describe('Modal', () => {
    beforeEach(() => {
        cy.visitStory('components-modal--modal')
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

    it('should display new modal title in the dialog when changed', () => {
        cy.get('rux-modal').then(($modal) => {
            $modal[0].setAttribute('modal-title', 'This is a test title')
        })
        cy.get('rux-modal').shadow().find('h1').contains('This is a test title')
    })

    it('should display new modal message in the dialog when changed', () => {
        cy.get('rux-modal').then(($modal) => {
            $modal[0].setAttribute('modal-message', 'This is a test message')
        })
        cy.get('rux-modal')
            .shadow()
            .find('.rux-modal__message')
            .contains('This is a test message')
    })

    it('should display new confirmation text in the dialog when changed', () => {
        cy.get('rux-modal').then(($modal) => {
            $modal[0].setAttribute('confirm-text', 'Test Confirm Text')
        })
        cy.get('rux-modal')
            .shadow()
            .find('[data-value="true"]')
            .contains('Test Confirm Text')
    })

    it('should display new deny text in the dialog when changed', () => {
        cy.get('rux-modal').then(($modal) => {
            $modal[0].setAttribute('deny-text', 'Test Deny Text')
        })
        cy.get('rux-modal')
            .shadow()
            .find('[data-value="false"]')
            .contains('Test Deny Text')
    })

    it('should close the modal when deny clicked', () => {
        cy.get('rux-modal').shadow().find('[data-value="false"]').click()
        cy.get('rux-modal')
            .shadow()
            .find('.rux-modal__wrapper')
            .should('not.exist')
    })

    it('should close the modal when confirm clicked', () => {
        cy.get('rux-modal').shadow().find('[data-value="true"]').click()
        cy.get('rux-modal')
            .shadow()
            .find('.rux-modal__wrapper')
            .should('not.exist')
    })

    it('should close when enter key pressed', () => {
        cy.get('rux-modal').shadow().find('dialog').click()
        cy.get('body').type('{enter}')
        cy.get('rux-modal')
            .shadow()
            .find('.rux-modal__wrapper')
            .should('not.exist')
    })

    it('should close the modal when click occurs outside modal', () => {
        cy.get('rux-modal')
            .shadow()
            .find('.rux-modal__wrapper')
            .click('topLeft')
        cy.get('rux-modal')
            .shadow()
            .find('.rux-modal__wrapper')
            .should('not.exist')
    })
})
