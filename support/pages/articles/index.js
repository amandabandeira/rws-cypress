const faker = require('faker')

const el = require('../articles/elements').ELEMENTS 

class Articles{

    acessarFormularioNovaPublicacao(){
        cy.loginBackground()
        cy.get(el.linkNovaPublicacao).click()
    }

    preecherFormulario(){
        cy.get(el.inputTitulo).type('Agilizei title')
        cy.get(el.inputDescricao).type('Cypress')
        cy.get(el.inputTextAreaContent).type(faker.lorem.paragraph())
        cy.get(el.inputTags).type('cypress')
    }

    submeterPublicacao(){
        cy.get(el.buttonSubmit).click()

    }
}

export default new Articles();