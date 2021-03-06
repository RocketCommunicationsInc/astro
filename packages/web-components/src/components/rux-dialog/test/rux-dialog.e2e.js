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

    it('should display new modal title in the dialog when changed', () => {
        cy.get('rux-modal').then(($modal) => {
            $modal[0].setAttribute('modal-title', 'This is a test title')
        })
        cy.get('rux-modal')
            .shadow()
            .find('.rux-modal__header')
            .contains('This is a test title')
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
            .find('rux-button-group')
            .find('rux-button')
            .next()
            .contains('Test Confirm Text')
    })

    it('should display new deny text in the dialog when changed', () => {
        cy.get('rux-modal').then(($modal) => {
            $modal[0].setAttribute('deny-text', 'Test Deny Text')
        })
        cy.get('rux-modal')
            .shadow()
            .find('rux-button-group')
            .find('rux-button')
            .first()
            .contains('Test Deny Text')
    })

    it('should close the modal when deny clicked', () => {
        cy.get('rux-modal')
            .shadow()
            .find('rux-button-group')
            .find('rux-button')
            .first()
            .click()
        cy.get('rux-modal')
            .shadow()
            .find('.rux-modal__wrapper')
            .should('not.exist')
    })

    it('should close the modal when confirm clicked', () => {
        cy.get('rux-modal')
            .shadow()
            .find('rux-button-group')
            .find('rux-button')
            .next()
            .click()
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
    it('should be able to dynamically add slots', () => {
        cy.get('rux-modal').then(($modal) => {
            $modal[0].setAttribute('open', false)
        })
        cy.get('#dyn').click()
        cy.get('#change').find('.test')
        cy.get('#change')
            .shadow()
            .find('.rux-modal__wrapper')
            .find('dialog')
            .find('.rux-modal__footer')
            .children()
            .should('have.length', '1')
    })
    it('should emit ruxmodalclosed with a detail of false when default deny button is clicked', () => {
        cy.get('rux-modal').then(($modal) => {
            $modal[0].setAttribute('open', true)
        })
        cy.document().invoke(
            'addEventListener',
            'ruxmodalclosed',
            cy.stub().as('ruxmodalclosed')
        )
        cy.get('rux-modal')
            .shadow()
            .find('rux-button-group')
            .find('rux-button')
            .first()
            .click()
        cy.get('@ruxmodalclosed')
            .should('have.been.calledOnce')
            .its('firstCall.args.0.detail')
            .should('deep.equal', false)
    })
    it('should emit ruxmodalclosed with a detail of true when default confirm button is clicked', () => {
        cy.get('rux-modal').then(($modal) => {
            $modal[0].setAttribute('open', true)
        })
        cy.document().invoke(
            'addEventListener',
            'ruxmodalclosed',
            cy.stub().as('ruxmodalclosed')
        )
        cy.get('rux-modal')
            .shadow()
            .find('rux-button-group')
            .find('rux-button')
            .next()
            .click()
        cy.get('@ruxmodalclosed')
            .should('have.been.calledOnce')
            .its('firstCall.args.0.detail')
            .should('deep.equal', true)
    })
})
