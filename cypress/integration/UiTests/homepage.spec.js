/// <reference types ="cypress"/>

import { homePage } from "../../support/page_objects/homePage"
import { radioButtons } from "../../support/page_objects/radioButtons"
import { webTables } from "../../support/page_objects/webTables"

describe('Make tests for login Tests',()=>{
    
    beforeEach('navigate to page', ()=>{
        cy.openWebPage()
    })

    it('Should select a card', ()=>{
        homePage.selectMenuCard(0)
        homePage.selectElementCardTab(0)
    })

    it('should populate textbox elements', ()=>{
        homePage.selectMenuCard(0)
        homePage.selectElementCardTab(0)
        homePage.verifyElementHeader('Text Box')
        homePage.assertThePlaceHoldersInTextBox()
        homePage.enterUserName('Dimitar Stojanovski')
        homePage.enterEmailAddress('dimitar@mail.com')
        homePage.enterCurrentAddress('Address')
        homePage.enterPermanentAddress('PermanentAddress')
        homePage.clickOnSubmitButton()
        homePage.verifyFormAfterInsertingData('Dimitar Stojanovski', 'dimitar@mail.com','PermanentAddress')
    })

    it('should check radio buttons',()=>{
        homePage.selectMenuCard(0)
        homePage.selectElementCardTab(2)
        radioButtons.selectYesRadioButton(1);
    })

    it.only('should perform CRUD operations in table',()=>{
        cy.ClickOnMenuCard(0)
        homePage.selectElementCardTab(3)
        webTables.clickOnAddNewRecordBtn()
        webTables.enterFirstName('John')
        webTables.enterLastName('Doe')
        webTables.enterEmail('john.doe@mail.com')
        webTables.enterAge(33)
        webTables.enterSalary(30000)
        webTables.enterDepartment('Quality Assurance Department')
        webTables.clickSubmitBtn()
        webTables.verifyElementsInTable()
    })

    
})