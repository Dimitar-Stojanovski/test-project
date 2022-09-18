/// <reference types = "cypress"/>

let selectCard = '.category-cards div'
let elementCards = '.element-list ul li'
let elementsHeader = '.main-header'
let userForm = '#userForm'
let fullNamePlaceHolder = '[placeholder="Full Name"]'
let emailPlaceHolder = '#userEmail'
let fullNameLabel = '#userName-label'
let emailLabel = '#userEmail-label'
let currentAddressLabel = '#currentAddress-label'
let permanentAddressLabel = '#permanentAddress-label'
let currentAddressPlaceholder = '#currentAddress'
let permanentAddressPlaceholder = '#permanentAddress'
let submitButton ='#submit'
let formAssertion = "//*[contains(@class, 'border col-md-12')]"

export class HomePage{

    selectMenuCard(card){
        cy.get(selectCard).eq(card).click();

    }

    selectElementCardTab(tab){
        cy.get(elementCards).eq(tab).click()
    }

    verifyElementHeader(headerTitle){
        cy.get(elementsHeader).should('have.text', headerTitle)
    }

    assertThePlaceHoldersInTextBox(){
        cy.get(userForm).then(formInputs=>{
            const fullName = formInputs.find(fullNameLabel).text()
            const email = formInputs.find(emailLabel).text()
            const currAddress = formInputs.find(currentAddressLabel).text()
            const perAddress = formInputs.find(permanentAddressLabel).text()
            expect(fullName).to.equal('Full Name')
            expect(email).to.equal('Email')
            expect(currAddress).to.equal('Current Address')
            expect(perAddress).to.equal('Permanent Address')
        })


       
    }
    
    enterUserName(fullName){
        cy.get(fullNamePlaceHolder).type(fullName)
    }

    enterEmailAddress(email){
        cy.get(emailPlaceHolder).type(email)
    }

    enterCurrentAddress(address){
        cy.get(currentAddressPlaceholder).type(address)
    }

    enterPermanentAddress(paddress){
        cy.get(permanentAddressPlaceholder).type(paddress)
    }

    clickOnSubmitButton(){
        cy.get(submitButton).click()
    }

    verifyFormAfterInsertingData(fullName, emailAddress, address1){
        cy.xpath(formAssertion).then(formInputs=>{
            const name = formInputs.find('#name').text()
            const email = formInputs.find('#email').text()
            const permanentAddress= formInputs.find('#permanentAddress').text()
            expect(name).to.equal('Name:'+fullName)
            expect(email).to.equal('Email:'+emailAddress)
            expect(permanentAddress).to.equal('Permananet Address :'+address1)
        })
    }




}

export const homePage = new HomePage()