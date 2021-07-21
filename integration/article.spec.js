/// <reference types="cypress"/>    

const faker = require('faker')
import articles from '../support/pages/articles/index'

context('Publicação',()=>{

  it('Faz login',()=>{
    cy.loginBackground()
    articles.acessarFormularioNovaPublicacao()  
});
 
    it('Criar uma nova publicação',()=>{
       // processo de login em background
       // 1- realizar uma reuisicao do tipo post com email e senha
       // 2- capturar o token que e recebido da nossa requisicao
       // 3-usar o token reebido para salvar no localstorage 
       articles.preecherFormulario()

       cy.intercept('POST','**/api/articles').as('postArticle'); 
       cy.intercept('GET','**/api/tags').as('getArticle'); 

      articles.submeterPublicacao()
      cy.wait('@postArticle').its('response.statusCode').should('eq', 401)   
      cy.wait('@getArticle').its('response.statusCode').should('eq', 200)   

   });
    });
   
