const el = require('../login/elements').ELEMENTS
class Login{
    realizarLogin(){
        cy.visit('login')
    }

    preencherFormulario(){
        cy.get(el.inputEmail).type(Cypress.config().user.email)
        cy.get(el.inputSenha).type(Cypress.config().user.senha)
    }

    submeterFormulario(){

        cy.get(el.buttonSubmit).click()

    }
}

export default new Login()